const Search = ({
  fillterJobData,
  searchItem,
  setSearchItem,
  searchByLocation,
  setSearchByLocation,
  locationSearchHandler,
}) => {
  return (
    <div className="container">
      <div className="search-form d-flex justify-content-between align-items-center my-3">
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Search by title"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Search by location"
            value={searchByLocation}
            onChange={(e) => setSearchByLocation(e.target.value)}
          />
          <button onClick={locationSearchHandler}>Search</button>
        </div>

        <div>
          <select className="py-1" onChange={fillterJobData}>
            <option>Fillter by Job</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="freelance">Freelance</option>
            <option value="contract">Contract</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
