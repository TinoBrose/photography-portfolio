"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("message", message);

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="flex flex-col items-center h-full justify-center w-full">
      <div className="flex flex-col px-[24px] w-full p-2 sm:p-4 my-6 justify-center items-center max-w-[900px]">
        <h1 className="text-white text-2xl mb-[36px]">Get in touch</h1>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-stone-900 focus:border-stone-900"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-stone-900 focus:border-stone-900"
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-stone-900 focus:border-stone-900"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 text-lg text-white bg-stone-900 rounded-xl hover:opacity-80"
            >
              Absenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
