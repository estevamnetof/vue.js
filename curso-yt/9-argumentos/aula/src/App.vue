<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Info
  }
}
</script>