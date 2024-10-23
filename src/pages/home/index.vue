<template>
    <div class="flex flex-col w-full h-100vh justify-center items-center gap-y-8">
        <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
            <h2 class="text-md md:text-3xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none">
                Vue3 + UnoCSS + PrimeVue + InspiraUI 👋
            </h2>
        </BlurReveal>
        <CardContainer>
            <CardBody
                class="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded p-6 border">
                <CardItem :translateZ="50" class="text-xl font-bold text-neutral-600 dark:text-white">
                    <BlurReveal :delay="0.2" :duration="0.75">
                        VUPI
                    </BlurReveal>
                </CardItem>
                <CardItem as="p" translateZ="60" class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    <BlurReveal :delay="0.2" :duration="0.75">
                        Vue3 + UnoCSS + PrimeVue + InspiraUI
                    </BlurReveal>
                </CardItem>
                <CardItem :translateZ="100" class="w-full mt-4">
                    <img src="https://cdn.jsdelivr.net/gh/llds66/imageBed/githubImage/20241005/102303.webp"
                        class="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
                </CardItem>
            </CardBody>
        </CardContainer>
    </div>
</template>

<script setup lang='ts'>

</script>

<style></style>