import { Box, InputBase, Button, styled } from "@mui/material"
import { useState } from "react";
import { getWeather } from "../services/api";

const Container = styled(Box)({
    backgroundColor: '#445A6F',
    padding: 10,    
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18,
});

const GetButton = styled(Button)({
    backgroundColor: '#E67E22',
});


const Form = ({ setResult }) => {

    const [data, setData] = useState({city: '', country: ''});

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (


    <Container>
        {/* name: To Differentiate between the two properties */}
        <Input onChange={(e) => handleChange(e)} name="city" placeholder="City"/>
        <Input onChange={(e) => handleChange(e)} name="country" placeholder="Country"/>
        <GetButton onClick={() => getWeatherInfo()} variant="contained">Get Weather</GetButton>
    </Container>
  ) 
}

export default Form 