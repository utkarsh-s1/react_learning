import conf from '../conf/conf'
import {Client, ID, Account, Databases, Query, Storage} from "appwrite"

export class Service{
    client = new Client()
    databases
    buckets

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.buckets = new Storage(this.client)

    }

    async post({title, userID, slug, featuredImage, content, status}){
        
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title,userID, content, featuredImage, status
               })
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async update({title, slug, featuredImage, content, status}){

        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, {
                title, content, featuredImage, status
            })
        } catch (error) {
            throw error
        }
    }
    async delete(slug){

        try {
             await this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
             return true
             
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
        } catch (error) {
            throw error
            
        }
    }

    async getActivePosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID, conf.appwriteCollectionID, queries)
        } catch (error) {
            console.log(error)
        }
        return false
    }

    async uploadFile(file){
        try {
            console.log("start")
           const feile = await this.buckets.createFile(conf.appwriteBucketID, ID.unique(), file)
           console.log(feile)
           console.log("fhbdncbhdsk,")
           return feile
        } catch (error) {
            console.log(error)
            
        }
    }

    async deleteFile(id){
        try {
            await this.buckets.deleteFile(conf.appwriteBucketID, id)
            return true
        } catch (error) {
            throw error
            
        }
    }

    filePreview(id){
        return this.buckets.getFilePreview(conf.appwriteBucketID, id)

    }



}

const service = new Service()
 
export default service