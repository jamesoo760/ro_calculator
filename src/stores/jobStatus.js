import { defineStore } from 'pinia'

export const jobStatusCalculator = defineStore('jobStatusCalculator', {
    state: () => ({
        crusaderJobStatus: [
            {lv: 1, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 1},
            {lv: 2, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 2},
            {lv: 3, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 3},
            {lv: 4, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 4},
            {lv: 5, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 5},
            {lv: 6, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 5},
            {lv: 7, str: 1, agi: 0, vit: 0, int: 0, dex: 0, luk: 5},
            {lv: 8, str: 1, agi: 0, vit: 0, int: 0, dex: 0, luk: 5},
            {lv: 9, str: 1, agi: 0, vit: 0, int: 1, dex: 0, luk: 5},
            {lv: 10, str: 1, agi: 0, vit: 0, int: 1, dex: 0, luk: 5},
            {lv: 11, str: 2, agi: 0, vit: 0, int: 1, dex: 0, luk: 5},
            {lv: 12, str: 2, agi: 0, vit: 1, int: 1, dex: 0, luk: 5},
            {lv: 13, str: 2, agi: 0, vit: 1, int: 1, dex: 0, luk: 5},
            {lv: 14, str: 2, agi: 0, vit: 1, int: 1, dex: 1, luk: 5},
            {lv: 15, str: 2, agi: 0, vit: 2, int: 1, dex: 1, luk: 5},
            {lv: 16, str: 2, agi: 0, vit: 2, int: 1, dex: 1, luk: 5},
            {lv: 17, str: 3, agi: 0, vit: 2, int: 1, dex: 1, luk: 5},
            {lv: 18, str: 3, agi: 0, vit: 2, int: 1, dex: 1, luk: 5},
            {lv: 19, str: 3, agi: 0, vit: 2, int: 1, dex: 1, luk: 5},
            {lv: 20, str: 3, agi: 0, vit: 2, int: 2, dex: 1, luk: 5},
            {lv: 21, str: 3, agi: 0, vit: 2, int: 3, dex: 1, luk: 5},
            {lv: 22, str: 3, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 23, str: 4, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 24, str: 4, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 25, str: 5, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 26, str: 5, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 27, str: 5, agi: 0, vit: 3, int: 3, dex: 1, luk: 5},
            {lv: 28, str: 5, agi: 0, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 29, str: 5, agi: 0, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 30, str: 5, agi: 1, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 31, str: 5, agi: 1, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 32, str: 6, agi: 1, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 33, str: 6, agi: 1, vit: 3, int: 3, dex: 2, luk: 5},
            {lv: 34, str: 6, agi: 1, vit: 3, int: 3, dex: 3, luk: 5},
            {lv: 35, str: 6, agi: 1, vit: 3, int: 4, dex: 3, luk: 5},
            {lv: 36, str: 6, agi: 2, vit: 3, int: 4, dex: 3, luk: 5},
            {lv: 37, str: 6, agi: 2, vit: 3, int: 4, dex: 3, luk: 5},
            {lv: 38, str: 6, agi: 2, vit: 3, int: 5, dex: 3, luk: 5},
            {lv: 39, str: 6, agi: 2, vit: 3, int: 5, dex: 3, luk: 5},
            {lv: 40, str: 6, agi: 2, vit: 4, int: 5, dex: 3, luk: 5},
            {lv: 41, str: 6, agi: 2, vit: 5, int: 5, dex: 3, luk: 5},
            {lv: 42, str: 6, agi: 2, vit: 5, int: 5, dex: 3, luk: 5},
            {lv: 43, str: 6, agi: 2, vit: 5, int: 5, dex: 3, luk: 5},
            {lv: 44, str: 6, agi: 2, vit: 5, int: 6, dex: 3, luk: 5},
            {lv: 45, str: 6, agi: 2, vit: 5, int: 6, dex: 3, luk: 5},
            {lv: 46, str: 6, agi: 2, vit: 6, int: 6, dex: 3, luk: 5},
            {lv: 47, str: 6, agi: 2, vit: 6, int: 6, dex: 3, luk: 5},
            {lv: 48, str: 7, agi: 2, vit: 6, int: 6, dex: 3, luk: 5},
            {lv: 49, str: 7, agi: 2, vit: 6, int: 6, dex: 3, luk: 5},
            {lv: 50, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 51, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 52, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 53, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 54, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 55, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 56, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 57, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 58, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 59, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 60, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 61, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 62, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 63, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 64, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 65, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 66, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 67, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 68, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 69, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5},
            {lv: 70, str: 7, agi: 2, vit: 7, int: 6, dex: 3, luk: 5}
        ],
        blv: 1,
        jlv: 1,
        baseStatus: { str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1 },
        jobStatus: { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 1 },
        etcStatus: { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 },
        allStatus: { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 },
        cri: 1,
        point: [48],
        //82,88,2,30,52,10
    }),
    getters: {
        str(state) {
            return state.baseStatus.str + state.jobStatus.str + state.etcStatus.str
        },
        agi(state) {
            return state.baseStatus.agi + state.jobStatus.agi + state.etcStatus.agi
        },
        vit(state) {
            return state.baseStatus.vit + state.jobStatus.vit + state.etcStatus.vit
        },
        int(state) {
            return state.baseStatus.int + state.jobStatus.int + state.etcStatus.int
        },
        dex(state) {
            return state.baseStatus.dex + state.jobStatus.dex + state.etcStatus.dex
        },
        luk(state) {
            return state.baseStatus.luk + state.jobStatus.luk + state.etcStatus.luk
        },
        atk_1(state) {
            if(state.blv >= 2){
                return Math.floor( ( state.blv - 2 ) / 4 ) + 1 + this.str
            }else{
                return this.str
            }
        },
        atk_2() {
            return 0
        },
        def_1(state) {
            // return Math.floor((blv.value - 1) / 2) + 1
            return Math.floor((state.blv + this.vit) / 2 + ((this.agi) / 5))
        },
        def_2() {
            return 0
        },
        matk_1(state) {
            // return Math.floor(blv.value / 4) + 1
            console.log(Math.floor(this.int * 1.5 + this.luk / 3 + state.blv / 4 + this.dex / 5))
            return Math.floor(this.int * 1.5) + Math.floor(this.luk / 3 + state.blv / 4 + this.dex / 5)
        },
        matk_2() {
            return 0
        },
        mdef_1(state) {
            return Math.floor(this.int + (state.blv / 4) + (this.vit / 5) + (this.dex / 5))
        },
        mdef_2() {
            return 0
        },
        hit_1(state) {
            return 177 - 1 + Math.floor(state.blv)
        },
        hit_2() {
            return 0
        },
        flee_1(state) {
            return 102 - 2 + Math.floor(state.blv + this.agi + (this.luk / 5))
        },
        flee_2() {
            return 1 + Math.floor(this.luk / 10)
        },
        critical(state) {
            return (this.luk * 0.3) + (state.cri * 2.2)
        },
        aspd() {
            return 156
        },
        statusPoint(state) {
            let index = this.point.indexOf(state.blv - 1)
            if(index !== -1){ return this.point[index] }
            else{ return 1}
            // if(state.blv >= 2 && state.blv <= 5){ this.point += 3}
            // else if(state.blv >= 6 && state.blv <= 10){ this.point += 4}
            // else if(state.blv >= 11 && state.blv <= 15){ this.point += 5}
            // else if(state.blv >= 16 && state.blv <= 20){ this.point += 6}
            // else if(state.blv >= 21 && state.blv <= 25){ this.point += 7}
            // else if(state.blv >= 26 && state.blv <= 30){ this.point += 8}
            // else if(state.blv >= 31 && state.blv <= 35){ this.point += 9}
            // else if(state.blv >= 36 && state.blv <= 40){ this.point += 10}
            // else if(state.blv >= 41 && state.blv <= 45){ this.point += 11}
            // else if(state.blv >= 46 && state.blv <= 50){ this.point += 12}
            // else if(state.blv >= 51 && state.blv <= 55){ this.point += 13}
            // else if(state.blv >= 56 && state.blv <= 60){ this.point += 14}
            // else if(state.blv >= 61 && state.blv <= 65){ this.point += 15}
            // else if(state.blv >= 66 && state.blv <= 70){ this.point += 16}
            // else if(state.blv >= 71 && state.blv <= 75){ this.point += 17}
            // else if(state.blv >= 76 && state.blv <= 80){ this.point += 18}
            // else if(state.blv >= 81 && state.blv <= 85){ this.point += 19}
            // else if(state.blv >= 86 && state.blv <= 90){ this.point += 20}
            // else if(state.blv >= 91 && state.blv <= 95){ this.point += 21}
            // else if(state.blv >= 96 && state.blv <= 100){ this.point += 22}
            // return this.point
        },
    },
    actions: {
        loadStatusPointData() {
            let increment = 3;
            for (let i = 1; i < 100; i++) {
                if (i % 5 === 0) increment++
                this.point.push(this.point[i - 1] + increment)
            }
        },
        changeJobStatus() {
            const data = this.crusaderJobStatus.find(status => status.lv == this.jlv)
            this.jobStatus.str = data.str
            this.jobStatus.agi = data.agi
            this.jobStatus.vit = data.vit
            this.jobStatus.int = data.int
            this.jobStatus.dex = data.dex
            this.jobStatus.luk = data.luk
        }
    }
})