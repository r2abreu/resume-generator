<template>
  <fieldset>
    <legend>
      <h3 class="mt-2">Employment History</h3>
    </legend>
    <UDivider class="mb-5" />
    <div v-for="n in employmentsNumber" class="grid grid-cols-2 gap-4 border-2 p-3 border-green-700 rounded-sm mt-4">
      <label for="title">Job title</label>
      <UInput :id="`title-${n}`" type="text" placeholder="Software Engineer" />
      <label for="employer">Employer</label>
      <UInput :id="`employer-${n}`" type="text" placeholder="Google" />
      <label for="city">City</label>
      <UInput :id="`city-${n}`" type="text" placeholder="Mountain View" />
      <label for="description">Description</label>
      <UTextarea :id="`description-${n}`" placeholder="Describe your role" />
      <label for="start-date">Start Date</label>
      <DatePicker :id="`start-date-${n}`" />
      <label for="end-date">End Date</label>
      <DatePicker :id="`end-date-${n}`" />
    </div>
  </fieldset>
  <button @click.prevent="employmentsNumber++">Add one more section</button>
</template>

<script setup lang="ts">
const employmentsNumber = ref(0)

watch(employmentsNumber, (value) => {
  console.log(value)
})
</script>