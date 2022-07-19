interface Props {
}
export const Morph = (props:Props) => {
    return (
        <div>
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
        </div>
    )
}