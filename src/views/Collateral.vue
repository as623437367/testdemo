<template>
  <v-app>
    <v-main>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="item">
          <h1 class="title font-weight-black">Collateral Settings</h1>
          <p class="subtitle-1 grey--text text--lighten-1">
            Please set up your token amount and impawn rate. These parameters
            will determine your total GP fundraising amount.
          </p>
        </div>

        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Tokens Impawned</h1>
          <v-col>
            <v-text-field
              outlined
              v-model="TokensImpawned"
              placeholder="1,000,000,000"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">LTV</h1>
          <v-col>
            <v-text-field
              outlined
              placeholder="30%"
              v-model="LTV"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-col>
        </div>
        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Liquidation LTV</h1>
          <v-col>
            <v-text-field
              outlined
              placeholder="50%"
              v-model="LiquidationLTV"
              :rules="[(v) => !!v || 'Item is required']"
              required
            ></v-text-field>
          </v-col>
        </div>
        <v-btn
          plain
          outlined
          large
          width="120px"
          class="gbprecolor  text-capitalize rounded-lg blue--text"
          link
          depressed
          to="/"
          >Previous</v-btn
        >
        <v-btn
          large
          width="120px"
          class="gbcolor text-capitalize rounded-lg white--text ml-10"
          depressed
          link
          @click="validate"
          >Next</v-btn
        >
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    valid: true,
    TokensImpawned: '',
    LTV: '',
    LiquidationLTV: '',
  }),
  methods: {
    ...mapMutations(['collateralSave']),
    validate() {
      let arr = [this.TokensImpawned, this.LTV, this.LiquidationLTV, this.valid]

      if (this.$refs.form.validate()) {
        this.collateralSave(arr)
        this.$router.push({
          path: `/Charge`,
        })
      }
    },
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
