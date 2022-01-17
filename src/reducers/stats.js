import {combineReducers} from 'redux';

//Actions
import {
    INVALIDATE_STATS,
    REQUEST_STATS,
    ERROR_STATS,
    RECEIVE_STATS,
    RESET_STATS,

} from '../actions/StatActions';

function statsById(state = {
    isFetching: false,
    didInvalidate: true,
    stats: [],
    error: null,
    success: "",
}, action) {
    switch (action.type) {
        case INVALIDATE_STATS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_STATS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_STATS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                stats: action.stats.entities.stats,
                lastUpdated: action.receivedAt,
                error: null
            });
        case ERROR_STATS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                error: action.error
            });
        case RESET_STATS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                error: null,
                lastUpdated: null,
                stats: [],
            });
        default:
            return state
    }
}

function statsAllIds(state = [], action) {
    switch (action.type) {
        case RECEIVE_STATS:
            return action.stats.result ? action.stats.result : [];
        case RESET_STATS:
             return [];
        default:
            return state
    }
}


const stats = combineReducers({
    allIds: statsAllIds,
    byId:   statsById,
});

export default stats;