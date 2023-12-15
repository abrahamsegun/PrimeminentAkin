<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- header starts -->
  <div class=" main pb-5 min-h-20 w-full  flex justify-around gap-x-12 ">

  
     <div class="logoinfo flex justify-center align-bottom  pl-2 pt-4 md:w-1/3 lg:w-1/3 " >
      <div class="imgdiv pr-3 sm:pt-2 md:pt-3 lg:pt-4" >
        <img class="max-w-none w-20 h-18 sm:h-18 md:h-21 lg:h-25 sm:w-20 md:w24 lg:w-26 object-cover" src="./Akin pics/PAS Logo.png" alt="Logo" >

      </div>
      <div class="firmname  pt-3">
        <p class=" text-white font-semibold li tracking-wider lg:text-2xl sm:text-base md:text-lg" >Primeminent Allied</p>
        <p class=" text-green-950 font-bold tracking-wider lg:text-2xl sm:text-base md:text-lg">Solutions Limited</p>
        </div>
     </div>
     
     <div class="navbar w-1/3 md:w-1/3  lg:w-2/3">
       <nav class="nav flex justify-center gap-12 font-bold tracking-widest text-white ">
         <RouterLink to="/" class=" mr-3 hover:text-gray-400 lg:text-2xl sm:text-base md:text-lg">Home</RouterLink>
         <RouterLink to="/about" class=" mr-3 hover:text-gray-400 lg:text-2xl sm:text-base md:text-lg">About</RouterLink>
         <RouterLink to="/corevalues" class=" mr-3 hover:text-gray-400 lg:text-2xl sm:text-base md:text-lg">Core Values</RouterLink>
         <RouterLink to="/contact" class=" mr-3 hover:text-gray-400 lg:text-2xl sm:text-base md:text-lg">Contact</RouterLink>
       </nav>
    
<!-- md:pl-12 -->
       <div class="burger ">
        <p><font-awesome-icon :icon="'bars'" class="fa-2x"/></p>
       </div>
    
    </div>

    <!-- header end -->
  </div>

  <RouterView />
</template>

<style scoped>
.main{
  display: flex;
  align-items: center;
  background-color: #DA1212;
  
}
@media only screen and (max-width: 400px) {
  .main{
   min-height: 12vh;
   height: 100%;
   width: 100%;
   column-gap: 0;
  padding: 1rem 0;
}
.logoinfo{
  display: flex;
  flex-direction: row;
  width: 75%;
  font-size: 17.5px;
  font-weight: 800;
}
.navbar{
  width: 25%;
}
firmname{
 display: flex;
 align-items: flex-end;
}

img{
  padding-top: 1rem;
}

.burger{
 padding-left: 1rem;
}
/* screen for smaller phone */
}


.burger{
  display: none;
    margin: 2rem;
    padding-top: 0 .4rem;
    

}
.burger div {
  width: 1.5rem;
  height: 0.26rem;
  margin: 0.4rem;
  background-color: white;
  } 
@media only screen and (max-width: 780px) {
.burger{
  display: block;
  cursor: pointer;
}

  .nav{
    display:none ;
  }
}


</style>
