export class brand{
    constructor (
      public name:string,
      public profilePic:string,
      public email:string,
      public uname:string,
      public password:string,
      public field:string,
      public bio:string,
      public fbLink:string,
      public instaLink:string,
      public twitterLink:string,
      public brandId?:number,

    ){}
}

export class brand_login{
  constructor (
    public email:string,
    public password:string,

  ){}
}