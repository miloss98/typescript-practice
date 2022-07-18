import "./App.css";

function App() {
  // let juice: string | number;
  // juice = "orange juice";

  interface TestInterface {
    id: number;
    name: string;
  }
  const user: TestInterface = {
    id: 0,
    name: "Milos",
  };

  return (
    <div>
      {/* <h4> {juice} </h4> */}
      <h3> {user.name} </h3>
      <p> {user.id} </p>
    </div>
  );
}

export default App;
