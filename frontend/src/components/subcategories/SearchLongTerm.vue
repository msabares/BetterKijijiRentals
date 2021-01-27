<template>
  <div class="box" id="SearchLongTerm">
    <p class="has-text-centered">Filter</p>

    <b-field custom-class="is-small" label="Unit Type">
      <b-select rounded size="is-small" v-model="longTermSearch.unitType">
        <option
          v-for="option in unitTypeOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </b-select>
    </b-field>

    <div class="is-flex is-flex-direction-row is-align-content-center">
      <b-field custom-class="is-small" label="Bedrooms" class="mr-4">
        <b-select rounded size="is-small" v-model="longTermSearch.bedrooms">
          <option
            v-for="option in bedroomOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </b-select>
      </b-field>
      <b-field custom-class="is-small" label="Bathrooms">
        <b-select rounded size="is-small" v-model="longTermSearch.bathrooms">
          <option
            v-for="option in bathroomOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </b-select>
      </b-field>
    </div>

    <b-field custom-class="is-small" label="Parking">
      <b-radio-button
        size="is-small"
        v-model="longTermSearch.parking"
        v-for="option in parkingOptions"
        :key="option.value"
        :native-value="option.value"
      >
        {{ option.text }}
      </b-radio-button>
    </b-field>

    <b-field custom-class="is-small" label="Pet Friendly">
      <b-radio-button
        v-for="option in petFriendlyOptions"
        :key="option.value"
        :native-value="option.value"
        v-model="longTermSearch.petFriendly"
        size="is-small"
      >
        {{ option.text }}
      </b-radio-button>
    </b-field>

    <b-field custom-class="is-small" label="For Rent By">
      <b-radio-button
        v-for="option in forRentByOption"
        :key="option.value"
        :native-value="option.value"
        v-model="longTermSearch.forRentBy"
        size="is-small"
      >
        {{ option.text }}
      </b-radio-button>
    </b-field>

    <b-field custom-class="is-small" label="Agreement Type">
      <b-radio-button
        v-for="option in agreementTypeOptions"
        :key="option.value"
        :native-value="option.value"
        v-model="longTermSearch.agreementType"
        size="is-small"
      >
        {{ option.text }}
      </b-radio-button>
    </b-field>

    <b-collapse :open="false" aria-id="utilitiesOptions">
      <template #trigger="props">
        <label class="label is-small mb-2" aria-controls="utilitiesOptions">
          <b-icon
            :icon="!props.open ? 'caret-down' : 'caret-up'"
            pack="fas"
            size="is-small"
          ></b-icon>
          Utilities Included
        </label>
      </template>
      <b-field custom-class="is-small" horizontal label="Hydro">
        <!--Nested b-fields as work around: https://github.com/buefy/buefy/issues/2808-->
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.hydro"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
      <b-field custom-class="is-small" horizontal label="Heat">
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.heat"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
      <b-field custom-class="is-small" horizontal label="Water">
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.water"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
    </b-collapse>

    <p class="has-text-centered mt-3 mb-2">The Unit</p>

    <b-field>
      <template #label>
        <label class="label is-small">Size (sqft)</label>
        <div class="is-flex is-justify-content-space-between">
          <p class="is-size-7">{{ longTermSearch.size[0] }}</p>
          <p class="is-size-7">
            {{ longTermSearch.size[1]
            }}{{ longTermSearch.size[1] == 3000 ? "+" : "" }}
          </p>
        </div>
      </template>
      <b-slider
        size="is-small"
        v-model="longTermSearch.size"
        :min="0"
        :max="3000"
        :step="25"
        :tooltip="false"
        rounded
      >
      </b-slider>
    </b-field>

    <b-field custom-class="is-small" label="Furnished">
      <b-radio-button
        v-for="option in genericOptions"
        :key="option.value"
        :native-value="option.value"
        v-model="longTermSearch.furnished"
        size="is-small"
      >
        {{ option.text }}
      </b-radio-button>
    </b-field>

    <b-collapse :open="false" aria-id="appliancesOptions">
      <template #trigger="props">
        <label class="label is-small mb-2" aria-controls="appliancesOptions">
          <b-icon
            :icon="!props.open ? 'caret-down' : 'caret-up'"
            pack="fas"
            size="is-small"
          ></b-icon>
          Appliances
        </label>
      </template>
      <b-field custom-class="is-small" label="Laundry (In Unit)">
        <!--Nested b-fields as work around: https://github.com/buefy/buefy/issues/2808-->
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.laundryInUnit"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
      <b-field custom-class="is-small" label="Laundry (In Building)">
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.laundryInBuilding"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
      <b-field custom-class="is-small" label="Dish Washer">
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.dishWasher"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
      <b-field custom-class="is-small" label="Fridge/Freezer">
        <b-field>
          <b-radio-button
            v-for="option in genericOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.fridgeFreezer"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
      </b-field>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  longTermSearch = {
    forRentBy: null,
    unitType: null,
    bedrooms: null,
    bathrooms: null,
    agreementType: null,
    petFriendly: null,
    hydro: null,
    heat: null,
    water: null,
    parking: null,
    furnished: null,
    size: [0, 3000],
    laundryInUnit: null,
    laundryInBuilding: null,
    dishWasher: null,
    fridgeFreezer: null,
  };

  forRentByOption = [
    { text: "Any", value: null },
    { text: "Owner", value: true },
    { text: "Professional", value: false },
  ];
  unitTypeOptions = [
    { text: "Any", value: null },
    { text: "Apartment", value: "apartment" },
    { text: "Condo", value: "condo" },
    { text: "Basement", value: "basement" },
    { text: "House", value: "house" },
    { text: "Townhouse", value: "townhouse" },
    { text: "Duplex/Triplex", value: "duplex/triplex" },
  ];
  bedroomOptions = [
    { text: "Any", value: null },
    { text: "1", value: 1 },
    { text: "1 + Den", value: 1.5 },
    { text: "2", value: 2 },
    { text: "2 + Den", value: 2.5 },
    { text: "3", value: 3 },
    { text: "3 + Den", value: 3.5 },
    { text: "4", value: 4 },
    { text: "4 + Den", value: 4.5 },
    { text: "5+", value: 5 },
  ];
  bathroomOptions = [
    { text: "Any", value: null },
    { text: "1", value: 10 },
    { text: "1.5", value: 15 },
    { text: "2", value: 20 },
    { text: "2.5", value: 25 },
    { text: "3", value: 30 },
    { text: "3.5", value: 35 },
    { text: "4", value: 40 },
    { text: "4.5", value: 45 },
    { text: "5", value: 50 },
    { text: "5.5", value: 55 },
    { text: "6+", value: 60 },
  ];
  agreementTypeOptions = [
    { text: "Any", value: null },
    { text: "Month-to-month", value: "monthtomonth" },
    { text: "1 Year", value: "1year" },
  ];
  petFriendlyOptions = [
    { text: "Any", value: null },
    { text: "Yes", value: "yes" },
    { text: "No", value: "no" },
    { text: "Limited", value: "limited" },
  ];
  parkingOptions = [
    { text: "Any", value: null },
    { text: "0", value: 0 },
    { text: "1", value: 1 },
    { text: "2", value: 2 },
    { text: "3+", value: 3 },
  ];
  genericOptions = [
    { text: "Any", value: null },
    { text: "Yes", value: true },
    { text: "No", value: false },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
