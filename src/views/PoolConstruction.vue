<template>
  <v-app>
    <v-main>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="item">
          <h1 class="title text-capitalize font-weight-black">pool duration</h1>
          <div class="detail d-flex flex-column">
            <span class="subtitle-1 grey--text text--lighten-1">
              Please enter the duration of the pool.
            </span>
            <span class="subtitle-1 grey--text text--lighten-1">
              Notice 1: The starting date is 7 days from today
            </span>
            <span class="subtitle-1 grey--text text--lighten-1">
              Notice 2: From today to the starting point, any participant that
              meets the criteria could bid for the initiating right
            </span>
            <span class="subtitle-1 grey--text text--lighten-1">
              Notice 3: This duration should be over 90 days
            </span>
          </div>
        </div>

        <div class="item">
          <h1 class="subtitle-1 font-weight-bold">During</h1>
          <v-col>
            <v-text-field
              outlined
              placeholder="180 days"
              v-model="During"
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
          to="/Charge"
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
    During: '',
  }),
  methods: {
    ...mapMutations(['poolconstructionSave']),
    validate() {
      let arr = [this.During, this.valid]
      if (this.$refs.form.validate()) {
        this.poolconstructionSave(arr)
        this.$router.push({
          path: `/review`,
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
