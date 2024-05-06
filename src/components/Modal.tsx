import { FC } from "react";
import Button from "./Button";
import { MailOpen, X } from "lucide-react";
import { File } from "lucide-react";
import Lottie from "react-lottie";
import CVanimationData from "../lotties/cv.json";
import CoverLetteranimationData from "../lotties/coverletter.json";

interface ModalProps {
  modal: boolean;
  setModal: (e: boolean) => void;
}

const Modal: FC<ModalProps> = ({ modal, setModal }) => {
  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: CVanimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: CoverLetteranimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="flex flex-col brightness-20 p-16 z-50 w-full h-full fixed left-0 top-0 items-center justify-between backdrop-blur-md bg-black bg-opacity-25">
      <header>
        <Button
          onClick={closeModal}
          className="rounded-full backdrop-blur-md p-4 text-white hover:w-auto h-auto"
          variant="ghost"
        >
          <X className="w-6 h-6 font-semibold text-white " />
        </Button>
      </header>
      <main className="h-[400px] flex items-center gap-2 w-auto bg-white rounded-md outline outline-indigo-700 outline-[1px] shadow-md p-2">
        <Button variant={"ghost"} className="w-full h-full flex flex-col gap-4">
          <Lottie options={defaultOptionsOne} height={300} width={300} />
          <span className="text-lg font-bold">Download CV</span>
        </Button>
        <Button variant={"ghost"} className="w-full h-full flex flex-col gap-4">
          <Lottie options={defaultOptionsTwo} height={300} width={300} />
          <span className="text-lg font-bold">Download Cover Letter</span>
        </Button>
      </main>
    </div>
  );
};

export default Modal;
