<script setup>

import { jobStatusCalculator } from '@/stores/jobStatus.js'
const playerStatus = jobStatusCalculator()

// setTimeout(function(){
    console.log(playerStatus.point)
// }, 5000)
playerStatus.loadStatusPointData()

</script>

<template>

    <div class="d-flex flex-column gap-2">
        <div class="title d-flex gap-3">
            <div class="d-flex justify-content-between w-50">
                <div>Atk</div>
                <div>{{ playerStatus.atk_1 }}+{{ playerStatus.atk_2 }}</div>
            </div>
            <div class="d-flex justify-content-between w-50">
                <div>Def</div>
                <div>{{ playerStatus.def_1 }}+{{ playerStatus.def_2 }}</div>
            </div>
        </div>
        <div class="title d-flex gap-3">
            <div class="d-flex justify-content-between w-50">
                <div>Matk</div>
                <div>{{ playerStatus.matk_1 }}+{{ playerStatus.matk_2 }}</div>
            </div>
            <div class="d-flex justify-content-between w-50">
                <div>Mdef</div>
                <div>{{ playerStatus.mdef_1 }}+{{ playerStatus.mdef_2 }}</div>
            </div>
        </div>
        <div class="title d-flex gap-3">
            <div class="d-flex justify-content-between w-50">
                <div>Hit</div>
                <div>{{ playerStatus.hit_1 }}+{{ playerStatus.hit_2 }}</div>
            </div>
            <div class="d-flex justify-content-between w-50">
                <div>Flee</div>
                <div>{{ playerStatus.flee_1 }}+{{ playerStatus.flee_2 }}</div>
            </div>
        </div>
        <div class="title d-flex gap-3">
            <div class="d-flex justify-content-between w-50">
                <div>Critical</div>
                <div>{{ playerStatus.critical }}</div>
            </div>
            <div class="d-flex justify-content-between w-50">
                <div>Aspd</div>
                <div>{{ playerStatus.aspd }}</div>
            </div>
        </div>
        <div class="title d-flex justify-content-between">
            <div>Status Point</div>
            <div>{{ playerStatus.statusPoint }}</div>
        </div>
    </div>

</template>

<style lang="sass" scoped>

.title
    padding: 0.375rem 0.75rem
    border-bottom: 1px solid #e6e6e6

</style>