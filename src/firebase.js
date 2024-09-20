import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// تكوين Firebase الخاص بك
const firebaseConfig = {

  apiKey: "AIzaSyC064N1RfAOpNAiFNojZG7IGMraTiKWPFk",
  authDomain: "aqarservices-ef2e9.firebaseapp.com",
  projectId: "aqarservices-ef2e9",
  storageBucket: "aqarservices-ef2e9.appspot.com",
  messagingSenderId: "956445058183",
  appId: "1:956445058183:web:ac4d626beedcee87910422",
  measurementId: "G-32PY75424G"
};

// تهيئة Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

// تسجيل الـ Service Worker قبل محاولة الحصول على الـ Token
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
}

export { messaging, getToken };




// import { initializeApp } from "firebase/app";
// import { getMessaging,getToken } from "firebase/messaging";

// // إعدادات Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCtw9zXfGPTyHuxzBNqmCGZjWsv0rv3djw",
//   authDomain: "aqarandservice-641ab.firebaseapp.com",
//   projectId: "aqarandservice-641ab",
//   storageBucket: "aqarandservice-641ab.appspot.com",
//   messagingSenderId: "362675997724",
//   appId: "1:362675997724:web:de2ae12bf2ac2589cc63d9",
//   measurementId: "G-3SF2CYYW5P"
// };

// // تهيئة Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export { messaging ,getToken};
