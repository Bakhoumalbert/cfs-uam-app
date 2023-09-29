import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/users";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
export default function UserFirebaseAuth() {

    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL
    })

    const getUserDocument = async (user:UserInterface) => {
        if(auth.currentUser) {
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compacUser = user;
            
            onSnapshot(documentRef,async (doc) => {
                if(doc.exists()){
                    compacUser.userDocument = doc.data() as UserDocument
                }
                setAuthUser(compacUser);
                setAuthUserIsLoading(false);
            })
        }
    }

    const authStateChanged = async  (authState: UserInterface | User | null) => {
        if(!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return
        }
        setAuthUserIsLoading(true);
        const formattedUser = formatAuthUser(authState);
        await getUserDocument(formattedUser)
        setAuthUser(formattedUser);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unSubscribe()
    }, [])

    return {
        authUser,
        authUserIsLoading,
    }
}