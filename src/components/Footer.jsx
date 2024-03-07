import React from "react"
import Style from "./css/footer.module.css"
export default function Footer({completedItems,totalItems}){
    return(       
        <div className={Style.footer}>
        <div className={Style.card}>
            <h2>Completed Tasks</h2>
            <h2>{completedItems}</h2>
        </div>
        <div className={Style.card}>
            <h2>Total Tasks</h2>
            <h2>{totalItems}</h2>
        </div>
    </div>
    )
}