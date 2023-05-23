import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { AiFillRobot } from "react-icons/ai";
import Link from "next/link";

const ChatBot = ({ onExperienceClick }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [showClickHere, setShowClickHere] = useState(false);

  const router = useRouter();
  const chatRef = useRef(null); // Reference to the chat window

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
      "I am a front-end developer with expertise in React.js. If you want to know more about me...";
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

  const handleSkillsClick = () => {
    setShowClickHere(false);
    setMessage("Redirecting to Skills section....");
    setTimeout(() => {
      router.push("/about#skills");
      setOpen(false);
      setMessage("");
    }, 2000);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the chat window if a click occurs outside the chat window
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target) &&
        !event.target.classList.contains("react-icons")
      ) {
        handleClose();
      }
    };

    const handleEscapeKey = (event) => {
      // Close the chat window if the Escape key is pressed
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      
      <div className="fixed left-4  flex items-center justify-center overflow-hidden md:right-8 md:top-0 md:bottom-auto md:h-96 md:rounded-xl md:shadow-2xl">
        {open && (
          <div
            className="fixed top-0 left-0 right-0 bottom-4 h-screen flex items-center justify-center bg-black bg-opacity-50"
            ref={chatRef}
          >
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                Auto Text And Redirection Bot
              </h3>
              <p className="mb-4">{message}</p>
              {showClickHere && (
                <Link href="/about">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Click Here
                  </button>
                </Link>
              )}
              <div className="flex justify-center mt-4">
                {" "}
                {/* Updated to center the buttons */}
                <button
                  onClick={handleRoleClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  disabled={animationInProgress}
                >
                  Role
                </button>
                <button
                  onClick={handleAboutClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  disabled={animationInProgress}
                >
                  About
                </button>
                <button
                  onClick={handleExperienceClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  disabled={animationInProgress}
                >
                  Experience
                </button>
                <button
                  onClick={handleSkillsClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  disabled={animationInProgress}
                >
                  Skills
                </button>
                <button
                  onClick={handleClose}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  autoFocus
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleOpen}
          className="bg-black text-white rounded-full p-3"
        >
          <AiFillRobot className="text-white text-2xl" />
        </button>
      </div>
    </>
  );
};

export default ChatBot;
