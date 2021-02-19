<template>
    <div class="w-full  min-h-screen bg-gray-900  ">
        <div class="flex flex-col justify-between">
            <the-header></the-header>
            <div class=" w-96 bg-gray-700 rounded-2xl mt-12 m-auto ">
                <item-form @new-item="getItems"></item-form>
                <items-list
                    @get-items="getItems"
                    :items="allItems"
                ></items-list>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from "./Components/TheHeader";
import itemForm from "./Components/itemForm.vue";
import itemsList from "./Components/itemsList";
import ItemsList from "./Components/itemsList.vue";
import axios from "axios";
export default {
    components: { TheHeader, itemForm, itemsList, ItemsList },
    data() {
        return {
            allItems: []
        };
    },
    mounted() {
        this.getItems();
    },

    methods: {
        getItems() {
            axios.get("api/items").then(response => {
                this.allItems = response.data;
                console.log(this.allItems);
            });
        }
    }
};
</script>

<style scoped>
.card {
    width: 500px;
    min-height: 480px;
}
.form-checkbox {
    background-color: aqua !important;
    padding: 120px;
}
</style>
