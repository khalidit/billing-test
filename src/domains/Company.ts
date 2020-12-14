import Client from "./Client";
import Adresse from "./Adresse";
import Consultant from "./Consultant";
import User from "./User";
import Prestation from "./Prestation";
/**
 * Company domain
 * @author M.ALIANE
 */
export default interface Company {
  id: number;
  socialReason: string;
  status: string;
  siret: string;
  rcsName: string;
  tvaName: string;
  ape: string;
  delaiPaiement: number;
  companyAdresse: Adresse;
  users: Set<User>;
  clients: Set<Client>;
  consultant: Set<Consultant>;
  prestation : Prestation;
}
