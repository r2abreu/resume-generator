<template>
  <fieldset>
    <legend>
      <h3 class="my-4">Personal Details</h3>
    </legend>
    <UDivider class="mb-5" />
    <div class="grid grid-cols-2 gap-4">
      <label for="form-full-name">Full Name</label>
      <UInput
        v-model="model.name"
        id="form-name"
        type="text"
        placeholder="John Doe"
      />
      <label for="form-email">Email</label>
      <UInput
        v-model="model.email"
        id="form-email"
        type="email"
        placeholder="john@doe.com"
      />
      <label for="form-phone">Phone</label>
      <UInput
        v-model="model.phone"
        id="form-phone"
        type="tel"
        placeholder="622056260"
      />
      <label for="form-country">Country</label>
      <UInput
        v-model="model.country"
        id="form-country"
        type="text"
        placeholder="United Kingdom"
      />
      <label for="form-city">City</label>
      <UInput
        v-model="model.city"
        id="form-city"
        type="text"
        placeholder="London"
      />
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { z } from "zod";

const model = defineModel<z.infer<typeof schema>>({
  default: () => schema.parse(undefined),
});
</script>

<script lang="ts">
export const schema = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    country: z.string(),
    city: z.string(),
  })
  .default({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });
</script>
