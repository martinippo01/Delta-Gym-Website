import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                fondo: '#1E1E1E', // #E53935
                primary: '#CFFFB3', // #FFCDD2
                secondary: '#4b4b4b', // #3F51B5
            },
        },
    }
});
