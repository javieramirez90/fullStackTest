var express = require('express');
var router = express.Router();

const userInteraction = require('../models/User');

/* GET Phones listing. */


//get phone
router.get('/queries', (req, res) => {
  // res.send('phone')
  userInteraction.find()
      .then(queriesRequest => {
          return res.status(200).json(queriesRequest); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});


// router.get('/queries', (req, res, next) => {
//   userInteraction.find(queriesRequest)
//   .then(queriesRequest => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//     res.json(queriesRequest);
//   })
//   .catch(error => next(error))
// });

/* CREATE a new Phone. */
router.post('/queries', (req, res, next) => {
  const theQuery = new userInteraction({
    apiQuestion: req.body.apiQuestion,
    apiAnswers: req.body.apiAnswers,
  });

  theQuery.save()
  .then(theQuery => {
    res.json({
      message: 'New query made!',
      id: theQuery._id
    });
  })
  .catch(error => next(error))
});

// router.delete('/queries', (req, res, next) => {

//   userInteraction.remove({ _id: req.params.id })
//   .then(message => {
//     return res.json({
//       message: 'Phone has been removed!'
//     });
//   })
//   .catch(error => next(error))
// });


module.exports = router;