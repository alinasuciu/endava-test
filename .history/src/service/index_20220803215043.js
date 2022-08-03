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
    Promise.resolve({ user, pass });
  } else {
      console.log('jfjjfj')
    Promise.reject(new Error("Wrong user or password"));
  }
};
