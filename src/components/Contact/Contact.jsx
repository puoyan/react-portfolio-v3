import styles from "./Contact.module.scss";

import emailjs from "@emailjs/browser";
import { GoMail } from "react-icons/go";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
            required
          />
          {/* <label>Email</label> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email*"
            required
          />
          {/* <label>Email</label> */}
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject*"
            required
          />
          {/* <label>Message</label> */}
          <textarea
            name="message"
            rows="10"
            cols="33"
            placeholder="Please type your message here*"
            required
          />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
