export const orderFormSchema = {
  fio: {
    isRequired: {
      message: "Поле ФИО обязательно"
    },
    isFio: {
      message: "Введите корректное ФИО"
    }
  },
  email: {
    isRequired: {
      message: "Поле Email обязательно"
    },
    isEmail: {
      message: "Введите корректный Email"
    }
  }
};

export const loginSchema = {
  email: {
    isRequired: {
      message: "Поле Email обязательно"
    },
    isEmail: {
      message: "Введите корректный Email"
    }
  },
  password: {
    isRequired: {
      message: "Поле Password обязательно"
    },
    isStrongPass: {
      message: "Пароль должен состоять из заглавных, строчных букв и цифр"
    },
    minLength: {
      allowValue: 8,
      message: "Минимальная длина пароля 8 символов"
    }
  },
  profSelect: {
    isRequired: {
      message: "Необходимо выбрать профессию"
    }
  }
};

export const issueFormSchema = {
  email: {
    isRequired: {
      message: "Поле Email обязательно"
    },
    isEmail: {
      message: "Введите корректный Email"
    }
  },
  link: {
    isRequired: {
      message: "Поле Link обязательно"
    },
    isUrl: {
      message: "Введите корректный URL"
    }
  },
  description: {
    isRequired: {
      message: "Поле Description обязательно"
    },
    maxLength: {
      allowValue: 250,
      message: "Максимальная длина поля 250 символов"
    }
  },
  password: {
    isRequired: {
      message: "Поле Password обязательно"
    },
    isStrongPass: {
      message: "Пароль должен состоять из заглавных, строчных букв и цифр"
    },
    minLength: {
      allowValue: 8,
      message: "Минимальная длина пароля 8 символов"
    }
  }
};
