import WaveBg from "@/components/WaveBg";
import CVImage from "../CVImage";
import DragEditDiv from "@/components/DEDiv";

interface Props {
    themeColor: string;
}

function Template3({themeColor}:Props) {

    return (
    <>
        <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize-x overflow-auto" id="cv_template">
            <WaveBg themeColor={themeColor}/>
            <div className="grid grid-cols-12">
                <div className="col-span-5 pl-4">
                    <div className="pt-12">
                        <CVImage className="mx-auto" width={200}/>
                    </div>
                    <DragEditDiv fontSize={35} className="font-bold text-center"> Jhon Doe </DragEditDiv>
                    <DragEditDiv fontSize={20} className="text-center"> Product manager </DragEditDiv>

                    <DragEditDiv className="text-justify py-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel enim tempora, dignissimos similique doloribus mollitia aut soluta rerum natus ipsam repudiandae, obcaecati consequuntur laborum dolorem quis inventore maiores accusantium corporis.
                    </DragEditDiv>

                    <DragEditDiv style={{background: themeColor}} className="text-white py-2 px-2 mt-2 font-bold rounded-br-xl rounded-tl-xl text-center" > SKILLS </DragEditDiv>

                    <DragEditDiv style={{background: themeColor}} className="text-white py-2 px-2 mt-2 font-bold rounded-br-xl rounded-tl-xl text-center" > CONTACT </DragEditDiv>
                </div>
            </div>
        </div>
    </>
  )
}

export default Template3