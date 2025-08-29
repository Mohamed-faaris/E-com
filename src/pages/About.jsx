import React from "react";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
      <p className="mt-2 text-gray-600">
        This is the about page of the application. Here, you can learn more
        about our mission and values.
      </p>
      <ContactForm />
    </div>
  );
};

export default About;
