// Ext type declarations generated on Fri Nov 21 2014 22:22:36 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare module Test {
    export class TestClass {
        numberProperty: number;
        static optionalStaticArrayProperty?: string[];
        constructor(n: number, ...items: string[]);
        setNumberProperty(newNumber: number):Test.TestClass;
        methodFromMixinNotOverridden():void;
        methodFromMixinOverridden():void;
        methodWithCallback(f: (x: string) => boolean):void;
        staticMethod():void;
    }
}