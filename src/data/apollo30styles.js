const apolloColors = {
    dark: "#0D0D0D",
    mid: "#F2F2F2",
    light: "#FAFAFA",
}

const apolloFonts = {
    heading01:  props => `
        /* Heading 1 Graphik ALCAPS */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 900;
        font-weight: 700;
        font-size: 60px;
        line-height: 66px;
        text-transform: uppercase;
    `,
    heading02:  props => `
        /* Heading 2 Graphik */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 900;
        font-weight: 700;
        font-size: 60px;
        line-height: 60px;
    `,

    subheading01:  props => `
        /* SubHeading 1 Graphik ALLCAPS */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 900;
        font-weight: 700;
        font-size: 20px; 
        line-height: 20px;
        text-transform: capitalize;
    `,
    subheading02:  props => `
        /* SubHeading 2 Graphik */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: 900;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
    `,
    subheading03:  props => `
        /* SubHeading 3 - VCR OSD Mono - ALLCAPS */
        font-family: 'VCR OSD Mono';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
    `,

    textLarge:  props => `
        /* Text Large - Graphik */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.5px;
    `,
    textSpecial:  props => `
        /* Text Special - VCR OSD Mono - ALLCAPS */
        font-family: 'VCR OSD Mono';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        text-transform: uppercase;
    `,
    textSmall: props => `
        /* Text Small - Graphik */
        font-family: 'Graphik';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.5px;
    `
}

export {apolloColors, apolloFonts}