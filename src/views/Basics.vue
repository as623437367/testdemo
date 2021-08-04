<template>
  <div>
    <v-app>
      <v-main>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div class="item">
            <h1 class="text-capitalize title font-weight-black">basics</h1>
            <p class="text-capitalize grey--text text--lighten-1">
              basic nudgePool settings
              <span class="black--text"
                >Basic settings cannot be changed after creation</span
              >
            </p>
          </div>
          <div class="item">
            <h1 class="text-capitalize title subtitle-1 font-weight-bold">
              token name
            </h1>
            <v-col>
              <v-select
                :items="Token"
                outlined
                v-model="tokenname"
                required
                :rules="[(v) => !!v || 'Item is required']"
              ></v-select>
            </v-col>
          </div>
          <div class="item">
            <h1 class="text-capitalize title subtitle-1 font-weight-bold">
              denomination asset
            </h1>
            <v-col>
              <v-select
                :items="Denomination"
                outlined
                v-model="denomination"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-select>
            </v-col>
          </div>
          <div class="item">
            <h1 class="text-capitalize title subtitle-1 font-weight-bold">
              project website
            </h1>
            <v-col>
              <v-text-field
                outlined
                v-model="projectwebsite"
                :rules="[(v) => !!v || 'Item is required']"
                required
              ></v-text-field>
            </v-col>
          </div>
          <v-btn
            large
            width="150px"
            class="gbcolor text-capitalize rounded-lg white--text"
            depressed
            link
            @click="validate"
            >Next</v-btn
          >
        </v-form>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    Token: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    Denomination: ['BTC', 'ETH', 'BNB', 'USDT', 'USDC', 'UBSD'],
    tokenname: '',
    denomination: '',
    projectwebsite: '',
    status: false,
    valid: true,
  }),
  methods: {
    ...mapMutations(['basicsSave']),
    validate() {
      // this.$refs.form.validate()
      console.log(this.valid)
      let arr = [
        this.tokenname,
        this.denomination,
        this.projectwebsite,
        this.status,
      ]
      if (this.$refs.form.validate()) {
        this.basicsSave(arr)
        this.$router.push({
          path: `/Collateral`,
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
</style>
