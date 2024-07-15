import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  money: 0,

  perSecond: 0,

  clickUpgrades: [new Upgrade({ price: 35, increment: 1, isAuto: false, quantity: 0}), new Upgrade({ price: 1500, increment: 10, isAuto: false, quantity: 0})],

  autoUpgrades: [new Upgrade({ price: 125, increment: 1, isAuto: true, quantity: 0}), new Upgrade({ price: 3000, increment: 10, isAuto: true, quantity: 0})]
})