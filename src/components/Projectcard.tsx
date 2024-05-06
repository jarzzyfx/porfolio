import { FC } from "react";

interface ProjectProps {
  _id?: Number;
  img?: string;
  title?: string;
  githubHref?: string;
  websiteHref?: string;
  shortdescription?: string;
  longdesc?: string;
}

const Project: FC<ProjectProps> = (props) => {
  return (
    <div className="w-[260px] h-[420px] bg-slate-500 rounded-sm">Projects</div>
  );
};

export default Project;
