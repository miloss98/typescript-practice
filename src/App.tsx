import "./App.css";
import React from "react";

const App: React.FC = () => {
  // interface TestInterface {
  //   id: number;
  //   name: string;
  // }
  // const user: TestInterface = {
  //   id: 0,
  //   name: "Milos",
  // };

  return (
    <div className="container">
      <section className="header">
        <h1 className="title">typescript practice</h1>
      </section>
      <section className="main-content">
        <div className="inputs-container">
          <p className="inputs"> task </p>
          <p className="inputs"> deadline </p>
          <button className="add-task-btn"> add task</button>
        </div>
      </section>
    </div>
  );
};

export default App;
