import React, { useRef, useState } from "react";
import JsPDF from "jspdf";
import DragEditDiv from "@/components/DEDiv";
import UndoRedoProvider, { useUndoRedo } from "@/context/undoRedo";
import EditDiv from "@/components/EditDiv";

const V2 = () => {
    const photoUploadRef = useRef({} as HTMLInputElement);
    const [displayPhoto, setDisplayPhoto] = useState("");
    const {undo} = useUndoRedo();

    const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const imgData = reader.result as string;
                setDisplayPhoto(imgData);
                //   localStorage.setItem(CVPhotoStorageName, JSON.stringify(imgData));
            };

            reader.readAsDataURL(file);
        }
    }

    const onImageClick = () => {
        photoUploadRef.current.click();
    }

    // Convert CV to PDF
    const generatePDF = () => {
        const report = new JsPDF("p", "pt", "a4", true);
        // Get the html element using selector
        report
            .html(document.querySelector("#cv_template") as HTMLElement)
            .then(() => {
                report.save("cvrush.pdf");
            });
    };

    return (
        <div className="min-custom-h w-full grid justify-center items-stretch p-4">
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize overflow-auto" id="cv_template">
                <div className="flex gap-4 justify-start items-center bg-indigo-700 text-white p-4">
                    <img className="w-32 shadow" src={displayPhoto || "/assets/dp_temp.png"} onClick={onImageClick} />
                    <div className="w-full">
                        <DragEditDiv className="text-3xl font-bold py-4 w-full h-full" contentEditable spellCheck={false}>Khandakar Shakib Al Hasan</DragEditDiv>
                        <DragEditDiv className="text-xl py-4 font-semibold w-full h-full" contentEditable> Web developer </DragEditDiv>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-end col-span-1">
                        <DragEditDiv contentEditable className="text-xl border-dotted border-b-2 mt-4 mb-2 pb-1"> Profile </DragEditDiv>
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
                            <DragEditDiv contentEditable className="text-xl border-dotted border-b-2 mt-4 mb-2 pb-1"> Awards </DragEditDiv>
                            <DragEditDiv className="font-bold" contentEditable> Champion at Divisional Physics Olympiad </DragEditDiv>
                            <DragEditDiv contentEditable> 27 December 2002 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold" contentEditable> Second Runners Up at Coderush Hackathon </DragEditDiv>
                            <DragEditDiv contentEditable> 20 March 2023 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv contentEditable className="text-xl border-dotted border-b-2 mt-4 mb-2 pb-1"> Contacts </DragEditDiv>
                            <DragEditDiv contentEditable> 01831234567 </DragEditDiv>
                            <DragEditDiv contentEditable> johndoe@gmail.com </DragEditDiv>
                        </div>
                    </div>

                    <div className="col-span-2 text-sm pr-2">
                        <DragEditDiv className="shadow bg-gray-50 pt-2 pl-1 pb-1 my-2">
                            <EditDiv className="text-xl font-semibold pt-2 mb-2 border-dotted border-b-2 pb-1" contentEditable> Work Experience </EditDiv>
                            <EditDiv contentEditable> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam? </EditDiv>
                        </DragEditDiv>

                        <DragEditDiv className="shadow bg-gray-50 pt-2 pl-1 pb-1 my-2">
                            <EditDiv className="text-xl font-semibold pt-2 mb-2 border-dotted border-b-2 pb-1" contentEditable> Education </EditDiv>
                            <EditDiv contentEditable> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam? </EditDiv>
                        </DragEditDiv>
                    </div>
                </div>
            </div>
            <input type="file" accept="image/*" ref={photoUploadRef} onChange={upload} className="hidden" />
            <button className="bg-amber-200 rounded-md py-4 my-1" onClick={generatePDF}> EXPORT </button>
            <button className="bg-amber-900 rounded-md py-4 my-1" onClick={undo}> UNDO </button>
        </div>
    );
}

export default function CVGenV2() {
    return (
        <UndoRedoProvider>
            <V2 />
        </UndoRedoProvider>
    )
};
