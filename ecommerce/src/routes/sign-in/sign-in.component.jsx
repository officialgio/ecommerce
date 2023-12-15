import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      // Sign in the user
      const { user } = await signInWithGooglePopUp();
      const docRef = await createUserDocumentFromAuth(user);

    } catch (error) {
      console.log(`Error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
