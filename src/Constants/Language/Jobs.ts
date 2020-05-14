import AllLangs from "Constants/Language";

interface Job {
  searchBar: string;
}

const EN: Job = {
  searchBar: "Search for Projects"
};

const BR: Job = {
  searchBar: "Pesquise por Projetos"
};

const Jobs: { [T in keyof typeof AllLangs]: Job } = {
  EN,
  BR
};

export default Jobs;
