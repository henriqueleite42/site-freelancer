import AllLangs from "Constants/Language";

interface SettingsTabs {
  general: string;
}

interface SettingsGeneral {
  language: string;
  theme: string;
  themeDark: string;
  themeLight: string;
}

interface Settings {
  tabs: SettingsTabs;
  general: SettingsGeneral;
}

const EN: Settings = {
  tabs: {
    general: "General"
  },
  general: {
    language: "Language",
    theme: "Theme",
    themeDark: "Dark",
    themeLight: "Light"
  }
};

const BR: Settings = {
  tabs: {
    general: "Geral"
  },
  general: {
    language: "Idioma",
    theme: "Modo",
    themeDark: "Escuro",
    themeLight: "Claro"
  }
};

const Settings: { [T in keyof typeof AllLangs]: Settings } = {
  EN,
  BR
};

export default Settings;
