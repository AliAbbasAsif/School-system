// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ilpvaetH-0rV69_rlWQJfiT--wbWuSI",
  authDomain: "react-94b0c.firebaseapp.com",
  projectId: "react-94b0c",
  storageBucket: "react-94b0c.appspot.com",
  messagingSenderId: "445272711183",
  appId: "1:445272711183:web:448fee89033e689f61437a",
  measurementId: "G-2BGX138JZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;