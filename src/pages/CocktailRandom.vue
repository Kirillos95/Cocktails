<script setup>
 import axios from 'axios';
 import {ref, computed} from 'vue';
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';
 import { useRoute, useRouter} from 'vue-router';
 import {COCKTAIL_RANDOM} from '@/constans';
 import {INGREDIENT_PIC} from '@/constans'
 import AppLayout from '../components/AppLayout.vue';

 const route = useRoute();
 const router = useRouter();

 const cocktail = ref(null);
 const cocktailId = computed(() => route.path.split('/').pop());

 const ingredients = computed(()=>{
    const ingredients= []

    for (let i = 1; i <= 15; i++) {
      if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]
        ingredients.push(ingredient)   
    }
    return ingredients
 })

 async function getCocktail() {
    const data = await axios.get(COCKTAIL_RANDOM)
    cocktail.value = data?.data?.drinks[0]    
 }
 function goBack() {
    router.go(-1)
 }

 getCocktail()

</script>

<template>
    <div class="wrap">
        <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFuncBtn="goBack">
   <div class="wrapper">
        <div class="info">
            <div class="title">{{ cocktail.strDrink }}</div>
            <div class="line"></div>
            <div class="slider">
                <swiper
                  :slides-per-view="3"
                  :space-between="50"
                  class="swiper-slider"
                  >
    <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
        <img :src="`${INGREDIENT_PIC}${ingredient}-Small.png`" />
        <div class="name"> {{ ingredient }}</div>
    </swiper-slide>
  
  </swiper>
            </div>
            <div class="instructions">
                {{ cocktail.strInstructions }}
            </div>
        </div>
    </div>
</AppLayout>    
    </div>
 
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.slider
    padding: 50px 0

.swiper-slider
    width: 586px

.name
    margin-top: 20px
        
</style>