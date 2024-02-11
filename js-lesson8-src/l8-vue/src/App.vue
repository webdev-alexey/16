<template>
  <div>
    <div class="faq">
      <div v-for="(item, i) in faq" class="item">
        <div @click="item.open = !item.open" class="ask">
          {{ item.ask }}
          -----
          <button @click.stop="faq.splice(i, 1)" type="button">x</button>
        </div>
        <div v-show="item.open" class="answer">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const faq = reactive([
  {
    open: false,
    ask: "How use it",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    open: false,
    ask: "How work it",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    open: false,
    ask: "It is ok",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    open: false,
    ask: "Why it",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    open: false,
    ask: "......",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]);
</script>

<style scoped>
.item {
  margin: 15px 0;
}

.ask {
  font-size: 20px;
  cursor: pointer;
}

.answer {
  background: yellow;
  padding: 15px;
  margin-top: 10px;
}
</style>
