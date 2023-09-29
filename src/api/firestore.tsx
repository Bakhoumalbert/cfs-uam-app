import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

export const FirestoreCreateUserDocument = async (collectionName: string, documentID: string, data: object) => {
    try {
        // Creation de la refference du document 
        console.log("Before using the document ref and the setDoc ");
        
        const documentRef = doc(db, collectionName, documentID)
        console.log("between");
        
        console.log("collectionName : ", collectionName)
        console.log("documentID : ", documentID)
        console.log("data : ", data)

        await setDoc(documentRef, data)
        console.log("After using the document ref and the setDoc ");
      // On attends aucune informations venant de firebase
      return { data: true }
    } catch (error) {
  
      // Importation d'un type d'error venant de firebase
      const firebaseError = error as FirebaseError 
  
      //... @todo format error
      return { error: {
          code: firebaseError.code,
          message: firebaseError.message
      } }
    } 
}
