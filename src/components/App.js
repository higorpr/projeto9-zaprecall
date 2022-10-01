import styled from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import deckReact from "../decks/deckReact";
import { useState } from "react";

function MainApp() {
    return (
        <>
            <Header />
            <Main entries={deckReact} />
            <Footer />
        </>
    );
}

function App() {
    const [began, setBegan] = useState(false);
    return (
        <>
            <GlobalStyle />
            <ScreenContainer>
                {began === false ? <FrontPage setBegan={setBegan}/> : <MainApp />}
            </ScreenContainer>
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
