import React, { useState } from 'react';

import retroPC from '../../../assets/images/image-retro-pcs.jpg';
import laptop from '../../../assets/images/image-top-laptops.jpg';
import controller from '../../../assets/images/image-gaming-growth.jpg';

function ListElement({image, id, alt, title, description}: {image: string, id:number, alt:string, title: string, description: string}) {
  
  // add zero before id if id is less than 10
  const idd = id<10 ?  "0"+id : id;

  return (
    <li className="flex py-5">
      <img className="h-32 mr-6" src={image} alt={alt} />
      <div>
        <div className="font-inter-bold text-3xl text-gray-400">{idd}</div>
        <div className="font-inter-bold hover:text-soft-red">{title}</div>
        <div className="font-inter-regular text-gray-500">{description}</div>
      </div>
    </li>
  );
}

function SecondList() {
  const [itemList, setItemList] = useState([
    {
      image: retroPC,
      alt: "retro pc",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: laptop,
      alt: "laptop",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
    },
    {
      image: controller,
      alt: "controller",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ]);
  return(
    <ul className="md:flex md:mt-10">
      {itemList.map((item,index) => (
        <ListElement key={index} id={index+1} image={item.image} alt={item.alt} title={item.title} description={item.description} />
        )
      )}
    </ul>
  );
}

export default SecondList;