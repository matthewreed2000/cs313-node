'use strict'

function run(req, res) {
  let returnObj = {error:true};

  if (Object.keys(req.query).length) {
    if ((typeof req.query.weight !== 'undefined')
      && (typeof req.query.letter_type !== 'undefined')) {
      // No immediate errors found
      returnObj.error = false;

      // Get weight
      if (!isNaN(Number(req.query.weight))) {
        returnObj.weight = (req.query.weight > 0) ? Number(req.query.weight) : 0;
      }
      else {
        returnObj.weight = 0;
      }

      // Get letter type and rate
      returnObj.rate = 0;
      switch (req.query.letter_type) {
        case 'ls':
          returnObj.letter_type = 'Letters (Stamped)';

          if      (returnObj.weight <= 1)   returnObj.rate = 0.55;
          else if (returnObj.weight <= 2)   returnObj.rate = 0.75;
          else if (returnObj.weight <= 3)   returnObj.rate = 0.85;
          else if (returnObj.weight <= 3.5) returnObj.rate = 1.00;

          // If all else failed, it's an invalid weight
          else returnObj.weight = 0;

          break;
        case 'lm':
          returnObj.letter_type = 'Letters (Metered)';

          if      (returnObj.weight <= 1)   returnObj.rate = 0.50;
          else if (returnObj.weight <= 2)   returnObj.rate = 0.65;
          else if (returnObj.weight <= 3)   returnObj.rate = 0.80;
          else if (returnObj.weight <= 3.5) returnObj.rate = 0.95;

          // If all else failed, it's an invalid weight
          else returnObj.weight = 0;

          break;
        case 'le':
          returnObj.letter_type = 'Large Envelopes (Flats)';

          if      (returnObj.weight <= 1)  returnObj.rate = 1.00;
          else if (returnObj.weight <= 2)  returnObj.rate = 1.20;
          else if (returnObj.weight <= 3)  returnObj.rate = 1.40;
          else if (returnObj.weight <= 4)  returnObj.rate = 1.60;
          else if (returnObj.weight <= 5)  returnObj.rate = 1.80;
          else if (returnObj.weight <= 6)  returnObj.rate = 2.00;
          else if (returnObj.weight <= 7)  returnObj.rate = 2.20;
          else if (returnObj.weight <= 8)  returnObj.rate = 2.40;
          else if (returnObj.weight <= 9)  returnObj.rate = 2.60;
          else if (returnObj.weight <= 10) returnObj.rate = 2.80;
          else if (returnObj.weight <= 11) returnObj.rate = 3.00;
          else if (returnObj.weight <= 12) returnObj.rate = 3.20;
          else if (returnObj.weight <= 13) returnObj.rate = 3.40;

          // If all else failed, it's an invalid weight
          else returnObj.weight = 0;

          break;
        case 'pfc':
          returnObj.letter_type = 'First-Class Package Service - Retail';

          // Zone 1 & 2
          if      (returnObj.weight <= 1)  returnObj.rate = 3.80;
          else if (returnObj.weight <= 2)  returnObj.rate = 3.80;
          else if (returnObj.weight <= 3)  returnObj.rate = 3.80;
          else if (returnObj.weight <= 4)  returnObj.rate = 3.80;
          else if (returnObj.weight <= 5)  returnObj.rate = 4.60;
          else if (returnObj.weight <= 6)  returnObj.rate = 4.60;
          else if (returnObj.weight <= 7)  returnObj.rate = 4.60;
          else if (returnObj.weight <= 8)  returnObj.rate = 4.60;
          else if (returnObj.weight <= 9)  returnObj.rate = 5.30;
          else if (returnObj.weight <= 10) returnObj.rate = 5.30;
          else if (returnObj.weight <= 11) returnObj.rate = 5.30;
          else if (returnObj.weight <= 12) returnObj.rate = 5.30;
          else if (returnObj.weight <= 13) returnObj.rate = 5.90;

          // If all else failed, it's an invalid weight
          else returnObj.weight = 0;

          break;
        default:
          returnObj.error = true;
      }

      // Calculate price
      returnObj.price = returnObj.weight * returnObj.rate;
    }
  }

  res.render('pages/week09/calculator', returnObj);
}

module.exports = {run};