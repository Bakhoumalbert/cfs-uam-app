import { RegisterFormFielsType } from "@/types/forms";
import { RegisterView } from "./register.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {

  const { value: isLoading, setValue:setIsLoading } = useToggle();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterFormFielsType>();

  // onsubmit est de type SubmitHandler et RegisterFormFielsType représente les types qu'on a définit à notre formulaire
  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    console.log(formData);
    
  }

  return (
    <>
      <RegisterView 
        form={{ errors, isLoading, register, handleSubmit, onSubmit }}
      />
    </>
  )
}
