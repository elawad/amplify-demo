const express = require('express');
const CognitoExpress = require('cognito-express');
require('dotenv').config({ path: '../.env.local' });

const PORT = 3000;

const cognitoExpress = new CognitoExpress({
  region: 'us-east-1',
  cognitoUserPoolId: process.env.REACT_APP_COGNITO_POOL_ID,

  tokenUse: 'id', // id or access
  tokenExpiration: 30, // up to 3600 seconds (1 hour amplify default)
});

const app = express();

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// token validate
app.get('/', (req, res) => {
  const { token } = req.query;

  cognitoExpress.validate(token, (err, response) => {
    if (err) res.status(401).send(err);
    else res.send(response);
  });
});

// start server
app.listen(PORT, () => console.log(`http://localhost:${PORT}  🚀`));
