import "./dist/resultModal.css";
//import placeholder from "../../img/placeholder.jpg";
import { PictureFromText } from "../picture/PictureFromText";

import { fakebackendResults } from "../../services/fakeBackend";
import { Iproject } from "../../types/projectTypes";
import { useState, useEffect } from "react";

import { LoadingSpinner } from "../loading/LoadngSpinner";


interface IresultModalProps {
  id: number;
  close: () => void;
}

export const ResultModal = (props: IresultModalProps) => {
  const [isProjectResult, setProjectResut] = useState<Iproject>();
  const [isLoading, setLoading]  = useState<boolean>(false)

  async function getResults(id: number) {
    setLoading(true)
    const solved = await fakebackendResults(id, 400);
    setProjectResut(solved as Iproject);
    setLoading(false)
  }

  const setRedirect = (href:string) => {
    window.location.href = href;
  }


  useEffect(() => {
    getResults(props.id);
  }, []);

  return (
    <div className="resultModalOuter">
      <div className="resultModalContainer">
        <div className="projectName">{isProjectResult?.name}</div>
        <div className="pictureDiv">
          {/* <img src={placeholder} alt="" /> */}
          {
          isProjectResult?.name &&
            <PictureFromText 
              letterA={isProjectResult?.name.toUpperCase().slice(0,1)} 
              letterB={isProjectResult?.name.toUpperCase().slice(1,2)}
              />
          }
        </div>
        <div className="resultDiv">{isProjectResult?.description}</div>

        <div className="dataListDivWrapper">
          <div className="dataList">
            <div className="dataListHead">collaborators</div>
            <div className="collaboratorsWrapper">
              {isProjectResult?.collaborators?.map((collaborator, iterator) => (
                <div
                  key={`collaboratorDiv${iterator}`}
                  className="collaboratorDataWrapper"
                >
                  <div>{collaborator.name}</div>
                  <div>{collaborator.position}</div>
                </div>
              ))}
            </div>
          </div>

          {isProjectResult?.links?.length && (
            <div className="dataList">
              <div className="dataListHead">Links</div>
              <div className="linkWrapper">
                {    isProjectResult?.links?.map((linkData, iterator) => (
                  <div className="linkDataWrapper" key={`linkWrap${iterator}`}>
                    <div>{linkData.name}</div>
                    <div
                       onClick={()=>setRedirect(linkData.link)}
                       className="clickabbleLink"  
                       >{linkData.link}
                    </div>
                  
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="resultCloseButton" onClick={props.close}>
          X
        </div>
        {isLoading && <LoadingSpinner/>}
      </div>
    </div>
  );
};
