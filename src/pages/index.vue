<script setup lang="ts">
onBeforeMount(() => {
  useRouter().push("/tasks");
});
</script>

<template>
  <div>
    <button btn btn-blue>Save</button>
    <button btn>Cancel</button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>