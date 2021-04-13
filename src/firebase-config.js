import firebase from "firebase";

import "firebase/auth";
import "firebase/firebase";

firebase.initializeApp({
	apiKey: "AIzaSyBUMB2pWHen3pnMYgvc3WhuR3ZKOs-CZSg",
	authDomain: "fir-todos-5d72b.firebaseapp.com",
	projectId: "fir-todos-5d72b",
	storageBucket: "fir-todos-5d72b.appspot.com",
	messagingSenderId: "335754282570",
	appId: "1:335754282570:web:5a399df24c682e14fb88b3",
});

//! exporting the db -> firestore
export const db = firebase.firestore();
export default firebase;
