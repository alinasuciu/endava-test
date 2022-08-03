import api from "../api";


export const getProductById = (id) => {
    return api({ url: `product/${id}` });
};

const fakeAuth = (user, pass) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({user, pass}), 250);
});