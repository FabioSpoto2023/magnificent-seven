<template>

  <header>
    <div class="box"></div>
    <h1>The Magnificent Seven Companies</h1>
  </header>

  <main>
    <CurrentRevenueWidgets :stockData="currentRevenueWidgetData"></CurrentRevenueWidgets>
    <div class="column-2">
      <RevenueLastThreeYears></RevenueLastThreeYears>
      <RevenueBreakdown></RevenueBreakdown>
    </div>
    <div class="column-3">
      <NetIncome></NetIncome>
      <GrossMargin></GrossMargin>
      <RevenueGrowth></RevenueGrowth>
    </div>
  </main>

</template>

<script>

import CurrentRevenueWidgets from './components/CurrentRevenueWidgets.vue';
import RevenueLastThreeYears from './components/RevenueLastThreeYears.vue';
import RevenueBreakdown from './components/RevenueBreakdown.vue';
import GrossMargin from './components/GrossMargin.vue';
import NetIncome from './components/NetIncome.vue';
import RevenueGrowth from './components/RevenueGrowth.vue';
import stockService from './services/stockService';

export default {
  name: 'App',
  components: {
    CurrentRevenueWidgets,
    RevenueLastThreeYears,
    RevenueBreakdown,
    GrossMargin,
    NetIncome,
    RevenueGrowth
  },
  async created() {
    this.stockData = await stockService.getData();
  },
  data() {
    return {
      stockData: [],
      currentRevenueWidgetData: [
        {
          'company': 'Apple',
          'quarterly': 'Revenue Q1 2024',
          'revenue': this.getRevenueWidget(),
          'net_profit': '+1.06',
          'gross_margin': '2.83',
          'img_logo': require('@/assets/icon/apple.svg'),
          'img_arrow': require('@/assets/icon/arrow_positive.svg'),
          'img_percent': require('@/assets/icon/percent_positive.svg')
        }
      ]
    };
  },
  getRevenueWidget() {

    for (let i = 0; i < this.stockData.length; i++) {
      let data = this.stockData[i];
      console.log(data)
    }
  }
}
</script>

<style>
@font-face {
  font-family: Rubik;
  src: url('./assets/font/rubik.woff2');
}

* {
  scroll-behavior: smooth;
  scroll-padding: 100px;
}

body {
  margin: 0;
  font-family: Rubik;
}

header {
  position: absolute;
  top: 64px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 24px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.box {
  width: 96px;
  height: 32px;
  background-color: #39DAFF;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

.current-revenue-widgets {
  display: flex;
  justify-content: center;
}

#app {
  min-height: 100vh;
  padding: 155px 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
  color: white;
}

.column-2 {
  display: flex;
  gap: 24px;
  height: 352px;
}

.column-3 {
  display: flex;
  gap: 24px;
  height: 296px;
}
</style>
