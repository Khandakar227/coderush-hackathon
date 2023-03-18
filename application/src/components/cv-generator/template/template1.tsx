import { ClientDataProps } from "@/utils/types";

function Template1({
  clientData,
  displayPhoto,
  theme,
}: {
  clientData: ClientDataProps;
  theme: {color:string, bg: string};
  displayPhoto: string;
}) {

  return (
    <div className="bg-white text-sm w-full h-full border shadow overflow-auto">
      <div className={`${theme.color} ${theme.bg} px-4 py-8 flex gap-4 justify-start items-center`}>
        <img
          src={displayPhoto || "/assets/dp_temp.png"}
          alt={clientData?.username[0] || "User name"}
          className="h-20 rounded-lg border shadow"
        />
        <div>
          <p className="text-lg font-bold"> {clientData?.username[0]} </p>
          <p> {clientData?.profession} </p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="m-1 p-4 border rounded-md bg-gray-100">
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
                <td className="field-value">{clientData?.date_of_birth[0]}</td>
              </tr>

              <tr className="py-4 border-y-2">
                <td className="field"> Adddress </td>
                <td className="field-value">
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

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1"> About </h4>
          <hr />
          <p className="whitespace-pre-wrap">{clientData?.about[0]}</p>
        </div>

        <div className="m-1 p-4 border rounded-md bg-gray-100">
          <h4 className="text-sm text-blue-600 font-bold py-1">
            Educational Qualifications
          </h4>
          <hr />
          <p className="whitespace-pre-wrap">{clientData?.education[0]}</p>
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
            <p className="whitespace-pre-wrap"> {clientData?.experience ? clientData?.experience[0] : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Template1;
