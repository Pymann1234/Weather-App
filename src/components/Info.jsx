import { Box, Typography, styled } from "@mui/material" // Import Box and Typography components and styled utility from Material-UI
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from "@mui/icons-material" // Import icons from Material-UI

// Create a styled Typography component for displaying rows of information
const Row = styled(Typography)({
  padding: 10, // Padding around the text
  fontSize: 20, // Font size of the text
  letterSpacing: 2, // Spacing between letters
  '& > svg': { // Style applied to svg (icons) within the Row
    marginRight: 10, // Margin to the right of the icon
  }
});

// Create a styled Typography component for displaying error messages
const Error = styled(Typography)({
  color: 'Red', // Red color for the error text
  margin: 50, // Margin around the error message
  padding: 10, // Padding around the error text
})

// Define the Info functional component
const Info = ( { result }) => {

  return (
    // Check if result is not empty
    result && Object.keys(result).length > 0 ? 
    // If result is not empty, display the weather information
    <Box style={{margin: '30px 60px'}}> 
        <Row><LocationOn/>Location: {result.name}, {result.sys.country}</Row> {/* Display location */}
        <Row><SettingsBrightness/>Temperature: {result.main.temp}</Row> {/* Display temperature */}
        <Row><Opacity/>Humidity: {result.main.humidity}</Row> {/* Display humidity */}
        <Row><Brightness5/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()  }</Row> {/* Display sunrise time */}
        <Row><Brightness6/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row> {/* Display sunset time */}
        <Row><Dehaze/>Weather: {result.weather[0].main}</Row> {/* Display weather condition */}
        <Row><Cloud/>Cloud: {result.clouds.all}%</Row> {/* Display cloudiness percentage */}
    </Box>
    // If result is empty, display an error message
    : <Error>Please enter the values</Error>
  )
} 

export default Info // Export the Info component as the default export
