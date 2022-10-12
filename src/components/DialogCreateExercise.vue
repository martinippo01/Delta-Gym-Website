<template>
  <v-dialog persistent max-width="600px">
    <v-card color="background">
      <v-card-title>
        <span class="text-h5" style="color: #cfffb3">Create new exercise</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                dark
                color="primary"
                label="Name"
                v-model="title"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="detail"
                label="Description"
                counter
                maxlength="120"
                full-width
                single-line
                dark
                color="primary"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="discardExercise">
          Discard
        </v-btn>
        <v-btn color="primary" filled @click="saveExercise">
          <span style="color: #1e1e1e">Save</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import useNewExerciseStore from "@/store/newExerciseStore";
import { mapState, mapActions, storeToRefs } from "pinia";

export default {
  name: "DialogCreateExercise",
  props: {
    display: String,
  },
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  components: {},
  methods: {
    ...mapActions(useNewExerciseStore, ["setDetail"]),
    saveExercise() {
      this.setDetail(this.detail);
      this.setTitle(this.title);
      this.$emit("saved");
    },
    discardExercise() {
      this.$emit("discarded");
    },
  },
};
</script>
