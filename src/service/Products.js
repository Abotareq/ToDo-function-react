import { productsClientAPI } from "../Client/axiosClientAPI.js";
export async function getData(url,params) {
  return await productsClientAPI.get(url,{params}).then((response) => response.data);
}

export async function setData(url, data) {
  return await productsClientAPI
    .post(url, data)
    .then((response) => response.data);
}

export async function updateData(url, data) {
  return await productsClientAPI
    .put(url, data)
    .then((response) => response.data);
}

export async function deleteData(url) {
  return await productsClientAPI.delete(url).then((response) => response.data);
}
export async function patchData(url, data) {
  return await productsClientAPI
    .patch(url, data)
    .then((response) => response.data);
}
export async function getDataWithParams(url, params) {
  return await productsClientAPI
    .get(url, { params: params })
    .then((response) => response.data);
}
export async function getDataWithHeaders(url, headers) {
  return await productsClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithHeaders(url, data, headers) {
  return await productsClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithHeaders(url, data, headers) {
  return await productsClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithHeaders(url, headers) {
  return await productsClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithHeaders(url, data, headers) {
  return await productsClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function getDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await productsClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await productsClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await productsClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await productsClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await productsClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
