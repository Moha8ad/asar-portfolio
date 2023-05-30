import { Box, Button } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const previousTimeRef = useRef(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - previousTimeRef.current;
      const interval = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTimeRef.current);
        previousTimeRef.current = currentTime - startTimeRef.current;
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time / 60000) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{formatTime(elapsedTime)}</h1>
      <Button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</Button>
    </Box>
  );
};

export default Timer;
