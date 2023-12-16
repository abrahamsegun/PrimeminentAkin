<template >
             
     <main class=" w-full">
          <div class="abouthead   w-full  bg-black lg:h-[30rem] sm:h-[50rem] md:h-[40rem]">
            <div    class="w-[80%] text-white h-[70%] flex flex-col gap-y-10 text-left mx-auto pt-[5rem]">
                <h2 class=" text-5xl uppercase pl-5">About</h2>
                <p class=" py-5 text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dignissimos possimus nemo ratione facere velit voluptates quibusdam aspernatur! Sequi mollitia quia repellendus
                     aspernatur voluptas repellat laborum at molestias placeat corrupti esse minima ullam voluptatum repudiandae explicabo autem enim porro dolore aut, molestiae impedit omnis incidunt accusantium? Expedita similique neque sunt.</p>

            </div>
          </div>
           
      <!-- what we do -->
      <div class="our text-center text-4xl uppercase m-[2rem] font-extrabold hover:text-[ #36454F] hover:shadow-lg hover:underline">Our services</div>


      <!-- safety  management -->
          <!-- <div class="mainabout w-[90%] m-auto mt-[2rem]"> -->
            <div class=" w-[90%] m-auto mt-[2rem]">
            <!-- <h3 class=" text-3xl uppercase font-bold">Safety Management</h3> -->
            <div class="submain flex sm:flex-col sm:gap-y-5 md:flex-row  md:gap-x-[5%] lg:gap-x-[10%] lg:flex-row ">

                

                <div class="pdiv  w-full items-center text-center flex flex-col justify-center  md:text-left">
                    <h3 class=" text-3xl uppercase font-bold md:mb-[3rem] lg:mb-[5rem] text-left">safety  management</h3>

                    <p class="textp md:text-2xl lg:4xl ">Lorem icing elit. Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit dolor consequatur? Libero impedit nulla vitae accusantium consectetur necessitatibus, cumque recusandae ducimus id amet, quos, autem natus consequatur accusamus numquam. dolor sit amet consectetur adipisicing elit. Commodi provident quo asperiores ab? Accusantium vero nobis quos enim eaque temporibus consectetur perspiciatis rem? Expedita vitae, porro consectetur temporibus unde sed? Incidunt ex vel minima fugit molestias?</p>

                </div>


                <!-- img -->
                <div class=" bg-red ">
                <img class=" " src="../Akin pics/core.jpg" alt="Telcoms" srcset="">
            </div>


            </div>
             
          </div>

          <!-- integrated facility management -->
          <div class=" w-[90%] m-auto mt-[2rem]">
            <!-- <h3 class=" text-3xl uppercase font-bold">Safety Management</h3> -->
            <div class="submain flex sm:flex-col sm:gap-y-5 md:flex-row  md:gap-x-[5%] lg:gap-x-[10%] lg:flex-row ">

                

                <div class="pdiv  w-full items-center text-center flex flex-col justify-center md:text-left">
                    <h3 class=" text-3xl uppercase font-bold md:mb-[3rem] lg:mb-[5rem] text-left">integrated facility management</h3>

                    <p class="textp md:text-2xl lg:4xl ">Lorem icing elit. Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit dolor consequatur? Libero impedit nulla vitae accusantium consectetur necessitatibus, cumque recusandae ducimus id amet, quos, autem natus consequatur accusamus numquam. dolor sit amet consectetur adipisicing elit. Commodi provident quo asperiores ab? Accusantium vero nobis quos enim eaque temporibus consectetur perspiciatis rem? Expedita vitae, porro consectetur temporibus unde sed? Incidunt ex vel minima fugit molestias?</p>

                </div>


                <!-- img -->
                <div class=" bg-red ">
                <img class=" " src="../Akin pics/core.jpg" alt="Telcoms" srcset="">
            </div>


            </div>
             
          </div>

          <!-- telecoms infra-stucture support -->
          <div class=" w-[90%] m-auto mt-[2rem]">
            <!-- <h3 class=" text-3xl uppercase font-bold">Safety Management</h3> -->
            <div class="submain flex sm:flex-col sm:gap-y-5 md:flex-row  md:gap-x-[5%] lg:gap-x-[10%] lg:flex-row ">

                

                <div class="pdiv  w-full items-center text-center flex flex-col justify-center md:text-left">
                    <h3 class="textp text-3xl uppercase font-bold md:mb-[3rem] lg:mb-[5rem] text-left">telecoms infra-stucture support</h3>

                    <p class=" md:text-2xl lg:4xl ">Lorem icing elit. Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, deleniti earum commodi dicta necessitatibus fugiat possimus cum ipsa ullam quae vero molestias corrupti velit consequatur dolore labore illum expedita assumenda. dolor sit amet consectetur adipisicing elit. Commodi provident quo asperiores ab? Accusantium vero nobis quos enim eaque temporibus consectetur perspiciatis rem? Expedita vitae, porro consectetur temporibus unde sed? Incidunt ex vel minima fugit molestias?</p>

                </div>


                <!-- img -->
                <div class=" bg-red ">
                <img class=" " src="../Akin pics/fire tools.jpg" alt="Telcoms" srcset="">
            </div>


            </div>
             
          </div>


     </main>
 


</template>
<script setup>

</script>
<style >
    .abouthead{
        border-radius:  0px 0px 40%/15% 0;
        
    }
    img{
        width: 100%;
        min-height: max-content;
        height: 100%;
    }
 
@media only screen and (max-width: 900px) {

.submain{
    display: flex;
    flex-direction: column;
    gap: 5%
}
.abouthead{
    min-height: 45rem;
    height: 100%;
}
img{
    margin:  3rem 0;
}

}

@media only screen and (max-width: 500px) {
.pdiv{
display: flex;
justify-content: flex-start;
align-items: flex-start;
text-align: left;
gap:1.5rem
}
img{
    margin:  2rem 0;
}
.our{
    font-size: 1.8rem;
}
}

    
</style>