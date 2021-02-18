<template>
  <div class="is-pulled-right">
    <div
      class="card is-horizontal"
      v-for="listing in Listings"
      :key="listing.date"
    >
      <div class="card-image">
        <figure class="image is-5by4">
          <img :src="listing.image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="title is-5 is-flex is-justify-content-space-between">
          <span>{{ listing.title }}</span>
          <span class="has-text-success">${{ listing.attributes.price }}</span>
        </div>
        <div class="content">
          {{ listing.attributes.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../store";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Listings extends Vue {
  get Listings() {
    return store.getters.getListings;
  }
}
</script>

<style>
.card-image {
  flex: 4;
  flex-shrink: 1;
}
.card-image .image {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.card-image .image img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
