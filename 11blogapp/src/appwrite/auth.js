// start with appwrite auth service
import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite"; //client Account and its ID get imported these things are useful in directly creating the account.
export class AuthService {
    client = new Client();  //this is declared globally so that its access is present everywhere
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl);
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);//behind the scene the account will get created with unique id , email password andd name
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }
    
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ", error);
        }
        return null
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() :: ", error);
        }
    }
}



const authService = new AuthService()

export default authService
