function CVgenerator() {
  return (
    <div className="p-4 custom-h flex justify-between items-center bg-hero">
        <form className="glass-morph p-4">
            <Input label="Name" name="username" type="text" placeholder="Enter your name"/>      
            <Input label="Profession" name="profession" type="text" placeholder="e.g. Fullstack web developer"/>      
            <Input label="City" name="city" type="text" placeholder="e.g. Dhaka"/>
            <Input label="Country" name="country" type="text" placeholder="e.g. Bangladesh"/>      
            <Input label="Phone" name="phone" type="number" placeholder="e.g 01812345678"/>      
            <Input label="Email" name="email" type="email" placeholder="e.g. johndoe@gmail.com"/>
            <hr />
            <Input label="Date of Birth" name="date_of_birth" type="date" placeholder="e.g. 27 December 2002"/>
        </form>
    </div>
  )
}

const Input = ({label, name, placeholder, type}:{label:string, name:string, placeholder:string, type:string}) => {
    return (
        <div className="py-4">
            <label> {label}: </label>
            <input name={name} placeholder={placeholder} type={type} className="rounded-md p-2 shadow-sm w-full"/>
        </div>
    )
}
export default CVgenerator