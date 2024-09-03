<template>
  <fieldset>
    <legend>
      <h3 class="my-2">Craft a Compelling Professional Summary</h3>
    </legend>
    <UDivider class="mb-5" />
    <label for="form-professional-summary"
      >Compose 2-4 concise and dynamic sentences to captivate the reader!
      Showcase your role, experience, and, most importantly, your notable
      accomplishments, outstanding qualities, and valuable skills.</label
    >
    <UTextarea
      id="form-professional-summary"
      type="text"
      placeholder="John Doe"
      v-model="model"
    />
  </fieldset>
</template>

<script setup lang="ts">
import { z } from "zod";

const model = defineModel<z.infer<typeof schema>>();
</script>

<script lang="ts">
export const schema = z.string().default("");
</script>
