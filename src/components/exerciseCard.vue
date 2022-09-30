<template>
  <v-card color="red">
    <v-card-title >
      <v-text-field
          label="Insert Name" v-model="exerciseName">
      </v-text-field>


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
          >
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>

        <v-list >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-actions class="mt-1">
      <v-container>
    <v-row >
      <v-col>
        <v-text-field prepend-icon="mdi-alarm" label="Mins" @keypress="filter(event)" v-model="time"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field prepend-icon="mdi-dumbbell" label="Kg" @keypress="filter(event)" v-model="weight"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="SETS" @keypress="filter(event)" v-model="sets"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="REPS" @keypress="filter" v-model="reps"></v-text-field>
      </v-col>
    </v-row>
      </v-container>
  </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "exerciseCard",

  data(){
    return{
      items:[{title:'editar'},{title:'eliminar'}],
      exerciseName:'',
      time:'',
      weight:'',
      sets:'',
      reps:''
    }
  },
  methods: {
    filter: function (evt) {
      evt = (evt) ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>

<style scoped>

</style>