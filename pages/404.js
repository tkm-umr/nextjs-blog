import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout404'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <section>
                <h1>404</h1>
                <p>Page Not Found</p>
            </section>
        </Layout>
    );
}
