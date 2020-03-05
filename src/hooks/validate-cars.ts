// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    let { data } = context;
    if (!data.make || !data.vin) {
      throw new Error('Make and vin# are required');
    } else if (data.vin.length !== 17) {
      throw new Error('Invalid VIN#, A valid VIN# contains 17 characters');
    }
    return context;
  };
}
