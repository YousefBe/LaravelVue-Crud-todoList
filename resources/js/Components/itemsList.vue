<template>
    <div>
        <ul>
            <single-item
                v-for="(item, index) in items"
                :key="index"
                :item="item"
                @item-deleted="itemsChanged"
            ></single-item>
        </ul>
    </div>
</template>

<script>
import SingleItem from "./singleItem.vue";

export default {
    components: { SingleItem },
    props: ["items"],
    methods: {
        itemsChanged() {
            this.$emit("get-items");
        }
    }
};
</script>

<style></style>
