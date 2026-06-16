import {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  onSnapshot,
} from "./firebase";

const collectionName = "books";

//CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
};

//UPDATE
export const updateBook = async (id, obj) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, obj);
};

//READ
export const getBooks = async()=> {
    const colRef = collection(db,collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

//DELETE
export const deleteBook = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
