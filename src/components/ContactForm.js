import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
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
      setIsFormVisible(false);

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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleFormVisibility}
            >
              Contact
            </button>
          </motion.div>

          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-60 right-15 z-50 bg-white shadow-md p-6 flex flex-col gap-4 w-96"
                ref={formRef}
              >
                <h3 className="text-xl font-bold text-center">Contact Form</h3>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="border border-gray-300 rounded px-3 py-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Hire Me"}
                  </button>
                  {error && (
                    <p className="text-red-500 text-center">{error}</p>
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
            className="fixed bottom-60 right-15 z-50 bg-white shadow-md p-6 flex flex-col gap-4 w-96"
            ref={formRef}
          >
            <h3 className="text-xl font-bold text-center">
              Email sent successfully
            </h3>
          </motion.div>
        </>
      )}
    </>
  );
};

export default ContactForm;
