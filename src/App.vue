<script setup>
import PlayerStatusCalculator from './components/PlayerStatusCalculator.vue'
import BaseStatusCalculator from './components/BaseStatusCalculator.vue'
import StatusView from './components/StatusView.vue'
</script>

<template>
  <div class="container">
    <main>
      <div class="mt-5 card">
        <div class="card-header">人物能力屬性狀態欄</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <PlayerStatusCalculator />
          </li>
        </ul>
        <div class="card-body">
          <div class="row g-5">
            <div class="col-md-5">
              <BaseStatusCalculator />
            </div>
            <div class="col-md-7">
              <StatusView />
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </div>
</template>

<style scoped>

</style>
