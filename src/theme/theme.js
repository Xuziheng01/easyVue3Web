import { themes } from "./model";

const changeStyle = (obj) => {
    for (let key in obj) {
        document
            .getElementsByTagName("body")[0]
            .style.setProperty(`--${key}`, obj[key]);
    }
};

// 设置主题的颜色
const setThemeColor = (themeName) => {
    localStorage.setItem("theme", themeName); // 保存主题到本地，下次进入使用该主题
    const themeConfig = themes[themeName];
    // 如果有主题名称，那么则采用我们定义的主题
    if (themeConfig) { // 保存主题色到本地
        localStorage.setItem("themeColor1", themeConfig.themeColor1);
        localStorage.setItem("themeColor2", themeConfig.themeColor2);
        localStorage.setItem("themeColor3", themeConfig.themeColor3);
        localStorage.setItem("themeColor4", themeConfig.themeColor4);
        localStorage.setItem("themeColor5", themeConfig.themeColor5);
        localStorage.setItem("themeColor6", themeConfig.themeColor6);
        localStorage.setItem("themeColor7", themeConfig.themeColor7);
        changeStyle(themeConfig); // 改变样式
    } else {
        let themeConfig = {
            themeColor1: localStorage.getItem("themeColor1"),
            themeColor2: localStorage.getItem("themeColor2"),
            themeColor3: localStorage.getItem("themeColor3"),
            themeColor4: localStorage.getItem("themeColor4"),
            themeColor5: localStorage.getItem("themeColor5"),
            themeColor6: localStorage.getItem("themeColor6"),
            themeColor7: localStorage.getItem("themeColor7"),
        };
        changeStyle(themeConfig);
    }
}
const setFontFamily = (FontFamilyName) => {
    localStorage.setItem("FontFamily", FontFamilyName);
    const themeConfig = {
        themeFontFamily: FontFamilyName
    };
    changeStyle(themeConfig);
}

export const setTheme = ( theme, type ) => {
    if (type === 'themeColor') {
        setThemeColor(theme);
    } else if (type === 'FontFamily') {
        setFontFamily(theme);
    }
};

export const getTheme = (type) => {
    if (type === 'themeColor') {
        let theme = localStorage.getItem("theme");
        if (!theme) {
            theme = 'WhiteLilac_PeachSchnapps';
        }
        setThemeColor(theme);
    } else if (type === 'FontFamily') {
        let FontFamily = localStorage.getItem("FontFamily");
        setFontFamily(FontFamily);
    }
};