import { RegisterFormFielsType } from "@/types/forms";
import { RegisterView } from "./register.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FirestoreCreateUserDocument, firestoreCreateUserDocument } from "@/api/firestore";

export const RegisterContainer = () => {

  const { value: isLoading, setValue:setIsLoading } = useToggle();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
    console.log("Before create document and user the error ");
    const { error } = await FirestoreCreateUserDocument(collectionName, documentID, document);
    console.log("error : ", error);
    
    console.log("after create document");
    
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }
    console.log("Before create document");
    toast.success("Bienvenue sur l'app du club Fédérateur des sciences de l'UAM ")
    setIsLoading(false);
    reset()
    sendEmailVerificationProcedure()

  }

  const handleCreateUserAuthentification = async ({ email, password }: RegisterFormFielsType) => {
    console.log("before creating user");
    const { error, data } = await firebaseCreateUser(email, password);
    console.log("after created user");

    console.log("data of authentification : ", data?.uid);
    
    
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    console.log("Avant");
    
    const userDocumentData = {
      email: email,
      uid: data.uid,
      creation_date: new Date(),
    }
    console.log("dedans");
    console.log('user data : ', data);
    
    
    handleCreateUserDocument("users", data.uid, userDocumentData);
    console.log("Après");
    
  }

  // onsubmit est de type SubmitHandler et RegisterFormFielsType représente les types qu'on a définit à notre formulaire
  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    
    setIsLoading(true)
    const  { email, password, passwordconfirmation } = formData;

    if(password.length <= 5){
      setError("password", {
        type: "manuel",
        message: "Ton mot de passe doit comporter au minimum 6 caractéres"
      })
      return
    }
    if(password !== passwordconfirmation){
      setIsLoading(false)
      setError("password", {
        type: "manuel",
        message: "votre mot de passe ne corresponds pas au mot de passe de confirmation"
      })
      return
    }
    handleCreateUserAuthentification(formData) 
  }

  return (
    <>
      <RegisterView 
        form={{ errors, isLoading, register, handleSubmit, onSubmit }}
      />
    </>
  )
}
