<template>
  <div class="is-pulled-right mt-6 mr-6">
    <div
      class="card mb-6"
      style="max-width: 30em;"
      v-for="(listing, index) in Listings"
      :key="index"
    >
      <div class="card-image" v-if="listing.images.length > 0">
        <b-carousel
          :arrow="true"
          :repeat="true"
          :arrow-hover="true"
          :autoplay="false"
          :overlay="listing.showGallery"
          icon-pack="fas"
          icon-prev="arrow-left"
          icon-next="arrow-right"
          @click="switchGallery(index, listing.showGallery)"
        >
          <b-carousel-item
            v-for="(image, index) in listing.images"
            :key="index"
          >
            <figure class="image is-4by3">
              <img :src="image" />
            </figure>
          </b-carousel-item>
          <span
            v-if="listing.showGallery"
            @click="switchGallery(index, listing.showGallery)"
            class="modal-close is-large"
          />
        </b-carousel>
      </div>

      <div class="card-content">
        <div class="is-flex is-justify-content-space-between mb-4">
          <span class="has-text-weight-bold">{{ listing.title }}</span>
          <span class="has-text-success has-text-weight-bold pl-3"
            >${{ listing.attributes.price }}</span
          >
        </div>
        <div class="content">
          <!-- <div>
            <b-icon pack="fas" icon="home" size="is-small" />
            <span class="is-capitalized mr-2">
              {{ listing.attributes.unittype }}
            </span>

            <span class="has-text-weight-light is-italic"
              >{{ listing.attributes.areainfeet }} sqft</span
            >
          </div> -->
          <div>
            <b-icon pack="fas" icon="map-marker-alt" />
            {{ listing.attributes.location }}
          </div>
          <div>
            <b-icon pack="fas" icon="clock" class="mt-2" />
            {{ formatPostedDate(listing.date) }}
          </div>
          <b-taglist class="mt-4">
            <b-tag class="is-capitalized" type="is-info  is-light">
              <b-icon pack="fas" icon="home" size="is-small" class="mr-1" />
              {{ listing.attributes.unittype }}
            </b-tag>
            <b-tag type="is-info  is-light">
              <b-icon pack="fas" icon="bed" size="is-small" class="mr-1" />
              {{ formatBedroomNumber(listing.attributes.numberbedrooms) }}
            </b-tag>
            <b-tag type="is-info  is-light">
              <b-icon pack="fas" icon="bath" size="is-small" class="mr-1" />
              {{ listing.attributes.numberbathrooms / 10 }}
            </b-tag>
            <b-tag type="is-info is-light" class="is-capitalized">
              <b-icon pack="far" icon="calendar" size="is-small" class="mr-1" />
              {{ listing.attributes.agreementtype }}
            </b-tag>
          </b-taglist>
          <div>
            <b-button
              type="is-primary"
              tag="a"
              :href="listing.url"
              target="blank"
              expanded
              rounded
              >View Listing</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listings",
  data: () => {
    return {
      gallery: false,
    };
  },
  methods: {
    formatPostedDate(date) {
      const postedDate = this.$date(date);
      const hoursAgo = this.$date().diff(postedDate, "hour");
      let result = "Posted ";
      switch (true) {
        case hoursAgo == 0:
          result += " just now";
          break;
        case hoursAgo < 24:
          result += " about " + hoursAgo + " hours ago";
          break;
        case hoursAgo > 24:
          result += " about " + Math.floor(hoursAgo / 24) + " days ago";
          break;
      }
      return result;
    },
    formatBedroomNumber(bedroomNum) {
      if (bedroomNum == 0) {
        return "Studio";
      } else if (bedroomNum % 1 == 0.5) {
        return Math.floor(bedroomNum) + " + Den";
      } else {
        return bedroomNum;
      }
    },
    formatPetsallowed(petAllowed) {
      let result;
      switch (petAllowed) {
        case 1:
          result = "Yes";
          break;
        case 0:
          result = "No";
          break;
        case "limited":
          result = "Limited";
          break;
      }
      return result;
    },
    switchGallery(index, currentFlag) {
      if (!currentFlag) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
      this.$store.dispatch("showGallery", { index: index, show: !currentFlag });
    },
  },
  computed: {
    Listings() {
      return this.$store.getters.getListings;
    },
  },
};
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

.is-overlay > .carousel-items {
  max-width: 50em !important;
}
</style>
