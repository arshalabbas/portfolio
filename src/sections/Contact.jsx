import InputField from "../components/InputField";
import MessageField from "../components/MessageField";
import Wave from "../components/Wave";

import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvywpv");
  return (
    <section className="bg-white h-screen text-black w-full">
      <Wave />
      <div className="bs-container flex flex-col items-center">
        <h1 className="black-title">Contact Me!</h1>
        <p className="text-center opacity-70 max-md:text-sm font-biriyani">
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

            {state.succeeded ? (
              <div className="w-full my-5">
                <h1 className="font-biriyani font-bold text-black text-lg text-center">
                  Thank you for contacting me :)
                </h1>
              </div>
            ) : null}

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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
