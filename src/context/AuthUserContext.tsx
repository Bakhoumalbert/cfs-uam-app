import UserFirebaseAuth from "@/hooks/use-firebase-auth";
import { UserDocument } from "@/types/users";
import { createContext } from "react";

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true
})
interface Props {
    children: React.ReactNode
}

export function AuthUserProvider({ children }: Props) {
    
    const auth = UserFirebaseAuth()
    
    return(
        <authUserContext.Provider value={{
            authUser,
            authUserIsLoading: 
        }}>
            {children}
        </authUserContext.Provider>
    )
}