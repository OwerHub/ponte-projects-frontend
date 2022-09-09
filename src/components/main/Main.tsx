import "./dist/main.css";

import { useState, useEffect } from "react";
import { Iproject } from "../../types/projectTypes";
import { fakebackendAnswer,  fakebackendAdd, fakebackendDelete } from "../../services/fakeBackend";

import { CardContainer } from "../cardContainer/cardContainer";
import { NewProduct } from "../newProduct/NewProduct";
import { ResultModal } from "../resultModal/Resultmodal";

export const Main = () => {
  const [isProjectArray, setProjectArray] = useState<Iproject[]>([]);
  

  const [isNewModalOpen, setNewModalOpen] = useState<boolean>(false);
  const [isResultModalOpen, setResultModalOpen] = useState<boolean>(false) 

  const [isResultId, setResultId] = useState<number>(0) 
  const [isSearchText, setSearchText] = useState<string>("")


  async function askProject() {
    const solved = await fakebackendAnswer(1500);
    setProjectArray(solved as Iproject[]);
  }

 
 async  function addProject (project:Iproject){
  setNewModalOpen(false);
  const solved = await fakebackendAdd(project, 400)
  setProjectArray(solved as Iproject[])
  }


  async  function deleteProject  (deleteID:number){
    const solved = await fakebackendDelete(deleteID, 400)
    setProjectArray(solved as Iproject[])
    }


    const showresult = (id:number) => {
      setResultId(id)
      setResultModalOpen(true)
    }

     const filterProjectArray = (projectArray:Iproject[]) => {
      if (isSearchText.length === 0){
        return projectArray 
      }  

      return projectArray.filter(project => project.name.toLowerCase().match(isSearchText.toLowerCase()))
      
     }


  useEffect(() => {
    askProject();
  }, []);

  return (
    <div className="mainWrapper">

      <div className="head">
        <h1>PonteProjects</h1>
        <div className="headHandles">
        <button onClick={() => setNewModalOpen(true)}>new task</button>
        <input type="text"  placeholder="search" onChange={(e)=>setSearchText(e.target.value)}/>
          
        </div>
      </div>

      <div className="cardDiv">
        {isProjectArray.length > 0 && (
          <CardContainer 
            projects={filterProjectArray(isProjectArray)} 
            deleteCard={(id) =>deleteProject(id)} 
            resultCard={(id) => showresult(id)}
            />
        )}
      </div>

      <div>
        {isNewModalOpen && (
          <NewProduct
            close={() => setNewModalOpen(false)}
            saveProject={(project: Iproject) => {
              addProject(project);
            }}
          />
        )}

        {isResultModalOpen && (
          <ResultModal
           id={isResultId}
           close={()=> setResultModalOpen(false)}
           />
        )}
      </div>

    

    </div>
  );
};
