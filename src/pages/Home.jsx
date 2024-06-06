import { useState } from "react"
import { Box, styled } from "@mui/material"
import Sunset from "../assets/bg.jpg"
import Form from "../components/Form"
import Info from "../components/Info"

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
});

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height:'80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
});

const ContentWrapper = styled(Box)({
    width: '73%', // Adjusted width
    height: '80%',
    marginLeft: '20px', // Added margin for spacing between image and content
});

const Home = () => {
    const [result, setResult] = useState({})
    
    return (
        <Component>
            <Image />
            <ContentWrapper>
                <Form setResult={setResult}/>
                <Info result={result}/>
            </ContentWrapper>
        </Component>
    )
}

export default Home
