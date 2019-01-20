function signo(){
  console.log("sign out");
  firebase.auth().signOut().then(function() {
    window.alert("successfully logged out!!!!");
    window.location.href = "https://aptipediasite.firebaseapp.com/intro.html";
    // Sign-out successful.
  }).catch(function(error) {
    window.alert("Error: "+error.message);
    // An error happened.
  });
  //window.alert("successfully logged out!!!!");
}
var bankno;

function questionbank(w){
  console.log("hey");
  var i;
  bankno = "Bank" + w;
  for(i=1;i<=10;i++){
    var text = "q" + i;
    var sb = "startbtn" + i;
    document.getElementById(sb).style.display = "none";
    document.getElementById(text).style.display = "block";
    document.getElementById('sub1').style.display="block";
    document.getElementById('carouselExampleControls').style.display = "none";
  }
  var fireref = firebase.database().ref(bankno);
  i = 0;

    fireref.once("value",function(snap){
      snap.forEach(function(childsnap) {
        var childKey = childsnap.key;
        console.log(childKey);
        var qt = document.getElementById(childKey);
        var t_head = qt.tHead;
        var t_body = document.getElementsByTagName("tbody")[i];
        i++;
        t_head.children[0].children[0].innerHTML = snap.child(childKey+"/Question").val();
        t_body.rows[0].cells[1].innerHTML = snap.child(childKey+"/Options/0").val();
        t_body.rows[1].cells[1].innerHTML = snap.child(childKey+"/Options/1").val();
        t_body.rows[2].cells[1].innerHTML = snap.child(childKey+"/Options/2").val();
        t_body.rows[3].cells[1].innerHTML = snap.child(childKey+"/Options/3").val();
      });
    });
    //document.getElementById('carouselExampleControls').style.display = "none";



}
//document.getElementById('sub1').style.display = "block";

document.getElementById('sub1').onclick = function answer(){

    var bankn = bankno;
    var i =1;
    var fireref = firebase.database().ref(bankn);
    fireref.once("value",function(snap){
      snap.forEach(function(childsnap) {
        var childKey = childsnap.key;
        document.getElementById("txt"+i).style.display="block";
        document.getElementById("txt"+i).readOnly = true;
        document.getElementById("txt"+i).value=snap.child(childKey+"/Answer").val();
        i++;
      });
    });
  };

/* functions defination over */

for(i=1;i<=10;i++){
  var text = "q" + i;
  document.getElementById(text).style.display = "none";
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //var displayName = user.displayName;
    var email = user.email;
    //var emailVerified = user.emailVerified;
   // var photoURL = user.photoURL;
    //var isAnonymous = user.isAnonymous;
    //var uid = user.uid;
    //var providerData = user.providerData;
    console.log(email);
    // ...
  } else {
    window.alert("Error :"+ error.message);
    // User is signed out.
    // ...
  }
});
