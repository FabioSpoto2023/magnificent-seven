<template>

    <main>
        <BaseCard id="card-main">
            <BaseCard class="card-inner" v-for="(stock, index) in stockData" :key="index">
                <div class="card-head">
                    <div class="card-img"><img :src="stock.img_logo"></div>
                    <div class="card-title">{{ stock.company }}</div>
                </div>
                <div class="card-details">
                    <div class="card-detail-quartlerly">{{ stock.quarterly }}</div>
                    <div class="card-detail-revenue-container">
                        <div class="card-detail-revenue">{{ stock.revenue }}</div>
                        <div class="card-detail-percent">
                            <div class="card-detail-net-profit">
                                <div>{{ stock.net_profit }}</div>
                                <div class="img-net-profit"><img :src="stock.img_arrow"></div>
                            </div>
                            <div class="card-detail-gross-margin">
                                <div>{{ stock.gross_margin }}</div>
                                <div class="img-gross-margin"><img :src="stock.img_percent"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-detail-bill">In Bill USD</div>
                </div>
            </BaseCard>
        </BaseCard>
        <ButtonScrollRight id="button-right" v-show="buttonSwitchRightVisible" @click="toggleButtonScroll()">
        </ButtonScrollRight>
        <ButtonScrollLeft id="button-left" v-show="buttonSwitchLeftVisible" @click="toggleButtonScroll()">
        </ButtonScrollLeft>
    </main>

</template>

<script>

import BaseCard from './BaseCard.vue';
import ButtonScrollRight from './ButtonScrollRight.vue';
import ButtonScrollLeft from './ButtonScrollLeft.vue';

export default {
    name: 'CurrentRevenueWidgets',
    components: {
        BaseCard,
        ButtonScrollRight,
        ButtonScrollLeft
    },
    data() {
        return {
            buttonSwitchRightVisible: true,
            buttonSwitchLeftVisible: false,
            stockData: [
                {
                    'company': 'Apple',
                    'quarterly': 'Revenue Q1 2024',
                    'revenue': '38.52',
                    'net_profit': '+1.06',
                    'gross_margin': '2.83',
                    'img_logo': require('@/assets/icon/apple.svg'),
                    'img_arrow': require('@/assets/icon/arrow_positive.svg'),
                    'img_percent': require('@/assets/icon/percent_positive.svg')
                }
            ]
        }
    },
    methods: {
        toggleButtonScroll() {
            this.buttonSwitchRightVisible = !this.buttonSwitchRightVisible;
            this.buttonSwitchLeftVisible = !this.buttonSwitchLeftVisible;

            if (this.buttonSwitchLeftVisible) {
                document.getElementById('card-main').scrollTo(1000, 0);
            } else {
                document.getElementById('card-main').scrollTo(0, 0);
            }
        }
    }
}

</script>

<style scoped>

main {
    position: relative;
}

#card-main {
    display: flex;
    gap: 24px;
    overflow-x: hidden;
}

.card-inner {
    background-color: #011F35;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

#button-right {
    position: absolute;
    right: -16px;
    top: calc(50% - 32px / 2);
}

#button-left {
    position: absolute;
    left: -16px;
    top: calc(50% - 32px / 2);
}

.card-head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
}

.card-img {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-title {
    font-size: 20px;
}

.card-detail-revenue-container {
    display: flex;
    align-items: center;
    gap: 4px;
}

.card-detail-percent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.card-detail-net-profit {
    display: flex;
    align-items: center;
    color: #3BA752;
}

.card-detail-gross-margin {
    display: flex;
    align-items: center;
    color: #3BA752;
}

.card-detail-quartlerly {
    font-size: 12px;
}

.card-detail-revenue {
    font-size: 24px;
}

.card-detail-net-profit {
    font-size: 13px;
}

.card-detail-gross-margin {
    font-size: 13px;
}

.card-detail-bill {
    font-size: 8px;;
}

.card-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.img-net-profit {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-gross-margin {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>