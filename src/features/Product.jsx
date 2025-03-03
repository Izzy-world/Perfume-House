import React from 'react'
import { products } from "../Product"
import perfstar from "../assets/perfstar.png"
import amountImg from "../assets/amountImg .png"



const Products = () => {
  
  return (
    <>
      <main className="">
        <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-6">
          {products.map((Product) => {
            return (
              <div key={Product.id} className="card bg-base-100 w-[300px] md:w-[256.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px] shadow-sm  ">
                <figure>
                  <img className='' src={Product.image} alt={Product.id} />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">{Product.title}</h2>
                  <div>
                    <img src={perfstar} alt="star-pics" />
                    <img src={amountImg} alt="amount" />
                  </div>
                  <p>
                    {Product.rating} ({Product.rateCount})
                  </p>
                  <div className="card-actions justify-end">
                    <button className="w-full h-[25px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products