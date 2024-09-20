// // public/firebase-messaging-sw.js

// // استيراد مكتبات Firebase اللازمة
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// // تهيئة Firebase داخل الـ Service Worker
// firebase.initializeApp({
//     apiKey: "AIzaSyCtw9zXfGPTyHuxzBNqmCGZjWsv0rv3djw",
//     authDomain: "aqarandservice-641ab.firebaseapp.com",
//     projectId: "aqarandservice-641ab",
//     storageBucket: "aqarandservice-641ab.appspot.com",
//     messagingSenderId: "362675997724",
//     appId: "1:362675997724:web:de2ae12bf2ac2589cc63d9",
//     measurementId: "G-3SF2CYYW5P"
// });

// // إعداد خدمة الرسائل
// const messaging = firebase.messaging();

// // التعامل مع الرسائل الواردة في الخلفية
// messaging.onBackgroundMessage((payload) => {
//     console.log('Received background message ', payload);
    
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: '/firebase-logo.png' // تأكد من أن هذا المسار صحيح
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
// Load Firebase Scripts
self.importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
self.importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize Firebase
const firebaseConfig = {

apiKey: "AIzaSyC064N1RfAOpNAiFNojZG7IGMraTiKWPFk",
authDomain: "aqarservices-ef2e9.firebaseapp.com",
projectId: "aqarservices-ef2e9",
storageBucket: "aqarservices-ef2e9.appspot.com",
messagingSenderId: "956445058183",
appId: "1:956445058183:web:ac4d626beedcee87910422",
measurementId: "G-32PY75424G"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // يمكنك تخصيص الأيقونة هنا
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

