import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc9RiFHueJJN0tqovCfgmWkzwpP3pw4Vs",
  authDomain: "golobelogin.firebaseapp.com",
  projectId: "golobelogin",
  storageBucket: "golobelogin.appspot.com",
  messagingSenderId: "788322326798",
  appId: "1:788322326798:web:b73ed70162b9d049aa1f5f"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

export const db = getFirestore(app);