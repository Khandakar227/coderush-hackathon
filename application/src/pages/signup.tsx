import Link from "next/link"

function SignUp() {
  return (
    <div className='grid place-items-center custom-h bg-hero'>
        <form className='p-4 border shadow rounded-md glass-morph'>
            <h2 className='text-3xl text-center font-bold py-4'> Sign up </h2>
            <label htmlFor="username" className='mt-6 text-slate-600'> Name:</label>
            <input name='username' type='text' placeholder='Enter your email address' className='p-4 rounded-md shadow-md border my-2 w-full'/>
            <label htmlFor="password" className='mt-6 text-slate-600'> Password:</label>
            <input name='password' type='password' placeholder='Enter your password' className='p-4 rounded-md shadow-md border my-2 w-full'/>
            <label htmlFor="confirm_password" className='mt-6 text-slate-600'> Confirm Password:</label>
            <input name='confirm_password' type='password' placeholder='Confirm your password' className='p-4 rounded-md shadow-md border my-2 w-full'/>
            <div className='w-full'>
                <button className='py-4 px-8 my-4 bg-black text-white rounded-md mx-auto w-full'> Create an account </button>
            </div>
            <Link href='/forgot-password'> <p className='my-4 text-blue-700'> Already have an account? </p> </Link>
        </form>
    </div>
  )
}

export default SignUp