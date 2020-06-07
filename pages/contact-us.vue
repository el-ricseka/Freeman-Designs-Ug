<template>
  <div> 

      <Header></Header>

      <section class="py-12 md:py-28">

          <div class="container mx-auto px-4 md:px-0 lg:w-cont-width">
              <div class="w-full md:w-3/4 md:mx-auto">
              
                <div class="text-center md:text-left">
                    <h1 class="title font-heading font-bold text-2xl md:text-3xl mb-8 text-freeman-dark" >Hi! <br> We'd love to hear from you.</h1>
                </div>

                <div class="grid grid-cols-3">

                     <div class="col-span-3 md:col-span-2">

                        <form action="" class="cont-form">

                            <div class="flex flex-col md:flex-row">
                                <input type="text" placeholder="Name" class="border-2 focus:border-blue-500 duration-300 md:w-2/4 mb-4 text-sm font-heading py-2 px-3 font-no border-gray-300 bg-gray-100 rounded-md outline-none text-freeman-dark">
                                <input type="text" placeholder="Email" class="border-2 focus:border-blue-500 duration-300 md:w-2/4 md:ml-4 mb-4 text-sm font-heading py-2 px-3 font-normal  border-gray-300 bg-gray-100 rounded-md outline-none text-freeman-dark w-full">
                            </div>

                            <textarea placeholder="Message" name="" id="" rows="10" class="border-2 focus:border-blue-500 duration-300 w-full font-heading py-2 px-3 text-sm font-normal border-gray-300 bg-gray-100 rounded-md outline-none text-freeman-dark">
                            </textarea>

                             <button class="duration-300 hover:bg-black hover:text-white mt-4 outline-none py-3 rounded-md w-full text-freeman-dark font-heading font-semibold bg-freeman-secondary">Submit</button>
                        </form>

                    </div>


                    <div class="text-center md:text-left mt-12 md:px-8 md:mt-0 col-span-3 md:col-span-1">
                        
                        <div class="py-2 addr">
                            <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Address : </h1>
                            <p class="font-sans text-sm font-medium pb-2 text-freeman-primary">Bukoto Street, Kampala Uganda</p>
                        </div>

                         <div class="py-2 emai">
                            <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Email : </h1>
                            <p class="font-sans text-sm font-medium pb-2 text-freeman-primary">support@freemanug.com</p>
                        </div>

                        <div class="py-2 phon">
                            <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Phone : </h1>
                            <p class="font-sans text-13 font-medium pb-2 text-freeman-primary">+256 70000 000</p>
                        </div>

                        <ul class="flex mt-4">

                            <div class="mx-auto inline-flex md:ml-0">

                                <li class="mr-4 f">
                                    <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h5.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H16.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.345V21H17a4 4 0 004-4V7a4 4 0 00-4-4z"/></svg>
                                    </a>
                                </li>

                                <li class="mr-4 t" >
                                    <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h10c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z M17.05,9.514 c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114c0.171,0,0.429,0,0.6,0 c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086c0.257,0,0.429,0,0.686-0.086 c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343c-0.686-0.6-1.114-1.286-1.114-2.143 c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6c0-1.371,1.114-2.486,2.486-2.486 c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6c-0.171,0.6-0.6,1.029-1.114,1.371 c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"></path></svg>
                                    </a>
                                 </li>

                                <li class="mr-4 i" >
                                    <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg>
                                    </a>
                                </li>
                            </div>

                        </ul>

                    </div>
                </div>

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
            title : 'Contact Us'
        }
     },

    components : {
        Header,
        Footer
    },

  mounted() {
     
            var t1 = gsap.timeline({defaults : { autoAlpha : 0 } });

            t1.from(".title", {y: 20, ease: "expo.inOut", duration: 1.2, opacity : 0})
              .from(".cont-form", { y: -10, ease: "expo.inOut", duration: 1, opacity : 0}, "-=.5")
              .from(".addr", { x: 30, ease: "expo.inOut", duration: 1, opacity : 0}, "-=.8")
              .from(".emai", { x: 30, ease: "expo.inOut", duration: 1, opacity : 0}, "-=.8")
              .from(".phon", { x: 30, ease: "expo.inOut", duration: 1, opacity : 0}, "-=.8")
              .from(".f", { y: 10, ease: "expo.inOut", duration: .5, opacity : 0})
              .from(".t", { y: 10, ease: "expo.inOut", duration: .5, opacity : 0})
              .from(".i", { y: 10, ease: "expo.inOut", duration: .5, opacity : 0})
              
            
        }

    }
</script>

<style>

</style>