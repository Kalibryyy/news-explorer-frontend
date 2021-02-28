const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`)));

class NewsApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  getArticles({
    fromDate,
    tillDate,
    query
  }) {
    return fetch(`${this._url}q=${query}&from=${fromDate}&to=${tillDate}&pageSize=100&sortBy=popularity&apiKey=1dc7974583a849188a7eb3520383b84a`)
      .then(checkResponse);
  }
}

const newsApi = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2/everything?country=us',
})

export default newsApi;

