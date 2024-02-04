// import { useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { carList } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { fetchAllCarsThunk } from "../../redux/cars/operations";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  const allCars = useSelector(carList);
  console.log(allCars);

  return (
    <div>
      <div></div>
      <ul>
        {allCars?.map((el, index) => {
          return <CatalogItem el={el} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Catalog;
