// Ext type declarations generated on Fri Nov 21 2014 22:22:36 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare module Ext {
    export class TestClass {
        numberProperty: number;
        objectProperty: any;
        'property-with-dashes': any;
        undefinedProperty: void;
        propertyWithNoneExistantClass: any;
        objectArrayProperty: any[];
        static optionalStaticArrayProperty?: string[];
        constructor(n: number, ...items: string[]);
        setNumberProperty(newNumber: number):Ext.TestClass;
        methodFromMixinNotOverridden():void;
        methodFromMixinOverridden():void;
        methodWithCallback(f: (x: string) => boolean):void;
        staticMethod():void;
    }
    export class TestSubClass extends Ext.TestSuperClass {
        privateMethodInSuperClass():void;
    }
    export class TestSuperClass {
    }
}