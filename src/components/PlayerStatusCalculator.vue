<script setup>

import { jobStatusCalculator } from '@/stores/jobStatus.js'
const playerStatus = jobStatusCalculator()

</script>

<template>

    <div class="pt-2 d-flex flex-sm-row flex-column gap-3">
        <div class="flex-grow-1">
            <div class="input-group">
                <span class="input-group-text">基本等級</span>
                <input class="form-control" type="number" min="1" max="99" v-model.number="playerStatus.blv">
            </div>
            <input class="form-range" type="range" min="1" max="99" v-model.number="playerStatus.blv">
        </div>
        <div class="flex-grow-1">
            <div class="input-group">
                <span class="input-group-text">職業等級</span>
                <input class="form-control" type="number" min="1" max="50" v-model.number="playerStatus.jlv">
            </div>
            <input class="form-range" type="range" min="1" max="50" v-model.number="playerStatus.jlv" @input="playerStatus.changeJobStatus">
        </div>
    </div>

</template>