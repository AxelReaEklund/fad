// firestoreFunctions.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Add data to Firestore
export const addData = async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: "John Doe",
            email: "johndoe@example.com",
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Fetch data from Firestore
export const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data());
    });
};
