import AllLangs from "Constants/Language";

interface Chat {
  notSelected: string;
}

const EN: Chat = {
  notSelected: "Choose a Chat"
};

const BR: Chat = {
  notSelected: "Escolha Um Chat Ao Lado"
};

const Chat: { [T in keyof typeof AllLangs]: Chat } = {
  EN,
  BR
};

export default Chat;
