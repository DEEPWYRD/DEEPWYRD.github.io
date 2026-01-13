(function () {
    function isMobileDevice() {
        if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
            return navigator.userAgentData.mobile;
        }

        return /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    }

    function showMobileWarning(container) {
        if (!container) {
            return;
        }

        var existing = document.getElementById("mobile-warning");
        if (existing) {
            existing.hidden = false;
            existing.classList.add("is-visible");
            return;
        }

        var warning = document.createElement("p");
        warning.id = "mobile-warning";
        warning.className = "mobile-warning is-visible";
        warning.textContent = "The installer is for Windows only. Please open this site on a Windows PC to download.";
        container.appendChild(warning);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var yearEl = document.getElementById("year");
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        if (isMobileDevice()) {
            var content = document.querySelector("main .content");
            showMobileWarning(content);
        }
    });
})();
