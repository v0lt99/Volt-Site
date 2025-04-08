<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Volt Site</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="color-scheme" content="light only"/>
        <meta name="description" content="this is a test site"/>
        <meta property="og:site_name" content="Volt Site"/>
        <meta property="og:title" content="Volt Site"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="this is a test site"/>
        <meta property="og:image" content="https://voldiagonyt.com/assets/images/card.jpg?v=6336a318"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1280"/>
        <meta property="og:image:height" content="800"/>
        <meta property="og:url" content="https://voldiagonyt.com"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#1400FF"/>
        <link rel="canonical" href="https://voldiagonyt.com"/>
        <style>
            html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
            }

            article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
                display: block;
            }

            body {
                line-height: 1;
            }

            ol,ul {
                list-style: none;
            }

            blockquote,q {
                quotes: none;
            }

            blockquote:before,blockquote:after,q:before,q:after {
                content: '';
                content: none;
            }

            table {
                border-collapse: collapse;
                border-spacing: 0;
            }

            body {
                -webkit-text-size-adjust: none
            }

            mark {
                background-color: transparent;
                color: inherit
            }

            input::-moz-focus-inner {
                border: 0;
                padding: 0
            }

            input[type="text"],input[type="email"],select,textarea {
                -moz-appearance: none;
                -webkit-appearance: none;
                -ms-appearance: none;
                appearance: none
            }

            *, *:before, *:after {
                box-sizing: border-box;
            }

            body {
                line-height: 1.0;
                min-height: var(--viewport-height);
                min-width: 320px;
                overflow-x: hidden;
                word-wrap: break-word;
                background-color: #1400FF;
            }

            body:after {
                background-color: #EDEDED;
                content: '';
                display: block;
                pointer-events: none;
                position: fixed;
                transform: scale(1);
                z-index: 1;
                height: 100%;
                left: 0;
                opacity: 0;
                top: 0;
                transition: opacity 1s ease-in-out 0s, visibility 1s 0s;
                visibility: hidden;
                width: 100%;
            }

            body.is-loading:after {
                opacity: 1;
                visibility: visible;
            }

            :root {
                --background-height: 100vh;
                --site-language-alignment: left;
                --site-language-direction: ltr;
                --site-language-flex-alignment: flex-start;
                --site-language-indent-left: 1;
                --site-language-indent-right: 0;
                --site-language-margin-left: 0;
                --site-language-margin-right: auto;
                --viewport-height: 100vh;
            }

            html {
                font-size: 18pt;
            }

            u {
                text-decoration: underline;
            }

            strong {
                color: inherit;
                font-weight: bolder;
            }

            em {
                font-style: italic;
            }

            code {
                background-color: rgba(144,144,144,0.25);
                border-radius: 0.25em;
                font-family: 'Lucida Console', 'Courier New', monospace;
                font-size: 0.9em;
                font-weight: normal;
                letter-spacing: 0;
                margin: 0 0.25em;
                padding: 0.25em 0.5em;
                text-indent: 0;
            }

            mark {
                background-color: rgba(144,144,144,0.25);
            }

            spoiler-text {
                -webkit-text-stroke: 0;
                background-color: rgba(32,32,32,0.75);
                text-shadow: none;
                text-stroke: 0;
                color: transparent;
                cursor: pointer;
                transition: color 0.1s ease-in-out;
            }

            spoiler-text.active {
                color: #FFFFFF;
                cursor: text;
            }

            s {
                text-decoration: line-through;
            }

            sub {
                font-size: smaller;
                vertical-align: sub;
            }

            sup {
                font-size: smaller;
                vertical-align: super;
            }

            a {
                color: inherit;
                text-decoration: underline;
                transition: color 0.25s ease;
            }

            a[onclick]:not([href]) {
                cursor: pointer;
            }

            unloaded-script {
                display: none;
            }

            #wrapper {
                -webkit-overflow-scrolling: touch;
                align-items: stretch;
                display: flex;
                flex-direction: row;
                justify-content: center;
                min-height: var(--viewport-height);
                overflow: hidden;
                position: relative;
                z-index: 2;
                padding: 0 2.25rem 0 2.25rem;
            }

            #main {
                --alignment: var(--site-language-alignment);
                --flex-alignment: var(--site-language-flex-alignment);
                --indent-left: var(--site-language-indent-left);
                --indent-right: var(--site-language-indent-right);
                --margin-left: var(--site-language-margin-left);
                --margin-right: var(--site-language-margin-right);
                --border-radius-tl: 0;
                --border-radius-tr: 0;
                --border-radius-br: 0;
                --border-radius-bl: 0;
                align-items: center;
                display: flex;
                flex-grow: 0;
                flex-shrink: 0;
                justify-content: center;
                max-width: 100%;
                position: relative;
                text-align: var(--alignment);
                z-index: 1;
                background-color: #FFFFFF;
            }

            #main > .inner {
                --padding-horizontal: 3rem;
                --padding-vertical: 3rem;
                --spacing: 0.75rem;
                --width: 60rem;
                border-radius: var(--border-radius-tl) var(--border-radius-tr) var(--border-radius-br) var(--border-radius-bl);
                max-width: 100%;
                position: relative;
                width: var(--width);
                z-index: 1;
                padding: var(--padding-vertical) var(--padding-horizontal);
            }

            #main > .inner > * {
                margin-top: var(--spacing);
                margin-bottom: var(--spacing);
            }

            #main > .inner > :first-child {
                margin-top: 0 !important;
            }

            #main > .inner > :last-child {
                margin-bottom: 0 !important;
            }

            #main > .inner > .full {
                margin-left: calc(var(--padding-horizontal) * -1);
                max-width: calc(100% + calc(var(--padding-horizontal) * 2) + 0.4725px);
                width: calc(100% + calc(var(--padding-horizontal) * 2) + 0.4725px);
            }

            #main > .inner > .full:first-child {
                border-top-left-radius: inherit;
                border-top-right-radius: inherit;
                margin-top: calc(var(--padding-vertical) * -1) !important;
            }

            #main > .inner > .full:last-child {
                border-bottom-left-radius: inherit;
                border-bottom-right-radius: inherit;
                margin-bottom: calc(var(--padding-vertical) * -1) !important;
            }

            #main > .inner > .full.screen {
                border-radius: 0 !important;
                max-width: 100vw;
                position: relative;
                width: 100vw;
                left: 50%;
                margin-left: -50vw;
                right: auto;
            }

            body.is-instant #main, body.is-instant #main > .inner > *,body.is-instant #main > .inner > section > * {
                transition: none !important;
            }

            body.is-instant:after {
                display: none !important;
                transition: none !important;
            }

            h1, h2, h3, p {
                direction: var(--site-language-direction);
                position: relative;
            }

            h1 span.p, h2 span.p, h3 span.p, p span.p {
                display: block;
                position: relative;
            }

            h1 span[style], h2 span[style], h3 span[style], p span[style], h1 strong, h2 strong, h3 strong, p strong, h1 a, h2 a, h3 a, p a, h1 code, h2 code, h3 code, p code, h1 mark, h2 mark, h3 mark, p mark, h1 spoiler-text, h2 spoiler-text, h3 spoiler-text, p spoiler-text {
                -webkit-text-fill-color: currentcolor;
            }

            #text01 {
                color: #000000;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 2em;
                line-height: 1.5;
                font-weight: 700;
            }

            #text01 a {
                text-decoration: underline;
            }

            #text01 a:hover {
                text-decoration: none;
            }

            #text01 span.p:nth-child(n + 2) {
                margin-top: 1rem;
            }

            #text02 {
                color: #000000;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                line-height: 1.5;
                font-weight: 400;
            }

            #text02 a {
                text-decoration: underline;
            }

            #text02 a:hover {
                text-decoration: none;
            }

            #text02 span.p:nth-child(n + 2) {
                margin-top: 1rem;
            }

            #text03 {
                color: #000000;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                line-height: 1.5;
                font-weight: 400;
            }

            #text03 a {
                text-decoration: underline;
            }

            #text03 a:hover {
                text-decoration: none;
            }

            #text03 span.p:nth-child(n + 2) {
                margin-top: 1rem;
            }

            .buttons {
                cursor: default;
                display: flex;
                justify-content: var(--flex-alignment);
                letter-spacing: 0;
                padding: 0;
            }

            .buttons li {
                max-width: 100%;
                text-align: var(--alignment);
            }

            .buttons li a {
                align-items: center;
                justify-content: center;
                max-width: 100%;
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                white-space: nowrap;
            }

            #buttons03 {
                gap: 0.75rem;
                flex-direction: row;
                flex-wrap: wrap;
            }

            #buttons03 li a {
                display: inline-flex;
                width: auto;
                height: 2.5rem;
                line-height: 2.5rem;
                padding: 0 1.25rem;
                vertical-align: middle;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                font-weight: 400;
                border-radius: 0rem;
                transition: transform 2s ease, color 2s ease, background-color 2s ease, border-color 2s ease;
            }

            #buttons03 li a svg {
                display: block;
                fill: #FFFFFF;
                flex-grow: 0;
                flex-shrink: 0;
                height: 100%;
                min-width: 16px;
                pointer-events: none;
                width: 1em;
                margin-left: -0.125em;
                margin-right: calc(0.5em + 0rem);
                transition: fill 2s ease;
            }

            #buttons03 li a .label {
                direction: var(--site-language-direction);
                overflow: hidden;
            }

            #buttons03 .button {
                background-color: #000000;
                color: #FFFFFF;
            }

            #buttons03 li a:hover {
                transform: rotate(-10deg);
            }

            #buttons01 {
                gap: 0.75rem;
                flex-direction: row;
                flex-wrap: wrap;
            }

            #buttons01 li a {
                display: inline-block;
                width: auto;
                height: 2.5rem;
                line-height: 2.5rem;
                padding: 0 1.25rem;
                vertical-align: middle;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                font-weight: 400;
                border-radius: 0rem;
                direction: var(--site-language-direction);
                overflow: hidden;
                text-overflow: ellipsis;
                transition: transform 2s ease, color 2s ease, background-color 2s ease, border-color 2s ease;
            }

            #buttons01 .button {
                background-color: #000000;
                color: #FFFFFF;
            }

            #buttons01 li a:hover {
                transform: rotate(10deg);
            }

            #buttons01 .n01 {
                background-color: #DBFF00;
                color: #071278;
            }

            #buttons02 {
                gap: 0.75rem;
                flex-direction: row;
                flex-wrap: wrap;
            }

            #buttons02 li a {
                display: inline-flex;
                width: auto;
                height: 2.5rem;
                line-height: 2.5rem;
                padding: 0 1.25rem;
                vertical-align: middle;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                font-weight: 400;
                border-radius: 0rem;
                transition: transform 2s ease, color 2s ease, background-color 2s ease, border-color 2s ease;
            }

            #buttons02 li a svg {
                display: block;
                fill: #FFFFFF;
                flex-grow: 0;
                flex-shrink: 0;
                height: 100%;
                min-width: 16px;
                pointer-events: none;
                width: 1em;
                margin-left: -0.125em;
                margin-right: calc(0.5em + 0rem);
                transition: fill 2s ease;
            }

            #buttons02 li a .label {
                direction: var(--site-language-direction);
                overflow: hidden;
            }

            #buttons02 .button {
                background-color: #000000;
                color: #FFFFFF;
            }

            #buttons02 li a:hover {
                transform: rotate(-10deg);
            }

            #buttons02 .n01 svg {
                fill: #000000;
            }

            #buttons02 .n01 {
                background-color: #3300FF;
                color: #000000;
            }

            .list {
                display: block;
            }

            .list ul, .list ol {
                display: inline-block;
                max-width: 100%;
                text-align: var(--site-language-alignment);
                vertical-align: middle;
            }

            .list ul li, .list ol li {
                direction: var(--site-language-direction);
                display: flex;
                position: relative;
            }

            .list ul li:before, .list ol li:before {
                background-repeat: no-repeat;
                content: '';
                display: block;
                flex-grow: 0;
                flex-shrink: 0;
                font-variant: normal !important;
                letter-spacing: 0 !important;
                order: 1;
                position: relative;
            }

            .list ul li:after, .list ol li:after {
                content: '';
                display: block;
                flex-grow: 0;
                flex-shrink: 0;
                order: 2;
                pointer-events: none;
            }

            .list ul li p, .list ol li p {
                flex-grow: 1;
                flex-shrink: 1;
                order: 3;
            }

            .list ul li:first-child, .list ol li:first-child {
                margin-top: 0 !important;
            }

            #list02:not(:first-child) {
                margin-top: 2.625rem !important;
            }

            #list02:not(:last-child) {
                margin-bottom: 2.625rem !important;
            }

            #list02 {
                color: #000000;
                font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 1em;
                line-height: 1.5;
                font-weight: 400;
            }

            #list02 a {
                text-decoration: underline;
            }

            #list02 a:hover {
                text-decoration: none;
            }

            #list02 ul {
                width: 100%;
            }

            #list02 ul li {
                margin-top: 1rem;
            }

            #list02 ul li:after {
                width: 0.625rem;
            }

            #list02 ul li:before {
                background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2040%2040%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2210%22%20fill%3D%22%23000000%22%20%2F%3E%3C%2Fsvg%3E');
                background-position: left 60%;
                background-repeat: no-repeat;
                background-size: contain;
                height: 1.5rem;
                line-height: 1.5rem;
                min-width: 0.703125rem;
            }

            .icc-credits {
                display: block;
                opacity: 1 !important;
                position: relative;
                transition-delay: 0s !important;
            }

            .icc-credits span {
                border-radius: 24px;
                cursor: pointer;
                display: inline-block;
                font-family: Arial, sans-serif;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 1;
                position: relative;
                text-decoration: none;
                width: auto;
            }

            .icc-credits span a {
                display: inline-block;
                padding: 0.5em 0.375em;
                position: relative;
                text-decoration: none;
                transition: color 0.25s ease, transform 0.25s ease;
                z-index: 1;
            }

            .icc-credits span a:before {
                content: '( ';
                opacity: 1;
                transition: opacity 0.25s ease;
            }

            .icc-credits span a:after {
                content: ' )';
                opacity: 1;
                transition: opacity 0.25s ease;
            }

            .icc-credits span::after {
                background-image: linear-gradient(30deg, #A464A1 15%, #3B5DAD 85%);
                border-radius: inherit;
                box-shadow: 0 0.25em 1.25em 0 rgba(0,0,0,0.25);
                content: '';
                display: block;
                height: calc(100% + 2px);
                left: -1px;
                opacity: 0;
                pointer-events: none;
                position: absolute;
                top: -1px;
                transition: opacity 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
                width: calc(100% + 2px);
            }

            .icc-credits span:hover {
                text-transform: none !important;
            }

            .icc-credits span:hover a {
                color: #ffffff !important;
                transform: scale(1.1) translateY(-0.05rem);
            }

            .icc-credits span:hover a:before {
                opacity: 0;
            }

            .icc-credits span:hover a:after {
                opacity: 0;
            }

            .icc-credits span:hover::after {
                opacity: 1;
                transform: scale(1.1) translateY(-0.05rem);
            }

            #credits span {
                color: rgba(0,0,0,0.498);
                margin-top: 0.75rem !important;
            }

            @media (max-width: 1920px) {
                #main > .inner {
                    --width: 60rem;
                }
            }

            @media (max-width: 1680px) {
                html {
                    font-size: 13pt;
                }
            }

            @media (max-width: 1280px) {
                html {
                    font-size: 13pt;
                }

                #main > .inner {
                    --width: 60rem;
                }
            }

            @media (max-width: 1024px) {
                #main > .inner {
                    --width: 60rem;
                }
            }

            @media (max-width: 980px) {
                body:before {
                    background-color: #1400FF;
                    content: '';
                    display: block;
                    height: var(--background-height);
                    left: 0;
                    pointer-events: none;
                    position: relative;
                    top: 0;
                    transform: scale(1);
                    width: 100%;
                    z-index: 0;
                    flex-grow: 1;
                    flex-shrink: 0;
                    max-height: 1vh;
                    overflow: hidden;
                }

                html {
                    font-size: 11pt;
                }

                body {
                    display: flex;
                    flex-direction: column;
                    background-color: #FFFFFF;
                }

                #main {
                    border-bottom: none;
                    border-left: none;
                    border-radius: 0;
                    border-right: none;
                    box-shadow: none;
                    width: 100%;
                    background-color: #FFFFFF;
                }

                #main > .inner {
                    background: none;
                    max-width: 75%;
                    width: auto;
                }

                #wrapper {
                    height: auto !important;
                    min-height: 0;
                    padding: 0;
                }
            }

            @media (max-width: 736px) {
                html {
                    font-size: 11pt;
                }

                #main > .inner {
                    --padding-horizontal: 1.875rem;
                    --padding-vertical: 1rem;
                    --spacing: 0.75rem;
                    max-width: 100%;
                }

                #wrapper {
                    padding: 0;
                }

                #text01 {
                    letter-spacing: 0rem;
                    width: 100%;
                    font-size: 2em;
                    line-height: 1.5;
                }

                #text02 {
                    letter-spacing: 0rem;
                    width: 100%;
                    font-size: 1em;
                    line-height: 1.5;
                }

                #text03 {
                    letter-spacing: 0rem;
                    width: 100%;
                    font-size: 1em;
                    line-height: 1.5;
                }

                #buttons03 {
                    gap: 0.75rem;
                }

                #buttons03 li a {
                    letter-spacing: 0rem;
                    font-size: 1em;
                }

                #buttons03 li a svg {
                    width: 1em;
                }

                #buttons01 {
                    gap: 0.75rem;
                }

                #buttons01 li a {
                    letter-spacing: 0rem;
                    font-size: 1em;
                }

                #buttons02 {
                    gap: 0.75rem;
                }

                #buttons02 li a {
                    letter-spacing: 0rem;
                    font-size: 1em;
                }

                #buttons02 li a svg {
                    width: 1em;
                }

                #list02:not(:first-child) {
                    margin-top: 2.5rem !important;
                }

                #list02:not(:last-child) {
                    margin-bottom: 2.5rem !important;
                }

                #list02 {
                    letter-spacing: 0rem;
                    font-size: 1em;
                    line-height: 1.5;
                    padding-left: calc(2.625rem * var(--indent-left));
                    padding-right: calc(2.625rem * var(--indent-right));
                }

                #list02 ul li {
                    margin-top: 4.75rem;
                }

                #list02 ul li:after {
                    width: 0.625rem;
                }

                #list02 ul li:before {
                    height: 1.5rem;
                    line-height: 1.5rem;
                    min-width: 0.703125rem;
                }
            }

            @media (max-width: 480px) {
                #main > .inner {
                    --spacing: 0.65625rem;
                }

                #wrapper {
                    padding: 0;
                }

                #buttons03 {
                    flex-direction: column;
                    flex-wrap: nowrap;
                }

                #buttons03 li a {
                    max-width: 32rem;
                    width: 100%;
                }

                #buttons01 {
                    flex-direction: column;
                    flex-wrap: nowrap;
                }

                #buttons01 li a {
                    max-width: 32rem;
                    width: 100%;
                }

                #buttons02 {
                    flex-direction: column;
                    flex-wrap: nowrap;
                }

                #buttons02 li a {
                    max-width: 32rem;
                    width: 100%;
                }
            }

            @media (max-width: 360px) {
                #main > .inner {
                    --padding-horizontal: 1.40625rem;
                    --padding-vertical: 0.75rem;
                    --spacing: 0.5625rem;
                }

                #wrapper {
                    padding: 0;
                }

                #text01 {
                    font-size: 1.5em;
                }

                #text02 {
                    font-size: 1em;
                }

                #text03 {
                    font-size: 1em;
                }

                #buttons03 {
                    gap: 0.5625rem;
                }

                #buttons01 {
                    gap: 0.5625rem;
                }

                #buttons02 {
                    gap: 0.5625rem;
                }

                #list02 {
                    font-size: 1em;
                }

                #list02 ul li:after {
                    width: 0.625rem;
                }

                #list02 ul li:before {
                    height: 1.5rem;
                    line-height: 1.5rem;
                    min-width: 0.703125rem;
                }
            }
        </style>
        <noscript>
            <style>
                body {
                    overflow: auto !important;
                }

                body:after {
                    display: none !important;
                }

                #main > .inner {
                    opacity: 1.0 !important;
                }

                @media (max-width: 980px) {
                    body:before {
                        flex-grow: 1;
                        flex-shrink: 0;
                        max-height: 1vh;
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                    }
                }
            </style>
        </noscript>
    </head>
    <body class="is-loading">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" display="none" width="0" height="0">
            <symbol id="icon-0a7a246abd083a3b4df1cbd9cb142871" viewBox="0 0 40 40">
                <path d="M33.1,35.5H26v-2.4h7.2V26h2.4v7.2v2.4H33.1z M33.1,6.9H26V4.5h7.2h2.4v2.4V14h-2.4V6.9z M6.9,14H4.5V6.9V4.5 h2.4H14v2.4H6.9V14z M13.1,13.1h13.8v13.8H13.1V13.1z M15.5,24.5h9.1v-9.1h-9.1V24.5z M6.9,33.1H14v2.4H6.9H4.5v-2.4V26h2.4V33.1z"/>
            </symbol>
            <symbol id="icon-be848c9691a8e3f7630e3908e426bf9f" viewBox="0 0 40 40">
                <path d="M37.9,10.6l-3.2-3.2c-0.4-0.4-1-0.7-1.6-0.7c-0.6,0-1.2,0.2-1.6,0.7L15.9,23l-7-7c-0.4-0.4-1-0.7-1.6-0.7S6.1,15.6,5.6,16 l-3.2,3.2c-0.4,0.4-0.7,1-0.7,1.6S2,22,2.4,22.5l8.6,8.6l3.2,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7l3.2-3.2l17.2-17.2 c0.4-0.4,0.7-1,0.7-1.6C38.6,11.6,38.4,11.1,37.9,10.6z"/>
            </symbol>
        </svg>
        <div id="wrapper">
            <div id="main">
                <div class="inner">
                    <h1 id="text01">Volt Site</h1>
                    <p id="text02">Welcome to Volt site</p>
                    <p id="text03">
                        you can email voltflare3@gmail.com for future updates
                    </p>
                    <ul id="buttons03" class="buttons">
                        <li>
                            <a href="https://voldiagonxyz.carrd.co/" class="button n01" role="button">
                                <svg aria-labelledby="buttons03-icon-1-title">
                                    <title id="buttons03-icon-1-title">QR Code</title>
                                    <use xlink:href="#icon-0a7a246abd083a3b4df1cbd9cb142871"></use>
                                </svg>
                                <span class="label">Dark Mode</span>
                            </a>
                        </li>
                    </ul>
                    <ul id="buttons01" class="buttons">
                        <li>
                            <a href="https://www.youtube.com/@Voltx90" class="button n01" role="button">Subscribe</a>
                        </li>
                    </ul>
                    <ul id="buttons02" class="buttons">
                        <li>
                            <a href="https://eaglercraft.com/mc/1.12.2" class="button n01" role="button">
                                <svg aria-labelledby="buttons02-icon-1-title">
                                    <title id="buttons02-icon-1-title">Check</title>
                                    <use xlink:href="#icon-be848c9691a8e3f7630e3908e426bf9f"></use>
                                </svg>
                                <span class="label">You could join my vids</span>
                            </a>
                        </li>
                    </ul>
                    <div id="list02" class="list">
                        <ul>
                            <li>
                                <p>Meet me at</p>
                            </li>
                            <li>
                                <p>roblox-voldiagon90</p>
                            </li>
                            <li>
                                <p>Bloxd-Volt too</p>
                            </li>
                            <li>
                                <p>youtube-@voltthree</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        **<button onclick="window.location.href='mailto:your-voltflare3@gmail.com?subject=Hello&body=Someone wants to talk with you "!';">
    Chat with me
</button>
**
</button>

</button>
        </div>
        <script>
            (function() {
                var on = addEventListener
                  , off = removeEventListener
                  , $ = function(q) {
                    return document.querySelector(q)
                }
                  , $$ = function(q) {
                    return document.querySelectorAll(q)
                }
                  , $body = document.body
                  , $inner = $('.inner')
                  , client = (function() {
                    var o = {
                        browser: 'other',
                        browserVersion: 0,
                        os: 'other',
                        osVersion: 0,
                        mobile: false,
                        canUse: null,
                        flags: {
                            lsdUnits: false,
                        },
                    }, ua = navigator.userAgent, a, i;
                    a = [['firefox', /Firefox\/([0-9\.]+)/, null], ['edge', /Edge\/([0-9\.]+)/, null], ['safari', /Version\/([0-9\.]+).+Safari/, null], ['chrome', /Chrome\/([0-9\.]+)/, null], ['chrome', /CriOS\/([0-9\.]+)/, null], ['ie', /Trident\/.+rv:([0-9]+)/, null], ['safari', /iPhone OS ([0-9_]+)/, function(v) {
                        return v.replace('_', '.').replace('_', '');
                    }
                    ]];
                    for (i = 0; i < a.length; i++) {
                        if (ua.match(a[i][1])) {
                            o.browser = a[i][0];
                            o.browserVersion = parseFloat(a[i][2] ? (a[i][2])(RegExp.$1) : RegExp.$1);
                            break;
                        }
                    }
                    a = [['ios', /([0-9_]+) like Mac OS X/, function(v) {
                        return v.replace('_', '.').replace('_', '');
                    }
                    ], ['ios', /CPU like Mac OS X/, function(v) {
                        return 0
                    }
                    ], ['ios', /iPad; CPU/, function(v) {
                        return 0
                    }
                    ], ['android', /Android ([0-9\.]+)/, null], ['mac', /Macintosh.+Mac OS X ([0-9_]+)/, function(v) {
                        return v.replace('_', '.').replace('_', '');
                    }
                    ], ['windows', /Windows NT ([0-9\.]+)/, null], ['undefined', /Undefined/, null]];
                    for (i = 0; i < a.length; i++) {
                        if (ua.match(a[i][1])) {
                            o.os = a[i][0];
                            o.osVersion = parseFloat(a[i][2] ? (a[i][2])(RegExp.$1) : RegExp.$1);
                            break;
                        }
                    }
                    if (o.os == 'mac' && ('ontouchstart'in window) && ((screen.width == 1024 && screen.height == 1366) || (screen.width == 834 && screen.height == 1112) || (screen.width == 810 && screen.height == 1080) || (screen.width == 768 && screen.height == 1024)))
                        o.os = 'ios';
                    o.mobile = (o.os == 'android' || o.os == 'ios');
                    var _canUse = document.createElement('div');
                    o.canUse = function(property, value) {
                        var style;
                        style = _canUse.style;
                        if (!(property in style))
                            return false;
                        if (typeof value !== 'undefined') {
                            style[property] = value;
                            if (style[property] == '')
                                return false;
                        }
                        return true;
                    }
                    ;
                    o.flags.lsdUnits = o.canUse('width', '100dvw');
                    return o;
                }())
                  , ready = {
                    list: [],
                    add: function(f) {
                        this.list.push(f);
                    },
                    run: function() {
                        this.list.forEach( (f) => {
                            f();
                        }
                        );
                    },
                }
                  , trigger = function(t) {
                    dispatchEvent(new Event(t));
                }
                  , cssRules = function(selectorText) {
                    var ss = document.styleSheets, a = [], f = function(s) {
                        var r = s.cssRules, i;
                        for (i = 0; i < r.length; i++) {
                            if (r[i]instanceof CSSMediaRule && matchMedia(r[i].conditionText).matches)
                                (f)(r[i]);
                            else if (r[i]instanceof CSSStyleRule && r[i].selectorText == selectorText)
                                a.push(r[i]);
                        }
                    }, x, i;
                    for (i = 0; i < ss.length; i++)
                        f(ss[i]);
                    return a;
                }
                  , escapeHtml = function(s) {
                    if (s === '' || s === null || s === undefined)
                        return '';
                    var a = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#39;',
                    };
                    s = s.replace(/[&<>"']/g, function(x) {
                        return a[x];
                    });
                    return s;
                }
                  , thisHash = function() {
                    var h = location.hash ? location.hash.substring(1) : null, a;
                    if (!h)
                        return null;
                    if (h.match(/\?/)) {
                        a = h.split('?');
                        h = a[0];
                        history.replaceState(undefined, undefined, '#' + h);
                        window.location.search = a[1];
                    }
                    if (h.length > 0 && !h.match(/^[a-zA-Z]/))
                        h = 'x' + h;
                    if (typeof h == 'string')
                        h = h.toLowerCase();
                    return h;
                }
                  , scrollToElement = function(e, style, duration) {
                    var y, cy, dy, start, easing, offset, f;
                    if (!e)
                        y = 0;
                    else {
                        offset = (e.dataset.scrollOffset ? parseInt(e.dataset.scrollOffset) : 0) * parseFloat(getComputedStyle(document.documentElement).fontSize);
                        switch (e.dataset.scrollBehavior ? e.dataset.scrollBehavior : 'default') {
                        case 'default':
                        default:
                            y = e.offsetTop + offset;
                            break;
                        case 'center':
                            if (e.offsetHeight < window.innerHeight)
                                y = e.offsetTop - ((window.innerHeight - e.offsetHeight) / 2) + offset;
                            else
                                y = e.offsetTop - offset;
                            break;
                        case 'previous':
                            if (e.previousElementSibling)
                                y = e.previousElementSibling.offsetTop + e.previousElementSibling.offsetHeight + offset;
                            else
                                y = e.offsetTop + offset;
                            break;
                        }
                    }
                    if (!style)
                        style = 'smooth';
                    if (!duration)
                        duration = 750;
                    if (style == 'instant') {
                        window.scrollTo(0, y);
                        return;
                    }
                    start = Date.now();
                    cy = window.scrollY;
                    dy = y - cy;
                    switch (style) {
                    case 'linear':
                        easing = function(t) {
                            return t
                        }
                        ;
                        break;
                    case 'smooth':
                        easing = function(t) {
                            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                        }
                        ;
                        break;
                    }
                    f = function() {
                        var t = Date.now() - start;
                        if (t >= duration)
                            window.scroll(0, y);
                        else {
                            window.scroll(0, cy + (dy * easing(t / duration)));
                            requestAnimationFrame(f);
                        }
                    }
                    ;
                    f();
                }
                  , scrollToTop = function() {
                    scrollToElement(null);
                }
                  , loadElements = function(parent) {
                    var a, e, x, i;
                    a = parent.querySelectorAll('iframe[data-src]:not([data-src=""])');
                    for (i = 0; i < a.length; i++) {
                        a[i].contentWindow.location.replace(a[i].dataset.src);
                        a[i].dataset.initialSrc = a[i].dataset.src;
                        a[i].dataset.src = '';
                    }
                    a = parent.querySelectorAll('video[autoplay]');
                    for (i = 0; i < a.length; i++) {
                        if (a[i].paused)
                            a[i].play();
                    }
                    e = parent.querySelector('[data-autofocus="1"]');
                    x = e ? e.tagName : null;
                    switch (x) {
                    case 'FORM':
                        e = e.querySelector('.field input, .field select, .field textarea');
                        if (e)
                            e.focus();
                        break;
                    default:
                        break;
                    }
                    a = parent.querySelectorAll('unloaded-script');
                    for (i = 0; i < a.length; i++) {
                        x = document.createElement('script');
                        x.setAttribute('data-loaded', '');
                        if (a[i].getAttribute('src'))
                            x.setAttribute('src', a[i].getAttribute('src'));
                        if (a[i].textContent)
                            x.textContent = a[i].textContent;
                        a[i].replaceWith(x);
                    }
                    x = new Event('loadelements');
                    a = parent.querySelectorAll('[data-unloaded]');
                    a.forEach( (element) => {
                        element.removeAttribute('data-unloaded');
                        element.dispatchEvent(x);
                    }
                    );
                }
                  , unloadElements = function(parent) {
                    var a, e, x, i;
                    a = parent.querySelectorAll('iframe[data-src=""]');
                    for (i = 0; i < a.length; i++) {
                        if (a[i].dataset.srcUnload === '0')
                            continue;
                        if ('initialSrc'in a[i].dataset)
                            a[i].dataset.src = a[i].dataset.initialSrc;
                        else
                            a[i].dataset.src = a[i].src;
                        a[i].contentWindow.location.replace('about:blank');
                    }
                    a = parent.querySelectorAll('video');
                    for (i = 0; i < a.length; i++) {
                        if (!a[i].paused)
                            a[i].pause();
                    }
                    e = $(':focus');
                    if (e)
                        e.blur();
                };
                window._scrollToTop = scrollToTop;
                var thisUrl = function() {
                    return window.location.href.replace(window.location.search, '').replace(/#$/, '');
                };
                var getVar = function(name) {
                    var a = window.location.search.substring(1).split('&'), b, k;
                    for (k in a) {
                        b = a[k].split('=');
                        if (b[0] == name)
                            return b[1];
                    }
                    return null;
                };
                var errors = {
                    handle: function(handler) {
                        window.onerror = function(message, url, line, column, error) {
                            (handler)(error.message);
                            return true;
                        }
                        ;
                    },
                    unhandle: function() {
                        window.onerror = null;
                    }
                };
                var loadHandler = function() {
                    setTimeout(function() {
                        $body.classList.remove('is-loading');
                        $body.classList.add('is-playing');
                        setTimeout(function() {
                            $body.classList.remove('is-playing');
                            $body.classList.add('is-ready');
                        }, 1000);
                    }, 100);
                };
                on('load', loadHandler);
                loadElements(document.body);
                var style, sheet, rule;
                style = document.createElement('style');
                style.appendChild(document.createTextNode(''));
                document.head.appendChild(style);
                sheet = style.sheet;
                if (client.mobile) {
                    (function() {
                        if (client.flags.lsdUnits) {
                            document.documentElement.style.setProperty('--viewport-height', '100svh');
                            document.documentElement.style.setProperty('--background-height', '100lvh');
                        } else {
                            var f = function() {
                                document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px');
                                document.documentElement.style.setProperty('--background-height', (window.innerHeight + 250) + 'px');
                            };
                            on('load', f);
                            on('orientationchange', function() {
                                setTimeout(function() {
                                    (f)();
                                }, 100);
                            });
                        }
                    }
                    )();
                }
                if (client.os == 'android') {
                    (function() {
                        sheet.insertRule('body::after { }', 0);
                        rule = sheet.cssRules[0];
                        var f = function() {
                            rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';
                        };
                        on('load', f);
                        on('orientationchange', f);
                        on('touchmove', f);
                    }
                    )();
                    $body.classList.add('is-touch');
                } else if (client.os == 'ios') {
                    if (client.osVersion <= 11)
                        (function() {
                            sheet.insertRule('body::after { }', 0);
                            rule = sheet.cssRules[0];
                            rule.style.cssText = '-webkit-transform: scale(1.0)';
                        }
                        )();
                    if (client.osVersion <= 11)
                        (function() {
                            sheet.insertRule('body.ios-focus-fix::before { }', 0);
                            rule = sheet.cssRules[0];
                            rule.style.cssText = 'height: calc(100% + 60px)';
                            on('focus', function(event) {
                                $body.classList.add('ios-focus-fix');
                            }, true);
                            on('blur', function(event) {
                                $body.classList.remove('ios-focus-fix');
                            }, true);
                        }
                        )();
                    $body.classList.add('is-touch');
                }
                var scrollEvents = {
                    items: [],
                    add: function(o) {
                        this.items.push({
                            element: o.element,
                            triggerElement: (('triggerElement'in o && o.triggerElement) ? o.triggerElement : o.element),
                            enter: ('enter'in o ? o.enter : null),
                            leave: ('leave'in o ? o.leave : null),
                            mode: ('mode'in o ? o.mode : 4),
                            threshold: ('threshold'in o ? o.threshold : 0.25),
                            offset: ('offset'in o ? o.offset : 0),
                            initialState: ('initialState'in o ? o.initialState : null),
                            state: false,
                        });
                    },
                    handler: function() {
                        var height, top, bottom, scrollPad;
                        if (client.os == 'ios') {
                            height = document.documentElement.clientHeight;
                            top = document.body.scrollTop + window.scrollY;
                            bottom = top + height;
                            scrollPad = 125;
                        } else {
                            height = document.documentElement.clientHeight;
                            top = document.documentElement.scrollTop;
                            bottom = top + height;
                            scrollPad = 0;
                        }
                        scrollEvents.items.forEach(function(item) {
                            var elementTop, elementBottom, viewportTop, viewportBottom, bcr, pad, state, a, b;
                            if (!item.enter && !item.leave)
                                return true;
                            if (!item.triggerElement)
                                return true;
                            if (item.triggerElement.offsetParent === null) {
                                if (item.state == true && item.leave) {
                                    item.state = false;
                                    (item.leave).apply(item.element);
                                    if (!item.enter)
                                        item.leave = null;
                                }
                                return true;
                            }
                            bcr = item.triggerElement.getBoundingClientRect();
                            elementTop = top + Math.floor(bcr.top);
                            elementBottom = elementTop + bcr.height;
                            if (item.initialState !== null) {
                                state = item.initialState;
                                item.initialState = null;
                            } else {
                                switch (item.mode) {
                                case 1:
                                default:
                                    state = (bottom > (elementTop - item.offset) && top < (elementBottom + item.offset));
                                    break;
                                case 2:
                                    a = (top + (height * 0.5));
                                    state = (a > (elementTop - item.offset) && a < (elementBottom + item.offset));
                                    break;
                                case 3:
                                    a = top + (height * (item.threshold));
                                    if (a - (height * 0.375) <= 0)
                                        a = 0;
                                    b = top + (height * (1 - item.threshold));
                                    if (b + (height * 0.375) >= document.body.scrollHeight - scrollPad)
                                        b = document.body.scrollHeight + scrollPad;
                                    state = (b > (elementTop - item.offset) && a < (elementBottom + item.offset));
                                    break;
                                case 4:
                                    pad = height * item.threshold;
                                    viewportTop = (top + pad);
                                    viewportBottom = (bottom - pad);
                                    if (Math.floor(top) <= pad)
                                        viewportTop = top;
                                    if (Math.ceil(bottom) >= (document.body.scrollHeight - pad))
                                        viewportBottom = bottom;
                                    if ((viewportBottom - viewportTop) >= (elementBottom - elementTop)) {
                                        state = ((elementTop >= viewportTop && elementBottom <= viewportBottom) || (elementTop >= viewportTop && elementTop <= viewportBottom) || (elementBottom >= viewportTop && elementBottom <= viewportBottom));
                                    } else
                                        state = ((viewportTop >= elementTop && viewportBottom <= elementBottom) || (elementTop >= viewportTop && elementTop <= viewportBottom) || (elementBottom >= viewportTop && elementBottom <= viewportBottom));
                                    break;
                                }
                            }
                            if (state != item.state) {
                                item.state = state;
                                if (item.state) {
                                    if (item.enter) {
                                        (item.enter).apply(item.element);
                                        if (!item.leave)
                                            item.enter = null;
                                    }
                                } else {
                                    if (item.leave) {
                                        (item.leave).apply(item.element);
                                        if (!item.enter)
                                            item.leave = null;
                                    }
                                }
                            }
                        });
                    },
                    init: function() {
                        on('load', this.handler);
                        on('resize', this.handler);
                        on('scroll', this.handler);
                        (this.handler)();
                    }
                };
                scrollEvents.init();
                var onvisible = {
                    effects: {
                        'blur-in': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.opacity = 0;
                                this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.filter = 'none';
                            },
                        },
                        'zoom-in': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transform = 'scale(' + (1 - ((alt ? 0.25 : 0.05) * intensity)) + ')';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'zoom-out': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transform = 'scale(' + (1 + ((alt ? 0.25 : 0.05) * intensity)) + ')';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'slide-left': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function() {
                                this.style.transform = 'translateX(100vw)';
                            },
                            play: function() {
                                this.style.transform = 'none';
                            },
                        },
                        'slide-right': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function() {
                                this.style.transform = 'translateX(-100vw)';
                            },
                            play: function() {
                                this.style.transform = 'none';
                            },
                        },
                        'flip-forward': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transformOrigin = '50% 50%';
                                this.style.transform = 'perspective(1000px) rotateX(' + ((alt ? 45 : 15) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'flip-backward': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transformOrigin = '50% 50%';
                                this.style.transform = 'perspective(1000px) rotateX(' + ((alt ? -45 : -15) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'flip-left': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transformOrigin = '50% 50%';
                                this.style.transform = 'perspective(1000px) rotateY(' + ((alt ? 45 : 15) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'flip-right': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transformOrigin = '50% 50%';
                                this.style.transform = 'perspective(1000px) rotateY(' + ((alt ? -45 : -15) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'tilt-left': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transform = 'rotate(' + ((alt ? 45 : 5) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'tilt-right': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity, alt) {
                                this.style.opacity = 0;
                                this.style.transform = 'rotate(' + ((alt ? -45 : -5) * intensity) + 'deg)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'fade-right': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.opacity = 0;
                                this.style.transform = 'translateX(' + (-1.5 * intensity) + 'rem)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'fade-left': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.opacity = 0;
                                this.style.transform = 'translateX(' + (1.5 * intensity) + 'rem)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'fade-down': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.opacity = 0;
                                this.style.transform = 'translateY(' + (-1.5 * intensity) + 'rem)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'fade-up': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.opacity = 0;
                                this.style.transform = 'translateY(' + (1.5 * intensity) + 'rem)';
                            },
                            play: function() {
                                this.style.opacity = 1;
                                this.style.transform = 'none';
                            },
                        },
                        'fade-in': {
                            type: 'transition',
                            transition: function(speed, delay) {
                                return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'fade-in-background': {
                            type: 'manual',
                            rewind: function() {
                                this.style.removeProperty('--onvisible-delay');
                                this.style.removeProperty('--onvisible-background-color');
                            },
                            play: function(speed, delay) {
                                this.style.setProperty('--onvisible-speed', speed + 's');
                                if (delay)
                                    this.style.setProperty('--onvisible-delay', delay + 's');
                                this.style.setProperty('--onvisible-background-color', 'rgba(0,0,0,0.001)');
                            },
                        },
                        'zoom-in-image': {
                            type: 'transition',
                            target: 'img',
                            transition: function(speed, delay) {
                                return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function() {
                                this.style.transform = 'scale(1)';
                            },
                            play: function(intensity) {
                                this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';
                            },
                        },
                        'zoom-out-image': {
                            type: 'transition',
                            target: 'img',
                            transition: function(speed, delay) {
                                return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';
                            },
                            play: function() {
                                this.style.transform = 'none';
                            },
                        },
                        'focus-image': {
                            type: 'transition',
                            target: 'img',
                            transition: function(speed, delay) {
                                return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
                            },
                            rewind: function(intensity) {
                                this.style.transform = 'scale(' + (1 + (0.05 * intensity)) + ')';
                                this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';
                            },
                            play: function(intensity) {
                                this.style.transform = 'none';
                                this.style.filter = 'none';
                            },
                        },
                        'wipe-up': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '100% 0%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, {
                                    maskSize: '110% 110%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '0% 100%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'wipe-down': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '100% 0%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, {
                                    maskSize: '110% 110%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '0% 0%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'wipe-left': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '0% 100%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, {
                                    maskSize: '110% 110%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '100% 0%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'wipe-right': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '0% 100%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, {
                                    maskSize: '110% 110%',
                                    maskImage: 'linear-gradient(90deg, black 100%, transparent 100%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '0% 0%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'wipe-diagonal': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '0% 0%',
                                    maskImage: 'linear-gradient(45deg, black 50%, transparent 50%)',
                                }, {
                                    maskSize: '220% 220%',
                                    maskImage: 'linear-gradient(45deg, black 50%, transparent 50%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '0% 100%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'wipe-reverse-diagonal': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                return [{
                                    maskSize: '0% 0%',
                                    maskImage: 'linear-gradient(135deg, transparent 50%, black 50%)',
                                }, {
                                    maskSize: '220% 220%',
                                    maskImage: 'linear-gradient(135deg, transparent 50%, black 50%)',
                                }, ];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                    easing: 'ease',
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                                this.style.maskComposite = 'exclude';
                                this.style.maskRepeat = 'no-repeat';
                                this.style.maskPosition = '100% 100%';
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'pop-in': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                let diff = (intensity + 1) * 0.025;
                                return [{
                                    opacity: 0,
                                    transform: 'scale(' + (1 - diff) + ')',
                                }, {
                                    opacity: 1,
                                    transform: 'scale(' + (1 + diff) + ')',
                                }, {
                                    opacity: 1,
                                    transform: 'scale(' + (1 - (diff * 0.25)) + ')',
                                    offset: 0.9,
                                }, {
                                    opacity: 1,
                                    transform: 'scale(1)',
                                }];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'bounce-up': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                let diff = (intensity + 1) * 0.075;
                                return [{
                                    opacity: 0,
                                    transform: 'translateY(' + diff + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(' + (-1 * diff) + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(' + (diff * 0.25) + 'rem)',
                                    offset: 0.9,
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                }];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'bounce-down': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                let diff = (intensity + 1) * 0.075;
                                return [{
                                    opacity: 0,
                                    transform: 'translateY(' + (-1 * diff) + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(' + diff + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(' + (-1 * (diff * 0.25)) + 'rem)',
                                    offset: 0.9,
                                }, {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                }];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'bounce-left': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                let diff = (intensity + 1) * 0.075;
                                return [{
                                    opacity: 0,
                                    transform: 'translateX(' + diff + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(' + (-1 * diff) + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(' + (diff * 0.25) + 'rem)',
                                    offset: 0.9,
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(0)',
                                }];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                        'bounce-right': {
                            type: 'animate',
                            keyframes: function(intensity) {
                                let diff = (intensity + 1) * 0.075;
                                return [{
                                    opacity: 0,
                                    transform: 'translateX(' + (-1 * diff) + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(' + diff + 'rem)',
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(' + (-1 * (diff * 0.25)) + 'rem)',
                                    offset: 0.9,
                                }, {
                                    opacity: 1,
                                    transform: 'translateX(0)',
                                }];
                            },
                            options: function(speed) {
                                return {
                                    duration: speed,
                                    iterations: 1,
                                };
                            },
                            rewind: function() {
                                this.style.opacity = 0;
                            },
                            play: function() {
                                this.style.opacity = 1;
                            },
                        },
                    },
                    regex: new RegExp('([^\\s]+)','g'),
                    add: function(selector, settings) {
                        var _this = this, style = settings.style in this.effects ? settings.style : 'fade', speed = parseInt('speed'in settings ? settings.speed : 0), intensity = parseInt('intensity'in settings ? settings.intensity : 5), delay = parseInt('delay'in settings ? settings.delay : 0), replay = 'replay'in settings ? settings.replay : false, stagger = 'stagger'in settings ? (parseInt(settings.stagger) >= 0 ? parseInt(settings.stagger) : false) : false, staggerOrder = 'staggerOrder'in settings ? settings.staggerOrder : 'default', staggerSelector = 'staggerSelector'in settings ? settings.staggerSelector : null, threshold = parseInt('threshold'in settings ? settings.threshold : 3), state = 'state'in settings ? settings.state : null, effect = this.effects[style], enter, leave, scrollEventThreshold;
                        if (window.CARRD_DISABLE_ANIMATION === true) {
                            if (style == 'fade-in-background')
                                $$(selector).forEach(function(e) {
                                    e.style.setProperty('--onvisible-background-color', 'rgba(0,0,0,0.001)');
                                });
                            return;
                        }
                        switch (threshold) {
                        case 1:
                            scrollEventThreshold = 0;
                            break;
                        case 2:
                            scrollEventThreshold = 0.125;
                            break;
                        default:
                        case 3:
                            scrollEventThreshold = 0.25;
                            break;
                        case 4:
                            scrollEventThreshold = 0.375;
                            break;
                        case 5:
                            scrollEventThreshold = 0.475;
                            break;
                        }
                        switch (effect.type) {
                        default:
                        case 'transition':
                            intensity = ((intensity / 10) * 1.75) + 0.25;
                            enter = function(children, staggerDelay=0) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                transitionOrig = _this.style.transition;
                                _this.style.setProperty('backface-visibility', 'hidden');
                                _this.style.transition = effect.transition.apply(_this, [speed / 1000, (delay + staggerDelay) / 1000]);
                                effect.play.apply(_this, [intensity, !!children]);
                                setTimeout(function() {
                                    _this.style.removeProperty('backface-visibility');
                                    _this.style.transition = transitionOrig;
                                }, (speed + delay + staggerDelay) * 2);
                            }
                            ;
                            leave = function(children) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                transitionOrig = _this.style.transition;
                                _this.style.setProperty('backface-visibility', 'hidden');
                                _this.style.transition = effect.transition.apply(_this, [speed / 1000]);
                                effect.rewind.apply(_this, [intensity, !!children]);
                                setTimeout(function() {
                                    _this.style.removeProperty('backface-visibility');
                                    _this.style.transition = transitionOrig;
                                }, speed * 2);
                            }
                            ;
                            break;
                        case 'animate':
                            enter = function(children, staggerDelay=0) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                setTimeout( () => {
                                    effect.play.apply(_this, []);
                                    _this.animate(effect.keyframes.apply(_this, [intensity]), effect.options.apply(_this, [speed, delay]));
                                }
                                , delay + staggerDelay);
                            }
                            ;
                            leave = function(children) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                let a = _this.animate(effect.keyframes.apply(_this, [intensity]), effect.options.apply(_this, [speed, delay]));
                                a.reverse();
                                a.addEventListener('finish', () => {
                                    effect.rewind.apply(_this, []);
                                }
                                );
                            }
                            ;
                            break;
                        case 'manual':
                            enter = function(children, staggerDelay=0) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                effect.play.apply(_this, [speed / 1000, (delay + staggerDelay) / 1000, intensity]);
                            }
                            ;
                            leave = function(children) {
                                var _this = this, transitionOrig;
                                if (effect.target)
                                    _this = this.querySelector(effect.target);
                                effect.rewind.apply(_this, [intensity, !!children]);
                            }
                            ;
                            break;
                        }
                        $$(selector).forEach(function(e) {
                            var children, targetElement, triggerElement;
                            if (stagger !== false && staggerSelector == ':scope > *')
                                _this.expandTextNodes(e);
                            children = (stagger !== false && staggerSelector) ? e.querySelectorAll(staggerSelector) : null;
                            if (effect.target)
                                targetElement = e.querySelector(effect.target);
                            else
                                targetElement = e;
                            if (children)
                                children.forEach(function(targetElement) {
                                    effect.rewind.apply(targetElement, [intensity, true]);
                                });
                            else
                                effect.rewind.apply(targetElement, [intensity]);
                            triggerElement = e;
                            if (e.parentNode) {
                                if (e.parentNode.dataset.onvisibleTrigger)
                                    triggerElement = e.parentNode;
                                else if (e.parentNode.parentNode) {
                                    if (e.parentNode.parentNode.dataset.onvisibleTrigger)
                                        triggerElement = e.parentNode.parentNode;
                                }
                            }
                            scrollEvents.add({
                                element: e,
                                triggerElement: triggerElement,
                                initialState: state,
                                threshold: scrollEventThreshold,
                                enter: children ? function() {
                                    var staggerDelay = 0, childHandler = function(e) {
                                        enter.apply(e, [children, staggerDelay]);
                                        staggerDelay += stagger;
                                    }, a;
                                    if (staggerOrder == 'default') {
                                        children.forEach(childHandler);
                                    } else {
                                        a = Array.from(children);
                                        switch (staggerOrder) {
                                        case 'reverse':
                                            a.reverse();
                                            break;
                                        case 'random':
                                            a.sort(function() {
                                                return Math.random() - 0.5;
                                            });
                                            break;
                                        }
                                        a.forEach(childHandler);
                                    }
                                }
                                : enter,
                                leave: (replay ? (children ? function() {
                                    children.forEach(function(e) {
                                        leave.apply(e, [children]);
                                    });
                                }
                                : leave) : null),
                            });
                        });
                    },
                    expandTextNodes: function(e) {
                        var s, i, w, x;
                        for (i = 0; i < e.childNodes.length; i++) {
                            x = e.childNodes[i];
                            if (x.nodeType != Node.TEXT_NODE)
                                continue;
                            s = x.nodeValue;
                            s = s.replace(this.regex, function(x, a) {
                                return '<text-node>' + escapeHtml(a) + '</text-node>';
                            });
                            w = document.createElement('text-node');
                            w.innerHTML = s;
                            x.replaceWith(w);
                            while (w.childNodes.length > 0) {
                                w.parentNode.insertBefore(w.childNodes[0], w);
                            }
                            w.parentNode.removeChild(w);
                        }
                    },
                };
                onvisible.add('#buttons03', {
                    style: 'fade-up',
                    speed: 2000,
                    intensity: 5,
                    threshold: 5,
                    delay: 0,
                    replay: false
                });
                onvisible.add('#buttons01', {
                    style: 'fade-down',
                    speed: 2000,
                    intensity: 10,
                    threshold: 5,
                    delay: 0,
                    replay: false
                });
                onvisible.add('#buttons02', {
                    style: 'fade-up',
                    speed: 2000,
                    intensity: 5,
                    threshold: 5,
                    delay: 0,
                    replay: false
                });
                onvisible.add('#list02', {
                    style: 'fade-up',
                    speed: 2000,
                    intensity: 10,
                    threshold: 3,
                    delay: 0,
                    replay: false
                });
                ready.run();
            }
            )();
        </script>
    </body>
</html>
