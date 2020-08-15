const express = require('express');
const bodyParser = require('body-parser');
const mongoModel = require('../database/index');
const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

//REMEMBER TO FIX FIND ONE BELOW!!!!!!!!!!!!
app.get('/api/mediaData/:id', (req, res) => {
  let id = req.params.id
  mongoModel.GameModel.findOne({id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log('ERROR in get request: ', err);
      res.status(500).send('ERROR');
    });
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`SERVER RUNNING ON: ${port}`);
});
