<template>
  <fieldset>
    <legend>
      <h3 class="mt-2">Employment History</h3>
    </legend>
    <UDivider class="mb-5" />
    <FormEmploymentHistoryInstance
      v-for="(instance, index) of model.instances"
      :index
      v-model="model.instances[index]"
    />
    {{  model.instances }}
  </fieldset>
  <button @click.prevent="addEmploymentInstance">Add one more section</button>
</template>

<script setup lang="ts">
import { z } from "zod";

const toast = useToast();

const model = defineModel<z.infer<typeof schema>>({
  default: () => schema.parse(undefined),
});

function addEmploymentInstance() {
  const MAX_SECTIONS = 5;
  if (model.value.instances.length >= MAX_SECTIONS) return;
  const defaultInstance = instanceSchema.parse(undefined);

  model.value.instances.push(defaultInstance);

  toast.add({
    title: "Section added",
  });
}
</script>

<script lang="ts">
export const instanceSchema = z
  .object({
    title: z.string(),
    employer: z.string(),
    city: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date(),
  })
  .default({
    title: "",
    employer: "",
    city: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
  });
export const schema = z
  .object({
    instances: z.array(instanceSchema),
  })
  .default({
    instances: [],
  });
</script>
