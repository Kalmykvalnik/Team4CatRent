interface User{
  id: numberUser 
    id: number
    username: string
    password: string
    phone: string
    email: string
    firstname: string
    lastname: string
    middlename: string
    sex: boolean
    birthdate: Date
    creditcard: string
    emailpermission: boolean
    smspermission: boolean
}

interface Auth{
  email: string
  token: string
  username: string
}

interface Product{
  id: number
  name: string
  description: String
  isactive: boolean
}



interface Order{
  id: number
  userid: number
  DealDate: Date
  Cost: number
  DeliveryDate: Date
  RentTime: Date
  Status: number
  Notes: string
}

interface Basket{
  id: number
  userid: number
  Cost: number
  DeliveryDate: Date
  RentTime: Date
  product: Product
}