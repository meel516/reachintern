import Image from "next/image";
import loginimg from ".//../../public/Login/Logo 12.png"
import googlImg from ".//../../public/Login/Login/Frame.png"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-full">
    <nav className ="flex w-full justify-center h-16 items-center">
    
        <Image src={loginimg} style={{height:"24px"}} alt="bootlr"></Image>
    
    </nav>
    <main className="flex justify-center items-center flex-1">
    <div  className={styles.loginContainer} >
<div className={styles.loginTop}>

  <span> Create a new account</span>
  <div className={styles.signupContainer}>
<Image src={googlImg} alt="google"></Image><span>Sign Up with Google</span>
  </div>
  </div>
  <div className={styles.loginTop}>

<button className={styles.button}>Create an Account</button>
  <div className={styles.signinContainer}>
<span>already have an account?</span>
<span className="styles.signin">Signin</span>
  </div>
  </div>
    </div>
    <div>

    </div>
       </main>
       </div>
    </>
  );
}
