import HelloWorld from "./components/HelloWorld";

function App() {

const UserAge = 21
const UserName = "Xavier"

  return (
    <div className="App">
      <HelloWorld age={UserAge} name={UserName}/>
      Hello There!
    </div>
  );
}

export default App;
