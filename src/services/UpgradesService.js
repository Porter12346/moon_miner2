import { AppState } from "../AppState.js"

class UpgradesService {

    buyUpgrade(upgrade) {
        AppState.money -= upgrade.price
        upgrade.quantity++
        upgrade.price += upgrade.price * 2
    }

}
export const upgradesService = new UpgradesService()