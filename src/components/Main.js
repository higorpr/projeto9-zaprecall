import { useState } from "react";
import styled from "styled-components";
import deckReact from "../decks/deckReact";
import arrow from "../assets/img/seta_play.png";
import circularArrow from "../assets/img/seta_virar.png";

function Button({ entry, idx }) {
    const [nClicks, setNClicks] = useState(0);

    let height;
    let color;
    let fontWeight;
    let fontSize;
    let lineHeight;
    let positionButton;
    let positionImage;
    let textAlign;
    let icon;
    let text;

    if (nClicks === 0) {
        height = "65px";
        color = "#ffffff";
        fontWeight = "700";
        fontSize = "16px";
        lineHeight = "19px";
        positionButton = "";
        positionImage = "";
        textAlign = 'center';
        icon = arrow;
        text = `Pergunta ${idx + 1}`;
        
    } else {
        height = "100px";
        color = "#ffffd5";
        fontWeight = "400";
        fontSize = "18px";
        lineHeight = "22px";
        positionButton = "relative";
        positionImage = 'absolute';
        textAlign = 'start';
        if (nClicks === 1) {
            icon = circularArrow;
            text = entry.question;
        } else {
            icon = null;
            text = entry.answer;
        }
    }

    return (
        <QuestionButtion
            height={height}
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
            positionButton={positionButton}
            positionImage={positionImage}
            textAlign={textAlign}
            >
            <p>{text}</p>
            {icon ? (<img src={icon} alt="icon" onClick={() => setNClicks(nClicks + 1)} />) : ''}
        </QuestionButtion>
    );
}

function Main() {
    
    return (
        <>
            {deckReact.map((entry, idx) => (
                <Button key={idx} entry={entry} idx={idx} />
            ))}
        </>
    );
}

export default Main;

const QuestionButtion = styled.button`
    width: 300px;
    min-height: ${props => props.height};
    background-color: ${props => props.color};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${props => props.textAlign};
    justify-content: space-between;
    position: ${props => props.positionButton};

    p {
        font-family: "Recursive";
        font-style: normal;
        font-weight: ${props => props.fontWeight};
        font-size: ${props => props.fontSize};
        line-height: ${props => props.lineHeight};
        color: #333333;
        text-align: left;
    }

    img {
        position: ${props => props.positionImage};
        bottom: 10px;
        right: 10px;
    }

    img:hover{
        cursor: pointer;
    }
`;
