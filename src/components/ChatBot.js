import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
} from "@mui/material";
import { AiFillRobot } from "react-icons/ai";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [animationInProgress, setAnimationInProgress] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTooltipVisible(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setTooltipVisible(true);
    setAnimationInProgress(false);
  };
  
  const handleRoleClick = () => {
    setAnimationInProgress(true);
    setMessage(""); // Reset previous message
  
    const roleText = "Front-end developer";
    let currentIndex = 0;
  
    const typeWriter = setInterval(() => {
      setMessage((prevMessage) => {
        if (currentIndex === roleText.length) {
          clearInterval(typeWriter);
          setAnimationInProgress(false);
          return roleText; // Return the entire text instead of appending it to the previous message
        }
        return roleText.substring(0, currentIndex + 1); // Update the message with the current substring of the text
      });
      currentIndex++;
    }, 100);
  };
  
  const handleAboutClick = () => {
    setAnimationInProgress(true);
    setMessage(""); // Reset previous message
  
    const aboutText =
      "I am a front-end developer with expertise in Next.js and Tailwind CSS.";
    let currentIndex = 0;
  
    const typeWriter = setInterval(() => {
      setMessage((prevMessage) => {
        if (currentIndex === aboutText.length) {
          clearInterval(typeWriter);
          setAnimationInProgress(false);
          return aboutText; // Return the entire text instead of appending it to the previous message
        }
        return aboutText.substring(0, currentIndex + 1); // Update the message with the current substring of the text
      });
      currentIndex++;
    }, 100);
  };
  
  

  const handleHireClick = () => {
    window.location.href = "mailto:kpspavansrinivas@gmail.com";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTooltipVisible((prevVisible) => !prevVisible);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Tooltip
        title="Click to open chat"
        arrow
        open={tooltipVisible && !open}
        placement="top"
      >
        <div>
          <div>
            <Button
              onClick={handleOpen}
              variant="outlined"
              color="primary"
              style={{
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "12px",
              }}
            >
              <AiFillRobot style={{ color: "white", fontSize: "24px" }} />
            </Button>
          </div>
        </div>
      </Tooltip>
      <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:top-0 md:bottom-auto md:left-auto md:absolute">
        <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="chatbot-dialog-title"
          >
            <DialogTitle id="chatbot-dialog-title">Chatbot</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {message ? (
                  <p className="text-gray-800">{message}</p>
                ) : (
                  <>
                    <Button
                      onClick={handleRoleClick}
                      variant="outlined"
                      color="primary"
                    >
                      Role
                    </Button>
                    <Button
                      onClick={handleAboutClick}
                      variant="outlined"
                      color="primary"
                    >
                      Tell me about yourself
                    </Button>
                    <Button
                      onClick={handleHireClick}
                      variant="outlined"
                      color="primary"
                    >
                      Hire me
                    </Button>
                  </>
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
