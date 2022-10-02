import styled from "styled-components";

function Footer({ nClicks, setNClicks, grades, setGrades, current }) {
    return (
        <FooterContainer>
            <ButtonContainer>
                <Button
                    order={1}
                    nClicks={nClicks}
                    setNClicks={setNClicks}
                    grades={grades}
                    setGrades={setGrades}
                    current={current}
                >
                    <p>Não lembrei</p>
                </Button>
                <Button
                    order={2}
                    nClicks={nClicks}
                    setNClicks={setNClicks}
                    grades={grades}
                    setGrades={setGrades}
                    current={current}
                >
                    <p>Quase não lembrei</p>
                </Button>
                <Button
                    order={3}
                    nClicks={nClicks}
                    setNClicks={setNClicks}
                    grades={grades}
                    setGrades={setGrades}
                    current={current}
                >
                    <p>Zap!</p>
                </Button>
            </ButtonContainer>
        </FooterContainer>
    );
}

function Button(props) {
    
    const { order, nClicks, setNClicks, grades, setGrades, current } = props;
    

    function defineGrade(grade) {
        if (nClicks[current] === 1  || nClicks[current] === 2) {
            let arrClick = [...nClicks];
            arrClick[current] = 0;
            setNClicks(arrClick);
            let arrGrades = [...grades];
            arrGrades[current] = grade;
            setGrades(arrGrades);
            console.log({arrGrades})
        }
    }

    let color;

    if (order === 1) {
        color = "#FF3030";
    } else if (order === 2) {
        color = "#FF922E";
    } else {
        color = "#2FBE34";
    }
    return (
        <FooterButton color={color}>
            <div onClick={() => defineGrade(order)}>{props.children}</div>
        </FooterButton>
    );
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

const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`;

const FooterButton = styled.button`
    width: 90px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: ${(props) => props.color};
    border-radius: 5px;
    border: none;
    padding: 5px;
`;

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
