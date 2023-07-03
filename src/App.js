import HelloWorld from "./components/HelloWorld";
import Button from "./components/button";

function App() {

const UserAge = 21
const UserName = "Xavier"

  return (
    <div className="App">
      <HelloWorld age={UserAge} name={UserName}/>
      This can be seen after the Update!
      <Button></Button>
    </div>
  );
}

export default App;
