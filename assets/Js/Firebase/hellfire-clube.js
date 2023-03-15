import app from './app.js'
import {
  getFirestore,
  collection,
  addDoc
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
export async function subscribeToHellfireClube(subscription) {
  const db = getFirestore(app)
  const HellfireClubCollection = collection(db, 'Hellfire-clube')
  const docRef = await addDoc(HellfireClubCollection, subscription)
  return docRef.id
}
