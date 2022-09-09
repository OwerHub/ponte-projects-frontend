export const nameValidator = (name: string): string => {
  return name.length >= 3 ? "" : "Please type minimum 3 character";
};



export const descriptionValidator = (description: string): string => {
  if (description.length === 0) {
    return "";
  }
  if (description.length <= 50) {
    return `Minimum character is 50. You type ${description.length} character`;
  } // your character is
  if (description.length >= 250) {
    return `Maximum character is 250. You type ${description.length} character`;
  } // your character is
  return "";
};

export const characterValidator = (name: string, minimum: number): string => {
    return name.length >= minimum ? "" : `Please type minimum ${minimum}  character`;
  };