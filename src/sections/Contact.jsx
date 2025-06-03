import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import useRecaptcha from "../components/useCaptcha";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const [errors, setErrors] = useState({
    statusCode: null,
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const googleNonClickRegexKeyword = "(?:^|\W)rocket(?:$|\W)"
    // const googleNonClickRegexKeyword = "\brocket\b"
    const googleNonClickRegexKeyword = "/g-recaptcha-response+/";

    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", title: "", message: "" });
      handleRecaptcha("");
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error("Error:", error); // Optional: show toast
      setErrors({
        statusCode: error.status,
        // text: error.text.text()
        text:
          error.text ==
          "reCAPTCHA: The g-recaptcha-response parameter not found"
            ? "Please validate you're not a robot"
            : "",
      });
      setTimeout(() => {
        setErrors({
          statusCode: null,
          text: "",
        });
      }, 5000); // wait 5 seconds, then reset to false
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your full name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="title">Your Email Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="What’s your email title?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How may I help you?"
                    rows="4"
                    required
                  />
                </div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptcha}
                />

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {errors.statusCode ? (
                  <div className="w-full h-full md:px-10 px-5">
                    <p>{errors.text}</p>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
