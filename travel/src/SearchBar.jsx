import { useState } from 'react'
function SearchBar({filterText, onFilterTextChange, placeholder, stations, handleClick}) {
    const [isFocused, setFocused] = useState(false)

    return (
        <>
            <form>
                <input type="text" value={filterText} placeholder={placeholder} onChange={(e) => onFilterTextChange(e.target.value)} onFocus={(_) => setFocused(true)} onBlur={(_) => setFocused(false)}></input>
                <div className="suggestionsDropdown">
                    {stations != [] && isFocused &&
                        stations.filter(e => e.toUpperCase().includes(filterText.toUpperCase())).sort().slice(0, 5).map(e => {
                            return <button type="button" onMouseDown={(_) => {
                                handleClick(e)
                                setFocused(false)
                            }}>
                                {e}
                            </button>
                        })
                    }
                </div>
            </form>
        </>
    )
}

export default SearchBar