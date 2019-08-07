const express = require('express');
const db = require('./database/index')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./client/dist'));

app.get('/sponsored', function (req, res) {
  db.getAllProducts((err, shoes) => {
    if (err) { console.log(err); return; }
      res.send(shoes);
  });
});
  
  app.listen(3333, function() {
    console.log('listening on port 3333!');
  });