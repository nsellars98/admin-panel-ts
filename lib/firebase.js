// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDegK-SUXxGM5KJlTtlcCBQqKdkNk6n9SU",
  authDomain: "impowered-platform.firebaseapp.com",
  projectId: "impowered-platform",
  storageBucket: "impowered-platform.appspot.com",
  messagingSenderId: "637236465117",
  appId: "1:637236465117:web:e0c30f8f817d0be9303a34",
  measurementId: "G-Y4X16MBNQ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const db = getFirestore()