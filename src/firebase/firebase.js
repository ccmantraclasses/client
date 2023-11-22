/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { doc, setDoc, getDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDvV2yS_SpqXgPBCX-z0yK6deAamIe31wA',
  authDomain: 'ccmantra-c6ad2.firebaseapp.com',
  projectId: 'ccmantra-c6ad2',
  storageBucket: 'ccmantra-c6ad2.appspot.com',
  messagingSenderId: '464078353270',
  appId: '1:464078353270:web:5a121bd0ee6f2285334057',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
const storeactions = { doc, setDoc, getDoc, collection };

export { storage, firestore, storeactions };
