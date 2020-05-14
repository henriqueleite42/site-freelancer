import AllLangs from "Constants/Language";

interface Nav {
  profile: string;
  messages: string;
  jobs: string;
  analytics: string;
  notifications: string;
  freelancers: string;
  settings: string;
  mode: {
    mode: string;
    freelancer: string;
    employer: string;
  };
}

const EN: Nav = {
  profile: "Profile",
  messages: "Messages",
  jobs: "Jobs",
  analytics: "Analytics",
  freelancers: "Freelancers",
  notifications: "Notifications",
  settings: "Settings",
  mode: {
    mode: "Mode",
    freelancer: "Freelancer",
    employer: "Employer"
  }
};

const BR: Nav = {
  profile: "Perfil",
  messages: "Mensagens",
  jobs: "Trabalhos",
  analytics: "Relatórios",
  freelancers: "Freelancers",
  notifications: "Notificações",
  settings: "Configurações",
  mode: {
    mode: "Modo",
    freelancer: "Freelancer",
    employer: "Contratante"
  }
};

const Nav: { [T in keyof typeof AllLangs]: Nav } = {
  EN,
  BR
};

export default Nav;
