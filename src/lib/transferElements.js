/**
 * @module lib/transferElements
 */
/**
 * Transfers a specified number of elements from the start of one array to the end of another.
 *
 * Removes elements from the beginning of `sourceArray` and appends them to `targetArray`.
 * If `sourceArray` has fewer elements than `count`, only available elements are transferred.
 *
 * @param {Array<User>} sourceArray - The array from which elements are shifted.
 * @param {Array<User>} targetArray - The array to which elements are pushed.
 * @param {number} count - The number of elements to transfer.
 * @returns {void} This function does not return a value.
 */
export function transferElements(sourceArray, targetArray, count) {
    // Iterate through the specified number of elements to transfer
    for (let i = 0; i < count; i++) {
        // Remove the first element from sourceArray
        const element = sourceArray.shift();
        // If the element exists, append it to targetArray
        if (element !== undefined) {
            targetArray.push(element);
        }
    }
}
