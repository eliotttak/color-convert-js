/**
 * This function converts an RGB color set into HSL.
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
 * This function converts an HSL color set into RGB.
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
 * This function converts a CMYK color set into RGB.
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
 * This function converts an RGB color set into CMYK.
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
            r: number,
            g: number,
            b: number,
        },
        cmyk?: {
            c?: number,
            m?: number,
            y?: number,
            k?: number,
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


/**
 * This function converts an HSL color set into CMYK.
 * @param h The Hue value
 * @param s The Saturation value
 * @param l The Lightness value
 * @param maximums The maximum values for HSL (input) and CMYK (output)
 */

export declare function hslToCmyk(
    h: number,
    s: number,
    l: number,
    maximums?: {
        hsl?: {
            h: number,
            s: number,
            l: number,
        },
        cmyk?: {
            c?: number,
            m?: number,
            y?: number,
            k?: number,
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


/**
 * This function converts an CMYK color set into HSL.
 * @param c The Cyan value
 * @param m The Magenta value
 * @param y The Yellow value
 * @param k The Key value
 * @param maximums The maximum values for CMYK (input) and HSL (output)
 */

export declare function cmykToHsl(
    c: number,
    m: number,
    y: number,
    k: number,
    maximums?: {
        hsl?: {
            h?: number,
            s?: number,
            l?: number
        },
        cmyk?: {
            c?: number,
            m?: number,
            y?: number,
            k: number,
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
 * This function converts from hexadecimal color into RGB.
 * @param hex The hexadecimal color, in the format <code>#XXXXXX</code> or <code>XXXXXX</code>
 * @param maximums The maximum values for RGB (input)
 */
export declare function hexToRgb(
    hex: string,
    maximums?: {
        r?: number,
        g?: number,
        b?: number
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
 * This function converts an CMYK color set into hexadecimal.
 * @param r The Red value
 * @param g The Green value
 * @param b The Blue value
 * @param maximums The maximum values for RGB (input)
 * @returns In the format <code>#XXXXXX</code>
 */
export declare function rgbToHex(
    r: number,
    g: number,
    b: number,
    maximums?: {
        rgb?: {
            r: number,
            g: number,
            b: number,
        },
    }
): string