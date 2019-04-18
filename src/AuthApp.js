import React from 'react';
import { Authenticator } from 'aws-amplify-react';
import App from './App';

const AuthApp = () => (
  <Authenticator
    amplifyConfig={amplifyConfig}
    // signUpConfig={signUpConfig}
    // federated={federated}
  >
    <App />
  </Authenticator>
);

export default AuthApp;

const amplifyConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,

    // Hosted UI for AD login
    // oauth: {
    //   domain: process.env.REACT_APP_COGNITO_DOMAIN,
    //   redirectSignIn: window.location.origin,
    //   redirectSignOut: window.location.origin,
    //   responseType: 'code', // code or token
    //   scope: ['profile'], // to retrive AD user info
    // },
  },
};

const signUpConfig = {
  hiddenDefaults: ['phone_number'],
  signUpFields: [
    {
      label: 'First Name',
      placeholder: 'First Name',
      key: 'given_name',
      required: true,
      displayOrder: 3,
    },
    {
      label: 'Last Name',
      placeholder: 'Last Name',
      key: 'family_name',
      required: true,
      displayOrder: 4,
    },
  ],
};

const federated = {
  google_client_id: '123',
  facebook_app_id: '123',
  amazon_client_id: '123',
};
