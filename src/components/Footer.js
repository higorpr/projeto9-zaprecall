import styled from "styled-components";

function Button() {
    return (
        <ButtonContainer>
            
        </ButtonContainer>
    )
}

function Footer() {
    return <FooterContainer>TESTE PÉ</FooterContainer>;
}

export default Footer;

// Styled Components

const FooterContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`;

const ButtonContainer = styled.div``;

const FooterButton = styled.button``;

// .footer-concluidos {
//   width: 100%;
//   min-height: 50px;
//   background-color: #FFFFFF;
//   position: fixed;
//   bottom: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Recursive';
//   font-weight: 400;
//   font-size: 18px;
//   color: #333333;
//   padding: 10px;
// }

// .footer-concluidos > .container-botoes {
//   display: flex;
//   width: 80%;
//   justify-content: space-between;
//   margin: 20px;
// }

// /* Você vai precisar trocar a cor dos botões e alguns textos!
//   VERDE = "#2FBE34"
//   AMARELO = "#FF922E"
//   VERMELHO = "#FF3030"
//   CINZA = "#333333"
// */

// .container-botoes > button {
//     width: 90px;
//     font-family: 'Recursive';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 14px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: #FFFFFF;
//     background: blue;
//     border-radius: 5px;
//     border: 1px solid blue;
//     padding:5px;
//   }
