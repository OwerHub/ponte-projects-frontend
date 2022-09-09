import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import { nameValidator, descriptionValidator } from "../../services/validators";
import { Iproject } from "../../types/projectTypes";

interface IproductPageProps {
  pageSetter: (page: number) => void;
  projectDataSetter: (project: Iproject) => void;
  projectDatas: Iproject;
}

interface IerrorMessages {
  name: string;
  description: string;
}

export const NewProdPageOne = (props: IproductPageProps) => {
  const [isErrorMessage, setErrorMessage] = useState<IerrorMessages>({
    name: "",
    description: "",
  });

  const [isValuesPageOne, setValuesPageOne] = useState<IerrorMessages>({
    name: "",
    description: "",
  });

  // előszörre ne
  const [isFirst, setFirst] = useState<boolean>(true);

  const nextButtonHandler = () => {
    props.projectDataSetter({
      ...props.projectDatas,
      name: isValuesPageOne.name,
      description: isValuesPageOne.description,
    });
    props.pageSetter(2);
  };

  const validatePageOne = () => {
    setErrorMessage({
      name: nameValidator(isValuesPageOne.name),
      description: descriptionValidator(isValuesPageOne.description),
    });
  };

  useEffect(() => {
    validatePageOne();

    setFirst(false);
  }, [isValuesPageOne]);

  useEffect(() => {
    setValuesPageOne({
      name: props.projectDatas.name,
      description: props.projectDatas.description as string,
    });
  }, []);

  return (
    <div className="newProdPageContainer">
      <div className="newProgPageHead">Új Product Létrehozása</div>
      <div className="newProgPageBody newProdPage1">
        <div className="nameInputDiv inputDiv">
          <label htmlFor="name">Name</label>
          <input
            value={isValuesPageOne.name}
            name="name"
            type="text"
            onChange={(e) => {
              setValuesPageOne((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <div className="inputErrorDiv">{isErrorMessage.name}</div>
        </div>

        <div className="descriptionInputDiv inputDiv">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={isValuesPageOne.description}
            id=""
            cols={30}
            rows={10}
            onChange={(e) => {
              setValuesPageOne((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
          ></textarea>
          <div className="inputErrorDiv">{isErrorMessage.description}</div>
        </div>
      </div>

      <div className="newProdPageFooter">
        <button
          disabled={
            isErrorMessage.name.length !== 0 ||
            isErrorMessage.description.length !== 0
          }
          onClick={() => nextButtonHandler()}
        >
          next
        </button>
      </div>
    </div>
  );
};
