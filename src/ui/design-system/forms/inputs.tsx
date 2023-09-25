import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean
}
export const Inputs = ({ 
  type = "text",
  placeholder,
  isLoading = false,
  register,
  errors,
  errorMsg,
  id,
  required,
  isAutocompleted }: Props) => {
  return (
    <div className="space-y-2">
      <input 
        type={type} 
        placeholder={placeholder}
        disabled={isLoading}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
        className={clsx( 
          isLoading && "cursor-not-allowed", 
          errors[id] ? 
            "placeholder-alert-danger text-alert-danger" : 
            "placeholder-gray-600", "w-full p-3 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600")}
        autoComplete={isAutocompleted ? "on" : "off"}
      />
      {
        errors[id] && (
          <Typography variant="caption4" component="div" theme="danger">
            {errors[id]?.message}
          </Typography>)
      }
    </div>
  )
}
