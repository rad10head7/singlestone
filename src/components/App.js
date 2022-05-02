import React, { useState, useEffect } from "react";
import { HowItWorks, Hero, Header } from "./index";
import styles from "../styles/App.module.css";

function App() {
  const [steps, setSteps] = useState([]);

  const apiURL =
    "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge";

  const getInfo = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setApiSteps(data))
      .catch((e) => {
        console.log({ error: e });
      });
  };

  const setApiSteps = (data) => {
    let result = [];

    for (let item of data) {
      let workItem = result.find((step) => step.stepNumber === item.stepNumber);

      if (!workItem) {
        workItem = { stepNumber: item.stepNumber };
      }

      let content = item.versionContent;
      let recent = new Date(
        Math.max(...content.map((d) => new Date(d.effectiveDate)))
      );

      content.forEach((value) => {
        if (Date.parse(value.effectiveDate) === Date.parse(recent)) {
          workItem.title = value.title;
          workItem.body = value.body;
        }
      });

      result.push(workItem);
    }

    let sorted = result.sort((a, b) => (a.stepNumber > b.stepNumber ? 1 : -1));
    setSteps(sorted);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Hero />
        <HowItWorks steps={steps} />
      </main>
    </div>
  );
}

export default App;
