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
  file,
  list,
} = FIELD_TYPES;

const {
  base,
  filled,
} = SECTION_TYPES;

const schema = {
  main: {
    title: 'Основная информация',
    sections: {
      0: {
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
    },
  },
  personal: {
    title: 'Личные данные',
    sections: {
      0: {
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
    },
  },
  passport: {
    title: 'Паспортные данные',
    type: filled,
    subtitle: 'Заполните данные как в паспорте',
    sections: {
      0: {
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
    },
  },
  additional: {
    title: 'Дополнительная информация',
    type: base,
    subtitle: 'Образование',
    sections: {
      0: {
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
    },
  },
  carLicense: {
    title: '',
    type: base,
    subtitle: 'Наличие водительских прав категории',
    sections: {
      0: {
        items: {
          carLicenseCategory: {
            title: '',
            code: '',
            type: radioGroup,
            col: 12,
            required: false,
            options: [
              { id: 'A', label: 'A' },
              { id: 'B', label: 'B' },
              { id: 'C', label: 'C' },
              { id: 'D', label: 'D' },
              { id: 'E', label: 'E' },
            ],
          },
        },
      },
    },
  },
  lawViolation: {
    title: '',
    type: base,
    subtitle: 'Привлекались ли Вы к административной/уголовной ответственности',
    sections: {
      0: {
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
    },
  },
  sourceRecognition: {
    title: '',
    type: base,
    subtitle: 'Откуда узнали о вакансии',
    sections: {
      0: {
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
    },
  },
  family: {
    title: 'Родственники',
    type: filled,
    subtitle: 'Контактное лицо №2',
    info: 'В случае отсутствия родственников, укажите контактные лица для связи',
    repeatable: true,
    canAdd: false,
    sections: {
      0: {
        title: 'Контактное лицо №1',
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
      1: {
        title: 'Контактное лицо №2',
        items: {
          dateBirth: {
            title: 'Степень родства',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          placeBirth: {
            title: 'ФИО родственника',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          serialNumber: {
            title: 'Контактный телефон',
            code: '',
            type: phone,
            col: 12,
            required: false,
          },
        },
      },
    },
  },
  experience: {
    title: 'Профессиональный опыт',
    type: filled,
    subtitle: 'Место работы',
    info: 'Необходимо заполнить в случае отсутствия резюме',
    repeatable: true,
    canAdd: true,
    addButtonLabel: 'Добавить место работы',
    sections: {
      0: {
        title: 'Последнее место работы',
        items: {
          periodOfWork: {
            title: 'Период работы',
            code: '',
            type: dateMulti,
            col: 12,
            required: false,
          },
          companyName: {
            title: 'Наименование организации',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          positionAtWork: {
            title: 'Занимаемая должность',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          reasonForDismissal: {
            title: 'Причина увольнения',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
        },
      },
    },
  },
  recommendation: {
    title: 'Рекомендации',
    type: filled,
    subtitle: 'Контактное лицо',
    info: 'Укажите контактное лицо, кто сможет дать о вас рекомендаии',
    repeatable: true,
    canAdd: true,
    addButtonLabel: 'Добавить рекомендацию',
    sections: {
      0: {
        title: 'Контактное лицо',
        items: {
          contactFio: {
            title: 'ФИО',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          positionAtWork: {
            title: 'Занимаемая должность',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
          reasonForDismissal: {
            title: 'Причина увольнения',
            code: '',
            type: text,
            col: 12,
            required: false,
          },
        },
      },
    },
  },
  documents: {
    title: 'Документы',
    type: base,
    subtitle: '',
    info: '',
    repeatable: false,
    repeatCountDefault: 0,
    canAdd: false,
    sections: {
      0: {
        items: {
          documents: {
            title: '',
            code: '',
            type: file,
            col: 12,
            required: true,
          },
        },
      },
    },
  },
};

export { schema };
