import { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/img/seta_play.png";
import circularArrow from "../assets/img/seta_virar.png";

function Main({ entries, nClicks, setNClicks, current, setCurrent, grades }) {
    return (
        <>
            {entries.map((entry, idx) => (
                <Button
                    key={idx}
                    entry={entry}
                    idx={idx}
                    nClicks={nClicks}
                    setNClicks={setNClicks}
                    current={current}
                    setCurrent={setCurrent}
                    grades={grades}
                />
            ))}
        </>
    );
}

function Button({
    entry,
    idx,
    nClicks,
    setNClicks,
    current,
    setCurrent,
    grades,
}) {
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
    let border;
    let textDecoration;
    let textColor;

    if (nClicks[idx] === 0) {
        height = "65px";
        color = "#ffffff";
        fontWeight = "700";
        fontSize = "16px";
        lineHeight = "19px";
        positionButton = "";
        positionImage = "";
        textAlign = "center";
        icon = arrow;
        text = `Pergunta ${idx + 1}`;
    } else {
        height = "100px";
        color = "#ffffd5";
        fontWeight = "400";
        fontSize = "18px";
        lineHeight = "22px";
        positionButton = "relative";
        positionImage = "absolute";
        textAlign = "start";
        if (nClicks[idx] === 1) {
            icon = circularArrow;
            text = entry.question;
        } else {
            icon = null;
            text = entry.answer;
        }
    }

    if (grades[idx] !== 0) {
        if (grades[idx] === 3) {
            textColor = "#2FBE34";
            textDecoration = "line-through";
        } else if (grades[idx] === 2) {
            textColor = "#ff922e";
            textDecoration = "line-through";
        } else {
            textColor = "#ff3030";
            textDecoration = "line-through";
        }
    } else {
        textDecoration = "";
        textColor = "#333333";
    }

    if (idx === current) {
        border = "2px solid blue";
    } else {
        border = "none";
    }

    function updateClicks() {
        if (grades[idx] === 0) {
            const arr = [...nClicks];
            arr[idx] += 1;
            setNClicks(arr);
            setCurrent(idx);
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
            border={border}
            textDecoration={textDecoration}
            textColor={textColor}
            onClick={() => setCurrent(idx)}
        >
            <p>{text}</p>
            {icon ? (
                <img src={icon} alt="icon" onClick={() => updateClicks()} />
            ) : (
                ""
            )}
        </QuestionButtion>
    );
}

export default Main;

const QuestionButtion = styled.button`
    width: 300px;
    min-height: ${(props) => props.height};
    background-color: ${(props) => props.color};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${(props) => props.textAlign};
    justify-content: space-between;
    position: ${(props) => props.positionButton};
    border: ${(props) => props.border};
    p {
        font-family: "Recursive";
        font-style: normal;
        font-weight: ${(props) => props.fontWeight};
        font-size: ${(props) => props.fontSize};
        line-height: ${(props) => props.lineHeight};
        color: ${(props) => props.textColor};
        text-align: left;
        text-decoration: ${(props) => props.textDecoration};
    }

    img {
        position: ${(props) => props.positionImage};
        bottom: 10px;
        right: 10px;
    }

    img:hover {
        cursor: pointer;
    }
`;
