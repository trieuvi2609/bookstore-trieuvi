import instance from "api/axios";
import { CardBook } from "components";
import Title from "components/Title/Title";
import { selectTypes } from "features/books/booksSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
export default function TypePage() {
  const types = useSelector(selectTypes);
  const { name } = useParams();
  const [listBook, setListBook] = useState([]);
  // console.log(listBook);

  const [visible, setVisible] = useState(8);

  const showMore = () => {
    setVisible((oldValue) => oldValue + 4);
  };
  const typeUsed = types.findIndex((type) => type.cat_nm === name);

  useEffect(() => {
    const getBookOfType = async () => {
      const listBookResp = await instance.get(`/categories/${typeUsed + 1}`);
      const list = listBookResp.data.book_list;
      setListBook(list);
    };
    getBookOfType();
  }, [name, typeUsed]);

  return (
    <main className="py-10 bg-blueGray-200">
      <div className="container">
        <Title
          title={`${name} Books`}
          text="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum aliquid pariatur fugiat alias voluptatum expedita ducimus optio deleniti autem voluptatibus rem, accusamus eligendi harum officiis laudantium adipisci, non dolorum."
        />
        <hr />
        <div className="row">
          {listBook.slice(0, visible).map((book) => {
            return (
              <div
                key={book.b_id}
                className="col-10 col-md-6 col-lg-3 mx-auto mb-3"
              >
                <CardBook book={book} />
              </div>
            );
          })}
        </div>
        {visible === listBook.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: "center" }}
              className="col-10 mx-auto pt-3"
            >
              <hr />
              <button onClick={showMore} className="mb-5">
                Show more
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
