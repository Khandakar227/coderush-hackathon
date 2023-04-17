import React, { useRef, useState } from "react";
import JsPDF, {HTMLFontFace} from "jspdf";
import { BiMap, BiMailSend, BiPhone } from "react-icons/bi"
import DragEditDiv from "@/components/DEDiv";
import CVImage from "../CVImage";

interface Props {
    themeColor: string;
}

const Template1 = ({themeColor}:Props) => {
    return (
        <>
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize overflow-auto" id="cv_template">
                <div className="grid grid-cols-4 justify-start items-start gap-1">
                    <div className="col-span-2 p-4 max-w-[15.5rem]" style={{backgroundColor: themeColor}}>
                        <div className="pt-8 pb-12">
                            <CVImage className="w-40 shadow mx-auto"/>
                        </div>
                        <DragEditDiv className="pt-4 text-2xl text-white font-semibold"> About me </DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Date of birth: May 26, 1978</DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Nationality: Bangladeshi</DragEditDiv>
                        <DragEditDiv className="text-white py-2 pb-4"> Address: Dhaka, Bangladesh </DragEditDiv>

                        <DragEditDiv className="pt-4 text-2xl text-white font-semibold"> Contact </DragEditDiv>
                        <DragEditDiv>
                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <BiMap className="col-span-1 w-10 scale-125 text-white"/>
                                <DragEditDiv className="col-span-5 text-white py-2"> House no. 3, Sector 4, Uttara, Dhaka, Bangladesh </DragEditDiv>
                            </div>
                            
                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <BiMailSend className="col-span-1 w-10 scale-125 text-white"/>
                                <DragEditDiv className="col-span-5 text-white py-2"> johndoe@gmail.com </DragEditDiv>
                            </div>
                            
                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <BiPhone className="col-span-1 w-10 scale-125 text-white"/>
                                <DragEditDiv className="col-span-5 text-white py-2"> +949596778251 </DragEditDiv>
                            </div>
                        </DragEditDiv>

                        <DragEditDiv className="pt-4 text-2xl text-white font-semibold"> Interests </DragEditDiv>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default Template1;