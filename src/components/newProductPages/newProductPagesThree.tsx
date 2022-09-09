import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import { characterValidator } from "../../services/validators";

interface IproductPageProps {
  pageSetter: (page: number) => void;
}

interface IerrorMessagePage3 {
    name: string;
    link: string;
  }

interface IlinkData extends IerrorMessagePage3{
    id: number
}


export const NewProductPageThree = (props: IproductPageProps) => {
  const [isErrorMessage, setErrorMessage] = useState<IerrorMessagePage3>({
    name: "",
    link: "",

  });

  const [isValuesPageThree, setValuesPageThree] = useState<IerrorMessagePage3>({
    name: "",
    link: "",
  });

  const [isLinkList, setLinkList] = useState<IlinkData[]>([]);

  const collegeValidator = () => {
    setErrorMessage((prev) => ({
      ...prev,
      name: characterValidator(isValuesPageThree.name, 4),
     link: characterValidator(isValuesPageThree.link, 4),
    }));
  };

  const addToArray = () => {
    const newLink: IlinkData = {
      ...isValuesPageThree,
      id:  Date.now(), 
    };

    setLinkList((prev) => [...prev, newLink]);

    setValuesPageThree({ name: "", link: "" });
  };


  const deleteLink = (id:number) => {
    setLinkList((prev) => prev.filter(link => link.id !== id))
  }




  useEffect(() => {
    collegeValidator();
  }, [isValuesPageThree]);

  return (
    <div className="newProdPageContainer">
        
      <div className="newProgPageHead">Új Product Létrehozása 3</div>
      <div className="newProgPageBody newProdPage2">
        <div className="page2BodyWrapper">
          <div className="inputWrapper">
            <div className="collegeNameInputDiv inputDiv">
              <label htmlFor="name">Name</label>
              <input
                value={isValuesPageThree.name}
                name="name"
                type="text"
                onChange={(e) => {
                  setValuesPageThree((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
              <div className="inputErrorDiv">{isErrorMessage.name}</div>
            </div>

            <div className="collegePosInputDiv inputDiv">
              <label htmlFor="name">Link</label>
              <input
                value={isValuesPageThree.link}
                name="name"
                type="text"
                onChange={(e) => {
                  setValuesPageThree((prev) => ({
                    ...prev,
                    link: e.target.value,
                  }));
                }}
              />
              <div className="inputErrorDiv">{isErrorMessage.link}</div>
              <button
                disabled={
                  isErrorMessage.name.length !== 0 ||
                  isErrorMessage.link.length !== 0
                }
                onClick={() => addToArray()}
              >
                Add Link
              </button>
            </div>
          </div>

          <div className="collegeWrapper">
            <div className="collegeListhead">College List</div>
            <div className="colllegeList">
              {isLinkList.map((link, iterator) => (
                <div key={`collegeCard${iterator}`} className="collegeCard">
                    <div className="collegeCardata">

                  <div>{link.name}</div>
                  <div>{link.link}</div>
                    </div>
                    <div className="delete" onClick={()=>deleteLink(link.id)}>
                        delete
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="newProdPageFooter">
        <button onClick={() => props.pageSetter(2)}>Prev</button>
        <button onClick={() => props.pageSetter(3)}>next</button>
      </div>
    </div>
  );
};
