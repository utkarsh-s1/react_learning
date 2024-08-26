import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, RTE, Input, Select } from './index';
import service from "../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {

    console.log(post)
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            featuredImage: post?.featuredImage || "",
            slug: post?.slug || "",
            status: post?.status || 'active'

        }
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => (state.auth.userData.userData))

    async function submit(data) {
        if (post) {
            const file = await data.image[0] ? service.uploadFile(data.image[0]) : null
            if (file) {
                service.deleteFile(post.featuredImage)
            }
            const dbPost = await service.update({ slug: post.$id, ...data, featuredImage: file ? file.$id : undefined })//in appwrite always use $id
            if (dbPost) {
                navigate(`/post/${(dbPost).$id}`)
            }
        }
        else {
            console.log(data.image[0])
            const file =  data.image[0] ? await service.uploadFile(data.image[0]) : null
            console.log(file.$id)
            console.log(userData)
            const dbPost = await service.post({ ...data, userID: userData.$id, featuredImage: file ? file.$id : undefined })//in appwrite always use $id
            if (dbPost) {
                navigate(`/post/${(dbPost).$id}`)
            }

        }



    }

    const slugTransform = useCallback((title)=>{
        if(typeof(title)==='string'){
            return title.trim().toLowerCase().replace(' ', '-')
        }
        return ""

    }, [])

    useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name=='title'){
                setValue('slug', slugTransform(value.title,{shouldValidate:true}))
            }
        })
        return ()=>{
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.filePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm