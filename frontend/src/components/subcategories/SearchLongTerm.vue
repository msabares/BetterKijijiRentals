<template>
  <b-sidebar open :fullheight="true" id="SearchLongTerm">
    <div
      class=" is-flex is-flex-direction-column"
      style="height: 100%; overflow-y: hidden;"
    >
      <div
        class="is-flex-grow-1 p-5"
        style="overflow-y: scroll; overflow-x: hidden; "
      >
        <p class="has-text-centered title is-6 m-0">Filter</p>

        <!--#region Price-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="dollar-sign" pack="fas" size="is-small"></b-icon
              >Price
            </label>
            <div class="is-flex is-justify-content-space-between">
              <p class="is-size-7">${{ longTermSearch.price[0] }}</p>
              <p class="is-size-7">
                ${{ longTermSearch.price[1]
                }}{{ longTermSearch.price[1] == 5000 ? "+" : "" }}
              </p>
            </div>
          </template>
          <b-slider
            size="is-small"
            v-model="longTermSearch.price"
            :min="0"
            :max="5000"
            :step="50"
            :tooltip="false"
            rounded
          >
          </b-slider>
        </b-field>
        <!--#endregion-->

        <!--#region Unit Type-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="home" pack="fas" size="is-small"></b-icon> Unit Type
            </label>
          </template>
          <b-select
            rounded
            size="is-small"
            expanded
            v-model="longTermSearch.unitType"
          >
            <option
              v-for="option in unitTypeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </b-select>
        </b-field>
        <!--#endregion-->

        <!--#region Bedrooms & Bathrooms-->
        <div class="columns mb-0">
          <div class="column">
            <b-field>
              <template #label>
                <label class="label is-small">
                  <b-icon icon="bed" pack="fas" size="is-small"></b-icon>
                  Bedrooms
                </label>
              </template>
              <b-select
                rounded
                size="is-small"
                expanded
                v-model="longTermSearch.bedrooms"
              >
                <option
                  v-for="option in bedroomOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.text }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <template #label>
                <label class="label is-small">
                  <b-icon icon="bath" pack="fas" size="is-small"></b-icon>
                  Bathrooms
                </label>
              </template>
              <b-select
                rounded
                size="is-small"
                expanded
                v-model="longTermSearch.bathrooms"
              >
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
        </div>
        <!--#endregion-->

        <!--#region Parking-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="parking" pack="fas" size="is-small"></b-icon>
              Parking
            </label>
          </template>
          <b-radio-button
            expanded
            size="is-small"
            v-model="longTermSearch.parking"
            v-for="option in parkingOptions"
            :key="option.value"
            :native-value="option.value"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
        <!--#endregion-->

        <!--#region Pet Friendly-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="paw" pack="fas" size="is-small"></b-icon>
              Pet Friendly
            </label>
          </template>
          <b-radio-button
            expanded
            v-for="option in petFriendlyOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.petFriendly"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
        <!--#endregion-->

        <!--#region For Rent By-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="tag" pack="fas" size="is-small"></b-icon>
              For Rent By
            </label>
          </template>
          <b-radio-button
            expanded
            v-for="option in forRentByOption"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.forRentBy"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
        <!--#endregion-->

        <!--#region Agreement Type-->
        <b-field>
          <template #label>
            <label class="label is-small">
              <b-icon icon="calendar" pack="far" size="is-small"></b-icon>
              Agreement Type
            </label>
          </template>
          <b-radio-button
            expanded
            v-for="option in agreementTypeOptions"
            :key="option.value"
            :native-value="option.value"
            v-model="longTermSearch.agreementType"
            size="is-small"
          >
            {{ option.text }}
          </b-radio-button>
        </b-field>
        <!--#endregion-->

        <!--#region Utilities-->
        <div class="well">
          <b-collapse animation="slide" aria-id="utilitiesOptions">
            <template #trigger="props">
              <label class="label">
                Utilities Included
                <b-icon
                  style="float: right;"
                  :icon="!props.open ? 'caret-down' : 'caret-up'"
                  pack="fas"
                />
              </label>
            </template>

            <!--#region Hydro-->
            <b-field class="mt-2">
              <template #label>
                <label class="label is-small">
                  <b-icon icon="bolt" pack="fas" size="is-small"></b-icon>
                  Hydro
                </label>
              </template>
              <b-field>
                <b-radio-button
                  expanded
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
            <!--#endregion-->
            <!--#region Heat-->
            <b-field>
              <template #label>
                <label class="label is-small">
                  <b-icon
                    icon="thermometer-half"
                    pack="fas"
                    size="is-small"
                  ></b-icon>
                  Heat
                </label>
              </template>
              <b-field>
                <b-radio-button
                  expanded
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
            <!--#endregion-->
            <!--#region Water-->
            <b-field>
              <template #label>
                <label class="label is-small">
                  <b-icon icon="tint" pack="fas" size="is-small"></b-icon>
                  Water
                </label>
              </template>
              <b-field>
                <b-radio-button
                  expanded
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
            <!--#endregion-->
          </b-collapse>
        </div>
        <!--#endregion-->

        <!--#region The Unit-->
        <b-collapse :open="false" animation="slide" aria-id="theUnit">
          <template #trigger="props">
            <b-button
              expanded
              class="label is-light mt-5"
              aria-controls="theUnit"
              :icon-right="!props.open ? 'caret-down' : 'caret-up'"
              icon-pack="fas"
            >
              The Unit
            </b-button>
          </template>
          <!--#region Size-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="ruler" pack="fas" size="is-small"></b-icon> Size
              </label>
              <div class="is-flex is-justify-content-space-between">
                <p class="is-size-7">{{ longTermSearch.size[0] }} sqft</p>
                <p class="is-size-7">
                  {{ longTermSearch.size[1]
                  }}{{ longTermSearch.size[1] == 3000 ? "+ sqft" : " sqft" }}
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
          <!--#endregion-->

          <!--#region Furnished-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="couch" pack="fas" size="is-small"></b-icon>
                Furnished
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.furnished"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->

          <!--#region Air Conditioning-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="snowflake" pack="fas" size="is-small"></b-icon>
                Air Conditioning
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.airconditioning"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->

          <!--#region Appliances-->
          <div class="well">
            <b-collapse animation="slide" aria-id="appliancesOptions">
              <template #trigger="props">
                <label class="label">
                  Appliances
                  <b-icon
                    style="float: right;"
                    :icon="!props.open ? 'caret-down' : 'caret-up'"
                    pack="fas"
                  />
                </label>
              </template>

              <!--#region Laundry In Unit-->
              <b-field class="mt-2">
                <template #label>
                  <label class="label is-small">
                    <b-icon icon="tshirt" pack="fas" size="is-small"></b-icon>
                    Laundry (In Unit)
                  </label>
                </template>
                <b-radio-button
                  expanded
                  v-for="option in genericOptions"
                  :key="option.value"
                  :native-value="option.value"
                  v-model="longTermSearch.laundryInUnit"
                  size="is-small"
                >
                  {{ option.text }}
                </b-radio-button>
              </b-field>
              <!--#endregion-->
              <!--#region Laundry In Building-->
              <b-field>
                <template #label>
                  <label class="label is-small">
                    <b-icon icon="socks" pack="fas" size="is-small"></b-icon>
                    Laundry (In Building)
                  </label>
                </template>
                <b-radio-button
                  expanded
                  v-for="option in genericOptions"
                  :key="option.value"
                  :native-value="option.value"
                  v-model="longTermSearch.laundryInBuilding"
                  size="is-small"
                >
                  {{ option.text }}
                </b-radio-button>
              </b-field>
              <!--#endregion-->
              <!--#region Dish Washer-->
              <b-field>
                <template #label>
                  <label class="label is-small">
                    <b-icon icon="soap" pack="fas" size="is-small"></b-icon>
                    Dish Washer
                  </label>
                </template>
                <b-radio-button
                  expanded
                  v-for="option in genericOptions"
                  :key="option.value"
                  :native-value="option.value"
                  v-model="longTermSearch.dishWasher"
                  size="is-small"
                >
                  {{ option.text }}
                </b-radio-button>
              </b-field>
              <!--#endregion-->
              <!--#region Fridge/Freezer-->
              <b-field>
                <template #label>
                  <label class="label is-small">
                    <b-icon
                      icon="ice-cream"
                      pack="fas"
                      size="is-small"
                    ></b-icon>
                    Fridge/Freezer
                  </label>
                </template>
                <b-radio-button
                  expanded
                  v-for="option in genericOptions"
                  :key="option.value"
                  :native-value="option.value"
                  v-model="longTermSearch.fridgeFreezer"
                  size="is-small"
                >
                  {{ option.text }}
                </b-radio-button>
              </b-field>
              <!--#endregion-->
            </b-collapse>
          </div>
          <!--#endregion-->

          <!--#region Personal Outdoor Space-->
          <div class="well">
            <b-collapse animation="slide" aria-id="utilitiesOptions">
              <template #trigger="props">
                <label class="label">
                  Personal Outdoor Space
                  <b-icon
                    style="float: right;"
                    :icon="!props.open ? 'caret-down' : 'caret-up'"
                    pack="fas"
                  />
                </label>
              </template>

              <!--#region Yard-->
              <b-field class="mt-2">
                <template #label>
                  <label class="label is-small">
                    Yard
                  </label>
                </template>
                <b-field>
                  <b-radio-button
                    expanded
                    v-for="option in genericOptions"
                    :key="option.value"
                    :native-value="option.value"
                    v-model="longTermSearch.yard"
                    size="is-small"
                  >
                    {{ option.text }}
                  </b-radio-button>
                </b-field>
              </b-field>
              <!--#endregion-->
              <!--#region Balcony-->
              <b-field>
                <template #label>
                  <label class="label is-small">
                    Balcony
                  </label>
                </template>
                <b-field>
                  <b-radio-button
                    expanded
                    v-for="option in genericOptions"
                    :key="option.value"
                    :native-value="option.value"
                    v-model="longTermSearch.balcony"
                    size="is-small"
                  >
                    {{ option.text }}
                  </b-radio-button>
                </b-field>
              </b-field>
              <!--#endregion-->
            </b-collapse>
          </div>
          <!--#endregion-->
        </b-collapse>
        <!--#endregion-->

        <b-collapse :open="false" animation="slide" aria-id="amenities">
          <template #trigger="props">
            <b-button
              expanded
              class="label is-light mt-3"
              aria-controls="amenities"
              :icon-right="!props.open ? 'caret-down' : 'caret-up'"
              icon-pack="fas"
            >
              Amenities
            </b-button>
          </template>

          <!--#region Elevator In Building-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <!-- <b-icon icon="couch" pack="fas" size="is-small"></b-icon> -->
                Elevator In Building
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.elevatorInBuilding"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region Gym-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="dumbbell" pack="fas" size="is-small"></b-icon>
                Gym
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.gym"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region Pool-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="swimmer" pack="fas" size="is-small"></b-icon>
                Pool
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.pool"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region Concierge-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon
                  icon="concierge-bell"
                  pack="fas"
                  size="is-small"
                ></b-icon>
                Concierge
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.security"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region 24 Hour Security-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="shield-alt" pack="fas" size="is-small"></b-icon>
                24 Hour Security
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.security"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region Bicycle Parking-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="bicycle" pack="fas" size="is-small"></b-icon>
                Bicycle Parking
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.bicycleParking"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
          <!--#region Storage Space-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="boxes" pack="fas" size="is-small"></b-icon>
                Storage Space
              </label>
            </template>
            <b-radio-button
              expanded
              v-for="option in genericOptions"
              :key="option.value"
              :native-value="option.value"
              v-model="longTermSearch.storageSpace"
              size="is-small"
            >
              {{ option.text }}
            </b-radio-button>
          </b-field>
          <!--#endregion-->
        </b-collapse>
      </div>

      <!--#region Footer-->
      <footer class="is-flex-shrink-0 is-flex well m-0">
        <b-button
          class="is-small mr-4"
          type="is-primary"
          outlined
          rounded
          expanded
          >Reset</b-button
        >
        <b-button class="is-small" type="is-primary" rounded expanded
          >Apply Filters</b-button
        >
      </footer>
      <!--#endregion-->
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  longTermSearch = {
    price: [0, 5000],
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
    airconditioning: null,
    yard: null,
    balcony: null,
    elevatorInBuilding: null,
    gym: null,
    pool: null,
    concierge: null,
    security: null,
    bicycleParking: null,
    storageSpace: null,
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
<style>
.sidebar-content {
  width: 350px !important;
}

.b-slider {
  margin: 0 !important;
}

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
