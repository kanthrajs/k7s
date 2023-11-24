import { useState } from "react";
import { Button } from "./ReusableStyles";
import styled from 'styled-components'

import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme.config";

function Layout({children}){
    const [currentTheme, setCurrentTheme] = useState(0)
    const [changeLabel, setChangeLabel]= useState(false)
    const handleClick = ()=> {
        if (currentTheme === 1){
            setCurrentTheme(0)
        }
        else{
            setCurrentTheme(1)
        }
        
        setChangeLabel((changeLabel)=>!changeLabel)
    }
    return(
        <Main>
            <ThemeProvider theme={theme[currentTheme]}>
                <ButtonWrapper>
                    {changeLabel? (<ButtonWhite onClick={handleClick}>☀</ButtonWhite>) : (<Button onClick={handleClick}>☾</Button>) }
                </ButtonWrapper>
                {children}
            </ThemeProvider>
        </Main>
    );
}

export default Layout;

const Main = styled.main`
  min-height: 100vh;
  background: url('/bg.png') no-repeat;
  background-size: 100%;
  background-position: -50vh 10%;
  background-attachment: fixed;
  animation: slide 30s linear infinite;
  @media screen and (max-width: 768px) {
    background-size: 250%;
    background-position: -50vh 30vh;
   }
   /* Define the animation keyframes */
   @keyframes slide {
    0% {
      background-position: 100% 100%;
    }
    50%{
        background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
position: absolute;
margin: auto;
padding: 1rem;
top: 0;
right: 25%;
background-color: transparent;
@media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    right: 0;
}
`

const ButtonWhite = styled(Button)`
    color:white;
`