chrome.webRequest.onHeadersReceived.addListener(
    function (details) {

        if (details.statusCode === 302) {
            for (let i in details.responseHeaders) {
                if (details.responseHeaders[i].name.toLowerCase() === "location" && details.responseHeaders[i].value === "/") {
                    details.responseHeaders[i].value = details.url.replace("v2ex.com/t/", "v2ex.com/amp/t/")
                    break
                }
            }
        }

        return {
            responseHeaders: details.responseHeaders
        };
    }, {
        urls: [
            "*://v2ex.com/t/*",
            "*://*.v2ex.com/t/*",
        ],
        types: [
            "main_frame",
            // "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other",
        ]
    },
    ['responseHeaders', 'blocking']);