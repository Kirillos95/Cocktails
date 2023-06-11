<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    }
})

</script>

<template>
<div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img">

    </div>
    <div class="main">
        <el-button class="btn">Get random cocktail</el-button>
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
.btn:hover
  background-color: darken($accent, 15%)
  border-color: darken($accent, 10%)
  color: white
  transform: scale(1.1)
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3)
</style>