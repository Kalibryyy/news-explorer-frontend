const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`;

// const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res}`)));
const checkResponse = (res) => new Promise((resolve, reject) => {
  const func = res.status < 400 ? resolve : reject;
  return func(res.json());
});

export const register = (name, password, email) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, password, email }),
})
.then(checkResponse);

export const authorize = (password, email) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
.then(checkResponse);

export const getUserInfo = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
.then(checkResponse);

export const getUserArticles = (token) => fetch(`${BASE_URL}/articles`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM3ODk2NTAwZGE2ZDI5YmExNWJlZGQiLCJpYXQiOjE2MTQyNTI3MDQsImV4cCI6MTYxNDg1NzUwNH0.rAyszbETCEYJo7_UmZ8bzWSedc2oL4dbQv941eeo54o'}`,
  },
})
.then(checkResponse);

export const createArticle = (keyword, title, text, date, source, link, image) => fetch(`${BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM3ODk2NTAwZGE2ZDI5YmExNWJlZGQiLCJpYXQiOjE2MTQyNTI3MDQsImV4cCI6MTYxNDg1NzUwNH0.rAyszbETCEYJo7_UmZ8bzWSedc2oL4dbQv941eeo54o'}`,
  },
  body: JSON.stringify({ keyword, title, text, date, source, link, image, }),
})
.then(checkResponse);

export const deleteArticle = (articleId) => fetch(`${BASE_URL}/articles/${articleId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM3ODk2NTAwZGE2ZDI5YmExNWJlZGQiLCJpYXQiOjE2MTQyNTI3MDQsImV4cCI6MTYxNDg1NzUwNH0.rAyszbETCEYJo7_UmZ8bzWSedc2oL4dbQv941eeo54o'}`,
  },
})
.then(checkResponse);