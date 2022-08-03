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
    new Promise((resolve) => {
      setTimeout(() => resolve({ user, pass }), 250);
    });
  } else {
      Promise.reject(new Error('Wrong user or password'))
  }
};
