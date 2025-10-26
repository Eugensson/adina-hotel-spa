import { IconType } from "react-icons/lib";
import { StaticImageData } from "next/image";

export type RoomType = {
  id: string;
  name: string;
  description: string;
  facilities: Array<{
    name: string;
    icon: IconType;
  }>;
  size: number;
  maxPerson: number;
  price: number;
  image: string | StaticImageData;
  imageLg: string | StaticImageData;
};

export type NavItemType = {
  label: string;
  href: string;
};

export type SliderItemType = {
  id: string;
  title: string;
  image: string | StaticImageData;
};
