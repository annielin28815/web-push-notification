

/* ========================
  Variables
======================== */

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();
const signInButton = document.getElementById('sign-in');

/* ========================
  Event Listeners
======================== */

signInButton.addEventListener('click', signIn);
FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);

console.log('0000 =>', '0000');
/* ========================
  Functions
======================== */

function signIn() {
  console.log('1111 =>', '1111');
  FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function handleAuthStateChanged(user) {
  console.log('user =>', user);
  // if (user) {
  //   // User is signed in
  //   signInButton.setAttribute("hidden", "true");
  //   signOutButton.removeAttribute("hidden");
  //   sendNotificationForm.removeAttribute("hidden");

  //   checkSubscription();
  // } else {
  //   // User is not signed in
  //   console.log("user is not signed in");
  //   signOutButton.setAttribute("hidden", "true");
  //   signInButton.removeAttribute("hidden");
  //   sendNotificationForm.setAttribute("hidden", "true");
  // }
}

