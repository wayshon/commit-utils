#! /usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const { exec } = require('child_process');

const questions = [
  {
    type: 'rawlist',
    pageSize: Infinity,
    name: 'type',
    message: 'type',
    choices: [
      '😃  feature',
      '🤔  wip',
      '🤪  fix',
      '🧐  test',
      '🤓  build',
      new inquirer.Separator(),
      '📝  docs',
      '🌈  style',
      '🔨  refactor',
      '⏪  revert',
    ],
    filter: v => v.toLowerCase()
  },
  {
    type: 'input',
    name: 'scope',
    message: "scope",
  },
  {
    type: 'input',
    name: 'subject',
    message: "subject",
  },
];

inquirer.prompt(questions).then(answers => {
  const {
    type,
    scope,
    subject,
  } = answers;
  
  exec(`git commit -m "${type.replace(/.* {2}/,'')}(${scope}): ${subject}"`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log(err);
      return;
    }
    console.log('Brother 666 🤙🤙🏻🤙🏼🤙🏽🤙🏾🤙🏿');
  });
});