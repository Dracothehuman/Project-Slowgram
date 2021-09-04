
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBbGhSGr3GA2B0NTJgy5BiC4xAbuzLyS1g",
    authDomain: "footbook2-acfeb.firebaseapp.com",
    databaseURL: "https://footbook2-acfeb-default-rtdb.firebaseio.com",
    projectId: "footbook2-acfeb",
    storageBucket: "footbook2-acfeb.appspot.com",
    messagingSenderId: "1064387840927",
    appId: "1:1064387840927:web:0e7df15509044b5441cbaa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var eevee=localStorage.getItem("Name");

    document.getElementById("User_last_name").innerHTML = "Welcome " + eevee + "!";

function room_service(){
  room_dain = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_dain).update({
    purpose: "adding a room name."      
  });

   localStorage.setItem("Add room name", room_dain);

   window.location="footbook_messages.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("sus").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       var doge = "<div class='room_name' id=" + Room_names + "onclick='Redirection(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("sus").innerHTML += doge;
       

      //End code
      });});}
getData();

function Redirection(name)
{
  localStorage.setItem("Room_Services", name);
  window.location="footbook_messages.html";
  console.log(name);
}
function logout()
{
  localStorage.removeItem("Name");
  localStorage.removeItem("Add room name");
  window.location="index.html";
}