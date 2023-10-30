import { FIELD_TYPES } from "../../../../../consts";
import CrmItemApi from "../../../api/CrmItem";
import { entityTypeId, schema } from "./dto";

const {
  radio,
  radioGroup,
  phone,
  email,
  file,
  list,
} = FIELD_TYPES;

class Candidate {
  entityTypeId = entityTypeId;
  schema = schema;

  constructor (api) {
    this.api = new CrmItemApi(api, this.entityTypeId);
  }

  add = async (data) => {
    const fields = {};

    console.log({ data });

    for (const [apiCode, code] of Object.entries(schema)) {
      if (code && data[code]) {
        switch (data[code].type) {
          case list:
            fields[apiCode] = data[code].value.code;
            break;
          case radioGroup:
            const { options } = data[code];
            fields[apiCode] = data[code].value.map(value => {
              return options.find((option) => option.id === value).code;
            });
            break;
          default:
            fields[apiCode] = data[code].value;
            break;
        }
      }
    }

    // console.log({ fields });

    // return fields;

    return await this.api.add(fields);
  }

  getFields = async () => {
    return await this.api.getFields();
  }
}

export default Candidate;