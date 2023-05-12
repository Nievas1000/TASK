export const SearchNotes = ({
  searchByBody,
  searchByTitle,
  selectedFilter,
  searchByFilter,
}) => {
  return (
    <div>
      <div className="container-inputs-search">
        <div>
          <h4>Search by title: </h4>
          <input type="text" onChange={searchByTitle} />
        </div>
        <div>
          <h4>Search by body: </h4>
          <input type="text" onChange={searchByBody} />
        </div>
      </div>
      <div className="dropdown-filter">
        <select value={selectedFilter} onChange={searchByFilter}>
          <option value="">Filter by:</option>
          <option value="title">Title</option>
          <option value="createdDate">Date Created</option>
          <option value="modifiedDate">Date Modified</option>
        </select>
      </div>
    </div>
  );
};
