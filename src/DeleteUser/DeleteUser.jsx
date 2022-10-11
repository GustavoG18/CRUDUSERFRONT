import axios from "axios";
import { useState } from "react";

export const DeleteUser = () => {
  const [state, setState] = useState({ 
    id: "",
  });

  const handleSetState = (value, atributo) => {
    const cloneState = { ...state };
    cloneState[atributo] = value;
    setState(cloneState);
  }

  const handleOnSubmit = () => {
    debugger;
    axios.delete("http://localhost:3001/api/deleteUser", state).then((response) => {
      setState({ 
        id: "",
      })
      alert("Usuario eliminado correctamente!");
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <h1>Elemina un usuario</h1>
      <input placeholder="Id" type="text" value={state.id} onChange={({ target }) => handleSetState(target.value, "id")}/>
      <button onClick={() => handleOnSubmit()}>Eliminar usuario</button>
    </div>
  );
}