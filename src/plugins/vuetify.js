import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        primary: '#00ffa4',
        secondary: '#424242',
        accent: '#a563d1',
        error: '#ff472a',
        info: '#37d8f3',
        success: '#1faf28',
        warning: '#ffda0a',
    },
    icons: {
        iconfont: 'mdi',
    },
});
