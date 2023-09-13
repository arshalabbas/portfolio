import InputField from "../components/InputField";
import MessageField from "../components/MessageField";
import Wave from "../components/Wave";

import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  return (
    <section className="bg-white h-screen text-black w-full">
      <Wave />
      <div className="bs-container flex flex-col items-center">
        <h1 className="black-title to-reveal from-l">Contact Me!</h1>
        <p className="text-center opacity-70 max-md:text-sm font-biriyani to-reveal from-r">
          Have a question or want to work together?
        </p>
        <div className="my-7">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <InputField placeholder="Name" name="name" type="text" />
            <InputField placeholder="Email" name="email" type="email" />
            <MessageField name="message" />
            <button
              type="submit"
              disabled={state.submitting}
              className={`w-64 py-3 uppercase font-biriyani bg-black text-white opacity-80 ${
                state.submitting ? null : "hover:opacity-100"
              }`}
            >
              {state.submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            {state.succeeded ? (
              <div className="w-full my-5">
                <h1 className="font-biriyani font-bold text-black text-lg text-center animate-pulse">
                  Thank you for contacting me :)
                </h1>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
