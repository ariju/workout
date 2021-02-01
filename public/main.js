function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      printUserInfo(user.email, user.uid);
      log(`ログインしました。: ${user.uid}`);
      disableSignUpAndSignIn();
    } else {
      clearUserInfo();
      disableSignOut();
    }
    clearForm();
  });
}

onSignUpButtonClicked = function() {
  const email = getEmail();
  const password = getPassword();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      log(`サインアップしました。: ${email}`);
    })
    .catch(function(error) {
      log(`サインアップできませんでした。${error}`);
    });
};

onSignInButtonClicked = function() {
  const email = getEmail();
  const password = getPassword();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      log(`ログインできませんでした。${error}`);
    });
};

onSignOutButtonClicked = function() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      log("ログアウトしました。");
    })
    .catch(function(error) {
      log(`ログアウトできませんでした。${error}`);
    });
};
