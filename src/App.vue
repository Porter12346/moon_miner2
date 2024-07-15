<script setup>
import { computed, createApp, onMounted } from 'vue'
import { AppState } from './AppState.js'
import { moneyService } from './services/MoneyService.js';
import { upgradesService } from './services/UpgradesService.js';



const money = computed(() => AppState.money)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const AutoUpgrades = computed(() => AppState.autoUpgrades)


function clickMoon() {
  moneyService.clickMoon()
}

function buyUpgrade(upgrade){
  upgradesService.buyUpgrade(upgrade)
}

function autoMoon(){
  moneyService.autoMoon()
}

onMounted(() => {
  // console.log('on mounted is running!');
  setInterval(autoMoon, 100)
})

</script>


// HTML
<template class="template">
  <div class="container ">
    <div class="row">
      <div class="col-12 d-flex flex-column align-items-center">
        <h1 class="text-center">Moon Money Printer</h1>
        <h2 class="text-center">${{ Math.floor(money) }}</h2>
        <img @click="clickMoon" @contextmenu.prevent
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31955c23-347f-4a63-a346-730268693c3b/dc6vkzm-46373709-9365-48f5-a6e1-24044d6ae193.png/v1/fill/w_894,h_894/moon_png__by_niosdark_dc6vkzm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzMxOTU1YzIzLTM0N2YtNGE2My1hMzQ2LTczMDI2ODY5M2MzYlwvZGM2dmt6bS00NjM3MzcwOS05MzY1LTQ4ZjUtYTZlMS0yNDA0NGQ2YWUxOTMucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.H76maG7EA8UiburK8XONKrGMK7F0Ua-1KHFccDvgosc"
          alt="THE MOON">
      </div>
      <div class="col-6 d-flex flex-column border upgrade-pannel">
        <h3 class="text-center">Click Upgrades</h3>
        <div v-for="upgrade in clickUpgrades" :key="upgrade.increment" class="d-flex justify-content-between border-bottom">
        <p>+{{ upgrade.increment }} Per Click</p>
        <p>${{ upgrade.price }}</p>
          <button @click="buyUpgrade(upgrade)" v-if="money >= upgrade.price">Buy</button>
          <div v-else></div>
        </div>
    </div>
    <div class="col-6 d-flex flex-column border upgrade-pannel">
        <h3 class="text-center">Auto Upgrades</h3>
        <div v-for="upgrade in AutoUpgrades" :key="upgrade.increment" class="d-flex justify-content-between border-bottom">
        <p>+{{ upgrade.increment }} Per Click</p>
        <p>${{ upgrade.price }}</p>
          <button @click="buyUpgrade(upgrade)" v-if="money >= upgrade.price">Buy</button>
          <div v-else></div>
        </div>
    </div>
    </div>
  </div>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

img{
  width: 75%;
  user-select: none;
}

p{
  margin-top: 5%;
  margin-bottom: 5%;
}

.upgrade-pannel{
  background-color: rgba(128, 128, 128, 0.266);
}

</style>