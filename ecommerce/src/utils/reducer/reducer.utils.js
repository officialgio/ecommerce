/**
 * A helper function that will help top return an object that
 * will help make your dispatch readable.
 * @param {String} type
 * @param {Object} payload
 * @returns {Object} object of both props: type and payload
 */
export const createAction = (type, payload) => ({ type, payload });
