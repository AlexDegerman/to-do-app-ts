interface SortDropDownProps {
  sortOrder: "newest" | "oldest"
  sortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortDropDown = ({ sortOrder, sortChange}: SortDropDownProps) => {

  return (
    <div>
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={sortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default SortDropDown