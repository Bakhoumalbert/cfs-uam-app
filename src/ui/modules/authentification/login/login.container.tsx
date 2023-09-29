import { LoginFormFielsType, RegisterFormFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";
import { LoginView } from "./login.view";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useEffect } from "react";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {

  const router = useRouter()
  const { value: isLoading, setValue:setIsLoading } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user : ", user);
        
      } else {
        console.log("Tu n'est pas connecter");
      }
    });
  }, [])

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginFormFielsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    // @todo create user document
    toast.success("Bienvenue sur le club Fédérateur des sciences de l'UAM ")
    setIsLoading(false);
    reset()
    router.push("/mon-espace")
  }

  // onsubmit est de type SubmitHandler et RegisterFormFielsType représente les types qu'on a définit à notre formulaire
  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    
    setIsLoading(true)
    const  { email, password } = formData;
    
    if(password.length <= 5){
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractéres"
      })
      setIsLoading(true);
      return
    }
    handleSignInUser(formData)
    
  }

  return (
    <>
      <LoginView
        form={{ errors, isLoading, register, handleSubmit, onSubmit }}
      />
    </>
  )
}
