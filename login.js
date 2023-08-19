

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore,  collection, addDoc,getDocs, doc, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import {  getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";


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


const loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener("click", login)

async function login(e) {
    try {

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        console.log(email, password)
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(userLogin)
        localStorage.setItem("userUid", userLogin.user.uid)
        window.location.replace("/Deshbord.html")


    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }

}




























// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyB9sCfBcNbNGS9ry7iUz7rxdi_-lfQQn2c",
//   authDomain: "app-food-9e5d4.firebaseapp.com",
//   projectId: "app-food-9e5d4",
//   storageBucket: "app-food-9e5d4.appspot.com",
//   messagingSenderId: "516479221913",
//   appId: "1:516479221913:web:6f81ac537d594ffa25b808"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// const writeUserData =(userId, name, email,password) => {
//     const dataRef = push(ref(db, 'user/karachi/saylani'))
//     set(dataRef, {
//       name,
//       email,
//       password
//     });
//   }

//   writeUserData(1, "yasir", "syednazeer679@gmail.com", "123456")