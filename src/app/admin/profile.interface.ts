export class User {
   
    
    constructor(private _id : string = "", private displayName: string = "", 
    private email: string = "",
    private picture: string = "",
    private  provider: string = "",
    private provider_id: string = "") {
    
    }
}
