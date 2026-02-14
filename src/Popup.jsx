export function Popup(props){
    return (
      <div className={`popup-cont ${props.canshow} p-5`}>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <div className="img-cont">
              <img
                className="popimg"
                src={props.image}
              />
            </div>
          </div>
          <div className="col-span-7 p-5">
            <h1 className="pophead text-black font-medium text-3xl">
              {props.heading}
            </h1>
            <br />
            <h1 className="pophead text-black font-medium text-3xl">Price : {props.price}</h1>
            <br />
            <button className="shopbtn">Shop Now</button>
          </div>
        </div>
        <div className="para-cont my-3">
          <p className="desc-para">
            {props.desc}
          </p>
        </div>
        <button onClick={()=>{
            props.tohide(false);
        }} 
        className="hidebtn"
        >X</button>
      </div>
    );
}