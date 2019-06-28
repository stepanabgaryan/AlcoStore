import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBjrTC9rGAuZhLnhgXmOPxb3S6R_2140ao",
  authDomain: "online-shop-22a8a.firebaseapp.com",
  databaseURL: "https://online-shop-22a8a.firebaseio.com",
  projectId: "online-shop-22a8a",
  storageBucket: "online-shop-22a8a.appspot.com",
  messagingSenderId: "931849167335",
  appId: "1:931849167335:web:905cfb4d96dbdac1"
};

const fire = firebase.initializeApp(config);
export default fire;