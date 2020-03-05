import assert from 'assert';
import app from '../../src/app';

describe('\'cars\' service', () => {
  it('registered the service', () => {
    const service = app.service('cars');

    assert.ok(service, 'Registered the service');
  });

  it('Validates vin# and saves car in db', async () => {
    const service = app.service('cars');
    let mustang = {
      make: 'ford',
      model: 'mustang',
      year: 1970,
      vin: '123456789ABCDFGJF'
    }
    const car = await service.create(mustang)
    assert.equal(car.vin, mustang.vin);
  });


  it('finds car by its id', async () => {
    const service = app.service('cars');
    let mustang = {
      make: 'ford',
      model: 'mustang',
      year: 1970,
      vin: '123456789ABCDFGJF'
    }
    const newCar = await service.create(mustang);
    const car = service.find(newCar.id)
    assert.ok(car, 'Found car by its id');
  });

});
