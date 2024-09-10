import { Dialog, DialogTitle } from "@mui/material";

import React from "react";

const signup = ({isSignUp}) => {
  return (
    <Dialog open={isSignUp}>
      <DialogTitle textAlign={"center"}>Sign Up</DialogTitle>
    </Dialog>
  );
};

export default signup;
