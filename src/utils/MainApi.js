export const BASE_URL = "http://localhost:3001";

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res.json());

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(data)),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export function getUserInfo(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(handleResponse);
}

export function updateUserInfo(data) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json'
    }
  }).then(handleResponse);
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

