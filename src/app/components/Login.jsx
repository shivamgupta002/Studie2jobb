import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

const Login = ({isLogin}) => {
  return (
    <>
      <Dialog open={isLogin}>
        <DialogTitle textAlign={"center"}>Login</DialogTitle>
      </Dialog>
    </>
  );
};

export default Login;
