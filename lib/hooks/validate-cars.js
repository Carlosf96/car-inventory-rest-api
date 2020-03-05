"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options = {}) => {
    return async (context) => {
        let { data } = context;
        if (!data.make || !data.vin) {
            throw new Error('Make and vin# are required');
        }
        else if (data.vin.length !== 17) {
            throw new Error('Invalid VIN#, A valid VIN# contains 17 characters');
        }
        return context;
    };
};
