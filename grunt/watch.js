module.exports = {
  scripts: {
    files: '**//*',
    tasks: ['sass','concat'],
    options: {
      interrupt: true,
      event: ['changed', 'added', 'deleted'],
    }
  }
};