// const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`;
const BASE_URL = 'https://api.news-explorer.students.nomoreparties.space';

const checkResponse = (res) => {
  return new Promise((resolve, reject) => {
    const func = res.status < 400 ? resolve : reject
    res.json().then(data => func(data));
  });
}

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
    'Authorization': `Bearer ${token}`,
  },
})
.then(checkResponse);

export const getAppInfo = ((token) =>  {
  return Promise.all([getUserInfo(token), getUserArticles(token)]);
})

export const createArticle = (keyword, title, text, date, source, link, image, token) => fetch(`${BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({ keyword, title, text, date, source, link, image, }),
})
.then(checkResponse);

export const deleteArticle = (articleId, token) => fetch(`${BASE_URL}/articles/${articleId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
.then(checkResponse);