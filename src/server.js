import os from 'os';
import express from 'express';

const port = process.env.HTTP_PORT || 5000;
const app = express();

let numVisits = 0;
app.get('/', function (req, res) {
  res.send(os.hostname() + ': Number of visits is: ' + numVisits + '.');
  numVisits++;
});

app.listen(port, function () {
  console.log(`Web application is listening on port ${port}`);
});