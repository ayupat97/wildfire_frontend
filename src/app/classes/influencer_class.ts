export class influencer{
    constructor (
      
      public name:string,
      public profilePic:string,
      public birthDate:Date,
      public gender:string,
      public mobile:string,
      public email:string,
      public uname:string,
      public password:string,
      public field1:string,
      public field2:string,
      public field3:string,
      public fbLink:string,
      public instaLink:string,
      public twitterLink:string,
      public fbReach:number,
      public instaReach:number,
      public twitterReach:number,
      public fees:number,
      public bio:string,
      public profession:string,
      public influId?:number,
    
    ){}
}


export class influ_login{
  constructor (
    public email:string,
    public password:string,

  ){}
}