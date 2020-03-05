
import validateCars from '../../hooks/validate-cars';
export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateCars()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
