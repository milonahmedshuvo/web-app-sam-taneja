"use client"

import { useUserLoginMutation } from "@/redux/api/auth/authApi"
import Link from "next/link"
import { useState } from "react"



export default function SignupFormCustomer() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loginUser, {data} ] = useUserLoginMutation()
    
  console.log("login", data)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  
  const validateForm = () => {
    let isValid = true
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    }

    


    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
      isValid = false
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters."
      isValid = false
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }






  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
    //   setIsSubmitted(true)
    const payload = {
        email: formData.email,
        password: formData.password
      };



      try {
        const res = await loginUser(payload).unwrap();
        console.log('Success:', res);
          setIsSubmitted(true)
          setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            newsletter: false,})
      } catch (error) {
        console.error('Error:', error);
      }









      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }
  }




  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden rounded-lg bg-white ">
     <div className="text-xl font-[500] text-[#2c65af] flex gap-1 mulish cursor-pointer">
        <Link href='/signupForAdmin' ><p>Create Admin</p></Link>
        <span>/</span>
        <Link href='/signupForCustomer' ><p>Create Customer</p></Link>
     </div>

      <div className="flex justify-center items-center my-20">


       




        {/* Form section */}
        <div className="p-6 md:p-8 md:w-3/5 bg-[#2c65af] text-white rounded">
          <h1 className="text-2xl font-bold mb-6 text-center"> DealNews Account Sign-in</h1>

          {isSubmitted && (
            <div className="mb-4 p-3 bg-green-500 text-white rounded-md">Login successfully!</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            

            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jsmith@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md text-black ${errors.email ? "border-2 border-red-500" : "border border-gray-300"}`}
              />
              {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md text-black ${errors.password ? "border-2 border-red-500" : "border border-gray-300"}`}
              />
              {errors.password && <p className="text-red-300 text-sm">{errors.password}</p>}
            </div>

            <div className="space-y-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Password (again)"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md text-black ${errors.confirmPassword ? "border-2 border-red-500" : "border border-gray-300"}`}
              />
              {errors.confirmPassword && <p className="text-red-300 text-sm">{errors.confirmPassword}</p>}
            </div>

           

            <div className="flex items-start space-x-3 py-4">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
              />
              <label htmlFor="newsletter" className="text-sm">
                Yes, subscribe me to the DealNews Select Newsletter, featuring the days hottest deals.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-white !text-[#2c65af] font-[500] hover:bg-gray-100 py-2 px-4 rounded-md  transition-colors cursor-pointer "
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
