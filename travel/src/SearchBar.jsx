function SearchBar({filterText, onFilterTextChange, placeholder}) {
    return (
        <form>
            <input type="text" value={filterText} placeholder={placeholder} onChange={(e) => onFilterTextChange(e.target.value)}></input>
        </form>
    )
}

export default SearchBar