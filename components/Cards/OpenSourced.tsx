interface Props {
}
export const OpenSourced = (props:Props) => {
    const openSourced = [
        {
            name: "Sentiment Classifier",
            description: "Sentiment Classifier using Word Sense Disambiguation",
            github: "https://github.com/kevincobain2000/sentiment_classifier",
            demo: "",
            blog: "",
        },
        {
            name: "jProcessing",
            description: "Japanese Natural Langauge Processing Libraries",
            github: "https://github.com/kevincobain2000/jProcessing",
            demo: ""
        },
        {
            name: "Laravel Throttled Alert Notifications",
            description: "Send alert to email, microsoft teams from laravel app, when an exception occurs.",
            github: "https://github.com/kevincobain2000/laravel-alert-notifications",
            demo: ""
        },
        {
            name: "Gobrew",
            description: "Install and manage Go version",
            github: "https://github.com/kevincobain2000/gobrew",
            demo: "https://github.com/kevincobain2000/gobrew/actions",
            blog: "https://medium.com/web-developer/go-version-manager-gobrew-c8750157dfe6"
        },
        {
            name: "Setup Go - Github Action",
            description: "Setup Go in github action",
            github: "https://github.com/kevincobain2000/action-gobrew",
            demo: "",
            blog: "https://medium.com/web-developer/dead-simple-go-setup-github-actions-ee9fd7e1c87f"
        },
        {
            name: "Scrape App store and Google play reviews",
            description: "App store reviews monitoring tool",
            github: "https://github.com/kevincobain2000/go-app-reviews-scraper",
            demo: "",
            blog: ""
        },
        {
            name: "Laravel Request Docs",
            description: "Automatically generate Laravel API docs",
            github: "https://github.com/rakutentech/laravel-request-docs",
            demo: "https://kevincobain2000.github.io/laravel-admin-api/request-docs/",
            blog: ""
        },
        {
            name: "Laravel ERD",
            description: "Automatically generate Laravel ERD",
            github: "https://github.com/kevincobain2000/laravel-erd",
            demo: "https://kevincobain2000.github.io/laravel-blog/erd/",
            blog: ""
        },
        {
            name: "Miller Rabin Primality Test Online",
            description: "Big integers prime number checker",
            github: "https://github.com/kevincobain2000/miller-rabin-primality-test-online",
            demo: "https://kevincobain2000.github.io/miller-rabin-primality-test-online/",
            blog: ""
        },
        {
            name: "Google Cloud Icons Search",
            description: "Search Google Cloud Icons",
            github: "https://github.com/kevincobain2000/google-cloud-icons",
            demo: "https://kevincobain2000.github.io/google-cloud-icons/",
            blog: ""
        },
        {
            name: "Go Language Cheat Sheet",
            description: "Quick search for golang syntax and features",
            github: "https://github.com/kevincobain2000/golang-cheat-sheet",
            demo: "https://kevincobain2000.github.io/golang-cheat-sheet/",
            blog: ""
        },
        {
            name: "LATEX Writer",
            description: "Write beautiful docs in LaTeX css.",
            github: "https://github.com/kevincobain2000/latex-writer/",
            demo: "https://kevincobain2000.github.io/latex-writer/",
            blog: ""
        },
        {
            name: "Medium Code Highlight",
            description: "Add highlighted code to Medium story.",
            github: "https://github.com/kevincobain2000/medium-code-highlight/",
            demo: "https://kevincobain2000.github.io/medium-code-highlight/",
            blog: ""
        }
    ];
    return (
        <div>
          <h2>Tools</h2>
          <div className="appearances-list">
            <div className="headshot"></div>
            <ul>
                {openSourced.map((appearance) => (
                    <li key={appearance.name}>
                        <h4>{appearance.name}</h4>
                        {appearance.description}
                        <br />
                        <a href={appearance.github} title={appearance.github}>Github</a>
                        {" "}
                        {appearance.demo && <a href={appearance.demo} title={appearance.demo}>Demo</a>}
                        {" "}
                        {appearance.blog && <a href={appearance.blog} title={appearance.blog}>Blog</a>}
                    </li>
                ))}

            </ul>
          </div>
        </div>
    )
}