import React from "react";
import { CircularProgress, Alert, Box } from "@mui/material";

interface LoadingAndErrorWrapperProps {
  isLoading: boolean;
  error: string | null;
  children: React.ReactNode;
}

const LoadingAndErrorWrapper: React.FC<LoadingAndErrorWrapperProps> = ({
  isLoading,
  error,
  children,
}) => {
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <CircularProgress style={{ color: "#FFB52B" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert
        severity="error"
        sx={{ backgroundColor: "#FFB52B", color: "black" }}
        style={{ margin: "20px" }}
      >
        เกิดข้อผิดพลาด : {error}
      </Alert>
    );
  }

  return <>{children}</>;
};

export default LoadingAndErrorWrapper;
