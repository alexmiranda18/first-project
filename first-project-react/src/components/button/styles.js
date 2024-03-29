import styled from 'styled-components'

export const Button = styled.button`
background:${ props => props.isBack ? 'transparent' : '#000000CC'} ;
width: 342px;
height: 74px;
margin-top: 132px;
border-radius: 14px;
border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
font-style:normal;
font-weight:bold;
font-size:17px;
line-height: 28px;
color:#FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content:center;
gap: 20px;
&:hover{
    opacity:0.8;
}
&:hover{
    opacity:0.5;
}
img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
}
`;