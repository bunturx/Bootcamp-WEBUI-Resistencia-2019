import { APP_GET_BUSY, APP_GET_READY } from '../utils/constants';

export const appGetBusy = (data) => {
    return {
        type: APP_GET_BUSY,
        data
    }
}

export const appGetReady = data => ({
    type: APP_GET_READY,
    data
})