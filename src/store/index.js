import { legacy_createStore as createStore} from 'redux'

const INITIAL_STATE = {
  titles: [
    'Item Example'
  ],
  ids: ['0']
};

function items(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {...state, titles: [...state.titles, action.title],
                        ids: [...state.ids, action.id],  };
     /* case "DELETE_ITEM":
      return [...state.filter(ids => ids !== action.ids)]
    return state.toString().slice(0, action.index)
      .concat(state.toString().slice(action.index + 1));   */
    default:
      return state;
  }
}

const store = createStore(items);

export default store;
