import React from "react";
import DragEditDiv from "@/components/DEDiv";
import EditDiv from "@/components/EditDiv";
import CVImage from "../CVImage";

interface Props {
    themeColor: string;
}

const Template1 = ({themeColor}:Props) => {
    return (
        <>
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize overflow-auto" id="cv_template">
                <div style={{backgroundColor: themeColor}} className="flex gap-4 justify-start items-center text-white p-4">
                    <CVImage/>
                    <div className="w-full">
                        <DragEditDiv className="text-3xl font-bold py-4 w-full h-full" contentEditable spellCheck={false}>John Doe</DragEditDiv>
                        <DragEditDiv className="text-xl py-4 font-semibold w-full h-full" contentEditable> Web developer </DragEditDiv>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-end col-span-1">
                        <DragEditDiv contentEditable className="text-xl mt-4 mb-2 pb-1"> Profile </DragEditDiv>
                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold" contentEditable> Name </DragEditDiv>
                            <DragEditDiv contentEditable spellCheck={false}> John Doe </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold" contentEditable> Date of birth </DragEditDiv>
                            <DragEditDiv contentEditable> 1 January 2000 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold" contentEditable> Address </DragEditDiv>
                            <DragEditDiv contentEditable> Nasirabad Housing society {"\n"} Chittagong, Bangladesh </DragEditDiv>
                        </div>
                        <div className="py-2 text-sm">
                            <DragEditDiv contentEditable className="text-xl mt-4 mb-2 pb-1"> Awards </DragEditDiv>
                            <DragEditDiv className="font-bold" contentEditable> Champion at Divisional Physics Olympiad </DragEditDiv>
                            <DragEditDiv contentEditable> 27 December 2002 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold" contentEditable> Second Runners Up at Coderush Hackathon </DragEditDiv>
                            <DragEditDiv contentEditable> 20 March 2023 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv contentEditable className="text-xl mt-4 mb-2 pb-1"> Contacts </DragEditDiv>
                            <DragEditDiv contentEditable> 01831234567 </DragEditDiv>
                            <DragEditDiv contentEditable> johndoe@gmail.com </DragEditDiv>
                        </div>
                    </div>

                    <div className="col-span-2 text-sm pr-2">
                        <DragEditDiv className="shadow bg-gray-200 pl-1 my-2">
                            <EditDiv className="text-xl font-semibold pt-2 mb-2 pb-1" contentEditable> Skills </EditDiv>
                            <EditDiv contentEditable className="whitespace-pre-wrap pb-2">
                                1. React js{'\n'}
                                2. Node js{'\n'}
                                3. Express js{'\n'}
                                4. SQL{'\n'}
                                5. Python
                            </EditDiv>
                        </DragEditDiv>
                        <DragEditDiv className="shadow bg-gray-200 pt-2 pl-1 pb-1 my-2">
                            <EditDiv className="text-xl font-semibold pt-2 mb-2 pb-1" contentEditable> Work Experience </EditDiv>
                            <EditDiv contentEditable className="whitespace-pre-wrap pb-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam?
                            </EditDiv>
                        </DragEditDiv>

                        <DragEditDiv className="shadow bg-gray-200 pt-2 pl-1 pb-1 my-2">
                            <EditDiv className="text-xl font-semibold pt-2 mb-2 pb-1" contentEditable> Education </EditDiv>
                            <EditDiv contentEditable className="whitespace-pre-wrap pb-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam?
                            </EditDiv>
                        </DragEditDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template1;