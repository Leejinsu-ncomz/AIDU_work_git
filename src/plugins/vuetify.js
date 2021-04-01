import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ko from 'vuetify/src/locale/ko.ts';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: {
        locales: { ko },
        current: 'ko'
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                aicentro: '#0195df',
                anchor: '#333',
                background: '#eaeaea'
            },
            darken1: '#ea285b'
        }
    }
});
