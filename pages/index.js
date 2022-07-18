import Head from "next/head";
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pulkit Kathuria</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Pulkit Kathuria</title>
        <meta name="description" content="I work at Rakuten designing platform products to power entrepreneurship worldwide." />
        <meta name="keywords" content="Pulkit Kathuria, design, product, platform, international, Japan, Rakuten" />
        <meta name="author" content="Pulkit Kathuria" />
        <meta property="og:title" content="Pulkit Kathuria" />
        <meta property="og:description" content="I work at Rakuten as Applications Engineer in Japan" />
        <meta property="og:image" content="https://kevincobain2000.github.io/img/me-headshot.png" />
        <meta property="og:url" content="https://kevincobain2000.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Pulkit Kathuria" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <main>
        <section id="intro">
          <h1 className="name">Pulkit Kathuria</h1>
          <div className="portrait"></div>
          <p className="tagline">
            Tech lead, developer, front end, back end, dev ops and server side
            engineer. Architect and Assistant Manager.
          </p>
          <div className="bio">
            <p>
              I am a Tokyo based Applications developer. Working in{" "}
              <a
                href="https://global.rakuten.com/corp/about/"
                title="Rakuten Inc"
              >
                {" "}
                Rakuten Inc.
              </a>
              , Japan as Tech Lead and Architect. Prior to that I worked at{" "}
              <a href="https://www.jaist.ac.jp/index.html" title="Gree">
                JAIST
              </a>
              ,{" "}
              <a href="https://corp.gree.net/jp/en/" title="Gree">
                GREE
              </a>
              ,{" "}
              <a href="https://www.telstra.com.au/" title="Telstra">
                Telstra
              </a>{" "}
              and IBM
            </p>
            <p>
              🎓 Before my career in IT tech industry, I studied NLP and A.I in
              the{" "}
              <a href="https://www.jaist.ac.jp/index.html">
                JAIST 北陸先端科学技術大学院大学
              </a>
              . Computer Science at{" "}
              <a href="https://www.rmit.edu.au" title="RMIT">
                RMIT
              </a>{" "}
              and{" "}
              <a
                href="https://www.cqu.edu.au/"
                title="Central Queensland University"
              >
                Central Queensland University
              </a>
            </p>
            <p>
              👋{" "}
              <a href="kevincobain2000@gmail.com">kevincobain2000@gmail.com</a>
              <br />
              🚀{" "}
              <a href="https://www.linkedin.com/in/プルキット-カトゥーリヤ-5895b759/">
                LinkedIn
              </a>
              <br />
              ✒️ <a href="https://medium.com/@kevincobain2000_74431">Medium</a>
              <br />
              💻 <a href="https://github.com/kevincobain2000">Github</a>
              <br />
            </p>
          </div>
        </section>
        <section id="appearances">
          <h2>Libraries</h2>
          <div className="appearances-list">
            <div className="headshot"></div>
            <ul>
              <li>
                <h4>Sentiment Classifier</h4>
                Sentiment Classifier using Word Sense Disambiguation <br />{" "}
                <a href="https://github.com/kevincobain2000/sentiment_classifier">
                  Github
                </a>{" "}
                <a
                  href="https://github.com/kevincobain2000/sentiment_classifier"
                  title="Sentiment Classifier using WSD"
                >
                  <i className="fa fa-play-circle"></i>
                </a>
              </li>
              <li>
                <h4>jProcessing</h4>
                Japanese Natural Langauge Processing Libraries <br />{" "}
                <a href="https://github.com/kevincobain2000/jProcessing">
                  Github
                </a>{" "}
                <a
                  href="https://github.com/kevincobain2000/jProcessing"
                  title="Sentiment Classifier using WSD"
                >
                  <i className="fa fa-play-circle"></i>
                </a>
              </li>
              <li>
                <h4>Laravel Throttled Alert Notifications</h4>
                Send alert to email, microsoft teams from laravel app, when an
                exception occurs. Throttle is enabled by default.
                <br />{" "}
                <a href="https://github.com/kevincobain2000/laravel-alert-notifications">
                  Github
                </a>{" "}
                <a
                  href="https://github.com/kevincobain2000/laravel-alert-notifications"
                  title="Sentiment Classifier using WSD"
                >
                  <i className="fa fa-play-circle"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="appearances">
          <h2>Tools</h2>
          <div className="appearances-list">
            <ul>
              <li>
                <h4>Gobrew</h4>
                Install and manage Go version{" "}
                <a href="https://github.com/kevincobain2000/gobrew">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://medium.com/web-developer/go-version-manager-gobrew-c8750157dfe6"
                  title="Medium article"
                >
                  Medium
                </a>
              </li>
              <li>
                <h4>Setup Go - Github Action</h4>
                Dead simple setup up go{" "}
                <a href="https://github.com/kevincobain2000/action-gobrew">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://medium.com/web-developer/dead-simple-go-setup-github-actions-ee9fd7e1c87f"
                  title="Medium article"
                >
                  Medium
                </a>
              </li>
              <li>
                <h4>Scrape App store and Google play reviews</h4>
                App store reviews monitoring tool{" "}
                <a href="https://github.com/kevincobain2000/go-app-reviews-scraper">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/kevincobain2000/go-app-reviews-scraper"
                  title="Demo"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Laravel Request Docs</h4>
                Automatically generate Laravel API docs{" "}
                <a href="https://github.com/rakutentech/laravel-request-docs">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/laravel-admin-api/request-docs/"
                  title="laravel request docs demo"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Laravel ERD</h4>
                Automatically generate Laravel ERD{" "}
                <a href="https://github.com/kevincobain2000/laravel-erd">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/laravel-blog/erd/"
                  title="laravel ERD demo"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Miller Rabin Primality Test Online</h4>
                Big integers prime number checker{" "}
                <a href="https://github.com/kevincobain2000/miller-rabin-primality-test-online">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/miller-rabin-primality-test-online/"
                  title="Sentiment Classifier using WSD"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Google Cloud Icons Search</h4>
                Search Google Cloud Icons{" "}
                <a href="https://github.com/kevincobain2000/google-cloud-icons">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/google-cloud-icons/"
                  title="Search Google Cloud Icons"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Go Language Cheat Sheet</h4>
                Quick search for golang syntax and features{" "}
                <a href="https://kevincobain2000.github.io/golang-cheat-sheet/">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/golang-cheat-sheet/"
                  title="Go Lang cheat sheet tool"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>LATEX Writer</h4>
                Write beautiful docs in LaTeX css.{" "}
                <a href="https://github.com/kevincobain2000/latex-writer/">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/latex-writer/"
                  title="Go Lang cheat sheet tool"
                >
                  Demo
                </a>
              </li>
              <li>
                <h4>Medium Code Highlight</h4>
                Add highlighted code to Medium story.{" "}
                <a href="https://github.com/kevincobain2000/medium-code-highlight/">
                  Github
                </a>{" "}
                |{" "}
                <a
                  href="https://kevincobain2000.github.io/medium-code-highlight/"
                  title="Go Lang cheat sheet tool"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="footer">
          <p>&copy; 2019 Pulkit Kathuria</p>
          <p>
            <a href="#" name="top" title="Back to top">
              Back to top ↑
            </a>
          </p>
        </section>
      </main>
      <div className="morph-wrap">
        <svg
          className="morph morph-fill"
          width="1400"
          height="770"
          viewBox="0 0 1400 770"
        >
          <path d="M1124,500 C1576.65519,710.690415 1354.69369,67.8405524 1172,34 C989.306308,0.159447625 202,-47.8558795 105,118 C8,283.855879 72.6921256,450.354687 250,398 C504,323 849,372 1124,500 Z" />
        </svg>
      </div>
      <div className="morph-wrap morph-outline">
        <svg className="morph" viewBox="0 0 1400 770">
          <path
            stroke="#EBC6B0"
            strokeWidth="1"
            fill="none"
            d="M427.015355,167.437606 C535.482156,52.9439714 593.887357,-31.3182891 805.13435,-60.458785 C1016.38134,-89.5992808 1370.46804,-110.922957 1380,-153 C1398,-232.457597 608,-485.124776 321,-323.062388 C34,-161 71.298211,497.441846 191,497.441846 C310.701789,497.441846 278.715871,323.977181 427.015355,167.437606 Z"
          />
        </svg>
      </div>
      <div className="morph-wrap morph-outline-lower">
        <svg className="morph" width="100%" height="100%">
          <path
            stroke="#00004F"
            strokeWidth="1"
            fill="none"
            d="M-144.479461,787.624587 C-26.8935519,862.038113 -15.8974916,946.952497 292.444372,1025.98122 C600.786236,1105.00994 1075.85569,856.663621 1339.31042,683.5 C1602.76516,510.336379 1872.33159,608.422489 1693.89739,944.409825 C1515.46319,1280.39716 250.813485,1240.99824 -75.1940128,1127.56957 C-401.20151,1014.1409 -262.06537,713.211061 -144.479461,787.624587 Z"
          />
        </svg>
      </div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-40862413-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-40862413-1');
        `}
      </Script>
    </div>
  );
}
