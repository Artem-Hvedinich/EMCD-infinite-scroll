<template>
    <div class="app">
        <Header
            :quantity="quantity"
            :cardsPerScroll="cardsPerScroll"
            @update:quantity="value => {console.log(value); quantity = value}"
            @update:cardsPerScroll="value => {console.log(value); cardsPerScroll = value}"
            @applyQuantity="applyQuantity"
        />
        <ul class="users">
            <UserCard v-for="user in users" :user="user"/>
        </ul>
    </div>
</template>
<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import UserCard from "~/component/UserCard.vue";
import Header from "~/component/Header.vue";
import {fetchUsers} from "~/api";
import {debounce, recalculateCardCount, transferElements} from "~/lib";

// Initialize references to hold user data and state values
const allUsers = ref([])  // Holds the complete list of fetched users
const users = ref([])  // Stores the users currently displayed on the page
const cardsPerScroll = ref("20")  // Number of cards to display on each scroll load
const quantity = ref("200")  // Total number of user cards to fetch

// Fetches user data from the server based on the specified quantity
const fetchData = async () => {
    const result = await fetchUsers(+quantity.value)
    if (result) {
        allUsers.value = result
        transferElements(allUsers.value, users.value, +cardsPerScroll.value)
    }
}

// Applies the specified quantity of user cards and fetches new data
const applyQuantity = async () => {
    users.value = []
    sessionStorage.setItem('quantity', JSON.stringify(quantity.value))
    await fetchData()
}

// Checks if the current page has sufficient content and loads more if needed
const pageFullnessCheck = async () => {
    const cardCount = recalculateCardCount(+cardsPerScroll.value)
    if (cardCount !== cardsPerScroll.value) {
        cardsPerScroll.value = cardCount;
        users.value = [];
        await fetchData();
    }
}

// Handles the scroll event to load more user cards when reaching the bottom of the page
const handleScroll = debounce(async () => {
    if (!allUsers.value.length) return
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        transferElements(allUsers.value, users.value, +cardsPerScroll.value)
    }
}, 200);

// Sets up event listeners and loads initial data when the component is mounted
onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    const quantityStorage = sessionStorage.getItem('quantity')
    if (JSON.parse(quantityStorage)) {
        quantity.value = JSON.parse(quantityStorage)
    }
    await fetchData()
    await pageFullnessCheck()
});

// Removes event listeners when the component is unmounted
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
