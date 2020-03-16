export class Produit
{

  public id: number;
  public nom: string;
  public nom_court: string;
  public prix_base: number;
  public prix_vente: number;
  public seuil_max_remise: number;
  public unite: number;
  public image: string = "./assets/img/placeholder.png";
  public quantite_initiale: number;
  public quantite_actuel: number;

}
