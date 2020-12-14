import Client from "./Client";
import Consultant from "./Consultant";
import Facture from "./Facture";

export default interface Prestation {
  id: number; 
  tarifHT: number;
  numeroCommande: string;
  delaiPaiement: number;
  consultant: Consultant;
  client: Client;
  facture: Facture;
}
