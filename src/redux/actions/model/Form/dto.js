const FIELD_TYPES = {
  text: 'text',
};

const {
  text
} = FIELD_TYPES;

const schema = {
  main: {
    section: 'Основная информация',
    items: {
      whichPosition: { title: 'На какую должность претендуете?', code: '', type: text, },
      whoRecommended: { title: 'ФИО сотрудника, кто порекомендовал вакансию', code: '', type: text, },
    },
  },
};

export { schema };
