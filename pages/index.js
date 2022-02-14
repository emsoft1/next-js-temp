import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../component/nav";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zoolbia oo.pictures GmbH</title>
                <meta
                    name="description"
                    content="Zoolbia is a marketing app designed from ground up for the everyday needs of farsi speaking European citizens and non-citizens"
                />
                <link rel="icon" href="/zoolbia_icon.png" />
            </Head>
            <body>
                <div>
                    <Nav /> {/* //navigation bar  */}
                    <main className={styles.main}>
                        <h1 className={styles.title}>Zoolbia App</h1>
                        <p>
                            Zoolbia App Zoolbia is a marketing app designed from
                            ground up for the everyday needs of farsi speaking
                            European citizens and non-citizens.
                        </p>

                        <h1>Mission</h1>
                        <p className={styles.description}>
                            With Zoolbia we aim to redefine the way Farsi
                            Businesses are presentred over the internet for
                            their potential local customers.
                        </p>
                        <h1>Vision</h1>
                        <p className={styles.description}>
                            After launching our Betha version in March 2022 on
                            all app-stores, we will start to build extra
                            functionalities within the "zoolbia app" as well as
                            for its web-application for the purpose of
                            empowering Farsi Speaking local businesses to be
                            able to benefit from our programming skills for
                            free, without having to pay a webagency develop
                            those needed functionalities exclusively for their
                            website
                        </p>
                    </main>
                </div>
            </body>
        </div>
    );
}
