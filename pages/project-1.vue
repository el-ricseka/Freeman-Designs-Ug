<template>
    <div>
        <Header></Header>

        <section class="py-16 md:py-32">
            <div class="container mx-auto lg:w-cont-width px-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <img src="/img/portfolio/detail-1.jpg" alt="">
                    </div>

                    <div class="lg:h-56 px-6 pt-6 bg-footer rounded lg:col-span-1 border border-gray-400 side-r">
                        <h1 class="pb-2 mb-3 border-b border-gray-300 text-sm font-bold font-heading text-freeman-primary">Created By : <span class="font-sans font-medium text-base text-freeman-primary">Freeman Design Workshop</span></h1>
                        <h1 class="pb-2 mb-3 border-b border-gray-300  text-sm font-bold font-heading text-freeman-primary">Completed On : <span class="font-sans font-medium text-base text-freeman-primary">15 April 2017pb-6 </span></h1>
                        <h1 class="pb-2 mb-3 border-b border-gray-300 text-sm font-bold font-heading text-freeman-primary">Client : <span class="font-sans font-medium text-base text-freeman-primary">Cafe Javas</span></h1>
                        <h1 class="pb-2 mb-3 border-b border-gray-300  text-sm font-bold font-heading text-freeman-primary">Category : <span class="font-sans font-medium text-base text-freeman-primary">Interior Design</span></h1>
                    </div>
                </div>

                <div>
                    <h1 class="font-bold text-2xl mt-10 mb-10 text-freeman-primary font-heading border-b pb-3 border-gray-400 uppercase">Project Info</h1>

                    <div class="text-base text-freeman-primary font-sans">
                        <p class="mb-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat

                        </p>

                          <p class="mb-3">
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                        </p>
                        
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
    components : {
        Header,
        Footer
    },
}
</script>

<style>

</style>