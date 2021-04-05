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
                label="YYYY-MM-DD"
                readonly
                solo
                v-on="on"
            >
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
.v-input{width:160px; display:inline-block; vertical-align: middle;}
.v-input__slot{height:auto; padding:0 !important; box-shadow:none !important; margin:0 !important;}
.v-input input{margin:0 !important; max-height:inherit; height:50px; line-height:48px; border:1px solid #dddddd; border-radius:2px; padding:0 50px 0 20px; background:#ffffff url(../assets/images/ico_datePicker.png) no-repeat center right 10px;}
.v-text-field.v-text-field--solo .v-input__control{min-height:auto;}
.v-text-field.v-text-field--enclosed .v-text-field__details{width:0; height:0; padding:0; margin:0; min-height:0; display:block;}
.icoDate{width:22px; height:22px; background:url(../assets/images/ico_datePicker.png) no-repeat 0 0;}
.v-input .v-label{font-size:16px; color:#a0b0b6; padding:0 50px 0 20px; max-width:inherit;}
.v-menu__content{transform:translateX(-40px);}
.v-input input:focus{color:#0c323d; border-color:#2cbbb7; background-image:url(../assets/images/ico_datePickerHover.png);}

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
