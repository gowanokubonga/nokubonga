var firebaseConfig = {
    apiKey: "AIzaSyDpV5Q_WbXQ_qqCixjbPWaqdde5RwVDlpE",
    authDomain: "nokubonga-41607.firebaseapp.com",
    databaseURL: "https://nokubonga-41607.firebaseio.com",
    projectId: "nokubonga-41607",
    storageBucket: "nokubonga-41607.appspot.com",
    messagingSenderId: "1068881273264",
    appId: "1:1068881273264:web:83849a55ac55865ce7f675",
    measurementId: "G-JBK5VVVWMK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
  // Initialize Firebase
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = ('block');

  // Hide alert after 3 seconds
  setTimeout(function() {
 document.querySelector('.alert').style.display = ('none');
  }),3000;
  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}