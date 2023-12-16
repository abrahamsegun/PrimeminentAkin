<template >
    <!-- footer px-10 py-10 flex justify-between -->
    <div class="footer grid sm:grid-cols-1 md:gap-5 md:grid-cols-2">
        <!-- side A -->
       <div class="prime min-w-max lg:pt-10 xl:ml-5 col-span-1">
        <img class=" max-w-full w-22 h-24 sm:h-20 md:h-22 mt-3 lg:h-30 sm:w-20 md:w-24 lg:w-30 object-cover" src="../Akin pics/PAS Logo.png" alt="Logo" >
           <div>
            <p class=" text-white font-semibold  tracking-wider lg:text-3xl sm:text-lg md:text-2xl" >Primeminent Allied</p>
           <p class=" text-green-950 font-bold tracking-wider lg:text-4xl sm:text-XL md:text-3xl">Solutions Limited</p>
           </div>
       </div>

   <!-- side B -->


       <div class="footnav lg:grid md:grid  md:gap-5 md:grid-cols-2 lg:gap-x-0 lg:grid-cols-2 p-5 xl:grid xl:gap-x-7 xl:grid-cols-3  ">
   
                    <!-- About -->
                     <div>
                        <div class="subhead">
                            <h2 class="font-bold sm:text-3xl md:text-3xl lg:4xl pt-8 pb-4 uppercase hover:underline underline-offset-8 hover:cursor-pointer">About</h2>

                        </div>
                         <p class=" sm:text-xl md:text-2xl lg:text-3xl pb-2 hover:cursor-pointer hover:underline  ">Who we are? </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl pb-2 hover:cursor-pointer hover:underline ">What we do?</p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">our clients</p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">Our work scope</p>

                     </div>

                     <!-- Core values -->
                     <div>
                         <div>
                             <h2 class="font-bold sm:text-3xl md:text-3xl lg:4xl pt-8 pb-4 uppercase hover:cursor-pointer hover:underline underline-offset-8 ">Core Values</h2>

                         </div>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">Safety Management </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">Integrated Facility Management</p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">Telecoms Infrastructure </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline ">Training</p>
                     </div>
            

                     <!-- Contact -->
                     <div>
                        <div>
                            <h2 class="font-bold sm:text-3xl md:text-3xl lg:4xl pt-8 pb-4 hover:cursor-pointer uppercase hover:underline underline-offset-8 " >Contact</h2>

                        </div>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline "><font-awesome-icon icon="envelope" /> <span @click="sendEmail">primeminent</span> </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline "><font-awesome-icon icon="envelope" /> <span @click="sendEmail2">sola.akinware</span> </p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl  pb-2 hover:cursor-pointer hover:underline " ><font-awesome-icon icon="phone" /> <span> <a :href="'tel:' + phoneNumber" target="_blank">08033338049 </a> </span></p>
                         <p  class=" sm:text-xl md:text-2xl lg:text-3xl pb-2 hover:cursor-pointer hover:underline "><font-awesome-icon :icon="['fab', 'instagram-square']" /> <a href="https://www.instagram.com/primeminent/?hl=ne" target="_blank">primeminent</a></p>
         
                         <div>
                            
                         </div>

                     </div>
                   
  
       </div>

    </div>
</template>
<script setup>
const phoneNumber= +2348033338049
const sendEmail= ()=>{
    window.location = "mailto:primeminentsolutions@gmail.com";
}

const sendEmail2= ()=>{
    window.location = "mailto:sola.akinware@gmail.com";
}
</script>
<style >
.footnav{
    text-align: center;
}
    .footer{
       /* position: absolute;
       bottom: 0; */
       width:100%;
       background-color: #041562 ;
    }
    .prime{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (min-width: 1024px) {
   
        .footer{
            display: grid;
            grid-template-columns: 1fr 2fr ;
        }

    }
    @media only screen and (max-width: 500px) {
        h2{
            font-size: 1.4rem;
        }
        p{
            font-size: 1.2rem;
        }
        .subhead{
            height: 5rem;
            margin-bottom: 1rem;
        }
    }   
</style>



<!-- https://www.instagram.com/primeminent/?hl=ne -->