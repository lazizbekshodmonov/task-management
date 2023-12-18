<script setup lang="ts">
const dropZoneRef = ref<HTMLDivElement>();
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);

function onDrop(droppedFiles: File[] | null): void {
  console.log(droppedFiles);
}

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files) {
    return;
  }

  console.log(Array.from(target.files));
}
</script>

<template>
  <div
    class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5 w-full h-full"
  >
    <div ref="dropZoneRef" class="mt-1 sm:col-span-3">
      <div
        :class="isOverDropZone ? 'border-4' : ''"
        class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
      >
        <div class="space-y-1 text-center">
          <!-- <CircleStackIcon
            class="mx-auto h-12 w-12 text-gray-400"
            aria-hidden="true"
          /> -->
          <div v-if="isOverDropZone" class="min-h-10">
            <p class="mt-1 text-sm text-gray-600">Drop the files here ...</p>
          </div>
          <div v-else class="min-h-10">
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  multiple
                  accept=".session"
                  @change="onChange"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">only .session files accepted</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

