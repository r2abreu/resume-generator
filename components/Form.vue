<template>
  <UForm :schema="globalSchema" :state="state">
    <FormPersonalDetails v-model="state.formPersonalDetails" />
    <FormProfessionalSummary v-model="state.formProfessionalSummary" />
    <FormEmploymentHistory v-model="state.formEmploymentHistory"/>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import { schema as formDetailsSchema } from "./FormPersonalDetails.vue";
import { schema as formProfessionalSummarySchema } from "./FormProfessionalSummary.vue";
import { schema as formEmploymentHistorySchema } from "./FormEmploymentHistory.vue";
import FormPersonalDetails from "./FormPersonalDetails.vue";

const globalSchema = z.object({
  formPersonalDetails: formDetailsSchema,
  formProfessionalSummary: formProfessionalSummarySchema,
  formEmploymentHistory: formEmploymentHistorySchema
});

type schema = z.infer<typeof globalSchema>;

const state = reactive<schema>({
  formPersonalDetails: formDetailsSchema.parse(undefined),
  formProfessionalSummary: formProfessionalSummarySchema.parse(undefined),
  formEmploymentHistory: formEmploymentHistorySchema.parse(undefined)
});
</script>
