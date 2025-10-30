/**
 * This function converts an RGB color set to HSL.
 * @param r The Red value
 * @param g The Green value
 * @param b The Blue value
 * @param maximums The maximum values for RGB (input) and HSL (output)
 */
export declare function rgbToHsl(
    r: number,
    g: number,
    b: number,
    maximums?: {
        rgb?: {
            r?: number,
            g?: number,
            b?: number
        },
        hsl?: {
            h?: number,
            s?: number,
            l?: number,
        }
    }
): {
    /** The Hue value */
    h: number,
    /** The Saturation value */
    s: number,
    /** The Lightness value */
    l: number
}

/**
 * This function converts an HSL color set to RGB.
 * @param h The Hue value
 * @param s The Saturation value
 * @param l The Lightness value
 * @param maximums The maximum values for HSL (input) and RGB (output)
 */
export declare function hslToRgb(
    h: number,
    s: number,
    l: number,
    maximums?: {
        rgb?: {
            r?: number,
            g?: number,
            b?: number
        },
        hsl?: {
            h?: number,
            s?: number,
            l?: number,
        }
    }
): {
    /** The Red value */
    r: number,
    /** The Green value */
    g: number,
    /** The Blue value */
    b: number
}

/**
 * This function converts a CMYK color set to RGB.
 * @param c The Cyan value
 * @param m The Magenta value
 * @param y The Yellow value
 * @param k The Key value
 * @param maximums The maximum values for CMYK (input) and RGB (output)
 */
export declare function cmykToRgb(
    c: number,
    m: number,
    y: number,
    k: number,
    maximums?: {
        rgb?: {
            r?: number,
            g?: number,
            b?: number
        },
        cmyk?: {
            c?: number,
            m?: number,
            y?: number,
            k: number,
        }
    }
): {
    /** The Red value */
    r: number,
    /** The Green value */
    g: number,
    /** The Blue value */
    b: number
}

/**
 * This function converts an RGB color set to CMYK.
 * @param r The Red value
 * @param g The Green value
 * @param b The Blue value
 * @param maximums The maximum values for RGB (input) and CMYK (output)
 */

export declare function rgbToCmyk(
    r: number,
    g: number,
    b: number,

    maximums?: {
        rgb?: {
            r?: number,
            g?: number,
            b?: number
        },
        cmyk?: {
            c?: number,
            m?: number,
            y?: number,
            k: number,
        }
    }
): {
    /** The Cyan value */
    c: number,
    /** The Magenta value */
    m: number,
    /** The Yellow value */
    y: number,
    /** The Key value */
    k: number
}

