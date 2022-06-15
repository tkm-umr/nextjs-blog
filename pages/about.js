import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/about.module.scss';

export default function About() {
return (
        <Layout>
            <Head>
                <title>ABOUT</title>
            </Head>
            <section>
                <h1>ABOUT</h1>
                <p>ここがアバウトページになります。</p>
                <div className={styles.grid}>
                    <Image priority src="/images/contents1.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents2.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents3.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents4.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents5.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents6.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents7.svg" width={240} height={160} alt="" />
                    <Image priority src="/images/contents8.svg" width={240} height={160} alt="" />
                </div>
            </section>
        </Layout>
    );
}
