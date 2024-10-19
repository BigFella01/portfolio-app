import ContactForm from "@/components/contact-form";
import { Link } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <div className="px-8 py-8 my-8 max-w-[1024px] w-full mx-auto">
      <h3 className="text-4xl text-purple-300 mb-4">Contact Me</h3>
      <p className="text-lg mb-8">
        I'd love to hear from you. Whether you have a question, a projec idea,
        or just want to say hi, feel free to reach out!
      </p>
      <p className="text-xl mb-2">
        Phone number: <span className="text-purple-300">731-879-9189</span>
      </p>
      <p className="text-xl mb-2">
        Email: <span className="text-purple-300">Haydenj637@gmail.com</span>
      </p>
      <p className="text-xl mb-16">
        LinkedIn:{" "}
        <Link
          href="https://www.linkedin.com/in/hayden-jenkins-50aa95204/"
          className="text-purple-300 text-xl"
        >
          https://www.linkedin.com/in/hayden-jenkins-50aa95204/
        </Link>
      </p>
      <h3 className="text-4xl text-purple-300 mb-4">Contact Form</h3>
      <p className="text-lg mb-8">
        If you prefer, you can also fill out the form below, and I’ll get back
        to you as soon as possible!
      </p>
      <ContactForm />
    </div>
  );
}
