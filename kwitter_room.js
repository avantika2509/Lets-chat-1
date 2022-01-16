
   var firebaseConfig = {
      apiKey: "AIzaSyAhbzftl-WFaMlboZfEpRT1m5g3QRvpI-A",
      authDomain: "kwitter-ec94c.firebaseapp.com",
      databaseURL: "https://kwitter-ec94c-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec94c",
      storageBucket: "kwitter-ec94c.appspot.com",
      messagingSenderId: "266043258505",
      appId: "1:266043258505:web:b0e94ef2963cbefbdfb858"
    };
    
    
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      });});}
getData();
