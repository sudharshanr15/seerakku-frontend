import { StaticImageData } from "next/image";

export type InitiativesListType = {
  title: string;
  desc: string | undefined;
  image: StaticImageData;
};
