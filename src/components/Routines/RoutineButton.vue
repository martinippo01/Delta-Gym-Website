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
                <h1 style="justify-self: center">{{this.routineName}}</h1>

                <v-menu
                  ffset-y
                  :close-on-click="true"
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
import {mapActions} from "pinia";
import {useRoutinesStore} from "@/store/routinesStore";


export default {
  name: "RoutineButton",
  components: {},
  props: {
    routineName: {type: String, required: true},
    routineId: {type: Number, required: true}
  },
  data(){
    return{
      items:[{title:'Edit', action: this.editMe},{title:'Delete', action: this.deleteMe}],
      photo:'@/assets/routine_photo.jpg',
      name:''
    }
  },
  methods: {
    async deleteMe(){
      await this.deleteRoutine(this.routineId);
      await this.setRoutines();
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
  }
}
</script>

<style scoped>
.card-title{
  color: white;
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  z-index: 2;
}

h1{
  font-family: "Bebas Neue";
  color: white;
}
.hover-click{
  cursor: pointer;
}

</style>
