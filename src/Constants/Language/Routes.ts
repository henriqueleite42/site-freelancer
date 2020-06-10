import AllLangs from "Constants/Language";

interface Route {
  home: string;
  analytics: string;
  messages: string;
  profile: string;
  relax: string;
}

const EN: Route = {
  home: "",
  analytics: "analytics",
  messages: "messages",
  profile: "profile",
  relax: "relax"
};

const BR: Route = {
  home: "",
  analytics: "relatorios",
  messages: "mensagens",
  profile: "perfil",
  relax: "relaxe"
};

const Routes: { [T in keyof typeof AllLangs]: Route } = {
  EN,
  BR
};

export default Routes;
