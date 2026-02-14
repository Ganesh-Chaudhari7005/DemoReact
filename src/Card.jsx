import "./App.css";
function Card(props) {
  return (
    <div className="cust-card  bg-white  overflow-hidden flex flex-col rounded-xl transform-gpu transition-transform duration-300 ease-in-out">
      <div className="w-full h-48">
        <img
          src={props.image}
          alt="img"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="p-4 flex flex-col overflow-hidden">
        <h2 className="text-black text-2xl font-semibold text-left">
          {props.pname || " - "}
        </h2>
        <h2 className="text-black text-2xl font-semibold text-left">
          Price :{props.price || "-"}
        </h2>
        <p className="card-text mb-5 text-black font-medium font-system-ui  text-justify">
          {props.desc}
        </p>
        <button onClick={()=>{
          props.onknowmore(props.image, props.pname, props.desc, props.price);
        }} className="card-btn bg-[#003778] text-small text-white p-2 hover:bg-blue-800">
          Know More
        </button>
      </div>
    </div>
  );
}

export default Card;
