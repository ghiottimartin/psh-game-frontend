import { combineReducers } from 'redux';

//Actions
import {
    INVALIDATE_STATS,
    REQUEST_STATS,
    ERROR_STATS,
    RECEIVE_STATS,
    RESET_STATS,
    REQUEST_CSV,
    RECEIVE_CSV,
    ERROR_CSV

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
        case REQUEST_CSV:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_CSV:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: action.receivedAt,
                error: null
            });
        case ERROR_CSV:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                error: action.error
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
    byId: statsById,
});

export default stats;