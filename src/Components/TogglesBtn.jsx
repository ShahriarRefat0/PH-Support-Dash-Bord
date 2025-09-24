import React from 'react';
import Container from './Container';

const TogglesBtn = ({ toggleStatus, setToggleStatus }) => {

  const btns = ["All", "Pending", "Submitted", "Reviewed"]


  return (
    
      <Container>
        <div className="text-right mb-[50px] mt-[50px]">

          {
            btns.map((btn, ind) => {

              return (
                <button
                  key={ind}
                  className={`${ind == 0 && "rounded-l-lg"} ${ind == btns.length-1 && "rounded-r-lg"} toggle-btn ${
                    toggleStatus == btn && "!bg-purple-500 !text-white"
                  }`}
                  onClick={() => setToggleStatus(btn)}
                >
                  {btn}
                </button>
              );})
          }
          
        </div>
      </Container>

  );
};

export default TogglesBtn;      