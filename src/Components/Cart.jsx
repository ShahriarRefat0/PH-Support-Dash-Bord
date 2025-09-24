import React from 'react';

const Cart = ({ issue, data, setData }) => {
  
  const handleClick = () => {
    const currentData = data.find((elem) => elem.ticketId == issue.ticketId);

    const restData = data.filter((elem) => elem.ticketId != issue.ticketId);

    if (currentData.status == "Pending") {
      currentData.status = "Submitted";
    } else if (currentData.status == "Submitted") {
      currentData.status = "Reviewed";
    }
    setData([currentData,...restData])
  
}


  return (
    <div className="shadow-md rounded-md cursor-pointer bg-slate-100 p-5" onClick={handleClick}>
      <div>
        <img
          src={issue.userImg}
          className="h-[80px] w-[80px] rounded-full "
          alt="{issue.requestedBy}"
        />
        <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="text-[26px] font-bold">{issue.subject}</h2>
        <div className="">
          <span
            className={`${
              issue.priority == "High"
                ? "text-red-500 bg-red-100"
                : issue.priority == "Medium"
                ? "text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            } font-semibold py-1 px- shadow rounded mr-2 px-2`}
          >
            {issue.priority}
          </span>
          <span
            className={`${
              issue.status == "Pending"
                ? "text-red-500 bg-red-100"
                : issue.status == "Submitted"
                ? "text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            } font-semibold py-1 px- shadow rounded mr-2 px-2`}
          >
            {issue.status}
          </span>
        </div>
      </div>
      <p className="text-[17px] text-black ">{issue.description}</p>
    </div>
  );
};

export default Cart;
