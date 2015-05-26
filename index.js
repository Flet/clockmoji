module.exports = clock

function clock (time) {
  var date = new Date()

  if (time) {
    var timeSplit = time.split(':')
    date.setHours(0 + timeSplit[0])
    date.setMinutes(0 + timeSplit[1])
  }

  date = new Date(date.getTime() + 15 * 60000)
  var shortHand = date.getHours() % 12
  var min = date.getMinutes()
  var longHand = (min - (min % 30)) / 30 ? '30' : '00'

  var clockTime = '' + shortHand + ':' + longHand

  return emojiClock(clockTime)
}

function emojiClock (time) {
  if (time === '0:00' || time === '12:00') return '\uD83D\uDD5B' // '\u1F55B'
  if (time === '0:30' || time === '12:30') return '\uD83D\uDD67' // '\u1F567'
  if (time === '1:00' || time === '13:00') return '\uD83D\uDD50' // '\u1F550'
  if (time === '1:30' || time === '13:30') return '\uD83D\uDD5C' // '\u1F55C'
  if (time === '2:00' || time === '14:00') return '\uD83D\uDD51' // '\u1F551'
  if (time === '2:30' || time === '14:30') return '\uD83D\uDD5D' // '\u1F55D'
  if (time === '3:00' || time === '15:00') return '\uD83D\uDD52' // '\u1F552'
  if (time === '3:30' || time === '15:30') return '\uD83D\uDD5E' // '\u1F55E'
  if (time === '4:00' || time === '16:00') return '\uD83D\uDD53' // '\u1F553'
  if (time === '4:30' || time === '16:30') return '\uD83D\uDD5F' // '\u1F55F'
  if (time === '5:00' || time === '17:00') return '\uD83D\uDD54' // '\u1F554'
  if (time === '5:30' || time === '17:30') return '\uD83D\uDD60' // '\u1F560'
  if (time === '6:00' || time === '18:00') return '\uD83D\uDD55' // '\u1F555'
  if (time === '6:30' || time === '18:30') return '\uD83D\uDD61' // '\u1F561'
  if (time === '7:00' || time === '19:00') return '\uD83D\uDD56' // '\u1F556'
  if (time === '7:30' || time === '19:30') return '\uD83D\uDD62' // '\u1F562'
  if (time === '8:00' || time === '20:00') return '\uD83D\uDD57' // '\u1F557'
  if (time === '8:30' || time === '20:30') return '\uD83D\uDD63' // '\u1F563'
  if (time === '9:00' || time === '21:00') return '\uD83D\uDD58' // '\u1F558'
  if (time === '9:30' || time === '21:30') return '\uD83D\uDD64' // '\u1F564'
  if (time === '10:00' || time === '22:00') return '\uD83D\uDD59' // '\u1F559'
  if (time === '10:30' || time === '22:30') return '\uD83D\uDD65' // '\u1F565'
  if (time === '11:00' || time === '23:00') return '\uD83D\uDD5A' // '\u1F55A'
  if (time === '11:30' || time === '23:30') return '\uD83D\uDD66' // '\u1F566'

  return '\u26A0'
}
