export class Client
{
    constructor(
      public id: number,
      private nom: string,
      private prenom: string,
      private statut: string,
      private photo: string,
      private telephone: string,
      private email: string,
      private adresse: string,
      private ville: string,
    ){}
}
