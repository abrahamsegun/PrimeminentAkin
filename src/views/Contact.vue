<template>
                   <div class="contact relative w-full m-auto ">
                                    

                      <div class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[60%] w-2/3 m-auto shadow-lg shadow-red-500/50">
                        <h2 class=" text-5xl uppercase pl-5 font-extrabold md:font-bold sm:font-bold text-center">contact us</h2>         
                         <div>
                            <p class=" text-center font-semibold sm:text-lg md:text-xl lg:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                         </div>
                         <div class="flex flex-col gap-[3rem] m-[5rem] items-center">
                            <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline "><font-awesome-icon icon="envelope" class="fa-2x pr-5"/> <span @click="sendEmail">primeminentsolutions@gmail.com</span> </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline "><font-awesome-icon icon="envelope" class="fa-2x pr-5"/> <span @click="sendEmail2">sola.akinware@gmail.com</span> </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline " ><font-awesome-icon icon="phone" class="fa-2x pr-5" /> <span> <a :href="'tel:' + phoneNumber" target="_blank">08033338049 </a> </span></p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl pb-2 hover:cursor-pointer hover:underline pl-[7rem]"><font-awesome-icon :icon="['fab', 'instagram-square']"  class="fa-2x pr-5"/> <a href="https://www.instagram.com/primeminent/?hl=ne" target="_blank">primeminent</a></p>
         
                         </div>
                    
                    </div>
                      

                   </div>
    <Footer></Footer>
</template>
<script>
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Footer
    }
}
</script>
<style scoped>
    .contact{
        height: 100vh;
    }
</style>



