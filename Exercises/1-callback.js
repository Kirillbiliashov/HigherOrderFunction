'use strict';

const iterate = (obj, callback) => {
    if (typeof obj === 'object') {
          for (const key in obj) {
        callback(key, obj[key], obj);
    };
    } 
};

module.exports = { iterate };
