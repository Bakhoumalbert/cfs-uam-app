import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Inputs } from "@/ui/design-system/forms/inputs"

interface Props{
  form: FormType;
}

export const RegisterForm = ({ form }: Props) => {

  const { errors, isLoading, register, handleSubmit, onSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Inputs 
        id="email"
        type="email"
        placeholder="bakhoum@gmail.com"
        isAutocompleted={false}
        isLoading={isLoading}
        required={true}
        errorMsg="L'email est requis !"
        errors={errors}
        register={register}
        />
      <Inputs 
        id="password"
        type="password"
        placeholder="Entrer votre mot de passe"
        isAutocompleted={false}
        isLoading={isLoading}
        required={true}
        errorMsg="votre mot de passe est requis !"
        errors={errors}
        register={register}
      />
      <Inputs 
        id="passwordconfirmation"
        type="password"
        placeholder="confirmer votre mot de passe"
        isAutocompleted={false}
        isLoading={isLoading}
        required={true}
        errorMsg="votre mot de passe de confirmation est requis !"
        errors={errors}
        register={register}
      />
      <Button isLoading={isLoading} type="submit" fullWith >S'inscrire</Button>
    </form>
  )
}
