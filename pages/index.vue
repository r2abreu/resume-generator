<template>
  <main class="flex flex-row">
    <Form class="basis-1/2" />
    <canvas class="basis-1/2" ref="canvas"></canvas>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "creation",
});

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => canvasContent())

function canvasContent() {
  if (!canvas.value) return;

  const canvasElement = canvas.value;
  const context = canvasElement.getContext('2d');
 
  if (!context) return;

  context.fillStyle = 'blue';
  context.fillRect(50,25,100,50) 
}
</script>
