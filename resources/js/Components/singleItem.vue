<template>
    <div class=" w-2/3 m-auto flex justify-between items-center my-3">
        <span
            :class="{ 'line-through text-gray-600': item.completed }"
            class=" w-1/3 text-2xl font-bold text-white"
            >{{ item.name }}</span
        >
        <input
            type="checkbox"
            @change="updateCheck"
            v-model="item.completed"
            :checked="item.completed"
            class="block"
        />
        <font-awesome-icon
            icon="trash"
            class=" text-red-800"
            @click="deleteItem"
        ></font-awesome-icon>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: ["item"],
    methods: {
        updateCheck() {
            axios.put("api/items/" + this.item.id, {
                item: this.item
            });
        },
        deleteItem() {
            axios.delete("api/items/" + this.item.id).then(response => {
                if (response.status == 200) {
                    this.$emit("item-deleted");
                }
            });
        }
    }
};
</script>

<style></style>
