<template>
  <v-app>
    <v-main>
      <div class="align-lg-center">
        <div class="d-flex justify-space-around mb-6">
          <div class="left">
            <v-list rounded>
              <v-list-item-group v-model="selectedItem" color="blue">
                <v-list-item
                  v-for="item in links"
                  :key="item.text"
                  link
                  :to="item.route"
                  :disabled="item.test"
                >
                  <!-- <router-link :to="item.route"></router-link> -->
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title class=" text-capitalize black--text">{{
                      item.text
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div class="right">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      links: this.$store.state.links,
    }
  },
  methods: {
    // handleclick(e) {
    //   this.data.links = this.$store.state.links
    // },
  },
  updated(e) {
    // this.links = this.$store.state.links
  },
  mounted() {
    // console.log(this.$on('input'))
  },
}
</script>
<style>
.left {
  width: 400px;
}
.right {
  width: 600px;
}
</style>
