import "./dist/newProductPages.css";
import { useState, useEffect } from "react";
import {nameValidator, descriptionValidator} from "../../services/validators"


interface IerrorMessages {
  name: string;
  description: string;
}

export const NewProdPageOne = () => {

  const [isErrorMessage, setErrorMessage] = useState<IerrorMessages>({
    name: "",
    description: "",
  });
  const [isValidPageOne, setValidPageOne] = useState<boolean>(false);
  const [isValuesPageOne, setValuesPageOne] = useState<IerrorMessages>({
    name: "",
    description: "",
  });

  const validatePageOne = () => {
    setErrorMessage({
      name: nameValidator(isValuesPageOne.name),
      description: descriptionValidator(isValuesPageOne.description),
    });

    setValidPageOne(
      nameValidator(isErrorMessage.name).length > 0 &&
        descriptionValidator(isErrorMessage.description).length > 0
    );
  };

  useEffect(() => {
    validatePageOne();
  }, [isValuesPageOne]);

  return (
    <div className="newProdPageContainer">
      <div className="newProgPageHead">Új Product Létrehozása</div>
      <div className="newProgPageBody newProdPage1">
        <div className="nameInputDiv inputDiv">
          <label htmlFor="name">Name</label>
          <input
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
        <button disabled={isValidPageOne}>next</button>
      </div>
    </div>
  );
};
