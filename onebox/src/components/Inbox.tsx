// components/Widget.js
import styles from "./inboxcomp.module.css"
export default function Inbox() {
    return (
      <div className={`bg-background text-foreground p-4 rounded-lg shadow-md h-full flex flex-col ${styles.inboxcontainer}`}>
        <div className="flex flex-col" style={{gap:"8px"}}>
        <span className={`text-xl font-semibold ${styles.heading}`} >All Inbox(s) </span><span className={styles.messagecount}>25/25 <label>Inboxes selected</label></span>
        </div>
        <div className={`mt-2 ${styles.inputcontainer}`}>
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className="mt-4 flex justify-between">
          <span className="text-muted">26 New Replies</span>
          <span className="text-muted">Newest ▼</span>
        </div>
        <div className={`mt-4 flex-1 ${styles.cardcontainer}`}>
        <div className={styles.card}>
            <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 absolute" style={{left:"-5px"}}></span>
                <span className={styles.email}>Beata@gmail.com</span>
              </span>
              <span className={styles.emailright}>Mar 7</span>
            </div>
            <p className={styles.emailhead}>I've tried a lot and .</p>
            </div>
            <div className={`flex space-x-2 mt-1 ${styles.buttongroup}`}>
              <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Interested</button>
                <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Candiates</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 absolute" style={{left:"-5px"}}></span>
                <span className={styles.email}>Beata@gmail.com</span>
              </span>
              <span className={styles.emailright}>Mar 7</span>
            </div>
            <p className={styles.emailhead}>I've tried a lot and .</p>
            </div>
            <div className={`flex space-x-2 mt-1 ${styles.buttongroup}`}>
              <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Interested</button>
                <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Candiates</button>
            </div>
          </div>
          <div className={`${styles.card} ${styles.active}`}>
            <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                {/* <span className="h-2 w-2 bg-blue-500 rounded-full mr-2 absolute" style={{left:"-5px"}}></span> */}
                <span className={styles.email}>Beata@gmail.com</span>
              </span>
              <span className={styles.emailright}>Mar 7</span>
            </div>
            <p className={styles.emailhead}>I've tried a lot and .</p>
            </div>
            <div className={`flex space-x-2 mt-1 ${styles.buttongroup}`}>
              <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Interested</button>
                <button className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                Candiates</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  