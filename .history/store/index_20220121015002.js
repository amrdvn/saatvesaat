import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'products');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});