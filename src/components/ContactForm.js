import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  formContainer: {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
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

      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={classes.formContainer}
          style={{ width: "300px" }} // Adjust the width as per your requirement
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
              className={classes.submitButton}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default ContactForm;
