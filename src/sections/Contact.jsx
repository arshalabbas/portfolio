import InputField from "../components/InputField";
import MessageField from "../components/MessageField";
import Button from "../components/Button";
import Wave from "../components/Wave";
const Contact = () => {
  return (
    <section className="bg-white h-screen text-black w-full">
      <Wave />
      <div className="bs-container flex flex-col items-center">
        <h1 className="black-title">Contact Me!</h1>
        <p className="text-center opacity-70 max-md:text-sm font-biriyani">
          Have a question or want to work together?
        </p>

        <div className="my-7">
          <form action="" className="flex flex-col items-center">
            <InputField placeholder="Name" type="text" />
            <InputField placeholder="Email" type="email" />
            <MessageField />
            <button className="w-64 py-3 uppercase font-biriyani bg-black text-white opacity-80 hover:opacity-100">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
