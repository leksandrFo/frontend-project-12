export default {
  translation: {
    header: {
      logo: 'Hexlet Chat',
      logOut: 'Log out',
    },
    loginPage: {
      enter: 'Sign in',
      username: 'Your nickname',
      password: 'Password',
      submit: 'Sign in',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
    },
    registrationPage: {
      signUp: 'Sign up',
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm password',
      submit: 'Sign up',
    },
    notFoundPage: {
      notFound: 'Page not found',
      goTo: 'But you can go',
      mainLink: 'to the main page',
    },
    chatPage: {
      logOut: 'Log out',
      channels: 'Channels',
      channelControl: 'Channel control',
      remove: 'Remove',
      rename: 'Rename',
      inputLabel: 'New message',
      inputPlaceholder: 'Enter your message...',
      send: 'Send',
      counter: {
        count_one: '{{count}} message',
        count_other: '{{count}} messages',
      },
    },
    modals: {
      add: {
        addChannel: 'Add channel',
        nameChannel: 'Channel name',
        cancel: 'Cancel',
        send: 'Send',
      },
      remove: {
        removeChannel: 'Remove channel',
        removeMessage: 'Are you sure?,',
        cancel: 'Cancel',
        remove: 'Remove',
      },
      rename: {
        renameChannel: 'Rename channel',
        nameChannel: 'Имя канала',
        cancel: 'Cancel',
        send: 'Send',
      },
    },
    errors: {
      required: 'Required field',
      authFailed: 'Invalid username or password',
      passwordMin: 'At least 6 symbols',
      passwordMatch: 'Passwords do not match',
      usernameMinMax: 'From 3 to 20 symbols',
      alreadyExists: 'The user already exists',
      unique: 'Must be unique',
      network: 'Connection problem',
    },
  },
};
