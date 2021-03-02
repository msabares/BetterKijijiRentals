<template>
  <div class="home">
    <search-long-term></search-long-term>
    <listings></listings>
  </div>
</template>

<script>
import Listings from "../components/Listings.vue";
import SearchLongTerm from "../components/subcategories/SearchLongTerm.vue";

export default {
  name: "Home",
  components: {
    SearchLongTerm,
    Listings,
  },
};
</script>
