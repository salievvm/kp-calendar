import {
  FIELD_TYPES,
  SECTION_TYPES,
} from "../../../../consts";

const {
  text,
  textarea,
  radio,
  radioGroup,
  phone,
  email,
  date,
} = FIELD_TYPES;

const {
  base,
  filled,
} = SECTION_TYPES;

const schema = {
  main: {
    section: 'Основная информация',
    items: {
      whichPosition: {
        title: 'На какую должность претендуете?',
        code: '',
        type: text,
        col: 12,
      },
      whoRecommended: {
        title: 'ФИО сотрудника, кто порекомендовал вакансию',
        code: '',
        type: text,
        col: 12,
      },
      nobodyRecommended: {
        title: 'Никто не рекоммендовал',
        code: '',
        type: radio,
        col: 12,
      },
    },
  },
  personal: {
    section: 'Личные данные',
    items: {
      fio: {
        title: 'Ваши ФИО',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      fioPrevious: {
        title: 'ФИО до изменения',
        code: '',
        type: text,
        col: 12,
      },
      fioChanged: {
        title: 'Данные менялись',
        code: '',
        type: radio,
        col: 12,
      },
      addressRegistration: {
        title: 'Адрес регистрации',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      addressFact: {
        title: 'Адрес фактического проживания',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      addressesSame: {
        title: 'Совпадает с адресом регистрации',
        code: '',
        type: radio,
        col: 12,
      },
      phone: {
        title: 'Контактный телефон',
        code: '',
        type: phone,
        col: 6,
      },
      email: {
        title: 'Адрес электронной почты',
        code: '',
        type: email,
        col: 6,
      },
    },
  },
  passport: {
    section: 'Паспортные данные',
    type: filled,
    subtitle: 'Заполните данные как в паспорте',
    items: {
      dateBirth: {
        title: 'Дата рождения',
        code: '',
        type: date,
        col: 6,
        required: true,
      },
      placeBirth: {
        title: 'Место рождения',
        code: '',
        type: text,
        col: 6,
        required: true,
      },
      serialNumber: {
        title: 'Серия и номер',
        code: '',
        type: text,
        col: 6,
        required: true,
      },
      dateOfIssue: {
        title: 'Дата выдачи',
        code: '',
        type: text,
        col: 6,
        required: true,
      },
      issuedBy: {
        title: 'Кем выдан',
        code: '',
        type: textarea,
        col: 12,
        required: true,
      },
    },
  },
};

export { schema };
