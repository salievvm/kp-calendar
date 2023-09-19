import { schema } from "../actions/model/Form/dto";

import _ from 'lodash';

export const SET_FIELDS = 'SET_FIELDS';
export const SET_FIELD = 'SET_FIELD';
export const ADD_SUBSECTION = 'ADD_SUBSECTION';
export const ERASE_SUBSECTION = 'ERASE_SUBSECTION';
export const REMOVE_SUBSECTION = 'REMOVE_SUBSECTION';

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

      for (const fieldCode of Object.keys(lastSection.items)) {
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
    
    case ERASE_SUBSECTION: {
      const { section } = action.data;

      const { sections } = state.schema[section];
      const keys = Object.keys(sections);
      const firstKey = keys[0];
      
      /** Не смотря на то что создаем переменную firstSection
       * все равно будем работать с исходным объектом, и удалять его поле value
       * потому что нет глубокого копирования как в ADD_SUBSECTION */
      const firstSection = state.schema[section].sections[firstKey];

      for (const fieldCode of Object.keys(firstSection.items)) {
        delete firstSection.items[fieldCode].value;
      }

      return {
        ...state,
        schema: {
          ...state.schema,
          [section]: {
            ...state.schema[section],
            sections: {
              ...state.schema[section].sections,
            },
          },
        }
      };
    }
    
    case REMOVE_SUBSECTION: {
      const { section } = action.data;

      const { sections } = state.schema[section];
      const keys = Object.keys(sections);
      const lastKey = keys[keys.length - 1];

      delete state.schema[section].sections[lastKey];

      return {
        ...state,
        schema: {
          ...state.schema,
          [section]: {
            ...state.schema[section],
            sections: {
              ...state.schema[section].sections,
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