
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCCKHBDngxxQI6OAVVgkSBepNVYLTgteh8",
    authDomain: "edusex-1d08b.firebaseapp.com",
    projectId: "edusex-1d08b",
    storageBucket: "edusex-1d08b.appspot.com",
    messagingSenderId: "75799224048",
    appId: "1:75799224048:web:d9da68521776aa10efec35",
    measurementId: "G-547SWSLFL9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
