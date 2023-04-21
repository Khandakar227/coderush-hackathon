import JsPDF, {HTMLFontFace} from "jspdf";
import { AiOutlineUndo, AiOutlineRedo } from "react-icons/ai"
import UndoRedoProvider, { useUndoRedo } from "@/context/undoRedo";
import React, { ChangeEvent, useState } from "react";
import ColorPicker from "@/components/ColorPicker";
import Template1 from "@/components/cv-generator/v2/temp1";
import Template2 from "@/components/cv-generator/v2/temp2";

const templates = [
    {template:Template1, label: "General"},
    {template: Template2, label: "Professional"}
];

const V2 = () => {
    const [theme, setTheme] = useState("#4338ca");
    const [templateNumber, setTemplate] = useState(0);
    const { undo, redo } = useUndoRedo();

    const changeTemplate = (e: ChangeEvent) => {
        setTemplate(+(e.target as HTMLSelectElement).value)
    }

    // Convert CV to PDF
    const generatePDF = () => {
        
        let loraFonts:HTMLFontFace[] = [{
            family: 'Lora',
            src: [{format: 'truetype', url: '/fonts/lora/static/Lora-Bold.ttf'}],
            weight: "bold"
        },
        {
            family: 'Lora',
            src: [{format: 'truetype', url: '/fonts/lora/Lora-VariableFont_wght.ttf'}],
            weight: "normal"
        }
    ]
    
    const report = new JsPDF("p", "pt", "a4", true);
    // Get the html element using selector
    const cv = document.querySelector("#cv_template") as HTMLElement;
    report
        .html(cv, {
            windowWidth: cv.clientWidth + cv.clientWidth/3,
            width: cv.clientWidth,
            autoPaging: "text",
            fontFaces: [...loraFonts],
            margin: [0, 0, 0, 0]
        })
        .then(() => {
            report.save("cvrush.pdf");
        });
    };


    return (
        <>
            <div className="bg-white p-3 flex shadow-md justify-between gap-4">
                <div className="flex justify-start gap-4 items-center">
                    <select className="p-2 border shadow rounded-sm" value={templateNumber} onChange={changeTemplate}>
                        {templates.map((temp, i) => <option key={`template-number ${i}`} value={i}> {temp.label} </option>)}
                    </select>
                    <button className="p-1" title="Undo" onClick={undo}><AiOutlineUndo className="scale-125" /></button>
                    <button className="p-1" title="Redo" onClick={redo}><AiOutlineRedo className="scale-125" /></button>
                    <ColorPicker theme={theme} setTheme={setTheme} />
                </div>
                <button className="px-2 py-1 rounded-md text-white bg-slate-900 text-sm" onClick={generatePDF}> Export </button>
            </div>
            <div className="min-custom-h h-full w-full grid justify-center items-stretch p-4">
                {templates[templateNumber].template({themeColor:theme})}
            </div>
        </>
    );
}

export default function CVGenV2() {
    return (
        <UndoRedoProvider>
            <V2 />
        </UndoRedoProvider>
    )
};
