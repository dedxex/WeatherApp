import FETCH_WEATHER from '../actions/index';
export default function(state = [], action) {
    switch(action.type) {
        case 'FETCH_WEATHER' :
        return [action.payload.data, ...state];
    }
    return state;
    //console.log('Action recieved in Reducer',action);
    //return [action.payload.data]...state;
    //return [action.payload.data, ...state];
}