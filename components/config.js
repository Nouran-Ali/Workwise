import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRvysQfpXLIJV_oaP-I40ZB1MR6LuWnvg",
  authDomain: "workwise-391819.firebaseapp.com",
  projectId: "workwise-391819",
  storageBucket: "workwise-391819.appspot.com",
  messagingSenderId: "313057911750",
  appId: "1:313057911750:web:d731a1fd32a860272ec8c7",
  measurementId: "G-6RL0SMZPZK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);