/**
 * JS通过navigator.userAgent判定设备信息
 * @datetime 20160901
 * @author Fly
 */
var client_info = navigator.userAgent.toLowerCase();
var Client = {
    /*判断移动设备类型*/
    isMobile: function () {
        return !!client_info.match(/ipad|iphone|android|blackberry|windows phone|webos/i);
    },
    isiOS: function () {
        return !!client_info.match(/iphone|ipad|ipod/i);
    },
    isiPhone: function () {
        return !!client_info.match(/iphone/i);
    },
    isiPad: function () {
        return !!client_info.match(/ipad/i);
    },
    isiPod: function () {
        return !!client_info.match(/ipod/i);
    },
    isAndroid: function () {
        return !!client_info.match(/android/i);
    },
    isBlackBerry: function () {
        return !!client_info.match(/blackberry/i);
    },
    isOpera: function () {
        return !!client_info.match(/opera mini/i);
    },
    isWPhone: function () {
        return !!client_info.match(/iemobile/i);
    },

    /*判断浏览器类型*/
    isFirefox: function () {
        return !!(client_info.indexOf('firefox') > -1);
    },
    isChrome: function () {
        return !!(client_info.indexOf('chrome') > -1);
    },
    isIE11: function () {
        return !!(client_info.indexOf('trident') > -1 && client_info.indexOf('rv:11') > -1);
    },
    isIE10_X: function () {
        return !!(client_info.indexOf('msie') > -1);
    },
    isIE: function () {
        return !!(client_info.indexOf('trident') > -1 && client_info.indexOf('rv:11') > -1) || !!(client_info.indexOf('msie') > -1);
    },
    isOpera: function () {
        return !!(client_info.indexOf('opera') > -1);
    },
    isChrome: function () {
        return !!(client_info.indexOf('chrome') > -1);
    },
    /*判断是否为微信浏览器*/
    isWeChat: function () {
        return !!client_info.match(/micromessenger/i);
    }
};
