import "./App.css";
import { UserProvider } from "./Components/UserContext";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserForm />
        <UserList />
      </UserProvider>
    </div>
  );
}

export default App;
