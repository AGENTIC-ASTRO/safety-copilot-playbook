document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var toggle = document.querySelector(".mobile-toggle");
  var sidebar = document.querySelector(".sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  // Fallback copy for browsers where the async Clipboard API is
  // unavailable or blocked (older browsers, non-secure contexts,
  // locked-down managed environments). Returns true on success.
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function showCopied(btn) {
    var original = btn.getAttribute("data-label") || btn.textContent;
    btn.setAttribute("data-label", original);
    btn.textContent = "Copied";
    btn.classList.add("copied");
    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  }

  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".card");
      var block = card && card.querySelector(".prompt-block");
      if (!block) return;
      var text = block.innerText;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { showCopied(btn); },
          function () { if (fallbackCopy(text)) showCopied(btn); }
        );
      } else {
        if (fallbackCopy(text)) showCopied(btn);
      }
    });
  });
});
