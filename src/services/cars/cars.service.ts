// Initializes the `cars` service on path `/cars`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Cars } from "./cars.class";
import hooks from "./cars.hooks";
import csv from "csv-parser";
import fs from "fs";
import path from "path";
// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    cars: Cars & ServiceAddons<any>;
  }
}

interface Car {
  make: string;
  year: string;
  model: string;
  vin: string;
}
export default function (app: Application) {
  const data = {
    1: {
      make: "ford",
      model: "mustang",
      year: "1960",
      vin: "0123456789ABCDFGH"
    }
  };



  const reader = fs.createReadStream(
    path.resolve(__dirname + "/MOCK_DATA.csv")
  );

  reader.pipe(csv());

  const options = {
    paginate: app.get("paginate"),
    store: data
  };

  // Initialize our service with any options it requires
  app.use("/cars", new Cars(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("cars");

  let MOCK_DATA: any = [];

  reader
    .pipe(csv())
    .on("data", car => {
      MOCK_DATA.push(car);
    })
    .on("end", () => {
      MOCK_DATA.forEach((car: Car) => {
        service.create(car);
      });
      console.log("CSV file successfully processed");
    });

  console.log(MOCK_DATA);

  service.hooks(hooks);
}
