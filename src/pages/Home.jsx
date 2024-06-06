import { useState } from "react" // Import useState hook from React for state management
import { Box, styled } from "@mui/material" // Import Box component and styled utility from Material-UI
import Sunset from "../assets/bg.jpg" // Import background image
import Form from "../components/Form" // Import Form component
import Info from "../components/Info" // Import Info component

// Create a styled Box component for the main container
const Component = styled(Box)({
    height: '100vh', // Full viewport height
    display: 'flex', // Flexbox layout
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
});

// Create a styled Box component for the image container
const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`, // Set background image
    width: '27%', // Image container width
    height:'80%', // Image container height
    backgroundSize: 'cover', // Ensure the image covers the entire container
    borderRadius: '20px 0 0 20px', // Rounded corners on the left side
});

// Create a styled Box component for the content wrapper
const ContentWrapper = styled(Box)({
    width: '73%', // Content wrapper width
    height: '80%', // Content wrapper height
    marginLeft: '20px', // Space between image and content
});

// Define the Home functional component
const Home = () => {
    const [result, setResult] = useState({}) // Declare state variable 'result' with an empty object as the initial value

    return (
        <Component>
            <Image /> {/* Render the image container */}
            <ContentWrapper> {/* Render the content wrapper */}
                <Form setResult={setResult}/> {/* Render the Form component and pass setResult function as a prop */}
                <Info result={result}/> {/* Render the Info component and pass result state as a prop */}
            </ContentWrapper>
        </Component>
    )
}

export default Home // Export the Home component as the default export
