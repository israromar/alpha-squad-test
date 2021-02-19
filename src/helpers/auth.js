/* eslint-disable arrow-body-style */
import { auth } from '../services/firebase';

export const Authentication = {
  isAuthenticated: false,
  authenticate(isAuth) {
    this.isAuthenticated = isAuth;
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
  const provider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signOut() {
  auth().signOut().then(() => {
  // Sign-out successful.
    return true;
  }).catch(() => {
  // An error happened.
    return false;
  });
}
