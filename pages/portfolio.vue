<template>
  <div>
    
      <Header></Header>

      <section class="py-12 md:py-32">

        <div class="text-center relative pb-16">
            <h1 class="font-heading font-bold text-3xl text-gray-300 uppercase">Projects</h1>
            <h2 class="text-lg text-freeman-dark font-heading font-semibold absolute top-10 md:top-20 left-52-per">Our Portfolio</h2>
        </div>

          <div class="container lg:w-cont-width mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 row-gap-5">

                <div class="md:h-img-350 shadow-contact-shadow p-2 rounded portfolio relative">
                        <img class="md:max-h-full w-full rounded" src="/img/portfolio/project-1.jpg" alt="">
                        <div class="absolute right-0 left-0 bottom-40 text-center opacity-0 sec">
                            <h3 class="text-lg text-white font-heading font-bold mb-6">Interior Design</h3>
                            <a href="#" class="hover:bg-black hover:text-white duration-300 block bg-white font-heading font-bold text-sm text-freeman-dark lg:mx-32 mx-8 py-4 rounded">
                                View Project
                            </a>
                        </div>
                </div>

                <div class="md:h-img-350 shadow-contact-shadow p-2 rounded portfolio relative">
                    <img class="md:max-h-full w-full rounded" src="/img/portfolio/project-2.jpg" alt="">
                    <div class="absolute right-0 left-0 bottom-40 text-center opacity-0 sec">
                        <h3 class="text-lg text-white font-heading font-bold mb-6">Interior Design</h3>
                        <a href="#" class="hover:bg-black hover:text-white duration-300 block bg-white font-heading font-bold text-sm text-freeman-dark lg:mx-32 mx-8 py-4 rounded">
                            View Project
                        </a>
                    </div>
                </div>


                 <div class="md:h-img-350 shadow-contact-shadow p-2 rounded portfolio relative">
                    <img class="md:max-h-full w-full rounded" src="/img/portfolio/project-3.jpg" alt="">
                    <div class="absolute right-0 left-0 bottom-40 text-center opacity-0 sec">
                        <h3 class="text-lg text-white font-heading font-bold mb-6">Interior Design</h3>
                        <a href="#" class="hover:bg-black hover:text-white duration-300 block bg-white font-heading font-bold text-sm text-freeman-dark lg:mx-32 mx-8 py-4 rounded">
                            View Project
                        </a>
                    </div>
                </div>

                
                 <div class="md:h-img-350 shadow-contact-shadow p-2 rounded portfolio relative">
                    <img class="md:max-h-full w-full rounded" src="/img/portfolio/project-3.jpg" alt="">
                    <div class="absolute right-0 left-0 bottom-40 text-center opacity-0 sec">
                        <h3 class="text-lg text-white font-heading font-bold mb-6">Interior Design</h3>
                        <a href="#" class="hover:bg-black hover:text-white duration-300 block bg-white font-heading font-bold text-sm text-freeman-dark lg:mx-32 mx-8 py-4 rounded">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </section>

      <Footer />
  </div>
</template>

<script>

import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default {
    
     head() {
        return {
            title : 'Our Portfolio'
        }
     },

     components : {
         Footer,
         Header
     }
}
</script>

<style>
.portfolio:hover .sec  {
    opacity: 1;
}

.sec {
     transition: all 0.3s ease-in-out 0s;
}

.portfolio:hover::before {
    opacity: 0.7;
}

.portfolio::before {
    background: #000 none repeat scroll 0 0;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in-out 0s;
    width: 100%;
}


</style>