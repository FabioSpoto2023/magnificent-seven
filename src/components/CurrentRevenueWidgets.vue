<template>

    <main>
        <BaseCard class="card-main">
            <BaseCard class="card-inner" id="card-first"></BaseCard>
            <BaseCard class="card-inner"></BaseCard>
            <BaseCard class="card-inner"></BaseCard>
            <BaseCard class="card-inner"></BaseCard>
            <BaseCard class="card-inner"></BaseCard>
            <BaseCard class="card-inner"></BaseCard>
            <BaseCard class="card-inner" id="card-last"></BaseCard>
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
            buttonSwitchLeftVisible: false
        }
    },
    methods: {
        toggleButtonScroll() {
            this.buttonSwitchRightVisible = !this.buttonSwitchRightVisible;
            this.buttonSwitchLeftVisible = !this.buttonSwitchLeftVisible;
        }
    }
}

</script>

<style scoped>

main {
    position: relative;
}

.card-main {
    display: flex;
    gap: 24px;
    overflow-x: hidden;
}

.card-inner {
    min-width: 150px;
    height: 143px;
    background-color: #011F35;
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
</style>