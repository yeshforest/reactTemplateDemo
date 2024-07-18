import { atom } from "recoil";

type User = {
  username: string
  email: string;
}

export const countState = atom({
  key: "count", // key 지정
  default: 10, // default 값 지정
});

export const userState = atom<User>({
  key: "user",
  default: { username: "", email: "" },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: localStorage.getItem("token") ? true : false,
});