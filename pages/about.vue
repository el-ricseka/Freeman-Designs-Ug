<template>
  <div>
      <Header></Header>

      <section class="py-12 md:py-32">

        <div class="text-center relative pb-12 title">
            <h1 class="font-heading font-bold text-5xl text-gray-300 uppercase">About</h1>
            <h2 class="text-2xl text-freeman-dark font-heading font-semibold absolute top-20 left-52-per">About Us</h2>
        </div>

          <div class="text-center px-4 container mx-auto lg:w-cont-width">
              <div class="w-full md:w-1/2 mx-auto text-sans text-freeman-primary pr">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem deserunt veritatis atque nostrum aut soluta maxime error itaque unde animi quo placeat optio possimus, ea quae distinctio, voluptates quas at
              </div>
          </div>
      </section>

      <Footer></Footer>
  </div>
</template>

<script>

import Footer from '~/components/Footer'
import Header from '~/components/Header'


export default {
     head() {
        return {
            title : 'About Us'
        }
     },
     components : {
         Footer,
         Header,
         
     },

     mounted() {
     
            var t1 = gsap.timeline({defaults : { autoAlpha : 0 } });

            t1.from(".pr", {y: 20, ease: "expo.inOut", duration: 1.5, opacity : 0})
              .from(".title", { y: 10, ease: "expo.inOut", duration: 1, opacity : 0}, "-=1.2")
            
        }
}
</script>

<style>

</style>