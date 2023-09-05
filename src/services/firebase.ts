import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSyLAT19EuFt9e4ZghVkUoH-q3KfeRg8I",
  authDomain: "barber-auth-bf890.firebaseapp.com",
  projectId: "barber-auth-bf890",
  storageBucket: "barber-auth-bf890.appspot.com",
  messagingSenderId: "754119766553",
  appId: "1:754119766553:web:9888d456d538995827b088"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
