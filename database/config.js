// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDellAXyGixaandt8_OKGavlKtxkH_-Oes",
  authDomain: "react-native-chat-app-b1e90.firebaseapp.com",
  projectId: "react-native-chat-app-b1e90",
  storageBucket: "react-native-chat-app-b1e90.appspot.com",
  messagingSenderId: "545347210985",
  appId: "1:545347210985:web:02d8cb643798429438ea78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const database = getFirestore(app)
export const usersRef = collection(database, 'users');
export const chatboxRef = collection(database, 'chatbox')