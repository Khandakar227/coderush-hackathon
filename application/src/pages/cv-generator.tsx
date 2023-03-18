import React, { useState } from "react";
import Input from "@/components/cv-generator/Input";

interface ClientDataProps {
  about: string[];
  city: string[];
  country: string[];
  date_of_birth: string[];
  display_picture: string[];
  education: string[];
  email: string[];
  phone: string[];
  profession: string[];
  skills: string[];
  username: string[];
  [key:string]: any;
}

function CVgenerator() {
  const [clientData, setClientData] = useState<ClientDataProps>();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    const data = {} as ClientDataProps;
    
    for (const [name, value] of formData.entries()) {
        // If the field name already exists in the data object, push the new value to the existing array
        if (data[name]) {
          data[name].push(value);
        } else {
          // If the field name doesn't exist in the data object, create a new array with the first value
          data[name] = [value];
        }
      }
    console.log(data);
    
    setClientData(data);
  };
  return (
    <div className="p-4 min-custom-h lg:flex justify-between items-center">
      <div className="p-1">
        <div className="glass-morph my-4">
          <h2 className="text-xl p-4 font-bold"> Themes </h2>
          <div className="flex gap-4 p-2">
            <button className="w-8 h-8 bg-red-400 rounded-2xl border shadow border-black"></button>
            <button className="w-8 h-8 bg-blue-400 rounded-2xl border shadow border-black"></button>
            <button className="w-8 h-8 bg-yellow-400 rounded-2xl border shadow border-black"></button>
            <button className="w-8 h-8 bg-lime-400 rounded-2xl border shadow border-black"></button>
          </div>
        </div>

        <form className="glass-morph p-4" onSubmit={handleFormSubmit}>
          <h3 className="text-xl p-4 font-bold"> Display pictue </h3>
          <input
          
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-black dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-white dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:text-black hover:file:bg-neutral-200 focus:border-primary focus:text-black focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
            id="display_picture"
            type="file"
            name="display_picture"
          />
          <h3 className="text-xl p-4 font-bold"> Personal Information </h3>
          <Input
            label="Name"
            name="username"
            type="text"
            placeholder="Enter your name"
          />
          <Input
            label="Profession"
            name="profession"
            type="text"
            placeholder="e.g. Fullstack web developer"
          />
          <Input
            label="City"
            name="city"
            type="text"
            placeholder="e.g. Dhaka"
          />
          <Input
            label="Country"
            name="country"
            type="text"
            placeholder="e.g. Bangladesh"
          />
          <Input
            label="Phone"
            name="phone"
            type="number"
            placeholder="e.g 01812345678"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="e.g. johndoe@gmail.com"
          />
          <Input
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            placeholder="e.g. 27 December 2002"
          />
          <hr className="my-4" />
          <h3 className="text-xl p-4 font-bold"> About </h3>
          <Input
            element="textarea"
            label="Write something about your self"
            name="about"
            type="text"
            placeholder="e.g. I am a UI/UX designer. I like to create artistic UI..."
          />

          <hr className="my-4" />
          <h3 className="text-xl p-4 font-bold">
            
            Educational Qualifications
          </h3>
          <Input
            element="textarea"
            label="Tell us about your educational background"
            name="education"
            type="text"
            placeholder="e.g Studied at Chittagong collegiate school 2017-19"
          />

          <h3 className="text-xl p-4 font-bold"> Skillset </h3>
          <Input
            label="skills"
            name="skills"
            type="text"
            placeholder="e.g. Web development"
          />
          <Input label="" name="skills" type="text" placeholder="e.g. Python" />
          <Input
            label=""
            name="skills"
            type="text"
            placeholder="e.g. Web designer"
          />
          <Input
            label=""
            name="skills"
            type="text"
            placeholder="e.g. Product manager"
          />
          <Input
            label=""
            name="skills"
            type="text"
            placeholder="e.g. Content writer"
          />
          <button
            className="my-4 py-4 px-8 shadow rounded-md bg-black text-white"
            type="submit"
          >
            
            Submit
          </button>
        </form>
      </div>
      <div className="lg:fixed top-[68px] custom-h md:max-w-2xl w-full md:right-[10px] p-4">
        <div className="bg-white text-sm w-full h-full border shadow">
          <div className="bg-blue-600 text-white px-4 py-8 flex gap-4 justify-start items-center">
            <img
              src="/assets/dp_temp.png"
              alt="khandakar"
              className="w-20 h-20 rounded-lg border shadow"
            />
            <div>
              <p className="text-lg font-bold"> {clientData?.username} </p>
              <p> {clientData?.profession} </p>
            </div>
          </div>
          <div className="m-4 p-4 border rounded-md bg-gray-100">
            <h4 className="text-blue-600 font-bold py-1"> Personal </h4>
            <hr />
            <table cellSpacing="5">
              <tbody>
                <tr className="py-4 border-y-2">
                  <td className="field"> Name </td>
                  <td className="field-value"> {clientData?.username[0]} </td>
                </tr>

                <tr className="py-4 border-y-2">
                  <td className="field"> Date of Birth </td>
                  <td className="field-value"> {clientData?.date_of_birth[0]} </td>
                </tr>

                <tr className="py-4 border-y-2">
                  <td className="field"> Adddress </td>
                  <td className="field-value"> {clientData?.city[0]} {clientData?.city.length ?",":""} {clientData?.country[0]} </td>
                </tr> 
              </tbody>
            </table>
          </div>

          <div className="m-4 p-4 border rounded-md bg-gray-100">
            <h4 className="text-sm text-blue-600 font-bold py-1"> Contact </h4>
            <hr />
            <table cellSpacing="5" className="text-sm">
              <tbody>
                <tr className="py-4 border-y-2">
                  <td className="field"> Mobile no. </td>
                  <td className="field-value"> {clientData?.phone[0]} </td>
                </tr>

                <tr className="py-4 border-y-2">
                  <td className="field"> Email </td>
                  <td className="field-value"> {clientData?.email[0]} </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="m-4 p-4 border rounded-md bg-gray-100">
            <h4 className="text-sm text-blue-600 font-bold py-1"> About </h4>
            <hr />
            <p className="whitespace-pre-wrap">{clientData?.about[0]}</p>
          </div>

          <div className="m-4 p-4 border rounded-md bg-gray-100">
            <h4 className="text-sm text-blue-600 font-bold py-1"> Educational Qualifications </h4>
            <hr />
            <p className="whitespace-pre-wrap">{clientData?.education[0]}</p>
          </div>

          <div className="m-4 p-4 border rounded-md bg-gray-100">
            <h4 className="text-sm text-blue-600 font-bold py-1"> Skillset </h4>
            <hr />
            {clientData?.skills.map((skill,i) => <p key={`${i}. ${skill}`} className="py-1"> {i+1}.{skill}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVgenerator;
