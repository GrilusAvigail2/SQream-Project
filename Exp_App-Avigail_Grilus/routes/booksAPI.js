var express = require('express');
var router = express.Router();
var axios = require('axios');

// GET list of books
router.get('/', function(req, res, next) {
  axios.get('https://gutendex.com/books')
  .then(function (response) {
    console.log(response);
    let ar_books = response.data.results;
    res.send(ar_books);
  })
  .catch(function (error) {
    console.log(error);
  })
});

//GET books filter by topic
router.get('/:query', function(req, res, next) {
  axios.get('https://gutendex.com/books?topic='+req.params.query)
  .then(function (response) {
    console.log(response);
    let ar_books = response.data.results;
    res.send(ar_books);
  })
  .catch(function (error) {
    console.log(error);
  })
});


//GET book filter by id 
router.get('/:id', function(req, res, next) {
  axios.get('https://gutendex.com/books?ids='+req.params.id)
  .then(function (response) {
    console.log(response);
    let book = response.data.results;
    res.send(book);
  })
  .catch(function (error) {
    console.log(error);
  })
});

module.exports = router;
