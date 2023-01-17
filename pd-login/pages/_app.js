import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import store from '../store/ReduxStore'
import { allReducers } from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import '../styles/globals.css'

// const store = createStore(
//     allReducers,
//     composeWithDevTools(
//         applyMiddleware(
//             thunk
//         )
//     )
// )

import store from '../store/ReduxStore';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp