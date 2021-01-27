<template>
  <section class="section" id="app">
    <search-long-term></search-long-term>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchLongTerm from "./components/subcategories/SearchLongTerm.vue";

@Component({
  components: {
    SearchLongTerm,
  },
})
export default class App extends Vue {}
</script>

<style></style>
