import "./dist/main.css"

import { useState, useEffect } from "react";
import { Iproject } from "../../types/projectTypes";
import { fakebackendAnswer } from "../../services/fakeBackend";

import { CardContainer } from "../cardContainer/cardContainer";
import { NewProduct } from "../newProduct/NewProduct";

export const Main = () => {
  const [isProjectArray, setProjectArray] = useState<Iproject[]>([]);
  const [isNewModalOpen, setNewModalOpen] = useState<boolean>(false)

  async function askProject() {
    const solved = await fakebackendAnswer(1500);
    setProjectArray(solved as Iproject[]);
  }

  useEffect(() => {
    askProject();
  }, []);

  return (
    <div className="mainWrapper">
        <div className="head">
            <h1>This is PonteProjects Head </h1>
            <button onClick={()=>setNewModalOpen(true)}>new  task</button>

        </div>
      <div className="cardDiv">
        {isProjectArray.length > 0 && (
          <CardContainer projects={isProjectArray} />
        )}
      </div>
      <div>
          {isNewModalOpen && 
            <NewProduct
              close={()=>setNewModalOpen(false)}
              />}
            
      </div>
    </div>
  );
};
