export interface FormType {
    errors: any;
    onSubmit: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}


export interface RegisterFormFielsType {
    email: string,
    password: string
    passwordconfirmation: string
}
export interface LoginFormFielsType {
    email: string,
    password: string
}

export interface ForgetPasswordFielsType {
    email: string,
}