<script setup>

import { jobStatusCalculator } from '@/stores/jobStatus.js'
const playerStatus = jobStatusCalculator()

</script>
<template>

    <div class="d-flex flex-column gap-2">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Str</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.str">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.str" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.str">
        </div>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Agi</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.agi">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.agi" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.agi">
        </div>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Vit</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.vit">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.vit" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.vit">
        </div>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Int</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.int">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.int" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.int">
        </div>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Dex</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.dex">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.dex" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.dex">
        </div>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Luk</span>
            <input class="form-control" type="number" min="1" max="99" v-model="playerStatus.baseStatus.luk">
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.jobStatus.luk" disabled>
            <span class="input-group-text">+</span>
            <input class="form-control" type="number" v-model="playerStatus.etcStatus.luk">
        </div>
    </div>

</template>
