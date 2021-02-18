<template>
  <div>
    <b-button class="mt-5 ml-5" rounded @click="open = true"
      >Open Filter</b-button
    >
    <b-sidebar open :fullheight="true" id="SearchLongTerm" v-model="open">
      <div
        class=" is-flex is-flex-direction-column"
        style="height: 100%; overflow-y: hidden;"
      >
        <div
          class="is-flex-grow-1 p-5"
          style="overflow-y: scroll; overflow-x: hidden; "
        >
          <div class="is-flex is-justify-content-space-between">
            <p>Filter</p>
            <b-button class="is-small" rounded @click="open = false"
              >Hide</b-button
            >
          </div>

          <!--#region Price-->
          <b-field>
            <template #label>
              <label class="label is-small">
                <b-icon icon="dollar-sign" pack="fas" size="is-small"></b-icon
                >Price
              </label>
              <div class="is-flex is-justify-content-space-between">
                <p class="is-size-7">${{ filter.price[0] }}</p>
                <p class="is-size-7">
                  ${{ filter.price[1] }}{{ filter.price[1] == 5000 ? "+" : "" }}
                </p>
              </div>
            </template>
            <b-slider
              size="is-small"
              v-model="filter.price"
              :min="0"
              :max="5000"
              :step="25"
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
                <b-icon icon="home" pack="fas" size="is-small"></b-icon> Unit
                Type
              </label>
            </template>
            <b-select
              rounded
              size="is-small"
              expanded
              v-model="filter.unittype"
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
                  v-model="filter.numberbedrooms"
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
                  v-model="filter.numberbathrooms"
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
              v-model="filter.parking"
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
              v-model="filter.petfriendly"
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
              v-model="filter.forrentby"
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
              v-model="filter.agreementtype"
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
                    v-model="filter.hydro"
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
                    v-model="filter.heat"
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
                    v-model="filter.water"
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
          <b-collapse animation="slide" aria-id="theUnit">
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
                  <p class="is-size-7">{{ filter.areainfeet[0] }} sqft</p>
                  <p class="is-size-7">
                    {{ filter.areainfeet[1]
                    }}{{ filter.areainfeet[1] == 3000 ? "+ sqft" : " sqft" }}
                  </p>
                </div>
              </template>
              <b-slider
                size="is-small"
                v-model="filter.areainfeet"
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
                v-model="filter.furnished"
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
                v-model="filter.airconditioning"
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
                    v-model="filter.laundryinunit"
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
                    v-model="filter.laundryinbuilding"
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
                    v-model="filter.dishwasher"
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
                    v-model="filter.fridgefreezer"
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
                      v-model="filter.yard"
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
                      v-model="filter.balcony"
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

          <b-collapse animation="slide" aria-id="amenities">
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
                v-model="filter.elevatorinbuilding"
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
                v-model="filter.gym"
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
                v-model="filter.pool"
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
                v-model="filter.concierge"
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
                v-model="filter.security"
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
                v-model="filter.bicycleparking"
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
                v-model="filter.storagespace"
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
          <b-button class="is-small mr-4" rounded expanded @click="resetFilter"
            >Reset</b-button
          >
          <b-button
            class="is-small"
            type="is-primary"
            rounded
            expanded
            @click="applyFilter"
            >Apply Filters</b-button
          >
        </footer>
        <!--#endregion-->
      </div>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import store from "../../store";
import LongTermFilter from "../../models/LongTermFilter";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchLongTerm extends Vue {
  filter: LongTermFilter = new LongTermFilter();
  open = true;

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
    { text: "Batchelor/Studio", value: 0 },
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
    { text: "Month-to-month", value: "month-to-month" },
    { text: "1 Year", value: "one-year" },
  ];
  petFriendlyOptions = [
    { text: "Any", value: null },
    { text: "Yes", value: "1" },
    { text: "No", value: "0" },
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
    { text: "Yes", value: 1 },
    { text: "No", value: 0 },
  ];

  applyFilter() {
    const tempData = {
      searchIds: {
        location: {
          province: "SASKATCHEWAN",
          area: "",
          city: "SASKATOON",
        },
        category: "LONG_TERM_RENTALS",
      },
      options: {
        minResults: 20,
      },
      params: this.filter,
    };
    console.log(tempData);
    this.$store.dispatch("getListings", tempData);
  }

  resetFilter() {
    this.filter = new LongTermFilter();
  }
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
