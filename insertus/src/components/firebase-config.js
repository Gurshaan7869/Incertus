import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvDmFRroQnsobcztxPpCFA8MZUz13d_ac",
  authDomain: "incertusproject.firebaseapp.com",
  projectId: "incertusproject",
  storageBucket: "incertusproject.appspot.com",
  messagingSenderId: "734271166022",
  appId: "1:734271166022:web:bdf74e2daeda23e4519c47",
  measurementId: "G-1PXB9L12J8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
