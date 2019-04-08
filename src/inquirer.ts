const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'types',
      message: 'Which of the following are you searching for?',
      choices: ['users', 'tickets', 'organisations']
    },
    {
      type: 'rawlist',
      name: 'user-fields',
      message: 'Please choose the field you want to seach on users?',
      choices: ['_id', 'url', 'external_id', 'name', 'alias',
      'created_at', 'active', 'verified', 'shared', 'locale', 'timezone',
      'email', 'phone', 'signature', 'organization_id',
      'tags', 'suspended', 'role']
    },
    {
      type: 'rawlist',
      name: 'ticket-fields',
      message: 'Please choose the field you want to seach on tickets?',
      choices: ['_id', 'url', 'external_id', 'created_at', 'type',
      'subject', 'description', 'priority', 'status', 'submitter_id',
      'assignee_id', 'organization_id', 'tags', 'has_incidents',
      'due_at', 'via']
    },
    {
      type: 'rawlist',
      name: 'organization-fields',
      message: 'Please choose the field you want to seach on organizations?',
      choices: ['_id', 'url', 'external_id', 'name',
      'domain_names', 'created_at', 'details', 'shared_tickets',
      'tags']
    }
  ])
  .then((answers: any) => {
    console.log(JSON.stringify(answers, null, ''));
  });
