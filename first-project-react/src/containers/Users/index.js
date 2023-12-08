import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import H1 from "../../components/Title"
import Button from "../../components/button"
import ContainerItens from "../../components/ContainersItens";
import { Container, Image, User } from "./styles"
import Avatar from '../../assets/Pessoas2.svg'
import Arrow from '../../assets/Seta.svg'
import Trash from '../../assets/Lixeira.svg'

const Users = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fethUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fethUsers();
  }, []);


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers);
  }
  function goBackPage() {
    navigate('/');
  }
  return (
    <Container>
      <Image alt="People talking" src={Avatar} />
      <ContainerItens isBlur= {true}>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="Seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>

    </Container>
  );
}
export default Users