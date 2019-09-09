<template>
  <v-app :dark="setTheme">
    <v-app-bar app>
      <v-btn icon
             @click.stop="sideDrawer = !sideDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">
        <span>Ranking Up</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-navigation-drawer
              v-model="sideDrawer"
              absolute
              temporary
      >
        <v-divider></v-divider>
        <v-list>
          <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="6" class="text-left">
            <v-switch
                    v-model="goDark"
                    class="col-2 color-switch"
                    label="Nightmode"
            ></v-switch>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-img src="assets/logo.svg"></v-img>
          </v-col>
        </v-row>
      </v-navigation-drawer>
      <TestingUpload/>
      <v-divider></v-divider>
      <RankingTest/>
    </v-content>
  </v-app>
</template>

<script>
import { mdiDumbbell, mdiDuck } from '@mdi/js';
import Vuetify from 'vuetify/lib';
import TestingUpload from "@/components/TestingUpload";
import RankingTest from "./components/RankingTest";

export default {
  name: 'App',
  components: {
    TestingUpload,
    RankingTest
  },

  vuetify: new Vuetify(),
  data: () => ({
    sideDrawer: null,
    goDark: true,
    items: [
      {title: 'Home', icon: mdiDumbbell},
      {title: 'About', icon: mdiDuck},
    ]
  }),
  created() {
    this.$vuetify.theme.primary = '#00ffa4'
  },
  computed: {
    setTheme() {
      if (this.goDark == true) {
        this.$vuetify.theme.primary = '#00ffa4';
        return (this.$vuetify.theme.dark = true);
      } else {
        this.$vuetify.theme.primary = '#00ffa4';
        return (this.$vuetify.theme.dark = false);
      }
    }
  }
};
</script>
<style lang="scss">
  .upload-card {
    max-width: 380px;
    margin: 30px auto;
  }

  .color-switch {
    bottom: 5px;
    position: fixed;
  }
</style>
