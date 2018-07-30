export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_BEGIN = 'GET_DATA_BEGIN';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const DES_CHANGED = 'DES_CHANGED';
export const NAME_CHANGED = 'NAME_CHANGED';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA = 'POST_DATA';

const url = 'http://211.11.1.87:3000/employees';

export const methodGet = () => {
    return dispatch => {
        dispatch(getDataBegin());
        return fetch(url, { 
            method: 'GET' 
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getDataSuccess(data));
                return data
            })
            .catch(error => dispatch(getDataFailure(error)))
    }
}

export const methodPost = ({ name, description }) => {
    return dispatch => {
        dispatch(postData());
        return fetch(url, { 
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              description: description,
            }),
        })
            .then(data => {
                dispatch(postDataSuccess(data));
                return data
            })
    }
}

export const postData = () => {
    return {
        type: POST_DATA
    }
}

export const postDataSuccess = (data) => {
    return {
        type: POST_DATA_SUCCESS,
        payload: data
    }
}

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    }
}

export const descriptionChanged = (text) => {
    return {
        type: DES_CHANGED,
        payload: text
    }
}

export const getDataBegin = () => {
    return {
        type: GET_DATA_BEGIN
    }
}

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataFailure = error => {
    return {
        type: GET_DATA_FAILURE,
        payload: {error}
    }
}

