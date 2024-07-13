<template>
  <BaseCard>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto, laborum, unde itaque quidem minus, vitae consequuntur assumenda quibusdam quos obcaecati possimus repudiandae? Veritatis quasi explicabo tempore culpa natus distinctio.</p>
  </BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue'

export default {
  name: 'App',
  components: {
    BaseCard
  }
}
</script>

<style>

body { margin: 0; }

#app {
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  box-sizing: border-box;
  color: white;
}

</style>
