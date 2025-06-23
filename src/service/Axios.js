import { axiosClientAPI } from "../Client/axiosClientAPI.js";
export async function getData(url) {
  return await axiosClientAPI.get(url).then((response) => response.data);
}

export async function setData(url, data) {
  return await axiosClientAPI.post(url, data).then((response) => response.data);
}

export async function updateData(url, data) {
  return await axiosClientAPI.put(url, data).then((response) => response.data);
}

export async function deleteData(url) {
  return await axiosClientAPI.delete(url).then((response) => response.data);
}
export async function patchData(url, data) {
  return await axiosClientAPI
    .patch(url, data)
    .then((response) => response.data);
}
export async function getDataWithParams(url, params) {
  return await axiosClientAPI
    .get(url, { params: params })
    .then((response) => response.data);
}
export async function getDataWithHeaders(url, headers) {
  return await axiosClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithHeaders(url, data, headers) {
  return await axiosClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithHeaders(url, data, headers) {
  return await axiosClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithHeaders(url, headers) {
  return await axiosClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithHeaders(url, data, headers) {
  return await axiosClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function getDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await axiosClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await axiosClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await axiosClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await axiosClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await axiosClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
