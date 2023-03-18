import React, { useState, useEffect } from "react";
import Input from "@/components/cv-generator/Input";
import { CVDataStorageName, CVPhotoStorageName } from "@/config";
import { ClientDataProps } from "@/utils/types";
import Template1 from "@/components/cv-generator/template/template1";
import ShareButton from "@/components/cv-generator/ShareButton";
import JsPDF from 'jspdf';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const themeData = [
  {color: "text-white", bg: "bg-green-500"},
  {color: "text-black", bg: "bg-yellow-200"},
  {color: "text-white", bg: "bg-red-500"},
  {color: "text-white", bg: "bg-gray-800"},
  {color: "text-white", bg: "bg-indigo-700"},
  {color: "text-white", bg: "bg-teal-800"},
];

function CVgenerator() {
  const [clientData, setClientData] = useState<ClientDataProps>();
  const [DisplayPhoto, setDisplayPhoto] = useState("");
  const [theme, setTheme] = useState(themeData[0]);
  const [exportURL, setURL] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(CVDataStorageName);
    const dpData = localStorage.getItem(CVPhotoStorageName);
    // console.log(dpData);
    try {
      const parsedData = JSON.parse(data as string);
      const parsedImgData = JSON.parse(dpData as string);
      
      setClientData(parsedData);
      setDisplayPhoto(parsedImgData);
    
    } catch (error) {
      console.log("Error occured", error);
    }
  }, [DisplayPhoto]);

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
    localStorage.setItem(CVDataStorageName, JSON.stringify(data));
    console.log(data);

    setClientData(data);
  };

  const onUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imgData = reader.result as string;
        setDisplayPhoto(imgData);
        localStorage.setItem(CVPhotoStorageName, JSON.stringify(imgData));
      };

      reader.readAsDataURL(file);
    }
  };

  const changeTheme = (i:number) => {
    setTheme(themeData[i]);changeTheme
  }
  
  const generatePDF = () => {
    const report = new JsPDF('landscape','pt');
    report.html(document.querySelector('#cv_template') as HTMLElement).then(() => {
        report.save(Date.now().toString()+'cv.pdf');
    });
  }
  
  return (
    <div className="p-4 min-custom-h lg:flex justify-between items-center">
      <div className="p-1">
        <div className="glass-morph my-4">
          <h2 className="text-xl p-4 font-bold"> Themes </h2>
          <div className="flex gap-4 p-2">
            {
              themeData.map((_theme, i) => (
                <button key={_theme.bg} onClick={() =>changeTheme(i)} className={`w-8 h-8 ${_theme.bg} rounded-2xl border shadow border-black`}></button>
              ))
            }
          </div>
        </div>

        <form className="glass-morph p-4" onSubmit={handleFormSubmit}>
          <h3 className="text-xl p-4 font-bold"> Display pictue </h3>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-black dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-white dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:text-black hover:file:bg-neutral-200 focus:border-primary focus:text-black focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
            id="display_picture"
            type="file"
            name="display_picture"
            accept="image/*"
            onChange={onUploadPhoto}
          />
          <h3 className="text-xl p-4 font-bold"> Personal Information </h3>
          <Input
            label="Name"
            name="username"
            type="text"
            defaultValue={clientData?.username[0]}
            placeholder="Enter your name"
          />
          <Input
            label="Profession"
            name="profession"
            type="text"
            defaultValue={clientData?.profession[0]}
            placeholder="e.g. Fullstack web developer"
          />
          <Input
            label="City"
            name="city"
            type="text"
            defaultValue={clientData?.city[0]}
            placeholder="e.g. Dhaka"
          />
          <Input
            label="Country"
            name="country"
            type="text"
            defaultValue={clientData?.country[0]}
            placeholder="e.g. Bangladesh"
          />
          <Input
            label="Phone"
            name="phone"
            type="number"
            defaultValue={clientData?.phone[0]}
            placeholder="e.g 01812345678"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            defaultValue={clientData?.email[0]}
            placeholder="e.g. johndoe@gmail.com"
          />
          <Input
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            defaultValue={clientData?.date_of_birth[0]}
            placeholder="e.g. 27 December 2002"
          />
          <hr className="my-4" />
          <h3 className="text-xl p-4 font-bold"> About </h3>
          <Input
            element="textarea"
            label="Write something about your self"
            name="about"
            type="text"
            defaultValue={clientData?.about[0]}
            placeholder="e.g. I am a UI/UX designer. I like to create artistic UI..."
          />

          <hr className="my-4" />
          <h3 className="text-xl p-4 font-bold">Educational Qualifications</h3>
          <Input
            element="textarea"
            label="Tell us about your educational background"
            name="education"
            type="text"
            defaultValue={clientData?.education[0]}
            placeholder="e.g Studied at Chittagong collegiate school 2017-19"
          />

          <h3 className="text-xl p-4 font-bold"> Skillset </h3>
          { clientData?.skills.map((skill, i) => (
              <Input
                label="skills"
                name="skills"
                type="text"
                key={`${i}. ${skill} input`}
                defaultValue={skill}
                placeholder="e.g. Web development"
              />
          )) }
          
          <h3 className="text-xl p-4 font-bold"> Experience </h3>
          <Input
            element="textarea"
            label="Experience"
            name="experience"
            type="text"
            defaultValue={clientData?.experience ? clientData?.experience[0] : ""}
            placeholder="eg. I have been working as a software engineer for a year"
          />
          
          <div className="flex gap-4 justify-evenly items-center">
            <button
              className="my-4 py-4 px-8 shadow rounded-md bg-black text-white"
              type="submit"
            >
              Submit
            </button>
              <button type="button" className="bg-[#eca22f] text-black py-4 px-8 rounded-md" onClick={generatePDF}> Export </button>
          </div>
          <hr/>
          <div className="flex my-4 justify-center items-center gap-4">
            <h3 className="py-4 font-bold">Share: </h3>
            <button> <FaLinkedin size={32} /> </button>
            <button> <FaFacebook size={32} /> </button>
          </div>
        </form>
      </div>

      <div className="lg:fixed top-[68px] custom-h md:max-w-3xl w-full md:right-[10px] p-4">
        <Template1 clientData={clientData as ClientDataProps} displayPhoto={DisplayPhoto} theme={theme}/>
      </div>
    </div>
  );
}

export default CVgenerator;
