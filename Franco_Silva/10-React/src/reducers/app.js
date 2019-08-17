import { APP_GET_BUSY, APP_GET_READY } from '../utils/constants';

const app = ( state = { ready: false }, action ) => {
    switch (action.type) {
        case APP_GET_BUSY:
            return Object.assign({}, state, {
                ready: false
            });
        case APP_GET_READY:
            return Object.assign({}, state, {
                ready: true
            });
        default:
            return state;
    }
}

export default app;