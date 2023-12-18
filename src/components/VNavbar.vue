<script setup lang="ts">
const isOpen = ref(false);
function toggleModal() {
  isOpen.value = true;
}
</script>
<template>
  <div class="flex w-full justify-between p-5">
    <div>
      <v-navbar-link to="/tasks">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm4 7.5A.5.5 0 0 1 9 10h2.25a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M9 6a.5.5 0 0 0 0 1h2.25a.5.5 0 0 0 0-1zM7.354 9.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.748-.748a.5.5 0 1 1 .708-.708l.394.395l1.146-1.147a.5.5 0 0 1 .708 0m0-3.292a.5.5 0 1 0-.708-.708L5.5 6.293l-.394-.395a.5.5 0 0 0-.708.708l.748.748a.5.5 0 0 0 .708 0z"
            />
          </svg>
        </template>
        <template #label>
          <div>Tasks</div>
        </template>
      </v-navbar-link>
      <v-navbar-link to="/projects">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999zm-11 6V21H3a1 1 0 0 1-1-1v-4.001zM11 3v10.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3.999h-9V3z"
            />
          </svg>
        </template>
        <template #label> Projects </template>
      </v-navbar-link>
    </div>
    <button @click="toggleModal" btn btn-magenta>+ Add Task</button>
    <v-add-task-component v-model="isOpen" />
  </div>
</template>



<style scoped>
</style>