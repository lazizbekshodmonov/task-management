<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue?: string | number | boolean | object | File[] | null;
  type: string;
  name?: string;
  placeholder?: string;
  label?: string;
  value?: any;
  help?: string;
  options?: string[];
  accept?: string;
  multiple?: boolean;
  noFilesIcon?: string;
}>();
// dropdown scripts
const choseValue = ref<string>();
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
function close() {
  isOpen.value = false;
}
function chooseValueHandle(value: string) {
  choseValue.value = value;
  modelValue.value = choseValue.value;
  toggle();
}

const buttonElement = ref<HTMLElement>();
const clickOutsideHandler = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement && buttonElement.value) {
    if (!buttonElement.value.contains(e.target)) {
      close();
    }
  }
};

window.addEventListener("click", clickOutsideHandler);

// file upload
function filesHandler(e: Event) {
  const target = e.target as HTMLInputElement;
  modelValue.value = target.files;
}
function shortenFileName(fileName: string, maxLength = 10) {
  if (fileName.length <= maxLength) {
    return fileName;
  } else {
    const extension = fileName.split(".").pop();
    const maxCharsBeforeExtension = ref();
    if (extension) {
      maxCharsBeforeExtension.value = maxLength - extension.length - 3; // For '...'
    }
    const shortenedName =
      fileName.substring(0, maxCharsBeforeExtension.value) + "..." + extension;
    return shortenedName;
  }
}
function fileLabel(): string | undefined {
  if (modelValue.value && modelValue.value instanceof FileList) {
    return shortenFileName(modelValue.value[0].name);
  }
  return;
}
function removeFile() {
  setTimeout(() => {
    modelValue.value = "";
  }, 20);
}
</script>

<template>
  <div v-bind="$attrs">
    <!-- dropdown -->
    <div v-if="type === 'dropdown'">
      <label lbl>{{ label }}</label>
      <div inpt relative>
        <button
          ref="buttonElement"
          @click="toggle"
          class="flex items-center justify-between w-full px-5"
          :class="{ 'text-dark dark:text-white': choseValue }"
        >
          <input type="text" hidden :value="choseValue" />
          <p>
            {{ choseValue ? choseValue : placeholder }}
          </p>
          <div
            i-carbon-chevron-up
            class="inline-block transition duration-300 ease-in-out"
            :class="{ 'rotate-[180deg]': !isOpen }"
          />
        </button>

        <ul
          ref="modal"
          v-if="isOpen && options"
          class="z-10 absolute top-[110%] left-0 overflow-hidden rounded bg-white shadow w-full dark:bg-gray-700"
        >
          <li
            @click="chooseValueHandle(option)"
            v-for="option in options"
            :key="option"
            class="block px-4 cursor-pointer py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-dark dark:hover:text-white"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
    <!-- file upload -->
    <div v-else-if="type === 'file'" class="h-[max-content]">
      <p lbl mb-3>{{ label }}</p>
      <label
        for="file"
        class="inline-flex items-center border-dashed border border-gray rounded-[4px] py-2 px-6 cursor-pointer font-size-[14px] text-gray font-medium"
        ><span>{{ fileLabel() ? fileLabel() : "+ Attach File" }}</span>
        <button v-if="fileLabel()" @click="removeFile" class="icon-btn">
          <div i-carbon-close-large ml-1 />
        </button>
      </label>
      <input
        type="file"
        :name="name"
        @change="filesHandler"
        :accept="accept"
        class="sr-only"
        id="file"
      />
    </div>
    <!-- toggle -->
    <div
      v-else-if="type === 'toggle'"
      v-bind="$attrs"
      class="flex items-center justify-between"
    >
      <div>
        <p lbl mb-2>{{ label }}</p>
        <p class="text-gray-5 font-size-[14px] font-medium">{{ help }}</p>
      </div>
      <label
        class="relative h-[max-content] inline-flex items-center cursor-pointer"
      >
        <input type="checkbox" v-model="modelValue" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-300 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
    <!-- text input -->
    <FormKit
      v-else
      v-model="modelValue"
      :type="type"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      :help="help"
      :value="value"
      :accept="accept"
      :multiple="multiple"
      :no-files-icon="noFilesIcon"
      label-class="$reset lbl"
      :input-class="{ inpt: true, 'text-dark': modelValue }"
    />
  </div>
</template>



<style scoped>
</style>