import { createStore } from 'easy-peasy';
import model from './model';
import { Configuration } from '../configuration';

const factureService = Configuration.factureService;


const store = createStore(model, {
  // 👇 provide injections to our store
  injections: { factureService },
});

export default store;
