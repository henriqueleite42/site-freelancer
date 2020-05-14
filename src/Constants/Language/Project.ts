import AllLangs from "Constants/Language";

interface Project {
  withOutComment: string;
  private: string;
}

const EN: Project = {
  withOutComment: "No comment",
  private: "Private Project"
};

const BR: Project = {
  withOutComment: "Sem comentário",
  private: "Projeto Privado"
};

const Projects: { [T in keyof typeof AllLangs]: Project } = {
  EN,
  BR
};

export default Projects;
