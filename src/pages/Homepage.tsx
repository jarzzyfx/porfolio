import { FC, useContext, useState } from "react";
import Button from "../components/Button";
import { Download, MessageSquare } from "lucide-react";
import Modal from "../components/Modal";
import { DrawerContext } from "../contexts/Drawer.context";
import { Toggle } from "../utils/toggle";

// interface HomeProps {
//   drawer?: boolean;
//   setDrawer: (arg: boolean) => void;
// }

const Homepage: FC = () => {
  const [modal, setModal] = useState(false);

  const { drawer, setDrawer } = useContext(DrawerContext);

  return (
    <div className="flex justify-between w-full h-screen max-h-screen pl-10 pr-10 md:pl-40 md:pr-40 lg:flex-row flex-col -z-10 overflow-hidden">
      {/* image */}

      <section className="w-full flex items-center h-full">
        <div className="w-[360px] h-[500px] bg-gray-400"></div>
      </section>
      {/* texts */}
      <section className="flex items-center w-full h-full">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-4xl md:text-5xl text-center sm:text-left font-bold">
            Innovative Solutions for a Digital World while Transforming Ideas
            into Reality
          </h1>
          <p className="text-sm sm:text-sm text-center sm:text-left font-semibold opacity-75">
            As a full-stack web developer, I have the skills and expertise to
            bring your digital ideas to life. From crafting beautiful user
            interfaces to building robust back-end systems.
          </p>
          <div className="flex gap-6">
            <Button
              onClick={() => Toggle(modal, setModal)}
              variant="default"
              className="first-child:hover:text-indigo-700"
            >
              <Download className="text-white  " />
              <span>Download CV/Resume</span>
            </Button>

            <Button onClick={() => Toggle(drawer, setDrawer)} variant="ghost">
              <MessageSquare className=" text-indigo-700  " />
              <span>Contact</span>
            </Button>
          </div>
        </div>
      </section>
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
    </div>
  );
};

export default Homepage;
