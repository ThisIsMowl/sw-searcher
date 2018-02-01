// Simple helper function for converting numbers to roman numerals

// Episode numbers
const epNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const numerals = [1, 2, 3, 4, 5, 6, 7]

const toRoman = (x) => {
  if (x) {
    return numerals.indexOf(x) > -1 ? epNumbers[numerals.indexOf(x)] : ''
  }
  return null
}

const capCase = (x) => {
  if (x) {
    return x.charAt(0).toUpperCase() + x.slice(1)
  }
  return null
}

export default {
  toRoman,
  capCase,
}
