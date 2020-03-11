export class Fournisseur
{
    constructor(
      private id: number,
      private nom: string,
      private nom_court: string,
      private ville: string,
      private adresse: string,
      private tel_fix: string,
      private tel_mobile: string,
      private fax: string,
      private email: string
    ){}
}
