//Api
import stats from "../api/stats";

//Constants
import * as errorMessages from '../constants/MessageConstants';
import { normalizeData } from "../normalizers/normalizeStats";

export const INVALIDATE_STATS = 'INVALIDATE_STATS';
export const REQUEST_STATS    = "REQUEST_STATS";
export const RECEIVE_STATS    = "RECEIVE_STATS";
export const ERROR_STATS      = "ERROR_STATS";
export const RESET_STATS      = "RESET_STATS";

export function invalidateStats() {
    return {
        type: INVALIDATE_STATS,
    }
}

export function resetStats() {
    return {
        type: RESET_STATS
    }
}

function requestStats() {
    return {
        type: REQUEST_STATS,
    }
}

function receiveStats(json) {
    return {
        type: RECEIVE_STATS,
        stats: normalizeData(json),
        receivedAt: Date.now()
    }
}

function errorStats(error) {
    return {
        type: ERROR_STATS,
        error: error,
    }
}

export function fetchStats() {
    return dispatch => {
        dispatch(requestStats());
        return stats.getTopTen()
            .then(function (response) {
                if (response.status >= 400) {
                    return Promise.reject(response);
                } else {
                    var data = response.json();
                    return data;
                }
            })
            .then(function (data) {
                dispatch(receiveStats(data));
            })
            .catch(function (error) {
                switch (error.status) {
                    case 401:
                        dispatch(errorStats(errorMessages.UNAUTHORIZED_TOKEN));
                        return;
                    default:
                        dispatch(errorStats(errorMessages.GENERAL_ERROR));
                        return;
                }
            });
    }
}

function shouldFetchStats(state) {
    const statsById   = state.stats.byId;
    const statsAllIds = state.stats.allIds;
    if (statsById.isFetching) {
        return false;
    } else if (statsAllIds.length === 0) {
        return true;
    } else {
        return statsById.didInvalidate;
    }
}

export function fetchStatsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchStats(getState())) {
            return dispatch(fetchStats())
        }
    }
}