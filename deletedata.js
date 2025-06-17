// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, deleteUser, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getDatabase, ref, remove } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQvvRaEgTiDy6MynhrkbjSMextyiBWFRc",
    authDomain: "tiles-extreme.firebaseapp.com",
    databaseURL: "https://tiles-extreme-default-rtdb.firebaseio.com",
    projectId: "tiles-extreme",
    storageBucket: "tiles-extreme.firebasestorage.app",
    messagingSenderId: "395767797474",
    appId: "1:395767797474:web:17374faf24f5990d34f0bb",
    measurementId: "G-VKEQZY920E"
};

const DeleteData = document.getElementById("DeleteData");
const DeleteAccount = document.getElementById("DeleteAccount");
const status = document.getElementById("status");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Delete User Data Function
DeleteAccount.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            let user = userCredential.user;
            let userId = user.uid;

            // Realtime Database se Data Delete Karein
            remove(ref(database, "Users/" + userId))
                .then(() => {
                    status.innerText = "User Data Deleted Successfully!";
                    // Firebase Authentication se User Delete Karein
                    deleteUser(user).then(() => {
                        status.innerText = "User Account And Data Deleted Successfully!";
                    }).catch(error => {
                        status.innerText = error.message;
                    });
                }).catch(error => {
                    status.innerText = error.message;
                });

        }).catch(error => {
            status.innerText = error.message;
        });
}
)
DeleteData.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            let user = userCredential.user;
            let userId = user.uid;

            // Realtime Database se Data Delete Karein
            remove(ref(database, "Users/" + userId))
                .then(() => {
                    status.innerText = "User Data Deleted Successfully!";
                }).catch(error => {
                    status.innerText = error.message;
                });

        }).catch(error => {
            status.innerText = error.message;
        });
}
)