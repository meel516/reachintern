import styles from "./home.module.css"
import pic1 from "../../../public/Frame 2087326278.png"
import home from "../../../public/Home.png"
import email from "../../../public/email.png"
import email1 from "../../../public/email1.png"
import send from "../../../public/Frame 23.png"
import option from "../../../public/option.png"
import bar from "../../../public/bar_chart.png"
import frame from "../../../public/Frame 19.png"
import Image from "next/image"
import def from "../../../public/Frame 2087326090.png"
export default function Layout({children}){
    return <>
    <div className={styles.container}>
<div className={styles.sidebar}>
    <div className={styles.logoholder}>
<Image src={pic1} alt="something" ></Image>
    </div>
    <div className={styles.menu}>
        <Image src={home}></Image>
        <Image src={email}></Image>
        <Image src={send}></Image>
        <Image src={option}></Image>
        <Image src={frame}></Image>
        <Image src={bar}></Image>

    </div>
    <div >

    </div>

</div>

<div className={styles.rightpane}>
    <div className={styles.navbar}>
<span>One box </span>
<div>
<span className={styles.user}>Tim's workspace</span>
</div>
    </div>
    <div className={styles.main}>
  {children}
    </div>

</div>
    </div>
    
    </>
}