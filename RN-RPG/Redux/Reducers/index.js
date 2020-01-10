import {addItem} from '../Constants/ActionTypes'

const initialState = {
    inventory : []
}

function rootReducer(state = initialState, action){
    if(action.type === addItem){
        return Object.assign({}, state, {
            inventory : state.inventory.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;