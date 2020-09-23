<template>
  <div class="container">
    <Timer
      v-for="timer of countOfTimers"
      :key="timer.id"
    />
    <div 
    class="addTimer"
    @click="addTimer"
    >+</div>
  </div>
</template>

<script>
import Timer from './components/Timer';

export default {
  name: 'App',
  components: {
    Timer
  },
  data: () => ({
    countOfTimers: 0
  }),
  methods: {
    addTimer() {
      this.countOfTimers++;
    }
  }
}
</script>

<style>
@import './assets/style.css';
</style>
