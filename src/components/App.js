import styled from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import deckReact from "../decks/deckReact";
import { useState } from "react";

function App() {
    const [began, setBegan] = useState(false);
    const [nClicks, setNClicks] = useState(new Array(deckReact.length).fill(0));
    const [grades, setGrades] = useState(new Array(deckReact.length).fill(0));
    const [current, setCurrent] = useState(-1);

    return (
        <>
            <GlobalStyle />
            <ScreenContainer>
                {began === false ? (
                    <FrontPage setBegan={setBegan} />
                ) : (
                    <MainApp
                        entries={deckReact}
                        nClicks={nClicks}
                        setNClicks={setNClicks}
                        grades={grades}
                        setGrades={setGrades}
                        current={current}
                        setCurrent={setCurrent}
                    />
                )}
            </ScreenContainer>
        </>
    );
}

function MainApp({
    entries,
    nClicks,
    setNClicks,
    grades,
    setGrades,
    current,
    setCurrent,
}) {
    return (
        <>
            <Header />

            <Main
                entries={entries}
                nClicks={nClicks}
                setNClicks={setNClicks}
                current={current}
                setCurrent={setCurrent}
                grades={grades}
            />

            <Footer
                nClicks={nClicks}
                setNClicks={setNClicks}
                grades={grades}
                setGrades={setGrades}
                current={current}
            />
        </>
    );
}

export default App;

// Styled Components
const ScreenContainer = styled.div`
    /* background-color: black; */
    background-color: #fb6b6b;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;
