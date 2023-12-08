import React, { useState, useRef } from "react";
import { useNavigate } from "react-router"
import H1 from '../../components/Title'
import Button from '../../components/button';
import ContainerItens from "../../components/ContainersItens";
import axios from 'axios';
import { Container, InputLabel, Input, Image } from "./styles";
import People from '../../assets/Pessoas1.svg';
import Arrow from '../../assets/Seta.svg';



const App = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const InputName = useRef();
  const InputAge = useRef()


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: InputName.current.value, age: InputAge.current.value });

    setUsers([...users, newUser]);
    navigate('/usuarios');
  }

  return (
    <Container>
      <Image alt="People talking" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="Seta" src={Arrow} />
        </Button>
      </ContainerItens>

    </Container>
  );
}
export default App