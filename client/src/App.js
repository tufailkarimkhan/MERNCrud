import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const addToList = () => {
    Axios.post("http://localhost:8080/person", {
      name: name,
      age: age,
      email: email,
      address: address,
    });
    // console.log(`${name}: ${age}: ${email}: ${address}`);
  };
  return (
    <div className="App">
      <h1>Simple CRUD App</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="nubmer"
        placeholder="Enter Age"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <button onClick={addToList}>Add Person</button>
    </div>
  );
}

export default App;
