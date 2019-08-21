const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Welcome Home');
});

app.listen(3000);