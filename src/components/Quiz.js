import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import React from "react";
  import { useLocation } from "react-router-dom";
  
  const Quiz = () => {
    const { state } = useLocation();
    console.log(state);
    return (
      <div>
        <h1>Welcome {state}</h1>
        <Box>
          <div>Q1: How old are you?</div>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Box>
      </div>
    );
  };
  
  export default Quiz;
  