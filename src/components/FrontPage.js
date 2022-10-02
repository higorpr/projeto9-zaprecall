import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function FrontPage({ setBegan }) {
    return (
        <BeginPage>
            <img src={logo} alt="" />
            <p>ZapRecall</p>
            <button onClick={() => setBegan(true)} data-identifier="start-btn">
                Iniciar Recall!
            </button>
        </BeginPage>
    );
}

const BeginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:148px 0 202px 0;
    /* background-color: blue; */
    /* height: 100vh;
    width: 100vw; */
    p {
        font-weight: 400;
        font-size: 36px;
        color: #ffffff;
        text-align: center;
        font-family: "Righteous";
        margin-bottom: 30px;
        
    }

    img {
        width: 136px;
        height: 161px;
        margin-bottom: 30px;
    }

    button {
        width: 246px;
        height: 54px;
        background-color: #ffffff;
        color: #d70900;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 21.6px;
        text-align: center;
        border-radius: 5px;
        border:none;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.15);
    }
`;
