"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars_class_1 = require("./cars.class");
const cars_hooks_1 = __importDefault(require("./cars.hooks"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function default_1(app) {
    const data = {
        1: {
            make: "ford",
            model: "mustang",
            year: "1960",
            vin: "0123456789ABCDFGH"
        }
    };
    const reader = fs_1.default.createReadStream(path_1.default.resolve(__dirname + "/MOCK_DATA.csv"));
    reader.pipe(csv_parser_1.default());
    const options = {
        paginate: app.get("paginate"),
        store: data
    };
    // Initialize our service with any options it requires
    app.use("/cars", new cars_class_1.Cars(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service("cars");
    let MOCK_DATA = [];
    reader
        .pipe(csv_parser_1.default())
        .on("data", car => {
        MOCK_DATA.push(car);
    })
        .on("end", () => {
        MOCK_DATA.forEach((car) => {
            service.create(car);
        });
        console.log("CSV file successfully processed");
    });
    console.log(MOCK_DATA);
    service.hooks(cars_hooks_1.default);
}
exports.default = default_1;
