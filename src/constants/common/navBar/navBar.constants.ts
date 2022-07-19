import { HiOutlineUser, HiOutlineMenu } from "react-icons/hi";

export const NAVBAR_ITEMS = [
  { icon: HiOutlineMenu, link: "/" },
  { icon: HiOutlineUser, link: "/profile" },
] as const;
