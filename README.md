В компоненте Main нужно поменять значение стейта на false чтобы убрать секцию с найденными карточками
const [areThereAnyResults, setAreThereAnyResults] = React.useState(1);

нужно поменять значение стейта на true чтобы увидеть секцию результат не найден (отступ сверху будет виден при скрытых секции с карточками и секции со спиннером)
const [isNoResults, setIsNoResults] = React.useState(false);

нужно поменять значение стейта на true чтобы увидеть спиннер (отступ сверху будет виден при скрытых секции с карточками и секции результат не найден)
const [isLoading, setIsLoading] = React.useState(false);

В компоненте NewsCard нужно поменять стейт на true чтобы увидеть версию карточки на странице залогинненого пользователя
const [isLoggedIn, setIsLoggedIn] = React.useState(false);

В компоненте Header нужно поменять стейт на true чтобы увидеть версию кнопки авторизации залогинненого пользователя
const [isLoggedIn, setIsLoggedIn] = React.useState(false);

В компоненте Button yужно поменять значение стейта на true чтобы увидеть залоченную кнопку
const [isBtnInactive, setIsBtnInactive] = React.useState(false);

В компоненте PopupWithForm нужно поменять значение стейта на true чтобы увидеть корректную версию InfoTooltip
const [isLoggedIn, setIsLoggedIn] = React.useState(false);

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

https://visitor-badge.laobi.icu/badge?page_id=Kalibryyy.news-explorer-frontend


