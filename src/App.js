import React, { useState, useRef } from "react";
import { Conteiner, Image, Conteineritens, H1, InputLabel, Input, Button, User } from "./stiles"
import axios from 'axios'
import Avatar from './assents/avatar.svg'
import Arrow from './assents/arrow.svg'
import Trash from './assents/trash.svg'

const App = () => {
  const [Users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser () {

    const {data: newUser} = await axios.post("http://localhost:3001/users",{
      name:inputName.current.value, 
      age: inputAge.current.value,
    });
        setUsers([...Users, newUser ]);
    }

    const deleteUser = (userId) =>{
      const newUsers = Users.filter(user => user.id !== userId)
      setUsers(newUsers)
    }


  return (
    <Conteiner>
      <Image alt="logo-imagem" src={Avatar} />
      <Conteineritens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="Seta" src={Arrow} />
        </Button>
        <ul>
          {Users.map((user) => (
            <User key={user.id}>
              <p>{user.Name}</p> <p>{user.Age}</p>
              <button onClick={()=>deleteUser(user.id)}><img alt="Lixeira" src={Trash} /></button>
            </User>
          ))}
        </ul>
      </Conteineritens>
    </Conteiner>
  );
}
export default App