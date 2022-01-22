import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import realDb from '~/plugins/firebase.js';
import auth from '~/plugins/firebase.js';