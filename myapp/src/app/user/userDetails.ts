export class userDetails {
    id: number
    name: string
    email: string
    contact: number
    address: string
    constructor(id: number = 0, name: string = "", email: string = "", contact: number =0, address: string = "") {
        this.id = id
        this.name = name
        this.email = email
        this.contact = contact
        this.address = address
    }
}