export class User {
   
    
    constructor(public _id : string = "", public displayName: string = "", 
    public email: string = "",
    public picture: string = "",
    public  provider: string = "",
    public provider_id: string = "") {
    
    }
}
