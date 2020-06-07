<template>
  <div>
       <div class="hidden md:hidden opacity-0 invisible new-menu bg-gray-900  w-full z-10 left-0 animate-menu">
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
export default {

}
</script>

<style>

</style>