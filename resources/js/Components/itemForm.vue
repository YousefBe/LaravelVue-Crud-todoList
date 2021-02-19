<template>
    <form action="">
        <div class=" m-8 flex justify-center items-center">
            <div class="">
                <label for="name" class="inline-block mr-2 text-white text-base"
                    >Name</label
                >
                <input
                    type="text"
                    v-model="item.name"
                    class=" p-2  bg-gray-500 rounded-2xl focus:outline-none"
                />
            </div>

            <font-awesome-icon
                icon="plus-square"
                class=" text-gray-900 ml-8 "
                :class="{
                    'cursor-pointer text-green-400': item.name,
                    'cursor-not-allowed': !item.name
                }"
                @click="addItem"
            ></font-awesome-icon>
        </div>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            item: {
                name: ""
            }
        };
    },
    methods: {
        addItem() {
            if (this.item.name === "") {
                return;
            }
            axios
                .post("api/items", {
                    item: this.item
                })
                .then(response => {
                    if (response.status == 201) {
                        this.item.name = "";
                    }
                    this.$emit("new-item");
                });
        }
    }
};
</script>
<style scoped>
/* */
</style>
