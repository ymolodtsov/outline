// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(tab) {
    // Getting the current URL when the button is clocked
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var address = tabs[0].url;

        // Disable the redirect for internal Chrome pages and outline.com pages

        var reg = new RegExp ("^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[/\w\.-]*)*");
        var domain = reg.exec(address);

        if ((domain[1] !== "outline.") && (domain[1] !== "chr"))
        {
            // Redirect to the outline.com with GET request formed
            chrome.tabs.update({url: 'http://outline.com/'+address});
        }
    });

});
