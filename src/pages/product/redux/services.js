import { Api } from "../../../common/utils/request";
import { BASE_API_URL } from "../../../common/constants";

const apiGetProducts = (data) => {
  return Api.get(`${BASE_API_URL}/products`, data);
};

const apiGetProductById = (id) => {
  return Api.get(`${BASE_API_URL}/products/${id}`);
};

const apiCreateProduct = (data) => {
  return Api.post(`${BASE_API_URL}/products`, data);
};

const apiUpdateProduct = (data) => {
  return Api.put(`${BASE_API_URL}/products/${data.id}`, data);
};

const apiDeleteProductById = (id) => {
  return Api.delete(`${BASE_API_URL}/products/${id}`);
};

export const ProductService = {
  apiGetProducts,
  apiGetProductById,
  apiCreateProduct,
  apiUpdateProduct,
  apiDeleteProductById,
};
