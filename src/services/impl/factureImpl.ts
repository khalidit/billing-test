import Facture from '../../domains/Facture';
import Webservice from '../../utils/webservice';
import { IFactureService } from '../facture.interface';

/**
 * Adapter for IFactureService
 *
 * @author k.ALIANNE
 * @since 15/11/2020
 */
export class FactureServiceImpl implements IFactureService {
  private static readonly FACTURES_PATH: string = 'factures';

  async createOrUpdate(facture: Facture): Promise<Facture> {
    const isNew: boolean = !facture.id;
    try {
      let response;
      if (isNew) {
        response = await Webservice.getInstance().post(FactureServiceImpl.FACTURES_PATH, facture);
      } else {
        response = await Webservice.getInstance().put(FactureServiceImpl.FACTURES_PATH, facture);
      }
      return response.data;
    } catch (error) {
      throw Error(`Error during ${isNew ? 'creating' : 'editing'} new facture`);
    }
  }

  async findAll(company: string): Promise<Facture[]> {
    try {
      const response = await Webservice.getInstance().get(`${FactureServiceImpl.FACTURES_PATH}?company=${company}`);
      return response.data.bills;
    } catch (error) {
      throw Error('Error during getting bills');
    }
  }

  async deleteById(id: number): Promise<string> {
    try {
      await Webservice.getInstance().delete(`${window.env.BACKEND_ENDPOINT}/${FactureServiceImpl.FACTURES_PATH}/${id}`);
      return Promise.resolve('200');
    } catch (error) {
      return Promise.reject(`Error during deleting facture with id ${id}`);
    }
  }
}
