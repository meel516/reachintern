import Image from "next/image"
import styles from "./thread.module.css"
import sample from "../../../../../public/Frame 2087326914.png"
import Mail from "@/components/Mail"
export default function user(){
    return <>
    <div className="flex w-full">
    <div className="relative" style={{width:"75%",boxSizing:"border-box"}}>
    <div className="flex items-center justify-between p-4 bg-card text-card-foreground">
  <div>
    <h2 className="text-lg font-semibold">Orlando</h2>
    <p className="text-muted-foreground">orladom@gmail.com</p>
  </div>
  <div className="flex items-center space-x-2">
    <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
      Meeting Completed
      <span className="ml-1">&#x25BC;</span>
    </button>
    <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
      Move
      <span className="ml-1">&#x25BC;</span>
    </button>
    <button className="bg-secondary text-secondary-foreground p-2 rounded-lg hover:bg-secondary/80">&#x2026;</button>
  </div>
</div>
<div className="w-full p-4">
<div className={`bg-card text-card-foreground rounded-lg shadow-md w-full p-4 ${styles.message}`}>
  <h2 className="text-xl font-bold mb-2">New Product Launch</h2>
  <div className="text-sm text-muted-foreground mb-2">
    <p>from: <span className="font-medium">jeanne@icloud.com</span> cc: <span className="font-medium">lennon.j@gmail.com</span></p>
    <p>to: <span className="font-medium">lennon@mail.com</span></p>
    <p className="mt-2">20 June 2022 : 9:16 AM</p>
  </div>
  <p className="text-base mb-4">Hi <span className="font-medium"></span>,</p>
  <p className="text-base">
    I would like to introduce you to SaaSGrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of
    your software products.
  </p>
</div>
</div>
{/* <button className={styles.button}>
  Reply
</button> */}
<Mail/>
</div>
<div  className={`flex-1 ${styles.rightcontainer}`}>
<div className={styles.lead}>
Lead Details
</div>
<div className={styles.details}>
  <div className="flex justify-between">
    <span>Name</span>
    <span id={styles.value}>Orlando</span>
  </div>
  </div>
  <div className={styles.details}>
  <div className="flex justify-between">
    <span>Contact No</span>
    <span id={styles.value}>Orlando</span>
  </div>
  </div>
  <div className={styles.details}>
  <div className="flex justify-between">
    <span>Email ID</span>
    <span id={styles.value}>Orlando</span>
  </div>
  </div>
  <div className={styles.details}>
  <div className="flex justify-between">
    <span>LinkedIn</span>
    <span id={styles.value}>Orlando</span>
  </div>
  </div>
<div className={styles.lead}>
  Activies
</div>
<div>
<Image src={sample}></Image>
</div>
</div>

</div>
    </>
}