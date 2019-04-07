const inquirer   = require('inquirer');

module.exports = {

  askForSearchType: () => {
    const questions = [
      {
        type: 'rawlist',
        name: 'types',
        message: 'Which of the following are you searching for?',
        choices: ['Users', 'Tickets', 'Organisations']
      },
      {
        type: 'rawlist',
        name: 'user-fields',
        message: 'Please choose the field you want to seach on?',
        choices: ['_id', 'url', 'external_id', 'name', 'alias',
        'created_at', 'active', 'verified', 'shared', 'locale', 'timezone',
        'email', 'phone', 'signature', 'organization_id',
        'tags', 'suspended', 'role']
      }
    ];
    return inquirer.prompt(questions);
  },
}
