import { Box, InputBase, Button, styled } from "@mui/material" // Import Box, InputBase, Button components, and styled utility from Material-UI
import { useState } from "react"; // Import useState hook from React
import { getWeather } from "../services/api"; // Import the getWeather function from the api service

// Create a styled Box component for the form container
const Container = styled(Box)({
    backgroundColor: '#445A6F', // Set background color
    padding: 10, // Padding around the container
});

// Create a styled InputBase component for input fields
const Input = styled(InputBase)({
    color: '#FFF', // Set text color to white
    marginRight: 20, // Margin to the right of the input field
    fontSize: 18, // Font size of the input text
});

// Create a styled Button component for the submit button
const GetButton = styled(Button)({
    backgroundColor: '#E67E22', // Set background color
});

// Define the Form functional component
const Form = ({ setResult }) => {
    // Declare state variable 'data' with initial state as an object with empty 'city' and 'country' properties
    const [data, setData] = useState({city: '', country: ''});

    // Handle changes in the input fields
    const handleChange = (e) => {
        // Update the 'data' state with the new input values
        setData({...data, [e.target.name]: e.target.value});
    }

    // Fetch weather information and update the result state
    const getWeatherInfo = async () => {
        // Call the getWeather function with city and country from the 'data' state
        let response = await getWeather(data.city, data.country);
        // Update the result state with the fetched weather information
        setResult(response);
    }

    return (
        // Render the form container
        <Container>
            {/* Render input fields and button */}
            {/* The 'name' attribute is used to differentiate between the 'city' and 'country' input fields */}
            <Input onChange={(e) => handleChange(e)} name="city" placeholder="City"/> {/* City input field */}
            <Input onChange={(e) => handleChange(e)} name="country" placeholder="Country"/> {/* Country input field */}
            <GetButton onClick={() => getWeatherInfo()} variant="contained">Get Weather</GetButton> {/* Button to fetch weather information */}
        </Container>
    ) 
}

export default Form // Export the Form component as the default export
