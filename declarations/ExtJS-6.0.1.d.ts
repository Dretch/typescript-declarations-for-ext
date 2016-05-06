// Ext type declarations (Typescript 1.4 or newer) generated on Fri May 06 2016 11:25:50 GMT-0500 (Central Daylight Time)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static BLANK_IMAGE_URL: string;
    static SSL_SECURE_URL: string;
    static USE_NATIVE_JSON: boolean;
    static baseCSSPrefix: string;
    static chromeVersion: number;
    static emptyFn: Function;
    static emptyString: any;
    static enableAria: boolean;
    static enableAriaButtons: boolean;
    static enableAriaPanels: boolean;
    static enableGarbageCollector: boolean;
    static enableListenerCollection: boolean;
    static enumerables: string[];
    static firefoxVersion: number;
    static frameStartTime: any;
    static identityFn: Function;
    static ieVersion: number;
    static isChrome: boolean;
    static isDomReady: boolean;
    static isGecko: boolean;
    static isIE: boolean;
    static isIE10: boolean;
    static isIE10m: boolean;
    static isIE10p: boolean;
    static isIE11: boolean;
    static isIE11m: boolean;
    static isIE11p: boolean;
    static isIE8: boolean;
    static isIE8m: boolean;
    static isIE8p: boolean;
    static isIE9: boolean;
    static isIE9m: boolean;
    static isIE9p: boolean;
    static isLinux: boolean;
    static isMac: boolean;
    static isOpera: boolean;
    static isReady: boolean;
    static isSafari: boolean;
    static isSecure: boolean;
    static isWebKit: boolean;
    static isWindows: boolean;
    static name: string;
    static operaVersion: number;
    static platformTags: any;
    static privateFn: Function;
    static safariVersion: number;
    static webKitVersion: number;
    static all(selector: string, root?: any):any;
    static application(config: any):void;
    static apply(object: any, config: any, defaults?: any):any;
    static applyIf(object: any, config: any):any;
    static asap(fn: Function, scope?: any, parameters?: any[]):number;
    static asapCancel(id: number):void;
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
    static callback(callback: Function|string, scope?: any, args?: any[], delay?: number, caller?: any, defaultScope?: any):any;
    static checkVersion(specs: any, matchAll?: boolean):boolean;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static coerce(from: any, to: any):any;
    static copy(dest: any, source: any, names: string|string[], usePrototypeKeys?: boolean):any;
    static copyIf(destination: any, source: any, names: string|string[]):any;
    static copyTo(dest: any, source: any, names: string|string[], usePrototypeKeys?: boolean):any;
    static copyToIf(destination: any, source: any, names: string|string[]):any;
    static create(name?: string, ...args: any[]):any;
    static createByAlias(alias: string, ...args: any[]):any;
    static decode(json: string, safe?: boolean):any;
    static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
    static define(className: string, data: any, createdFn?: Function):Ext.Base;
    static destroy(...args: any[]):void;
    static destroyMembers(object: any, ...args: string[]):void;
    static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
    static encode(o: any):string;
    static exclude(excludes: string|string[]):any;
    static extend(superclass: Function, overrides: any):Function;
    static factory(config: any, classReference?: string, instance?: any, aliasNamespace?: any):void;
    static first(selector: string, root?: any):any;
    static flatten(array: any[]):any[];
    static fly(dom: string|HTMLElement, named?: string):Ext.dom.Element;
    static get(element: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
    static getBody():Ext.dom.Element;
    static getClass(object: any):Ext.Class;
    static getClassName(object: any):string;
    static getCmp(id: string):any;
    static getDoc():Ext.dom.Element;
    static getDom(el: string|HTMLElement|Ext.dom.Element):HTMLElement;
    static getHead():Ext.dom.Element;
    static getNamespace(className: string):string;
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any, defaultType?: string):Ext.data.Store;
    static getVersion(packageName?: string):Ext.Version;
    static getWin():Ext.dom.Element;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(o?: any, prefix?: string):string;
    static interval(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
    static isArray(target: any):boolean;
    static isBoolean(value: any):boolean;
    static isDate(object: any):boolean;
    static isDebugEnabled(className: string):boolean;
    static isDefined(value: any):boolean;
    static isElement(value: any):boolean;
    static isEmpty(value: any, allowEmptyString?: boolean):boolean;
    static isFunction(value: any):boolean;
    static isIterable(value: any):boolean;
    static isMSDate(value: string):boolean;
    static isNumber(value: any):boolean;
    static isNumeric(value: any):boolean;
    static isObject(value: any):boolean;
    static isPrimitive(value: any):boolean;
    static isString(value: any):boolean;
    static isTextNode(value: any):boolean;
    static iterate(object: any, fn: Function, scope?: any):void;
    static log(options?: any, ...message: string[]):void;
    static max(array: any[]|NodeList, comparisonFn?: (max: any, item: any) => any):any;
    static mean(array: any[]):number;
    static merge(destination: any, ...object: any[]):any;
    static min(array: any[]|NodeList, comparisonFn?: (min: any, item: any) => any):any;
    static namespace(...namespaces: string[]):any;
    static now():number;
    static ns(...namespaces: string[]):any;
    static num(value: any, defaultValue: number):number;
    static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
    static onReady(fn: Function, scope?: any, options?: any):void;
    static override(target: any, overrides: any):void;
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any[]|NodeList, propertyName: string):any[];
    static query(selector: string, asDom?: boolean, root?: HTMLElement|string):HTMLElement[]|Ext.dom.Element[];
    static raise(err: any):void;
    static regStore(id: string, config: any):void;
    static removeNode(node: HTMLElement):void;
    static require(expressions: string|string[], fn?: Function, scope?: any):void;
    static returnId(o: any):void;
    static returnTrue():void;
    static select(selector: string|HTMLElement[], composite?: boolean, root?: HTMLElement|string):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
    static setVersion(packageName: string, version: string|Ext.Version):Ext;
    static sum(array: any[]):number;
    static syncRequire(expressions: string|string[], fn?: Function, scope?: any):void;
    static ticks():number;
    static toArray(iterable: any, start?: number, end?: number):any[];
    static typeOf(value: any):string;
    static un(eventName: string, fn: Function, scope?: any):void;
    static unique(array: any[]):any[];
    static urlAppend(url: string, string: string):string;
    static urlDecode(queryString: string, recursive?: boolean):any;
    static urlEncode(object: any, recursive?: boolean):string;
    static valueFrom(value: any, defaultValue: any, allowBlank?: boolean):any;
    static widget(name?: string, config?: any):any;
}
declare module Ext {
    export class AbstractManager extends Ext.Base {
        all: Ext.util.HashMap;
        constructor(config: any);
        each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        get(id: string):any;
        getCount():number;
        isRegistered(type: string):boolean;
        onAvailable(id: string, fn: Function, scope: any):void;
        register(item: any):void;
        registerType(type: string, cls: Function):void;
        unregister(item: any):void;
    }
    export class Ajax {
        static autoAbort: boolean;
        static defaultHeaders: any;
        static disableCaching: boolean;
        static extraParams: any;
        static hasListeners: any;
        static isObservable: boolean;
        static method: string;
        static timeout: number;
        static url: string;
        static abort(request?: any):void;
        static abortAll():void;
        static addAfterListener():void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static getAsync():boolean;
        static getAutoAbort():boolean;
        static getBinary():boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getCors():boolean;
        static getDefaultHeaders():any;
        static getDefaultPostHeader():string;
        static getDefaultXdrContentType():string;
        static getDefaultXhrHeader():string;
        static getDisableCaching():boolean;
        static getDisableCachingParam():string;
        static getExtraParams():any;
        static getInitialConfig(name?: string):any;
        static getIsXdr():boolean;
        static getMethod():string;
        static getPassword():string;
        static getTimeout():number;
        static getUrl():string;
        static getUseDefaultXhrHeader():boolean;
        static getUsername():string;
        static getWithCredentials():boolean;
        static hasListener(eventName: string):boolean;
        static isLoading(request?: any):boolean;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static removeAfterListener():void;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static request(options: any):Ext.data.request.Base;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setAsync(async: boolean):void;
        static setAutoAbort(autoAbort: boolean):void;
        static setBinary(binary: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setCors(cors: boolean):void;
        static setDefaultHeaders(defaultHeaders: any):void;
        static setDefaultPostHeader(defaultPostHeader: string):void;
        static setDefaultXdrContentType(defaultXdrContentType: string):void;
        static setDefaultXhrHeader(defaultXhrHeader: string):void;
        static setDisableCaching(disableCaching: boolean):void;
        static setDisableCachingParam(disableCachingParam: string):void;
        static setExtraParams(extraParams: any):void;
        static setIsXdr(isXdr: boolean):void;
        static setListeners(listeners: any):void;
        static setMethod(method: string):void;
        static setOptions(options: any, scope: any):any;
        static setPassword(password: string):void;
        static setTimeout(timeout: number):void;
        static setUrl(url: string):void;
        static setUseDefaultXhrHeader(useDefaultXhrHeader: boolean):void;
        static setUsername(username: string):void;
        static setWithCredentials(withCredentials: boolean):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class AnimationQueue {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static showFps(fps: number, count: number, interval: number):void;
        static start(fn: Function, scope?: any, args?: any):void;
        static stop(fn: Function, scope?: any, args?: any):void;
    }
    export class Array {
        static binarySearch(array: any[], item: any, begin?: number, end?: number, compareFn?: Function):number;
        static clean(array: any[]):any[];
        static clone(array: any[]):any[];
        static contains(array: any[], item: any):boolean;
        static difference(arrayA: any[], arrayB: any[]):any[];
        static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
        static equals(array1: any[], array2: any[]):boolean;
        static erase(array: any[], index: number, removeCount: number):any[];
        static every(array: any[], fn: (item: any, index: number, array: any[]) => any, scope: any):boolean;
        static filter(array: any[], fn: (item: any, index: number, array: any[]) => any, scope: any):any[];
        static findBy(array: any[], fn: (item: any, index: string) => any, scope?: any):any;
        static flatten(array: any[]):any[];
        static forEach(array: any[], fn: (item: any, index: number, allItems: any[]) => any, scope?: any):void;
        static from(value: any, newReference?: boolean):any[];
        static include(array: any[], item: any):void;
        static indexOf(array: any[], item: any, from?: number):number;
        static insert(array: any[], index: number, items: any[]):any[];
        static intersect(array1: any[], array2: any[], etc: any[]):any[];
        static map(array: any[], fn: (item: any, index: number, array: any[]) => any, scope?: any):any[];
        static max(array: any[]|NodeList, comparisonFn?: (max: any, item: any) => any):any;
        static mean(array: any[]):number;
        static merge(array1: any[], array2: any[], etc: any[]):any[];
        static min(array: any[]|NodeList, comparisonFn?: (min: any, item: any) => any):any;
        static numericSortFn(a: any, b: any):void;
        static pluck(array: any[]|NodeList, propertyName: string):any[];
        static push(target: any[], ...elements: any[]):any[];
        static reduce(array: any[], reduceFn: (previous: any, value: any, index: number, array: any[]) => any, initialValue?: any):any;
        static remove(array: any[], item: any):any[];
        static removeAt(array: any[], index: number, count?: number):any[];
        static replace(array: any[], index: number, removeCount: number, insert?: any[]):any[];
        static slice(array: any[], begin: number, end: number):any[];
        static some(array: any[], fn: (item: any, index: number, array: any[]) => any, scope: any):boolean;
        static sort(array: any[], sortFn?: (a: any, b: any) => number):any[];
        static splice(array: any[], index: number, removeCount: number, ...elements: any[]):any[];
        static sum(array: any[]):number;
        static toArray(iterable: any, start?: number, end?: number):any[];
        static toMap(array: any[], getKey?: string|Function, scope?: any):any;
        static toValueMap(array: any[], getKey?: string|Function, scope?: any, arrayify?: number):any;
        static union(array1: any[], array2: any[], etc: any[]):any[];
        static unique(array: any[]):any[];
    }
    export class Assert {
        falsey(b: any, msg: any):void;
        falseyProp(object: any, property: any):void;
        truthy(b: any, msg: any):void;
        truthyProp(object: any, property: any):void;
    }
    export class Base {
        destroyed: boolean;
        isConfiguring: boolean;
        isFirstInstance: boolean;
        isInstance: boolean;
        self: Ext.Class;
        callOverridden(args: any):any;
        callParent(args: any):any;
        callSuper(args: any):any;
        destroy():void;
        getConfig(name?: string, peek?: boolean):any;
        getInitialConfig(name?: string):any;
        initConfig(config: any):Ext.Base;
        setConfig(name: any, value?: any):Ext.Base;
        statics():Ext.Class;
        static addMembers(members: any, isStatic?: boolean, privacy?: boolean):void;
        static addStatics(members: any):Ext.Base;
        static create():any;
        static createAlias(alias: any, origin: any):void;
        static getName():string;
        static override(members: any):Ext.Base;
    }
    export class browser {
        static engineName: string;
        static engineVersion: Ext.Version;
        static isSecure: boolean;
        static isStrict: boolean;
        static name: string;
        static userAgent: string;
        static version: Ext.Version;
        static is(name: string):boolean;
    }
    export class Class {
        alias: string|string[];
        alternateClassName: string|string[];
        cachedConfig: any;
        config: any;
        extend: string;
        inheritableStatics: any;
        mixins: any;
        override: string;
        platformConfig: any;
        privates: any;
        requires: string[];
        singleton: boolean;
        statics: any;
        uses: string[];
        xtype: any;
        constructor(data: any, onCreated: Function);
    }
    export class ClassManager {
        static addNameAliasMappings(aliases: any):void;
        static addNameAlternateMappings(alternates: any):void;
        static get(name: string):Ext.Class;
        static getByAlias(alias: string):Ext.Class;
        static getClass(object: any):Ext.Class;
        static getDisplayName(object: any):string;
        static getName(object: any):string;
        static instantiate(name: string, args: any):any;
        static instantiateByAlias(alias: string, ...args: any[]):any;
        static isCreated(className: string):boolean;
        static set(name: string, value: any):Ext.ClassManager;
        static setNamespace(name: string, value: any):void;
    }
    export class ComponentManager {
        static create(config: any, defaultType?: string):any;
        static destroy():void;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static get(id: string):any;
        static getAll():any[];
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static isRegistered(component: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static registerType(type: string, cls: Function):void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class ComponentQuery {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static is(component: any, selector: string):boolean;
        static query(selector: string, root?: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static visitPostOrder(selector: any, root: string, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        static visitPreOrder(selector: any, root: string, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class Config {
        merge: Function;
        getInternalName(target: any):string;
    }
    export class Configurator {
    }
    export class Date {
        static DAY: string;
        static HOUR: string;
        static MILLI: string;
        static MINUTE: string;
        static MONTH: string;
        static SECOND: string;
        static YEAR: string;
        static dayNames: string[];
        static defaultFormat: string;
        static defaults: any;
        static formatCodes: any;
        static formatFunctions: any;
        static monthNames: string[];
        static monthNumbers: any;
        static parseFunctions: any;
        static useStrict: boolean;
        static add(date: Date, interval: string, value: number):Date;
        static align(date: Date, unit: string):Date;
        static between(date: Date, start: Date, end: Date):boolean;
        static clearTime(date: Date, clone?: boolean):Date;
        static clone(date: Date):Date;
        static diff(min: Date, max: Date, unit: string):number;
        static format(date: Date, format: string):string;
        static formatContainsDateInfo(format: string):boolean;
        static formatContainsHourInfo(format: string):boolean;
        static getDayOfYear(date: Date):number;
        static getDaysInMonth(date: Date):number;
        static getElapsed(dateA: Date, dateB?: Date):number;
        static getFirstDateOfMonth(date: Date):Date;
        static getFirstDayOfMonth(date: Date):number;
        static getGMTOffset(date: Date, colon?: boolean):string;
        static getLastDateOfMonth(date: Date):Date;
        static getLastDayOfMonth(date: Date):number;
        static getMonthNumber(name: string):number;
        static getShortDayName(day: number):string;
        static getShortMonthName(month: number):string;
        static getSuffix(date: Date):string;
        static getTimezone(date: Date):string;
        static getWeekOfYear(date: Date):number;
        static isDST(date: Date):boolean;
        static isEqual(date1: Date, date2: Date):boolean;
        static isLeapYear(date: Date):boolean;
        static isValid(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number):boolean;
        static parse(input: string, format: string, strict?: boolean):Date|void;
        static subtract(date: Date, interval: string, value: number):Date;
        static unescapeFormat(format: string):string;
    }
    export class Deferred extends Ext.Base {
        static all(promisesOrValues: any[]|Ext.promise.Promise[]|Ext.promise.Promise):Ext.promise.Promise;
        static any(promisesOrValues: any[]|Ext.promise.Promise[]|Ext.promise.Promise):Ext.promise.Promise;
        static delay(promiseOrValue: any, milliseconds: number):Ext.promise.Promise;
        static map(promisesOrValues: any[]|Ext.promise.Promise[]|Ext.promise.Promise, mapFn: Function):Ext.promise.Promise;
        static memoize(fn: Function, scope: any, hashFn: Function):Function;
        static parallel(fns: Function[]|Ext.promise.Promise, scope: any):Ext.promise.Promise;
        static pipeline(fns: Function[]|Ext.promise.Promise, initialValue: any, scope: any):Ext.promise.Promise;
        static reduce(values: any[]|Ext.promise.Promise[]|Ext.promise.Promise, reduceFn: Function, initialValue: any):Ext.promise.Promise;
        static rejected(reason: Error):Ext.promise.Promise;
        static resolved(promiseOrValue: any):Ext.promise.Promise;
        static sequence(fns: Function[]|Ext.promise.Promise, scope: any):Ext.promise.Promise;
        static some(promisesOrValues: any[]|Ext.promise.Promise[]|Ext.promise.Promise, howMany: number):Ext.promise.Promise;
        static timeout(promiseOrValue: any, milliseconds: number):Ext.promise.Promise;
    }
    export class Error {
        static ignore: boolean;
        static handle(err: any):void;
        static raise(err: any):void;
    }
    export class Evented extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Factory {
        aliasPrefix: string;
        defaultProperty: string;
        defaultType: string;
        instanceProp: string;
        xclass: string;
        create(config?: any, defaultType?: string):any;
        dataIdentifier(id: string):any;
        static define(type: string, config?: any):Function;
    }
    export class feature {
        static has(name: string):boolean;
    }
    export class Function {
        static alias(object: any, methodName: string):Function;
        static bind(fn: Function, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
        static bindCallback(callback: any, scope: any, args: any, delay: any, caller: any):Function;
        static clone(method: Function):Function;
        static createBarrier(count: number, fn: Function, scope: any):void;
        static createBuffered(fn: Function, buffer: number, scope?: any, args?: any[]):Function;
        static createDelayed(fn: Function, delay: number, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
        static createInterceptor(origFn: Function, newFn: Function, scope?: any, returnValue?: any):Function;
        static createSequence(originalFn: Function, newFn: Function, scope?: any):Function;
        static createThrottled(fn: Function, interval: number, scope?: any):Function;
        static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
        static flexSetter(setter: (name: string, value: any) => any):Function;
        static interceptAfter(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interceptBefore(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interval(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
        static memoize(fn: Function, scope: any, hashFn: Function):Function;
        static pass(fn: Function, args: any[], scope?: any):Function;
    }
    export class GlobalEvents {
        static hasListeners: any;
        static isObservable: boolean;
        static addAfterListener():void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static removeAfterListener():void;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Inventory {
        getAliasesByName(name: string):any[];
        getNameByAlias(alias: string):string;
        getNameByAlternate(alternate: string):string;
        getNamesByExpression(expression: string|string[], exclude?: any, accumulate?: boolean):string[];
        select(receiver: any, scope?: any):any;
        setPath(name: any, path?: string):Ext.Inventory;
    }
    export class JSON {
        static decode(json: string, safe?: boolean):any;
        static encode(o: any):string;
        static encodeDate(d: Date):string;
        static encodeString(s: string):string;
        static encodeValue(o: any):string;
    }
    export class Loader {
        static history: any[];
        static addBaseUrlClassPathMappings(pathConfig: any):void;
        static addClassPathMappings(paths: any):Ext.Loader;
        static getConfig(name: string):any;
        static getPath(className: string):string;
        static loadScript(options: any):void;
        static onReady(fn: Function, scope: any, withDomReady?: boolean, options?: any):void;
        static setConfig(config: any):Ext.Loader;
        static setPath(name: any, path?: string):Ext.Loader;
    }
    export class Mixin extends Ext.Base {
    }
    export class Number {
        static clipIndices(length: number, indices: number[], options?: any):number[];
        static constrain(number: number, min: number, max: number):number;
        static correctFloat(n: number):number;
        static from(value: any, defaultValue: number):number;
        static randomInt(from: number, to: number):number;
        static sign(x: number):number;
        static snap(value: number, increment: number, minValue: number, maxValue: number):number;
        static snapInRange(value: number, increment: number, minValue?: number, maxValue?: number):number;
        static toFixed(value: number, precision: number):void;
    }
    export class Object {
        static chain(object: any):void;
        static clear(object: any):any;
        static each(object: any, fn: (key: string, value: any, object: any) => any, scope?: any):void;
        static eachValue(object: any, fn: (value: any) => any, scope?: any):void;
        static equals(object1: any, object2: any):boolean;
        static freeze(obj: any, deep?: boolean):any;
        static fromQueryString(queryString: string, recursive?: boolean):any;
        static getAllKeys(object: any):string[];
        static getKey(object: any, value: any):void;
        static getKeys(object: any):string[];
        static getSize(object: any):number;
        static getValues(object: any):any[];
        static isEmpty(object: any):boolean;
        static merge(destination: any, ...object: any[]):any;
        static toQueryObjects(name: string, value: any, recursive?: boolean):any[];
        static toQueryString(object: any, recursive?: boolean):string;
    }
    export class os {
        static deviceType: string;
        static name: string;
        static version: Ext.Version;
        static is(name: string):boolean;
    }
    export class Progress extends Ext.Widget {
        animate: boolean;
        baseCls: string;
        text: string;
        textTpl: string|Ext.XTemplate;
        value: number;
        constructor(config: any);
        getAnimate():boolean;
        getBaseCls():string;
        getCls():any;
        getText():string;
        getTextCls():string;
        getTextTpl():string|Ext.XTemplate;
        getUi():any;
        getValue():number;
        setAnimate(animate: boolean):void;
        setBaseCls(baseCls: string):void;
        setCls(cls: any):void;
        setText(text: string):void;
        setTextCls(textCls: string):void;
        setTextTpl(textTpl: string|Ext.XTemplate):void;
        setUi(ui: any):void;
        setValue(value: number):void;
    }
    export class ProgressBase extends Ext.Base {
        textTpl: string|Ext.XTemplate;
        value: number;
        getTextTpl():string|Ext.XTemplate;
        getValue():number;
        setTextTpl(textTpl: string|Ext.XTemplate):void;
        setValue(value: number):void;
    }
    export class Promise extends Ext.Base {
        static all(promisesOrValues: any[]|Ext.Promise[]|Ext.Promise):Ext.Promise;
        static reject(reason: Error):Ext.Promise;
        static resolve(promiseOrValue: any):Ext.Promise;
    }
    export class String {
        static addCharacterEntities(newEntities: any):void;
        static capitalize(string: string):string;
        static createRegex(value: string|RegExp, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):RegExp;
        static createVarName(s: string):string;
        static ellipsis(value: string, length: number, word?: boolean):string;
        static endsWith(s: string, end: string, ignoreCase?: boolean):void;
        static escape(string: string):string;
        static escapeRegex(string: string):string;
        static format(string: string, ...values: any[]):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static insert(s: string, value: string, index: number):string;
        static leftPad(string: string, size: number, character?: string):string;
        static repeat(pattern: string, count: number, sep: string):void;
        static resetCharacterEntities():void;
        static splitWords(words: string|any[]):void;
        static startsWith(s: string, start: string, ignoreCase?: boolean):void;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static urlAppend(url: string, string: string):string;
    }
    export class supports {
        static AsyncFocusEvents: boolean;
        static Audio: boolean;
        static AudioTag: boolean;
        static BoundingClientRect: boolean;
        static CSS3BorderRadius: boolean;
        static CSS3BoxShadow: boolean;
        static CSS3LinearGradient: boolean;
        static CSSPointerEvents: boolean;
        static Canvas: boolean;
        static ChildContentClearedWhenSettingInnerHTML: boolean;
        static ClassList: boolean;
        static CloneNodeCopiesExpando: boolean;
        static ComputedStyle: boolean;
        static CreateContextualFragment: boolean;
        static Css3DTransforms: boolean;
        static DeviceMotion: boolean;
        static Direct2DBug: boolean;
        static DisplayChangeInputSelectionBug: any;
        static DisplayChangeTextAreaSelectionBug: any;
        static EmulatedMouseOver: boolean;
        static Float: boolean;
        static GeoLocation: boolean;
        static Geolocation: boolean;
        static GetPositionPercentage: boolean;
        static Hashchange: boolean;
        static HighContrastMode: boolean;
        static History: boolean;
        static LocalStorage: boolean;
        static MouseEnterLeave: boolean;
        static MouseWheel: boolean;
        static NumericInputPlaceHolder: boolean;
        static Opacity: boolean;
        static Orientation: boolean;
        static OrientationChange: boolean;
        static Placeholder: boolean;
        static Range: boolean;
        static RightMargin: boolean;
        static RotatedBoundingClientRect: boolean;
        static ScrollWidthInlinePaddingBug: boolean;
        static SpecialKeyDownRepeat: boolean;
        static Svg: boolean;
        static TextAreaMaxLength: boolean;
        static Touch: boolean;
        static TouchEvents: boolean;
        static Transitions: boolean;
        static TransparentColor: boolean;
        static Video: boolean;
        static Vml: boolean;
        static XHR2: boolean;
        static XHRUploadProgress: boolean;
        static matchesSelector: string;
    }
    export class TaskQueue {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Template extends Ext.Base {
        compiled: boolean;
        disableFormats: boolean;
        isTemplate: boolean;
        constructor(...html: any[]);
        append(el: string|HTMLElement|Ext.dom.Element, values: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        apply(values: any):string;
        applyOut(values: any, out: any[]):any[];
        applyTemplate(values: any):string;
        compile():Ext.Template;
        insertAfter(el: string|HTMLElement|Ext.dom.Element, values: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element, values: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertFirst(el: string|HTMLElement|Ext.dom.Element, values: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        overwrite(el: string|HTMLElement|Ext.dom.Element, values: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        set(html: string, compile?: boolean):Ext.Template;
        static from(el: string|HTMLElement, config?: any):Ext.Template;
    }
    export class Version {
        build: number;
        major: number;
        minor: number;
        patch: number;
        release: string;
        compareTo(other: string|number|Ext.Version):number;
        equals(target: string|number):boolean;
        getBuild():number;
        getMajor():number;
        getMinor():number;
        getPatch():number;
        getRelease():string;
        getReleaseValue():number|string;
        getShortVersion():string;
        gt(target: string|number|Ext.Version):boolean;
        gtEq(target: string|number|Ext.Version):boolean;
        isGreaterThan(target: string|number):boolean;
        isGreaterThanOrEqual(target: string|number):boolean;
        isLessThan(target: string|number):boolean;
        isLessThanOrEqual(target: string|number):boolean;
        lt(target: string|number|Ext.Version):boolean;
        ltEq(target: string|number|Ext.Version):boolean;
        match(target: string|number):boolean;
        toArray():number[];
        static compare(current: string, target: string):number;
        static getComponentValue(value: any):any;
    }
    export class Widget extends Ext.Evented {
        bind: any;
        controller: any;
        defaultListenerScope: boolean;
        height: number|string;
        publishes: any;
        reference: string;
        session: any;
        style: any;
        twoWayBindable: any;
        userCls: string|string[];
        viewModel: any;
        width: number|string;
        defaultBindProperty: string;
        element: any;
        template: any[];
        constructor(config: any);
        applyStyle(style: any, oldStyle: any):void;
        getBind():any;
        getController():Ext.app.ViewController;
        getDefaultListenerScope():boolean;
        getElementConfig():any;
        getHeight():number|string;
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getPublishes():any;
        getRefOwner():void;
        getReference():string;
        getSession():any;
        getSize():any;
        getStyle():any;
        getTwoWayBindable():any;
        getUserCls():string|string[];
        getViewModel():any;
        getWidth():number|string;
        initElement():void;
        initInheritedState(inheritedState: any):void;
        is(selector: string):boolean;
        isSyncing(name: string):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        lookupController(skipThis?: boolean):Ext.app.ViewController;
        lookupSession(skipThis?: boolean):Ext.data.Session;
        lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        onInheritedAdd(instanced: boolean):void;
        onInheritedRemove(destroying: boolean):void;
        publishState(property?: string, value?: any):void;
        resolveSatelliteListenerScope(satellite: Ext.mixin.Observable, defaultScope?: any):any;
        setBind(bind: any):void;
        setController(controller: any):void;
        setDefaultListenerScope(defaultListenerScope: boolean):void;
        setHeight(height: number|string):void;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setSession(session: any):void;
        setSize(width: number, height: number):void;
        setStyle(style: any):void;
        setTwoWayBindable(twoWayBindable: any):void;
        setUserCls(userCls: string|string[]):void;
        setViewModel(viewModel: any):void;
        setWidth(width: number|string):void;
        toggleCls(className: string, state?: boolean):void;
        updateHeight(height: any):void;
        updateStyle(style: any):void;
        updateWidth(width: any):void;
    }
    export class XTemplate extends Ext.Template {
        definitions: string|any[];
        strict: boolean;
        constructor(...html: any[]);
    }
}
declare module Ext.app {
    export class Application extends Ext.app.Controller {
        appFolder: string;
        appProperty: string;
        currentProfile: Ext.app.Profile;
        defaultToken: string;
        glyphFontFamily: string;
        mainView: any;
        name: string;
        namespaces: string|string[];
        paths: any;
        profiles: string|string[];
        scope: any;
        constructor(config?: any);
        createController(name: string):Ext.app.Controller;
        destroyController(controller: string|Ext.app.Controller):void;
        getAppProperty():string;
        getCurrentProfile():Ext.app.Profile;
        getDefaultToken():string;
        getGlyphFontFamily():string;
        getMainView():any;
        getProfiles():string|string[];
        launch(profile: string):boolean;
        onAppUpdate(updateInfo?: any):void;
        setAppProperty(appProperty: string):void;
        setCurrentProfile(currentProfile: Ext.app.Profile):void;
        setDefaultToken(defaultToken: string):void;
        setGlyphFontFamily(glyphFontFamily: string):void;
        setMainView(mainView: any):void;
        setName(name: string):void;
        setProfiles(profiles: string|string[]):void;
    }
    export class BaseController extends Ext.Base {
        id: string;
        listeners: any;
        routes: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners?: any):void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getBefore():any;
        getControl():any;
        getId():string;
        getListen():any;
        getRoutes():any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        listen(to: any, controller?: Ext.app.Controller):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        redirectTo(token: string|Ext.data.Model, force: boolean):boolean;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setBefore(before: any):void;
        setControl(control: any):void;
        setId(id: string):void;
        setListen(listen: any):void;
        setListeners(listeners: any):void;
        setRoutes(routes: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Controller extends Ext.app.BaseController {
        application: Ext.app.Application;
        models: string|string[];
        refs: any;
        stores: string|string[];
        views: string|string[];
        constructor(config?: any);
        activate():void;
        addRef(refs: any):void;
        deactivate():void;
        getActive():boolean;
        getApplication():Ext.app.Application;
        getController(id: string):Ext.app.Controller;
        getModel(name: string):Ext.Class;
        getProfile(name: string):string;
        getRefs():any;
        getStore(name: string):Ext.data.Store;
        getView(view: string):Ext.Base;
        hasRef(ref: string):boolean;
        init(application: Ext.app.Application):void;
        isActive():boolean;
        onLaunch(application: Ext.app.Application):void;
        setActive(active: boolean):void;
        setApplication(application: Ext.app.Application):void;
        setRefs(refs: any):void;
    }
    export class EventBus {
        static control(selectors: any, controller: Ext.app.BaseController):void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static listen(to: any, controller: Ext.app.BaseController):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static unlisten(controllerId: string|Ext.app.BaseController):void;
    }
    export class EventDomain extends Ext.Base {
        idProperty: string;
        static instances: any;
        constructor();
        match(target: any, selector: string):boolean;
        monitor(observable: Ext.Class):void;
    }
    export class Profile extends Ext.Base {
        application: Ext.app.Application;
        controllers: string[];
        listeners: any;
        mainView: string;
        models: string[];
        name: string;
        namespace: string;
        stores: string[];
        views: any;
        hasListeners: any;
        isObservable: boolean;
        isProfile: boolean;
        constructor(config: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getApplication():Ext.app.Application;
        getControllers():string[];
        getMainView():string;
        getModels():string[];
        getStores():string[];
        getViews():any;
        hasListener(eventName: string):boolean;
        init():void;
        isActive():boolean;
        isSuspended(event?: string):boolean;
        launch():void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setApplication(application: Ext.app.Application):void;
        setControllers(controllers: string[]):void;
        setListeners(listeners: any):void;
        setMainView(mainView: string):void;
        setModels(models: string[]):void;
        setName(name: string):void;
        setNamespace(namespace: string):void;
        setStores(stores: string[]):void;
        setViews(views: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Util extends Ext.Base {
    }
    export class ViewController extends Ext.app.BaseController {
        factoryConfig: any;
        constructor();
        beforeInit(view: any):void;
        closeView():void;
        fireViewEvent(eventName: string, ...args: any[]):boolean;
        getCloseViewAction():string;
        getReferences():void;
        getSession():Ext.data.Session;
        getStore(name: string):Ext.data.Store;
        getView():any;
        getViewModel():Ext.app.ViewModel;
        init(view: any):void;
        initViewModel(viewModel: Ext.app.ViewModel):void;
        lookup(key: string):any;
        lookupReference(key: string):any;
        setCloseViewAction(closeViewAction: string):void;
    }
    export class ViewModel extends Ext.Base {
        formulas: any;
        links: any;
        parent: Ext.app.ViewModel;
        schema: string|Ext.data.schema.Schema;
        session: Ext.data.Session;
        stores: any;
        view: any;
        factoryConfig: any;
        constructor(config: any);
        bind(descriptor: any, callback: Function, scope?: any, options?: any):Ext.app.bind.BaseBinding|Ext.app.bind.Binding;
        get(path: string):any;
        getData():any;
        getFormulas():any;
        getId():string;
        getLinks():any;
        getParent():Ext.app.ViewModel;
        getSchema():string|Ext.data.schema.Schema;
        getSession():Ext.data.Session;
        getStore(key: string):Ext.data.Store;
        getView():any;
        linkTo(key: string, reference: any):void;
        notify():void;
        set(path: any, value: any):void;
        setData(data: any):void;
        setFormulas(formulas: any):void;
        setLinks(links: any):void;
        setParent(parent: Ext.app.ViewModel):void;
        setSchema(schema: string|Ext.data.schema.Schema):void;
        setSession(session: Ext.data.Session):void;
        setStores(stores: any):void;
        setView(view: any):void;
    }
}
declare module Ext.app.bind {
    export class AbstractStub extends Ext.util.Schedulable {
        owner: Ext.data.Session|Ext.app.ViewModel;
        constructor(owner: any, name: any);
    }
    export class BaseBinding extends Ext.util.Schedulable {
        single: boolean;
        constructor();
    }
    export class Binding extends Ext.app.bind.BaseBinding {
        deep: boolean;
        constructor();
        bindValidation(callback: Function, scope?: any):Ext.app.bind.Binding;
        getFullName():string;
        getValue():any;
        isLoading():boolean;
        isReadOnly():boolean;
        refresh():void;
        setValue(value: any):void;
    }
    export class Formula extends Ext.util.Schedulable {
        bind: any;
        get: Function;
        set: Function;
        single: boolean;
        constructor(stub: any, formula: any);
    }
    export class LinkStub extends Ext.app.bind.Stub {
        constructor(owner: any, name: any, parent: any);
    }
    export class Multi extends Ext.app.bind.BaseBinding {
        constructor();
    }
    export class RootStub extends Ext.app.bind.AbstractStub {
        constructor(owner: any, name: any);
    }
    export class Stub extends Ext.app.bind.AbstractStub {
        constructor(owner: any, name: any, parent: any);
    }
    export class Template extends Ext.Base {
        constructor(text: string);
        apply(values: any[], scope: any):string;
        getTokens():string[];
    }
    export class TemplateBinding extends Ext.app.bind.BaseBinding {
        constructor(template: any, owner: any, callback: any, scope: any, options: any);
    }
}
declare module Ext.app.domain {
    export class Component {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Controller {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Direct {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Global {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Store {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class View extends Ext.app.EventDomain {
        constructor(controller: any);
    }
}
declare module Ext.app.route {
    export class Queue extends Ext.Base {
        token: any;
        constructor(config: any);
        clearQueue():void;
        onActionExecute(clearQueue: boolean):void;
        queueAction(route: Ext.app.route.Route, args: any):void;
        runQueue():void;
    }
    export class Route extends Ext.Base {
        action: string;
        allowInactive: boolean;
        before: Function;
        caseInsensitive: boolean;
        conditions: any;
        controller: string;
        url: string;
        constructor(config: any);
        recognize(url: string):any;
    }
    export class Router {
        static multipleToken: string;
        static queueRoutes: boolean;
        static routes: Ext.app.route.Route[];
        static clear():void;
        static connect(url: string, action: string, controller: Ext.app.Controller):void;
        static destroy():void;
        static disconnectAll(controller: Ext.app.Controller):void;
        static draw(fn: Function):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static recognize(url: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.data {
    export class AbstractStore extends Ext.Base {
        autoDestroy: boolean;
        filters: any[]|Function[];
        groupDir: string;
        groupField: string;
        grouper: any;
        listeners: any;
        pageSize: number;
        remoteFilter: boolean;
        remoteSort: boolean;
        sorters: Ext.util.Sorter[]|any[];
        statefulFilters: boolean;
        storeId: string;
        currentPage: number;
        factoryConfig: any;
        hasListeners: any;
        isObservable: boolean;
        isStore: boolean;
        updating: number;
        constructor(config: any);
        addAfterListener():void;
        addBeforeListener():void;
        addFilter(filters: any[]|Ext.util.Filter[], suppressEvent?: boolean):void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        beginUpdate():void;
        clearFilter(suppressEvent?: boolean):void;
        clearGrouping():void;
        clearListeners():void;
        clearManagedListeners():void;
        contains(record: Ext.data.Model):boolean;
        enableBubble(eventNames: string|string[]):void;
        endUpdate():void;
        filter(filters?: string|Ext.util.Filter[], value?: string):void;
        filterBy(fn: (record: Ext.data.Model) => any, scope?: any):void;
        find(property: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any, startIndex?: number):number;
        findExact(fieldName: string, value: any, startIndex?: number):number;
        findRecord(fieldName: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getAt(index: number):Ext.data.Model;
        getAutoDestroy():boolean;
        getById(id: any):Ext.data.Model;
        getCount():number;
        getFilters(autoCreate: any):Ext.util.FilterCollection;
        getGroupDir():string;
        getGrouper():any;
        getGroups():Ext.util.Collection;
        getPageSize():number;
        getRange(start: number, end: number):Ext.data.Model[];
        getRemoteFilter():boolean;
        getRemoteSort():boolean;
        getSorters(autoCreate: any):Ext.util.SorterCollection;
        getStatefulFilters():boolean;
        getStoreId():string;
        group(grouper: any, direction?: string):void;
        hasListener(eventName: string):boolean;
        isFiltered():boolean;
        isGrouped():boolean;
        isLoaded():boolean;
        isLoading():boolean;
        isSorted():boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeFilter(toRemove: string|Ext.util.Filter, suppressEvent?: boolean):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setAutoDestroy(autoDestroy: boolean):void;
        setFilters():void;
        setGroupDir(groupDir: string):void;
        setGroupField(groupField: string):void;
        setGrouper(grouper: any):void;
        setListeners(listeners: any):void;
        setPageSize(pageSize: number):void;
        setRemoteFilter(remoteFilter: boolean):void;
        setRemoteSort(remoteSort: boolean):void;
        setSorters():void;
        setStatefulFilters(statefulFilters: boolean):void;
        setStoreId(storeId: string):void;
        sort(sorters?: string|Ext.util.Sorter[], direction?: string):Ext.util.Sorter[];
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config?: any);
    }
    export class Batch extends Ext.Base {
        listeners: any;
        pauseOnException: boolean;
        exceptions: Ext.data.operation.Operation[];
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(operation: Ext.data.operation.Operation|Ext.data.operation.Operation[]):Ext.data.Batch;
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getCurrent():Ext.data.operation.Operation;
        getExceptions():Ext.data.operation.Operation[];
        getOperations():Ext.data.operation.Operation[];
        getPauseOnException():boolean;
        getTotal():number;
        hasException():boolean;
        hasListener(eventName: string):boolean;
        isComplete():boolean;
        isRunning():boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        pause():Ext.data.Batch;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        retry():Ext.data.Batch;
        setListeners(listeners: any):void;
        setPauseOnException(pauseOnException: boolean):void;
        sort():void;
        start(index: any):Ext.data.Batch;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class BufferedStore extends Ext.data.ProxyStore {
        leadingBufferZone: number;
        purgePageCount: number;
        trailingBufferZone: number;
        isBufferedStore: boolean;
        constructor(config: any);
        applyData(data: any):void;
        getData():number;
        getLeadingBufferZone():number;
        getPageFromRecordIndex(index: number):number;
        getPurgePageCount():number;
        getTrailingBufferZone():number;
        guaranteeRange(start: any, end: any, callback: any, scope: any, options: any):void;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        prefetch(options?: any):void;
        prefetchPage(page: number, options?: any):void;
        prefetchRange(start: any, end: any):void;
        setData(data: number):void;
        setLeadingBufferZone(leadingBufferZone: number):void;
        setPurgePageCount(purgePageCount: number):void;
        setTrailingBufferZone(trailingBufferZone: number):void;
    }
    export class ChainedStore extends Ext.data.AbstractStore {
        source: Ext.data.Store|string;
        constructor();
        add(...model: any[]):Ext.data.Model[];
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):Ext.data.Model|void;
        getByInternalId(internalId: any):Ext.data.Model;
        getExtraKeys():any;
        getModel():Ext.data.Model;
        getSource():Ext.data.Store|string;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        insert(index: number, records: any):Ext.data.Model[];
        last(grouped?: boolean):Ext.data.Model|void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        setExtraKeys(extraKeys: any):void;
        setSource(source: Ext.data.Store|string):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class Connection extends Ext.Base {
        async: boolean;
        autoAbort: boolean;
        binary: boolean;
        cors: boolean;
        defaultHeaders: any;
        defaultPostHeader: string;
        defaultXhrHeader: string;
        disableCaching: boolean;
        disableCachingParam: string;
        extraParams: any;
        listeners: any;
        method: string;
        password: string;
        timeout: number;
        url: string;
        useDefaultXhrHeader: boolean;
        username: string;
        withCredentials: boolean;
        hasListeners: any;
        isObservable: boolean;
        abort(request?: any):void;
        abortAll():void;
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getAsync():boolean;
        getAutoAbort():boolean;
        getBinary():boolean;
        getCors():boolean;
        getDefaultHeaders():any;
        getDefaultPostHeader():string;
        getDefaultXdrContentType():string;
        getDefaultXhrHeader():string;
        getDisableCaching():boolean;
        getDisableCachingParam():string;
        getExtraParams():any;
        getIsXdr():boolean;
        getMethod():string;
        getPassword():string;
        getTimeout():number;
        getUrl():string;
        getUseDefaultXhrHeader():boolean;
        getUsername():string;
        getWithCredentials():boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: any):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        request(options: any):Ext.data.request.Base;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setAsync(async: boolean):void;
        setAutoAbort(autoAbort: boolean):void;
        setBinary(binary: boolean):void;
        setCors(cors: boolean):void;
        setDefaultHeaders(defaultHeaders: any):void;
        setDefaultPostHeader(defaultPostHeader: string):void;
        setDefaultXdrContentType(defaultXdrContentType: string):void;
        setDefaultXhrHeader(defaultXhrHeader: string):void;
        setDisableCaching(disableCaching: boolean):void;
        setDisableCachingParam(disableCachingParam: string):void;
        setExtraParams(extraParams: any):void;
        setIsXdr(isXdr: boolean):void;
        setListeners(listeners: any):void;
        setMethod(method: string):void;
        setOptions(options: any, scope: any):any;
        setPassword(password: string):void;
        setTimeout(timeout: number):void;
        setUrl(url: string):void;
        setUseDefaultXhrHeader(useDefaultXhrHeader: boolean):void;
        setUsername(username: string):void;
        setWithCredentials(withCredentials: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Error extends Ext.Base {
        field: string;
        message: string;
        constructor(config: any);
        getField():string;
        getMessage():string;
        setField(field: string):void;
        setMessage(message: string):void;
    }
    export class ErrorCollection extends Ext.util.MixedCollection {
        constructor(config: any);
        getByField(fieldName: string):any[];
        isValid():boolean;
    }
    export class JsonP {
        static callbackKey: string;
        static disableCaching: boolean;
        static disableCachingParam: string;
        static timeout: number;
        static abort(request?: any):void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static request(options: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class JsonPStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class JsonStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class LocalStore extends Ext.Mixin {
        add(...model: any[]):Ext.data.Model[];
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):Ext.data.Model|void;
        getById(id: any):Ext.data.Model;
        getExtraKeys():any;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        insert(index: number, records: any):Ext.data.Model[];
        last(grouped?: boolean):Ext.data.Model|void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        setExtraKeys(extraKeys: any):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class Model extends Ext.Base {
        associations: any[];
        belongsTo: any;
        clientIdProperty: string;
        convertOnSet: boolean;
        hasMany: any;
        idProperty: string;
        identifier: any;
        manyToMany: any;
        proxy: any;
        validationSeparator: string;
        validators: any[];
        versionProperty: string;
        dirty: boolean;
        dropped: boolean;
        editing: boolean;
        entityName: string;
        erased: boolean;
        generation: number;
        isEntity: boolean;
        isModel: boolean;
        modified: any;
        phantom: boolean;
        schema: any;
        session: Ext.data.Session;
        store: Ext.data.Store;
        constructor(data: any, session: any);
        abort():void;
        beginEdit():void;
        cancelEdit():void;
        clone(session?: Ext.data.Session):Ext.data.Model;
        commit(silent?: boolean, modifiedFieldNames?: string[]):void;
        copy(newId?: string, session?: Ext.data.Session):Ext.data.Model;
        drop(cascade?: boolean):void;
        endEdit(silent?: boolean, modifiedFieldNames?: string[]):void;
        erase(options?: any):Ext.data.operation.Destroy;
        get(fieldName: string):any;
        getAssociatedData(result?: any, options?: any):any;
        getChanges():any;
        getCriticalFields():Ext.data.field.Field[];
        getData(options?: any):any;
        getFields():Ext.data.field.Field[];
        getId():number|string;
        getIdProperty():string;
        getModified(fieldName: string):any;
        getObservableId():void;
        getPrevious(fieldName: string):any;
        getProxy():Ext.data.proxy.Proxy;
        getTransientFields():Ext.data.field.Field[];
        getValidation(refresh?: boolean):Ext.data.Validation;
        isLoading():boolean;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        join(item: Ext.data.Store):void;
        load(options?: any):Ext.data.operation.Read;
        onLoad():void;
        reject(silent?: boolean):void;
        save(options?: any):Ext.data.operation.Create|Ext.data.operation.Update|Ext.data.operation.Destroy;
        set(fieldName: any, newValue: any, options?: any):string[];
        setId(id: number|string, options?: any):void;
        setSession(session: Ext.data.Session):void;
        toUrl():string;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.ErrorCollection;
        static getProxy():Ext.data.proxy.Proxy;
        static load(id: number|string, options?: any, session?: Ext.data.Session):Ext.data.Model;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class ModelManager {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getModel(id: any):Ext.data.Model;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class NodeInterface extends Ext.Base {
        allowDrag: boolean;
        allowDrop: boolean;
        checked: boolean;
        children: Ext.data.NodeInterface[];
        cls: string;
        expandable: boolean;
        expanded: boolean;
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        leaf: boolean;
        qshowDelay: number;
        qtip: string;
        qtitle: string;
        text: string;
        childNodes: Ext.data.NodeInterface[];
        firstChild: Ext.data.NodeInterface;
        isNode: boolean;
        lastChild: Ext.data.NodeInterface;
        nextSibling: Ext.data.NodeInterface;
        parentNode: Ext.data.NodeInterface;
        previousSibling: Ext.data.NodeInterface;
        appendChild(node: any, suppressEvents?: boolean, commit?: boolean):Ext.data.NodeInterface;
        bubble(fn: Function, scope?: any, args?: any[]):void;
        cascadeBy(spec: any):void;
        collapse(recursive?: boolean, callback?: Function, scope?: any):void;
        collapseChildren(recursive?: Function, callback?: Function, scope?: any):void;
        contains(node: Ext.data.NodeInterface):boolean;
        copy(id?: string, deep?: boolean):Ext.data.NodeInterface;
        createNode(node: any):Ext.data.NodeInterface;
        eachChild(fn: Function, scope?: any, args?: any[]):void;
        erase(options: any):void;
        expand(recursive?: boolean, callback?: Function, scope?: any):void;
        expandChildren(recursive?: boolean, callback?: Function, scope?: any):void;
        findChild(attribute: string, value: any, deep?: boolean):Ext.data.NodeInterface;
        findChildBy(fn: Function, scope?: any, deep?: boolean):Ext.data.NodeInterface;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getChildAt(index: number):Ext.data.NodeInterface;
        getDepth():number;
        getOwnerTree():any;
        getPath(field?: string, separator?: string):string;
        getTreeStore():Ext.data.TreeStore;
        hasChildNodes():boolean;
        indexOf(node: Ext.data.NodeInterface):number;
        indexOfId(id: string):number;
        insertBefore(node: any, refNode: Ext.data.NodeInterface):Ext.data.NodeInterface;
        insertChild(index: number, node: any):Ext.data.NodeInterface;
        isAncestor(node: Ext.data.NodeInterface):boolean;
        isBranchLoaded():boolean;
        isExpandable():boolean;
        isExpanded():boolean;
        isFirst():boolean;
        isLast():boolean;
        isLeaf():boolean;
        isLoaded():boolean;
        isLoading():boolean;
        isRoot():boolean;
        isVisible():boolean;
        remove(erase?: boolean):Ext.data.NodeInterface;
        removeAll(erase?: boolean):Ext.data.NodeInterface;
        removeChild(node: Ext.data.NodeInterface, erase?: boolean):Ext.data.NodeInterface;
        replaceChild(newChild: Ext.data.NodeInterface, oldChild: Ext.data.NodeInterface):Ext.data.NodeInterface;
        serialize(writerParam: any):void;
        sort(sortFn?: Function, recursive?: boolean, suppressEvent?: boolean):void;
        updateInfo(commit: boolean, info: any):void;
        static decorate(model: Ext.Class|Ext.data.Model):void;
    }
    export class NodeStore extends Ext.data.Store {
        folderSort: boolean;
        node: Ext.data.Model;
        recursive: boolean;
        rootVisible: boolean;
        isNodeStore: boolean;
        constructor(config?: any);
        getFolderSort():boolean;
        getNode():Ext.data.Model;
        getRecursive():boolean;
        getRootVisible():boolean;
        isVisible(node: any):boolean;
        setFolderSort(folderSort: boolean):void;
        setNode(node: Ext.data.Model):void;
        setRecursive(recursive: boolean):void;
        setRootVisible(rootVisible: boolean):void;
    }
    export class PageMap extends Ext.util.LruCache {
        pageSize: number;
        rootProperty: string;
        constructor(config?: any);
        findBy(fn: (rec: any, index: any) => any, scope?: any):any;
        findIndexBy(fn: (rec: any, index: any) => any, scope?: any):number;
        getPageSize():number;
        getRootProperty():string;
        getStore():any;
        setPageSize(pageSize: number):void;
        setRootProperty(rootProperty: string):void;
        setStore(store: any):void;
    }
    export class ProxyStore extends Ext.data.AbstractStore {
        asynchronousLoad: boolean;
        autoLoad: any;
        autoSync: boolean;
        batchUpdateMode: string;
        fields: any[]|string[];
        model: string|Ext.data.Model;
        proxy: any;
        sortOnLoad: boolean;
        trackRemoved: boolean;
        lastOptions: any;
        removed: Ext.data.Model[];
        constructor(config: any);
        flushLoad():void;
        getAsynchronousLoad():boolean;
        getAutoLoad():any;
        getAutoSync():boolean;
        getBatchUpdateMode():string;
        getFields():any[]|string[];
        getModel():string|Ext.data.Model;
        getModifiedRecords():Ext.data.Model[];
        getNewRecords():Ext.data.Model[];
        getProxy():any;
        getRemovedRecords():Ext.data.Model[];
        getSortOnLoad():boolean;
        getTotalCount():number;
        getTrackRemoved():boolean;
        getUpdatedRecords():Ext.data.Model[];
        load(options?: any):Ext.data.Store;
        reload(options?: any):void;
        removeAll():void;
        resumeAutoSync(syncNow: boolean):void;
        save():void;
        setAsynchronousLoad(asynchronousLoad: boolean):void;
        setAutoLoad(autoLoad: any):void;
        setAutoSync(autoSync: boolean):void;
        setBatchUpdateMode(batchUpdateMode: string):void;
        setFields(fields: any[]|string[]):void;
        setModel(model: string|Ext.data.Model):void;
        setProxy(proxy: any):void;
        setSortOnLoad(sortOnLoad: boolean):void;
        setTrackRemoved(trackRemoved: boolean):void;
        suspendAutoSync():void;
        sync(options?: any):Ext.data.Store;
    }
    export class Request extends Ext.Base {
        action: string;
        binary: boolean;
        callbackKey: string;
        disableCaching: boolean;
        headers: any;
        jsonData: any;
        method: string;
        operation: Ext.data.operation.Operation;
        params: any;
        password: string;
        proxy: Ext.data.proxy.Proxy;
        url: string;
        username: string;
        withCredentials: boolean;
        xmlData: any;
        constructor(config?: any);
        getAction():string;
        getArgs():any;
        getBinary():boolean;
        getCallback():any;
        getCallbackKey():string;
        getDirectFn():any;
        getDisableCaching():boolean;
        getHeaders():any;
        getJsonData():any;
        getMethod():string;
        getOperation():Ext.data.operation.Operation;
        getParam(key: string):any;
        getParams():any;
        getPassword():string;
        getProxy():Ext.data.proxy.Proxy;
        getRecords():any;
        getScope():any;
        getTimeout():number;
        getUrl():string;
        getUseDefaultXhrHeader():any;
        getUsername():string;
        getWithCredentials():boolean;
        getXmlData():any;
        setAction(action: string):void;
        setArgs(args: any):void;
        setBinary(binary: boolean):void;
        setCallback(callback: any):void;
        setCallbackKey(callbackKey: string):void;
        setDirectFn(directFn: any):void;
        setDisableCaching(disableCaching: boolean):void;
        setHeaders(headers: any):void;
        setJsonData(jsonData: any):void;
        setMethod(method: string):void;
        setOperation(operation: Ext.data.operation.Operation):void;
        setParam(key: string, value: any):void;
        setParams(params: any):void;
        setPassword(password: string):void;
        setProxy(proxy: Ext.data.proxy.Proxy):void;
        setRecords(records: any):void;
        setScope(scope: any):void;
        setTimeout(timeout: number):void;
        setUrl(url: string):void;
        setUseDefaultXhrHeader(useDefaultXhrHeader: any):void;
        setUsername(username: string):void;
        setWithCredentials(withCredentials: boolean):void;
        setXmlData(xmlData: any):void;
    }
    export class ResultSet extends Ext.Base {
        count: number;
        loaded: boolean;
        message: string;
        records: Ext.data.Model[]|any[];
        success: boolean;
        total: number;
        isResultSet: boolean;
        constructor(config?: any);
        getLoaded():boolean;
        getMessage():string;
        getRecords():Ext.data.Model[]|any[];
        getSuccess():boolean;
        getTotal():number;
        setCount(count: number):void;
        setLoaded(loaded: boolean):void;
        setMessage(message: string):void;
        setRecords(records: Ext.data.Model[]|any[]):void;
        setSuccess(success: boolean):void;
        setTotal(total: number):void;
    }
    export class Session extends Ext.Base {
        autoDestroy: boolean;
        parent: Ext.data.Session;
        schema: string|Ext.data.schema.Schema;
        constructor(config: any);
        adopt(record: Ext.data.Model):void;
        commit():void;
        createRecord(type: string|Ext.Class, data?: any):Ext.data.Model;
        getAutoDestroy():boolean;
        getChanges():any;
        getChangesForParent():any;
        getCrudProperties():any;
        getEntityList(entityType: Ext.Class, ids: any[]):Ext.data.Model[];
        getModelIdentifier(entityType: Ext.Class, id: any):string;
        getParent():Ext.data.Session;
        getRecord(type: string|Ext.Class|Ext.data.Model, id: any, autoLoad?: any):Ext.data.Model;
        getSaveBatch(sort?: boolean):Ext.data.Batch;
        getSchema():string|Ext.data.schema.Schema;
        onInvalidAssociationEntity(entityType: Ext.Class, id: any):void;
        onInvalidEntityCreate(entityType: Ext.Class, id: any):void;
        onInvalidEntityDrop(entityType: Ext.Class, id: any):void;
        onInvalidEntityRead(entityType: Ext.Class, id: any):void;
        onInvalidEntityUpdate(entityType: Ext.Class, id: any, dropped: boolean):void;
        peekRecord(type: string|Ext.Class, id: any, deep?: boolean):Ext.data.Model;
        save():void;
        setAutoDestroy(autoDestroy: boolean):void;
        setCrudProperties(crudProperties: any):void;
        setParent(parent: Ext.data.Session):void;
        setSchema(schema: string|Ext.data.schema.Schema):void;
        spawn():Ext.data.Session;
        update(data: any):void;
        visitData(visitor: any):any;
    }
    export class SortTypes {
        static stripCommasRe: RegExp;
        static stripTagsRE: RegExp;
        static asDate(s: any):number;
        static asFloat(s: any):number;
        static asInt(s: any):number;
        static asText(s: any):string;
        static asUCString(s: any):string;
        static asUCText(s: any):string;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static none(s: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Store extends Ext.data.ProxyStore {
        clearOnPageLoad: boolean;
        clearRemovedOnLoad: boolean;
        session: Ext.data.Session;
        loadCount: number;
        constructor(config?: any);
        add(...model: any[]):Ext.data.Model[];
        addSorted(record: Ext.data.Model):void;
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        commitChanges():void;
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):Ext.data.Model|void;
        getByInternalId(internalId: any):Ext.data.Model;
        getClearOnPageLoad():boolean;
        getClearRemovedOnLoad():boolean;
        getData():Ext.util.Collection;
        getExtraKeys():any;
        getSession():Ext.data.Session;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        insert(index: number, records: any):Ext.data.Model[];
        last(grouped?: boolean):Ext.data.Model|void;
        loadData(data: Ext.data.Model[]|any[], append?: boolean):void;
        loadPage(page: number, options?: any):void;
        loadRawData(data: any[], append?: boolean):boolean;
        loadRecords(records: Ext.data.Model[], options: any):void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        nextPage(options: any):void;
        previousPage(options: any):void;
        query(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        rejectChanges():void;
        remove(records: Ext.data.Model|Ext.data.Model[]|number|number[]):void;
        removeAt(index: number, count?: number):void;
        setClearOnPageLoad(clearOnPageLoad: boolean):void;
        setClearRemovedOnLoad(clearRemovedOnLoad: boolean):void;
        setData(data: Ext.data.Model[]|any[]):void;
        setExtraKeys(extraKeys: any):void;
        setSession(session: Ext.data.Session):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static add(key: any, obj?: any):any;
        static addAfterListener():void;
        static addAll(objs: any):void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static destroy():void;
        static each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        static eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        static enableBubble(eventNames: string|string[]):void;
        static filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: (item: any, key: string) => any, scope?: any):any;
        static findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(o: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorters():Ext.util.Sorter[]|any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static lookup(store: any, defaultType?: string):Ext.data.Store;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static remove(o: any):any;
        static removeAfterListener():void;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        static sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unregister(...stores: any[]):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class TreeModel extends Ext.data.Model {
        childType: string;
        constructor(data: any, session: any);
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):any;
        queryBy(fn: Function, scope?: any):any;
        queryById(id: string):any;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class TreeStore extends Ext.data.Store {
        clearOnLoad: boolean;
        defaultRootId: string;
        defaultRootProperty: string;
        defaultRootText: string;
        folderSort: boolean;
        lazyFill: boolean;
        nodeParam: string;
        parentIdProperty: string;
        root: any;
        rootVisible: boolean;
        isTreeStore: boolean;
        constructor(config: any);
        findNode(fieldName: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.NodeInterface;
        getClearOnLoad():boolean;
        getDefaultRootId():string;
        getDefaultRootProperty():string;
        getDefaultRootText():string;
        getFolderSort():boolean;
        getNodeById(id: string):Ext.data.NodeInterface;
        getNodeParam():string;
        getParentIdProperty():string;
        getRoot():any;
        getRootNode():Ext.data.NodeInterface;
        getRootVisible():boolean;
        isVisible(node: any):boolean;
        setClearOnLoad(clearOnLoad: boolean):void;
        setDefaultRootId(defaultRootId: string):void;
        setDefaultRootProperty(defaultRootProperty: string):void;
        setDefaultRootText(defaultRootText: string):void;
        setFolderSort(folderSort: boolean):void;
        setNodeParam(nodeParam: string):void;
        setParentIdProperty(parentIdProperty: string):void;
        setRoot(root: any):void;
        setRootNode(root: any):Ext.data.NodeInterface;
        setRootVisible(rootVisible: boolean):void;
    }
    export class Types {
        static AUTO: any;
        static BOOL: any;
        static BOOLEAN: any;
        static DATE: any;
        static FLOAT: any;
        static INT: any;
        static INTEGER: any;
        static NUMBER: any;
        static STRING: any;
        static stripRe: RegExp;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Validation extends Ext.data.Model {
        record: Ext.data.Model;
        constructor(data: any, session: any);
    }
    export class XmlStore extends Ext.data.Store {
        constructor(config: any);
    }
}
declare module Ext.data.field {
    export class Boolean extends Ext.data.field.Field {
        trueRe: RegExp;
        constructor(config: any);
    }
    export class Date extends Ext.data.field.Field {
        dateFormat: string;
        dateReadFormat: string;
        dateWriteFormat: string;
        constructor(config: any);
        getDateFormat():string;
        getDateReadFormat():string;
        getDateWriteFormat():string;
    }
    export class Field extends Ext.Base {
        allowNull: boolean;
        calculate: Function;
        critical: boolean;
        defaultValue: any;
        depends: string|string[];
        mapping: string|number|Function;
        name: string;
        persist: boolean;
        reference: any;
        sortType: Function|string;
        unique: boolean;
        validators: any[];
        calculated: boolean;
        defaultInvalidMessage: string;
        definedBy: Ext.Class;
        factoryConfig: any;
        identifier: boolean;
        ordinal: number;
        stripRe: RegExp;
        constructor(config: any);
        collate(value1: any, value2: any):number;
        compare(value1: any, value2: any):number;
        convert(value: any, record: Ext.data.Model):any;
        getAllowBlank():boolean;
        getAllowNull():boolean;
        getConvert():Function;
        getDefaultValue():any;
        getDepends():string[];
        getMapping():any;
        getPersist():boolean;
        getSortDir():string;
        getSortType():Function;
        getType():string;
        hasMapping():boolean;
        isEqual(value1: any, value2: any):boolean;
        serialize(value: any, record: Ext.data.Model):string;
        validate(value: any, separator?: string, errors?: Ext.data.ErrorCollection):boolean|string;
    }
    export class Integer extends Ext.data.field.Field {
        constructor(config: any);
    }
    export class Number extends Ext.data.field.Integer {
        constructor(config: any);
    }
    export class String extends Ext.data.field.Field {
        constructor(config: any);
    }
}
declare module Ext.data.flash {
    export class BinaryXhr extends Ext.Base {
        readyState: number;
        responseBytes: any[];
        status: number;
        statusText: string;
        constructor(config: any);
        abort():void;
        getAllResponseHeaders():void;
        getResponseHeader(header: any):void;
        onreadystatechange():void;
        open(method: any, url: any, async: any, user: any, password: any):void;
        overrideMimeType(mimeType: any):void;
        send(body: any[]):void;
        setRequestHeader(header: any, value: any):void;
    }
}
declare module Ext.data.identifier {
    export class Generator extends Ext.Base {
        id: string;
        factoryConfig: any;
        isGenerator: boolean;
        constructor(config?: any);
        generate():number|string;
        getId():string;
        setId(id: string):void;
    }
    export class Negative extends Ext.data.identifier.Sequential {
        constructor(config?: any);
    }
    export class Sequential extends Ext.data.identifier.Generator {
        increment: number;
        prefix: string;
        seed: number;
        constructor(config?: any);
        getIncrement():number;
        getPrefix():string;
        getSeed():number;
        setIncrement(increment: number):void;
        setPrefix(prefix: string):void;
        setSeed(seed: number):void;
    }
    export class Uuid extends Ext.data.identifier.Generator {
        clockSeq: number;
        salt: any;
        timestamp: any;
        version: number;
        constructor(config?: any);
        reconfigure(config: any):void;
    }
}
declare module Ext.data.matrix {
    export class Matrix extends Ext.Base {
        association: Ext.data.schema.ManyToMany;
        session: Ext.data.Session;
        constructor(session: any, matrix: any);
    }
    export class Side extends Ext.Base {
        index: number;
        inverse: Ext.data.matrix.Side;
        matrix: Ext.data.matrix.Matrix;
        role: Ext.data.schema.Role;
        slices: any;
    }
    export class Slice extends Ext.Base {
        id: string|number;
        members: any;
        side: Ext.data.matrix.Side;
        constructor(side: any, id: any);
    }
}
declare module Ext.data.operation {
    export class Create extends Ext.data.operation.Operation {
        constructor(config?: any);
        getRecordCreator():any;
        setRecordCreator(recordCreator: any):void;
    }
    export class Destroy extends Ext.data.operation.Operation {
        constructor(config?: any);
    }
    export class Operation extends Ext.Base {
        batch: Ext.data.Batch;
        callback: Function;
        id: any;
        params: any;
        proxy: Ext.data.proxy.Proxy;
        records: Ext.data.Model[];
        request: Ext.data.Request;
        resultSet: Ext.data.ResultSet;
        scope: any;
        synchronous: boolean;
        url: string;
        constructor(config?: any);
        abort():void;
        allowWrite():boolean;
        doProcess(resultSet: Ext.data.ResultSet, request: Ext.data.Request, response: any):void;
        getBatch():Ext.data.Batch;
        getCallback():Function;
        getError():any;
        getId():any;
        getParams():any;
        getProxy():Ext.data.proxy.Proxy;
        getRecords():Ext.data.Model[];
        getRequest():Ext.data.Request;
        getResultSet():Ext.data.ResultSet;
        getScope():any;
        getSynchronous():boolean;
        getUrl():string;
        hasException():boolean;
        isComplete():boolean;
        isRunning():boolean;
        isStarted():boolean;
        setBatch(batch: Ext.data.Batch):void;
        setCallback(callback: Function):void;
        setCompleted():void;
        setException(error?: any):void;
        setId(id: any):void;
        setParams(params: any):void;
        setProxy(proxy: Ext.data.proxy.Proxy):void;
        setRecords(records: Ext.data.Model[]):void;
        setRequest(request: Ext.data.Request):void;
        setResultSet(resultSet: Ext.data.ResultSet):void;
        setScope(scope: any):void;
        setStarted():void;
        setSuccessful(complete?: boolean):void;
        setSynchronous(synchronous: boolean):void;
        setUrl(url: string):void;
        wasSuccessful():boolean;
    }
    export class Read extends Ext.data.operation.Operation {
        filters: Ext.util.Filter[];
        grouper: Ext.util.Grouper;
        limit: number;
        page: number;
        sorters: Ext.util.Sorter[];
        start: number;
        constructor(config?: any);
        getFilters():Ext.util.Filter[];
        getGrouper():Ext.util.Grouper;
        getLimit():number;
        getPage():number;
        getSorters():Ext.util.Sorter[];
        getStart():number;
        setFilters(filters: Ext.util.Filter[]):void;
        setGrouper(grouper: Ext.util.Grouper):void;
        setLimit(limit: number):void;
        setPage(page: number):void;
        setSorters(sorters: Ext.util.Sorter[]):void;
        setStart(start: number):void;
    }
    export class Update extends Ext.data.operation.Operation {
        constructor(config?: any);
        getRecordCreator():any;
        setRecordCreator(recordCreator: any):void;
    }
}
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        actionMethods: any;
        binary: boolean;
        headers: any;
        paramsAsJson: boolean;
        password: string;
        useDefaultXhrHeader: boolean;
        username: string;
        withCredentials: boolean;
        constructor(config?: any);
        abort(request?: Ext.data.Request):void;
        getActionMethods():any;
        getBinary():boolean;
        getHeaders():any;
        getMethod(request: Ext.data.Request):string;
        getParamsAsJson():boolean;
        getPassword():string;
        getUseDefaultXhrHeader():boolean;
        getUsername():string;
        getWithCredentials():boolean;
        setActionMethods(actionMethods: any):void;
        setBinary(binary: boolean):void;
        setHeaders(headers: any):void;
        setParamsAsJson(paramsAsJson: boolean):void;
        setPassword(password: string):void;
        setUseDefaultXhrHeader(useDefaultXhrHeader: boolean):void;
        setUsername(username: string):void;
        setWithCredentials(withCredentials: boolean):void;
    }
    export class Client extends Ext.data.proxy.Proxy {
        constructor(config?: any);
        clear():void;
    }
    export class Direct extends Ext.data.proxy.Server {
        directFn: Function|string;
        metadata: any;
        paramOrder: string|string[];
        paramsAsHash: boolean;
        constructor(config?: any);
        extractResponseData(response: any):any;
        getDirectFn():Function|string;
        getMetadata():any;
        getParamOrder():string|string[];
        getParamsAsHash():boolean;
        setDirectFn(directFn: Function|string):void;
        setException(operation: Ext.data.operation.Operation, response: any):void;
        setMetadata(metadata: any):void;
        setParamOrder(paramOrder: string|string[]):void;
        setParamsAsHash(paramsAsHash: boolean):void;
    }
    export class JsonP extends Ext.data.proxy.Server {
        autoAppendParams: boolean;
        callbackKey: string;
        recordParam: string;
        constructor(config?: any);
        abort(request?: Ext.data.Request):void;
        encodeRecords(records: Ext.data.Model[]):any[];
        getAutoAppendParams():boolean;
        getCallbackKey():string;
        getRecordParam():string;
        setAutoAppendParams(autoAppendParams: boolean):void;
        setCallbackKey(callbackKey: string):void;
        setRecordParam(recordParam: string):void;
    }
    export class LocalStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class Memory extends Ext.data.proxy.Client {
        data: any;
        enablePaging: boolean;
        constructor(config?: any);
        getData():any;
        getEnablePaging():boolean;
        setData(data: any):void;
        setEnablePaging(enablePaging: boolean):void;
    }
    export class Proxy extends Ext.Base {
        batchActions: boolean;
        batchOrder: string;
        listeners: any;
        model: string|Ext.data.Model;
        reader: any;
        writer: any;
        factoryConfig: any;
        hasListeners: any;
        isObservable: boolean;
        isProxy: boolean;
        isSynchronous: boolean;
        constructor(config?: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        erase(operation: Ext.data.operation.Operation):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getBatchActions():boolean;
        getBatchOrder():string;
        getModel():string|Ext.data.Model;
        getReader():any;
        getWriter():any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        read(operation: Ext.data.operation.Operation):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setBatchActions(batchActions: boolean):void;
        setBatchOrder(batchOrder: string):void;
        setListeners(listeners: any):void;
        setModel(model: string|Ext.data.Model):void;
        setReader(reader: any):void;
        setWriter(writer: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        update(operation: Ext.data.operation.Operation):void;
    }
    export class Rest extends Ext.data.proxy.Ajax {
        appendId: boolean;
        format: string;
        constructor(config?: any);
        getAppendId():boolean;
        getFormat():string;
        setAppendId(appendId: boolean):void;
        setFormat(format: string):void;
    }
    export class Server extends Ext.data.proxy.Proxy {
        api: any;
        cacheString: string;
        directionParam: string;
        extraParams: any;
        filterParam: string;
        groupDirectionParam: string;
        groupParam: string;
        idParam: string;
        limitParam: string;
        noCache: boolean;
        pageParam: string;
        simpleGroupMode: boolean;
        simpleSortMode: boolean;
        sortParam: string;
        startParam: string;
        timeout: number;
        url: string;
        constructor(config?: any);
        afterRequest(request: Ext.data.Request, success: boolean):void;
        applyEncoding(value: any[]):any;
        buildRequest(operation: Ext.data.operation.Operation):Ext.data.Request;
        buildUrl(request: Ext.data.Request):string;
        doRequest(operation: Ext.data.operation.Operation, callback: Function, scope: any):void;
        encodeFilters(filters: Ext.util.Filter[]):string;
        encodeSorters(sorters: Ext.util.Sorter[], preventArray?: boolean):string;
        getApi():any;
        getCacheString():string;
        getDirectionParam():string;
        getExtraParams():any;
        getFilterParam():string;
        getGroupDirectionParam():string;
        getGroupParam():string;
        getIdParam():string;
        getLimitParam():string;
        getNoCache():boolean;
        getPageParam():string;
        getSimpleGroupMode():boolean;
        getSimpleSortMode():boolean;
        getSortParam():string;
        getStartParam():string;
        getTimeout():number;
        processResponse(success: any, operation: any, request: any, response: any):void;
        setApi(api: any):void;
        setCacheString(cacheString: string):void;
        setDirectionParam(directionParam: string):void;
        setExtraParam(name: string, value: any):void;
        setExtraParams(extraParams: any):void;
        setFilterParam(filterParam: string):void;
        setGroupDirectionParam(groupDirectionParam: string):void;
        setGroupParam(groupParam: string):void;
        setIdParam(idParam: string):void;
        setLimitParam(limitParam: string):void;
        setNoCache(noCache: boolean):void;
        setPageParam(pageParam: string):void;
        setSimpleGroupMode(simpleGroupMode: boolean):void;
        setSimpleSortMode(simpleSortMode: boolean):void;
        setSortParam(sortParam: string):void;
        setStartParam(startParam: string):void;
        setTimeout(timeout: number):void;
        setUrl(url: string):void;
    }
    export class SessionStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class WebStorage extends Ext.data.proxy.Client {
        id: string;
        cache: any;
        constructor(config?: any);
        getId():string;
        setId(id: string):void;
        setRecord(record: Ext.data.Model, id?: string):void;
    }
}
declare module Ext.data.reader {
    export class Array extends Ext.data.reader.Json {
        constructor(meta: any);
    }
    export class Json extends Ext.data.reader.Reader {
        metaProperty: string;
        preserveRawData: boolean;
        record: string;
        useSimpleAccessors: boolean;
        constructor(config?: any);
        getMetaProperty():string;
        getPreserveRawData():boolean;
        getRecord():string;
        getUseSimpleAccessors():boolean;
        setMetaProperty(metaProperty: string):void;
        setPreserveRawData(preserveRawData: boolean):void;
        setRecord(record: string):void;
        setUseSimpleAccessors(useSimpleAccessors: boolean):void;
    }
    export class Reader extends Ext.Base {
        implicitIncludes: boolean;
        keepRawData: boolean;
        listeners: any;
        messageProperty: string;
        model: string|Ext.data.Model;
        readRecordsOnFailure: boolean;
        rootProperty: string|Function;
        successProperty: string;
        totalProperty: string;
        transform: any;
        typeProperty: string;
        factoryConfig: any;
        hasListeners: any;
        isObservable: boolean;
        isReader: boolean;
        metaData: any;
        rawData: any;
        constructor(config?: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getData(data: any):any;
        getImplicitIncludes():boolean;
        getKeepRawData():boolean;
        getMessageProperty():string;
        getModel():string|Ext.data.Model;
        getReadRecordsOnFailure():boolean;
        getResponseData(response: any):any;
        getRootProperty():string|Function;
        getSuccessProperty():string;
        getTotalProperty():string;
        getTransform():any;
        getTypeProperty():string;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        read(response: any, readOptions?: any):Ext.data.ResultSet;
        readRecords(data: any, readOptions?: any):Ext.data.ResultSet;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setImplicitIncludes(implicitIncludes: boolean):void;
        setKeepRawData(keepRawData: boolean):void;
        setListeners(listeners: any):void;
        setMessageProperty(messageProperty: string):void;
        setModel(model: string|Ext.data.Model):void;
        setReadRecordsOnFailure(readRecordsOnFailure: boolean):void;
        setRootProperty(rootProperty: string|Function):void;
        setSuccessProperty(successProperty: string):void;
        setTotalProperty(totalProperty: string):void;
        setTransform(transform: any):void;
        setTypeProperty(typeProperty: string):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        namespace: string;
        record: string;
        xmlData: any;
        constructor(config?: any);
        getNamespace():string;
        getRecord():string;
        setNamespace(namespace: string):void;
        setRecord(record: string):void;
    }
}
declare module Ext.data.request {
    export class Ajax extends Ext.data.request.Base {
        constructor(config: any);
        abort(force: any):void;
        cleanup():void;
    }
    export class Base extends Ext.Base {
        factoryConfig: any;
        constructor(config: any);
        isLoading():boolean;
        start():void;
    }
    export class Form extends Ext.data.request.Base {
        constructor(config: any);
    }
}
declare module Ext.data.schema {
    export class Association extends Ext.Base {
        name: string;
        definedBy: Ext.Class;
        field: Ext.data.field.Field;
        left: Ext.data.schema.Role;
        nullable: boolean;
        owner: any;
        right: Ext.data.schema.Role;
        schema: Ext.data.schema.Schema;
    }
    export class ManyToMany extends Ext.data.schema.Association {
    }
    export class ManyToOne extends Ext.data.schema.Association {
    }
    export class Namer extends Ext.Base {
        factoryConfig: any;
        fieldRole(name: any):void;
        manyToOne(leftType: any, leftRole: any, rightType: any, rightRole: any):void;
    }
    export class OneToOne extends Ext.data.schema.Association {
    }
    export class Role extends Ext.Base {
        association: Ext.data.schema.Association;
        cls: Ext.Class;
        inverse: Ext.data.schema.Role;
        isMany: boolean;
        left: boolean;
        owner: boolean;
        role: string;
        side: string;
        type: string;
        constructor(association: any, config: any);
    }
    export class Schema extends Ext.Base {
        defaultIdentifier: any;
        namer: any;
        namespace: string;
        proxy: any;
        urlPrefix: string;
        assocCount: number;
        entityCount: number;
        factoryConfig: any;
        type: string;
        constructor(config: any);
        addMatrix(entityType: Ext.Class, matrixName: string, relation?: string, left?: any, right?: any):void;
        addReference(entityType: Ext.Class, referenceField: Ext.data.field.Field, association?: string, role?: string, inverse?: string, type?: string, descr?: any, unique?: boolean):void;
        getAssociation(name: string):Ext.data.schema.Association;
        getDefaultIdentifier():any;
        getEntity(name: string):Ext.data.Model;
        getEntityName(cls: string|Ext.data.Model):string;
        getNamer():any;
        getNamespace():string;
        getProxy():any;
        getUrlPrefix():string;
        hasAssociations(name: string|Ext.Class|Ext.data.Model):boolean;
        hasEntity(entity: string|Ext.data.Model):boolean;
        setDefaultIdentifier(defaultIdentifier: any):void;
        setNamer(namer: any):void;
        setNamespace(namespace: string):void;
        setProxy(proxy: any):void;
        setUrlPrefix(urlPrefix: string):void;
        static get(config: any):Ext.data.schema.Schema;
    }
}
declare module Ext.data.session {
    export class BatchVisitor extends Ext.Base {
        constructor(batch: any);
    }
    export class ChangesVisitor extends Ext.Base {
        constructor(session: any);
    }
    export class ChildChangesVisitor extends Ext.data.session.ChangesVisitor {
        constructor();
    }
}
declare module Ext.data.validator {
    export class Bound extends Ext.data.validator.Validator {
        bothMessage: string;
        emptyMessage: string;
        max: number;
        maxOnlyMessage: string;
        min: number;
        minOnlyMessage: string;
        constructor();
        getEmptyMessage():string;
        getMax():number;
        getMaxOnlyMessage():string;
        getMin():number;
        getMinOnlyMessage():string;
        setEmptyMessage(emptyMessage: string):void;
        setMax(max: number):void;
        setMaxOnlyMessage(maxOnlyMessage: string):void;
        setMin(min: number):void;
        setMinOnlyMessage(minOnlyMessage: string):void;
    }
    export class Email extends Ext.data.validator.Format {
        constructor();
    }
    export class Exclusion extends Ext.data.validator.List {
        message: string;
        constructor();
        getMessage():string;
        setMessage(message: string):void;
    }
    export class Format extends Ext.data.validator.Validator {
        matcher: RegExp;
        message: string;
        constructor();
        getMatcher():RegExp;
        getMessage():string;
        setMatcher(matcher: RegExp):void;
        setMessage(message: string):void;
    }
    export class Inclusion extends Ext.data.validator.List {
        message: string;
        constructor();
        getMessage():string;
        setMessage(message: string):void;
    }
    export class Length extends Ext.data.validator.Bound {
        constructor();
        getBothMessage():string;
        setBothMessage(bothMessage: string):void;
    }
    export class List extends Ext.data.validator.Validator {
        list: any[];
        constructor(config: any);
        getList():any[];
        setList(list: any[]):void;
    }
    export class Presence extends Ext.data.validator.Validator {
        allowEmpty: boolean;
        message: string;
        constructor(config: any);
        getAllowEmpty():boolean;
        getMessage():string;
        setAllowEmpty(allowEmpty: boolean):void;
        setMessage(message: string):void;
    }
    export class Range extends Ext.data.validator.Bound {
        nanMessage: string;
        constructor();
        getBothMessage():string;
        getNanMessage():string;
        setBothMessage(bothMessage: string):void;
        setNanMessage(nanMessage: string):void;
    }
    export class Validator extends Ext.Base {
        factoryConfig: any;
        type: string;
        constructor(config: any);
        validate(value: any, record: Ext.data.Model):boolean|string;
    }
}
declare module Ext.data.writer {
    export class Json extends Ext.data.writer.Writer {
        allowSingle: boolean;
        encode: boolean;
        expandData: boolean;
        rootProperty: string;
        constructor(config: any);
        getAllowSingle():boolean;
        getEncode():boolean;
        getExpandData():boolean;
        getExpandedData(data: any):void;
        getRootProperty():string;
        setAllowSingle(allowSingle: boolean):void;
        setEncode(encode: boolean):void;
        setExpandData(expandData: boolean):void;
        setRootProperty(rootProperty: string):void;
    }
    export class Writer extends Ext.Base {
        allDataOptions: any;
        clientIdProperty: string;
        dateFormat: string;
        nameProperty: string;
        partialDataOptions: any;
        transform: any;
        writeAllFields: boolean;
        writeRecordId: boolean;
        factoryConfig: any;
        isWriter: boolean;
        constructor(config?: any);
        getAllDataOptions():any;
        getClientIdProperty():string;
        getDateFormat():string;
        getNameProperty():string;
        getPartialDataOptions():any;
        getRecordData(record: Ext.data.Model, operation?: Ext.data.operation.Operation):any;
        getTransform():any;
        getWriteAllFields():boolean;
        getWriteRecordId():boolean;
        setAllDataOptions(allDataOptions: any):void;
        setClientIdProperty(clientIdProperty: string):void;
        setDateFormat(dateFormat: string):void;
        setNameProperty(nameProperty: string):void;
        setPartialDataOptions(partialDataOptions: any):void;
        setTransform(transform: any):void;
        setWriteAllFields(writeAllFields: boolean):void;
        setWriteRecordId(writeRecordId: boolean):void;
        write(request: Ext.data.Request):Ext.data.Request;
        writeRecords(request: Ext.data.Request, data: any[]):Ext.data.Request;
    }
    export class Xml extends Ext.data.writer.Writer {
        defaultDocumentRoot: string;
        documentRoot: string;
        header: string;
        record: string;
        constructor(config?: any);
        getDefaultDocumentRoot():string;
        getDocumentRoot():string;
        getHeader():string;
        getRecord():string;
        objectToElement(name: string, o: any, output?: any[]):void;
        setDefaultDocumentRoot(defaultDocumentRoot: string):void;
        setDocumentRoot(documentRoot: string):void;
        setHeader(header: string):void;
        setRecord(record: string):void;
    }
}
declare module Ext.direct {
    export class Event extends Ext.Base {
        constructor(config?: any);
        getData():any;
    }
    export class ExceptionEvent extends Ext.direct.RemotingEvent {
        constructor(config?: any);
    }
    export class JsonProvider extends Ext.direct.Provider {
        constructor(config: any);
        createEvent(response: any):Ext.direct.Event;
        createEvents(response: any):Ext.direct.Event[];
    }
    export class Manager {
        static exceptions: any;
        static hasListeners: any;
        static isObservable: boolean;
        static addAfterListener():void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static addProvider(...provider: any[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getProvider(id: string|Ext.direct.Provider):void;
        static getVarName():string;
        static hasListener(eventName: string):boolean;
        static isSuspended(event?: string):boolean;
        static loadProvider(config: any, callback?: Function, scope?: any):void;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static parseMethod(fn: string|Function):Function;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static removeAfterListener():void;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: string|Ext.direct.Provider):Ext.direct.Provider;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static setVarName(varName: string):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        baseParams: any;
        interval: number;
        pollFn: string|Function;
        url: string|Function;
        constructor(config: any);
    }
    export class Provider extends Ext.Base {
        id: string;
        listeners: any;
        relayedEvents: string[];
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect(force: any):void;
        doConnect():void;
        doDisconnect():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        hasListener(eventName: string):boolean;
        isConnected():void;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static checkConfig(config: any):boolean;
    }
    export class RemotingEvent extends Ext.direct.Event {
        constructor(config?: any);
        getTransaction():Ext.direct.Transaction;
    }
    export class RemotingMethod extends Ext.Base {
        constructor(config: any);
        getArgs(config: any):void;
        getCallData(args: any[]):any;
    }
    export class RemotingProvider extends Ext.direct.JsonProvider {
        actions: any;
        bufferLimit: number;
        disableNestedActions: boolean;
        enableBuffer: number|boolean;
        enableUrlEncode: string;
        maxRetries: number;
        namespace: any;
        timeout: number;
        url: string;
        constructor(config: any);
    }
    export class Transaction extends Ext.Base {
        provider: Ext.direct.Provider;
        constructor(config?: any);
    }
}
declare module Ext.dom {
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(element: string|HTMLElement);
    }
    export class CompositeElementLite extends Ext.Base {
        bubbleEvents: any;
        component: any;
        elements: HTMLElement[];
        hasListeners: any;
        isComposite: boolean;
        isObservable: boolean;
        static CLIP: number;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        constructor(element: string|HTMLElement);
        add(els: HTMLElement[]|Ext.dom.CompositeElementLite, root?: HTMLElement|string):Ext.dom.CompositeElementLite;
        addAfterListener():void;
        addBeforeListener():void;
        addCls(names: string|string[], prefix?: string, suffix?: string):Ext.dom.Element;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        appendTo(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        cacheScrollValues():Function;
        center(centerIn: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        clear(removeDom?: boolean):void;
        clearListeners():void;
        clearManagedListeners():void;
        clone(deep?: boolean, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        contains(el: string|HTMLElement|Ext.dom.Element|number):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        cssTranslate():void;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        each(fn: (el: Ext.dom.Element, c: Ext.dom.CompositeElementLite, index: number) => any, scope?: any):Ext.dom.CompositeElementLite;
        enableBubble(eventNames: string|string[]):void;
        fill(els: HTMLElement[]|Ext.dom.CompositeElementLite):Ext.dom.CompositeElementLite;
        filter(selector: string|((el: Ext.dom.Element, index: number) => any)):Ext.dom.CompositeElementLite;
        findParent(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        findParentNode(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        first():Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getAttribute(name: string, namespace?: string):string;
        getAttributes():any;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getById(id: string, asDom?: boolean):Ext.dom.Element|HTMLElement;
        getClientRegion():Ext.util.Region;
        getConstrainRegion():void;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getCount():number;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getLeft(local: boolean):number;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getMargin(sides?: string):any;
        getOffsetsTo(offsetsTo: Ext.util.Positionable|HTMLElement|string):number[];
        getOuterHeight():void;
        getOuterWidth():void;
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRegion():Ext.util.Region;
        getRight(local: boolean):number;
        getScroll():any;
        getScrollLeft():number;
        getScrollParent():void;
        getScrollTop():number;
        getSize(contentSize?: boolean):any;
        getStyle(property: string|string[], inline?: boolean):any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):string|number;
        getViewRegion():Ext.util.Region;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        getZIndex():number;
        hasCls(name: string):boolean;
        hasListener(eventName: string):boolean;
        hide():Ext.dom.Element;
        indexOf(el: string|HTMLElement|Ext.dom.Element|number):number;
        insertAfter(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        is(selector: string|Function):boolean;
        isAncestor(el: string|HTMLElement|Ext.dom.Element):boolean;
        isDescendent():void;
        isScrollable():boolean;
        isStyle(style: string, value: string):boolean;
        isSuspended(event?: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        move(direction: string, distance: number):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        next(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):HTMLElement[]|Ext.dom.Element[];
        radioCls(className: string|string[]):Ext.dom.Element;
        relayEvents(origin: any, events: any, prefix?: string):any;
        remove():void;
        removeAfterListener():void;
        removeAllListeners():void;
        removeBeforeListener():void;
        removeCls(names: string|string[], prefix?: string, suffix?: string):void;
        removeElement(el: string|HTMLElement|Ext.dom.Element|number, removeDom?: boolean):Ext.dom.CompositeElementLite;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        repaint():Ext.dom.Element;
        replace(el: string|HTMLElement|Ext.dom.Element, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceElement(el: string|HTMLElement|Ext.dom.Element|number, replacement: string|Ext.dom.Element, domReplace?: boolean):Ext.dom.CompositeElementLite;
        replaceWith(el: any):Ext.dom.Element;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        scroll(direction: string, distance: number, animate?: any):boolean;
        scrollBy(deltaX: any, deltaY: any, animate: any):Ext.dom.Element;
        scrollIntoView(container?: string|HTMLElement|Ext.dom.Element, hscroll?: boolean, animate?: any, highlight?: boolean):Ext.dom.Element;
        scrollTo(side: string, value: number, animate?: any):Ext.dom.Element;
        select(selector: string|HTMLElement[], composite: boolean):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        selectNode(selector: string, asDom?: boolean):HTMLElement|Ext.dom.Element;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: number|string):Ext.dom.Element;
        setBox(box: any):Ext.util.Positionable;
        setCls(className: string|string[]):void;
        setDisplayed(value: boolean|string):Ext.dom.Element;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: number|string):Ext.dom.Element;
        setHtml(html: string):Ext.dom.Element;
        setLeft(left: number|string):Ext.dom.Element;
        setListeners(listeners: any):void;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: number|any[], y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setMaxHeight(height: number|string):Ext.dom.Element;
        setMaxWidth(width: number|string):Ext.dom.Element;
        setMinHeight(height: number|string):Ext.dom.Element;
        setMinWidth(width: number|string):Ext.dom.Element;
        setOpacity(opacity: number):Ext.dom.Element;
        setRight(right: number|string):Ext.dom.Element;
        setScrollLeft(left: number):Ext.dom.Element;
        setScrollTop(top: number):Ext.dom.Element;
        setSize(width: number|string, height: number|string):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: number|string):Ext.dom.Element;
        setTopLeft():void;
        setVisibilityMode(mode: any):Ext.dom.Element;
        setVisible(visible: boolean):Ext.dom.Element;
        setWidth(width: number|string):Ext.dom.Element;
        setX(x: number):Ext.dom.Element;
        setXY(xy: number[]):Ext.dom.Element;
        setY(y: number):Ext.dom.Element;
        setZIndex(zindex: number):Ext.dom.Element;
        show():Ext.dom.Element;
        slice(start?: number, end?: number):HTMLElement[];
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        toggle():Ext.dom.Element;
        toggleCls(className: string, state?: boolean):Ext.dom.Element;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        up(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        update(html: string):Ext.dom.Element;
        wrap(config?: any, returnDom?: boolean, selector?: string):HTMLElement|Ext.dom.Element;
        static fly(dom: string|HTMLElement, named?: string):Ext.dom.Element;
        static fromPoint(x: number, y: number):string;
        static get(element: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        static getActiveElement(asElement: boolean):HTMLElement;
        static getCommonAncestor(nodeA: Ext.dom.Element|HTMLElement, nodeB: Ext.dom.Element|HTMLElement, returnDom: boolean):Ext.dom.Element|HTMLElement;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():any;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static normalize(prop: string):string;
        static parseBox(box: number|string):any;
        static parseStyles(styles: string):any;
        static query(selector: string, asDom?: boolean, root?: HTMLElement|string):HTMLElement[]|Ext.dom.Element[];
        static select(selector: string|HTMLElement[], composite?: boolean, root?: HTMLElement|string):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        static serializeForm(form: any):string;
        static unitizeBox(box: any, units: string):string;
    }
    export class Element extends Ext.Base {
        component: any;
        dom: HTMLElement;
        hasListeners: any;
        id: string;
        isObservable: boolean;
        static CLIP: number;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        constructor(element: string|HTMLElement);
        addAfterListener():void;
        addBeforeListener():void;
        addCls(names: string|string[], prefix?: string, suffix?: string):Ext.dom.Element;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        appendTo(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        cacheScrollValues():Function;
        center(centerIn: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        clearListeners():void;
        clearManagedListeners():void;
        clone(deep?: boolean, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        contains(element: string|HTMLElement|Ext.dom.Element):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        cssTranslate():void;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        enableBubble(eventNames: string|string[]):void;
        findParent(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        findParentNode(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        first(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        focus(defer?: number):Ext.dom.Element;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getAttribute(name: string, namespace?: string):string;
        getAttributes():any;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getById(id: string, asDom?: boolean):Ext.dom.Element|HTMLElement;
        getClientRegion():Ext.util.Region;
        getConstrainRegion():void;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getLeft(local: boolean):number;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getMargin(sides?: string):any;
        getOffsetsTo(offsetsTo: Ext.util.Positionable|HTMLElement|string):number[];
        getOuterHeight():void;
        getOuterWidth():void;
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRegion():Ext.util.Region;
        getRight(local: boolean):number;
        getScroll():any;
        getScrollLeft():number;
        getScrollParent():void;
        getScrollTop():number;
        getSize(contentSize?: boolean):any;
        getStyle(property: string|string[], inline?: boolean):any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):string|number;
        getViewRegion():Ext.util.Region;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        getZIndex():number;
        hasCls(name: string):boolean;
        hasListener(eventName: string):boolean;
        hide():Ext.dom.Element;
        insertAfter(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        is(selector: string|Function):boolean;
        isAncestor(el: string|HTMLElement|Ext.dom.Element):boolean;
        isDescendent():void;
        isScrollable():boolean;
        isStyle(style: string, value: string):boolean;
        isSuspended(event?: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        last(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        move(direction: string, distance: number):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        next(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):HTMLElement[]|Ext.dom.Element[];
        radioCls(className: string|string[]):Ext.dom.Element;
        relayEvents(origin: any, events: any, prefix?: string):any;
        remove():void;
        removeAfterListener():void;
        removeAllListeners():void;
        removeBeforeListener():void;
        removeCls(names: string|string[], prefix?: string, suffix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        repaint():Ext.dom.Element;
        replace(el: string|HTMLElement|Ext.dom.Element, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.Element;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        scroll(direction: string, distance: number, animate?: any):boolean;
        scrollBy(deltaX: any, deltaY: any, animate: any):Ext.dom.Element;
        scrollIntoView(container?: string|HTMLElement|Ext.dom.Element, hscroll?: boolean, animate?: any, highlight?: boolean):Ext.dom.Element;
        scrollTo(side: string, value: number, animate?: any):Ext.dom.Element;
        select(selector: string|HTMLElement[], composite: boolean):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        selectNode(selector: string, asDom?: boolean):HTMLElement|Ext.dom.Element;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: number|string):Ext.dom.Element;
        setBox(box: any):Ext.util.Positionable;
        setCls(className: string|string[]):void;
        setDisplayed(value: boolean|string):Ext.dom.Element;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: number|string):Ext.dom.Element;
        setHtml(html: string):Ext.dom.Element;
        setLeft(left: number|string):Ext.dom.Element;
        setListeners(listeners: any):void;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: number|any[], y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setMaxHeight(height: number|string):Ext.dom.Element;
        setMaxWidth(width: number|string):Ext.dom.Element;
        setMinHeight(height: number|string):Ext.dom.Element;
        setMinWidth(width: number|string):Ext.dom.Element;
        setOpacity(opacity: number):Ext.dom.Element;
        setRight(right: number|string):Ext.dom.Element;
        setScrollLeft(left: number):Ext.dom.Element;
        setScrollTop(top: number):Ext.dom.Element;
        setSize(width: number|string, height: number|string):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: number|string):Ext.dom.Element;
        setTopLeft():void;
        setVisibilityMode(mode: any):Ext.dom.Element;
        setVisible(visible: boolean):Ext.dom.Element;
        setWidth(width: number|string):Ext.dom.Element;
        setX(x: number):Ext.dom.Element;
        setXY(xy: number[]):Ext.dom.Element;
        setY(y: number):Ext.dom.Element;
        setZIndex(zindex: number):Ext.dom.Element;
        show():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        toggle():Ext.dom.Element;
        toggleCls(className: string, state?: boolean):Ext.dom.Element;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        up(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        update(html: string):Ext.dom.Element;
        wrap(config?: any, returnDom?: boolean, selector?: string):HTMLElement|Ext.dom.Element;
        static fly(dom: string|HTMLElement, named?: string):Ext.dom.Element;
        static fromPoint(x: number, y: number):string;
        static get(element: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        static getActiveElement(asElement: boolean):HTMLElement;
        static getCommonAncestor(nodeA: Ext.dom.Element|HTMLElement, nodeB: Ext.dom.Element|HTMLElement, returnDom: boolean):Ext.dom.Element|HTMLElement;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():any;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static normalize(prop: string):string;
        static parseBox(box: number|string):any;
        static parseStyles(styles: string):any;
        static query(selector: string, asDom?: boolean, root?: HTMLElement|string):HTMLElement[]|Ext.dom.Element[];
        static select(selector: string|HTMLElement[], composite?: boolean, root?: HTMLElement|string):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        static serializeForm(form: any):string;
        static unitizeBox(box: any, units: string):string;
    }
    export class ElementEvent extends Ext.util.Event {
    }
    export class Fly extends Ext.dom.Element {
        isFly: boolean;
        constructor(element: string|HTMLElement);
    }
    export class GarbageCollector {
        static interval: number;
        static collect():string[];
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static pause():void;
        static resume():void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Helper {
        static append(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static applyStyles(el: string|HTMLElement|Ext.dom.Element, styles: any):void;
        static createDom(o: any):HTMLElement;
        static createHtml(spec: any):void;
        static createTemplate(o: any):Ext.Template;
        static destroy():void;
        static generateStyles(styles: any, buffer?: string[], encode?: boolean):string|string[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static insertAfter(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertBefore(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertFirst(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertHtml(where: string, el: HTMLElement|Text, html: string):HTMLElement;
        static markup(spec: any):string;
        static overwrite(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Query {
        static matchers: any;
        static operators: any;
        static pseudos: any;
        static compile(selector: string, type?: string):Function;
        static destroy():void;
        static filter(el: HTMLElement[], selector: string, nonMatches: boolean):HTMLElement[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getNodeValue(node: any, defaultValue?: string):string;
        static is(el: string|HTMLElement|HTMLElement[], selector: string):boolean;
        static jsSelect(selector: string, root?: HTMLElement|string):HTMLElement[];
        static select(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
        static selectNode(selector: string, root?: HTMLElement):HTMLElement;
        static selectNumber(selector: string, root?: HTMLElement, defaultValue?: number):number;
        static selectValue(selector: string, root?: HTMLElement, defaultValue?: string):string;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Shadow extends Ext.dom.Underlay {
        mode: string;
        offset: number;
        offsets: any;
        outerOffsets: any;
        constructor(config?: any);
        setOpacity(opacity: number):void;
    }
    export class Shim extends Ext.dom.Underlay {
        constructor(config: any);
    }
    export class Underlay extends Ext.Base {
        target: Ext.dom.Element;
        zIndex: number;
        beforeShow():void;
        getInsertionTarget():Ext.dom.Element;
        getPool():Ext.dom.UnderlayPool;
        hide():void;
        realign(x?: number, y?: number, width?: number, height?: number):void;
        setZIndex(zIndex: number):void;
        show():void;
    }
    export class UnderlayPool extends Ext.Base {
        constructor(elementConfig: any);
        checkIn(el: Ext.dom.Element):void;
        checkOut():Ext.dom.Element;
        reset():void;
    }
}
declare module Ext.env {
    export class Browser {
        engineName: string;
        engineVersion: Ext.Version;
        isSecure: boolean;
        isStrict: boolean;
        name: string;
        userAgent: string;
        version: Ext.Version;
        is(name: string):boolean;
    }
    export class OS {
    }
    export class Ready {
        static invoke(listener: any):void;
        static invokeAll():void;
    }
}
declare module Ext.event {
    export class Event extends Ext.Base {
        A: number;
        ALT: number;
        B: number;
        BACKSPACE: number;
        C: number;
        CAPS_LOCK: number;
        CONTEXT_MENU: number;
        CTRL: number;
        D: number;
        DELETE: number;
        DOWN: number;
        E: number;
        EIGHT: number;
        END: number;
        ENTER: number;
        ESC: number;
        F: number;
        F1: number;
        F10: number;
        F11: number;
        F12: number;
        F2: number;
        F3: number;
        F4: number;
        F5: number;
        F6: number;
        F7: number;
        F8: number;
        F9: number;
        FIVE: number;
        FOUR: number;
        G: number;
        H: number;
        HOME: number;
        I: number;
        INSERT: number;
        J: number;
        K: number;
        L: number;
        LEFT: number;
        M: number;
        N: number;
        NINE: number;
        NUM_CENTER: number;
        NUM_DIVISION: number;
        NUM_EIGHT: number;
        NUM_FIVE: number;
        NUM_FOUR: number;
        NUM_MINUS: number;
        NUM_MULTIPLY: number;
        NUM_NINE: number;
        NUM_ONE: number;
        NUM_PERIOD: number;
        NUM_PLUS: number;
        NUM_SEVEN: number;
        NUM_SIX: number;
        NUM_THREE: number;
        NUM_TWO: number;
        NUM_ZERO: number;
        O: number;
        ONE: number;
        P: number;
        PAGE_DOWN: number;
        PAGE_UP: number;
        PAUSE: number;
        PRINT_SCREEN: number;
        Q: number;
        R: number;
        RETURN: number;
        RIGHT: number;
        S: number;
        SEVEN: number;
        SHIFT: number;
        SIX: number;
        SPACE: number;
        T: number;
        TAB: number;
        THREE: number;
        TWO: number;
        U: number;
        UP: number;
        V: number;
        W: number;
        WHEEL_SCALE: number;
        X: number;
        Y: number;
        Z: number;
        ZERO: number;
        altKey: boolean;
        angle: number;
        browserEvent: Event;
        button: number;
        ctrlKey: boolean;
        currentTarget: HTMLElement;
        defaultPrevented: boolean;
        delegatedTarget: HTMLElement;
        direction: number;
        distance: number;
        duration: number;
        pageX: number;
        pageY: number;
        rotation: number;
        scale: number;
        shiftKey: boolean;
        target: HTMLElement;
        constructor(event: any);
        getCharCode():number;
        getKey():number;
        getKeyName():string;
        getPageX():number;
        getPageY():number;
        getPoint():Ext.util.Point;
        getRelatedTarget(selector?: string, maxDepth?: number|HTMLElement, returnEl?: boolean):HTMLElement;
        getTarget(selector?: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        getTime():Date;
        getWheelDelta():number;
        getWheelDeltas():any;
        getX():number;
        getXY():number[];
        getY():number;
        hasModifier():boolean;
        isNavKeyPress(scrollableOnly?: boolean):boolean;
        isSpecialKey():boolean;
        preventDefault():Ext.event.Event;
        stopEvent():Ext.event.Event;
        stopPropagation():Ext.event.Event;
        within(el: string|HTMLElement|Ext.dom.Element, related?: boolean, allowEl?: boolean):boolean;
    }
}
declare module Ext.event.gesture {
    export class DoubleTap extends Ext.event.gesture.SingleTouch {
        moveDistance: number;
        tapDistance: number;
        constructor(config: any);
        getMaxDuration():number;
        getMoveDistance():number;
        getTapDistance():number;
        setMaxDuration(maxDuration: number):void;
        setMoveDistance(moveDistance: number):void;
        setTapDistance(tapDistance: number):void;
    }
    export class Drag extends Ext.event.gesture.SingleTouch {
        minDistance: number;
        constructor();
        getMinDistance():number;
        setMinDistance(minDistance: number):void;
    }
    export class EdgeSwipe extends Ext.event.gesture.Swipe {
        constructor(config: any);
    }
    export class LongPress extends Ext.event.gesture.SingleTouch {
        constructor(config: any);
        getMinDuration():number;
        getMoveDistance():number;
        setMinDuration(minDuration: number):void;
        setMoveDistance(moveDistance: number):void;
    }
    export class MultiTouch extends Ext.event.gesture.Recognizer {
        constructor(config: any);
    }
    export class Pinch extends Ext.event.gesture.MultiTouch {
        constructor(config: any);
    }
    export class Recognizer extends Ext.Base {
        priority: number;
        constructor(config: any);
        getCallbackScope():any;
        getId():string;
        getOnRecognized():any;
        setCallbackScope(callbackScope: any):void;
        setOnRecognized(onRecognized: any):void;
    }
    export class Rotate extends Ext.event.gesture.MultiTouch {
        constructor(config: any);
    }
    export class SingleTouch extends Ext.event.gesture.Recognizer {
        constructor(config: any);
    }
    export class Swipe extends Ext.event.gesture.SingleTouch {
        constructor(config: any);
        getMaxDuration():number;
        getMaxOffset():number;
        getMinDistance():number;
        setMaxDuration(maxDuration: number):void;
        setMaxOffset(maxOffset: number):void;
        setMinDistance(minDistance: number):void;
    }
    export class Tap extends Ext.event.gesture.SingleTouch {
        moveDistance: number;
        constructor(config: any);
        getMoveDistance():number;
        setMoveDistance(moveDistance: number):void;
    }
}
declare module Ext.event.publisher {
    export class Dom extends Ext.event.publisher.Publisher {
        handledDomEvents: any[];
        constructor();
        reset():void;
    }
    export class ElementPaint extends Ext.event.publisher.Publisher {
        constructor();
    }
    export class ElementSize extends Ext.event.publisher.Publisher {
        constructor();
    }
    export class Focus extends Ext.event.publisher.Dom {
        constructor();
    }
    export class Gesture extends Ext.event.publisher.Dom {
        constructor(config: any);
    }
    export class Publisher extends Ext.Base {
        handledEvents: any[];
        static publishers: any;
        static publishersByEvent: any;
        constructor();
        registerEvents(events?: string[]):void;
    }
}
declare module Ext.fx {
    export class Animation extends Ext.Base {
        type: string;
    }
    export class Runner extends Ext.Base {
        constructor();
    }
    export class State extends Ext.Base {
        constructor(data: any);
    }
}
declare module Ext.fx.animation {
    export class Abstract extends Ext.Evented {
        before: any;
        easing: string;
        constructor();
        getAfter():any;
        getBefore():any;
        getCallback():any;
        getDelay():number;
        getDirection():string;
        getDuration():number;
        getEasing():string;
        getElement():any;
        getIteration():number;
        getOnBeforeEnd():any;
        getOnBeforeStart():any;
        getOnEnd():any;
        getPreserveEndState():boolean;
        getReplacePrevious():boolean;
        getReverse():any;
        getScope():any;
        setAfter(after: any):void;
        setBefore(before: any):void;
        setCallback(callback: any):void;
        setDelay(delay: number):void;
        setDirection(direction: string):void;
        setDuration(duration: number):void;
        setEasing(easing: string):void;
        setElement(element: any):void;
        setIteration(iteration: number):void;
        setName(name: string):void;
        setOnBeforeEnd(onBeforeEnd: any):void;
        setOnBeforeStart(onBeforeStart: any):void;
        setOnEnd(onEnd: any):void;
        setPreserveEndState(preserveEndState: boolean):void;
        setReplacePrevious(replacePrevious: boolean):void;
        setReverse(reverse: any):void;
        setScope(scope: any):void;
    }
    export class Cube extends Ext.fx.animation.Abstract {
        direction: string;
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class Fade extends Ext.fx.animation.Abstract {
        out: boolean;
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class FadeOut extends Ext.fx.animation.Fade {
        constructor();
    }
    export class Flip extends Ext.fx.animation.Abstract {
        direction: string;
        constructor();
        getHalf():boolean;
        getOut():any;
        setHalf(half: boolean):void;
        setOut(out: any):void;
    }
    export class Pop extends Ext.fx.animation.Abstract {
        out: boolean;
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class PopOut extends Ext.fx.animation.Pop {
        constructor();
    }
    export class Slide extends Ext.fx.animation.Abstract {
        direction: string;
        offset: number;
        out: boolean;
        constructor();
        getIsElementBoxFit():boolean;
        getOffset():number;
        getOut():boolean;
        getUseCssTransform():boolean;
        setContainerBox(containerBox: string):void;
        setElementBox(elementBox: string):void;
        setIsElementBoxFit(isElementBoxFit: boolean):void;
        setOffset(offset: number):void;
        setOut(out: boolean):void;
        setUseCssTransform(useCssTransform: boolean):void;
    }
    export class SlideOut extends Ext.fx.animation.Slide {
        constructor();
    }
    export class Wipe extends Ext.fx.Animation {
        direction: string;
        easing: string;
        out: boolean;
        getDirection():string;
        getEasing():string;
        getOut():boolean;
        setDirection(direction: string):void;
        setEasing(easing: string):void;
        setOut(out: boolean):void;
    }
    export class WipeOut extends Ext.fx.animation.Wipe {
    }
}
declare module Ext.fx.easing {
    export class Abstract extends Ext.Base {
        constructor(config: any);
        getStartTime():number;
        getStartValue():number;
        setStartTime(startTime: number):void;
        setStartValue(startValue: number):void;
    }
    export class Bounce extends Ext.fx.easing.Abstract {
        constructor(config: any);
        getAcceleration():number;
        getSpringTension():number;
        getStartVelocity():number;
        setAcceleration(acceleration: number):void;
        setSpringTension(springTension: number):void;
        setStartVelocity(startVelocity: number):void;
    }
    export class BoundMomentum extends Ext.fx.easing.Abstract {
        bounce: any;
        minVelocity: number;
        momentum: any;
        startVelocity: number;
        constructor(config: any);
        getBounce():any;
        getMaxMomentumValue():number;
        getMinMomentumValue():number;
        getMinVelocity():number;
        getMomentum():any;
        getStartVelocity():number;
        setBounce(bounce: any):void;
        setMaxMomentumValue(maxMomentumValue: number):void;
        setMinMomentumValue(minMomentumValue: number):void;
        setMinVelocity(minVelocity: number):void;
        setMomentum(momentum: any):void;
        setStartVelocity(startVelocity: number):void;
    }
    export class EaseIn extends Ext.fx.easing.Linear {
        constructor(config: any);
        getExponent():number;
        setExponent(exponent: number):void;
    }
    export class EaseOut extends Ext.fx.easing.Linear {
        constructor(config: any);
        getExponent():number;
        setExponent(exponent: number):void;
    }
    export class Easing extends Ext.Base {
        constructor(easing: any);
    }
    export class Linear extends Ext.fx.easing.Abstract {
        constructor(config: any);
        getDuration():number;
        getEndValue():number;
        setDuration(duration: number):void;
        setEndValue(endValue: number):void;
    }
    export class Momentum extends Ext.fx.easing.Abstract {
        constructor(config: any);
        getAcceleration():number;
        getFriction():number;
        getStartVelocity():number;
        setAcceleration(acceleration: number):void;
        setFriction(friction: number):void;
        setStartVelocity(startVelocity: number):void;
    }
}
declare module Ext.fx.layout {
    export class Card extends Ext.Base {
        constructor(config: any);
    }
}
declare module Ext.fx.layout.card {
    export class Abstract extends Ext.Evented {
        constructor(config: any);
        getDirection():string;
        getDuration():any;
        getLayout():any;
        getReverse():any;
        setDirection(direction: string):void;
        setDuration(duration: any):void;
        setLayout(layout: any):void;
        setReverse(reverse: any):void;
    }
    export class Cover extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Cube extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Fade extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Flip extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Pop extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Reveal extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Scroll extends Ext.fx.layout.card.Abstract {
        constructor(config: any);
    }
    export class ScrollCover extends Ext.fx.layout.card.Scroll {
        constructor(config: any);
    }
    export class ScrollReveal extends Ext.fx.layout.card.Scroll {
        constructor(config: any);
    }
    export class Slide extends Ext.fx.layout.card.Style {
        constructor(config: any);
    }
    export class Style extends Ext.fx.layout.card.Abstract {
        constructor(config: any);
        getInAnimation():any;
        getOutAnimation():any;
        setInAnimation(inAnimation: any):void;
        setOutAnimation(outAnimation: any):void;
    }
}
declare module Ext.fx.runner {
    export class Css extends Ext.Evented {
        constructor();
    }
    export class CssAnimation extends Ext.fx.runner.Css {
        constructor();
    }
    export class CssTransition {
        static hasListeners: any;
        static isObservable: boolean;
        static addAfterListener():void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static removeAfterListener():void;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
}
declare module Ext.list {
    export class AbstractTreeItem extends Ext.Widget {
        expandable: boolean;
        expanded: boolean;
        floated: boolean;
        iconCls: string;
        iconClsProperty: string;
        leaf: boolean;
        loading: boolean;
        node: Ext.data.TreeModel;
        over: number;
        owner: Ext.list.Tree;
        parentItem: Ext.list.AbstractTreeItem;
        selected: boolean;
        selectedParent: boolean;
        text: string;
        textProperty: string;
        constructor(config: any);
        collapse():void;
        expand():void;
        getExpandable():boolean;
        getExpanded():boolean;
        getFloated():boolean;
        getIconCls():string;
        getIconClsProperty():string;
        getIndent():any;
        getLeaf():boolean;
        getLoading():boolean;
        getNode():Ext.data.TreeModel;
        getOver():number;
        getOwner():Ext.list.Tree;
        getParentItem():Ext.list.AbstractTreeItem;
        getSelected():boolean;
        getSelectedParent():boolean;
        getText():string;
        getTextProperty():string;
        getToolElement():Ext.dom.Element;
        insertItem(item: Ext.list.AbstractTreeItem, refItem: Ext.list.AbstractTreeItem):void;
        isExpanded():boolean;
        isSelectionEvent(e: Ext.event.Event):boolean;
        isToggleEvent(e: Ext.event.Event):boolean;
        nodeCollapse(node: Ext.data.TreeModel):void;
        nodeExpand(node: Ext.data.TreeModel):void;
        nodeInsert(node: Ext.data.TreeModel, refNode: Ext.data.TreeModel):void;
        nodeRemove(node: Ext.data.TreeModel):void;
        nodeUpdate(node: Ext.data.TreeModel, modifiedFieldNames: string[]):void;
        removeItem(item: Ext.list.AbstractTreeItem):void;
        setExpandable(expandable: boolean):void;
        setExpanded(expanded: boolean):void;
        setFloated(floated: boolean):void;
        setIconCls(iconCls: string):void;
        setIconClsProperty(iconClsProperty: string):void;
        setIndent(indent: any):void;
        setLeaf(leaf: boolean):void;
        setLoading(loading: boolean):void;
        setNode(node: Ext.data.TreeModel):void;
        setOver(over: number):void;
        setOwner(owner: Ext.list.Tree):void;
        setParentItem(parentItem: Ext.list.AbstractTreeItem):void;
        setSelected(selected: boolean):void;
        setSelectedParent(selectedParent: boolean):void;
        setText(text: string):void;
        setTextProperty(textProperty: string):void;
    }
    export class RootTreeItem extends Ext.list.AbstractTreeItem {
        isRootListItem: boolean;
        constructor(config: any);
    }
    export class Tree extends Ext.Widget {
        defaults: any;
        expanderOnly: boolean;
        selectOnExpander: boolean;
        selection: Ext.data.TreeModel;
        singleExpand: boolean;
        store: any;
        constructor(config: any);
        getAnimation():any;
        getDefaults():any;
        getExpanderFirst():boolean;
        getExpanderOnly():boolean;
        getHighlightPath():any;
        getIconSize():any;
        getIndent():any;
        getItem(node: Ext.data.TreeModel):Ext.list.AbstractTreeItem;
        getItemConfig(node: Ext.data.TreeModel, parent: Ext.list.AbstractTreeItem):any;
        getMicro():any;
        getOverItem():any;
        getSelectOnExpander():boolean;
        getSelection():Ext.data.TreeModel;
        getSingleExpand():boolean;
        getStore():any;
        getUi():any;
        setAnimation(animation: any):void;
        setDefaults(defaults: any):void;
        setExpanderFirst(expanderFirst: boolean):void;
        setExpanderOnly(expanderOnly: boolean):void;
        setHighlightPath(highlightPath: any):void;
        setIconSize(iconSize: any):void;
        setIndent(indent: any):void;
        setMicro(micro: any):void;
        setOverItem(overItem: any):void;
        setSelectOnExpander(selectOnExpander: boolean):void;
        setSelection(selection: Ext.data.TreeModel):void;
        setSingleExpand(singleExpand: boolean):void;
        setStore(store: any):void;
        setUi(ui: any):void;
    }
    export class TreeItem extends Ext.list.AbstractTreeItem {
        rowCls: string;
        rowClsProperty: string;
        isTreeListItem: boolean;
        constructor(config: any);
        getRowCls():string;
        setRowCls(rowCls: string):void;
    }
}
declare module Ext.mixin {
    export class Accessible extends Ext.Mixin {
        ariaAttributes: any;
        ariaDescribedBy: string;
        ariaLabel: string;
        ariaLabelledBy: string;
        ariaRole: string;
        getAriaAttributes():any;
        setAriaAttributes(ariaAttributes: any):void;
    }
    export class Bindable extends Ext.Base {
        bind: any;
        controller: any;
        defaultListenerScope: boolean;
        publishes: any;
        reference: string;
        session: any;
        twoWayBindable: any;
        viewModel: any;
        defaultBindProperty: string;
        getBind():any;
        getController():Ext.app.ViewController;
        getDefaultListenerScope():boolean;
        getPublishes():any;
        getReference():string;
        getSession():any;
        getTwoWayBindable():any;
        getViewModel():any;
        initInheritedState(inheritedState: any):void;
        isSyncing(name: string):boolean;
        lookupController(skipThis?: boolean):Ext.app.ViewController;
        lookupSession(skipThis?: boolean):Ext.data.Session;
        lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        publishState(property?: string, value?: any):void;
        setBind(bind: any):void;
        setController(controller: any):void;
        setDefaultListenerScope(defaultListenerScope: boolean):void;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setSession(session: any):void;
        setTwoWayBindable(twoWayBindable: any):void;
        setViewModel(viewModel: any):void;
    }
    export class ComponentDelegation extends Ext.Mixin {
    }
    export class Container extends Ext.Mixin {
        referenceHolder: boolean;
        isContainer: boolean;
        getReferenceHolder():boolean;
        getReferences():any;
        lookup(key: string):any;
        lookupReference(key: string):any;
        setReferenceHolder(referenceHolder: boolean):void;
    }
    export class Factoryable extends Ext.Base {
        factoryConfig: any;
    }
    export class Hookable extends Ext.Mixin {
    }
    export class Identifiable extends Ext.Base {
        getId():string;
    }
    export class Inheritable extends Ext.Mixin {
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getRefOwner():void;
        initInheritedState(inheritedState: any, inheritedStateInner?: any):void;
        onInheritedAdd(instanced: boolean):void;
        onInheritedRemove(destroying: boolean):void;
        resolveListenerScope(defaultScope?: any):any;
        resolveSatelliteListenerScope(satellite: Ext.mixin.Observable, defaultScope?: any):any;
    }
    export class Mashup extends Ext.Base {
    }
    export class Observable extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static capture(o: Ext.util.Observable, fn: Function, scope?: any):void;
        static observe(c: Function, listeners: any):void;
        static releaseCapture(o: Ext.util.Observable):void;
    }
    export class Queryable extends Ext.Base {
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):any;
        queryBy(fn: Function, scope?: any):any;
        queryById(id: string):any;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class Responsive extends Ext.Base {
        responsiveConfig: any;
        responsiveFormulas: any;
    }
    export class Selectable extends Ext.Mixin {
        allowDeselect: boolean;
        deselectOnContainerClick: boolean;
        disableSelection: boolean;
        locked: boolean;
        mode: string;
        selection: Ext.data.Model;
        constructor();
        clearSelections():void;
        deselect(records: number|any[]|Ext.data.Model, suppressEvent: boolean):void;
        deselectAll(supress: any):void;
        doDeselect(records: Ext.data.Model|number, suppressEvent: boolean):void;
        doSelect(records: Ext.data.Model|number, keepExisting: boolean, suppressEvent: boolean):void;
        getAllowDeselect():boolean;
        getCount():number;
        getDeselectOnContainerClick():boolean;
        getDisableSelection():boolean;
        getLastSelected():any[];
        getMode():string;
        getPublishes():any;
        getSelection():Ext.data.Model;
        getSelectionCount():number;
        getSelectionMode():string;
        getSelections():Ext.data.Model[];
        getTwoWayBindable():any;
        hasSelection():boolean;
        isLocked():boolean;
        isSelected(record: Ext.data.Model|number):boolean;
        select(records: Ext.data.Model|any[]|number, keepExisting: boolean, suppressEvent: boolean):void;
        selectAll(silent: boolean):void;
        selectRange(startRecord: number, endRecord: number, keepExisting?: boolean):void;
        setAllowDeselect(allowDeselect: boolean):void;
        setDeselectOnContainerClick(deselectOnContainerClick: boolean):void;
        setDisableSelection(disableSelection: boolean):void;
        setLastFocused():void;
        setMode(mode: string):void;
        setPublishes(publishes: any):void;
        setSelection(selection: Ext.data.Model):void;
        setTwoWayBindable(twoWayBindable: any):void;
        updateLastFocused(newRecord: Ext.data.Model, oldRecord: Ext.data.Model):void;
    }
    export class Templatable extends Ext.Mixin {
    }
    export class Traversable extends Ext.Mixin {
        getParent():any;
        hasParent():boolean;
    }
}
declare module Ext.perf {
    export class Accumulator extends Ext.Base {
    }
    export class Monitor {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.plugin {
    export class Abstract extends Ext.Base {
        pluginId: string;
        isPlugin: boolean;
        constructor(config?: any);
        clonePlugin(overrideCfg?: any):void;
        getCmp():any;
        init(client: any):void;
        setCmp(cmp: any):void;
    }
    export class LazyItems extends Ext.plugin.Abstract {
        constructor(config?: any);
    }
}
declare module Ext.promise {
    export class Consequence extends Ext.Base {
        promise: Ext.promise.Promise;
        constructor(onFulfilled: Function, onRejected: Function);
        trigger(action: string, value: any):void;
        update(value: any):void;
    }
    export class Deferred extends Ext.Base {
        promise: Ext.promise.Promise;
        constructor();
        reject(reason: Error):void;
        resolve(value: any):void;
        then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function):any;
        update(progress: any):void;
    }
    export class Promise extends Ext.Base {
        static CancellationError: any;
        constructor(owner: Ext.promise.Deferred);
        always(onCompleted: Function, scope: any):Ext.promise.Promise;
        cancel(reason: Error):void;
        done():void;
        log(identifier: string):Ext.promise.Promise;
        otherwise(onRejected: Function, scope: any):Ext.promise.Promise;
        then(onFulfilled: Function, onRejected: Function, onProgress: Function, scope: any):Ext.promise.Promise;
    }
}
declare module Ext.scroll {
    export class DomScroller extends Ext.scroll.Scroller {
        constructor(config: any);
    }
    export class Indicator extends Ext.Widget {
        hideDelay: number;
        minLength: number;
        constructor(config: any);
        getHideDelay():number;
        getMinLength():number;
        hide():void;
        setHideDelay(hideDelay: number):void;
        setMinLength(minLength: number):void;
        setValue(value: number):void;
        show():void;
    }
    export class Scroller extends Ext.Evented {
        direction: any;
        directionLock: boolean;
        disabled: boolean;
        element: string|HTMLElement|Ext.dom.Element;
        indicators: any;
        momentumEasing: any;
        slotSnapSize: any;
        x: boolean|string;
        y: boolean|string;
        factoryConfig: any;
        constructor(config: any);
        ''(axis: string):number;
        addPartner(partner: Ext.scroll.Scroller, axis?: string):void;
        getClientSize():any;
        getDirection():any;
        getDirectionLock():boolean;
        getDisabled():boolean;
        getElement():string|HTMLElement|Ext.dom.Element;
        getIndicators():any;
        getMaxPosition():any;
        getMaxUserPosition():any;
        getMomentumEasing():any;
        getPosition():any;
        getScrollbarSize():any;
        getScroller():Ext.scroll.Scroller;
        getSize():any;
        getSlotSnapSize():any;
        getSpacerXY():any;
        getX():boolean|string;
        getY():boolean|string;
        isInView(el: string|HTMLElement|Ext.dom.Element):any;
        refresh(immediate: boolean):Ext.scroll.Scroller;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        scrollTo(x: number, y: number, animation?: any):Ext.scroll.Scroller;
        setDirection(direction: any):void;
        setDirectionLock(directionLock: boolean):void;
        setDisabled(disabled: boolean):void;
        setElement(element: string|HTMLElement|Ext.dom.Element):void;
        setIndicators(indicators: any):void;
        setMomentumEasing(momentumEasing: any):void;
        setSlotSnapSize(slotSnapSize: any):void;
        setSpacerXY(spacerXY: any):void;
        setX(x: boolean|string):void;
        setY(y: boolean|string):void;
    }
    export class TouchScroller extends Ext.scroll.Scroller {
        constructor(config: any);
        setSize(size: any):void;
    }
}
declare module Ext.util {
    export class AbstractMixedCollection extends Ext.Base {
        allowFunctions: boolean;
        listeners: any;
        hasListeners: any;
        isMixedCollection: boolean;
        isObservable: boolean;
        constructor(allowFunctions: any, keyFn: any);
        add(key: any, obj?: any):any;
        addAfterListener():void;
        addAll(objs: any):void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.MixedCollection;
        collect(property: string, root?: string, allowBlank?: boolean):any[];
        contains(o: any):boolean;
        containsKey(key: string):boolean;
        each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        enableBubble(eventNames: string|string[]):void;
        filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        find():void;
        findBy(fn: (item: any, key: string) => any, scope?: any):any;
        findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        first():any;
        get(key: string|number):any;
        getAt(index: number):any;
        getByKey(key: string|number):any;
        getCount():number;
        getKey(item: any):any;
        getRange(startIndex?: number, endIndex?: number):any[];
        hasListener(eventName: string):boolean;
        indexOf(o: any):number;
        indexOfKey(key: string):number;
        insert(index: number, key: any, o?: any):any;
        isSuspended(event?: string):boolean;
        last():any;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        remove(o: any):any;
        removeAfterListener():void;
        removeAll(items?: any[]):Ext.util.MixedCollection;
        removeAt(index: number):any;
        removeAtKey(key: string):any;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        removeRange(index: number, removeCount?: number):any;
        reorder(mapping: any):void;
        replace(key: string, o: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setListeners(listeners: any):void;
        sum(property: string, root?: string, start?: number, end?: number):number;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        updateKey(oldKey: any, newKey: any):void;
    }
    export class Bag extends Ext.Base {
        generation: number;
        length: number;
        constructor();
    }
    export class Base64 {
        static decode(input: any):string;
        static destroy():void;
        static encode(input: any):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Cache {
        maxSize: number;
        count: number;
        clear():void;
        each(fn: (key: string, value: any) => any, scope?: any):void;
        evict(key: string, value: any):void;
        get(key: string, ...args: any[]):any;
        miss(key: string, ...args: any[]):void;
    }
    export class Collection extends Ext.Base {
        decoder: Function;
        defaultSortDirection: string;
        extraKeys: any;
        filters: any[]|Ext.util.FilterCollection;
        grouper: any;
        groups: Ext.util.GroupCollection;
        keyFn: Function;
        listeners: any;
        multiSortLimit: number;
        rootProperty: string;
        sorters: any[]|Ext.util.SorterCollection;
        source: Ext.util.Collection;
        filtered: boolean;
        generation: number;
        grouped: boolean;
        hasListeners: any;
        isCollection: boolean;
        isObservable: boolean;
        length: number;
        sorted: boolean;
        updating: number;
        add(item: any):any;
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        aggregate(property: string, operation: string|((items: any[], values: any[]) => any), begin?: number, end?: number, scope?: any):any;
        aggregateByGroup(property: string, operation: string|((items: any[], values: any[]) => any), scope?: any):any;
        average(property: string, begin?: number, end?: number):any;
        averageByGroup(property: string):any;
        beginUpdate():void;
        bounds(property: string, begin?: number, end?: number):any[];
        boundsByGroup(property: string):any;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.Collection;
        collect(property: string, root?: string, allowNull?: boolean):any[];
        contains(item: any):boolean;
        containsKey(key: string):boolean;
        count():number;
        countByGroup():any;
        createFiltered(property: Ext.util.Filter[]|string|Function, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        decodeRemoveItems():void;
        each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        enableBubble(eventNames: string|string[]):void;
        endUpdate():void;
        extremes(property: string, begin?: number, end?: number):any[];
        extremesByGroup(property: string):any;
        filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.Collection;
        find(property: string, value: string|RegExp, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):any;
        findBy(fn: (item: any, key: string) => any, scope?: any, start?: number):any;
        findIndex(property: string, value: string|RegExp, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):number;
        findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        first(grouped?: boolean):any;
        get(key: string|number):any;
        getAt(index: number):any;
        getAutoFilter():boolean;
        getAutoSort():boolean;
        getByKey(key: string|number):any;
        getCount():number;
        getDecoder():Function;
        getDefaultSortDirection():string;
        getExtraKeys():any;
        getFilterFn():Function;
        getFilters(autoCreate?: any):Ext.util.FilterCollection;
        getGrouper():any;
        getKey(item: any):any;
        getMultiSortLimit():number;
        getRange(begin?: number, end?: number):any[];
        getRootProperty():string;
        getSortFn():Function;
        getSorters(autoCreate?: any):Ext.util.SorterCollection;
        getSource():Ext.util.Collection;
        getValues(property: string, root?: string, start?: number, end?: number):any[];
        hasListener(eventName: string):boolean;
        indexOf(item: any):number;
        indexOfKey(key: any):number;
        insert(index: number, item: any):any;
        isItemFiltered(item: any):boolean;
        isSuspended(event?: string):boolean;
        itemChanged(item: any, modified?: string[], oldKey?: string|number):void;
        last(grouped?: boolean):any;
        max(property: string, begin?: number, end?: number):any;
        maxByGroup(property: string):any;
        maxItem(property: string, begin?: number, end?: number):any;
        maxItemByGroup(property: string):any;
        min(property: string, begin?: number, end?: number):any;
        minByGroup(property: string):any;
        minItem(property: string, begin?: number, end?: number):any;
        minItemByGroup(property: string):any;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onFilterChange(filters: Ext.util.FilterCollection):void;
        onSortChange(sorters: Ext.util.SorterCollection):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        remove(item: any):number;
        removeAfterListener():void;
        removeAll():Ext.util.Collection;
        removeAt(index: number, count?: number):any;
        removeBeforeListener():void;
        removeByKey(key: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        replaceAll(item: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setAutoFilter(autoFilter: boolean):void;
        setAutoSort(autoSort: boolean):void;
        setDecoder(decoder: Function):void;
        setDefaultSortDirection(defaultSortDirection: string):void;
        setExtraKeys(extraKeys: any):void;
        setFilters(filters: any[]|Ext.util.FilterCollection):void;
        setGrouper(grouper: any):void;
        setGroups(groups: Ext.util.GroupCollection):void;
        setListeners(listeners: any):void;
        setMultiSortLimit(multiSortLimit: number):void;
        setRootProperty(rootProperty: string):void;
        setSorters(sorters: any[]|Ext.util.SorterCollection):void;
        setSource(source: Ext.util.Collection):void;
        sort(property?: string|Function|Ext.util.Sorter[], direction?: string, mode?: string):Ext.util.Collection;
        sortBy(sorterFn: Function):void;
        sortData(data: any[]):any[];
        sortItems(sortFn: Function):void;
        splice(index: number, toRemove: number|any[], toAdd?: any[]):void;
        sum(property: string, begin?: number, end?: number):any;
        sumByGroup(property: string):any;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        update(fn: (collection: Ext.util.Collection) => any, scope?: any):any;
        updateKey(item: any, oldKey: string):void;
    }
    export class CollectionKey extends Ext.Base {
        keyFn: Function|string;
        property: string;
        rootProperty: string;
        name: string;
        get(key: any):any;
        getCollection():any;
        getId():string;
        getKeyFn():Function|string;
        getProperty():string;
        getUnique():boolean;
        indexOf(key: any, startAt?: number):number;
        setCollection(collection: any):void;
        setKeyFn(keyFn: Function|string):void;
        setProperty(property: string):void;
        setRootProperty(rootProperty: string):void;
        setUnique(unique: boolean):void;
        updateKey(item: any, oldKey: string):void;
    }
    export class CSV {
        static decode(input: string, delimiter?: string):string[][];
        static destroy():void;
        static encode(input: any[][], delimiter?: string):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class DelayedTask {
        id: number;
        constructor(fn?: Function, scope?: any, args?: any[], cancelOnDelay?: boolean);
        cancel():void;
        delay(newDelay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
    }
    export class DelimitedValue extends Ext.Base {
        dateFormat: string;
        delimiter: string;
        lineBreak: string;
        quote: string;
        constructor(config: any);
        decode(input: string, delimiter?: string):string[][];
        encode(input: any[][], delimiter?: string):string;
    }
    export class Event extends Ext.Base {
        isEvent: boolean;
    }
    export class Filter extends Ext.Base {
        anyMatch: boolean;
        caseSensitive: boolean;
        disableOnEmpty: boolean;
        disabled: boolean;
        exactMatch: boolean;
        filterFn: Function;
        id: string;
        operator: string;
        property: string;
        root: string;
        scope: any;
        value: any;
        constructor(config: any);
        getAnyMatch():boolean;
        getCaseSensitive():boolean;
        getDisableOnEmpty():boolean;
        getDisabled():boolean;
        getExactMatch():boolean;
        getOperator():string;
        getProperty():string;
        getRoot():string;
        getState():any;
        getValue():any;
        serialize():any;
        setAnyMatch(anyMatch: boolean):void;
        setCaseSensitive(caseSensitive: boolean):void;
        setDisableOnEmpty(disableOnEmpty: boolean):void;
        setDisabled(disabled: boolean):void;
        setExactMatch(exactMatch: boolean):void;
        setFilterFn(filterFn: Function):void;
        setId(id: string):void;
        setOperator(operator: string):void;
        setProperty(property: string):void;
        setRoot(root: string):void;
        setValue(value: any):void;
        static createFilterFn(filters: Ext.util.Filter[]|Ext.util.Collection):Function;
    }
    export class FilterCollection extends Ext.util.Collection {
        filterFn: any;
        constructor(config: any);
        filterData(data: any[]):any[];
    }
    export class Format {
        static currencyAtEnd: boolean;
        static currencyPrecision: number;
        static currencySign: string;
        static decimalSeparator: string;
        static defaultDateFormat: string;
        static percentSign: string;
        static thousandSeparator: string;
        static attributes(attributes: any):void;
        static capitalize(string: string):string;
        static currency(value: number|string, sign?: string, decimals?: number, end?: boolean):string;
        static date(value: string|Date, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue?: string):string;
        static destroy():void;
        static ellipsis(value: string, length: number, word?: boolean):string;
        static escape(string: string):string;
        static escapeRegex(string: string):string;
        static fileSize(size: number|string):string;
        static format(string: string, ...values: any[]):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hex(value: number, digits: number):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static leftPad(string: string, size: number, character?: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(v: string):string;
        static number(v: number, formatString: string):string;
        static numberRenderer(format: string):Function;
        static or(value: boolean, orValue: any):void;
        static parseBox(box: number|string):any;
        static percent(value: number, formatString?: string):string;
        static pick(value: boolean, firstValue: any, secondValue: any):void;
        static plural(value: number, singular: string, plural?: string):string;
        static round(value: number|string, precision?: number):number;
        static setConfig(name: any, value?: any):Ext.Base;
        static stripScripts(value: any):string;
        static stripTags(value: any):string;
        static substr(value: string, start: number, length: number):string;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static undef(value: any):any;
        static uppercase(value: string):string;
        static usMoney(value: number|string):string;
    }
    export class Group extends Ext.util.Collection {
        getGroupKey():any;
        setGroupKey(groupKey: any):void;
    }
    export class GroupCollection extends Ext.util.Collection {
        getItemRoot():any;
        setItemRoot(itemRoot: any):void;
    }
    export class Grouper extends Ext.util.Sorter {
        groupFn: Function;
        sortProperty: string;
        constructor(config: any);
        getGroupFn():Function;
        getGroupString(item: Ext.data.Model):string;
        getSortProperty():string;
        setGroupFn(groupFn: Function):void;
        setSortProperty(sortProperty: string):void;
    }
    export class HashMap extends Ext.Base {
        keyFn: Function;
        listeners: any;
        generation: number;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(key: any, o?: any):any;
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        clear():Ext.util.HashMap;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        each(fn: (key: string, value: number, length: number) => any, scope?: any):Ext.util.HashMap;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        get(key: string):any;
        getCount():number;
        getKey(o: any):string;
        getKeyFn():Function;
        getKeys():any[];
        getValues():any[];
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        remove(o: any):boolean;
        removeAfterListener():void;
        removeAtKey(key: string):boolean;
        removeBeforeListener():void;
        removeByKey(key: string):boolean;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        replace(key: string, value: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setKeyFn(keyFn: Function):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class History {
        static hasListeners: any;
        static isObservable: boolean;
        static useTopWindow: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addAfterListener():void;
        static addBeforeListener():void;
        static addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static back():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        static forward():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: any, prefix?: string):any;
        static removeAfterListener():void;
        static removeBeforeListener():void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Inflector {
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static isTransnumeral(word: string):boolean;
        static ordinalize(number: number):string;
        static plural(matcher: RegExp, replacer: string):void;
        static pluralize(word: string):string;
        static setConfig(name: any, value?: any):Ext.Base;
        static singular(matcher: RegExp, replacer: string):void;
        static singularize(word: string):string;
    }
    export class ItemCollection extends Ext.util.MixedCollection {
        constructor(config: any);
    }
    export class LocalStorage extends Ext.Base {
        flushDelay: number;
        id: string;
        lazyKeys: boolean;
        prefix: string;
        session: boolean;
        static supported: boolean;
        constructor(config: any);
        clear():void;
        getItem(key: string):string;
        getKeys():string[];
        key(index: number):string;
        release():void;
        removeItem(key: string):void;
        save(delay?: number):void;
        setItem(key: string, value: string):void;
        static get(id: any):Ext.util.LocalStorage;
    }
    export class LruCache extends Ext.util.HashMap {
        maxSize: number;
        constructor(config?: any);
        getMaxSize():number;
        prune():void;
        setMaxSize(maxSize: number):void;
    }
    export class MixedCollection extends Ext.util.AbstractMixedCollection {
        defaultSortDirection: string;
        multiSortLimit: number;
        sortRoot: string;
        sorters: Ext.util.Sorter[]|any[];
        isSortable: boolean;
        constructor(config: any);
        findInsertionIndex(newItem: any, sorterFn?: Function):number;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        getSorterCount():void;
        getSorters():Ext.util.Sorter[]|any[];
        setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class ObjectTemplate extends Ext.Base {
        constructor(template: any, options?: any);
        apply(context: any):any;
        compile(template: any):Function;
    }
    export class Observable extends Ext.mixin.Observable {
    }
    export class Offset extends Ext.Base {
        constructor(x: any, y: any);
    }
    export class Operators {
    }
    export class PaintMonitor extends Ext.Base {
        constructor(config: any);
    }
    export class Point extends Ext.util.Region {
        constructor(x?: number, y?: number);
        clone():Ext.util.Point;
        isCloseTo(point: any, threshold: any):boolean;
        isContainedBy(region: any):boolean;
        isWithin():boolean;
        roundedEquals(point: any):boolean;
        toString():string;
        translate(x: any, y: number):Ext.util.Region;
        static fromEvent(e: Event):Ext.util.Point;
        static fromTouch(touch: Event):Ext.util.Point;
    }
    export class Positionable extends Ext.Base {
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getBox(contentBox?: boolean, local?: boolean):any;
        getClientRegion():Ext.util.Region;
        getConstrainRegion():void;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getOffsetsTo(offsetsTo: Ext.util.Positionable|HTMLElement|string):number[];
        getRegion():Ext.util.Region;
        getViewRegion():Ext.util.Region;
        getX():number;
        getXY():number[];
        getY():number;
        move(direction: string, distance: number):void;
        setBox(box: any):Ext.util.Positionable;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: number|any[], y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setX(x: number):Ext.util.Positionable;
        setXY(pos: number[]):Ext.util.Positionable;
        setY(y: number):Ext.util.Positionable;
        translatePoints(x: number|any[], y?: number):any;
    }
    export class Region extends Ext.Base {
        constructor(top: number, right: number, bottom: number, left: number);
        adjust(top: number, right: number, bottom: number, left: number):Ext.util.Region;
        constrainTo(targetRegion: Ext.util.Region):Ext.util.Region;
        contains(region: Ext.util.Region):boolean;
        copy():Ext.util.Region;
        copyFrom(p: Ext.util.Region):Ext.util.Region;
        equals(region: Ext.util.Region):boolean;
        getOutOfBoundOffset(axis?: string, p?: Ext.util.Point):Ext.util.Offset;
        getOutOfBoundOffsetX(p: number):number;
        getOutOfBoundOffsetY(p: number):number;
        intersect(region: Ext.util.Region):Ext.util.Region|boolean;
        isOutOfBound(axis?: string, p?: Ext.util.Point|number):boolean;
        isOutOfBoundX(p: number):boolean;
        isOutOfBoundY(p: number):boolean;
        round():Ext.util.Region;
        translateBy(x: any, y: number):Ext.util.Region;
        union(region: Ext.util.Region):Ext.util.Region;
        static from(o: any):Ext.util.Region;
        static getRegion(el: string|HTMLElement|Ext.dom.Element):Ext.util.Region;
    }
    export class Schedulable extends Ext.Base {
        constructor();
        getScheduler():Ext.util.Scheduler;
        schedule():void;
        sort():void;
        unschedule():void;
    }
    export class Scheduler extends Ext.Base {
        listeners: any;
        preSort: string|Function;
        tickDelay: number;
        hasListeners: any;
        isObservable: boolean;
        suspendOnNotify: boolean;
        constructor(config: any);
        addAfterListener():void;
        addBeforeListener():void;
        addListener(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        adjustBusy(adjustment: number):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope?: any, options?: any, order?: string):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        fireEventedAction(eventName: string, args: any[], fn: Function|string, scope?: any, fnArgs?: any[]|boolean):void;
        getPreSort():string|Function;
        getTickDelay():number;
        hasListener(eventName: string):boolean;
        isBusy():boolean;
        isIdle():boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function|string, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        notify():void;
        on(eventName: any, fn?: Function|string, scope?: any, options?: any, order?: string):any;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(origin: any, events: any, prefix?: string):any;
        removeAfterListener():void;
        removeBeforeListener():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setListeners(listeners: any):void;
        setPreSort(preSort: string|Function):void;
        setTickDelay(tickDelay: number):void;
        sortItem(item: any):Ext.util.Scheduler;
        sortItems(items: any):Ext.util.Scheduler;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class SizeMonitor extends Ext.Base {
        constructor(config: any);
    }
    export class Sortable extends Ext.Base {
        defaultSortDirection: string;
        multiSortLimit: number;
        sortRoot: string;
        sorters: Ext.util.Sorter[]|any[];
        isSortable: boolean;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        getSorterCount():void;
        getSorters():Ext.util.Sorter[]|any[];
        setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static createComparator(sorters: Ext.util.Sorter[]):Function;
    }
    export class Sorter extends Ext.Base {
        direction: string;
        id: any;
        property: string;
        root: string;
        sorterFn: Function;
        transform: Function;
        constructor(config: any);
        getDirection():string;
        getProperty():string;
        getRoot():string;
        getSorterFn():Function;
        getState():any;
        getTransform():Function;
        serialize():any;
        setDirection(direction: string):void;
        setId(id: any):void;
        setProperty(property: string):void;
        setRoot(root: string):void;
        setSorterFn(sorterFn: Function):void;
        setTransform(transform: Function):void;
        toggle():void;
        static createComparator(sorters: Ext.util.Sorter[]|Ext.util.Collection, nextFn?: any):Function;
    }
    export class SorterCollection extends Ext.util.Collection {
        sortFn: any;
        constructor(config: any);
    }
    export class TaskManager {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static newTask(config: any):Ext.util.TaskRunner.Task;
        static setConfig(name: any, value?: any):Ext.Base;
        static start(task: any):void;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class TaskRunner extends Ext.Base {
        fireIdleEvent: boolean;
        interval: number;
        constructor(interval?: any);
        newTask(config: any):Ext.util.TaskRunner.Task;
        start(task: any):void;
        stop(task: any):any;
        stopAll():void;
    }
    export class TextMetrics extends Ext.Base {
        constructor(bindTo: string|HTMLElement|Ext.dom.Element, fixedWidth?: number);
        bind(el: string|HTMLElement|Ext.dom.Element):void;
        getHeight(text: string):number;
        getSize(text: string):any;
        getWidth(text: string):number;
        setFixedWidth(width: number):void;
        static destroy():void;
        static measure(el: string|HTMLElement, text: string, fixedWidth?: number):any;
    }
    export class Translatable extends Ext.Base {
        constructor(config: any);
    }
    export class TSV {
        static decode(input: string, delimiter?: string):string[][];
        static destroy():void;
        static encode(input: any[][], delimiter?: string):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class XTemplateCompiler extends Ext.util.XTemplateParser {
        constructor(config: any);
    }
    export class XTemplateParser extends Ext.Base {
        level: number;
        constructor(config: any);
        doCase(action: string, actions: any):void;
        doDefault():void;
        doElse():void;
        doElseIf(action: string, actions: any):void;
        doEnd(type: string, actions: any):void;
        doEval(text: string):void;
        doExec(action: string, actions: any):void;
        doExpr(expr: string):void;
        doFor(action: string, actions: any):void;
        doForEach(action: string, actions: any):void;
        doIf(action: string, actions: any):void;
        doSwitch(action: string, actions: any):void;
        doTag():void;
        doText(text: string):void;
        doTpl():void;
    }
}
declare module Ext.util.TaskRunner {
    export class Task {
        destroy():void;
        restart(interval?: number):void;
        start(interval?: number):void;
        stop():void;
    }
}
declare module Ext.util.paintmonitor {
    export class Abstract extends Ext.Base {
        constructor(config: any);
        getArgs():any[];
        getCallback():any;
        getElement():any;
        getScope():any;
        setArgs(args: any[]):void;
        setCallback(callback: any):void;
        setElement(element: any):void;
        setScope(scope: any):void;
    }
    export class CssAnimation extends Ext.util.paintmonitor.Abstract {
        constructor(config: any);
    }
    export class OverflowChange extends Ext.util.paintmonitor.Abstract {
        constructor(config: any);
    }
}
declare module Ext.util.sizemonitor {
    export class Abstract extends Ext.Base {
        constructor(config: any);
        getArgs():any[];
        getCallback():any;
        getElement():any;
        getScope():any;
        setArgs(args: any[]):void;
        setCallback(callback: any):void;
        setElement(element: any):void;
        setScope(scope: any):void;
    }
    export class OverflowChange extends Ext.util.sizemonitor.Abstract {
        constructor(config: any);
    }
    export class Scroll extends Ext.util.sizemonitor.Abstract {
        constructor(config: any);
    }
}
declare module Ext.util.translatable {
    export class Abstract extends Ext.Evented {
        constructor(config: any);
        getEasing():any;
        getEasingX():any;
        getEasingY():any;
        getPosition():any;
        getUseWrapper():any;
        setEasing(easing: any):void;
        setEasingX(easingX: any):void;
        setEasingY(easingY: any):void;
        setUseWrapper(useWrapper: any):void;
    }
    export class CssPosition extends Ext.util.translatable.Dom {
        constructor(config: any);
    }
    export class CssTransform extends Ext.util.translatable.Dom {
        constructor(config: any);
    }
    export class Dom extends Ext.util.translatable.Abstract {
        constructor(config: any);
        getElement():any;
        setElement(element: any):void;
    }
    export class ScrollParent extends Ext.util.translatable.Dom {
        constructor(config: any);
    }
    export class ScrollPosition extends Ext.util.translatable.Dom {
        constructor(config: any);
    }
}
declare module Ext.ux.ajax {
    export class DataSimlet extends Ext.Base {
    }
    export class JsonSimlet extends Ext.ux.ajax.DataSimlet {
    }
    export class Simlet extends Ext.Base {
        responseHeaders: any;
        responseText: number;
        responseXML: number;
        status: number;
        statusText: string;
        exec(xhr: Ext.ux.ajax.SimXhr):any;
    }
    export class SimManager {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static init(config: any):Ext.ux.ajax.SimManager;
        static register(simlet: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class SimXhr extends Ext.Base {
        constructor(config: any);
    }
    export class XmlSimlet extends Ext.ux.ajax.DataSimlet {
        xmlTpl: any[];
    }
}