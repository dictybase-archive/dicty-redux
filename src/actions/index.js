// Combine all import actions here
// Then import all actions from other modules as needed
//
/*
 * Some recommendations to use modules
 *   Modules
 *   -------
 * import types from '../constants'
 *      Router module
 * import { routeActions } from 'react-router-redux'
 */

/*
 *  Synchronous actions
 *  -------------------
 *
 *  const requestLogin = provider => {
 *        return {
 *            type: LOGIN_REQUEST,
 *            isFetching: true,
 *            isAuthenticated: false,
 *            provider: provider
 *        }
 *}
 *  const receiveLogin = user => {
 *        return {
 *            type: LOGIN_SUCCESS,
 *            isFetching: false,
 *            isAuthenticated: true,
 *            user: user
 *        }
 *}
 */

/*
 *Reusable functions to deal with promises and responses
 *------------------------------------------------------
 *    It uses https://www.npmjs.com/package/isomorphic-fetch
 *
 *const status = response => {
 *  // HTTP response codes 2xx indicate that the request was processed successfully
 *    if (response.status >= 200 && response.status < 300) {
 *        return Promise.resolve(response)
 *    }
 *    return Promise.reject(new Error(response.statusText))
 *}
 *
 *const json = response => {
 *    return response.json()
 *}
 */

/*
 *Async actions
 *-------------
 *
 *export const login = (cred,url) => {
 *    return dispatch => {
 *        let config = {
 *            method: 'POST',
 *            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 *            body: cred
 *        }
 *        dispatch(requestLogin(provider))
 *        dispatch(routeActions.push('/spinner'))
 *        fetch(url, config)
 *        .then(status)
 *        .then(json)
 *        .then(data => {
 *            dispatch(receiveLogin())
 *            dispatch(routeActions.push('/home'))
 *        }).catch(error => {
 *            dispatch(loginError(error))
 *            dispatch(routeActions.push('/error'))
 *        })
 *    }
 *}
 *
 *export const logoutUser = () => {
 *    return dispatch => {
 *        simpleStorage.deleteKey('token')
 *        dispatch(receiveLogout())
 *        dispatch(routeActions.push('/'))
 *    }
 *}
 */
