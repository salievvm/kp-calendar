class CrmItemApi {
  constructor(api, entityTypeId) {
    this.api = api;
    this.entityTypeId = entityTypeId;
  }

  getList = async () => {
    return this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: this.entityTypeId,
      },
      true
    );
  };

  update = async (id, fields) => {
    return this.api.Get(
      'crm.item.update',
      {
        entityTypeId: this.entityTypeId,
        id,
        fields,
      }
    );
  };

  add = async (fields) => {
    return this.api.Get(
      'crm.item.add',
      {
        entityTypeId: this.entityTypeId,
        fields,
      }
    );
  };

  getFields = async () => {
    return this.api.BatchQuery(
      'crm.item.fields',
      {
        entityTypeId: this.entityTypeId,
      }
    );
  }

  get = async (id) => {
    return this.api.Get(
      'crm.item.get',
      {
        entityTypeId: this.entityTypeId,
        id
      }
    );
  }

  getByFilter = async ({ select, order, filter }) => {
    return this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: this.entityTypeId,
        select,
        order,
        filter,
      },
      true
    );
  }

  getLinkedItems = async (obBusinessProcess, projectId) => {
    return this.api.BatchQuery(
      'crm.item.list',
      {
        entityTypeId: obBusinessProcess.entityTypeId,
        filter: {
          [obBusinessProcess.fields.project.code]: `${obBusinessProcess.fields.project.prefix}_${projectId}`
        },
      },
      true
    );
  }
}

export default CrmItemApi;