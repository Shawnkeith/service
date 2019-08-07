import React from 'react';

const Shoe = (props) => {
  return (
    <div className='scroll'>
          {props.indexArr.map((num,i) => {
            console.log(num)
              return(
                <div key={i}>
              <u>{props.shoes[num][1] + ' ' + props.shoes[num][0]}</u>
                  <img key={i} onClick={props.click} className="shoe" height={40} src={props.shoes[num][3]} />
                <u>{props.shoes[num][2]}</u>
              </div>
            )
          })         
        }
      </div>
  );
};
  
  export default Shoe;
