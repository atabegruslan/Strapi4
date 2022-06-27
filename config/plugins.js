module.exports = {
  // ...
  'todo': {
    enabled: true,
    resolve: './src/plugins/todo'
  },
  'social-share': {
    enabled: true,
    resolve: './src/plugins/social-share'
  },
  'crud': {
    enabled: true,
    resolve: './src/plugins/crud'
  },
  'language-strings': {
    enabled: true,
    resolve: './src/plugins/language-strings'
  },
  'auth-and-upload': {
    enabled: true,
    resolve: './src/plugins/auth-and-upload'
  },
  'pets': {
    enabled: true,
    resolve: './src/plugins/pets'
  },
  'seo': {
    enabled: true,
    resolve: './src/plugins/seo'
  },
  // ...
  'upload': {
    config: {
      provider: 'custom',
      providerOptions: {},
    },
  },
}
