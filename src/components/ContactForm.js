import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { MailOutline, CheckCircle } from "@material-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    position: "fixed",
    bottom: "60px",
    right: "15px",
    zIndex: 999,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: theme.spacing(2),
    width: "300px", // Adjust the width as per your requirement
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginBottom: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      }, 5000);
      setIsFormVisible(false)

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
            <Button
              variant="contained"
              color="primary"
              onClick={toggleFormVisibility}
              startIcon={<MailOutline />}
            >
              Contact
            </Button>
          </motion.div>

          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: 20 }}
                className={classes.formContainer}
                ref={formRef}
              >
                <Typography variant="h6" align="center">
                  Contact Form
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={classes.inputField}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={classes.inputField}
                    fullWidth
                  />
                  <TextField
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className={classes.inputField}
                    fullWidth
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    multiline
                    rows={4}
                    className={classes.inputField}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSending}
                    className={classes.submitButton}
                    fullWidth
                  >
                    {isSending ? "Sending..." : "Hire Me"}
                  </Button>
                  {error && (
                    <Typography
                      variant="body1"
                      align="center"
                      color="error"
                    >
                      {error}
                    </Typography>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
      {isSent && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 20 }}
            className={classes.formContainer}
            ref={formRef}
          >
            <Typography variant="h6" align="center">
              Email sent successfully
            </Typography>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ContactForm;
