const buyItem = 'buyItem';
const getItems = 'getItems'
const buySpell = 'buySpell'

const inventoryState = {
    items: [],
    spells: []
}

function inventoryReducer(state = inventoryState, action){
    //console.log(state.items.length)
      switch(action.type){
            case buyItem:
                return{
                    ...state,
                    items: [...state.items, action.item]
              }
            case buySpell: 
                return{
                    ...state,
                    spells: [...state.spells, action.spell]
                }

          default : return state;
      }
  }

export default inventoryReducer;