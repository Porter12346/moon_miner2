import { AppState } from "../AppState.js"

class MoneyService {

  autoMoon() {
    let autoValue = 0
    AppState.autoUpgrades.forEach(upgrade => {
      autoValue += (upgrade.increment * upgrade.quantity) / 10
    });
    AppState.money += autoValue
  }

  clickMoon() {
    let clickValue = 1
    AppState.clickUpgrades.forEach(upgrade => {
      clickValue += upgrade.increment * upgrade.quantity 
    });
    AppState.money += clickValue
  }

}

export const moneyService = new MoneyService()