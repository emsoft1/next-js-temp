import Image from "next/image";
import styles from "../styles/layout.module.css";
// this the layout for  all all of the pages
const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div>
                    <Image
                        src="/zoolbia_logo.png"
                        alt="zoolbia logo Logo"
                        width={200}
                        height={200}
                    />
                </div>

                {children}

                <footer className={styles.footer}>
                    <a
                        href="https://www.oo.pictures/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Copyright © 2022 oo.pictures.{" "}
                        <span className={styles.logo}>
                            <Image
                                src="/oo-pictures.svg"
                                alt="oo.pictures Logo"
                                width={72}
                                height={16}
                            />
                        </span>
                    </a>
                </footer>
            </main>
        </div>
    );
};

export default Layout;
