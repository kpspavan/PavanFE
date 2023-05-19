import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import Link from "next/link";

const ChatBot = ({ onExperienceClick }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [showClickHere, setShowClickHere] = useState(false);

  const router = useRouter();

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
      "I am a front-end developer with expertise in Next.js and Tailwind CSS. If you want to know more about me...";
    let currentIndex = 0;

    const typeWriter = setInterval(() => {
      setMessage((prevMessage) => {
        if (currentIndex === aboutText.length) {
          clearInterval(typeWriter);
          setAnimationInProgress(false);
          setShowClickHere(true);
          return aboutText; // Return the entire text instead of appending it to the previous message
        }
        return aboutText.substring(0, currentIndex + 1); // Update the message with the current substring of the text
      });
      currentIndex++;
    }, 100);
  };

  const handleExperienceClick = () => {
    setShowClickHere(false);
    setMessage("Redirecting to experience section....");

    setTimeout(() => {
      router.push("/about#experience");
      setOpen(false);
      setMessage("");
    }, 2000);
  };

  const handleHireClick = () => {
    const email = "kpspavansrinivas@gmail.com";
    const subject = "Hiring Inquiry";
    const body = "Hello, I'm interested in hiring you for a project.";
  
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoUrl;
  };
  
  const handelclickhere = () => {
    setOpen(false);
    setShowClickHere(false);
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
      <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:top-0 md:bottom-auto md:h-96 md:rounded-xl md:shadow-2xl">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Chat with the ChatBot"}
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {message}
              {showClickHere && (
                <Link onClick={handelclickhere} href="/about">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Click Here
                  </button>
                </Link>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleRoleClick}
              color="primary"
              disabled={animationInProgress}
            >
              Role
            </Button>
            <Button
              onClick={handleAboutClick}
              color="primary"
              disabled={animationInProgress}
            >
              About
            </Button>
            <Button
              onClick={handleExperienceClick}
              color="primary"
              disabled={animationInProgress}
            >
              Experience
            </Button>
            <Button
              onClick={handleHireClick}
              color="primary"
              disabled={animationInProgress}
            >
              Hire
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default ChatBot;
