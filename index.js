// @ts-check
"use strict"

/**
 * This functions returns a modulo n.
 * @param {number} a 
 * @param {number} n 
 * @returns {number}
 * @private
 */
const mod = (a, n) => ((a % n) + n) % n;


/**
 * A set of maximum values for R, G and B.
 * @typedef {object} rgbMaximums
 * @prop {number} [r=255] The Red maximum value
 * @prop {number} [g=255] The Green maximum value
 * @prop {number} [b=255] The Blue maximum value
 */

/**
 * A set of maximum values for H, S and L.
 * @typedef {object} hslMaximums
 * @prop {number} [h=360] The Hue maximum value
 * @prop {number} [s=100] The Saturation maximum value
 * @prop {number} [l=100] The Lightness maximum value
 */

/**
 * A set of maximum values for HSL and RGB.
 * @typedef {object} hslRgbMaximums
 * @prop {hslMaximums} [hsl={ h: 360, s: 100, l: 100 }] The HSL maximum values
 * @prop {rgbMaximums} [rgb={ r: 255, g: 255, b:255 }] The RGB maximum values
 */

/**
 * A set of HSL values
 * @typedef {object} hsl
 * @prop {number} h The Hue value
 * @prop {number} s The Saturation value
 * @prop {number} l The Lightness value
 */


/**
 * This function converts an RGB color set to HSL.
 * @param {number} r The Red value
 * @param {number} g The Green value
 * @param {number} b The Blue value
 * @param {hslRgbMaximums} [maximums={ rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 360, s: 100, l: 100 } }] The maximum values for RGB (input) and HSL (output)
 * @returns {hsl}
 */
export function rgbToHsl(
    r,
    g,
    b,
    maximums = {
        rgb: {
            r: 255,
            g: 255,
            b: 255
        },
        hsl: {
            h: 360,
            s: 100,
            l: 100,
        }
    }
) {
    maximums.hsl = maximums.hsl || {
        h: 360,
        s: 100,
        l: 100
    };

    maximums.rgb = maximums.rgb || {
        r: 255,
        g: 255,
        b: 255
    };

    maximums.hsl.h = maximums.hsl.h || 360;
    maximums.hsl.s = maximums.hsl.s || 100;
    maximums.hsl.l = maximums.hsl.l || 100;
    maximums.rgb.r = maximums.rgb.r || 255;
    maximums.rgb.g = maximums.rgb.g || 255;
    maximums.rgb.b = maximums.rgb.b || 255;

    let r_ = r / maximums.rgb.r;
    let g_ = g / maximums.rgb.g;
    let b_ = b / maximums.rgb.b;

    if (r_ < 0 || r_ > 1 || g_ < 0 || g_ > 1 || b_ < 0 || b_ > 1) {
        throw new RangeError("'r', 'g' and 'b' shouldn't be uppon their respective maximum values .");
    }

    let cMax = Math.max(r_, g_, b_);
    let cMin = Math.min(r_, g_, b_);
    let delta = cMax - cMin;

    let h_, s_, l_;
    if (delta == 0) {
        h_ = 0;
    }
    else if (cMax == b_) {
        h_ = 60 * (((r_ - g_) / delta) + 4);
    }
    else if (cMax == g_) {
        h_ = 60 * (((b_ - r_) / delta) + 2);
    }
    else if (cMax == r_) {
        h_ = 60 * mod(((g_ - b_) / delta), 6);
    }
    else {
        throw new Error("'cMax' should be 'r_', 'g_' or 'b_'.")
    }

    if (h_ < 0) {
        h_ += 360;
    }

    l_ = (cMax + cMin) / 2;

    if (delta == 0) {
        s_ = 0;
    }
    else {
        s_ = delta / (1 - Math.abs(2 * l_ - 1));
    }

    let result = {
        h: (h_ / 360) * maximums.hsl.h,
        s: s_ * maximums.hsl.s,
        l: l_ * maximums.hsl.l
    }

    return result
}

/**
 * A set of RGB values
 * @typedef {object} rgb
 * @prop {number} r The Red value
 * @prop {number} g The Green value
 * @prop {number} b The Blue value
 */

/**
 * This function converts an HSL color set to RGB.
 * @param {number} h The Hue value
 * @param {number} s The Saturation value
 * @param {number} l The Lightness value
 * @param {hslRgbMaximums} [maximums={ rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 360,s: 100,l: 100 } }] The maximum values for HSL (input) and RGB (output)
 * @returns {rgb}
 */
export function hslToRgb(
    h,
    s,
    l,
    maximums = {
        rgb: {
            r: 255,
            g: 255,
            b: 255
        },
        hsl: {
            h: 360,
            s: 100,
            l: 100,
        }
    }
) {
    maximums.hsl = maximums.hsl || {
        h: 360,
        s: 100,
        l: 100
    };

    maximums.rgb = maximums.rgb || {
        r: 255,
        g: 255,
        b: 255
    };

    maximums.hsl.h = maximums.hsl.h || 360;
    maximums.hsl.s = maximums.hsl.s || 100;
    maximums.hsl.l = maximums.hsl.l || 100;
    maximums.rgb.r = maximums.rgb.r || 255;
    maximums.rgb.g = maximums.rgb.g || 255;
    maximums.rgb.b = maximums.rgb.b || 255;

    let h_ = h / maximums.hsl.h * 360;
    const s_ = s / maximums.hsl.s;
    const l_ = l / maximums.hsl.l;
    if (h_ < 0 || h_ > 360 || s_ < 0 || s_ > 1 || l_ < 0 || l_ > 1) {
        throw new RangeError("'h', 's' and 'l' shouldn't be uppon their respective maximum values .");
    }
    else if (h_ == 360) {
        h_ = 0;
    }

    const c = (1 - Math.abs(2 * l_ - 1)) * s_;
    const x = c * (1 - Math.abs((h_ / 60) % 2 - 1));
    const m = l_ - c / 2;

    let r_, g_, b_;
    if (h_ < 60) {
        r_ = c;
        g_ = x;
        b_ = 0;
    }
    else if (h_ < 120) {
        r_ = x;
        g_ = c;
        b_ = 0;
    }
    else if (h_ < 180) {
        r_ = 0;
        g_ = c;
        b_ = x;
    }
    else if (h_ < 240) {
        r_ = 0;
        g_ = x;
        b_ = c;
    }
    else if (h_ < 300) {
        r_ = x;
        g_ = 0;
        b_ = c;
    }
    else if (h_ < 360) {
        r_ = c;
        g_ = 0;
        b_ = x;
    }
    else {
        throw new Error("'h_' should be below 360.")

    }

    return {
        r: (r_ + m) * maximums.rgb.r,
        g: (g_ + m) * maximums.rgb.g,
        b: (b_ + m) * maximums.rgb.b
    };
}

/**
 * A set of maximum values for C, M and Y and K.
 * @typedef {object} cmykMaximums
 * @prop {number} [c=1] The Cyan maximum value
 * @prop {number} [m=1] The Magenta maximum value
 * @prop {number} [y=1] The Yellow maximum value
 * @prop {number} [k=1] The Key maximum value
 */

/**
 * A set of maximum values for HSL and RGB.
 * @typedef {object} cmykRgbMaximums
 * @prop {cmykMaximums} [cmyk={ c: 1, m: 1, y: 1, k: 1 }] The CMYK maximum values
 * @prop {rgbMaximums} [rgb={ r: 255, g: 255, b: 255 }] The RGB maximum values
 */


/**
 * This function converts a CMYK color set to RGB.
 * @param {number} c The Cyan value
 * @param {number} m The Magenta value
 * @param {number} y The Yellow value
 * @param {number} k The Key value
 * @param {cmykRgbMaximums} [maximums={ rgb: { r: 255, g: 255, b: 255 }, cmyk: { c: 1, m: 1, y: 1, k: 1 } }] The maximum values for CMYK (input) and RGB (output)
 * @returns {rgb}
 */
export function cmykToRgb(
    c,
    m,
    y,
    k,
    maximums = {
        rgb: {
            r: 255,
            g: 255,
            b: 255
        },
        cmyk: {
            c: 1,
            m: 1,
            y: 1,
            k: 1
        }
    }
) {
    maximums.cmyk = maximums.cmyk || {
        c: 255,
        m: 255,
        y: 255,
        k: 255
    }

    maximums.rgb = maximums.rgb || {
        r: 255,
        g: 255,
        b: 255
    }

    maximums.cmyk.c = maximums.cmyk.c || 255
    maximums.cmyk.m = maximums.cmyk.m || 255
    maximums.cmyk.y = maximums.cmyk.y || 255
    maximums.cmyk.k = maximums.cmyk.k || 255
    maximums.rgb.r = maximums.rgb.r || 255
    maximums.rgb.g = maximums.rgb.g || 255
    maximums.rgb.b = maximums.rgb.b || 255

    const c_ = c / maximums.cmyk.c
    const m_ = m / maximums.cmyk.m
    const y_ = y / maximums.cmyk.y
    const k_ = k / maximums.cmyk.k

    if (c_ < 0 || c_ > 255 || m_ < 0 || m_ > 255 || y_ < 0 || y_ > 255 || k_ < 0 || k_ > 255) {
        throw new RangeError("'c', 'm', 'y' and 'k' shouldn't be uppon their respective maximum values .");
    }

    const r_ = (1 - c_) * (1 - k_)
    const g_ = (1 - m_) * (1 - k_)
    const b_ = (1 - y_) * (1 - k_)


    const result = {
        r: r_ * maximums.rgb.r,
        g: g_ * maximums.rgb.g,
        b: b_ * maximums.rgb.b
    }

    return result
}

/**
 * A set of values for C, M and Y and K.
 * @typedef {object} cmyk
 * @prop {number} c The Cyan value
 * @prop {number} m The Magenta value
 * @prop {number} y The Yellow value
 * @prop {number} k The Key value
 */


/**
 * This function converts an RGB color set to CMYK.
 * @param {number} r The Red value
 * @param {number} g The Green value
 * @param {number} b The Blue value
 * @param {cmykRgbMaximums} [maximums={ rgb: { r:255, g:255, b:255 }, cmyk: { c: 1, m: 1, y: 1,k: 1 } }] The maximum values for RGB (input) and CMYK (output)
 * @returns {cmyk}
 */
export function rgbToCmyk(
    r,
    g,
    b,
    maximums = {
        rgb: {
            r: 255,
            g: 255,
            b: 255
        },
        cmyk: {
            c: 1,
            m: 1,
            y: 1,
            k: 1
        }
    }
) {
    maximums.cmyk = maximums.cmyk || {
        c: 255,
        m: 255,
        y: 255,
        k: 255
    };

    maximums.rgb = maximums.rgb || {
        r: 255,
        g: 255,
        b: 255
    };

    maximums.cmyk.c = maximums.cmyk.c || 255;
    maximums.cmyk.m = maximums.cmyk.m || 255;
    maximums.cmyk.y = maximums.cmyk.y || 255;
    maximums.cmyk.k = maximums.cmyk.k || 255;
    maximums.rgb.r = maximums.rgb.r || 255;
    maximums.rgb.g = maximums.rgb.g || 255;
    maximums.rgb.b = maximums.rgb.b || 255;

    const r_ = r / maximums.rgb.r;
    const g_ = g / maximums.rgb.g;
    const b_ = b / maximums.rgb.b;

    if (r_ < 0 || r_ > 1 || g_ < 0 || g_ > 1 || b_ < 0 || b_ > 1) {
        throw new RangeError("'r', 'g' and 'b' shouldn't be uppon their respective maximum values .");
    }

    const k_ = 1 - Math.max(r_, g_, b_)
    let c_ = (1 - r_ - k_) / (1 - k_)
    let m_ = (1 - g_ - k_) / (1 - k_)
    let y_ = (1 - b_ - k_) / (1 - k_)

    c_ = isNaN(c_) ? 0 : c_
    m_ = isNaN(m_) ? 0 : m_
    y_ = isNaN(y_) ? 0 : y_

    console.log(c_, m_, y_, k_)
    let result = {
        c: c_ * maximums.cmyk.c,
        m: m_ * maximums.cmyk.m,
        y: y_ * maximums.cmyk.y,
        k: k_ * maximums.cmyk.k,
    }

    return result
}

