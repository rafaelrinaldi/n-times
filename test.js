'use strict';

const test = require('tape');
const times = require('./');

test('test if parameters and number of times a function is called are correct', t => {
  let messages = [];

  const log = message => messages.push(message);

  times(3, log, 'beep');

  t.ok(messages.length);
  t.ok(messages[0], 'beep');
  t.ok(messages[1], 'beep');
  t.ok(messages[2], 'beep');
  t.end();
});

test('test if current iteration index is being passed properly to fn', t => {
  let value = 0;

  const multiplicator = (n, index) => value = index * n;

  times(5, multiplicator, 5); // 5 * 4 = 20

  t.ok(value, 20);
  t.end();
});
