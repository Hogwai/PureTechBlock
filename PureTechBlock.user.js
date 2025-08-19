// ==UserScript==
// @name            PureTechBlock
// @namespace       https://github.com/Hogwai/PureTechBlock/
// @version         1.1
// @description:en  Remove cards on lacentrale.fr containing a vehicle "PURETECH", "VTI" ou "THP", and also ads containers (.lcui-AdPlaceholder, appNexusPlaceholder
// @description:fr  Enlève les annonces sur lacentrale.fr contenant un véhicle "PURETECH", "VTI" ou "THP", ainsi que les conteneurs de publicités (.lcui-AdPlaceholder, appNexusPlaceholder)
// @author          Hogwai
// @match           https://lacentrale.fr/*
// @match           https://www.lacentrale.fr/*
// @grant           GM_setValue
// @grant           GM_getValue
// @license         MIT
// @downloadURL     https://update.greasyfork.org/scripts/545906/PureTechBlock.user.js
// @updateURL       https://update.greasyfork.org/scripts/545906/PureTechBlock.meta.js
// ==/UserScript==

(function () {
    'use strict';

    const VEHICLE_KEYWORDS = ['PURETECH', 'VTI', 'THP'];

    const AD_SELECTORS = [
        '.lcui-AdPlaceholder',
        '#pavePubDesktop',
        '.appNexusPlaceholder',
        '#pavePubGallery'
    ];

    function scanAndClean() {
        let removedCount = 0;
        const adContainers = document.querySelectorAll(AD_SELECTORS.join(', '));
        adContainers.forEach(ad => {
            ad.remove();
            console.log(`[PureTechBlock] Ad removed : ${ad.className || ad.id}`);
        });

        const vehicleCards = document.querySelectorAll('.searchCard:not([data-ptb-processed])');
        vehicleCards.forEach(card => {
            card.setAttribute('data-ptb-processed', 'true');

            const subTitle = card.querySelector('div[class*="vehiclecardV2_subTitle__"]');
            if (subTitle) {
                const textContent = subTitle.textContent.trim().toUpperCase();
                if (VEHICLE_KEYWORDS.some(keyword => textContent.includes(keyword))) {
                    card.remove();
                    removedCount++;
                    console.log(`[PureTechBlock] Card removed : ${textContent.trim()}`);
                }
            }
        });

        if (removedCount > 0) {
            console.log(`[PureTechBlock] Total of ${removedCount} elements removed.`);
        }
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const debouncedScanAndClean = debounce(scanAndClean, 300);

    const observer = new MutationObserver((mutations) => {
        const hasAddedNodes = mutations.some(mutation => mutation.addedNodes.length > 0);
        if (hasAddedNodes) {
            debouncedScanAndClean();
        }
    });

    const observerConfig = {
        childList: true,
        subtree: true
    };

    observer.observe(document.body, observerConfig);

    scanAndClean();

})();