var BASE_URL;
//develop
if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_ENVI) {
    BASE_URL = "http://localhost:8000/api";
}

//testing
if (process.env.REACT_APP_ENVI == 'develop') {
    BASE_URL = "http://test.psh-game.com/api";
}

//production
if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_ENVI) {
    BASE_URL = "http://psh-game.com/api";
}

export default {
    BASE_URL: BASE_URL
}