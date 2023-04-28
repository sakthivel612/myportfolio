import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email : <span>sv69811@gmail.com</span>
        </p>
        <p>
          GitHub Username : <span>@sakthivel612</span>
        </p>
        <p>
          Mobile Number : <span>+91 63829 69375</span>
        </p>
        <div className="contact_icons">
          <a href="https://www.linkedin.com/in/sakthi-vel-0121bb245/">
            <IconButton >
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/___sakthi_____/">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href="https://github.com/sakthivel612">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
