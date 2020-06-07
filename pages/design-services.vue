<template>
  <div>
      <Header></Header>

      <section class="py-40">
          <h1 class="text-center font-heading text-freeman-dark font-bold text-4xl mb-3">Design Services</h1>
          <p class="font-heading text-center text-freeman-primary font-sm mb-20">Below are the services we offer in th field of Design</p>

          <div class="container mx-auto lg:w-cont-width">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-8">
                  <div class="shadow-lg rounded border border-gray-200 text-center p-10 hover:bg-gray-100 duration-300">
                    <h1 class="font-heading font-bold text-freeman-primary mb-3 text-xl" >Web Design</h1>
                    <p class="font-sans text-15 leading-tight text-freeman-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut rutrum nunc. Donec rhoncus lacus sedss</p>
                  </div>

                   <div class="shadow-lg rounded border border-gray-200 text-center p-10 hover:bg-gray-100 duration-300">
                    <h1 class="font-heading font-bold text-freeman-primary mb-3 text-xl" >Architectual Design</h1>
                    <p class="font-sans text-15 leading-tight text-freeman-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut rutrum nunc. Donec rhoncus lacus sedss</p>
                  </div>

                   <div class="shadow-lg rounded border border-gray-200 text-center p-10 hover:bg-gray-100 duration-300">
                    <h1 class="font-heading font-bold text-freeman-primary mb-3 text-xl" >Interior Design and Visualization</h1>
                    <p class="font-sans text-15 leading-tight text-freeman-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut rutrum nunc. Donec rhoncus lacus sedss</p>
                  </div>

                   <div class="shadow-lg rounded border border-gray-200 text-center p-10 hover:bg-gray-100 duration-300">
                    <h1 class="font-heading font-bold text-freeman-primary mb-3 text-xl" >Manufucturing Design</h1>
                    <p class="font-sans text-15 leading-tight text-freeman-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut rutrum nunc. Donec rhoncus lacus sedss</p>
                  </div>

                   <div class="shadow-lg rounded border border-gray-200 text-center p-10 hover:bg-gray-100 duration-300">
                    <h1 class="font-heading font-bold text-freeman-primary mb-3 text-xl" >Structual Engineering Design</h1>
                    <p class="font-sans text-15 leading-tight text-freeman-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut rutrum nunc. Donec rhoncus lacus sedss</p>
                  </div>
              </div>    
          </div>
      </section>

      <Footer></Footer>
  </div>
</template>

<script>

import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {

    // head() {
    //     return {
    //         title : 'Our Design Services',
    //         script : [{ src : '/js/menu.js' }]
    //     }
    // },
    components : {
        Header,
        Footer
    }

}
</script>

<style>

</style>