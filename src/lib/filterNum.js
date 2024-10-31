/**
 * @module lib/filterNum
 */
/**
 * Filters out non-numeric characters from the input string.
 * If the input contains non-numeric characters, they are removed.
 * @param {string} value - The input string to filter.
 * @returns {string} The filtered string containing only numeric characters.
 */
export function filterNum(value) {
    // Check if the input string contains only numeric characters
    if (!/^\d+$/.test(value)) {
        // Replace all non-numeric characters with an empty string
        return value.replace(/[^\d]/g, '');
    }
    // Return the original value if it contains only numeric characters
    return value;
}
