/**
 * @module api
 */
/**
 * Fetches a list of random users from the Random User Generator API.
 *
 * @async
 * @function fetchUsers
 * @param {number} results - The number of user results to fetch.
 * @returns {Promise<Array<User>|undefined>} A promise that resolves to an array of user objects or undefined if an error occurs.
 * @throws {Error} Throws an error if the network response is not ok.
 */
export const fetchUsers = async (results) => {
    try {
        // Send a request to the Random User Generator API with the specified number of results.
        const response = await fetch(`https://randomuser.me/api/?results=${results}`);

        // Check if the response is ok (status code in the range 200-299).
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response.
        const data = await response.json();

        // Return the array of user objects from the data.
        return data.results;
    } catch (error) {
        // Log an error message if the fetch operation fails.
        console.error('Error fetching users:', error);
    }
};
