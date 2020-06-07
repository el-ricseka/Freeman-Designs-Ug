<template>
  <div>
        <header class="font-heading w-full z-10 shadow-header-shadow bg-white">
          <div class="container px-2 md:px-4 lg:w-cont-width mx-auto flex items-center justify-between">
              <div class="">
                <nuxt-link to="/">
                  <img class="w-165 md:w-190 max-w-190" src="/img/logo.jpg" alt="Freeman Design Workshop Logo">
                </nuxt-link>
                  
              </div>
              
              <div class="relative">
               
                  <ul class="hidden md:flex mr-10 opacity-0 invisible menu transition-all delay-0 duration-300 ease-in-out">
                      <li>
                        <nuxt-link to="/" class="p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800" href="#">Home</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/portfolio" class="p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800">Portfolio</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/contact-us" class="p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800"  href="#">Contact Us</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/about" class="p-6 md:text-0.9 lg:text-base text-freeman-dark font-semibold block hover:bg-gray-800" href="#">About Us</nuxt-link>
                      </li>
                  </ul>


               <div>
                <div class="icon-one" @click="showMenu">
                    <div class="hamburger hamburger-one"></div>
                </div>
               </div>

              </div>
          </div>
      </header>

      <div class="md:hidden new-menu bg-gray-900  w-full z-10 left-0">
          <ul>
             <li>
                  <nuxt-link to="/" class="p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800" href="#">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/portfolio" class="p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800">Portfolio</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact-us" class="p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800"  href="#">Contact Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" class="p-6 text-base text-gray-400 font-semibold block hover:bg-gray-800" href="#">About Us</nuxt-link>
              </li>
          </ul>
      </div>

  </div>
</template>

<script>

import Menu from '~/components/MenuMobile'

export default {

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
     
}
</script>

<style>
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

@media (max-width: 767px) {
  .icon-one {
    height: 0 !important;
  }

  .new-menu {
  opacity: 0;
  visibility: hidden;
  display: none;
  overflow: hidden;
  box-sizing: border-box;
}

.new-menu-open {
  opacity: 1;
  visibility: visible;
  display: block;
 }
};

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



</style>