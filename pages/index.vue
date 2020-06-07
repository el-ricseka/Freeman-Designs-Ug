<template>
  <div>

      <header class="font-heading md:absolute left-0 w-full z-10">

          <div class="container px-4 py-2 lg:w-cont-width mx-auto flex items-center justify-between">
              <div class="logo">
                 <nuxt-link to="/">
                  <img class="w-165 md:w-190 max-w-190" src="/img/logo.jpg" alt="Freeman Design Workshop Logo">
                </nuxt-link>
                  
              </div>
              <div class="relative flex">
               
                  <ul class="hidden md:flex mr-10 opacity-0 invisible menu transition-all delay-0 duration-300 ease-in-out">
                       <li>
                        <nuxt-link to="/" class="p-6 text-base text-freeman-dark font-semibold block hover:bg-gray-800" href="#">Home</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/portfolio" class="p-6 text-base text-freeman-dark font-semibold block hover:bg-gray-800">Portfolio</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contact-us" class="p-6 text-base text-freeman-dark font-semibold block hover:bg-gray-800"  href="#">Contact Us</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/about" class="p-6 text-base text-freeman-dark font-semibold block hover:bg-gray-800" href="#">About Us</nuxt-link>
                      </li>
                  </ul>


               <div>
                <div class="icon-one hamburger-box" @click="showMenu">
                    <div class="hamburger hamburger-one"></div>
                </div>
               </div>

              </div>
          </div>
      </header>


      <Menu></Menu>
  

      <section class="hidden lg:flex relative ">

         <div class="flex-1 left-side z-10">
            <div class="h-img-height w-img-width rounded shadow-img-shadow absolute top-120 left-200">
              <img class="w-full rounded" src="/img/construct.jpg" alt="Freeman Desing Workshop Project">
            </div>
         </div>

         <div class="right-side flex-2 bg-freeman-secondary py-200 pl-175 pr-100 bg-no-repeat">
           
              <h2 class="font-heading font-bold text-6xl stag">We build the future</h2>
              <p class="text-lg font-sans text-freeman-primary w-4/5 stag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci reprehenderit neque sit aliquam perspiciatis.</p>

              <div class="mt-8 stag">
                <nuxt-link to="portfolio" href="#" class="text-sm duration-300 rounded shadow bg-white text-freeman-secondary py-4 px-6 font-semibold font-heading hover:bg-freeman-dark hover:text-white"> Our Projects </nuxt-link>
              </div>
         </div>
      </section>

      <section class="lg:hidden">

          <div class="bg-freeman-secondary py-32 bg-no-repeat px-12">
           
               <h2 class="font-heading font-bold text-5xl stag mt-5 mb-3" style="line-height: 48px">We build the future</h2>
              <p class="text-base font-sans text-freeman-primary w-full stag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci reprehenderit neque sit aliquam perspiciatis.</p>

               <div class="mt-8 stag">
                <nuxt-link to="portfolio" href="#" class="text-sm duration-300 rounded shadow bg-white text-freeman-secondary py-4 px-4 font-semibold font-heading hover:bg-freeman-dark hover:text-white"> Our Projects </nuxt-link>
              </div>

          </div>

      </section>


      <section class="flex flex-col bg-gray-100 pt-16">
        <div class="container mx-auto lg:w-cont-width">
            <div class="text-center relative pb-16">
                <h1 class="font-heading font-bold text-4xl md:text-5xl text-gray-300 uppercase">Services</h1>
                <h2 class="text-lg md:text-2xl text-freeman-dark font-heading font-semibold absolute top-20 left-52-per">Our Services</h2>
            </div>
            <div>
                <div class="flex flex-wrap pb-12 md:pb-32">
                    <div class="w-full lg:w-1/2 px-4">
                        <div class="bg-white lg:shadow-img-shadow p-2 rounded lg:h-img-350">
                            <img class="rounded w-full max-h-full" src="/img/design.jpg" alt="">
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 px-8 py-12">
                        <h1 class="font-heading font-bold text-black pb-2 text-3xl md:text-36">Design</h1>
                        <p class="text-base text-freeman-primary font-sans leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora cupiditate, illum accusantium quaerat in eveniet voluptas temporibus itaque animi dolorum recusandae deserunt explicabo molestias iste aliquam!
                        </p>
                         <div class="mt-8">
                            <a href="#" class="text-sm duration-300 rounded shadow bg-freeman-secondary text-freeman-secondary py-4 px-6 font-semibold font-heading hover:bg-freeman-dark hover:text-white"> Find Out More </a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap pb-12 md:pb-32 lg:flex-row-reverse">
                    <div class="w-full lg:w-1/2 px-4">
                        <div class="bg-white lg:shadow-img-shadow p-2 rounded lg:h-img-350">
                            <img class="rounded w-full max-h-full" src="/img/drafting.jpg" alt="">
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 px-8 py-12">
                        <h1 class="font-heading font-bold text-black pb-2 text-3xl md:text-36">Drafting</h1>
                        <p class="text-base text-freeman-primary font-sans leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporaj cupiditate, illum accusantium quaerat in eveniet voluptas temporibus itaque animi dolorum recusandae deserunt explicabo molestias iste aliquam!
                        </p>
                         <div class="mt-8">
                            <a href="#" class="text-sm duration-300 rounded shadow bg-freeman-secondary text-freeman-secondary py-4 px-6 font-semibold font-heading hover:bg-freeman-dark hover:text-white"> Find Out More </a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap pb-12 md:pb-32">
                    <div class="w-full lg:w-1/2 px-4">
                        <div class="bg-white lg:shadow-img-shadow p-2 rounded lg:h-img-350">
                            <img class="rounded w-full max-h-full" src="/img/gis.jpg" alt="">
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 px-8 py-12">
                        <h1 class="font-heading font-bold text-black pb-2 text-3xl md:text-36">Survey and GIS</h1>
                        <p class="text-base text-freeman-primary font-sans leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora cupiditate,
                           illum accusantium quaerat in eveniet voluptas temporibus itaque animi dolorum recusandae deserunt explicabo molestias iste aliquam!
                        </p>
                         <div class="mt-8">
                            <a href="#" class="text-sm duration-300 rounded shadow bg-freeman-secondary text-freeman-secondary py-4 px-6 font-semibold font-heading hover:bg-freeman-dark hover:text-white"> Find Out More </a>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
      </section>

      <section class="flex flex-col bg-theme-bg py-16">
          <div class="text-center relative pb-16">
            <h1 class="font-heading font-bold text-4xl md:text-5xl text-gray-300 uppercase">Clients</h1>
            <h2 class="text-lg md:text-2xl text-freeman-dark font-heading font-semibold absolute top-20 left-52-per">Happy Clients</h2>
        </div>

        <div class="text-center">
          slider
        </div>
      </section>

       <section class="flex flex-col bg-white-bg pt-16 lg:pb-65 relative">
          <div class="text-center relative pb-16">
            <h1 class="font-heading font-bold text-4xl md:text-5xl text-gray-300 uppercase">Partners</h1>
            <h2 class="text-lg md:text-2xl text-freeman-dark font-heading font-semibold absolute top-20 left-52-per">Our Partners</h2>
        </div>

        <div class="text-center flex mx-auto part">
            <div class="border border-gray-400  mr-6 rounded p-3">
              <img class="w-auto max-w-full max-h-40" src="/img/julde.png" alt="">
            </div>
            <div class="border border-gray-400  mr-6 rounded p-3">
               <img class="w-auto max-w-full max-h-40" src="/img/redco.png" alt="">
            </div>
        </div>


        <div class="flex flex-col mt-24 lg:flex-row lg:w-1/2 lg:mx-auto rounded lg:shadow-contact-shadow lg:absolute bottom-b-100 left-25-per">
            <div class="w-full lg:w-1/2 p-10 bg-freeman-secondary rounded-l">
              <h2 class="font-heading text-lg font-bold text-freeman-dark mb-2">Contact Us</h2>
               <p class="text-sm font-sans font-normal text-freeman-primary leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Libero, reprehenderit nesciunt debitis accusantium eaque architecto.
               </p>

                 <ul class="flex mt-4">
                      <li class="mr-4" >
                        <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h5.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43H16.78c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.345V21H17a4 4 0 004-4V7a4 4 0 00-4-4z"/></svg>
                        </a>
                      </li>

                        <li class="mr-4" >
                        <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h10c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z M17.05,9.514 c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114c0.171,0,0.429,0,0.6,0 c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086c0.257,0,0.429,0,0.686-0.086 c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343c-0.686-0.6-1.114-1.286-1.114-2.143 c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6c0-1.371,1.114-2.486,2.486-2.486 c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6c-0.171,0.6-0.6,1.029-1.114,1.371 c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"></path></svg>
                        </a>
                      </li>

                        <li class="mr-4" >
                        <a href="#" class="font-heading font-semibold text-sm text-footer hover:text-footer-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" style=" fill:#5a5a5a;"><path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path></svg>
                        </a>
                      </li>
                  </ul>

            </div>

            <div class="w-full md:w-1/2 p-10 bg-white rounded-r">
                  <div class="py-2">
                      <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Address : </h1>
                      <p class="font-sans text-sm font-medium pb-2 text-freeman-primary">Bukoto Street, Kampala Uganda</p>
                  </div>

                   <div class="py-2">
                      <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Email : </h1>
                      <p class="font-sans text-sm font-medium pb-2 text-freeman-primary">support@freemanug.com</p>
                  </div>

                   <div class="py-2">
                      <h1 class="font-heading text-sm font-bold pb-1 text-freeman-dark">Phone : </h1>
                      <p class="font-sans text-13 font-medium pb-2 text-freeman-primary">+256 70000 000</p>
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
import Menu from '~/components/MenuMobile'

export default {
  head() {
    return {
      title : 'Freeman Design Workshop'
    }
  },
  components: {
    Header,
    Footer,
    Menu
  },
  methods : {
       showMenu() {

          if($(window).width() < 768) {
             $('.new-menu').toggleClass('new-menu-open');
             animate_menu()
          }

          $('.icon-one').toggleClass('active-one');
          $('.menu').toggleClass('menu-open');

          function animate_menu() { 
              var t1 = gsap.timeline({defaults : { autoAlpha : 0} });

               t1.from(".new-menu-open", {
                 ease: "expo.inOut", 
                 duration: .8,
                 opacity: 0,
                 height : 0
            })
            .from(".new-menu-open ul li", {
                  y : 15,
                 ease: "expo.inOut", 
                 duration: .8,
                 opacity: 0,
                 strqgger : .4,
                 y : 10
            }, "-=.4")
          }
        
          
        }

  },

  mounted() {
     
        var t1 = gsap.timeline({defaults : { autoAlpha : 0 } });
    
        t1.from(".right-side", {x: 300, ease: "expo.inOut", duration: 1,opacity : 0})
            .from(".logo", { y: 20, ease: "expo.inOut", duration: 1, opacity : 0}, "-=.5")
            .from(".stag", {y : 10, stagger : .4 , opacity: 0}, "-=.2")
            .from(".left-side", {y: -150, ease: "expo.inOut", duration: 1.5, opacity: 0,}, "-=1.5")
            .from(".hamburger-box", {y: 20, ease: "expo.inOut", rotation: 90, opacity: 0,}, "-=.5")
          }
}
</script>

<style scoped>
  .right-side {
    background-image : url('/img/bg-logo.png');
    background-position: bottom -150px left 400px;
  }

  .hamburger {
  top:50%;
  left:10%;
  width: 30px;
  height: 2px;
  background: #212121;
  position: absolute;
  transition: 0.5s;
}

.hamburger:before {
  top: -8px;
}

.hamburger:after {
  top: 8px;
}

.menu-open {
  opacity: 1;
  margin-right: 70px;
  visibility: visible;
}


/* Icon 1 */
.icon-one {
  position: absolute;
  top: 28%;
  right: 0;
  width: 38px;
  height: 30px;
  cursor: pointer;
}

.hamburger-one:before,
.hamburger-one:after {
  content: '';
  position:absolute;
  width: 30px;
  height: 2px;
  background:#212121;
  transition:0.35s;
}

.icon-one.active-one .hamburger-one {
  background:rgba(0,0,0,0);
}

.icon-one.active-one .hamburger-one:before {
  top: 0;
  transform:rotate(45deg);
}

.icon-one.active-one .hamburger-one:after {
  top: 0;
  transform:rotate(135deg);
}

@media (max-width : 767px) {
    .part {
      width : 90%;
      margin : 0 auto;
    }
}


</style>
