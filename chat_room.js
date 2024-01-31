const firebaseConfig = {

    apiKey: "AIzaSyC7hMC1ohthgQyAtPzVHG3FUCPpryzm71g",
  
    authDomain: "newagent-ijts.firebaseapp.com",
  
    databaseURL: "https://newagent-ijts-default-rtdb.firebaseio.com",
  
    projectId: "newagent-ijts",
  
    storageBucket: "newagent-ijts.appspot.com",
  
    messagingSenderId: "932347766532",
  
    appId: "1:932347766532:web:93f0803750e6863aba5251",
  
    measurementId: "G-9KKV4B5XE6"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
  function getData()
{
firebase.database (). ref ("/").on('value' , function(snapshot){document.getElementbyId ("output").innerHTML = "";snapshot.forEach(function(childSnapshot)  {childkey = childSnapshot.key;
         Room_names = childKey;
       //Comece a progamar aqui
      console.log("nome da sala - " + Room_names);
      row = "<div class='room"
       //termine de progamar aqui
       });
   });
}
     getData();