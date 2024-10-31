/**
 * @module types
 */
/**
 * Represents a user with name, email, and picture information.
 * @typedef {Object} User
 * @property {UserName} name - The name details of the user.
 * @property {string} email - The email address of the user.
 * @property {UserPicture} picture - The picture URLs of the user.
 */

/**
 * Represents the user's name details.
 * @typedef {Object} UserName
 * @property {string} title - The user's title (e.g., "Mr.", "Ms.").
 * @property {string} first - The user's first name.
 * @property {string} last - The user's last name.
 */

/**
 * Represents the URLs for the user's pictures in various sizes.
 * @typedef {Object} UserPicture
 * @property {string} large - URL for the large-sized picture.
 * @property {string} medium - URL for the medium-sized picture.
 * @property {string} thumbnail - URL for the thumbnail-sized picture.
 */
