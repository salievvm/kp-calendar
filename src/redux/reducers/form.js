import { schema } from "../actions/model/Form/dto";

import _ from 'lodash';

export const SET_FIELDS = 'SET_FIELDS';
export const SET_FIELD = 'SET_FIELD';
export const ADD_SUBSECTION = 'ADD_SUBSECTION';

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
    case ADD_SUBSECTION: {
      const { section } = action.data;

      const { sections } = state.schema[section];
      const keys = Object.keys(sections);
      const lastKey = keys[keys.length - 1];
      const lastSection = _.cloneDeep(state.schema[section].sections[lastKey]);

      for (const [fieldCode, field] of Object.entries(lastSection.items)) {
        delete lastSection.items[fieldCode].value;
      }

      console.log({ lastSection });

      return {
        ...state,
        schema: {
          ...state.schema,
          [section]: {
            ...state.schema[section],
            sections: {
              ...state.schema[section].sections,
              [lastKey + 1]: lastSection,
            },
          },
        }
      };
    }
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