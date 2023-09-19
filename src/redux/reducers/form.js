import { schema } from "../actions/model/Form/dto";

export const SET_FIELDS = 'SET_FIELDS';
export const SET_FIELD = 'SET_FIELD';

const initState = {
  schema,
  fields: {},
}

function reducer(state = initState, action) {
  switch (action.type) {
    case SET_FIELD:
      const { section, subsection, code, value } = action.data;
      return {
        ...state,
        schema: {
          ...state.schema,
          [section]: {
            ...state.schema[section],
            sections: {
              ...state.schema[section].sections,
              [subsection]: {
                ...state.schema[section].sections[subsection],
                items: {
                  ...state.schema[section].sections[subsection].items,
                  [code]: {
                    ...state.schema[section].sections[subsection].items[code],
                    value,
                  },
                },
              },
            },
          },
        }
      };
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