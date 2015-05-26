var test = require('tape')
var clock = require('../')

test('Clock Tests', function (t) {
  t.equals(clock('0:00'), '\uD83D\uDD5B', '0:00 is \uD83D\uDD5B')
  t.equals(clock('12:00'), '\uD83D\uDD5B', '12:00 is \uD83D\uDD5B')
  t.equals(clock('10:30'), '\uD83D\uDD65', '10:30 is \uD83D\uDD65')
  t.equals(clock('22:30'), '\uD83D\uDD65', '22:30 is \uD83D\uDD65')
  t.equals(clock('blarg'), '\u26A0', 'blarg returns \u26A0')
  t.equals(clock('6:05'), '\uD83D\uDD55', '6:05 is \uD83D\uDD55')
  t.equals(clock('6:20'), '\uD83D\uDD61', '6:20 is \uD83D\uDD61')
  t.notEquals(clock(), '\u26A0', 'current time is not \u26A0')

  t.end()
})
