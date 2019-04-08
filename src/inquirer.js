"use strict";
exports.__esModule = true;
var search_1 = require("./search");
var Table = require('cli-table');
var inquirer = require('inquirer');
var questions = [
    {
        type: 'rawlist',
        name: 'types',
        message: 'Which of the following are you searching for?',
        choices: ['users', 'tickets', 'organizations']
    },
    {
        type: 'rawlist',
        name: 'user_fields',
        message: 'Please choose the field you want to seach on users?',
        choices: ['_id', 'url', 'external_id', 'name', 'alias',
            'created_at', 'active', 'verified', 'shared', 'locale', 'timezone',
            'email', 'phone', 'signature', 'organization_id',
            'tags', 'suspended', 'role'],
        when: function (answers) {
            return answers.types === 'users';
        }
    },
    {
        type: 'rawlist',
        name: 'ticket_fields',
        message: 'Please choose the field you want to seach on tickets?',
        choices: ['_id', 'url', 'external_id', 'created_at', 'type',
            'subject', 'description', 'priority', 'status', 'submitter_id',
            'assignee_id', 'organization_id', 'tags', 'has_incidents',
            'due_at', 'via'],
        when: function (answers) {
            return answers.types === 'tickets';
        }
    },
    {
        type: 'rawlist',
        name: 'organization_fields',
        message: 'Please choose the field you want to seach on organizations?',
        choices: ['_id', 'url', 'external_id', 'name',
            'domain_names', 'created_at', 'details', 'shared_tickets',
            'tags'],
        when: function (answers) {
            return answers.types === 'organizations';
        }
    },
    {
        type: 'input',
        name: 'value',
        message: 'Please enter the value of the field you want to search for:'
    }
];
inquirer.prompt(questions).then(function (answers) {
    var results = [];
    switch (answers.types) {
        case 'users':
            results = search_1.searchObject('users', answers.user_fields, answers.value);
            break;
        case 'tickets':
            results = search_1.searchObject('tickets', answers.ticket_fields, answers.value);
            break;
        case 'organizations':
            results = search_1.searchObject('organizations', answers.organization_fields, answers.value);
            break;
    }
    if (results.length >= 0) {
        // display the outcome in a table
        Object.entries(results).forEach(function (_a, i) {
            var key = _a[0], value = _a[1];
            console.log(i + 1 + ":");
            Object.entries(value).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                console.log("    " + key + ": " + value);
            });
        });
    }
    else {
        console.log("No item matching the searching criteria!");
    }
});
