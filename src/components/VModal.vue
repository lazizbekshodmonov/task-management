<script setup lang="ts">
const { modelValue } = defineModels<{
  variant: "left" | "center" | "right";
  modelValue: boolean;
}>();

const modalContent = ref();
function close(e: MouseEvent) {
  if (e.target instanceof HTMLElement && modalContent.value) {
    if (modalContent.value == e.target) {
      modelValue.value = false;
    }
  }
}

const oneStep = ref(false);
const twoStep = ref(false);
watch(modelValue, () => {
  if (modelValue.value) {
    oneStep.value = true;
    setTimeout(() => {
      twoStep.value = true;
    }, 10);
  } else {
    twoStep.value = false;
    setTimeout(() => {
      oneStep.value = false;
    }, 300);
  }
});
</script>

<template>
  <div
    @click="close"
    v-if="oneStep"
    class="absolute w-full h-full absolute top-0 left-0"
    :class="[]"
  >
    <div class="w-full h-full block z-[1] bg-dark opacity-70 absolute"></div>

    <div
      ref="modalContent"
      class="modal-content absolute z-9 w-full overflow-hidden inline-block"
      :class="[
        { 'flex justify-start items-start left-0': variant === 'left' },
        { 'flex justify-center items-center': variant === 'center' },
        { 'flex justify-end items-end right-0': variant === 'right' },
        { show: twoStep },
      ]"
    >
      <slot ref="modalContent"></slot>
    </div>
  </div>
</template>



<style scoped>
.modal-content {
  width: 0px;
  transition: width 0.3s;
}
.show {
  width: 100%;
}
</style>