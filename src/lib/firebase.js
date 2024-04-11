import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-18df5.firebaseapp.com",
  projectId: "reactchat-18df5",
  storageBucket: "reactchat-18df5.appspot.com",
  messagingSenderId: "309694171339",
  appId: "1:309694171339:web:4a1a5956e6b31aaf06b34e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
