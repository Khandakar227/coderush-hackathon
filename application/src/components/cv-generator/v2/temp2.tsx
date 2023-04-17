import React from "react";
import DragEditDiv from "@/components/DEDiv";
import CVImage from "../CVImage";
import EditDiv from "@/components/EditDiv";

interface Props {
    themeColor: string;
}

const Template2 = ({ themeColor }: Props) => {

    return (
        <>
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize overflow-auto" id="cv_template">
                <div className="grid grid-cols-12 justify-start items-start gap-4">
                    <div className="col-span-5 p-4 max-w-[15.5rem]" style={{ backgroundColor: themeColor }}>
                        <div className="pt-8 pb-12">
                            <CVImage className="w-40 shadow mx-auto" />
                        </div>
                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> About me </DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Date of birth: May 26, 1978</DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Nationality: Bangladeshi</DragEditDiv>
                        <DragEditDiv className="text-white py-2 pb-4"> Address: Dhaka, Bangladesh </DragEditDiv>

                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> Contact </DragEditDiv>
                        <DragEditDiv>
                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <DragEditDiv className="col-span-5 text-white py-2"> House no. 3, Sector 4, Uttara, Dhaka, Bangladesh </DragEditDiv>
                            </div>

                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <DragEditDiv className="col-span-5 text-white py-2"> johndoe@gmail.com </DragEditDiv>
                            </div>

                            <div className="grid grid-cols-6 gap-1 items-baseline justify-start">
                                <DragEditDiv className="col-span-5 text-white py-2"> +949596778251 </DragEditDiv>
                            </div>
                        </DragEditDiv>

                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> Interests </DragEditDiv>
                        <DragEditDiv className="text-white">
                            <EditDiv contentEditable className="whitespace-pre-wrap pb-2">
                                Football{'\n'}

                                Online gaming{'\n'}

                                Problem Solving{'\n'}

                                Music
                            </EditDiv>
                        </DragEditDiv>
                    </div>

                    <div className="col-span-7">
                        <DragEditDiv fontSize={48} className="font-bold pt-14"> Jhon Doe </DragEditDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template2;