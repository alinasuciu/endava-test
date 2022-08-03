import api from "../api";

const userData = {
  user: "alina",
  pass: "alina",
};

export const getProductById = (id) => {
  return api({ url: `product/${id}` });
};

export const fakeAuth = (user, pass) => {
  if (userData.user === user && userData.pass === pass) {
    return Promise.resolve({ user, pass });
  } else {
    return Promise.reject(new Error("Wrong user or password"));
  }
};
