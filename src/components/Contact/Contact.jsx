import styles from "./Contact.module.scss";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { GoMail } from "react-icons/go";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setText("");

    emailjs
      .sendForm(
        "gmail01",
        "template_3uquq8g",
        form.current,
        "QzhfDav8tKabCz7Xv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactDetails}>
          <div className={styles.icon}>
            <GoMail />
          </div>
          <h4>Contact Me</h4>

          <h5>Leave me a Message</h5>
          <p>
            for more info about my projects or another questions please feel
            free to get in touch with me
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name*"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          {/* <label>Email</label> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email*"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {/* <label>Email</label> */}
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject*"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
          {/* <label>Message</label> */}
          <textarea
            name="message"
            rows="10"
            cols="33"
            placeholder="Please type your message here*"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
          />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
