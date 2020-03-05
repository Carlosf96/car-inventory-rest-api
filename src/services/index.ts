import { Application } from '../declarations';
import cars from './cars/cars.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(cars);
}
