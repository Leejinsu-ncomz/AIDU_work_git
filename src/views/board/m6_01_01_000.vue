<template>
    <div class="rowBox"></div>
</template>

<script>
export default {
    data: () => ({
        modalShow: ''
    }),
    methods: {
        fnOpen: function (id) {
            console.log(id)
            this.modalShow = id;
            document.body.classList.add("modal-open");
        },
        fnClose: function () {
            this.modalShow = null;
            document.body.classList.remove("modal-open");
        }
    }
}
</script>