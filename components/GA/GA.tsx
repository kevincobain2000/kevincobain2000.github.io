import Script from 'next/script';

interface Props {
}
export const GA = (props:Props) => {
    return (
        <>
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
        </>
    )
}