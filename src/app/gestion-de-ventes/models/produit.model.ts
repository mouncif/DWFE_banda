export class Produit
{
  constructor(
    public id: number,
    private nom: string,
    private nom_court: string,
    private prix_base: number,
    private prix_vente: number,
    private seuil_max_remise: number,
    private unite: number,
    private image: string,
    private quantite_initiale: number,
    private quantite_actuel: number
  ){}
}
