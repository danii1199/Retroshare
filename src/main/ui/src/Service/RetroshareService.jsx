import http from "../Http-common";

const getAll = () => {
  return http.get("/all");
};

const get = (id) => {
  return http.get(`/find/${id}`);
};

const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/delete/${id}`);
};

const findByUserName = (userName) => {
  return http.get(`/all?userName=${userName}`);
};

const findByEmail = (email) => {
  return http.get(`/all?email=${email}`);
};

const getVinyl = () => {
  return http.get("/v-all");
};

const getGame = () => {
  return http.get("/g-all");
};

const getRecordPlayer = () => {
  return http.get("/rp-all");
};

const getGameConsole = () => {
  return http.get("/gc-all");
};

const getProduct = () => {
  return http.get("/pr-all");
};
const getOneProduct = (id) => {
  return http.get(`/pr/${id}`);
};

const findByProductName = (productName) => {
  return http.get(`/pr-all?name=${productName}`);
};

const createProduct = (data, tproduct, idUser, idProductStatus) => {
  return http.post(`/${tproduct}/${idUser}/${idProductStatus}`, data);
};

const services = {
  getAll,
  get,
  update,
  remove,
  findByUserName,
  getVinyl,
  getGame,
  getGameConsole,
  getRecordPlayer,
  getProduct,
  findByProductName,
  createProduct,
  findByEmail
};

export default services;
