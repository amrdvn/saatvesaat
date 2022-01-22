import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import { realDb, auth } from '../plugins/firebase.js';

export const state = () => ({
 cartUIStatus: 'idle',
 storedata: data,
 cart: []
})