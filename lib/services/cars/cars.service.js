"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars_class_1 = require("./cars.class");
const cars_hooks_1 = __importDefault(require("./cars.hooks"));
function default_1(app) {
    const options = {
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/cars', new cars_class_1.Cars(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('cars');
    service.hooks(cars_hooks_1.default);
}
exports.default = default_1;
