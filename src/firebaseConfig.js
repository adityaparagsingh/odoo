// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAphIsrrbU4nK4Iks74dGD1-F6rxVkiXC8",
  authDomain: "odoo-8872e.firebaseapp.com",
  projectId: "odoo-8872e",
  storageBucket: "odoo-8872e.firebasestorage.app",
  messagingSenderId: "557185690141",
  appId: "1:557185690141:web:83d78030a4c302485ef4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
