import { GoogleAuthProvider } from "firebase/auth";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


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
    </div>
  );
};

export default SignIn;
