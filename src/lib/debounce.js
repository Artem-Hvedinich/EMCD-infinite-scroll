/**
 * @module lib/debounce
 */
/**
 * Creates a debounced function that delays invoking `func` until
 * after `waitFor` milliseconds have elapsed since the last time it was invoked.
 *
 * @function
 * @param {Function} func - The function to be debounced.
 * @param {number} waitFor - The delay in milliseconds before `func` is invoked after the last call.
 * @returns {Function} A debounced function that postpones `func` invocation by the delay.
 */
export const debounce = (func, waitFor) => {
    let timeout; // Variable to hold the timeout identifier

    // Returns a new function that can be called with any arguments
    return (...args) => {
        clearTimeout(timeout); // Clears the previous timeout to reset the delay
        timeout = setTimeout(() => func(...args), waitFor);// Sets a new timeout to call `func` after `waitFor` milliseconds
    };
};
