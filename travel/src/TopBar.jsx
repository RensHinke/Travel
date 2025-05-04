import SearchBar from "./SearchBar"

function TopBar({filterText1, onFilterTextChange1, filterText2, onFilterTextChange2, isLoaded, stations, handleClick1, handleClick2}) {
    return (
        <>
            <SearchBar filterText={filterText1} onFilterTextChange={onFilterTextChange1} placeholder={"Van..."} stations={stations} handleClick={handleClick1}/>
            {!isLoaded && <i className="arrow fa fa-arrow-right"></i>}
            <SearchBar filterText={filterText2} onFilterTextChange={onFilterTextChange2} placeholder={"Naar..."} stations={stations} handleClick={handleClick2}/>
        </>
    )
}

export default TopBar