// ==UserScript==
// @name                YT + Music Nexus Patch
// @name:tr             YT + Music Nexus Patch
// @name:es             YT + Music Nexus Patch
// @name:de             YT + Music Nexus Patch
// @name:fr             YT + Music Nexus Patch
// @name:ru             YT + Music Nexus Patch
// @name:pt-BR          YT + Music Nexus Patch
// @name:it             YT + Music Nexus Patch
// @namespace           https://greasyfork.org/users/ensar
// @version             4.2
// @description         One Nexus. Two Platforms. A Better Experience. A growing collection of enhancements and customizations for YouTube and YouTube Music, bringing both platforms together under one unified experience. Currently features custom Premium-inspired logos with light and dark theme support and automatic updates.
// @description:tr      Tek Merkez. İki Platform. Daha İyi Bir Deneyim. YouTube ve YouTube Music için geliştirilen, her iki platformu tek bir bütünleşik deneyimde buluşturan özelleştirmeler ve iyileştirmeler koleksiyonu. Şu anda açık ve koyu tema desteği ile Premium tarzı özel logolar ve otomatik güncelleme desteği sunar.
// @description:es      Un solo centro. Dos plataformas. Una mejor experiencia. Una colección de mejoras y personalizaciones para YouTube y YouTube Music que reúne ambas plataformas en una experiencia unificada. Actualmente incluye logotipos personalizados inspirados en Premium, compatibles con los temas claro y oscuro, y actualización automática.
// @description:de      Ein Zentrum. Zwei Plattformen. Ein besseres Erlebnis. Eine Sammlung von Erweiterungen und Anpassungen für YouTube und YouTube Music, die beide Plattformen in einem einheitlichen Erlebnis vereint. Derzeit mit benutzerdefinierten, von Premium inspirierten Logos, Unterstützung für helle und dunkle Designs sowie automatischer Aktualisierung.
// @description:fr      Un seul centre. Deux plateformes. Une meilleure expérience. Une collection d'améliorations et de personnalisations pour YouTube et YouTube Music, réunissant les deux plateformes dans une expérience unifiée. Inclut actuellement des logos personnalisés inspirés de Premium, compatibles avec les thèmes clair et sombre, ainsi qu'une mise à jour automatique.
// @description:ru      Один центр. Две платформы. Лучший опыт. Коллекция улучшений и настроек для YouTube и YouTube Music, объединяющая обе платформы в единую экосистему. В текущей версии доступны пользовательские логотипы в стиле Premium с поддержкой светлой и тёмной тем оформления и автоматическим обновлением.
// @description:pt-BR   Um só lugar. Duas plataformas. Uma experiência melhor. Uma coleção de melhorias e personalizações para YouTube e YouTube Music, reunindo ambas as plataformas em uma experiência unificada. Atualmente inclui logotipos personalizados inspirados no Premium, compatibilidade com temas claro e escuro e atualização automática.
// @description:it      Un unico centro. Due piattaforme. Un'esperienza migliore. Una raccolta di miglioramenti e personalizzazioni per YouTube e YouTube Music, che riunisce entrambe le piattaforme in un'esperienza unificata. Attualmente include loghi personalizzati ispirati a Premium, supporto per i temi chiaro e scuro e aggiornamento automatico.
// @icon                https://images.icon-icons.com/1099/PNG/512/1485482355-youtube_78661.png
// @author              еиsаг
// @license             MIT
// @match               https://www.youtube.com/*
// @match               https://youtube.com/*
// @match               https://music.youtube.com/*
// @match               *://*.youtube.com/*
// @match               *://*.music.youtube.com/*
// @grant               none
// @downloadURL https://update.greasyfork.org/scripts/596625/YT%20%2B%20Music%20Nexus%20Patch.user.js
// @updateURL https://update.greasyfork.org/scripts/596625/YT%20%2B%20Music%20Nexus%20Patch.meta.js
// ==/UserScript==


(function () {
    'use strict';
    /* global trustedTypes */

    if (window.trustedTypes && trustedTypes.createPolicy) {
        if (!trustedTypes.defaultPolicy) {
            const passThroughFn = (x) => x;
            trustedTypes.createPolicy('default', {
                createHTML: passThroughFn,
                createScriptURL: passThroughFn,
                createScript: passThroughFn,
            });
        }
    }

    const LOGO_MAIN = "data:image/svg+xml,%3Csvg xmlns:dc=\'http://purl.org/dc/elements/1.1/\' xmlns:cc=\'http://creativecommons.org/ns%23\' xmlns:rdf=\'http://www.w3.org/1999/02/22-rdf-syntax-ns%23\' xmlns:svg=\'http://www.w3.org/2000/svg\' xmlns=\'http://www.w3.org/2000/svg\' id=\'SVGRoot\' version=\'1.1\' viewBox=\'0 0 846 174\' height=\'80px\' width=\'391px\'%3E%3Cdefs id=\'defs855\'%3E%3Cstyle id=\'style2\' /%3E%3C/defs%3E%3Cmetadata id=\'metadata858\'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=\'\'%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource=\'http://purl.org/dc/dcmitype/StillImage\' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id=\'layer1\'%3E%3Cg transform=\'translate(0,0.36)\' data-name=\'Layer 2\' id=\'Layer_2\'%3E%3Cg data-name=\'Layer 1\' id=\'Layer_1-2\'%3E%3Cpath style=\'fill:%23ff0000\' id=\'path6\' d=\'M 242.88,27.11 A 31.07,31.07 0 0 0 220.95,5.18 C 201.6,0 124,0 124,0 124,0 46.46,0 27.11,5.18 A 31.07,31.07 0 0 0 5.18,27.11 C 0,46.46 0,86.82 0,86.82 c 0,0 0,40.36 5.18,59.71 a 31.07,31.07 0 0 0 21.93,21.93 c 19.35,5.18 96.92,5.18 96.92,5.18 0,0 77.57,0 96.92,-5.18 a 31.07,31.07 0 0 0 21.93,-21.93 c 5.18,-19.35 5.18,-59.71 5.18,-59.71 0,0 0,-40.36 -5.18,-59.71 z\' /%3E%3Cpath style=\'fill:%23ffffff\' id=\'path8\' d=\'M 99.22,124.03 163.67,86.82 99.22,49.61 Z\' /%3E%3Cpath style=\'fill:%23282828\' id=\'path10\' d=\'m 358.29,55.1 v 6 c 0,30 -13.3,47.53 -42.39,47.53 h -4.43 v 52.5 H 287.71 V 12.36 H 318 c 27.7,0 40.29,11.71 40.29,42.74 z m -25,2.13 c 0,-21.64 -3.9,-26.78 -17.38,-26.78 h -4.43 v 60.48 h 4.08 c 12.77,0 17.74,-9.22 17.74,-29.26 z m 81.22,-6.56 -1.24,28.2 c -10.11,-2.13 -18.45,-0.53 -22.17,6 v 76.26 H 367.52 V 52.44 h 18.8 L 388.45,76 h 0.89 c 2.48,-17.2 10.46,-25.89 20.75,-25.89 a 22.84,22.84 0 0 1 4.42,0.56 z M 441.64,115 v 5.5 c 0,19.16 1.06,25.72 9.22,25.72 7.8,0 9.58,-6 9.75,-18.44 l 21.1,1.24 c 1.6,23.41 -10.64,33.87 -31.39,33.87 -25.18,0 -32.63,-16.49 -32.63,-46.46 v -19 c 0,-31.57 8.34,-47 33.34,-47 25.18,0 31.57,13.12 31.57,45.93 V 115 Z m 0,-22.35 v 7.8 h 17.91 V 92.7 c 0,-20 -1.42,-25.72 -9,-25.72 -7.58,0 -8.91,5.86 -8.91,25.72 z M 604.45,79 v 82.11 H 580 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8.16,2.48 -10.82,7.09 a 35.59,35.59 0 0 1 0.18,4.43 v 82.11 H 537.24 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8,2.48 -10.64,6.92 v 86.72 H 494.5 V 52.44 h 19.33 L 516,66.28 h 0.35 c 5.5,-10.46 14.37,-16.14 24.83,-16.14 10.29,0 16.14,5.14 18.8,14.37 5.68,-9.4 14.19,-14.37 23.94,-14.37 14.86,0 20.53,10.64 20.53,28.86 z m 12.24,-54.4 c 0,-11.71 4.26,-15.07 13.3,-15.07 9.22,0 13.3,3.9 13.3,15.07 0,12.06 -4.08,15.08 -13.3,15.08 -9.04,-0.01 -13.3,-3.02 -13.3,-15.08 z m 1.42,27.84 h 23.41 v 108.72 h -23.41 z m 103.39,0 v 108.72 h -19.15 l -2.13,-13.3 h -0.53 c -5.5,10.64 -13.48,15.07 -23.41,15.07 -14.54,0 -21.11,-9.22 -21.11,-29.26 V 52.44 h 24.47 v 79.81 c 0,9.58 2,13.48 6.92,13.48 A 12.09,12.09 0 0 0 697,138.81 V 52.44 Z M 845.64,79 v 82.11 H 821.17 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8.16,2.48 -10.82,7.09 A 35.59,35.59 0 0 1 802.9,79 v 82.11 H 778.43 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8,2.48 -10.64,6.92 v 86.72 H 735.69 V 52.44 H 755 l 2.13,13.83 h 0.35 c 5.5,-10.46 14.37,-16.14 24.83,-16.14 10.29,0 16.14,5.14 18.8,14.37 5.68,-9.4 14.19,-14.37 23.94,-14.37 14.95,0.01 20.59,10.65 20.59,28.87 z\' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A";
    const LOGO_SMALL = "data:image/svg+xml,%3Csvg xmlns:dc=\'http://purl.org/dc/elements/1.1/\' xmlns:cc=\'http://creativecommons.org/ns%23\' xmlns:rdf=\'http://www.w3.org/1999/02/22-rdf-syntax-ns%23\' xmlns:svg=\'http://www.w3.org/2000/svg\' xmlns=\'http://www.w3.org/2000/svg\' id=\'SVGRoot\' version=\'1.1\' viewBox=\'0 0 846 174\' height=\'24px\' width=\'98px\'%3E%3Cdefs id=\'defs855\'%3E%3Cstyle id=\'style2\' /%3E%3C/defs%3E%3Cmetadata id=\'metadata858\'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=\'\'%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource=\'http://purl.org/dc/dcmitype/StillImage\' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id=\'layer1\'%3E%3Cg transform=\'translate(0,0.36)\' data-name=\'Layer 2\' id=\'Layer_2\'%3E%3Cg data-name=\'Layer 1\' id=\'Layer_1-2\'%3E%3Cpath style=\'fill:%23ff0000\' id=\'path6\' d=\'M 242.88,27.11 A 31.07,31.07 0 0 0 220.95,5.18 C 201.6,0 124,0 124,0 124,0 46.46,0 27.11,5.18 A 31.07,31.07 0 0 0 5.18,27.11 C 0,46.46 0,86.82 0,86.82 c 0,0 0,40.36 5.18,59.71 a 31.07,31.07 0 0 0 21.93,21.93 c 19.35,5.18 96.92,5.18 96.92,5.18 0,0 77.57,0 96.92,-5.18 a 31.07,31.07 0 0 0 21.93,-21.93 c 5.18,-19.35 5.18,-59.71 5.18,-59.71 0,0 0,-40.36 -5.18,-59.71 z\' /%3E%3Cpath style=\'fill:%23ffffff\' id=\'path8\' d=\'M 99.22,124.03 163.67,86.82 99.22,49.61 Z\' /%3E%3Cpath style=\'fill:%23ffffff\' id=\'path10\' d=\'m 358.29,55.1 v 6 c 0,30 -13.3,47.53 -42.39,47.53 h -4.43 v 52.5 H 287.71 V 12.36 H 318 c 27.7,0 40.29,11.71 40.29,42.74 z m -25,2.13 c 0,-21.64 -3.9,-26.78 -17.38,-26.78 h -4.43 v 60.48 h 4.08 c 12.77,0 17.74,-9.22 17.74,-29.26 z m 81.22,-6.56 -1.24,28.2 c -10.11,-2.13 -18.45,-0.53 -22.17,6 v 76.26 H 367.52 V 52.44 h 18.8 L 388.45,76 h 0.89 c 2.48,-17.2 10.46,-25.89 20.75,-25.89 a 22.84,22.84 0 0 1 4.42,0.56 z M 441.64,115 v 5.5 c 0,19.16 1.06,25.72 9.22,25.72 7.8,0 9.58,-6 9.75,-18.44 l 21.1,1.24 c 1.6,23.41 -10.64,33.87 -31.39,33.87 -25.18,0 -32.63,-16.49 -32.63,-46.46 v -19 c 0,-31.57 8.34,-47 33.34,-47 25.18,0 31.57,13.12 31.57,45.93 V 115 Z m 0,-22.35 v 7.8 h 17.91 V 92.7 c 0,-20 -1.42,-25.72 -9,-25.72 -7.58,0 -8.91,5.86 -8.91,25.72 z M 604.45,79 v 82.11 H 580 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8.16,2.48 -10.82,7.09 a 35.59,35.59 0 0 1 0.18,4.43 v 82.11 H 537.24 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8,2.48 -10.64,6.92 v 86.72 H 494.5 V 52.44 h 19.33 L 516,66.28 h 0.35 c 5.5,-10.46 14.37,-16.14 24.83,-16.14 10.29,0 16.14,5.14 18.8,14.37 5.68,-9.4 14.19,-14.37 23.94,-14.37 14.86,0 20.53,10.64 20.53,28.86 z m 12.24,-54.4 c 0,-11.71 4.26,-15.07 13.3,-15.07 9.22,0 13.3,3.9 13.3,15.07 0,12.06 -4.08,15.08 -13.3,15.08 -9.04,-0.01 -13.3,-3.02 -13.3,-15.08 z m 1.42,27.84 h 23.41 v 108.72 h -23.41 z m 103.39,0 v 108.72 h -19.15 l -2.13,-13.3 h -0.53 c -5.5,10.64 -13.48,15.07 -23.41,15.07 -14.54,0 -21.11,-9.22 -21.11,-29.26 V 52.44 h 24.47 v 79.81 c 0,9.58 2,13.48 6.92,13.48 A 12.09,12.09 0 0 0 697,138.81 V 52.44 Z M 845.64,79 v 82.11 H 821.17 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8.16,2.48 -10.82,7.09 A 35.59,35.59 0 0 1 802.9,79 v 82.11 H 778.43 V 80.82 c 0,-8.87 -2.31,-13.3 -7.63,-13.3 -4.26,0 -8,2.48 -10.64,6.92 v 86.72 H 735.69 V 52.44 H 755 l 2.13,13.83 h 0.35 c 5.5,-10.46 14.37,-16.14 24.83,-16.14 10.29,0 16.14,5.14 18.8,14.37 5.68,-9.4 14.19,-14.37 23.94,-14.37 14.95,0.01 20.59,10.65 20.59,28.87 z\' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A";

    // =========================
    //         YouTube
    // =========================
    
    function setupYouTubeObserver() {
        const css = `
            #logo-container .logo,
            .footer-logo-icon,
            #logo-icon,
            #logo-icon-container {
                width: 98px !important;
                margin-left: 5px;
                margin-right: 5px;
                content: url("${LOGO_MAIN}") !important;
            }

            html[dark] #logo-icon,
            html[dark] #logo-icon-container {
                width: 98px !important;
                content: url("${LOGO_SMALL}") !important;
            }
        `;
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);

        let logoModified = false;
        let premiumButtonRemoved = false;

        const observerCallback = (mutations, observer) => {
            const signInBtn = document.querySelector("a[href^='https://accounts.google.com']");
            if (signInBtn) {
                observer.disconnect();
                return;
            }

            if (!logoModified) {
                const pfp = document.querySelector("#avatar-btn");
                let ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
                if (pfp && ytdLogos.length > 0) {
                    setTimeout(() => {
                        ytdLogos = document.querySelectorAll("ytd-logo > yt-icon > span > div");
                        ytdLogos.forEach(ytdLogo => {
                            const ytdLogoSvg = ytdLogo.querySelector("svg");
                            if (ytdLogoSvg) {
                                ytdLogoSvg.setAttribute('width', '101');
                                ytdLogoSvg.setAttribute('viewBox', '0 0 101 20');
                                const logoParent = ytdLogoSvg.closest('ytd-logo');
                                if (logoParent) logoParent.setAttribute('is-red-logo', '');
                                ytdLogoSvg.innerHTML = '<g><path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"/><path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"/></g><g id="youtube-paths_yt19"><path d="M32.1819 2.10016V18.9002H34.7619V12.9102H35.4519C38.8019 12.9102 40.5619 11.1102 40.5619 7.57016V6.88016C40.5619 3.31016 39.0019 2.10016 35.7219 2.10016H32.1819ZM37.8619 7.63016C37.8619 10.0002 37.1419 11.0802 35.4019 11.0802H34.7619V3.95016H35.4519C37.4219 3.95016 37.8619 4.76016 37.8619 7.13016V7.63016Z"/><path d="M41.982 18.9002H44.532V10.0902C44.952 9.37016 45.992 9.05016 47.302 9.32016L47.462 6.33016C47.292 6.31016 47.142 6.29016 47.002 6.29016C45.802 6.29016 44.832 7.20016 44.342 8.86016H44.162L43.952 6.54016H41.982V18.9002Z"/><path d="M55.7461 11.5002C55.7461 8.52016 55.4461 6.31016 52.0161 6.31016C48.7861 6.31016 48.0661 8.46016 48.0661 11.6202V13.7902C48.0661 16.8702 48.7261 19.1102 51.9361 19.1102C54.4761 19.1102 55.7861 17.8402 55.6361 15.3802L53.3861 15.2602C53.3561 16.7802 53.0061 17.4002 51.9961 17.4002C50.7261 17.4002 50.6661 16.1902 50.6661 14.3902V13.5502H55.7461V11.5002ZM51.9561 7.97016C53.1761 7.97016 53.2661 9.12016 53.2661 11.0702V12.0802H50.6661V11.0702C50.6661 9.14016 50.7461 7.97016 51.9561 7.97016Z"/><path d="M60.1945 18.9002V8.92016C60.5745 8.39016 61.1945 8.07016 61.7945 8.07016C62.5645 8.07016 62.8445 8.61016 62.8445 9.69016V18.9002H65.5045L65.4845 8.93016C65.8545 8.37016 66.4845 8.04016 67.1045 8.04016C67.7745 8.04016 68.1445 8.61016 68.1445 9.69016V18.9002H70.8045V9.49016C70.8045 7.28016 70.0145 6.27016 68.3445 6.27016C67.1845 6.27016 66.1945 6.69016 65.2845 7.67016C64.9045 6.76016 64.1545 6.27016 63.0845 6.27016C61.8745 6.27016 60.7345 6.79016 59.9345 7.76016H59.7845L59.5945 6.54016H57.5445V18.9002H60.1945Z"/><path d="M74.0858 4.97016C74.9858 4.97016 75.4058 4.67016 75.4058 3.43016C75.4058 2.27016 74.9558 1.91016 74.0858 1.91016C73.2058 1.91016 72.7758 2.23016 72.7758 3.43016C72.7758 4.67016 73.1858 4.97016 74.0858 4.97016ZM72.8658 18.9002H75.3958V6.54016H72.8658V18.9002Z"/><path d="M79.9516 19.0902C81.4116 19.0902 82.3216 18.4802 83.0716 17.3802H83.1816L83.2916 18.9002H85.2816V6.54016H82.6416V16.4702C82.3616 16.9602 81.7116 17.3202 81.1016 17.3202C80.3316 17.3202 80.0916 16.7102 80.0916 15.6902V6.54016H77.4616V15.8102C77.4616 17.8202 78.0416 19.0902 79.9516 19.0902Z"/><path d="M90.0031 18.9002V8.92016C90.3831 8.39016 91.0031 8.07016 91.6031 8.07016C92.3731 8.07016 92.6531 8.61016 92.6531 9.69016V18.9002H95.3131L95.2931 8.93016C95.6631 8.37016 96.2931 8.04016 96.9131 8.04016C97.5831 8.04016 97.9531 8.61016 97.9531 9.69016V18.9002H100.613V9.49016C100.613 7.28016 99.8231 6.27016 98.1531 6.27016C96.9931 6.27016 96.0031 6.69016 95.0931 7.67016C94.7131 6.76016 93.9631 6.27016 92.8931 6.27016C91.6831 6.27016 90.5431 6.79016 89.7431 7.76016H89.5931L89.4031 6.54016H87.3531V18.9002H90.0031Z"/></g>';
                            }
                        });
                        logoModified = true;
                    }, 50);
                }
            }

            if (!premiumButtonRemoved) {
                const premiumLink = document.querySelector('a#endpoint[href="/premium"]');
                if (premiumLink) {
                    const entryToRemove = premiumLink.closest('ytd-guide-entry-renderer');
                    if (entryToRemove) {
                        entryToRemove.remove();
                        premiumButtonRemoved = true;
                    }
                }
            }

            if (logoModified && premiumButtonRemoved) {
                observer.disconnect();
            }
        };

        const observer = new MutationObserver(observerCallback);
        observer.observe(document.body, { childList: true, subtree: true });
        observerCallback([], observer);
    }

    // =========================
    //       YouTube Music
    // =========================
    
    function setupYouTubeMusicObserver() {
        const MUSIC_LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="98.543" height="24" fill="none"><clipPath id="a"><path d="M0 0h77v26H0Z"/></clipPath><g clip-path="url(#a)" transform="scale(.92308)"><path fill="#f03" d="M13 26c7.176 0 13-5.824 13-13S20.176 0 13 0 0 5.824 0 13s5.824 13 13 13"/><path stroke="#fff" d="M20.5 13c0 4.144-3.356 7.5-7.5 7.5A7.5 7.5 0 0 1 5.5 13c0-4.144 3.356-7.5 7.5-7.5s7.5 3.356 7.5 7.5z"/><path fill="#fff" d="m17.75 13-7.5-4.25v8.5z"/></g><g style="display:inherit;fill:#fff;fill-opacity:1"><path d="M32.182 2.1v16.8h2.58v-5.99h.69c3.35 0 5.11-1.8 5.11-5.34v-.69c0-3.57-1.56-4.78-4.84-4.78zm5.68 5.53c0 2.37-.72 3.45-2.46 3.45h-.64V3.95h.69c1.97 0 2.41.81 2.41 3.18zM41.982 18.9h2.55v-8.81c.42-.72 1.46-1.04 2.77-.77l.16-2.99c-.17-.02-.32-.04-.46-.04-1.2 0-2.17.91-2.66 2.57h-.18l-.21-2.32h-1.97zM55.746 11.5c0-2.98-.3-5.19-3.73-5.19-3.23 0-3.95 2.15-3.95 5.31v2.17c0 3.08.66 5.32 3.87 5.32 2.54 0 3.85-1.27 3.7-3.73l-2.25-.12c-.03 1.52-.38 2.14-1.39 2.14-1.27 0-1.33-1.21-1.33-3.01v-.84h5.08zm-3.79-3.53c1.22 0 1.31 1.15 1.31 3.1v1.01h-2.6v-1.01c0-1.93.08-3.1 1.29-3.1M60.195 18.9V8.92c.38-.53 1-.85 1.6-.85.77 0 1.05.54 1.05 1.62v9.21h2.66l-.02-9.97c.37-.56 1-.89 1.62-.89.67 0 1.04.57 1.04 1.65v9.21h2.66V9.49c0-2.21-.79-3.22-2.46-3.22-1.16 0-2.15.42-3.06 1.4-.38-.91-1.13-1.4-2.2-1.4-1.21 0-2.35.52-3.15 1.49h-.15l-.19-1.22h-2.05V18.9ZM74.086 4.97c.9 0 1.32-.3 1.32-1.54 0-1.16-.45-1.52-1.32-1.52-.88 0-1.31.32-1.31 1.52 0 1.24.41 1.54 1.31 1.54m-1.22 13.93h2.53V6.54h-2.53zM79.952 19.09c1.46 0 2.37-.61 3.12-1.71h.11l.11 1.52h1.99V6.54h-2.64v9.93c-.28.49-.93.85-1.54.85-.77 0-1.01-.61-1.01-1.63V6.54h-2.63v9.27c0 2.01.58 3.28 2.49 3.28M90.003 18.9V8.92c.38-.53 1-.85 1.6-.85.77 0 1.05.54 1.05 1.62v9.21h2.66l-.02-9.97c.37-.56 1-.89 1.62-.89.67 0 1.04.57 1.04 1.65v9.21h2.66V9.49c0-2.21-.79-3.22-2.46-3.22-1.16 0-2.15.42-3.06 1.4-.38-.91-1.13-1.4-2.2-1.4-1.21 0-2.35.52-3.15 1.49h-.15l-.19-1.22h-2.05V18.9Z" style="fill:#fff;fill-opacity:1" transform="matrix(.92322 0 0 .9259 -1.911 2.734)"/></g></svg>';

        function updateMusicLogo() {
            const ytMusicLogos = document.querySelectorAll("ytmusic-logo > a, ytmusic-logo, .ytmusic-nav-bar ytmusic-logo");
            ytMusicLogos.forEach(ytMusicLogo => {
                if (!ytMusicLogo.dataset.logoModified) {
                    ytMusicLogo.innerHTML = MUSIC_LOGO_SVG;
                    ytMusicLogo.dataset.logoModified = 'true';
                }
            });
        }

        const observer = new MutationObserver(() => {
            updateMusicLogo();
        });

        observer.observe(document.body, { childList: true, subtree: true });
        updateMusicLogo();

        let upgradeButtonRemoved = false;
        const upgradePattern = /upgrade|nâng\s*cấp|アップグレード|升级|升級|обновить|aktualisier(?:en|ung)|mise\s*à\s*niveau|actualización|aggiorn(?:a|are)|uaktualnij|bijwerken|업그레이드|atualiza[cç][ãa]o|zur?ücksetzen|actualizare|opgradering|melhorar/i;

        const upgradeObserver = new MutationObserver(() => {
            if (upgradeButtonRemoved) return;
            const guideEntries = document.querySelectorAll('ytmusic-guide-entry-renderer yt-formatted-string.title');
            for (const entryTitle of guideEntries) {
                const titleText = entryTitle.textContent.trim();
                if (upgradePattern.test(titleText)) {
                    const entryToRemove = entryTitle.closest('ytmusic-guide-entry-renderer');
                    if (entryToRemove) {
                        entryToRemove.remove();
                        upgradeButtonRemoved = true;
                        break;
                    }
                }
            }
        });
        upgradeObserver.observe(document.body, { childList: true, subtree: true });
    }

    // =========================
    //       uBlock-style
    //      Cosmetic Filter
    //     (YouTube + Music)
    // =========================
    
    function setupAdFilter() {
        const AD_SELECTORS = [
            '#player-ads',
            '.video-ads',
            '.ytp-ad-module',
            '.ytp-ad-overlay-container',
            '.ytp-ad-text-overlay',
            'ytd-ad-slot-renderer',
            'ytd-display-ad-renderer',
            'ytd-promoted-sparkles-web-renderer',
            'ytd-promoted-video-renderer',
            'ytd-in-feed-ad-layout-renderer',
            'ytd-banner-promo-renderer',
            'ytd-statement-banner-renderer',
            'ytd-action-companion-ad-renderer',
            'ytd-companion-slot-renderer',
            'ytmusic-promoted-sparkles-web-renderer',
            'ytmusic-display-ad-renderer',
            'ytmusic-ad-slot-renderer',
            'ytm-promoted-sparkles-web-renderer',
            'ytm-companion-slot'
        ];

        const STYLE_ID = 'custom-ublock-cosmetic-filter';

        function installStyles() {
            if (document.getElementById(STYLE_ID)) return;
            const style = document.createElement('style');
            style.id = STYLE_ID;
            style.textContent = `
                ${AD_SELECTORS.join(',\n')} {
                    display: none !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                }
                ytd-rich-section-renderer:has(ytd-game-card-renderer) {
                    display: none !important;
                }
                ytd-game-card-renderer {
                    display: none !important;
                }
            `;
            (document.head || document.documentElement).appendChild(style);
        }

        function cleanElement(element) {
            if (!(element instanceof Element)) return;
            if (element.matches(AD_SELECTORS.join(','))) {
                element.style.setProperty('display', 'none', 'important');
            }
            element.querySelectorAll(AD_SELECTORS.join(',')).forEach(ad => {
                ad.style.setProperty('display', 'none', 'important');
            });
        }

        function removeGamingSection() {
            document.querySelectorAll('ytd-rich-section-renderer').forEach(section => {
                const hasGameCard = section.querySelector('ytd-game-card-renderer');
                const text = section.innerText || '';
                const gamingPattern = /hazır oyunlar|playables|quick games|juegos rápidos|spielbare spiele|jeux instantanés|мини-игры|jogos rápidos|giochi rapidi/i;
                if (hasGameCard || gamingPattern.test(text)) {
                    section.remove();
                }
            });
            document.querySelectorAll('ytd-game-card-renderer').forEach(card => {
                const section = card.closest('ytd-rich-section-renderer');
                if (section) {
                    section.remove();
                } else {
                    card.remove();
                }
            });
        }

        let scheduled = false;
        function scheduleCleanup() {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(() => {
                scheduled = false;
                document.querySelectorAll(AD_SELECTORS.join(',')).forEach(cleanElement);
                removeGamingSection();
            });
        }

        installStyles();

        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    cleanElement(node);
                }
            }
            scheduleCleanup();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        document.addEventListener('yt-navigate-finish', scheduleCleanup);
        document.addEventListener('yt-page-data-updated', scheduleCleanup);
        scheduleCleanup();
    }

    function init() {
        if (window.location.hostname.includes('music.youtube.com')) {
            setupYouTubeMusicObserver();
        } else {
            setupYouTubeObserver();
        }
        setupAdFilter();
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();