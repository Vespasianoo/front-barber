import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// sua config firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
