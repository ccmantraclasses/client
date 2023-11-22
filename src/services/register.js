/* eslint-disable no-unused-vars */
import { firestore, storeactions } from 'src/firebase/firebase';

export const register = async ({ name, email, phonenumber, message }) => {
  try {
    const { doc, setDoc, collection } = storeactions;
    const docRef = doc(collection(firestore, 'users'), phonenumber);
    await setDoc(docRef, { name, email, phonenumber, message });
    return {
      success: 'Response stored successfully',
    };
  } catch (err) {
    console.log(err);
    return {
      error: 'Sorry! Failed to store response',
    };
  }
};

export const interestedUser = async ({ phonenumber }) => {
  try {
    const { doc, setDoc, collection } = storeactions;
    const docRef = doc(collection(firestore, 'interested_users'), phonenumber);
    await setDoc(docRef, { phonenumber });
    return {
      success: 'Response stored successfully',
    };
  } catch (err) {
    console.log(err);
    return {
      error: 'Sorry! Failed to store response',
    };
  }
};
