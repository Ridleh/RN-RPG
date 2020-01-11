import { createStore } from 'redux';
import inventoryReducer from './Reducers/InventoryReducer'

const store = createStore(inventoryReducer)

export default store