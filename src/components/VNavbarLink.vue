<template>
  <RouterLink
    :to="to"
    class="inline-flex px-12 py-4 items-center justify-center gap-[14px] rounded text-gray-5 font-medium"
  >
    <slot name="icon"></slot>

    <slot name="label"></slot>
  </RouterLink>
</template>

<script setup lang="ts">
defineModels<{
  to: string;
  label?: string;
  icon?: any;
}>();
</script>

<style scoped>
.router-link-active {
  @apply: bg-blue-100 font-size-4 text-blue-6;
}
</style>