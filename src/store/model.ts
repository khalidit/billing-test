import intl, { IntlModel } from './intl.model';
import { facturesModel, FacturesModel } from './facture/factures.model';

export interface AppStoreModel {
  intl: IntlModel;
  factures: FacturesModel
}

const model: AppStoreModel = {
  intl,
  factures: facturesModel,
};

// 👇 export the typed hooks
export default model;
