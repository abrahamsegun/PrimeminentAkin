<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import { ref } from 'vue';
const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value=!isMenuOpen.value
  }

</script>

<template>
  <!-- header starts -->
  <div class="main pb-5 w-full  flex justify-around gap-x-12 font-mine ">

  
     <div class="logoinfo flex justify-center align-bottom  pl-2 pt-4 md:w-1/3 lg:w-1/3 " >
      <div class="imgdiv pr-3 sm:pt-2 md:pt-3 lg:pt-4" >
        <img class="max-w-none w-20 h-18 sm:h-18 md:h-21 lg:h-25 sm:w-20 md:w24 lg:w-26 object-cover" src="./Akin pics/PAS Logo.png" alt="Logo" >

      </div>
      <div class="firmname  pt-3">
        <p class="t1 text-white font-semibold li tracking-wider lg:text-2xl sm:text-base md:text-lg" >Primeminent Allied</p>
        <p class="t2 text-green-950 font-bold tracking-wider lg:text-2xl sm:text-base md:text-lg">Solutions Ltd</p>
        </div>
     </div>
     
     <div class="navbar ">
      

       <nav>
    <div class="navbar  flex justify-around  font-bold tracking-widest text-white lg:justify-between lg:text-lg xl:text-xl xl:2xl xl:justify-between gap-y-15">
      <div class="burger-icon md:pl-10 sm:pl-20 "  @click="toggleMenu" v-if="!isMenuOpen">
        <font-awesome-icon :icon="'bars'" class="fa-2x" />
      </div>
      <div v-else>
        <font-awesome-icon :icon="'fa-times'" class="fa-2x" @click="toggleMenu"/>
      </div>
  
      <!-- Other navbar content goes here -->
      <div class="link w-full flex justify-center xl:gap-9 lg:gap-7 gap-12 font-bold tracking-widest text-white" >

          <RouterLink to="/" class=" mr-3 hover:text-gray-400  sm:text-lg md:text-xl md:pl-5 lg:pl-6  lg:text-2xl">Home</RouterLink>
          <RouterLink to="/about" class=" mr-3 hover:text-gray-400  sm:text-lg md:text-xl md:pl-5 lg:pl-6  lg:text-2xl">About</RouterLink>
          <RouterLink to="/corevalues" class=" mr-3 hover:text-gray-400  sm:text-lg md:text-xl md:pl-5 lg:pl-6  lg:text-2xl">Core Value</RouterLink>
          <RouterLink to="/contact" class=" mr-3 hover:text-gray-400  sm:text-lg md:text-xl md:pl-5 lg:pl-6 lg:text-2xl">Contact</RouterLink>

      </div>

    </div>

    <!-- Mobile menu goes here -->
    <div v-if="isMenuOpen" class="mobile-menu w-1/2 h-full">
      <!-- Mobile menu content -->
      <div  class="menudiv flex flex-col w-2/3 mx-auto  align-middles h-3/4 gap-12 py-12">
        <!-- <div class="cancel flex justify-center items-center bg-transparent w-full h-full md:pl-10 sm:pl-20 ">
          <font-awesome-icon :icon="'fa-times'" @click="toggleMenu"/>
          
        </div> -->
        
        <RouterLink to="/"   class=" mr-3 hover:text-gray-400  sm:text-2xl md:text-3xl md:pl-5 lg:pl-8 mb-16" @click="toggleMenu">Home</RouterLink>
        <RouterLink to="/about" class=" mr-3 hover:text-gray-400  sm:text-2xl md:text-3xl  md:pl-5 lg:pl-8 mb-16" @click="toggleMenu">About</RouterLink>
        <RouterLink to="/corevalues" class=" mr-3 hover:text-gray-400  sm:text-2xl md:text-3xl  md:pl-5 lg:pl-8 mb-16" @click="toggleMenu">Core Values</RouterLink>
        <RouterLink to="/contact" class=" mr-3 hover:text-gray-400  sm:text-2xlmd:text-3xl  md:pl-5 lg:pl-8 mb-16" @click="toggleMenu">Contact</RouterLink>

      </div>

      <!-- Add more menu items as needed -->
    </div>
    <div></div>
  </nav>
    
    </div>

    <!-- header end -->
  </div>
   <!-- <Footer></Footer> -->
  <RouterView />
</template>

<style scoped>

.cancel{
  height: 12vh;
  
}
.main{
  display: flex;
  align-items: center;
  background-color: #DA1212;
  height: 12vh;
  width: 100%;
  
}



.mobile-menu {
  position: absolute;
  top:12vh; /* Adjust the top position based on your design */
  left: 0;
  width: 50%;
  background-color: #DA1212;
  color: #fff;
  display: flex;
  flex-direction: column;

  height: 88vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 0.5s ease-in;
  
}
/* new codes */

@media only screen and (max-width: 781px) {
  .mobile-menu {
    display: none;

  }
}
.navbar {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  
  color: #fff;
}

.burger-icon {
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
}



.mobile-menu p {
  margin: 0.5rem 0;
}

@media only screen and (max-width: 400px) {
  .main{
   height: 12vh;
   width: 100%;
   column-gap: 3rem;
  padding: rem 0;
  padding-left: 2rem;
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
/* .firmname{
 display: flex;
 align-items: flex-end;
} */

img{
  padding-top: 1rem;
}
.mobile-menu {
  position: absolute;
  top:12vh; /* Adjust the top position based on your design */
  left: 0;
  width: 50%;
  background-color: #DA1212;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 88vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 0.5s ease-in;
  
}

/* screen for smaller phone */
}



@media only screen and (max-width: 780px) {
  .main{
    flex-direction: row-reverse;
    padding-bottom: 1rem;
  }
  /* .t1{
    font-size: 1.5rem;
  }
  .t2{
    font-size: 1.5rem;
  } */
  .burger-icon{ display: block;
  cursor: pointer;
}
img{
  margin-top: 0.5rem;
}

  .link{
    display: none;
  }

  .mobile-menu {
  position: absolute;
  top:12vh; /* Adjust the top position based on your design */
  left: 0;
  width: 50%;
  background-color: #DA1212;
  color: #fff;
  display: flex;
  flex-direction: column;

  height: 88vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 0.5s ease-in;
  
}

}


</style>
