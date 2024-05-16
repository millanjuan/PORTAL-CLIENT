import {
  ISignIn,
  ISignInErrors,
  ISignUp,
  ISignUpErrors,
  IUpdateErrors,
} from "../interfaces/authInterface";

export const initialRegisterState: ISignUp = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  password2: "",
  typeidentity: "DNI",
  identity: null,
  birthdate: "",
};

export const initialErrorRegisterState: ISignUpErrors = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  identity: "",
  birthdate: "",
};

export const initialLoginState: ISignIn = {
  email: "",
  password: "",
};

export const initialLoginErrorState: ISignInErrors = {
  email: "",
  password: "",
};

export const initialUpdateErrorState: IUpdateErrors = {
  firstname: "",
  lastname: "",
  address: "",
  cellphone: "",
  birthdate: "",
};
