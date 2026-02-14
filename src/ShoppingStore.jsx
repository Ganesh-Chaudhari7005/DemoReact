import "./App.css";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import {Popup} from "./Popup"

export function ShoppingStore() {
  const [productCategories, setproductCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [popup , setpopup]  = useState(false);
  const [popupdata , setPopupdata] = useState(null);
  const [selectedCategory , setSelectedCategory] = useState("");
  const[isloading , setLoading] = useState(false);
  let getProductCategories = async () => {
    let reqcat = await fetch("https://fakestoreapi.com/products/categories");
    let catdata = await reqcat.json();
    setproductCategories(catdata);
  };

  useEffect(() => {
    getProductCategories();
  }, []);

  useEffect(() => {
    console.log(productCategories);
  }, [productCategories]);

  let getProductsList = async (index) => {
    setLoading(true);
    let category = productCategories[index]
    let reqProductList = await fetch(
      `https://fakestoreapi.com/products/category/${productCategories[index]    }`,
    );

    let productData = await reqProductList.json();
    setProducts(productData);
    // listref.current.innerText = productCategories[index];
    setSelectedCategory(category);
    setLoading(false);
  };

  useEffect(() => {
    if(productCategories.length > 0){
        getProductsList(0);
    }
  }, [productCategories]);

  let handlePopup = (imagelink, heading, desc, price)=>{
    setPopupdata({
        image : imagelink,
        headtext : heading,
        descrip : desc,
        itemprice : price
    })
        setpopup(true);
        console.log(popup);
        
    
  }


  function hidepopup(dohide){
    setpopup(dohide);
    console.log(dohide);
    
  }

  return (
    <>
      <div className=" p-5 flex justify-center overflow-x-hidden">
        <Popup
          canshow={popup ? 'show' : 'hide'}
          image={popupdata?.image}
          heading={popupdata?.headtext}
          price={popupdata?.itemprice}
          desc={popupdata?.descrip}
          tohide={hidepopup}
        />

        <div className="container py-5">
          <h2 className="text-center mb-2 text-3xl font-bold">
            Shoppping Store
          </h2>

          <div className="grid grid-cols-12 py-5 gap-5">
            <div className="col-span-3 py-3">
              <div className="cat-cont bg-[#ffc369] p-3 rounded-lg">
                <h2 className="cat-head text-black font-bold text-3xl">
                  Categories
                </h2>
                <div className="cat-cont-inner flex flex-col pt-5 gap-5">
                  {productCategories.map((n, index) => (
                    <button
                      className={`h-12 text-start text-white font-medium capitalize pl-6 bg-[#003778] rounded-lg focus:outline-none hover:bg-yellow-600 ${selectedCategory == n ? "bg-yellow-600" : "bg-[#003778]"}`}
                      key={index}
                      onClick={() => getProductsList(index)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-9 py-3">
              <h1 className="bg-[#003778] p-2 text-white text-center text-3xl mb-5 rounded capitalize">
                {isloading ? "Loading Products......" : selectedCategory}
              </h1>
              <div className="list-cont flex flex-wrap gap-5 overflow-hidden">
                {isloading
                  ? products.map((item) => <div className="loader"></div>)
                  : products.map((item) => (
                      <div className="list-card" key={item.id}>
                        <Card
                          image={item.image}
                          desc={item.description}
                          pname={item.title}
                          price={item.price}
                          onknowmore={handlePopup}
                        />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// https://fakestoreapi.com/products/category/${category}
