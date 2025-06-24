import { tmdbClientAPI } from "../Client/axiosClientAPI.js";
export async function getData(url) {
  return await tmdbClientAPI.get(url).then((response) => response.data);
}

export async function setData(url, data) {
  return await tmdbClientAPI.post(url, data).then((response) => response.data);
}

export async function updateData(url, data) {
  return await tmdbClientAPI.put(url, data).then((response) => response.data);
}

export async function deleteData(url) {
  return await tmdbClientAPI.delete(url).then((response) => response.data);
}
export async function patchData(url, data) {
  return await tmdbClientAPI
    .patch(url, data)
    .then((response) => response.data);
}
export async function getDataWithParams(url, params) {
  return await tmdbClientAPI
    .get(url, { params: params })
    .then((response) => response.data);
}
export async function getDataWithHeaders(url, headers) {
  return await tmdbClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithHeaders(url, data, headers) {
  return await tmdbClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithHeaders(url, data, headers) {
  return await tmdbClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithHeaders(url, headers) {
  return await tmdbClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithHeaders(url, data, headers) {
  return await tmdbClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function getDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await tmdbClientAPI
    .get(url, { headers: headers })
    .then((response) => response.data);
}
export async function setDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await tmdbClientAPI
    .post(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function updateDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await tmdbClientAPI
    .put(url, data, { headers: headers })
    .then((response) => response.data);
}
export async function deleteDataWithAuth(url, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await tmdbClientAPI
    .delete(url, { headers: headers })
    .then((response) => response.data);
}
export async function patchDataWithAuth(url, data, token) {
  const headers = { Authorization: `Bearer ${token}` };
  return await tmdbClientAPI
    .patch(url, data, { headers: headers })
    .then((response) => response.data);
}
