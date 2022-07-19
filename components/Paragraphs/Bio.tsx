import { Contact } from "./Contact";

interface Props {
}
export const Bio = (props:Props) => {
    return (
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
        <Contact />
      </div>
    )
}