import { auth } from "@/config/firebase-config"
import { FirebaseError } from "firebase/app"
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"

// Composant de formatage de la fonction de création de compte
export const firebaseCreateUser = async (email: string, password: string) => {
    // Cette fonction va soliccité firebase pour la creation d'un user
    try {
      // L'application firebase torune en asynchrone
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { data: userCredential.user };
    } catch (error) {
      // Importation d'un type d'error venant de firebase
      const firebaseError = error as FirebaseError;
  
      //... @todo format error
      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }
};

export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {

        const firebaseError = error as FirebaseError
        //... @todo format
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth)
        return { data: true }
    } catch (error) {

        const firebaseError = error as FirebaseError
        //... @todo format
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { data: true }
    } catch (error) {

        const firebaseError = error as FirebaseError
        //... @todo format
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message
        }}
    }
}

export const sendEmailVerificationProcedure = async () => {
    if(auth.currentUser){
        try {
            await sendEmailVerification(auth.currentUser);
            return { data: true }
        } catch (error) {
            
            const firebaseError = error as FirebaseError
            //... @todo format
            return { 
                error: {
                    code: firebaseError.code,
                    message: firebaseError.message
                }
            }
        }
    }else {
        return {
            error: {
                code: "unknow",
                message: "Une erreur est survenue",
            },
        };
    }
}

