// Connected component
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(reducers) {
    // if the name of reducer is myReducer
    // then
    // const state = reducers.myReducers
    // Then access state value through params like state.data
    // Look here https://github.com/gaearon/react-redux#quick-start
    const state = reducers.<....name of the reducers...>
    return {

    }
}

// Which action creators does it want to receive by props
// Look here https://github.com/gaearon/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops
function mapDispatchToProps(dispatch) {
    return {
    };
}

class App extends Component {
    displayName = 'Connected component'
    render() {
        return (
            <div>
                <h1> Redux connected component </h1>
                <p> I am connected </p>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
