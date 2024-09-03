<template>
  <UForm :schema="globalSchema" :state="state">
    <FormPersonalDetails v-model="state.formPersonalDetails" />
    <FormProfessionalSummary v-model="state.formProfessionalSummary" />
    <!-- <FormEmploymentHistory /> -->
    {{ state }}
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import { schema as formDetailsSchema } from "./FormPersonalDetails.vue";
import { schema as formProfessionalSummarySchema } from "./FormProfessionalSummary.vue";
import FormPersonalDetails from "./FormPersonalDetails.vue";

const globalSchema = z.object({
  formPersonalDetails: formDetailsSchema,
  formProfessionalSummary: formProfessionalSummarySchema,
});

type schema = z.infer<typeof globalSchema>;

const state = reactive<schema>({
  formPersonalDetails: formDetailsSchema.parse(undefined),
  formProfessionalSummary: formProfessionalSummarySchema.parse(undefined),
});

// Why is this not triggered?
function modelValueUpdated(value: schema["formPersonalDetails"]) {
  console.log(value);
}
</script>
