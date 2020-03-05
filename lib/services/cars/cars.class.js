"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_memory_1 = require("feathers-memory");
class Cars extends feathers_memory_1.Service {
    constructor(options, app) {
        super(options);
    }
}
exports.Cars = Cars;
