import { THeader } from "./Book.styles";
import { BookType } from "../../App";

type BookPropsType = {
  book: BookType;
};

const Book = ({ book }: BookPropsType): JSX.Element => {
  return (
    <>
      <THeader>{book.title}</THeader>
      <THeader>{book.author}</THeader>
      <THeader>{book.relevancy_score}</THeader>
      <THeader>{book.points}</THeader>
    </>
  );
};

export default Book;
