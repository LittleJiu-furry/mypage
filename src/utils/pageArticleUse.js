import tocPlugin from 'showdown-toc'
import katex from 'showdown-katex'
const toc = tocPlugin()
export default [
    toc(),
    katex({
        displayMode: true,
        throwOnError: false,
        output: "mathml",
        delimiters: [
            { left: "$$", right: "$$", display: true, asciimath: true,},
            { left: "$", right: "$", display: false, asciimath: true,},
        ],

    }),
]