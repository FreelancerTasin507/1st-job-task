import { useEffect, useState } from "react";

const Bookmarked = () => {
  const [formData, setFormData] = useState([]);

  console.log(formData);

  useEffect(() => {
    // Retrieve the form data array from local storage
    const storedFormData = JSON.parse(localStorage.getItem("form-data")) || [];

    // Set the form data in the component state
    setFormData(storedFormData);
  }, []);

  return (
    <div className="mt-20">
      <div className="overflow-x-auto">
        <table className="w-[100%] border">
          <thead>
            <tr className="bg-gray-200">
              <th className="">Name</th>
              <th className=" ">Email</th>
              <th className=" ">Ticket Amount</th>
              <th className=" ">Movie Name</th>
            </tr>
          </thead>
          <tbody >
            {formData.map((data, index) => (
              <tr key={index}>
                <td className="p-2 md:pl-32">{data?.UserName}</td>
                <td className="p-2 md:pl-10">{data?.email}</td>
                <td className="p-2 md:pl-10">{data?.ticketAmount}</td>
                <td className="p-2 md:pl-10">{data?.moiveName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookmarked;
