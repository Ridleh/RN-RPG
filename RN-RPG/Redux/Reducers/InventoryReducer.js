const buyItem = 'buyItem';

const inventoryState = {
    items: [],
    spells: []
}

function inventoryReducer(state = inventoryState, action){
    console.log(state.items.length)
      switch(action.type){
          case buyItem:
              return{
                  ...state,
                  items: [...state.items, action.item]
              }
          default : return state;
      }
  }

export default inventoryReducer;