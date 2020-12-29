import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAvHzTfO9y98xlACOPQEdCFQ84KybrOnQQ",
    authDomain: "reactive-chat-dc014.firebaseapp.com",
    databaseURL: "https://reactive-chat-dc014-default-rtdb.firebaseio.com",
    storageBucket: "gs://reactive-chat-dc014.appspot.com"
}

firebase.initializeApp(config);

let database = firebase.database();

export default database;
