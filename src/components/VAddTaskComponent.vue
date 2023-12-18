<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: boolean;
}>();
interface formValuesTypes {
  file: File | string;
  taskName: string | null;
  projectName: string | null;
  leadName: string | null;
  dueDate: string | null;
  startTime: string | null;
  endTime: string | null;
  taskPriority: string | null;
  taskAssigne: string | null;
  activeNotification: boolean;
}
const Projects = ["Yemak", "Modme", "Yandex Eats"];
const Lavels = ["Junior", "Middle", "Senior"];

const formValues = reactive<formValuesTypes>({
  taskName: null,
  projectName: null,
  leadName: null,
  dueDate: null,
  startTime: null,
  endTime: null,
  taskPriority: null,
  taskAssigne: null,
  file: "",
  activeNotification: false,
});

const formData = new FormData();

function createData() {
  if (!Object.values(formValues).includes(null)) {
    Object.keys(formValues).forEach((key) => {
      const value = formValues[key as keyof formValuesTypes];
      if (key === "file" && value instanceof FileList) {
        formData.append(key, value[0], value[0].name); // `File` obyektini qo'shish
      } else {
        formData.append(key, value as string); // Boshqa qiymatlar
      }
    });
    formData.forEach((item) => {
      console.log(item);
    });
  }
}
function closeModal() {
  modelValue.value = false;
}
const active = ref();
</script>


<template>
  <v-modal variant="right" v-model="modelValue">
    <div
      class="relative inline-block pl-10 pt-18 pr-8 h-screen overflow-auto scroll-auto bg-white dark:bg-[#121212] rounded-[4px] transition-duration-[2s] transition-delay-[1s]"
    >
      <button @click="closeModal" class="absolute top-[10px] right-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M21.5868 2.66666H10.4134C5.56008 2.66666 2.66675 5.55999 2.66675 10.4133V21.5733C2.66675 26.44 5.56008 29.3333 10.4134 29.3333H21.5734C26.4268 29.3333 29.3201 26.44 29.3201 21.5867V10.4133C29.3334 5.55999 26.4401 2.66666 21.5868 2.66666Z"
            fill="#787486"
          />
          <path
            d="M19.6965 11.286L16.4711 14.5114L13.2457 11.286C12.8388 10.8791 12.1639 10.8791 11.757 11.286C11.3501 11.6929 11.3501 12.3677 11.757 12.7746L14.9824 16L11.757 19.2254C11.3501 19.6323 11.3501 20.3071 11.757 20.714C12.1639 21.1209 12.8388 21.1209 13.2457 20.714L16.4711 17.4886L19.6965 20.714C20.1034 21.1209 20.7782 21.1209 21.1851 20.714C21.592 20.3071 21.592 19.6323 21.1851 19.2254L17.9597 16L21.1851 12.7746C21.592 12.3677 21.592 11.6929 21.1851 11.286C20.7782 10.8791 20.1034 10.8791 19.6965 11.286Z"
            fill="#0D062D"
          />
        </svg>
      </button>
      <v-input
        type="text"
        label="Name the task"
        placeholder="Task name"
        name="taskName"
        v-model="formValues.taskName"
      />
      <div flex gap-7 justify-between mt-5>
        <v-input
          type="dropdown"
          name="projectName"
          label="Choose project"
          :options="Projects"
          placeholder="Project name"
          v-model="formValues.projectName"
          class="w-[50%]"
        />
        <v-input
          type="dropdown"
          label="Lead"
          name="leadName"
          v-model="formValues.leadName"
          :options="Lavels"
          placeholder="Name Surname"
          class="w-[50%]"
        />
      </div>
      <div flex gap-7 justify-between mt-5>
        <v-input
          type="date"
          label="Due Date/Time"
          name="date"
          v-model="formValues.dueDate"
          class="w-[max-content]"
        />
        <div class="flex justify-between gap-4 mt-8 w-[max-content]">
          <v-input
            type="time"
            name="startTime"
            v-model="formValues.startTime"
            class="w-[max-content]"
          />
          <v-input
            type="time"
            name="endTime"
            v-model="formValues.endTime"
            class="w-[max-content]"
          />
        </div>
      </div>
      <div class="w-[100%] flex justify-end mt-5 font-size-3">
        <a
          href="#"
          text-blue-600
          underline-solid
          decoration-solid
          class="text-decoration"
          >Check FREE Slots</a
        >
      </div>
      <div flex gap-7 justify-between mt-3>
        <v-input
          type="dropdown"
          name="taskPriority"
          v-model="formValues.taskPriority"
          label="Task Priority"
          :options="Projects"
          placeholder="Critical"
          class="w-[50%]"
        />
        <v-input
          type="dropdown"
          name="taskAssigne"
          v-model="formValues.taskAssigne"
          label="Task Assigne"
          :options="Lavels"
          placeholder="Name Surname"
          class="w-[50%]"
        />
      </div>

      <div flex justify-between mt-14 mb-10>
        <v-input
          type="file"
          label="Attached File"
          accept=".pdf"
          v-model="formValues.file"
        />

        <div flex gap-2>
          <p lbl>Task Creator</p>
          <p text-gray class="font-size-[14px]">{{ "Name Surname" }}</p>
        </div>
      </div>
      <v-input
        type="toggle"
        class="mb-[76px]"
        v-model="formValues.activeNotification"
        label="Activate Notifications"
        help="Task reminder will be sent to task assignee and task creator"
      />
      {{ active }}
      <div flex flex-col items-center>
        <button btn btn-blue @click="createData">Save</button>
        <button btn @click="closeModal()">Cancel</button>
      </div>
    </div>
  </v-modal>
</template>


<style scoped>
</style>