import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MESSAGE from "../assets/message.svg";

import { Element } from "react-scroll";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // stop page reload

    //  Confirmation popup
    const confirmSend = window.confirm(
      "Are you sure you want to send this message?",
    );

    if (!confirmSend) return; //  stop if user clicks Cancel

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alert("Message sent successfully ✅");
        console.log("Result : ", result);
      },
      (error) => {
        alert("Something went wrong ❌");
        console.log("Error :", error);
      },
    );
  };

  return (
    <Element name="contact">
      <section className=" flex flex-col  gap-20 items-center md:items-start md:flex-row justify-between px-2 lg:px-10 xl:px-40 rounded-t-2xl py-10 bg-linear-to-r from-blue-400/50 to-violet-400/50">
        <div className="flex flex-col  items-center ">
          <div className="flex flex-col  gap-2 mb-9 text-gray-300">
            <h4 className="text-xl mx-auto md:mx-0 md:text-4xl md:font-bold mb-4 bg-linear-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent">
              #Contact Us
            </h4>
            <p className=" mb-3 md:w-95 lg:w-120">
              Feel free to reach out via email, phone, or by filling out the
              form on right side. I’ll get back to you as soon as possible.
            </p>
            <p>📧 : dheetchithselvan12@gmail.com</p>
            <p>📞 : 9019374611</p>
          </div>
          <img src={MESSAGE} alt="" className="w-50 md:w-70 lg:w-90" />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-5 bg-black/20  rounded-xl border border-white/10 backdrop-filter backdrop-blur-md  shadow-lg">
          <h3 className="text-3xl font-bold bg-linear-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent">
            Get in Touch
          </h3>
          <p className="text-gray-400 ">You can reach out me anytime</p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 mt-4"
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="border border-white/40 p-2 rounded-full px-4 outline-0"
            />
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="border border-white/40 p-2 rounded-full px-4 outline-0"
            />
            <label htmlFor="Msg">Write your message below</label>
            <textarea
              id="Msg"
              name="message"
              placeholder="Type your text"
              required
              className="border border-white/40 p-2 rounded-lg h-40 outline-0"
            />
            <button
              type="submit"
              className="bg-linear-to-r from-violet-700 to-violet-400  hover:from-violet-500 hover:to-violet-400 py-2 rounded-sm transition cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
