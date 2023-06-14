<script setup>
import { computed } from '@vue/reactivity';
import { Back } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import {ROUTES_PATHS} from '@/constans'
const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
    backFuncBtn: {
        type: Function,
        
    },
    isBackButtonVisible: {
        type: Boolean,
        default: true
    }
})

const route = useRoute()
const router = useRouter()

const routName = computed(() => route.name)
function goForCocktailRandom() {
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM)

    if (routName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
        router.go()
    }
}

function goBack() {
    props.backFuncBtn ? props.backFuncBtn() : router.go(-1)
}
</script>


<template>
<div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img">
    </div>
    <div class="main">
        <div class="btns">
            <el-button
            v-if="isBackButtonVisible"
             class="back_btn"
             type="primary"
             :icon="Back"
             circle
             @click="goBack"
             />
            <el-button
             class="btn"
             @click="goForCocktailRandom"
            >Get random cocktail
        </el-button>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    display: flex
    min-height: 100vh
    background-color: $background
.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover
.main
    width: 50%
    padding: 32px 40px
    position: relative 
.btn
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent
    color: $text
    border-color: $accent
    font-size: 16px
    font-family: 'Raleway', 'Arial', sans-serif
    transition-duration: 0.4s
    cursor: pointer
.btn:hover,
.btn:active
  background-color: darken($accent, 15%)
  border-color: darken($accent, 10%)
  color: white
  transform: scale(1.1)
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3)

.btns
    display: flex
    justify-content: space-between
    align-items: center   
.back_btn
    background-color: transparent
    border-color: #fff

.back_btn:hover
    border-color: $accent
</style>