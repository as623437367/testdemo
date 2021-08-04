<template>
  <v-app>
    <v-main>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="item">
          <h1 class="title text-capitalize font-weight-black">review</h1>
          <div class="detail d-flex flex-column">
            <span class="subtitle-1 grey--text text--lighten-1">
              Please check all your settings
            </span>
          </div>
        </div>

        <div class="item">
          <h1 class="subtitle-1 text-capitalize font-weight-bold">
            token name
          </h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.tokenname"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 text-capitalize font-weight-bold">
            denomination asset
          </h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.denomination"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 text-capitalize font-weight-bold">
            Project Website
          </h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.projectwebsite"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Tokens impawned</h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.TokensImpawned"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">LTV</h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.LTV"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Liquidation LTV</h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.LiquidationLTV"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Charge Rate</h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.Chargerate"
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">(Pool)Construction Period</h1>
          <v-col>
            <v-text-field
              disabled
              outlined
              :value="$store.state.During"
            ></v-text-field>
          </v-col>
        </div>
        <div class="d-flex align-center mb-6">
          <!-- <v-checkbox v-model="checkbox" label="I agree to the">123</v-checkbox>

        <a class="ml-1">Terms & Condition</a> -->
          <v-checkbox
            v-model="checkbox"
            required
            :rules="[(v) => !!v || 'You must agree to continue!']"
            color="green"
          >
            <template v-slot:label>
              <div @click.stop="">
                I agree to the
                <a href="#" @click.prevent="terms = true">Terms & Condition</a>
              </div>
            </template>
          </v-checkbox>
        </div>
        <v-btn
          large
          width="120px"
          class="gbcolor text-capitalize rounded-lg white--text ml-10"
          depressed
          link
          @click="validate"
          >Confirm</v-btn
        >
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    checkbox: false,
    valid: true,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // this.$router.push({
        //   path: `/Charge`,
        // })
      }
    },
  },
  computed: {
    ...mapState(
      ['Chargerate'],
      ['TokensImpawned'],
      ['LTV'],
      ['LiquidationLTV'],
      ['During'],
      ['tokenname'],
      ['denomination'],
      ['projectwebsite']
    ),
  },
}
</script>

<style lang="scss" scoped>
.gbcolor {
  background: -webkit-linear-gradient(left, #1e88e5, #0d47a1);
  background: -o-linear-gradient(right, #1e88e5, #0d47a1);
  background: -moz-linear-gradient(right, #1e88e5, #0d47a1);
  background: linear-gradient(to right, #1e88e5, #0d47a1);
}
.gbprecolor {
  // border: 1px solid #1e88e5;
}
</style>
