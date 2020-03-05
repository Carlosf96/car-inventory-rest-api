import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

export class Cars extends Service {
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
