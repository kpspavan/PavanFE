import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

const ContactForm = () => {
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsFormVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isSent) {
      const timeout = setTimeout(() => {
        setIsSent(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setNameError("");
        setEmailError("");
        setSubjectError("");
        setMessageError("");
      }, 2000);
      setIsFormVisible(false);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      await axios.post("/api/send-email", { name, email, subject, message });
      setIsSent(true);
    } catch (error) {
      setError("Failed to send email");
      console.error("Failed to send email", error);
    } finally {
      setIsSending(false);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (subject.trim() === "") {
      setSubjectError("Subject is required");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a library or regex for more accurate validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {!isSent && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleFormVisibility}
            >
              <FaEnvelope className="mr-2 inline-block" />
              Contact
            </button>
          </motion.div>

          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
              >
                <div className="bg-white rounded-lg p-6 w-96" ref={formRef}>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Contact Form
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() =>
                          setNameError(name.trim() === "" ? "Name is required" : "")
                        }
                        className={`border ${
                          nameError ? "border-red-500" : "border-gray-300"
                        } rounded px-3 py-2 w-full`}
                      />
                      {nameError && (
                        <p className="text-red-500 mt-1">{nameError}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() =>
                          setEmailError(email.trim() === "" ? "Email is required" : "")
                        }
                        className={`border ${
                          emailError ? "border-red-500" : "border-gray-300"
                        } rounded px-3 py-2 w-full`}
                      />
                      {emailError && (
                        <p className="text-red-500 mt-1">{emailError}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        onBlur={() =>
                          setSubjectError(subject.trim() === "" ? "Subject is required" : "")
                        }
                        className={`border ${
                          subjectError ? "border-red-500" : "border-gray-300"
                        } rounded px-3 py-2 w-full`}
                      />
                      {subjectError && (
                        <p className="text-red-500 mt-1">{subjectError}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() =>
                          setMessageError(message.trim() === "" ? "Message is required" : "")
                        }
                        className={`border ${
                          messageError ? "border-red-500" : "border-gray-300"
                        } rounded px-3 py-2 w-full`}
                        rows={4}
                      />
                      {messageError && (
                        <p className="text-red-500 mt-1">{messageError}</p>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={isSending}
                      >
                        {isSending ? "Sending..." : "Send"}
                      </button>
                    </div>

                    {error && (
                      <p className="text-red-500 text-center mt-2">{error}</p>
                    )}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {isSent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              Message Sent!
            </h3>
            <p className="text-center">Thank you for contacting me.</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ContactForm;
