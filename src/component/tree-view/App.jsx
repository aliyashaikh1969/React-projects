import { useState } from "react"
 import './App.css'
const TreeView = ({ menus = [] }) => {
    return (
        <>
            <div className="tree-view-container">
                <MenuList list={menus} />
            </div>

        </>
    )
}

const MenuList = ({ list }) => {
    // console.log(list)
    return (
        <>
            <ul className="menu-list-container">
                {
                    list && list.length ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />) : ""
                }
            </ul>
        </>
    )
}



const MenuItem = ({ item }) => {

    const [displayCurrentLable, setDisplayCurrentLable] = useState({})
    const handleToggleChildren = (item) => {
        // setDisplayCurrentLable({ ...displayCurrentLable, [item]: !displayCurrentLable[item] })

        setDisplayCurrentLable({...displayCurrentLable,[item]:!displayCurrentLable[item]})
    }
    console.log(displayCurrentLable)


    // console.log(item)
    return (
        <>
            <li>
                <div style={{ display: 'flex', gap: "20px" }}>
                    <p>{item.label}</p>
                    {
                        item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{
                            displayCurrentLable[item.label] ? "-" :"+"
                        }</span> : null
                    }

                </div>
                {
                    item && item.children && item.children.length > 0 && displayCurrentLable[item.label]? <MenuList list={item.children} /> : null

                }
            </li>
        </>
    )
}

export default TreeView;