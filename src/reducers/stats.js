import {combineReducers} from 'redux';

function statsById(state = {
    isFetching: false,
    didInvalidate: true,
    stats: [],
    error: null,
    success: "",
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function statsAllIds(state = [], action) {
    switch (action.type) {
        default:
            return state
    }
}


const stats = combineReducers({
    allIds: statsAllIds,
    byId:   statsById,
});

export default stats;