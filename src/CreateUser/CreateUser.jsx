import axios from "axios";
import { useState } from "react";

export const CreateUser = () => {
  const [state, setState] = useState({ 
    name: "",
    lastname: "",
    age: "",
    typeId: "",
    id: "",
  });

  const handleSetState = (value, atributo) => {
    const cloneState = { ...state };
    cloneState[atributo] = value;
    setState(cloneState);
  }

  const handleOnSubmit = () => {
    axios.post("http://localhost:3001/api/createUser", state).then((response) => {
      setState({ 
        name: "",
        lastname: "",
        age: "",
        typeId: "",
        id: "",
      })
      alert("Usuario creado correctamente!");
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <h1>Crea un usuario</h1>
      <input placeholder="Name" type="text" value={state.name} onChange={({ target }) => handleSetState(target.value, "name")}/>
      <input placeholder="Lastname" type="text" value={state.lastname} onChange={({ target }) => handleSetState(target.value, "lastname")}/>
      <input placeholder="Age" type="text" value={state.age} onChange={({ target }) => handleSetState(target.value, "age")}/>
      <input placeholder="Type Id" type="text" value={state.typeId} onChange={({ target }) => handleSetState(target.value, "typeId")}/>
      <input placeholder="Id" type="text" value={state.id} onChange={({ target }) => handleSetState(target.value, "id")}/>
      <button onClick={() => handleOnSubmit()}>Crear usuario</button>
    </div>
  );
}