import styled from 'styled-components'
import Backgroud from '../../assets/Fundo1.svg'

export const Container = styled.div`
 background: url("${Backgroud}");
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 40px;
 height: 100vh;
`;
export const Image = styled.img`
margin-top: 30px;
`;

export const InputLabel = styled.p`
color: #EEEEEE;
font-size: 18px;
font-weight: bold;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
margin-left: 25px;

 `;
export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: rgba(255,255,255,0.25);
width: 342px;
height: 58px;
padding-left: 25px;
margin-bottom: 34px;
outline: none;
border:none;

font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color:#FFFFFF;
`;

