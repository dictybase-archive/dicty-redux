// Use this to import all the reducers and then combine them

/*
 *import { combineReducers } from 'redux'
 *import auth from 'reducers/auth'
 *import auth from 'reducers/user'
 *import { routeReducer } from 'react-router-redux'
 *
 *const rootReducer = combineReducers({
 *    auth,
 *    user,
 *    routing: routeReducer
 *})
 *
 *export default rootReducer
 */

/*
 *And example of a reducer
 *
 *import types from '../constants'
 *import simpleStorage from 'simplestorage.js'
 *
 *const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = types
 *
 *
 *const authenticated = () => {
 *    return simpleStorage.hasKey('token')
 *}
 *
 *const initialState = {
 *    isFetching: false,
 *    isAuthenticated: authenticated()
 *}
 *
 *const authReducer = (state = initialState, action) => {
 *    switch (action.type) {
 *    case LOGIN_REQUEST:
 *        return {
 *            ...state,
 *            isFetching: true,
 *            isAuthenticated: false,
 *            provider: action.provider
 *        }
 *    case LOGIN_SUCCESS:
 *        return {
 *            ...state,
 *            isFetching: false,
 *            isAuthenticated: true,
 *            user: action.user
 *        }
 *    case LOGIN_FAILURE:
 *        return {
 *            ...state,
 *            isFetching: false,
 *            isAuthenticated: false,
 *            error: action.error
 *        }
 *    default:
 *        return state
 *    }
 *}
 *export default authReducer
 */
