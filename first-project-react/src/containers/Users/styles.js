import styled from 'styled-components'
import Backgroud from '../../assets/Fundo2.svg'

export const Container = styled.div`
 background: url("${Backgroud}");
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 height: 100%;
 min-height: 100vh;

`;
export const Image = styled.img`
margin-top: 30px;
`;
export const ContainerItens = styled.div`
border-radius: 61px 61px 0px 0px;
background: linear-gradient(157.44deg,
 rgba(255, 255, 255, 0.6) 0.84%,
 rgba(255, 255, 255, 0.6) 0.85%, 
 rgba(255, 255, 255, 0.15) 100%);
 padding: 50px 36px;
 display: flex;
 flex-direction: column;
 height: 100%;
`;
export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px 0px #00000040;
background: rgba(255,255,255,0.25);
width: 342px;
height: 58px;
outline: none;
border:none;
margin-top: 20px;
p {font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color:#FFFFFF;
}
button {
    background: none;
    border: none;
    cursor: pointer;
}
`;
