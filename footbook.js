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

  user = localStorage.getItem("Name");
  room = localStorage.getItem("Add room name");

  function send()
  {
     msg=document.getElementById("type").value;
     firebase.database().ref(room).push({
         name:user,
         message:msg,
         like:0
     });
     document.getElementById("type").value=""; 
  }

  function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("sus").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
      firebase_message_id = childKey; 
      message_data = childData;

      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data["name"];
      message=message_data["message"];
      like=message_data["like"];
      display_name="<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
      display_message="<h4 class='message_h4'>" + message + "</h4>";
    //   display_like_button="<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='update_like_number(this.id)'>";
      display_like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like_number(this.id)'>";
      display_image="<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";

      row=display_name+display_message+display_like_button+display_image;
      document.getElementById("sus").innerHTML += row;
  } }); }); } 
  getData();

  function logout()
{
     localStorage.removeItem("Name");
     localStorage.removeItem("Add room name");
     window.location="index.html";
}

function update_like_number(firebase_message_id)
{
    console.log("the user has clicked on the like button-" + firebase_message_id);
    button_id=firebase_message_id;
    number_of_likes=document.getElementById(button_id).value;
    likes=Number(number_of_likes) + 1;
    console.log(likes);

    firebase.database().ref(room).child(firebase_message_id).update({
        like:likes
    });
}

  
