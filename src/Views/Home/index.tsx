import React from "react";

import { useGlobalState } from "Redux/state";

const Home: React.FC = () => {
  const GlobalState = useGlobalState();

  let Element;

  if (GlobalState.mode === "freelancer") {
    Element = React.lazy(() => import("Views/Jobs"));
  } else {
    Element = React.lazy(() => import("Views/Freelancers"));
  }

  return <Element />;
};

export default Home;
