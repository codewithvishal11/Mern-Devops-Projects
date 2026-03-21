const BookFilter = ({ filters, onFilterChange, categories =[] }) => {
    const { category, minPrice, maxPrice } = filters;
    
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
      {/* Category Filter */}
      <div>
        <label className="mr-2 text-sm font-medium">Category:</label>
        <select
          value={category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
        >
          {
            categories.map((item, index) => (
              <option key={index} value={`${item}`}>{item}</option>
            ))
          }
        </select>
      </div>

      {/* Price Filter */}
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Min ₹"
          value={minPrice}
          onChange={(e) => onFilterChange("minPrice", e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-20 text-sm"
          min={0}
        />
        <input
          type="number"
          placeholder="Max ₹"
          value={maxPrice}
          onChange={(e) => onFilterChange("maxPrice", e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 w-20 text-sm"
          min={100}
        />
      </div>
    </div>
  );
};

export default BookFilter;
