<template>
  <div id="app">
    <search-long-term></search-long-term>
    <listings></listings>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchLongTerm from "./components/subcategories/SearchLongTerm.vue";
import Listings from "./components/Listings.vue";

@Component({
  components: {
    SearchLongTerm,
    Listings,
  },
})
export default class App extends Vue {}
</script>

<style></style>
