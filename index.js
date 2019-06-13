var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var os      = require('os');

var app = express();


console.log('test2');
app.get('', function(req, res) {
  console.log('test');

  url = 'https://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg';

  request(url, function(error, response, html) {
    if(!error) {
      var $ = cheerio.load(html);

      $("a").filter(function(element) {
        var data = $(this);


      })

    }

    // for (var n = 0; n < jobtitle.length; n++) {
    //   console.log(jobtitle[n] + " :: " + company[n] + " :: " + location[n] + "\n");
    //   res.write(jobtitle[n] + " :: " + company[n] + " :: " + location[n] + "\n\n");
    // }
    //
    // res.write("\n\n\n\n\n" + "Switch to the tab that says 'localhost:5000', hard refresh the page by pressing command + shift + r, and clicks 'Go' to run the program.")

    // fs.writeFile('./static/js/output.json', JSON.stringify(json, null, 4), function(err){
    //   console.log('Now open the tab that says "localhost:5000" and press command + shift + r to hard refresh it. Afterwards click the button.');
    // })

    res.write('test');

  })
})
console.log('test3');
app.listen(8000);
exports = module.exports = app;
