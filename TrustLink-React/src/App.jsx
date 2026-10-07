import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Pipeline from "./components/Pipeline/Pipeline";
import Metrics from "./components/Metrics/Metrics";
import Analysis from "./components/Analysis/Analysis";
import Results from "./components/Results/Results";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";

import { runPipelineSteps } from "./data/trustLinkData";

function App() {
  const [status, setStatus] = useState("Ready for analysis");
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const runMatching = () => {
    if (running) return;

    setRunning(true);
    setCompleted(false);

    runPipelineSteps(setStatus, () => {
      setRunning(false);
      setCompleted(true);

      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({
          behavior: "smooth"
        });
      }, 150);
    });
  };

  const scrollToResults = () => {
    document.getElementById("results")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar onRunMatching={runMatching} />

      <Hero
        onRunMatching={runMatching}
        onViewResults={scrollToResults}
      />

      <main>
        <section
          id="pipeline"
          className={`trustlink-dashboard ${
            completed ? "completed" : ""
          }`}
        >
          <Pipeline
            status={status}
            running={running}
            completed={completed}
          />

          <Metrics />

          <Analysis />
        </section>

        <Results />

        <Quote />
      </main>

      <Footer />
    </>
  );
}

export default App;