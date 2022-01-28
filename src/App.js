import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import ItemsList from "./Components/Items-list";
import Dashboard from "./Components/Dashboard";

function App() {
    // items state
    const [menuItems, setMenuItems] = useState({});
    const [cartItemsList, setCartItemsList] = useState([]);
    const [showDash, setShowDash] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    // create context
    const addCart = (item) => {
        setCartItemsList((prev) => {
            return [...prev, ...[item]];
        });
    };
    // send items request
    useEffect(() => {
        const req = fetch(
            "https://to-do-list-c1209-default-rtdb.firebaseio.com/menuItems.json"
        );

        req.then((a) => a.json()).then((data) => {
            setMenuItems((prev) => {
                return { ...data };
            });
        });
    }, []);

    // show hide dash board
    const showHideDashboard = () => {
        setShowDash(!showDash);
    };

    return (
        <div className="App">
            <Home
                cart={cartItemsList.length}
                showHideDash={showHideDashboard}
                dashStatus={showDash}
            />
            {!showDash ? (
                <ItemsList addCart={addCart} itemLists={menuItems} />
            ) : (
                <Dashboard orderList={cartItemsList} />
            )}
        </div>
    );
}

export default App;
