import { ClientDataProps } from "@/utils/types";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Template2({
  clientData,
  displayPhoto,
  theme,
  fullPage,
}: {
  clientData: ClientDataProps;
  theme: { color: string; bg: string };
  displayPhoto: string;
  fullPage?: boolean;
}) {
  const [skills, setSkills] = useState([""]);
  useEffect(() => {
    if (!clientData?.skills.length) return;
    setSkills(clientData.skills.filter(skill => skill))
    console.log(skills);
  }, [clientData?.skills]);
  return (
    <div
      className={`bg-white ${
        fullPage ? "" : ""
      } w-full h-full border shadow overflow-auto p-4`}
      id="cv_template"
    >
      <div className="flex justify-start gap-4 items-revert">
        <img
          src={displayPhoto || "/assets/dp_temp.png"}
          alt={clientData?.username[0] || "User name"}
          className="h-52 border shadow"
        />
        <div className="grid items-stretch">
          <p className={`${fullPage ? "text-7xl" : "text-5xl"} font-bold py-1`}>
            {clientData?.username[0]}
          </p>
          <p className="py-1"> {clientData?.profession} </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 justify-between gap-1">
        <div className={`${theme.bg} ${theme.color} p-2`}>
          <div className="pt-4">
            <h4 className="text-2xl font-bold py-1"> Experience </h4>
            <p className="whitespace-pre-wrap py-4">
              <ReactMarkdown>
                {clientData?.experience ? clientData?.experience[0] : ""}
              </ReactMarkdown>
            </p>
          </div>
          <div className="pt-4">
            <h4 className="text-2xl font-bold py-1"> About </h4>
            <p className="whitespace-pre-wrap py-4">
              <ReactMarkdown>
                {clientData?.about ? clientData?.about[0] : ""}
              </ReactMarkdown>
            </p>
          </div>

          <div className="pt-4">
            <h4 className="text-2xl font-bold py-1"> Skillset </h4>
            {skills.map((skill, i) =>
              skill ? (
                <p key={`${i}. ${skill}`} className="py-1">
                  {i + 1}. {skill}
                </p>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-2xl font-bold py-1"> Personal </h4>
          <table cellSpacing="5">
            <tbody>
              <tr className="py-4 border-y-2">
                <td className="field py-1"> Name </td>
                <td className="field-value py-1">{clientData?.username[0]}</td>
              </tr>

              <tr className="py-4 border-y-2">
                <td className="field py-1"> Date of Birth </td>
                <td className="field-value py-1">
                  {clientData?.date_of_birth[0]}
                </td>
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
          <hr />

          <h4 className="text-2xl font-bold pt-4 py-2"> Contact </h4>
          <table cellSpacing="5">
            <tbody>
              <tr className="py-4 border-y-2">
                <td className="field py-1"> Mobile no. </td>
                <td className="field-value py-1">{clientData?.phone[0]}</td>
              </tr>
              <tr className="py-4 border-y-2">
                <td className="field py-1"> Email </td>
                <td className="field-value py-1"> {clientData?.email[0]} </td>
              </tr>
            </tbody>
          </table>
          <hr />

          <h4 className="text-2xl font-bold pt-4 py-2"> Education </h4>
          <p className="whitespace-pre-wrap py-1">
            <ReactMarkdown>{clientData?.education[0]}</ReactMarkdown>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Template2;
