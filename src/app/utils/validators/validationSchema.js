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
  }
};
