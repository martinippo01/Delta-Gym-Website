<template>
      <v-card
          color="secondary"
          class="hover-click"
          rounded="xl"
          width="300"
          height="200"
      >
          <v-img
              class=""
              height="200px"
              src="@/assets/routine_photo.jpg"
          >
            <v-container>
              <v-row class="justify-center">
                <h1 style="justify-self: center; margin-top: 6px">{{this.routineName}}</h1>

                <v-menu
                  ffset-y
                  :close-on-click="true"
                  v-if="!exploreMode"
                >
                  <template v-slot:activator="{on ,attrs}">
                    <v-btn
                      light
                      icon
                      v-bind="attrs"
                      v-on="on"
                      style="position: absolute; top: 10px; right: 10px"
                    >
                      <v-icon color="white">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                    >
                      <v-list-item-title><v-btn @click="item.action">{{ item.title }}</v-btn></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
            </v-container>
          </v-img>
      </v-card>
</template>

<script>
import { mapActions, mapState } from "pinia";
import {useRoutinesStore} from "@/store/routinesStore";
import { useUserStore } from "@/store/user";


export default {
  name: "RoutineButton",
  components: {},
  props: {
    routineName: {type: String, required: true},
    routineId: {type: Number, required: true},
    exploreMode: {type: Boolean, required: true},

  },
  data(){
    return{
      items:[{title:'Edit', action: this.editMe},{title:'Delete', action: this.deleteMe}],
      photo:'@/assets/routine_photo.jpg',
      name:'',
    }
  },
  methods: {
    async deleteMe(){
      await this.deleteRoutine(this.routineId);
      await this.setRoutines(this.userId);
    },
    editMe(){
      this.$router.push({
        name: "createRoutine",
        params: {
          editMode: true,
          id: this.routineId
        },
      });
    },
    ...mapActions(useRoutinesStore, ['deleteRoutine']),
    ...mapActions(useRoutinesStore, ['setRoutines'])
  },
  computed:{
    ...mapState(useUserStore, ['userId'])
  }
}
</script>

<style scoped>

h1{
  font-family: "Bebas Neue";
  color: white;
}
.hover-click{
  cursor: pointer;
}

</style>
