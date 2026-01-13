(function () {
    const DOWNLOAD_HREF = "https://launcher.xsolla.com/launcher_project/9427/generate/14582/installer/web";
    const DOWNLOAD_NAME = "DEEPWYRD_Installer.exe";
    const TARGET_ORIGIN = "https://installer.launcher.xsolla.com";

    function refreshRenamerCacheBuster(frame) {
        // Xsolla recommended cache busting; do it without inline JS.
        const baseUrl = "https://installer.launcher.xsolla.com/launcher-installer-renamer-prod/v1/renamer.html";
        frame.src = `${baseUrl}?cache=${Date.now()}`;
    }

    function sendDownloadMessage(frame) {
        if (!frame || !frame.contentWindow) {
            console.error("Xsolla renamer iframe not found or not ready.");
            return;
        }

        frame.contentWindow.postMessage(
            { type: "download", href: DOWNLOAD_HREF, name: DOWNLOAD_NAME },
            TARGET_ORIGIN
        );
    }

    document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("download-launcher");
        const frame = document.getElementById("xsolla-installer-renamer");

        if (!button) {
            console.error("Download button element not found.");
            return;
        }

        if (!frame) {
            console.error("Xsolla renamer iframe element not found.");
            return;
        }

        refreshRenamerCacheBuster(frame);

        button.addEventListener("click", function (e) {
            e.preventDefault();
            sendDownloadMessage(frame);
        });
    });
})();
