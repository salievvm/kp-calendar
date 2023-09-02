export const SET_FIELDS = 'SET_FIELDS';

const initState = {
  fields: {}
}

function reducer(state = initState, action) {
  switch (action.type) {
    case SET_FIELDS:
      return {
        ...state,
        fields: action.data
      };
    default:
      return state;
  }
}

export default reducer;