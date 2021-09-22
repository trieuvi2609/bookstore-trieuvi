import instance from "api/axios";
import { Title } from "components";
import React, { useEffect, useState } from "react";
import { TYPES_BOOK } from "utils/static";
import CardTypesBook from "../CardTypesBook/CardTypesBook";
import "./TypesBook.scss";

function TypesBook(props) {
  const [types, setTypes] = useState(TYPES_BOOK);
  const [loading, setLoading] = useState(true);
  console.log(types);
  useEffect(()=>{
    const fetchType = async ()=>{
      const typeResp = await instance.get('/categories');
      const type = typeResp.data.category_list;
      type.sort(function(a, b) {
        return Number(a.cat_id) - Number(b.cat_id);
      });
      setTypes(type);
      setLoading();
    }
    fetchType();
  },[])
  if(loading) return(
    <section>
      <div className="container">
        <div className="typesbook">
          <div className="typesbook__header">
            <Title
              title="List type of book"
              text="LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NATUS, EUM ET. VERITATIS IPSUM IUSTO CORRUPTI ELIGENDI ISTE ODIO INVENTORE DOLORES SAEPE FUGA, MAGNAM EXERCITATIONEM! MAGNAM EXPEDITA NOBIS ILLO LAUDANTIUM POSSIMUS."
            />
          </div>
          <div className="typesbook__list">
            {TYPES_BOOK.map((type) => {
              return <CardTypesBook key={type.id} name={type.name} id = {type.id}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
  else return (
    <section>
      <div className="container">
        <div className="typesbook">
          <div className="typesbook__header">
            <Title
              title="Popular book types"
              text="LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NATUS, EUM ET. VERITATIS IPSUM IUSTO CORRUPTI ELIGENDI ISTE ODIO INVENTORE DOLORES SAEPE FUGA, MAGNAM EXERCITATIONEM! MAGNAM EXPEDITA NOBIS ILLO LAUDANTIUM POSSIMUS."
            />
          </div>
          <div className="typesbook__list">
            {types.map((type) => {
              if(Number(type.cat_id)<5)
              return <CardTypesBook key={type.cat_id} name={type.cat_nm} id= {type.cat_id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypesBook;
