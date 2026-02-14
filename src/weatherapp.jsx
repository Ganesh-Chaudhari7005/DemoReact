import { useEffect, useRef, useState } from "react";
export function WeatherApp() {
  let cityref = useRef("  ");
  const [city, setCity] = useState("pune");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [day, setday] = useState("");
  const [imgpath , setImgpath] = useState(null);
  const[cond , setcond] = useState(" ");
  const[temp , setTemp] = useState(null);
  const [wind, setWind] = useState("");
  const [uv , setUv] =useState(0);
  const [gust , setgust] =useState(0);
  const [winddir, setwiddir] =useState("");
  const [preasure, setpreasure] =useState(0);
  const [humidity, sethumidity] =useState(0);
  const [feellike, setfeellike] =useState(0);
  const [windchill, setwindchill] =useState(0);
  const [heatIndex, setheatindexd] =useState(0);
  const [weather , setWeather] = useState(null);
        console.log(weather);

  let imgref = useRef("");
  let getdata = async (cityname) => {
    try {
      let reqdata = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=183860b3158c4989ae1165739251003&q=${cityname}`,
      );
      let data = await reqdata.json();
      setWeather(data);
      console.log(weather);

      setCountry(data.location.country);
      let tempDate = data.location.localtime;
      let arrdate = tempDate.split(" ");
      let nowDate = arrdate[0];
      setcond(data.current.condition.text);
         setDate(nowDate);
         setTemp(data.current.temp_c);
         setWind(data.current.wind_kph);
         setUv(data.current.uv);
         setgust(data.current.gust_kph);
         setwiddir(data.current.wind_dir);
         setpreasure(data.current.pressure_mb);
         sethumidity(data.current.humidity);
         setfeellike(data.current.feelslike_c);
         setwindchill(data.current.windchill_c);
         setheatindexd(data.current.heatindex_c);
      if (
        data.current.condition.text == "Sunny" ||
        data.current.condition.text == "Clear"
      ) {
        setImgpath("public/clear.png");
        imgref.current.style = "width : 215px";
      } else if (
        data.current.condition.text == "Cloudy" ||
        data.current.condition.text == "Partly cloudy"
      ) {
        setImgpath("public/sunny.png");
        imgref.current.style = "width : 300px";
      } else if (
        data.current.condition.text == "Raining" ||
        data.current.condition.text == "Light rain"
      ) {
        setImgpath("public/rain.gif");
        imgref.current.style = "width : 295px";
        imgref.current.style = "height : 260px";

      } else {
        imgref.current.style = "width : 215px";
      }
      
   
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    getdata(city);
  }, [city]);



  return (
    <div className="bg-gradient-to-r from-[#060c1a] to-[#1c2230] p-16">
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <div className="searchCont">
            <input
            onKeyDown={(e) => {
    if (e.key === "Enter") {
      setCity(cityref.current.value);
    }}}
              ref={cityref}
              id="city101"
              type="text"
              placeholder="Search City...."
              className="searchbox h-10 bg-[#1c2230] pl-5 rounded-l-3xl text-white"
              
            />
            <button
              onClick={() => {
                setCity(cityref.current.value);
              }}
              className="searchbtn bg-[#742bec] w-24 text-center py-2 rounded-r-3xl text-white font-medium hover:bg-[#5f1ace]"
            >
              Search
            </button>
          </div>
          <div className="infoCont h-60 bg-[#1c2230] mt-8 rounded-3xl p-6">
            <h2 className="w-40  bg-[#742bec]  text-center py-1 rounded-3xl text-white mb-1">
              {country}
            </h2>
            <div>
              <div className="col-span-4 pt-8">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-5xl text-white mb-2 capitalize">
                      {city}
                    </h2>
                    <p className="text-gray-400 font-medium pl-1">{date}</p>
                  </div>
                  <div className="pt-2">
                    <h2 className="text-5xl text-white mb-2">{temp}</h2>
                    <p className="text-gray-400 font-medium text-center">
                      Temp <sup>o</sup> c
                    </p>
                  </div>
                  <div className="pt-2">
                    <h2 className="text-5xl text-white mb-2">{wind}</h2>
                    <p className="text-gray-400 font-medium text-center">
                      Wind Kph
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="condclass  text-3xl text-white mb-2">
                      {cond}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 py-20">
            <div className="webhead">
                <p>OpenWeather</p>
            </div>
          <div className="flex flex-col items-center">
            <img ref={imgref} className="conimg" src={imgpath} alt="" />
          </div>
        </div>
      </div>
      <div className="outercont flex gap-5">
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">UV- Index</h2>
          <h2 className="text-gray-400 text-3xl text-center">{uv}</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Gust</h2>
          <h2 className="text-gray-400 text-3xl text-center">{gust} mph</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Wind DR</h2>
          <h2 className="text-gray-400 text-3xl text-center">{winddir}</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Preassure</h2>
          <h2 className="text-gray-400 text-3xl text-center">{preasure} mb</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Humidity</h2>
          <h2 className="text-gray-400 text-4xl text-center">{humidity}</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Feels Like</h2>
          <h2 className="text-gray-400 text-4xl text-center">{feellike}</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Windchill</h2>
          <h2 className="text-gray-400 text-4xl text-center">{windchill}</h2>
        </div>
        <div className="innercont w-40 h-40 bg-[#1c2230] rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl text-center pb-3">Heat Index</h2>
          <h2 className="text-gray-400 text-4xl text-center">{heatIndex}</h2>
        </div>
      </div>
    </div>
  );
}
