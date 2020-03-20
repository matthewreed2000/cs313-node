function searchMovie(e) {
  e.preventDefault();

  let textIn = document.getElementById('textIn');
  console.log(textIn.value);

  let content = document.getElementById('content');

  let url = "http://www.omdbapi.com/?apikey=370204ad&s=" + textIn.value;

  let createTableEntry = function(obj) {
    // console.log(obj.Title);

    let output = '<tr>';
    output += '<td>'
    output += obj.Title;
    output += '</td>'
    output += '<td onclick="getInfo(\'' + obj.imdbID + '\');">'
    output += 'Get Info';
    output += '</td>'
    output += '</tr>';

    // console.log(output);

    return output;
  };

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      if (obj.Search) {
        content.innerHTML = '<table></table>';
        obj.Search.forEach(child => {
          content.getElementsByTagName('table')[0].innerHTML += createTableEntry(child);
        });
      }
      else {
        content.innerHTML = '<p>' + obj.Error + '</p>';
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function getInfo(imdbID) {
  let content = document.getElementById('content');

  let url = "http://www.omdbapi.com/?apikey=370204ad&i=" + imdbID;

  let createContentEntry = function(obj) {
    // console.log(obj.Title);

    let output = '<h1>';
    output += obj.Title;
    output += ' (' + obj.Year + ')';
    output += '</h1>';
    output += '<h2>Rated: ' + obj.Rated + '</h2>';
    output += '<img src="';
    output += obj.Poster;
    output += '" alt="Poster Image">';
    output += '<p>' + obj.Plot + '</p>'
    output += '<h2>Reviews: ' + obj.imdbRating + '/10</h2>'

    // console.log(output);

    return output;
  };

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      content.innerHTML = createContentEntry(obj);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

document.getElementById("buttonIn").addEventListener("click", searchMovie);
document.getElementById("theForm").addEventListener("submit", searchMovie)