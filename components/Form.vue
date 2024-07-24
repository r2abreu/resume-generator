<template>
  <UForm :schema="globalSchema" :state="state">
    <FormPersonalDetails
      :modelValue="state.formPersonalDetails"
      @update:modelValue="modelValueUpdated"
    />
    {{ state }}
    <!-- <FormProfessionalSummary />
    <FormEmploymentHistory /> -->
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import { schema as formDetailsSchema } from "./FormPersonalDetails.vue";
import FormPersonalDetails from "./FormPersonalDetails.vue";

const globalSchema = z.object({
  formPersonalDetails: formDetailsSchema,
});

type schema = z.infer<typeof globalSchema>;

const state = reactive<schema>({
  formPersonalDetails: formDetailsSchema.parse(undefined),
});

// Why is this not triggered?
function modelValueUpdated(value: schema["formPersonalDetails"]) {
  console.log(value);
}
</script>
