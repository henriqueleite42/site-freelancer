import AllLangs from "Constants/Language";

interface Login {
  signIn: string;
  signUp: string;
  signOut: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  youAreHereTo: string;
  hire: string;
  work: string;
}

const EN: Login = {
  signIn: "Sign In",
  signUp: "Sign Up",
  signOut: "Sign Out",
  firstName: "First Name",
  lastName: "Last Name",
  email: "E-mail",
  password: "Password",
  youAreHereTo: "I want",
  hire: "To Hire",
  work: "To Work"
};

const BR: Login = {
  signIn: "Entrar",
  signUp: "Cadastrar-se",
  signOut: "Sair",
  firstName: "Nome",
  lastName: "Sobrenome",
  email: "E-mail",
  password: "Senha",
  youAreHereTo: "Eu pretendo",
  hire: "Contratar",
  work: "Trabalhar"
};

const Login: { [T in keyof typeof AllLangs]: Login } = {
  EN,
  BR
};

export default Login;
