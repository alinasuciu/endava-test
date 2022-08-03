import api from "../api";


export const getProductById = (id) => {
    return api({ url: `product/${id}` });
};