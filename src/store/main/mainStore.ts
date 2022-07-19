import { atom } from "recoil";
import { Feed } from "../../interfaces/main/main.type";

export const FeedAtom = atom<Feed[]>({
  key: "main/feedAtom",
  default: [],
});
