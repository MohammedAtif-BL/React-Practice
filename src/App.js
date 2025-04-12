import Greeting from "./component/Greeting";
import Counter from "./component/Counter";
import NameList from "./component/NameList";
import Welcome from "./component/Welcome";
import UserCard from "./component/UserCard";
import FormExample from "./component/FormExample";
import FormExmaple1 from "./component/FormExmaple1";

function App() {
  const user = {
    name: 'Sachin',
    age: 25,
    address: 'Pune'
  }

  const showAlert = () => {
    alert('Welcome to React');
  }
  
  const names = ['Sachin', 'Kumar', 'Raju'];
  return (
    <div className="App">
      {/* <FormExample/> */}
      <FormExmaple1/>
      {/* <UserCard user = {user} methodName={showAlert}/> */}
      {/* <Welcome name="Sachin" list = {names}/>  */}
      {/* <Welcome name = "Kumar"/>
      <Welcome/> */}
        {/* <Greeting isLoggedIn={false}/>
        <Counter/>
        <NameList/> */}
     </div>
  );
}

export default App;