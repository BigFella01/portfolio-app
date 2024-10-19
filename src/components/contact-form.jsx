"use client";

import { submitForm } from "@/actions";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const result = await submitForm(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Form submitted!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        className="bg-gray-900 py-4 px-2 rounded-2xl focus:outline focus:outline-purple-500"
        name="name"
        label="Name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <input
        type="text"
        className="bg-gray-900 py-4 px-2 rounded-2xl focus:outline focus:outline-purple-500"
        name="email"
        label="Email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <input
        type="text"
        className="bg-gray-900 py-4 px-2 rounded-2xl focus:outline focus:outline-purple-500"
        name="subject"
        label="Subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <textarea
        className="bg-gray-900 py-4 px-2 rounded-2xl focus:outline focus:outline-purple-500"
        name="message"
        label="Message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        autoComplete="off"
        rows="8"
      />
      <Button type="submit" className="bg-purple-500">
        Submit
      </Button>
    </form>
  );
}
