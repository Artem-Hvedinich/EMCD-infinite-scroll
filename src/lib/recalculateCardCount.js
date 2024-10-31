/**
 * @module lib/recalculateCardCount
 */

/**
 *
 * Recalculates the number of cards to display based on the current screen width
 * and the available vertical space. If the number of cards needs to be updated,
 * it returns the new count.
 *
 * @param {number} cardsPerScroll - The current number of cards being displayed.
 * @returns {string} The updated value of cards to be displayed.
 * If no update is needed, returns the original `cardsPerScroll`.
 */

export function recalculateCardCount(cardsPerScroll) {
    const cartHeight = 300; //Height of each card in pixels.
    const screenWidth = window.innerWidth;//Get the current screen width in pixels.
    let numberOfCards = 1; //Initialize number of cards to a default value of 1 card per row.

    // Determine the number of cards that can fit in a row based on screen width.
    if (screenWidth > 1440) {
        numberOfCards = 6; // 6 cards for extra large screens
    } else if (screenWidth > 1024) {
        numberOfCards = 4; // 4 cards for large screens
    } else if (screenWidth > 780) {
        numberOfCards = 3; // 3 cards for medium screens
    } else if (screenWidth > 520) {
        numberOfCards = 2; // 2 cards for small screens
    }

    // Calculate the total height of the user container based on the current number of cards and quantity width.
    const usersContainerHeight = Math.ceil(cardsPerScroll / numberOfCards) * cartHeight;

    // Calculate the remaining vertical space on the page.
    const blankPageHeight = window.innerHeight - usersContainerHeight;

    // If there is available vertical space, calculate additional cards that can be added.
    if (blankPageHeight > 0) {
        const additionalCards = Math.ceil(blankPageHeight / cartHeight) * numberOfCards;
        const newCardCount = cardsPerScroll + additionalCards; // Calculate the new total number of cards

        // If the new card count is different from the current count, return the new count.
        if (newCardCount !== cardsPerScroll) {
            return `${newCardCount}`; // Return the updated card count as a string
        }
    }

    // If no update is needed, return the original count as a string.
    return `${cardsPerScroll}`;
};
