let express = require('express');
let bodyParser = require('body-parser');

let routes = require('./routes/');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', routes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


module.exports = app; // for testing
