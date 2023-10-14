import "./SearchBar.css";
import Statistics from "./Stats";
function SearchBar() {
  return (
    <>
      <div className="nav">
        <div className="Page-name">
          <h2>Overview</h2>
        </div>
        {/* -------------------------------------------------------- */}
        <div className="Cointainer">
          <input type="text" className="inp" />
          <button className="img-btn" type="submit"><img src="./Images/Search.png" alt="Search Icon" width="30px" height="30px" /></button>
        </div>
        {/* -------------------------------------------------------- */}

        <div className="aligment">
          <img
            className="N_image"
            src="./Images/Notification.png"
            alt="Overview"
            width="30px"
            height="30px"
          />
          <img className="search_image" src="./Images/Man.png" alt="Overview" />
          <button className="btn" id="Overview">
            Name
          </button>
        </div>
        {/* -------------------------------------------------------- */}
      </div>
      <Statistics/>
    </>
  );
}
export default SearchBar;
