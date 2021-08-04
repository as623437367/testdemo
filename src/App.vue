<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex justify-start">
          <v-icon class="black--text ">mdi-arrow-left-thick</v-icon>
          <h1 class="ml-2">Create Your NudgePool</h1>
        </div>
      </v-container>
      <left-content></left-content>
    </v-main>
  </v-app>
</template>
<script>
import leftContent from './components/leftContent.vue'
import rightContent from './components/rightContent.vue'
export default {
  name: 'App',
  components: {
    'left-content': leftContent,
    'right-content': rightContent,
  },
  data: () => ({
    e6: 1,
  }),
}
</script>
<style>
.left {
  /* width: 300px; */
  /* height: 600px; */
}
</style>
