import React, { use, useState } from 'react';
import Container from './Container';
import TogglesBtn from './TogglesBtn';
import Counter from './Counter';
import Cart from './Cart';

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  // console.log({ toggleStatus, data });
  const filteredData = toggleStatus == "All" ? data : data.filter((element) => element.status == toggleStatus)

console.log(filteredData)

  return (
    <div>
      <Counter data={data}></Counter>

      <TogglesBtn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></TogglesBtn>

      <Container>
        {filteredData.length == 0 ? (<h2 className='font-bold text-xl text-center mb-9 text-purple-500 text-shadow-2xs'>No Data</h2>) : (
          <div className="grid grid-cols-3 gap-[18px] p-4">
          {filteredData.map((issue, ind) => {
            return <Cart key={ind} issue={issue} data={data} setdata={setData}></Cart>;
          })}
        </div>)
        }
      </Container>
    </div>
  );
};

export default IssuesManagement;