import { setFile, getNewKey, setData, getAndSetData } from "./firebase.utils";

export const getBooks = setter => getAndSetData("books", setter);

export const getFrontBook = setter => getAndSetData("hero/id", setter);
export const setFrontBook = (id, callback) =>
  setData(`hero`, { id }).then(callback);

export const getBookById = (bookId, setter) =>
  getAndSetData(`books/${bookId}`, setter);

export const isString = val => typeof val === "string";

export const setBook = async book => {
  try {
    const { cover, coverPath } = book;
    if (!cover) {
      console.log("error", "no cover");

      return;
    }

    if (!isString(cover) && cover.size > 1000000) {
      console.log("error", "Image is too big (> 1Mo) !");

      return;
    }

    const bookId = book.id || getNewKey("books/");

    const fileSuccess = isString(cover)
      ? cover
      : await setFile(`books/${bookId}`, cover);
    const bookData = {
      ...book,
      id: bookId,
      coverPath: isString(cover) ? coverPath : fileSuccess.metadata.fullPath,
      cover: isString(cover) ? cover : await fileSuccess.ref.getDownloadURL()
    };

    await setData(`books/${bookId}`, bookData);

    console.log("success");
  } catch (e) {
    throw new Error(e.message);
  }
};
