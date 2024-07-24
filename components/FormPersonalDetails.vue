<template>
  <fieldset>
    <legend>
      <h3 class="my-4">Personal Details</h3>
    </legend>
    <UDivider class="mb-5" />
    <div class="grid grid-cols-2 gap-4">
      <label for="form-full-name">Full Name</label>
      <UInput
        v-model="props.modelValue.name"
        id="form-name"
        type="text"
        placeholder="John Doe"
      />
      <label for="form-email">Email</label>
      <UInput
        v-model="props.modelValue.email"
        id="form-email"
        type="email"
        placeholder="john@doe.com"
      />
      <label for="form-phone">Phone</label>
      <UInput
        v-model="props.modelValue.phone"
        id="form-phone"
        type="tel"
        placeholder="622056260"
      />
      <label for="form-country">Country</label>
      <UInput
        v-model="props.modelValue.country"
        id="form-country"
        type="text"
        placeholder="United Kingdom"
      />
      <label for="form-City">City</label>
      <UInput
        v-model="props.modelValue.city"
        id="form-City"
        type="text"
        placeholder="London"
      />
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { z } from "zod";

interface Props {
  modelValue: z.infer<typeof schema>;
}

interface Emits {
  (event: "update:modelValue", value: Props['modelValue']): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => schema.parse(undefined),
});

const emit = defineEmits<Emits>();

watch(
  () => props.modelValue,
  () => {
    emit("update:modelValue", props.modelValue);
  }
);
</script>

<script lang="ts">
// Schema
export const schema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string(),
  city: z.string(),
}).default({
  name: '',
  email: '',
  phone: '',
  country: '',
  city: '',
})
</script>
