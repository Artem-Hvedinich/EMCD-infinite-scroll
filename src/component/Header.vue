<template>
    <header class="header">
        <div class="header-wrapper">
            <div class="quantity-switch">
                <p class="quantity-switch--text">Total user card count</p>
                <div class="input-container">
                    <input type="text" @input="updateQuantity" v-model="quantity">
                    <button @click="applyQuantity">apply</button>
                </div>
            </div>
            <div class="quantity-switch">
                <p class="quantity-switch--text">Number of loaded cards</p>
                <input type="text" @input="updateCardsPerScroll" v-model="cardsPerScroll">
            </div>
        </div>
    </header>
</template>

<script setup>
import {onMounted, ref, toRef} from 'vue';
import {filterNum} from '~/lib';

// Define props to accept values from the parent component
const props = defineProps({
    quantity: {
        type: String,
        required: true
    },
    cardsPerScroll: {
        type: String,
        required: true
    }
});

// Emit events to the parent component when values change
const emit = defineEmits(['update:quantity', 'update:cardsPerScroll', 'applyQuantity']);

const quantity = ref(props.quantity);
const cardsPerScroll = ref(props.cardsPerScroll);

const updateQuantity = () => {
    quantity.value = filterNum(quantity.value);
    emit('update:quantity', quantity.value);
};

const updateCardsPerScroll = () => {
    cardsPerScroll.value = `${filterNum(cardsPerScroll.value)}`;
    emit('update:cardsPerScroll', cardsPerScroll.value);
};

const applyQuantity = () => {
    emit('applyQuantity');
};
</script>
