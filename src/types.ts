import { IconType } from "react-icons";

export type sections = "about" | "projects" | "resume";

export interface NavbarProps {
  section: sections;
  setSection: (section: sections) => void;
}

export interface ISkill {
  name: string;
}

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "mongo";
