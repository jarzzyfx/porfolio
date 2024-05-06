import { GripHorizontal, Mail } from "lucide-react";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Toggle } from "../utils/toggle";
import { Input } from "./Input";
import Button from "./Button";
import { Textarea } from "./Textarea";
import Lottie from "react-lottie";
import animationData from "../lotties/contact.json";
import SuccessAnimation from "../lotties/success.json";

interface AuthProps {
  drawer: boolean;
  setDrawer: (arg: boolean) => void;
}

export const Authdrawer: FC<AuthProps> = ({ drawer, setDrawer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const andefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = () => {
    if (name === "" && email === "" && message === "") {
      return;
    }
    // handles sending
    setSent(true);
    console.log({ name, email, message });
    setLoading(true);
    setMessage("");
    setEmail("");
    setName("");
    // after sending state
    setTimeout(() => {
      setSent(false);
      setLoading(false);
    }, 3000);
  };
  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y > 400) setDrawer(false);
      }}
      className="w-full  h-screen fixed bottom-0 left-0 z-50 "
    >
      <motion.div
        exit={{ opacity: 0.5, y: "200%" }}
        initial={{ opacity: 0.8, y: "110%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ damping: 19, type: "spring" }}
      >
        <div
          className={`w-full pb-8 transition ease-in border-t-[1px] border-indigo-700 bg-white h-screen min-h-[600px] shadow-lg ring-offset-2 ring-offset-slate-50 flex flex-col gap-10 `}
        >
          <header className="w-full justify-center items-center">
            <GripHorizontal
              onClick={() => Toggle(drawer, setDrawer)}
              className="w-10 h-10 m-auto stroke-slate-500 cursor-pointer hover:stroke-indigo-700 p-1 mt-2 rounded-sm "
            />
          </header>
          <main className="pl-32 pr-32 w-full h-full flex gap-2 justify-between">
            {!sent ? (
              <>
                <div className="w-full h-full flex flex-col justify-start gap-4 pt-2 pl-8">
                  <h1 className="text-6xl font-bold">Contact Me</h1>
                  <article className="text-md leading-5 w-[80%]">
                    {" "}
                    Please feel free to reach out to me via the contact
                    information below, and I'll get back to you as soon as
                    possible. I look forward to the opportunity to work with
                    you!
                  </article>
                  <form action="" className="flex flex-col gap-2">
                    <Input
                      onChange={(e: Event | any) => setName(e.target.value)}
                      value={name}
                      inpType="text"
                      label="your name/ company name"
                      holder="please enter your name here"
                    />
                    <Input
                      onChange={(e: Event | any) => setEmail(e.target.value)}
                      value={email}
                      inpType="email"
                      label="your e-mail"
                      holder="please enter your email here"
                    />
                    <Textarea
                      onChange={(e: Event | any) => setMessage(e.target.value)}
                      value={message}
                      label="Your Message"
                      holder="Dear Emeka, i am contacting you too....."
                    />
                    <Button
                      onClick={() => handleSubmit()}
                      variant={"default"}
                      isLoading={loading}
                      size={"lg"}
                      className="w-[80%] text-white"
                    >
                      <Mail />
                      <span>Reach Out </span>
                    </Button>
                  </form>
                </div>
                <div className="w-full h-full flex items-start translate-x-6">
                  <Lottie options={defaultOptions} height={600} width={600} />
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4 items-center w-full">
                <Lottie options={andefaultOptions} height={400} width={400} />
                <h1 className="text-2xl capitalize text-green-300">Sent !</h1>
              </div>
            )}
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
};
