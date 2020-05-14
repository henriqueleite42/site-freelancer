import AllLangs from "Constants/Language";

interface NickName {
  short: string;
  complete: string;
}

interface Profile {
  name: string;
  level: string;
  headline: string;
  editInfo: string;
  history: string;
  balance: {
    available: NickName;
    receivable: NickName;
  };
  jobs: NickName;
  lastedProjects: string;
}

const EN: Profile = {
  name: "Name",
  level: "Level",
  headline: "Headline",
  editInfo: "Edit Info",
  history: "History",
  balance: {
    available: {
      short: "Balance A.",
      complete: "Balance Avaliable"
    },
    receivable: {
      short: "Balance R.",
      complete: "Balance Receivable"
    }
  },
  jobs: {
    short: "Jobs",
    complete: "Total Jobs Done"
  },
  lastedProjects: "Lasted Jobs"
};

const BR: Profile = {
  name: "Nome",
  level: "Nivel",
  headline: "Titúlo",
  history: "Histórico",
  editInfo: "Editar Informações",
  balance: {
    available: {
      short: "Saldo D.",
      complete: "Saldo Disponivel"
    },
    receivable: {
      short: "Saldo R.",
      complete: "Saldo a Receber"
    }
  },
  jobs: {
    short: "Projetos",
    complete: "Total de Projetos Concluidos"
  },
  lastedProjects: "Ultimos Projetos"
};

const Profile: { [T in keyof typeof AllLangs]: Profile } = {
  EN,
  BR
};

export default Profile;
