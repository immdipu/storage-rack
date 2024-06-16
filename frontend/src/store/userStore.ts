import { atom } from "nanostores";

export const userStore = atom<Iuser | null>(null);

export const addUser = (user: Iuser) => {
  userStore.set(user);
  console.log("User added to store", userStore.get());
};

export const removeUser = () => {
  userStore.set(null);
  console.log("User removed from store", userStore.get());
};
