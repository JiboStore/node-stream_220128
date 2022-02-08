import gameanalytics from 'gameanalytics'
import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
require('normalize.css/normalize.css')
require('../css/main.css')
require('./page.css')

// + GameAnalytics
console.log(gameanalytics);
gameanalytics.GameAnalytics.setEnabledInfoLog(true);
gameanalytics.GameAnalytics.initialize('4b14674333de5bc8185caf0cc5b524c3', 'a0173504e6dd58addb0274e802c37f3aefef8a92');
// - GameAnalytics

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()

console.log(window.Foo.getValue())
console.log(window.Bar)
