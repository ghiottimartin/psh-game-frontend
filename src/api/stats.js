import c from "../constants/constants";
require('isomorphic-fetch');

var stats = {

    getTopTen() {        
        let defaultOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            }
        };
        return fetch(c.BASE_URL + '/stats/report/', defaultOptions);
    },    

};

export default stats;