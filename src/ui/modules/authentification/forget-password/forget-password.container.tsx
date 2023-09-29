import { useToggle } from "@/hooks/use-toggle";
import { toast } from "react-toastify";
import { sendEmailToResetPassword } from "@/api/authentication";
import { ForgetPasswordFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {

  const router = useRouter()
  const { value: isLoading, setValue:setIsLoading } = useToggle();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgetPasswordFielsType>();

  const handleResetPassword = async ({ email }: ForgetPasswordFielsType) => {
    const { error }  = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    // @todo create user document
    toast.success(`Email de réinitialisation de mot de passe envoyer à l'adresse ${email}`)
    setIsLoading(false);
    reset()
    router.push("/connexion")
  }


  // onsubmit est de type SubmitHandler et RegisterFormFielsType représente les types qu'on a définit à notre formulaire
  const onSubmit: SubmitHandler<ForgetPasswordFielsType> = async (formData) => {
    setIsLoading(true)
    handleResetPassword(formData); 
  }

  return (
    <>
      <ForgetPasswordView
        form={{ errors, isLoading, register, handleSubmit, onSubmit }}
      />
    </>
  )
}
