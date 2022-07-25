import { KEY_STORAGE_FAV_DOGS } from "./constants";

export const getRandomList = (allDogs, lengthOfArray) => {
  try {
    return allDogs
      .sort(() => Math.random() - Math.random())
      .slice(0, lengthOfArray);
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const toggaleFavourites = (item) => {
  try {
    const favList = JSON.parse(
      localStorage.getItem(KEY_STORAGE_FAV_DOGS) || "[]"
    );
    const lastIndex = favList.indexOf(item);
    if (lastIndex > -1) {
      favList.splice(lastIndex, 1);
    } else {
      favList.push(item);
    }
    localStorage.setItem(KEY_STORAGE_FAV_DOGS, JSON.stringify(favList));
  } catch (err) {
    console.log(err);
  }
};

export const isFavourite = (item) => {
  try {
    const favList = JSON.parse(
      localStorage.getItem(KEY_STORAGE_FAV_DOGS) || "[]"
    );
    return favList.indexOf(item) > -1;
  } catch (err) {
    console.log(err);
  }

  return false;
};
