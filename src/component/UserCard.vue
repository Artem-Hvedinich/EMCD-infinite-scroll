<template>
    <li class="item">
        <img :src="user.picture.large" alt="">
        <p class="item-text">{{ user.name.first }} {{ user.name.last }} </p>
        <p class="item-text">{{ user.email }}</p>
    </li>
</template>

<script setup lang="ts">
import {toRef} from "vue";
import {User} from "~/types";

const props = defineProps<{ user: User }>();
const user = toRef(props, "user");
</script>
<style lang="scss">

</style>
