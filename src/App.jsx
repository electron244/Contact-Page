import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Contact from "./components/Contact/Contact";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Contact></Contact>
        <Form></Form>
      </div>
    </>
  );
}

export default App;
