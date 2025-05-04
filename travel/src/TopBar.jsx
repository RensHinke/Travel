import SearchBar from "./SearchBar"

function TopBar({filterText1, onFilterTextChange1, filterText2, onFilterTextChange2}) {
    return (
        <>
            <SearchBar filterText={filterText1} onFilterTextChange={onFilterTextChange1} placeholder={"Van..."}/>
            <SearchBar filterText={filterText2} onFilterTextChange={onFilterTextChange2} placeholder={"Naar..."}/>
        </>
    )
}

export default TopBar