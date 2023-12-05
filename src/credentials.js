import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgmIyskHcifEiF7XwsJQtiSlpw6Tc3xpU",
  authDomain: "app-cine-full.firebaseapp.com",
  projectId: "app-cine-full",
  storageBucket: "app-cine-full.appspot.com",
  messagingSenderId: "772835170323",
  appId: "1:772835170323:web:65848c70d4b94c403287e6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }; 
