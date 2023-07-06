export default {
  translation: {
    header: {
      logo: 'Hexlet Chat',
      logOut: 'Выйти',
    },
    loginPage: {
      enter: 'Войти',
      username: 'Ваш ник',
      password: 'Пароль',
      submit: 'Войти',
      noAccount: 'Нет аккаунта?',
      signUp: 'Регистрация',
    },
    registrationPage: {
      signUp: 'Регистрация',
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      submit: 'Зарегистрироваться',
    },
    notFoundPage: {
      notFound: 'Страница не найдена',
      goTo: 'Но вы можете перейти',
      mainLink: 'на главную страницу',
    },
    chatPage: {
      channels: 'Каналы',
      channelControl: 'Управление каналом',
      remove: 'Удалить',
      rename: 'Переименовать',
      inputLabel: 'Новое сообщение',
      inputPlaceholder: 'Введите сообщение...',
      send: 'Отправить',
      counter: {
        count_zero: '{{count}} сообщений',
        count_one: '{{count}} сообщение',
        count_few: '{{count}} сообщения',
        count_many: '{{count}} сообщений',
      },
    },
    modals: {
      add: {
        addChannel: 'Добавить канал',
        nameChannel: 'Имя канала',
        cancel: 'Отменить',
        send: 'Отправить',
      },
      remove: {
        removeChannel: 'Удалить канал',
        removeMessage: 'Уверены?',
        cancel: 'Отменить',
        remove: 'Удалить',
      },
      rename: {
        renameChannel: 'Переименовать канал',
        nameChannel: 'Имя канала',
        cancel: 'Отменить',
        send: 'Отправить',
      },
    },
    errors: {
      required: 'Обязательное поле',
      authFailed: 'Неверные имя пользователя или пароль',
      passwordMin: 'Не менее 6 символов',
      passwordMatch: 'Пароли должны совпадать',
      usernameMinMax: 'От 3 до 20 символов',
      alreadyExists: 'Такой пользователь уже существует',
      unique: 'Должно быть уникальным',
      network: 'Ошибка соединения',
    },
  },
};