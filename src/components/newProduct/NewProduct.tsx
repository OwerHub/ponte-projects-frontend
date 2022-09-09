import "./dist/newproduct.css";
import { Iproject } from "../../types/projectTypes";
import { useState, useEffect } from "react";

import { ProgressBar } from "../pogressBar/progressBar";
import { NewProdPageOne } from "../newProductPages/newProductPageOne";
import { NewProductPageTwo } from "../newProductPages/newProductpageTwo";
import { NewProductPageThree } from "../newProductPages/newProductPagesThree";

interface InewProductProps {
  close: () => void;
  saveProject: (project: Iproject) => void;
}

export const NewProduct = (props: InewProductProps) => {
  const [isPage, setPage] = useState<number>(1);
  const [isProjectDatas, setProjectDatas] = useState<Iproject>({
    name: "",
    description: "",
    collaborators: [],
    links: [],
    id: 111,
  });

  useEffect(() => {
    if (isPage === 4) {
     
      props.saveProject({...isProjectDatas, id:Date.now()});
    }
  }, [isPage]);



  return (
    <div className="newProductContainer">
      <div className="newProductInner">
        <ProgressBar actualPage={isPage} />
        <div onClick={props.close} className="closeButton">
       
          X
        </div>
        <div className="newProdPages">
          {isPage === 1 && (
            <NewProdPageOne
              pageSetter={(page) => setPage(page)}
              projectDataSetter={(set) => setProjectDatas(set)}
              projectDatas={isProjectDatas}
            />
          )}
          {isPage === 2 && (
            <NewProductPageTwo
              pageSetter={(page) => setPage(page)}
              projectDataSetter={(set) => setProjectDatas(set)}
              projectDatas={isProjectDatas}
            />
          )}
          {isPage === 3 && (
            <NewProductPageThree
              pageSetter={(page) => setPage(page)}
              projectDataSetter={(set) => setProjectDatas(set)}
              projectDatas={isProjectDatas}
            />
          )}
        </div>
      </div>
    </div>
  );
};
