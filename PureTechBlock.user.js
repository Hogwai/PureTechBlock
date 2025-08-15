// ==UserScript==
// @name            PureTechBlock
// @namespace       https://github.com/Hogwai/PureTechBlock/
// @version         1.0
// @description:en  Remove cards on lacentrale.fr containing a vehicle "PURETECH", "VTI" ou "THP", and also ads containers (.lcui-AdPlaceholder, appNexusPlaceholder
// @description:fr  Enlève les annonces sur lacentrale.fr contenant un véhicle "PURETECH", "VTI" ou "THP", ainsi que les conteneurs de publicités (.lcui-AdPlaceholder, appNexusPlaceholder)
// @author          Hogwai
// @match           https://lacentrale.fr/*
// @match           https://www.lacentrale.fr/*
// @grant           GM_setValue
// @grant           GM_getValue
// @license         MIT
// ==/UserScript==

(function () {
    'use strict';

    // Vehicle with these keywords will be removed
    const VEHICLE_KEYWORDS = ['PURETECH', 'VTI', 'THP'];

    function removeVehicleCards() {
        const targetDivs = document.querySelectorAll('div[class*="vehiclecardV2_subTitle__"]');

        targetDivs.forEach(div => {
            const textContent = div.textContent.trim().toUpperCase();
            if (VEHICLE_KEYWORDS.some(keyword => textContent.includes(keyword))) {
                const parentContainer = div.closest('.searchCard');
                if (parentContainer) {
                    parentContainer.remove();
                    console.log(textContent + " removed");
                }
            }
        });
    }

    function removeFrontalAd() {
        const frontalAd = document.querySelector('.containerGlobal > .lcui-AdPlaceholder');
        if (frontalAd) {
            frontalAd.remove();
        }
    }

    function removeInBetweenAds() {
        const inBetweenCardsAds = document.querySelectorAll('div.appNexusPlaceholder');
        inBetweenCardsAds.forEach(div => {
            div.remove();
        });
        console.log(inBetweenCardsAds.length + " in-between ads removed");
    }


    function waitForElementsAndRun() {
        const removeDynamicAds = () => {
            removeInBetweenAds();
            removeVehicleCards();
        };

        if (document.readyState === "complete") {
            removeFrontalAd();
            // We have to wait a bit because cards are lazy-loaded
            setTimeout(removeDynamicAds, 500);
        }
    }

    waitForElementsAndRun();
})();
