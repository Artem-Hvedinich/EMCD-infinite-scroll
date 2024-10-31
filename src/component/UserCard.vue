<template>
    <li class="item">
        <img :src="user.picture.large" alt="">
        <p class="item-text">{{ user.name.first }} {{ user.name.last }} </p>
        <p class="item-text">{{ user.email }}</p>
    </li>
</template>

<script setup>
import {toRef} from "vue";

// Define props to receive user data object
const props = defineProps({
    user: Object
});

// Create a reactive reference to 'user' prop
const user = toRef(props, "user");
</script>
