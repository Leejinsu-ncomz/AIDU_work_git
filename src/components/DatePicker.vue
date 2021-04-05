<template>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
    >
        <template v-slot:activator="{ on }">
        <v-text-field
            v-model="newdate"
            label="달력을 선택하세요"
            readonly
            solo
            v-on="on"
        >
            <template v-slot:append>
                <img width="18" height="19" src="@/assets/cal.svg" @click="menu = true" style="cursor:pointer"/>
            </template>
        </v-text-field>
        </template>
        <v-date-picker v-model="newdate" @input="input" header-color="primary"></v-date-picker>
    </v-menu>
</template>

<script>
export default {
    name: 'DatePicker',
    props: {
        date: {
            type: String,
            required: false
        //    default: new Date().toISOString().substr(0, 10)
        }
    },
    data () {
        return {
            menu: false,
            newdate: ''
        };
    },
    mounted () {
        if (this.date) this.newdate = this.date;
    },
    methods: {
        input () {
            this.$emit('input', this.newdate);
            this.menu = false;
        },
        dateChange () {
            this.newdate = this.date;
        }
    },
    watch: {
        'date': 'dateChange'
    }
};
</script>

<style>
.v-picker--date .primary {
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
}
.v-date-picker-title__year {
    color: #FFFFFF;
}

.v-date-picker-title__date > div {
    font-size: 34px;
    color: #FFFFFF;
}

.v-picker--date .accent {
    background-color: #005caf !important;
    border-color: #005caf !important;
}
.v-text-field__slot > input {
    cursor: pointer;
}
</style>
