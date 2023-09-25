import { ForgetPasswordView } from "./forget-password.view"
import { LoginFormFielsType, RegisterFormFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

export const ForgetPasswordContainer = () => {

  const { value: isLoading, setValue:setIsLoading } = useToggle();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginFormFielsType>();

  // onsubmit est de type SubmitHandler et RegisterFormFielsType représente les types qu'on a définit à notre formulaire
  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    console.log(formData);
    
  }

  return (
    <>
      <ForgetPasswordView
        form={{ errors, isLoading, register, handleSubmit, onSubmit }}
      />
    </>
  )
}
