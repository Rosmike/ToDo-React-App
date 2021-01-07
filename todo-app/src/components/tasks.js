import { API_URL, API_KEY } from "./constants";

// Tasks

export const getTasks = async (callback) => {
  const response = await fetch(`${API_URL}/tasks`, {
    headers: { Authorization: API_KEY },
  });
  const json = await response.json();
  console.log(json.data);
  json.data.sort((a, b) => {
    const dateA = new Date(a.addedDate).getTime();
    const dateB = new Date(b.addedDate).getTime();
    return dateA > dateB ? 1 : -1;
  });
  callback(json.data);
};

export const addTask = async (callback, body) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { Authorization: API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};

export const editTask = async (callback, id, body) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { Authorization: API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};

export const delTask = async (callback, id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: { Authorization: API_KEY },
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};

// Operations

export const getOperations = async (callback, id) => {
  const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
    headers: { Authorization: API_KEY },
  });
  const json = await response.json();
  json.data.sort((a, b) => {
    const dateA = new Date(a.addedDate).getTime();
    const dateB = new Date(b.addedDate).getTime();
    return dateA > dateB ? 1 : -1;
  });
  callback(json.data);
};

export const addOperation = async (callback, id, body) => {
  const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
    method: "POST",
    headers: { Authorization: API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};

export const editOperation = async (callback, id, body) => {
  const response = await fetch(`${API_URL}/operations/${id}`, {
    method: "PUT",
    headers: { Authorization: API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};

export const delOperation = async (callback, id) => {
  const response = await fetch(`${API_URL}/operations/${id}`, {
    method: "DELETE",
    headers: { Authorization: API_KEY },
  });
  const json = await response.json();
  json.error ? console.error(json.data.errors) : callback((p) => !p);
};
