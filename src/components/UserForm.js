import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography, Stack, Grid, Paper, Item } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { add } from '../redux/detailSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const { detailItem } = useSelector((state) => state.detail)
  console.log(detailItem)

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    occasion: "",
    date: "",
    timing: "",
    address: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };


  const handleSubmit = () => {
    dispatch(add(inputs))
    navigate('/invitation')
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <Box className="loginbox"
          maxWidth={410}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          marginBottom={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
            color="white"
          >
            ENTER DETAILS
          </Typography>
          <Typography
            variant="p"
            sx={{ textTransform: "uppercase" }}
            // padding={3}
            textAlign="left"
            color="white"
          >
            ENTER NAME
          </Typography>
          <TextField
            style={{ width: '300px' }}
            placeholder="NAME"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type={"text"}
            required
            sx={{ input: { backgroundColor: 'white', borderRadius: '15px' } }}
          />

          <Typography
            variant="p"
            sx={{ textTransform: "uppercase" }}
            // padding={3}
            textAlign="left"
            color="white"
          >
            ENTER OCCASION
          </Typography>
          <TextField
            style={{ width: '300px' }}
            placeholder="OCCASION"
            value={inputs.occasion}
            onChange={handleChange}
            name="occasion"
            margin="normal"
            type={"text"}
            required
            sx={{ input: { backgroundColor: 'white', borderRadius: '15px' } }}
          />

          <Typography
            variant="p"
            sx={{ textTransform: "uppercase" }}
            textAlign="left"
            color="white"
          >
            ENTER DATE
          </Typography>
          <TextField
            style={{ width: '300px' }}
            placeholder="DATE"
            value={inputs.date}
            onChange={handleChange}
            name="date"
            margin="normal"
            type={"date"}
            required
            sx={{ input: { backgroundColor: 'white', borderRadius: '15px' } }}
          />

          <Typography
            variant="p"
            sx={{ textTransform: "uppercase" }}
            textAlign="left"
            color="white"
          >
            ENTER TIME
          </Typography>
          <TextField
            style={{ width: '300px' }}
            placeholder="TIMING"
            value={inputs.timing}
            onChange={handleChange}
            name="timing"
            margin="normal"
            type={"time"}
            required
            sx={{ input: { backgroundColor: 'white', borderRadius: '15px' } }}
          />

          <Typography
            variant="p"
            sx={{ textTransform: "uppercase" }}
            textAlign="left"
            color="white"
          >
            ENTER ADDRESS
          </Typography>
          <TextField
            style={{ width: '300px' }}
            placeholder="ADDRESS"
            value={inputs.address}
            onChange={handleChange}
            name="address"
            margin="normal"
            type={"text"}
            required
            sx={{ input: { backgroundColor: 'white', borderRadius: '15px' } }}
          />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            style={{ backgroundColor: 'gold' }}
          >
            Submit
          </Button>

        </Box>
      </form>

    </>
  );
};

export default UserForm;