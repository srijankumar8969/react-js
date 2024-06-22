import conf from "../conf/conf"
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;      //folders in appwrite are called as buckets where we can store files such as images which cant be stored in the database

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
        
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost() :: ", error);
            return false
        }
    }

    async getPost(slug){  //slug is nothing but an identfier of the particular post
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)
        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false
        }
    }
//what issue i saw here in the getposts is that the queries nood to get convetted into an array of particular format and then it will be transferred for the query
    async getPosts(queries = [Query.equal("status", "active")] ){ //the queries need to be passed as array //like [Query.equal('title', ['Avatar', 'Lord of the Rings']), Query.greaterThan('year', 1999) ]
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries)
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: ", error);
            return false
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updateDocument() :: ", error);
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                )
            return true;    
        } catch (error) {
            console.log("Appwrite service :: deleteDocument() :: ", error);
            return false
        }
    }

    // storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: ", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId     
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile() :: ", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href
    }
}

const service = new Service()
export default service;

