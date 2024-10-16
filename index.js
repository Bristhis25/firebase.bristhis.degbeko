import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

console.log("Bonjour tout le monde v1");


const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
 

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 const getfactures = async (db) => {
    const facturesCol = collection(db, 'factures');
    const facturesSnapshot = await getDocs(facturesCol);
    const factures = facturesSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return factures;
  }
  const factures = await getfactures(db);

  factures.forEach(facture => {
    if ((parseFloat(facture.TotalTTC) > 10)) {
      console.log(facture.id);
  }})
 