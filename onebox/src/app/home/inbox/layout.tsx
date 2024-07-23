import Inbox from "@/components/Inbox";
import styles from "./inbox.module.css"

export default function Layout({children}){
return <div className="flex w-full h-full">
    <div className={styles.left}>
<Inbox/>
    </div>
    <div className="w-full">
{children}
    </div>
</div>
}