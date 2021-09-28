'use strict';

// Remove multiple items from array modifying original array
const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

module.exports = { removeElements };
