<template>
    <div class="app">
        <header class="header">
            <div class="header-wrapper">
                <div class="quantity-switch">
                    <p class="quantity-switch--text">Total user card count</p>
                    <div class="input-container">
                        <input type="text" @input="quantity=filterNum(quantity)" v-model="quantity">
                        <button @click="applyQuantity">apply</button>
                    </div>
                </div>
                <div class="quantity-switch">
                    <p class="quantity-switch--text">Number of loaded cards</p>
                    <input type="text" @input="cardsPerScroll=filterNum(cardsPerScroll)"
                           v-model="cardsPerScroll">
                </div>
            </div>
        </header>
        <ul class="users">
            <UserCard v-for="user in users" :user="user"/>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import UserCard from "~/component/UserCard.vue";
import {User} from "~/types";
import {fetchUsers} from "~/api";
import {debounce, transferElements, filterNum} from "~/lib";

const allUsers = ref<User[]>([])
const users = ref<User[]>([])
const cardsPerScroll = ref("2")
const quantity = ref("200")

const handleScroll = debounce(async () => {
    if (!allUsers.value.length) return
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        transferElements<User>(allUsers.value, users.value, +cardsPerScroll.value)
        console.log("allUsers:", allUsers.value.length, "users:", users.value.length)
    }
}, 200);

const fetchData = async () => {
    const result = await fetchUsers(+quantity.value)
    if (result) {
        allUsers.value = result
        transferElements<User>(allUsers.value, users.value, +cardsPerScroll.value)
    }
}

const applyQuantity = async () => {
    users.value = []
    sessionStorage.setItem('quantity', JSON.stringify(quantity.value))
    await fetchData()
}

const updateSize = async () => {
    const cartHeight = 300;
    let previousQuantityWidth = -1;
    let quantityWidth = 1;

    const screenWidth = window.innerWidth;
    if (screenWidth > 1440) {
        quantityWidth = 6;
    } else if (screenWidth > 1024) {
        quantityWidth = 4;
    } else if (screenWidth > 780) {
        quantityWidth = 3;
    } else if (screenWidth > 520) {
        quantityWidth = 2;
    }

    if (quantityWidth !== previousQuantityWidth) {
        previousQuantityWidth = quantityWidth;

        const usersContainerHeight = Math.ceil(+cardsPerScroll.value / quantityWidth) * cartHeight;
        const blankPageHeight = window.innerHeight - usersContainerHeight;

        if (blankPageHeight > 0) {
            const additionalCards = Math.ceil(blankPageHeight / cartHeight) * quantityWidth;
            const newCardCount = +cardsPerScroll.value + additionalCards;
            if (newCardCount !== +cardsPerScroll.value) {
                cardsPerScroll.value = `${newCardCount}`;
                users.value = [];
                await fetchData();
            }
        }
    }
};

onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
    const quantityStorage = sessionStorage.getItem('quantity')
    if (quantityStorage) {
        quantity.value = JSON.parse(quantityStorage)
    }
    await fetchData()
    await updateSize()
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
