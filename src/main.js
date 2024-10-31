/**
 * The main entry point for the Vue application.
 *
 * This script creates a new Vue application instance,
 * imports the main application component, and mounts it to the DOM.
 *
 * @module main
 */

import { createApp } from 'vue';
import App from '~/app.vue';
import "~/styles/main.scss";

// Create and mount the Vue application
createApp(App).mount('#app');
