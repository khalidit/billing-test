import { IFactureService } from './services/facture.interface';
import { FactureServiceImpl } from './services/impl/factureImpl';

class ManualDependenciesConfiguration {
  private readonly _factureService: IFactureService;
  
  constructor() {
      this._factureService = new FactureServiceImpl();
    
  }
  get factureService(): IFactureService {
    return this._factureService;
  }
}
export const Configuration = new ManualDependenciesConfiguration();
