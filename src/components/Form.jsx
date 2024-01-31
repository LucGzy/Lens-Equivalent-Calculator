// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xoqornjl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <label htmlFor="email">Your Email Address</label>
      <input id="email" type="email" name="email" className="border" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Your message</label>
      <textarea id="message" name="message" className="border" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-zinc-500 border-1 rounded-lg border w-fit self-center p-2  mt-4"
      >
        Send
      </button>
    </form>
  );
}
