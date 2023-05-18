import React, { useState } from "react";
import TransitionEffect from '../components/TransitionEffect'
import axios from "axios";

const HireForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const email1 = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;
  console.log(email1,pass)
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

  return (
    <form onSubmit={handleSubmit}>
          <TransitionEffect />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Hire Me"}
      </button>
      {isSent && <p>Email sent successfully!</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default HireForm;
