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

interface Job {
  searchBar: string;
}

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
}

interface Chat {
  notSelected: string;
}

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

export interface Lang {
  nav: Nav;
  profile: Profile;
  chat: Chat;
  jobs: Job;
  login: Login;
  settings: Settings;
}

export interface Language {
  EN: Lang;
  BR: Lang;
}
