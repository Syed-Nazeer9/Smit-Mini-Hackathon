import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore,  collection, addDoc,getDocs, doc, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {  getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBnvozBhQ2luHTzuPNtALa_jBg1xEdsQYg",
  authDomain: "smit-mini-hackathon-77552.firebaseapp.com",
  projectId: "smit-mini-hackathon-77552",
  storageBucket: "smit-mini-hackathon-77552.appspot.com",
  messagingSenderId: "696268476691",
  appId: "1:696268476691:web:a121f634c495e285e7cae6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


const signupBtn = document.querySelector("#signupBtn")
signupBtn.addEventListener("click", signUp)

async function signUp(e) {
    try {
        const fullName = document.getElementById("fullName").value
        const phoneNumber = document.getElementById("phoneNumber").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        if (!fullName || !phoneNumber || !email || !password) {
            alert("required field are missing")
            return
        }
        const userAuth = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userAuth.user.uid)
        const uid = userAuth.user.uid
        const userObj = {
            fullName,
            phoneNumber,
            email,
            accountActivate: true,
            uid,
        }
        const userRef = doc(db, "users", uid);
        const userDB = await setDoc(userRef, userObj)
        window.location.assign("login.html")
    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }


}
































