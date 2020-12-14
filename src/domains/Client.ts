import Adresse from "./Adresse";
import Company from "./Company";

export default interface Client {
  id: number;
  socialReason: string;  
  adresse: Adresse;  
}
