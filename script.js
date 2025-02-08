// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUTLx60ErmOI5lOzJkSGpIRIDW1hrT7M",
  authDomain: "roblox-timeless.firebaseapp.com",
  projectId: "roblox-timeless",
  storageBucket: "roblox-timeless.firebasestorage.app",
  messagingSenderId: "547930520611",
  appId: "1:547930520611:web:2897d13c03ceb82ef48596",
  measurementId: "G-PBS2NGLP2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  // Optional, can be omitted if you don't want analytics

// Initialize Firebase Authentication
const auth = getAuth();

// Google Sign-In provider setup
const googleProvider = new GoogleAuthProvider();

// Event listener for the Google Sign-In button
document.getElementById("google-sign-in-button").addEventListener("click", function() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);

      // You can store user info here (user.displayName, user.email, etc.)
      
      // Redirect to a new page after successful sign-in
      window.location.href = "home.html";  // You can replace "home.html" with any page
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error.message);
      alert("Error: " + error.message);  // Display error message if sign-in fails
    });
});
