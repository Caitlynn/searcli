import { searchObject } from './search';
import inquirer from 'inquirer';

console.log(
'    _____                  _____ _      _____\n',
'  / ____|                / ____| |    |_   _|\n',
' | (___   ___  __ _ _ __| |    | |      | |  \n',
'    \___  \ / _ \/ _` | `__| |    | |      | |  \n',
'  ____) |  __/ (_| | |  | |____| |____ _| |_ \n',
' |_____/   \___|\__,_|_|    \_____|______|_____|\n',
);
console.log("Hi, welcome to searCLI! \n")

const questions = [
    {
      type: 'list',
      name: 'types',
      message: 'Which of the following are you searching for?',
      choices: ['users', 'tickets', 'organizations']
    },
    {
      type: 'list',
      name: 'userFields',
      message: 'Please choose the field you want to seach on users?',
      choices: ['_id', 'url', 'external_id', 'name', 'alias',
      'created_at', 'active', 'verified', 'shared', 'locale', 'timezone',
      'email', 'phone', 'signature', 'organization_id',
      'tags', 'suspended', 'role'],
      when: function(answers: any) {
        return answers.types === 'users';
      }
    },
    {
      type: 'list',
      name: 'ticketFields',
      message: 'Please choose the field you want to seach on tickets?',
      choices: ['_id', 'url', 'external_id', 'created_at', 'type',
      'subject', 'description', 'priority', 'status', 'submitter_id',
      'assignee_id', 'organization_id', 'tags', 'has_incidents',
      'due_at', 'via'],
      when: function(answers: any) {
        return answers.types === 'tickets';
      }
    },
    {
      type: 'list',
      name: 'organizationFields',
      message: 'Please choose the field you want to seach on organizations?',
      choices: ['_id', 'url', 'external_id', 'name',
      'domain_names', 'created_at', 'details', 'shared_tickets',
      'tags'],
      when: function(answers: any) {
        return answers.types === 'organizations';
      }
    },
    {
      type: 'input',
      name: 'value',
      message: 'Please enter the value of the field you want to search for:'
    }
  ];

  inquirer.prompt(questions).then((answers: any) => {
    let results: any = []
    switch (answers.types) {
      case 'users':
        results = searchObject('users', answers.userFields, answers.value);
        break;
      case 'tickets':
        results = searchObject('tickets', answers.ticketFields, answers.value);
        break;
      case 'organizations':
        results = searchObject('organizations', answers.organizationFields, answers.value);
        break;
    }

    if (results.length > 0) {
      // display the outcome in a table
      Object.entries(results).forEach(([ key, value ], i) => {
        console.log(`Result ${i + 1}:`);
        Object.entries(value).forEach(([ key, value ]) => {
          console.log(`    ${key}: ${value}`);
        });
      });
    } else {
      console.log("\nNo item matching the searching criteria!\n")
    }
  });
