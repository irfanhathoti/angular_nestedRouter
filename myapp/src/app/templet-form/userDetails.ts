export class userdetails{
    name:string
    address:string
    email:string
    contact:number


    constructor(name:string="" ,address:string="",email:string ='',contact:number){
        this.name =name,
        this.address = address,
        this.email = email,
        this.contact = contact
    }
}