import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name or number
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={s.input}
      />
    </label>
  );
};

export default SearchBox;

// import { useDispatch, useSelector } from "react-redux";
// import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
// import s from "./SearchBox.module.css";

// const SearchBox = () => {
//   const filter = useSelector(selectNameFilter);
//   const dispatch = useDispatch();

//   return (
//     <label className={s.label}>
//       Find contacts by name
//       <input
//         type="text"
//         value={filter}
//         onChange={(e) => dispatch(changeFilter(e.target.value))}
//         className={s.input}
//       />
//     </label>
//   );
// };

// export default SearchBox;
