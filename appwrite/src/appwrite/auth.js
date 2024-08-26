import conf from '../conf/conf'
import {Client, ID, Account} from "appwrite"

export class AuthService {
    client=new Client()
    account
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
    }
    async createAccount({email, password, name}){
        try {

            console.log(email, password, name)
            console.log(this.account)
          const userAccount =   await this.account.create(ID.unique(), email, password, name)
          console.log(userAccount)
          if(userAccount){
                // login the user
                return this.login(email, password)
          }
          else{
            return userAccount
          }
        } catch (error) {
            console.log(error)
        }
    }
    async login({email, password}){
        try {
            return  await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw(error)
        }
    }

    async getCurrentUser(){
       try {
         const a =  await this.account.get();
         return a
       } 
       catch (error) {

        console.log("Appwrite serive :: getCurrentUser :: error", error);

       }
       return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(`logout error ${error}`)
        }
        return null
        
    }


}

const authService = new AuthService()
 
export default authService

