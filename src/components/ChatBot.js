import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Tooltip } from '@mui/material';
import { AiFillRobot } from 'react-icons/ai';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const handleOpen = () => {
    setOpen(true);
    setTooltipVisible(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setTooltipVisible(true);
  };

  const handleRoleClick = () => {
    setMessage('Front-end developer');
  };

  const handleAboutClick = () => {
    setMessage('I am a front-end developer with expertise in Next.js and Tailwind CSS.');
  };

  const handleHireClick = () => {
    window.location.href = 'mailto:kpspavansrinivas@gmail.com';
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
      <Tooltip title="Click to open chat" arrow open={tooltipVisible && !open} placement="top">
        <Button onClick={handleOpen} variant="outlined" color="primary">
          <AiFillRobot />
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="chatbot-dialog-title">
        <DialogTitle id="chatbot-dialog-title">Chatbot</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message ? (
              <p className="text-gray-800">{message}</p>
            ) : (
              <>
                <Button onClick={handleRoleClick} variant="outlined" color="primary">
                  Role
                </Button>
                <Button onClick={handleAboutClick} variant="outlined" color="primary">
                  Tell me about yourself
                </Button>
                <Button onClick={handleHireClick} variant="outlined" color="primary">
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
    </>
  );
};

export default ChatBot;
