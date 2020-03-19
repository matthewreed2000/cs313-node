function getPerson() {
  let id = document.getElementById('id').value;
  let content = document.getElementById('content');

  sendIdRequest('getPerson', id, function(res) {
    content.innerHTML = res.responseText;
  });
}

function getChildren() {
  let id = document.getElementById('id').value;
  let content = document.getElementById('content');

  // let output = '';
  content.innerHTML = '';

  sendIdRequest('getChildren', id, function(res) {
    // content.innerHTML = res.responseText;
    list = JSON.parse(res.responseText);
    list.forEach(relation => {
      // console.log(child.child_id);
      sendIdRequest('getPerson', relation.child_id, function(res2) {
        let child = JSON.parse(res2.responseText)[0];
        content.innerHTML += child.first_name + ' ' + child.last_name + '<br>';
      });
    });
  });
}

function getParents() {
  let id = document.getElementById('id').value;
  let content = document.getElementById('content');

  // let output = '';
  content.innerHTML = '';

  sendIdRequest('getParents', id, function(res) {
    list = JSON.parse(res.responseText);
    list.forEach(relation => {
      sendIdRequest('getPerson', relation.parent_id, function(res2) {
        let parent = JSON.parse(res2.responseText)[0];
        content.innerHTML += parent.first_name + ' ' + parent.last_name + '<br>';
      });
    });
  });
}

function sendIdRequest(url, id, successCallback) {
  let xhttp = new XMLHttpRequest;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      successCallback(this);
    }
  };
  xhttp.open("GET", url + "?id=" + id, true);
  xhttp.send();
}