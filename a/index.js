const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send(`Hello app A i'm modified!`);
});

const port = process.env.PORT || 3000; // run web service on Heroku
app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});
