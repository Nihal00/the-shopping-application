import React from "react";
import "./Budgets.css";

const Budget = () => {



    return(
        <div className="Budget">
            <p>Budget</p>
            <div className="value">
                <span>£ </span>
                <input type="number"/>
            </div>
        </div>

    )
}

export default Budget;