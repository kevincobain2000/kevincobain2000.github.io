import Head from "next/head";
import { Meta, Header, Bio, OpenSourced, Footer, Morph,  GA} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <main>
        <section id="intro">
          <Header />
          <Bio />
        </section>
        <section id="appearances">
            <OpenSourced />
        </section>

        <section id="footer">
            <Footer />
        </section>
      </main>
      <Morph />
      <GA />
    </>
  );
}
