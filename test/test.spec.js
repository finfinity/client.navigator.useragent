describe(`The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities`, () => {
    it(`JS通过navigator.userAgent判定设备信息: https://github.com/qcgm1978/f-browser`, () => {
        expect(F_BROWER).toBeDefined()
        expect(F_BROWER.browser).toEqual({ IE: null, Edge: null, Chrome: '65', FireFox: null, Safari: '537', Opera: null, Wecat: null })
        expect(F_BROWER.os).toEqual({ bit: '64', Windows: '6.1', MacOS: null, IOS: null, Android: null, Linux: null, BlackBerry: null, Tablet: null })
        expect(F_BROWER.client).toEqual({ PC: 'PC', iPhone: null, iPad: null, Android: null, Mobile: null, Pad: null })
        expect(F_BROWER.enigne).toEqual({ WebKit: '537', Trident: null, Gecko: null, AppleWebKit: '537' })
        // 对象内包含{ browser: { NAME: VER ...}, os: { NAME: VER ...}, client: { NAME: VER ...}, enigne: { NAME: VER ...} }
    });
})