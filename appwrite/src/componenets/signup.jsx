import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import  authService  from '../appwrite/auth'

export function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(null)
    const signup = async (data) => {
        console.log("signUp")
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                console.log("opopopop")
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
            else {

            }
        } catch (error) {
            setError(error)
        }





    }
    return (
        <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Create your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
            <Input placeholder="enter ur name" label="Name" type="text" {...register("name",{
                    required:true, validate:{}
                })}  />
                <Input placeholder="enter ur mail" label="Email" type="email" {...register("email",{
                    required:true, validate:{matchPattern:(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",}
                })}  />
                <Input placeholder="password" label="Password" type="password" {...register("password",{
                    required:true
                })}  />
                <Button type='submit'className='w-full'>create account</Button>
            </div>
        </form>

        </div>

    )
}

