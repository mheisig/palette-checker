if (window.__tsPaletteCheckerLoaded) {
  // Already injected — listener is active, nothing to do
} else {
window.__tsPaletteCheckerLoaded = true;

// ── Palette Data ──────────────────────────────────────────────────────────────

const PALETTE = [
  { name: "Light Gray", h: 53, s: 19, l: 82, type: "FN" },
  { name: "Perfectly Pale", h: 30, s: 19, l: 79, type: "FN" },
  { name: "Silver Cloud", h: 21, s: 10, l: 72, type: "FN" },
  { name: "Rock Ridge", h: 33, s: 5, l: 55, type: "FN" },
  { name: "Major Brown", h: 21, s: 8, l: 35, type: "FN" },
  { name: "Chardonnay", h: 53, s: 62, l: 75, type: "FN" },
  { name: "Lemon Grass", h: 53, s: 50, l: 72, type: "FN" },
  { name: "Wrought Iron", h: 110, s: 3, l: 61, type: "FN" },
  { name: "Moon Mist", h: 72, s: 2, l: 50, type: "FN" },
  { name: "Sea Turtle", h: 38, s: 4, l: 36, type: "FN" },
  { name: "Lunar Rock", h: 38, s: 0, l: 77, type: "FN" },
  { name: "Ashes of Roses", h: 5, s: 7, l: 69, type: "FN" },
  { name: "Purple Dove", h: 339, s: 8, l: 57, type: "FN" },
  { name: "Moonscape", h: 327, s: 9, l: 42, type: "FN" },
  { name: "Forged Iron", h: 264, s: 3, l: 28, type: "FN" },
  { name: "Wind Chime", h: 23, s: 7, l: 78, type: "FN" },
  { name: "Pure Cashmere", h: 30, s: 13, l: 64, type: "FN" },
  { name: "Bark", h: 3, s: 11, l: 62, type: "FN" },
  { name: "Antler", h: 7, s: 13, l: 53, type: "FN" },
  { name: "Huckleberry", h: 340, s: 12, l: 34, type: "FN" },
  { name: "Dusty Blue", h: 209, s: 17, l: 61, type: "FN" },
  { name: "Troposphere", h: 216, s: 16, l: 54, type: "FN" },
  { name: "Gray Mist", h: 190, s: 13, l: 65, type: "FN" },
  { name: "Trooper", h: 191, s: 10, l: 45, type: "FN" },
  { name: "Turbulence", h: 212, s: 9, l: 33, type: "FN" },
  { name: "Subdued Blue", h: 214, s: 23, l: 71, type: "FN" },
  { name: "Spring Lake", h: 209, s: 17, l: 49, type: "FN" },
  { name: "Delphinium Blue", h: 197, s: 32, l: 53, type: "FN" },
  { name: "Deep Water", h: 204, s: 58, l: 36, type: "FN" },
  { name: "Set Sail", h: 213, s: 48, l: 30, type: "FN" },
  { name: "Sea Pink", h: 343, s: 53, l: 73, type: "CA" },
  { name: "Chateau Rose", h: 343, s: 51, l: 64, type: "CA" },
  { name: "Bubble Gum", h: 347, s: 73, l: 68, type: "CA" },
  { name: "Carmine", h: 343, s: 46, l: 51, type: "CA" },
  { name: "Anemone", h: 341, s: 51, l: 34, type: "CA" },
  { name: "Pink-a-boo", h: 340, s: 72, l: 89, type: "CA" },
  { name: "Rosebloom", h: 336, s: 57, l: 72, type: "CA" },
  { name: "Moonlite Mauve", h: 331, s: 45, l: 69, type: "CA" },
  { name: "Meadow Mauve", h: 320, s: 33, l: 50, type: "CA" },
  { name: "Baton Rouge", h: 328, s: 43, l: 42, type: "CA" },
  { name: "Baby Lavender", h: 230, s: 33, l: 72, type: "CA" },
  { name: "Deep Periwinkle", h: 234, s: 32, l: 61, type: "CA" },
  { name: "Corsican Blue", h: 245, s: 21, l: 48, type: "CA" },
  { name: "Orient Blue", h: 243, s: 28, l: 37, type: "CA" },
  { name: "Blue Ribbon", h: 240, s: 25, l: 30, type: "CA" },
  { name: "Dutch Canal", h: 211, s: 54, l: 74, type: "CA" },
  { name: "All Aboard", h: 208, s: 52, l: 58, type: "CA" },
  { name: "Lichen Blue", h: 201, s: 36, l: 54, type: "CA" },
  { name: "Regatta", h: 214, s: 43, l: 50, type: "CA" },
  { name: "Blue Iolite", h: 214, s: 69, l: 33, type: "CA" },
  { name: "Crystal Seas", h: 196, s: 53, l: 59, type: "CA" },
  { name: "Wave Ride", h: 200, s: 58, l: 42, type: "CA" },
  { name: "Ipanema", h: 186, s: 46, l: 58, type: "CA" },
  { name: "Larkspur", h: 193, s: 41, l: 40, type: "CA" },
  { name: "Saxony Blue", h: 195, s: 61, l: 31, type: "CA" },
  { name: "Cascade", h: 168, s: 37, l: 61, type: "CA" },
  { name: "Gum Drop Green", h: 163, s: 56, l: 42, type: "CA" },
  { name: "Golf Green", h: 164, s: 100, l: 27, type: "CA" },
  { name: "Verdant Green", h: 160, s: 70, l: 24, type: "CA" },
  { name: "Rain Forest", h: 173, s: 48, l: 18, type: "CA" },
  { name: "Neptune Green", h: 152, s: 31, l: 62, type: "CA" },
  { name: "Ming Green", h: 157, s: 48, l: 43, type: "CA" },
  { name: "Ivy", h: 173, s: 51, l: 28, type: "CA" },
  { name: "Teal", h: 182, s: 33, l: 40, type: "CA" },
  { name: "Chesapeake Bay", h: 190, s: 60, l: 23, type: "CA" },
  { name: "Volcanic Ash", h: 240, s: 1, l: 29, type: "B" },
  { name: "Silvery", h: 150, s: 1, l: 56, type: "M" },
  { name: "Silver-Plated", h: 39, s: 19, l: 68, type: "M" },
  { name: "Silver Coin", h: 30, s: 26, l: 86, type: "M" },
];

// ── Color Conversion ─────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hexToHsl(hex) {
  return rgbToHsl(...hexToRgb(hex));
}

function hslToCss(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// ── Distance Calculation ─────────────────────────────────────────────────────

function colorDistance(h1, s1, l1, h2, s2, l2) {
  const hueDist = Math.min(Math.abs(h1 - h2), 360 - Math.abs(h1 - h2));
  const avgS = (s1 + s2) / 2;
  const dH = hueDist * (avgS / 100);
  const dS = s1 - s2;
  const dL = l1 - l2;
  return Math.sqrt(dH * dH + dS * dS + dL * dL);
}

function findClosest(h, s, l) {
  return PALETTE.map((c) => ({
    ...c,
    distance: colorDistance(h, s, l, c.h, c.s, c.l),
  })).sort((a, b) => a.distance - b.distance);
}

// ── Verdict Logic ────────────────────────────────────────────────────────────

function getWarnings(h, s, l) {
  const warnings = [];
  if (l < 12) warnings.push("Near-black");
  else if (l < 18) warnings.push("Below palette floor");
  if (l > 92) warnings.push("Near-white");
  if (s < 15 && l > 86) warnings.push("Neutral too light (near-white)");
  if (l > 89 && s >= 15) warnings.push("Exceeds palette max lightness");
  if (h >= 30 && h <= 150 && s > 15)
    warnings.push("Warm hue with visible saturation");
  return warnings;
}

function getVerdict(h, s, l, distance) {
  // Hard boundary overrides
  if (l < 12) return "out";
  if (l < 18) return "out";
  if (l > 92) return "out";
  if (s < 15 && l > 86) return "out";
  if (l > 89 && s >= 15) return "out";
  if (h >= 30 && h <= 150 && s > 15) return "out";

  if (distance <= 10) return "in";
  if (distance <= 18) return "borderline";
  return "out";
}

// ── Popup UI ─────────────────────────────────────────────────────────────────

const POPUP_HOST_ID = "__ts-palette-checker-host__";

function removePopup() {
  const existing = document.getElementById(POPUP_HOST_ID);
  if (existing) existing.remove();
}

function distanceColor(d) {
  if (d <= 10) return "#4a9e4a";
  if (d <= 18) return "#c89b2b";
  return "#c94a4a";
}

function verdictLabel(v) {
  const labels = {
    in: "IN PALETTE",
    borderline: "BORDERLINE",
    out: "OUT OF PALETTE",
  };
  return labels[v] || v;
}

function verdictBgColor(v) {
  if (v === "in") return "#e6f4e6";
  if (v === "borderline") return "#fdf3dc";
  return "#fde6e6";
}

function verdictTextColor(v) {
  if (v === "in") return "#2d7a2d";
  if (v === "borderline") return "#8a6d1b";
  return "#a33";
}

function showPopup(x, y, hex, hsl) {
  removePopup();

  const [h, s, l] = hsl;
  const ranked = findClosest(h, s, l);
  const closest = ranked[0];
  const top5 = ranked.slice(0, 5);
  const warnings = getWarnings(h, s, l);
  const verdict = getVerdict(h, s, l, closest.distance);

  // Send verdict to background for badge
  chrome.runtime.sendMessage({ type: "verdict", verdict });

  const host = document.createElement("div");
  host.id = POPUP_HOST_ID;
  host.style.cssText =
    "position:fixed;z-index:2147483647;top:0;left:0;width:0;height:0;pointer-events:none;";
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: "closed" });

  // Clamp popup position to viewport
  const pw = 340;
  const ph = 520;
  let px = x + 16;
  let py = y + 16;
  if (px + pw > window.innerWidth - 8) px = x - pw - 16;
  if (py + ph > window.innerHeight - 8) py = window.innerHeight - ph - 8;
  if (px < 8) px = 8;
  if (py < 8) py = 8;

  const hDist = Math.min(
    Math.abs(h - closest.h),
    360 - Math.abs(h - closest.h)
  );

  shadow.innerHTML = `
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      .popup {
        position: fixed;
        left: ${px}px;
        top: ${py}px;
        width: ${pw}px;
        background: #f5f4f0;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,.18), 0 2px 8px rgba(0,0,0,.08);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
        font-size: 13px;
        color: #333;
        pointer-events: auto;
        overflow: hidden;
      }
      .header {
        display: flex;
        gap: 14px;
        padding: 16px 16px 14px;
      }
      .swatch-main {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        flex-shrink: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }
      .swatch-main .hsl-label {
        background: rgba(0,0,0,.45);
        color: #fff;
        font-size: 11px;
        font-family: "SF Mono", "Cascadia Code", "Consolas", monospace;
        padding: 3px 8px 4px;
        width: 100%;
        text-align: center;
      }
      .header-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
      }
      .verdict-pill {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 4px;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.5px;
        align-self: flex-start;
      }
      .match-name {
        font-size: 14px;
        font-weight: 600;
        margin-top: 4px;
      }
      .match-name .type-tag {
        font-weight: 400;
        color: #888;
        font-size: 12px;
      }
      .match-dist {
        font-size: 12px;
        color: #888;
      }
      .section-label {
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 1.2px;
        color: #999;
        text-transform: uppercase;
        padding: 10px 16px 6px;
      }
      .nearest-list {
        padding: 0 12px 4px;
      }
      .nearest-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        background: #fff;
        border: 1px solid #e8e7e3;
        border-radius: 8px;
        margin-bottom: 4px;
      }
      .nearest-rank {
        font-size: 13px;
        color: #bbb;
        width: 14px;
        text-align: center;
        flex-shrink: 0;
      }
      .nearest-swatch {
        width: 36px;
        height: 36px;
        border-radius: 6px;
        flex-shrink: 0;
      }
      .nearest-info {
        flex: 1;
        min-width: 0;
      }
      .nearest-name {
        font-weight: 600;
        font-size: 13px;
      }
      .nearest-name .type-tag {
        font-weight: 400;
        color: #aaa;
        font-size: 11px;
        margin-left: 4px;
      }
      .nearest-hsl {
        font-size: 11px;
        color: #999;
        font-family: "SF Mono", "Cascadia Code", "Consolas", monospace;
      }
      .nearest-dist {
        font-weight: 700;
        font-size: 15px;
        flex-shrink: 0;
      }
      .comparison {
        padding: 8px 16px 6px;
      }
      .comp-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 0;
        font-size: 13px;
      }
      .comp-label {
        font-weight: 500;
      }
      .comp-values {
        font-family: "SF Mono", "Cascadia Code", "Consolas", monospace;
        font-size: 12px;
        text-align: right;
        color: #555;
      }
      .comp-values .delta {
        color: #999;
      }
      .warnings {
        padding: 8px 16px 12px;
      }
      .warning-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #a33;
        padding: 2px 0;
      }
      .warning-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #c94a4a;
        flex-shrink: 0;
      }
      .bottom-pad {
        height: 8px;
      }
    </style>
    <div class="popup">
      <div class="header">
        <div class="swatch-main" style="background:${hex};">
          <div class="hsl-label">H:${h} S:${s} L:${l}</div>
        </div>
        <div class="header-info">
          <span class="verdict-pill" style="background:${verdictBgColor(verdict)};color:${verdictTextColor(verdict)};">
            ${verdictLabel(verdict)}
          </span>
          <div class="match-name">
            Closest match: ${closest.name} <span class="type-tag">(${closest.type})</span>
          </div>
          <div class="match-dist">
            Distance: ${closest.distance.toFixed(1)} <span style="color:#aaa;">(≤10 = in, ≤18 = borderline)</span>
          </div>
        </div>
      </div>

      <div class="section-label">Nearest 5 Palette Colors</div>
      <div class="nearest-list">
        ${top5
          .map(
            (c, i) => `
          <div class="nearest-row">
            <span class="nearest-rank">${i + 1}</span>
            <div class="nearest-swatch" style="background:${hslToCss(c.h, c.s, c.l)};"></div>
            <div class="nearest-info">
              <div class="nearest-name">${c.name} <span class="type-tag">${c.type}</span></div>
              <div class="nearest-hsl">H:${c.h} S:${c.s} L:${c.l}</div>
            </div>
            <span class="nearest-dist" style="color:${distanceColor(c.distance)};">${c.distance.toFixed(1)}</span>
          </div>`
          )
          .join("")}
      </div>

      <div class="section-label">Component Comparison vs Closest</div>
      <div class="comparison">
        <div class="comp-row">
          <span class="comp-label">Hue</span>
          <span class="comp-values">
            <strong>${h}°</strong> → ${closest.h}° <span class="delta">Δ${hDist}°</span>
          </span>
        </div>
        <div class="comp-row">
          <span class="comp-label">Saturation</span>
          <span class="comp-values">
            <strong>${s}%</strong> → ${closest.s}% <span class="delta">Δ${Math.abs(s - closest.s)}%</span>
          </span>
        </div>
        <div class="comp-row">
          <span class="comp-label">Lightness</span>
          <span class="comp-values">
            <strong>${l}%</strong> → ${closest.l}% <span class="delta">Δ${Math.abs(l - closest.l)}%</span>
          </span>
        </div>
      </div>

      ${
        warnings.length > 0
          ? `
        <div class="section-label">Warnings</div>
        <div class="warnings">
          ${warnings.map((w) => `<div class="warning-item"><span class="warning-dot"></span>${w}</div>`).join("")}
        </div>`
          : ""
      }

      <div class="bottom-pad"></div>
    </div>
  `;

  // Dismiss on click outside or Escape
  const dismiss = (e) => {
    if (e.type === "keydown" && e.key !== "Escape") return;
    removePopup();
    document.removeEventListener("keydown", dismiss);
    document.removeEventListener("mousedown", dismiss);
  };
  // Delay attaching so the current click doesn't immediately dismiss
  setTimeout(() => {
    document.addEventListener("keydown", dismiss);
    document.addEventListener("mousedown", dismiss);
  }, 50);
}

// ── Arm/Pick Logic ───────────────────────────────────────────────────────────

const OVERLAY_ID = "__ts-palette-checker-overlay__";

function removeOverlay() {
  const el = document.getElementById(OVERLAY_ID);
  if (el) el.remove();
}

function armPicker() {
  removePopup();
  removeOverlay();

  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:2147483646;" +
    "cursor:crosshair;background:transparent;";
  document.body.appendChild(overlay);

  const hint = document.createElement("div");
  hint.style.cssText =
    "position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:2147483647;" +
    "background:rgba(0,0,0,.75);color:#fff;padding:6px 16px;border-radius:6px;" +
    "font:13px/1.4 -apple-system,system-ui,sans-serif;pointer-events:none;";
  hint.textContent = "Click anywhere to pick a color...";
  overlay.appendChild(hint);

  function cancel(e) {
    if (e.key === "Escape") {
      removeOverlay();
      document.removeEventListener("keydown", cancel);
    }
  }
  document.addEventListener("keydown", cancel);

  overlay.addEventListener("click", (e) => {
    const cx = e.clientX;
    const cy = e.clientY;
    removeOverlay();
    document.removeEventListener("keydown", cancel);

    // Ask background to screenshot the tab and sample the pixel
    chrome.runtime.sendMessage(
      { type: "pick-color", x: cx, y: cy, dpr: window.devicePixelRatio || 1 },
      (response) => {
        if (response && response.hex) {
          const hsl = hexToHsl(response.hex);
          showPopup(cx, cy, response.hex, hsl);
        }
      }
    );
  });
}

// ── Message Listener ─────────────────────────────────────────────────────────

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "arm") {
    armPicker();
  }
});

} // end guard
