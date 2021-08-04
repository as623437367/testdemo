<template>
  <v-app>
    <v-main>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="item">
          <h1 class="title text-capitalize font-weight-black">
            charge setting
          </h1>
          <p class="subtitle-1 grey--text text--lighten-1">
            Please set the ratio that you want to charge from. The amount
            charged would be pooled into a vault, from which you could withdraw
            up to 80% and the remaining amount would be distributed to LP.
          </p>
        </div>

        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">Charge rate</h1>
          <v-col>
            <v-text-field
              outlined
              placeholder="5%"
              v-model="Chargerate"
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
          to="/Collateral"
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
    Chargerate: '',
  }),
  methods: {
    ...mapMutations(['chargeSave']),
    validate() {
      let arr = [this.Chargerate, this.valid]
      this.chargeSave(arr)
      if (this.$refs.form.validate()) {
        this.$router.push({
          path: `/PoolConstruction`,
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
