import React, { useState } from "react";
import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Prompt = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleClickOpen = () => setOpen(true);
  const navigate = useNavigate();

  console.log(name);
  const toQuiz = () => {
    navigate("/quiz", { state: name });
  };
  return (
    <>
      <div style={{ marginTop: "20%" }}>
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          Go to quiz
        </Button>
      </div>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <form onSubmit={toQuiz}>
              <TextField
                label="Enter your Name"
                variant="outlined"
                size="small"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Button variant="outlined" type="submit">
                Start
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Prompt;
