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
  dateMulti,
  list,
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
        linkedField: 'whoRecommended',
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
        linkedField: 'fioPrevious',
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
        linkedField: 'addressFact',
        col: 12,
      },
      phone: {
        title: 'Контактный телефон',
        code: '',
        type: phone,
        col: 6,
        required: true,
      },
      email: {
        title: 'Адрес электронной почты',
        code: '',
        type: email,
        col: 6,
        required: true,
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
        type: date,
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
  additional: {
    section: 'Дополнительная информация',
    type: base,
    subtitle: 'Образование',
    items: {
      mainEducation: {
        title: 'Основное образование',
        code: '',
        type: list,
        col: 12,
        required: false,
      },
      laguageKnowledge: {
        title: 'Знание языков',
        code: '',
        type: text,
        col: 6,
        required: false,
      },
      levelProficiency: {
        title: 'Уровень владения',
        code: '',
        type: list,
        col: 6,
        required: false,
      },
    },
  },
  carLicense: {
    section: '',
    type: base,
    subtitle: 'Наличие водительских прав категории',
    items: {
      carLicenseCategory: {
        title: '',
        code: '',
        type: radioGroup,
        col: 12,
        required: false,
      },
    },
  },
  lawViolation: {
    section: '',
    type: base,
    subtitle: 'Привлекались ли Вы к административной/уголовной ответственности',
    items: {
      lawViolationArticle: {
        title: 'Укажите статью',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      notLawViolation: {
        title: 'Не привлекался',
        code: '',
        type: radio,
        linkedField: 'lawViolationArticle',
        col: 12,
        required: false,
      },
    },
  },
  sourceRecognition: {
    section: '',
    type: base,
    subtitle: 'Откуда узнали о вакансии',
    items: {
      sourceRecognition: {
        title: 'Укажите источник',
        code: '',
        type: list,
        col: 12,
        required: false,
      },
    },
  },
  family: {
    section: 'Родственники',
    type: filled,
    subtitle: 'Контактное лицо',
    info: 'В случае отсутствия родственников, укажите контактные лица для связи',
    repeatable: true,
    repeatCountDefault: 2,
    canAdd: false,
    items: {
      dateBirth: {
        title: 'Степень родства',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      placeBirth: {
        title: 'ФИО родственника',
        code: '',
        type: text,
        col: 12,
        required: true,
      },
      serialNumber: {
        title: 'Контактный телефон',
        code: '',
        type: phone,
        col: 12,
        required: true,
      },
    },
  },
};

export { schema };
