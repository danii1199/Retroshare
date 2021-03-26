import http from "../Http-common";

const getAll = () => {
  return http.get("/all");
};

const get = (id) => {
  return http.get(`/find/${id}`);
};

const create = (data) => {
  return http.post("/save/2", data);
};

const login = (data) => {
  return http.post("/login", data);
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

const services = {
  getAll,
  get,
  create,
  update,
  remove,
  findByUserName,
  login,
  getVinyl,
  getGame,
  getGameConsole,
  getRecordPlayer,
  getProduct,
  findByProductName
};

export default services;
