import React from "react";

export const ChatCarts = (props) => {
  const { name, img, msg1, msg2, style, flag } = props;
  return (
    <div className="chatcart" style={{background: style}}>
      <div>
        <img style={{position:'relative', top:'5px'}} src={img} />
        
      </div>
      <div>
        <div className="msg">
        <p style={{fontWeight: "bolder"}}>{name}</p>
        {
            flag == 1 && <p style={{border: '1px solid', padding: '2px', borderRadius: '2px', background: '#C44334', color: 'white'}}>2</p>
        }
        </div>
        {/* {
            flag==1 && <div className="msg">2</div>
        } */}
        <p style={{color: '#a9a9a9', fontWeight: 'bolder'}}>{msg1}</p>
        <p style={{color: '#a9a9a9', fontWeight: 'bolder'}}>{msg2}</p>
      </div>
    </div>
  );
};
