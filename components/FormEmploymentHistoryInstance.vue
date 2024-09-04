<template>
  <div
    class="grid grid-cols-2 gap-4 border-2 p-3 border-green-700 rounded-sm mt-4"
  >
    <label for="title">Job title</label>
    <UInput
      :id="`title-${index}`"
      type="text"
      placeholder="Software Engineer"
      v-model="model.title"
    />
    <label for="employer">Employer</label>
    <UInput
      :id="`employer-${index}`"
      type="text"
      placeholder="Google"
      v-model="model.employer"
    />
    <label for="city">City</label>
    <UInput
      :id="`city-${index}`"
      type="text"
      placeholder="Mountain View"
      v-model="model.city"
    />
    <label for="description">Description</label>
    <UTextarea
      :id="`description-${index}`"
      placeholder="Describe your role"
      v-model="model.description"
    />
    <label for="start-date">Start Date</label>
    <DatePicker :id="`start-date-${index}`" v-model="model.startDate" />
    <label for="end-date">End Date</label>
    <DatePicker :id="`end-date-${index}`" v-model="model.endDate" />
  </div>
</template>

<script setup lang="ts">
import { instanceSchema as schema } from "./FormEmploymentHistory.vue";
import { z } from "zod";

const model = defineModel<z.infer<typeof schema>>({
  default: () => schema.parse(undefined),
});

const { index } = defineProps<{ index: number }>();
</script>
