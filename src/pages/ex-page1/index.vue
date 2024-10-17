<script setup lang="ts">
import CardContainer from '@/components/ui/card-3d/CardContainer.vue';
import CardBody from '@/components/ui/card-3d/CardBody.vue';
import CardItem from '@/components/ui/card-3d/CardItem.vue';
</script>

<template>
  <div class="app_containe">
    <CardContainer>
      <CardBody
        class="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded p-6 border">
        <CardItem :translateZ="50" class="text-xl font-bold text-neutral-600 dark:text-white">
          <BlurReveal :delay="0.2" :duration="0.75">
            [委托] 翻车了！急急急！找人帮忙捞捞！
          </BlurReveal>
        </CardItem>
        <CardItem as="p" translateZ="60" class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          <BlurReveal :delay="0.2" :duration="0.75">
            急急急，真的急！我能不能保住饭碗就靠各位大哥大姐了！我的送货车翻....

          </BlurReveal>
        </CardItem>
        <CardItem :translateZ="100" class="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>

  </div>

</template>

<style scoped></style>
