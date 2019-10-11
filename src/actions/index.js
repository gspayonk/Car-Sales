
export const REMOVE_ITEM = "REMOVE_ITEM";
export const BUY_ITEM = "BUY_ITEM";

export const removeItem = item => {

  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const addItem = item => {
  
  return {
    type: BUY_ITEM,
    payload: item
  };
};