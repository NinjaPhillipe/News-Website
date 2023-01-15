import "./FirstList.css"

import { useState } from "react";

function ElementList({title, description}: {title: string, description: string}) {
  return (
    <li className="py-6 text-white border-b border-gray-300 last:border-none">
      <div className="font-inter-extrabold text-xl hover:text-soft-orange">{title}</div>
      <p className="font-inter font-extralight ">
        {description}
      </p>
    </li>
    );
}

function FirstList() {
  const [itemList, setItemList] = useState([
    {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up",
      description: "Private funding vy firms is down 50% YOY. We take a look at what that means.",
    },
  ]);
  return (
    <div className="bg-gray-800 mt-10 px-4 md:mt-0 md:ml-6 md:w-3/12">
      <div className="listTitle">New</div>
      <ul>
        {itemList.map((item, index) => (
          <ElementList key={index} title={item.title} description={item.description} />
          )
        )}
      </ul>
    </div>
  );
}



export default FirstList;