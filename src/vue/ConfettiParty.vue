<template>
  <div />
</template>

<script setup>
import { onMounted } from "vue";
import Confetti from "vue-confetti/src/confetti.js";

const config = {
  defaultType: "heart",
  defaultSize: 50,
  defaultColors: ["Pink", "Green", "Red", "Yellow"],
};
const confetti = new Confetti();

onMounted(() => {
  confetti.start(config);
  setTimeout(() => {
    confetti.stop();
  }, 5000);
});
</script>
