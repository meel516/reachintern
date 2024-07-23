"use client"
import styles from "./mail.module.css"
export default function Mail({
    to,
    from,
    subject
}){
    return (
        <>
        <div className={` absolute w-full p-4 ${styles.container}`}>
            <div style={{backgroundColor:"#141517",zIndex:20}} className="flex flex-col h-full">
            <div style={{

    padding: "20px 32px 20px 32px",
    borderRadius: "8px 8px 0px 0px",
    border: "1px",
    backgroundColor: "#23272C"

  
    
}} className="flex justify-between">
                <span>
                Reply
                </span>
                <label>
                    &times;
                </label>
            </div>
            <div className={styles.smallbox}>
to :  <span>md.saleem516@gmail.com</span>
            </div>
            <div className={styles.smallbox}>
from : <span>md.saleem516@gmail.com</span>
            </div>
            <div className={styles.smallbox}>
                subject :<span>Reply</span>
            </div>
            <div className={`flex-1 ${styles.smallbox}`}>
             
            </div>
            <div className={`flex py-2 px-4`}>
            <button className={styles.button}>
             send
            </button>
            </div>
            </div>
            </div>
        </>
    )
}