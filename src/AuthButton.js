import React from 'react';
import { Auth } from 'aws-amplify';

const AuthButton = () => (
  <button
    onClick={async () => {
      const user = await Auth.currentAuthenticatedUser();
      const session = await Auth.currentSession();

      console.log(user);
      console.log(session);

      const token = session.idToken.jwtToken;

      const res = await fetch(`http://localhost:3000?token=${token}`);
      const data = await res.json();

      if (res.ok) alert('Auth Success!');

      if (res.status === 401) {
        alert('Unauthorized: ' + data.message);
        Auth.signOut();
      }
    }}
  >
    Authenticate
  </button>
);

export default AuthButton;
