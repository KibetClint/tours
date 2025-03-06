// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuRS7jy7rHPC5BiIGzWuIux-uq34F6U30",
  authDomain: "tribeless-safaris.firebaseapp.com",
  projectId: "tribeless-safaris",
  storageBucket: "tribeless-safaris.firebasestorage.app",
  messagingSenderId: "675647244917",
  appId: "1:675647244917:web:33e17148519087c889063c",
  measurementId: "G-QXX28GGKYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); // Export Firestore instance

// Fetch Bookings from Firestore
export const fetchBookings = async () => {
  const bookingsCollection = collection(db, "bookings"); // Replace "bookings" with your collection name
  const snapshot = await getDocs(bookingsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Fetch Messages from Firestore
export const fetchMessages = async () => {
  const messagesCollection = collection(db, "messages"); // Replace "messages" with your collection name
  const snapshot = await getDocs(messagesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Fetch Trip Packages from Firestore
export const fetchTripPackages = async () => {
  const tripPackagesCollection = collection(db, "tripPackages"); // Replace "tripPackages" with your collection name
  const snapshot = await getDocs(tripPackagesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
