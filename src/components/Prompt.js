import React, { useState } from "react";
import { Button, Dialog, DialogContent, TextField } from "@mui/material";

const Prompt = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleClickOpen = () => setOpen(true);

  console.log(name);
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
            <TextField
              label="Enter your Name"
              variant="outlined"
              size="small"
              onChange={(e) => setName(e.target.value)}
            />
            <Button variant="outlined">Start</Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Prompt;
