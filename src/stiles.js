import styled from 'styled-components'
import background from './assents/background1.svg'

export const Conteiner = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;

`;
export const Image = styled.img`
    margin-top: 30px;
`;
export const Conteineritens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;

    text-align: center;

    color: #FFFFFF;
    margin-bottom: 80px;
`;
export const InputLabel = styled.p`

    letter-spacing: -0.408px;

    color: #EEEEEE;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-left: 25px;
`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 25px;

    color: #FFFFFF;
`;
export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
&:hover{
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}
`;
export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;  
    margin-top: 20px;
p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
}
button {
    background: none;
    border: none;
    cursor: pointer;
}

`;

