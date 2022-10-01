import styled from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <>
            <GlobalStyle />
            <ScreenContainer>
                <Header />
                <Main />
                <Footer />
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
