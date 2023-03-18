import ReactMarkdown from 'react-markdown';
import { ClientDataProps } from "@/utils/types";

function Template1({
  clientData,
  displayPhoto,
  theme,
  fullPage,
}: {
  clientData: ClientDataProps;
  theme: {color:string, bg: string};
  displayPhoto: string;
  fullPage?:boolean
}) {

  return (
    <div className={`bg-white ${ fullPage ? "": "text-sm"} w-full h-full border shadow overflow-auto`} id="cv_template">
      <div className={`${theme.color} ${theme.bg} px-4 py-8 flex gap-4 justify-start items-center`}>
        <img
          src={displayPhoto || "/assets/dp_temp.png"}
          alt={clientData?.username[0] || "User name"}
          className="h-20 rounded-lg border shadow"
        />
        <div>
          <p className={`${fullPage ? "text-2xl":"text-lg"} font-bold py-1`}> {clientData?.username[0]} </p>
          <p className="py-1"> {clientData?.profession} </p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-blue-600 font-bold py-1"> Personal </h4>
          <hr />
          <table cellSpacing="5">
            <tbody>
              <tr className="py-4 border-y-2">
                <td className="field py-1"> Name </td>
                <td className="field-value py-1"> {clientData?.username[0]} </td>
              </tr>

              <tr className="py-4 border-y-2">
                <td className="field py-1"> Date of Birth </td>
                <td className="field-value py-1">{clientData?.date_of_birth[0]}</td>
              </tr>

              <tr className="py-4 border-y-2">
                <td className="field py-1"> Adddress </td>
                <td className="field-value py-1">
                  {clientData?.city[0]} {clientData?.city.length ? "," : ""}
                  {clientData?.country[0]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1"> Contact </h4>
          <hr />
          <table cellSpacing="5" className="text-sm py-1">
            <tbody>
              <tr className="py-4 border-y-2">
                <td className="field py-1"> Mobile no. </td>
                <td className="field-value py-1"> {clientData?.phone[0]} </td>
              </tr>

              <tr className="py-4 border-y-2">
                <td className="field py-1"> Email </td>
                <td className="field-value py-1"> {clientData?.email[0]} </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1"> About </h4>
          <hr />
            <p className="whitespace-pre-wrap py-1">
              <ReactMarkdown>
                {clientData?.about[0]}
              </ReactMarkdown>
            </p>
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1">
            Educational Qualifications
          </h4>
          <hr />
          <p className="whitespace-pre-wrap py-1">
          <ReactMarkdown>
            {clientData?.education[0]}
          </ReactMarkdown>
            </p>
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1"> Skillset </h4>
          <hr />
          {clientData?.skills.map((skill, i) => (
            <p key={`${i}. ${skill}`} className="py-1">
              {i + 1}. {skill}
            </p>
          ))}
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
            <h4 className="text-sm text-blue-600 font-bold py-1"> Experience </h4>
            <hr/>
            <p className="whitespace-pre-wrap py-1">
            <ReactMarkdown>
              {clientData?.experience ? clientData?.experience[0] : ""}
            </ReactMarkdown>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Template1;
