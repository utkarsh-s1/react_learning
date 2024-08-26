const configs = {
    appwriteUrl :String(import.meta.env.VITE_APPWRITE_URL),
    appwriteCollectionID :String(import.meta.env.VITE_COLLECTION_ID),
    appwriteDatabaseID :String(import.meta.env.VITE_DATABASE_ID),
    appwriteBucketID :String(import.meta.env.VITE_BUCKET_ID),
    appwriteProjectID :String(import.meta.env.VITE_PROJECT_ID),

}
export default configs