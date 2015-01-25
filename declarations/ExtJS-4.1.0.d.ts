// Ext type declarations generated on Sat Jan 24 2015 20:51:32 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static BLANK_IMAGE_URL: string;
    static SSL_SECURE_URL: string;
    static USE_NATIVE_JSON: boolean;
    static browser: Ext.env.Browser;
    static chromeVersion: number;
    static emptyFn: any;
    static emptyString: any;
    static enableFx: boolean;
    static enableGarbageCollector: boolean;
    static enableListenerCollection: boolean;
    static enableNestedListenerRemoval: boolean;
    static enumerables: string[];
    static features: Ext.env.FeatureDetector;
    static firefoxVersion: number;
    static ieVersion: number;
    static isChrome: boolean;
    static isFF10: boolean;
    static isFF3_0: boolean;
    static isFF3_5: boolean;
    static isFF3_6: boolean;
    static isFF4: boolean;
    static isFF5: boolean;
    static isGecko: boolean;
    static isGecko10: boolean;
    static isGecko3: boolean;
    static isGecko4: boolean;
    static isGecko5: boolean;
    static isIE: boolean;
    static isIE6: boolean;
    static isIE7: boolean;
    static isIE8: boolean;
    static isIE9: boolean;
    static isLinux: boolean;
    static isMac: boolean;
    static isOpera: boolean;
    static isOpera10_5: boolean;
    static isReady: boolean;
    static isSafari: boolean;
    static isSafari2: boolean;
    static isSafari3: boolean;
    static isSafari4: boolean;
    static isSafari5: boolean;
    static isSafari5_0: boolean;
    static isSecure: boolean;
    static isWebKit: boolean;
    static isWindows: boolean;
    static name: string;
    static operaVersion: number;
    static os: Ext.env.OS;
    static resetCls: string;
    static safariVersion: number;
    static scopeResetCSS: boolean;
    static useShims: boolean;
    static webKitVersion: number;
    static addBehaviors(obj: any):void;
    static application(config: any):void;
    static apply(object: any, config: any, defaults?: any):any;
    static applyIf(object: any, config: any):any;
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: any):Function;
    static callback(callback: Function, scope?: any, args?: any[], delay?: number):void;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static copyTo(dest: any, source: any, names: any, usePrototypeKeys?: boolean):any;
    static create(name?: string, ...args: any[]):any;
    static createByAlias():void;
    static createWidget():void;
    static decode(json: string, safe?: boolean):any;
    static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
    static define(className: string, data: any, createdFn: Function):Ext.Base;
    static destroy(...args: any[]):void;
    static destroyMembers(o: any, ...args: string[]):void;
    static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
    static encode(o: any):string;
    static escapeRe(str: string):string;
    static exclude():void;
    static extend(superclass: Function, overrides: any):Function;
    static flatten(array: any[]):any[];
    static fly(dom: any, named?: string):Ext.dom.AbstractElement.Fly;
    static get(el: any):Ext.dom.Element;
    static getBody():any;
    static getClass():void;
    static getClassName():void;
    static getCmp(id: string):any;
    static getDoc():any;
    static getDom(el: any):any;
    static getHead():any;
    static getOrientation():string;
    static getScrollBarWidth(force?: boolean):number;
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any):Ext.data.Store;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(el?: any, prefix?: string):string;
    static invoke(arr: any, methodName: string, ...args: any[]):any[];
    static isArray(target: any):boolean;
    static isBoolean(value: any):boolean;
    static isDate(object: any):boolean;
    static isDefined(value: any):boolean;
    static isElement(value: any):boolean;
    static isEmpty(value: any, allowEmptyString?: boolean):boolean;
    static isFunction(value: any):boolean;
    static isIterable(value: any):boolean;
    static isNumber(value: any):boolean;
    static isNumeric(value: any):boolean;
    static isObject(value: any):boolean;
    static isPrimitive(value: any):boolean;
    static isString(value: any):boolean;
    static isTextNode(value: any):boolean;
    static iterate(object: any, fn: Function, scope?: any):void;
    static log(message: any):void;
    static max(array: any, comparisonFn?: Function):any;
    static mean(array: any[]):number;
    static merge(destination: any, ...object: any[]):any;
    static min(array: any, comparisonFn?: Function):any;
    static namespace(...namespaces: string[]):any;
    static ns(...namespaces: string[]):any;
    static num(value: any, defaultValue: number):number;
    static onDocumentReady():void;
    static onReady(fn: any, scope: any, options: any):void;
    static override(target: any, overrides: any):void;
    static partition(arr: any, truth?: Function):any[];
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any, propertyName: string):any[];
    static preg(ptype: string, cls: Function):void;
    static query(path: string, root?: HTMLElement):any[];
    static regModel(name: string, config: any):Ext.data.Model;
    static regStore(id: string, config: any):void;
    static removeNode(node: HTMLElement):void;
    static require():void;
    static select(selector: string):Ext.dom.CompositeElement;
    static sum(array: any[]):number;
    static syncRequire():void;
    static toArray(iterable: any, start?: number, end?: number):any[];
    static toSentence(items: string[], connector: string):string;
    static type(value: any):string;
    static typeOf(value: any):string;
    static unique(array: any[]):any[];
    static urlAppend(url: string, string: string):string;
    static urlDecode(queryString: string, recursive?: boolean):any;
    static urlEncode(object: any, recursive?: boolean):string;
    static value(value: any, defaultValue: any, allowBlank?: boolean):any;
    static valueFrom(value: any, defaultValue: any, allowBlank?: boolean):any;
    static widget(name?: string, config?: any):any;
    static zip(...arr: any[]):any[];
}
declare module Ext {
    export class AbstractComponent extends Ext.Base {
        _isLayoutRoot: boolean;
        draggable: boolean;
        frameSize: any;
        hasListeners: any;
        isComponent: boolean;
        isObservable: boolean;
        maskOnDisable: boolean;
        ownerCt: Ext.container.Container;
        rendered: boolean;
        constructor(config?: any);
        addChildEls():void;
        addClass(cls: any):Ext.Component;
        addCls(cls: any):Ext.Component;
        addClsWithUI(classes: any, skip: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(element: any, listeners: any, scope: any, options: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        addPropertyToState(state: any, propName: string, value?: string):boolean;
        addStateEvents(events: any):void;
        addUIClsToElement(ui: string):void;
        afterComponentLayout(width: number, height: number, oldWidth: number, oldHeight: number):void;
        afterRender():void;
        afterSetPosition(x: number, y: number):void;
        animate(animObj: any):any;
        applyState(state: any):void;
        batchLayouts(fn: Function, scope?: any):void;
        beforeComponentLayout(adjWidth: number, adjHeight: number):void;
        beforeDestroy():void;
        clearListeners():void;
        clearManagedListeners():void;
        constructPlugins():void;
        destroy():void;
        disable(silent?: boolean):void;
        doAutoRender():void;
        doComponentLayout():Ext.container.Container;
        enable(silent?: boolean):void;
        enableBubble(eventNames: any):void;
        ensureAttachedToBody(runLayout?: boolean):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        forceComponentLayout():void;
        getActiveAnimation():any;
        getBubbleTarget():Ext.container.Container;
        getEl():Ext.dom.Element;
        getHeight():number;
        getId():string;
        getInsertPosition(position: any):HTMLElement;
        getLoader():Ext.ComponentLoader;
        getPlugin(pluginId: string):Ext.AbstractPlugin;
        getSize():any;
        getSizeModel(ownerCtSizeModel: any):any;
        getState():any;
        getWidth():number;
        getXTypes():string;
        hasActiveFx():any;
        hasCls(className: string):boolean;
        hasListener(eventName: string):boolean;
        hasUICls(cls: string):void;
        is(selector: string):boolean;
        isDescendantOf(container: Ext.container.Container):boolean;
        isDisabled():boolean;
        isDraggable():boolean;
        isDroppable():boolean;
        isFloating():boolean;
        isHidden():boolean;
        isLayoutRoot():void;
        isLayoutSuspended():boolean;
        isVisible(deep?: boolean):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        nextNode(selector?: string):Ext.Component;
        nextSibling(selector?: string):Ext.Component;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        onAdded(container: Ext.container.Container, pos: number):void;
        onDisable():void;
        onEnable():void;
        onPosition(x: number, y: number):void;
        onRemoved(destroying: boolean):void;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        onResize():void;
        previousNode(selector?: string):Ext.Component;
        previousSibling(selector?: string):Ext.Component;
        registerFloatingItem(cmp: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeChildEls(testFn: Function):void;
        removeCls(cls: any):Ext.Component;
        removeClsWithUI(cls: any):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        removeUIClsFromElement(ui: string):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
        sequenceFx():any;
        setBorder(border: any):void;
        setDisabled(disabled: boolean):void;
        setDocked(dock: any, layoutParent?: boolean):Ext.Component;
        setHeight(height: number):Ext.Component;
        setPosition(left: number, top: number, animate?: any):Ext.Component;
        setSize(width: any, height: any):Ext.Component;
        setUI(ui: string):void;
        setVisible(visible: boolean):Ext.Component;
        setWidth(width: number):Ext.Component;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        un(eventName: string, fn: Function, scope?: any):void;
        up(selector?: string):Ext.container.Container;
        update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        updateLayout(options: any):void;
    }
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
    export class AbstractPlugin extends Ext.Base {
        constructor(config: any);
        destroy():void;
        disable():void;
        enable():void;
        init(client: Ext.Component):void;
    }
    export class Action extends Ext.Base {
        constructor(config: any);
        disable():void;
        each(fn: Function, scope: any):void;
        enable():void;
        execute(...args: any[]):void;
        getIconCls():void;
        getText():void;
        hide():void;
        isDisabled():void;
        isHidden():void;
        setDisabled(disabled: boolean):void;
        setHandler(fn: Function, scope: any):void;
        setHidden(hidden: boolean):void;
        setIconCls(cls: string):void;
        setText(text: string):void;
        show():void;
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
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static hasListener(eventName: string):boolean;
        static isLoading(request?: any):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static parseStatus(status: number):any;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static request(options: any):any;
        static resumeEvents():void;
        static setOptions(options: any, scope: any):any;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static upload(form: any, url: string, params: string, options: any):void;
    }
    export class Array {
        static clean(array: any[]):any[];
        static clone(array: any[]):any[];
        static contains(array: any[], item: any):boolean;
        static difference(arrayA: any[], arrayB: any[]):any[];
        static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
        static erase(array: any[], index: number, removeCount: number):any[];
        static every(array: any[], fn: Function, scope: any):boolean;
        static filter(array: any[], fn: Function, scope: any):any[];
        static flatten(array: any[]):any[];
        static forEach(array: any[], fn: (item: any, index: number, allItems: any[]) => any, scope?: any):void;
        static from(value: any, newReference?: boolean):any[];
        static include(array: any[], item: any):void;
        static indexOf(array: any[], item: any, from?: number):number;
        static insert(array: any[], index: number, items: any[]):any[];
        static intersect(array1: any[], array2: any[], etc: any[]):any[];
        static map(array: any[], fn: Function, scope: any):any[];
        static max(array: any, comparisonFn?: Function):any;
        static mean(array: any[]):number;
        static merge(array1: any[], array2: any[], etc: any[]):any[];
        static min(array: any, comparisonFn?: Function):any;
        static pluck(array: any, propertyName: string):any[];
        static push(target: any[], ...elements: any[]):any[];
        static remove(array: any[], item: any):any[];
        static replace(array: any[], index: number, removeCount: number, insert?: any[]):any[];
        static slice(array: any[], begin: number, end: number):any[];
        static some(array: any[], fn: Function, scope: any):boolean;
        static sort(array: any[], sortFn?: Function):any[];
        static splice(array: any[], index: number, removeCount: number, ...elements: any[]):any[];
        static sum(array: any[]):number;
        static toArray(iterable: any, start?: number, end?: number):any[];
        static toMap(array: any, getKey: any, scope: any):void;
        static union(array1: any[], array2: any[], etc: any[]):any[];
        static unique(array: any[]):any[];
    }
    export class Base {
        self: Ext.Class;
        callOverridden(args: any):any;
        callParent(args: any):any;
        getInitialConfig(name: any):void;
        initConfig(config: any):any;
        statics():Ext.Class;
        static addMembers(members: any):void;
        static addStatics(members: any):Ext.Base;
        static create():any;
        static createAlias(alias: any, origin: any):void;
        static getName():string;
        static override(members: any):Ext.Base;
    }
    export class Class {
        constructor(data: any, onCreated: Function);
    }
    export class ClassManager {
        static create(className: any, data: any, createdFn: any):void;
        static get(name: string):Ext.Class;
        static getAliasesByName(name: string):any[];
        static getByAlias(alias: string):Ext.Class;
        static getClass(object: any):Ext.Class;
        static getDisplayName(object: any):string;
        static getName(object: any):string;
        static getNameByAlias(alias: string):string;
        static getNameByAlternate(alternate: string):string;
        static getNamesByExpression(expression: string):string[];
        static instantiateByAlias(alias: string, ...args: any[]):any;
        static isCreated(className: string):boolean;
        static set(name: string, value: any):Ext.ClassManager;
        static setAlias(cls: any, alias: string):Ext.ClassManager;
        static setNamespace(name: string, value: any):void;
    }
    export class Component extends Ext.AbstractComponent {
        floatParent: Ext.container.Container;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(config: any);
        afterHide(callback?: Function, scope?: any):void;
        afterShow(animateTarget?: any, callback?: Function, scope?: any):void;
        alignTo(element: any, position?: string, offsets?: number[]):Ext.Component;
        beforeShow():void;
        bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        cancelFocus():void;
        center():Ext.Component;
        cloneConfig(overrides: any):Ext.Component;
        doConstrain(constrainTo?: any):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: any):Ext.container.Container;
        getBox(local?: boolean):any;
        getPosition(local?: boolean):number[];
        getXType():string;
        initComponent():void;
        onDestroy():void;
        onHide(animateTarget?: any, callback?: Function, scope?: any):void;
        onShow(animateTarget?: any, callback?: Function, scope?: any):void;
        onShowComplete(callback?: Function, scope?: any):void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: number, y: number, animate?: any):Ext.Component;
        show(animateTarget?: any, callback?: Function, scope?: any):Ext.Component;
        showAt(x: number, y: number, animate?: any):void;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
        updateBox(box: any):Ext.Component;
    }
    export class ComponentLoader extends Ext.ElementLoader {
        constructor(config: any);
    }
    export class ComponentManager {
        static all: Ext.util.HashMap;
        static create(config: any, defaultType?: string):Ext.Component;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static get(id: string):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static registerType(type: any, cls: any):void;
        static unregister(item: any):void;
    }
    export class ComponentQuery {
        static getInitialConfig(name: any):void;
        static is(component: Ext.Component, selector: string):boolean;
        static query(selector: string, root: Ext.container.Container):Ext.Component[];
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
        static between(date: Date, start: Date, end: Date):boolean;
        static clearTime(date: Date, clone: boolean):Date;
        static clone(date: Date):Date;
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
        static now():number;
        static parse(input: string, format: string, strict?: boolean):Date;
        static unescapeFormat(format: string):string;
    }
    export class Editor extends Ext.container.Container {
        constructor(config: any);
        cancelEdit(remainVisible?: boolean):void;
        completeEdit(remainVisible?: boolean):void;
        getValue():any;
        realign(autoSize?: boolean):void;
        setValue(value: any):void;
        startEdit(el: any, value?: string):void;
    }
    export class ElementLoader extends Ext.Base {
        hasListeners: any;
        isLoader: boolean;
        isObservable: boolean;
        constructor(config: any);
        abort():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        load(options: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setTarget(target: any):void;
        startAutoRefresh(interval: number, options?: any):void;
        stopAutoRefresh():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Error {
        static ignore: boolean;
        static notify: boolean;
        constructor(config: any);
        toString():string;
        static handle(err: Ext.Error):void;
        static raise(err: any):void;
    }
    export class EventManager {
        static idleEvent: any;
        static addListener(el: any, eventName: string, handler: Function, scope?: any, options?: any):void;
        static getId(element: any):string;
        static getKeyEvent():string;
        static getPageX(event: any):number;
        static getPageXY(event: any):number[];
        static getPageY(event: any):number;
        static getRelatedTarget(event: any):HTMLElement;
        static getTarget(event: any):HTMLElement;
        static on():void;
        static onDocumentReady(fn: Function, scope?: any, options?: boolean):void;
        static onWindowResize(fn: Function, scope: any, options: boolean):void;
        static onWindowUnload(fn: Function, scope: any, options: boolean):void;
        static pollScroll():void;
        static preventDefault(The: Event):void;
        static purgeElement(el: any, eventName?: string):void;
        static removeAll(el: any):void;
        static removeListener(el: any, eventName: string, fn: Function, scope: any):void;
        static removeResizeListener(fn: Function, scope: any):void;
        static removeUnloadListener(fn: Function, scope: any):void;
        static stopEvent(The: Event):void;
        static stopPropagation(The: Event):void;
        static un():void;
    }
    export class EventObject {
        static A: number;
        static ALT: number;
        static B: number;
        static BACKSPACE: number;
        static C: number;
        static CAPS_LOCK: number;
        static CONTEXT_MENU: number;
        static CTRL: number;
        static D: number;
        static DELETE: number;
        static DOWN: number;
        static E: number;
        static EIGHT: number;
        static END: number;
        static ENTER: number;
        static ESC: number;
        static F: number;
        static F1: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static FIVE: number;
        static FOUR: number;
        static G: number;
        static H: number;
        static HOME: number;
        static I: number;
        static INSERT: number;
        static J: number;
        static K: number;
        static L: number;
        static LEFT: number;
        static M: number;
        static N: number;
        static NINE: number;
        static NUM_CENTER: number;
        static NUM_DIVISION: number;
        static NUM_EIGHT: number;
        static NUM_FIVE: number;
        static NUM_FOUR: number;
        static NUM_MINUS: number;
        static NUM_MULTIPLY: number;
        static NUM_NINE: number;
        static NUM_ONE: number;
        static NUM_PERIOD: number;
        static NUM_PLUS: number;
        static NUM_SEVEN: number;
        static NUM_SIX: number;
        static NUM_THREE: number;
        static NUM_TWO: number;
        static NUM_ZERO: number;
        static O: number;
        static ONE: number;
        static P: number;
        static PAGE_DOWN: number;
        static PAGE_UP: number;
        static PAUSE: number;
        static PRINT_SCREEN: number;
        static Q: number;
        static R: number;
        static RETURN: number;
        static RIGHT: number;
        static S: number;
        static SEVEN: number;
        static SHIFT: number;
        static SIX: number;
        static SPACE: number;
        static T: number;
        static TAB: number;
        static THREE: number;
        static TWO: number;
        static U: number;
        static UP: number;
        static V: number;
        static W: number;
        static WHEEL_SCALE: number;
        static X: number;
        static Y: number;
        static Z: number;
        static ZERO: number;
        static altKey: boolean;
        static ctrlKey: boolean;
        static shiftKey: boolean;
        static correctWheelDelta(delta: number):void;
        static getCharCode():number;
        static getKey():number;
        static getPageX():number;
        static getPageY():number;
        static getPoint():Ext.util.Point;
        static getRelatedTarget(selector?: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        static getTarget(selector?: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        static getWheelDelta():number;
        static getWheelDeltas():any;
        static getX():number;
        static getXY():number[];
        static getY():number;
        static hasModifier():boolean;
        static injectEvent(target?: any):void;
        static isNavKeyPress():boolean;
        static isSpecialKey():boolean;
        static preventDefault():void;
        static stopEvent():void;
        static stopPropagation():void;
        static within(el: any, related?: boolean, allowEl?: boolean):boolean;
    }
    export class FocusManager {
        static enabled: boolean;
        static focusedCmp: Ext.Component;
        static hasListeners: any;
        static isObservable: boolean;
        static whitelist: string[];
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addXTypeToWhitelist(xtype: any):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static disable():void;
        static enable(options: any, focusFrame?: boolean):void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static hasListener(eventName: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeXTypeFromWhitelist(xtype: any):void;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Function {
        static alias(object: any, methodName: string):Function;
        static bind(fn: Function, scope?: any, args?: any[], appendArgs?: any):Function;
        static clone(method: Function):Function;
        static createBuffered(fn: Function, buffer: number, scope?: any, args?: any[]):Function;
        static createDelayed(fn: Function, delay: number, scope?: any, args?: any[], appendArgs?: any):Function;
        static createInterceptor(origFn: Function, newFn: Function, scope?: any, returnValue?: any):Function;
        static createSequence(originalFn: Function, newFn: Function, scope?: any):Function;
        static createThrottled(fn: Function, interval: number, scope?: any):Function;
        static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
        static flexSetter(setter: Function):Function;
        static interceptAfter(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interceptBefore(object: any, methodName: string, fn: Function, scope?: any):Function;
        static pass(fn: Function, args: any[], scope?: any):Function;
    }
    export class Img extends Ext.Component {
        constructor(config: any);
        setSrc(src: any):void;
    }
    export class JSON {
        static decode(json: string, safe?: boolean):any;
        static encode(o: any):string;
        static encodeDate(d: Date):string;
        static encodeValue(o: any):string;
    }
    export class Layer extends Ext.dom.Element {
        constructor(config?: any, existingEl?: any);
        setZIndex(zindex: number):Ext.Layer;
    }
    export class LoadMask extends Ext.Component {
        constructor(comp: Ext.Component, config?: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Loader {
        static history: any[];
        static exclude(excludes: any[]):any;
        static getConfig(name: string):any;
        static getPath(className: string):string;
        static loadScript(options: any):void;
        static onReady(fn: Function, scope: any, withDomReady: boolean):void;
        static require(expressions: any, fn?: Function, scope?: any, excludes?: any):void;
        static setConfig(config: any):Ext.Loader;
        static setPath(name: any, path: string):Ext.Loader;
        static syncRequire(expressions: any, fn?: Function, scope?: any, excludes?: any):void;
    }
    export class MessageBox {
        static CANCEL: number;
        static ERROR: string;
        static INFO: string;
        static NO: number;
        static OK: number;
        static OKCANCEL: number;
        static QUESTION: string;
        static WARNING: string;
        static YES: number;
        static YESNO: number;
        static YESNOCANCEL: number;
        static buttonText: any;
        static dd: Ext.util.ComponentDragger;
        static defaultTextHeight: number;
        static draggable: boolean;
        static floatParent: Ext.container.Container;
        static frameSize: any;
        static hasListeners: any;
        static isComponent: boolean;
        static isObservable: boolean;
        static isPanel: boolean;
        static isWindow: boolean;
        static items: Ext.util.AbstractMixedCollection;
        static maskOnDisable: boolean;
        static minProgressWidth: number;
        static minPromptWidth: number;
        static ownerCt: Ext.container.Container;
        static rendered: boolean;
        static zIndexManager: Ext.ZIndexManager;
        static zIndexParent: Ext.container.Container;
        static add(...component: any[]):any;
        static addChildEls():void;
        static addClass(cls: any):Ext.Component;
        static addCls(cls: any):Ext.Component;
        static addClsWithUI(classes: any, skip: any):void;
        static addDocked(component: any, pos?: number):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(element: any, listeners: any, scope: any, options: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addStateEvents(events: any):void;
        static addUIClsToElement(cls: any):void;
        static alert(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static alignTo(element: any, position?: string, offsets?: number[]):Ext.Component;
        static animate(animObj: any):any;
        static applyState(state: any):void;
        static batchLayouts(fn: Function, scope?: any):void;
        static bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        static cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        static center():Ext.Component;
        static child(selector?: string):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static cloneConfig(overrides: any):Ext.Component;
        static close():void;
        static collapse(direction: string, animate?: boolean):Ext.panel.Panel;
        static confirm(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static constructPlugins():void;
        static destroy():void;
        static disable():void;
        static doAutoRender():void;
        static doComponentLayout():Ext.container.Container;
        static doConstrain(constrainTo?: any):void;
        static doLayout():Ext.container.Container;
        static down(selector?: string):any;
        static enableBubble(eventNames: any):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: any):Ext.container.Container;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static focus(selectText?: boolean, delay?: any):Ext.Component;
        static forceComponentLayout():void;
        static getActiveAnimation():any;
        static getBox(local?: boolean):any;
        static getBubbleTarget():Ext.container.Container;
        static getChildByElement(el: any, deep: boolean):Ext.Component;
        static getComponent(comp: any):Ext.Component;
        static getDefaultFocus():void;
        static getDockedComponent(comp: any):Ext.Component;
        static getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        static getEl():Ext.dom.Element;
        static getHeight():number;
        static getId():string;
        static getInitialConfig(name: any):void;
        static getInsertPosition(position: any):HTMLElement;
        static getLayout():Ext.layout.container.Container;
        static getLoader():Ext.ComponentLoader;
        static getPlugin(pluginId: string):Ext.AbstractPlugin;
        static getPosition(local?: boolean):number[];
        static getSize():any;
        static getSizeModel(ownerCtSizeModel: any):any;
        static getState():any;
        static getWidth():number;
        static getXType():string;
        static getXTypes():string;
        static hasActiveFx():any;
        static hasCls(className: string):boolean;
        static hasListener(eventName: string):boolean;
        static hasUICls(cls: string):void;
        static hide():Ext.Component;
        static insert(index: number, component: Ext.Component):Ext.Component;
        static insertDocked(pos: number, component: any):void;
        static is(selector: string):boolean;
        static isAncestor(possibleDescendant: Ext.Component):void;
        static isDescendantOf(container: Ext.container.Container):boolean;
        static isDisabled():boolean;
        static isDraggable():boolean;
        static isDroppable():boolean;
        static isFloating():boolean;
        static isHidden():boolean;
        static isLayoutSuspended():boolean;
        static isVisible(deep: any):boolean;
        static isXType(xtype: string, shallow?: boolean):boolean;
        static maximize():Ext.window.Window;
        static minimize():Ext.window.Window;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static move(fromIdx: number, toIdx: number):Ext.Component;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: any):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(component: any, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeChildEls(testFn: Function):void;
        static removeCls(cls: any):Ext.Component;
        static removeClsWithUI(cls: any):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeUIClsFromElement(cls: any):void;
        static restore():Ext.window.Window;
        static resumeEvents():void;
        static savePropToState(propName: string, state: any, stateName?: string):boolean;
        static savePropsToState(propNames: any, state: any):any;
        static saveState():void;
        static scrollBy(deltaX: any, deltaY: any, animate: any):void;
        static sequenceFx():any;
        static setActive(active?: boolean, newActive?: Ext.Component):void;
        static setAutoScroll(scroll: boolean):Ext.Component;
        static setBodyStyle(style: any, value: string):void;
        static setBorder(border: any, targetEl: any):void;
        static setDisabled(disabled: boolean):void;
        static setDocked(dock: any, layoutParent?: boolean):Ext.Component;
        static setHeight(height: number):Ext.Component;
        static setIcon(icon: string):Ext.window.MessageBox;
        static setIconCls(newIconCls: string):void;
        static setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        static setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        static setPagePosition(x: number, y: number, animate?: any):Ext.Component;
        static setPosition(left: number, top: number, animate?: any):Ext.Component;
        static setSize(width: any, height: any):Ext.Component;
        static setTitle(newTitle: string):void;
        static setUI(ui: any):void;
        static setVisible(visible: boolean):Ext.Component;
        static setWidth(width: number):Ext.Component;
        static show(config: any):Ext.window.MessageBox;
        static showAt(x: number, y: number, animate?: any):void;
        static stopAnimation():Ext.dom.Element;
        static stopFx():Ext.dom.Element;
        static suspendEvents(queueSuspended: boolean):void;
        static syncFx():any;
        static toBack():Ext.Component;
        static toFront(preventFocus?: boolean):Ext.Component;
        static toggleCollapse():Ext.panel.Panel;
        static toggleMaximize():Ext.window.Window;
        static un(eventName: string, fn: Function, scope?: any):void;
        static up(selector?: string):Ext.container.Container;
        static update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        static updateBox(box: any):Ext.Component;
        static updateLayout(options: any):void;
        static updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        static wait(msg: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class ModelManager {
        static all: Ext.util.HashMap;
        static associationStack: Ext.data.association.Association[];
        static create(data: any, name: string, id?: number):void;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static get(id: string):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static getModel(id: any):Ext.data.Model;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static unregister(item: any):void;
    }
    export class Number {
        static constrain(number: number, min: number, max: number):number;
        static from(value: any, defaultValue: number):number;
        static randomInt(from: number, to: number):number;
        static snap(value: number, increment: number, minValue: number, maxValue: number):number;
        static snapInRange(value: number, increment: number, minValue?: number, maxValue?: number):number;
        static toFixed(value: number, precision: number):void;
    }
    export class Object {
        static chain(object: any):void;
        static each(object: any, fn: (key: string, value: any, object: any) => any, scope?: any):void;
        static fromQueryString(queryString: string, recursive?: boolean):any;
        static getKey(object: any, value: any):void;
        static getKeys(object: any):string[];
        static getSize(object: any):number;
        static getValues(object: any):any[];
        static merge(destination: any, ...object: any[]):any;
        static toQueryObjects(name: string, value: any, recursive?: boolean):any[];
        static toQueryString(object: any, recursive?: boolean):string;
    }
    export class PluginManager {
        static all: Ext.util.HashMap;
        static create(config: any, defaultType?: Function):Ext.Component;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static findByType(type: string, defaultsOnly: boolean):Ext.AbstractPlugin[];
        static get(id: string):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static registerType(type: string, cls: Function):void;
        static unregister(item: any):void;
    }
    export class ProgressBar extends Ext.Component {
        constructor(config: any);
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class Shadow extends Ext.Base {
        constructor(config?: any);
        hide():void;
        isVisible():void;
        realign(left: number, top: number, width: number, height: number):void;
        setOpacity(opacity: number):void;
        setZIndex(zindex: number):void;
        show(targetEl: any):void;
    }
    export class ShadowPool {
        static getInitialConfig(name: any):void;
    }
    export class String {
        static addCharacterEntities(entities: any):void;
        static capitalize(string: string):string;
        static createVarName(s: string):string;
        static ellipsis(value: string, length: number, word: boolean):string;
        static escape(string: string):string;
        static escapeRegex(string: string):string;
        static format(string: string, value1: string, value2: string):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static leftPad(string: string, size: number, character?: string):string;
        static repeat(pattern: string, count: number, sep: string):void;
        static resetCharacterEntities():void;
        static splitWords(words: any):void;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static urlAppend(url: string, string: string):string;
    }
    export class TaskManager {
        static destroy():void;
        static getInitialConfig(name: any):void;
        static newTask(config: any):void;
        static start(task: any):any;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class Template extends Ext.Base {
        isTemplate: boolean;
        constructor(...html: any[]);
        append(el: any, values: any, returnElement?: boolean):any;
        apply(values: any):string;
        applyOut(values: any, out: any[]):any[];
        applyTemplate(values: any):string;
        compile():Ext.Template;
        insertAfter(el: any, values: any, returnElement?: boolean):any;
        insertBefore(el: any, values: any, returnElement?: boolean):any;
        insertFirst(el: any, values: any, returnElement?: boolean):any;
        overwrite(el: any, values: any, returnElement?: boolean):any;
        set(html: string, compile?: boolean):Ext.Template;
        static from(el: any, config?: any):Ext.Template;
    }
    export class Version {
        constructor(version: any);
        deprecate(packageName: string, since: string, closure: Function, scope: any):void;
        equals(target: any):boolean;
        getBuild():number;
        getMajor():number;
        getMinor():number;
        getPatch():number;
        getRelease():number;
        getShortVersion():string;
        getVersion(packageName?: string):Ext.Version;
        gt(target: any):boolean;
        gtEq(target: any):boolean;
        isGreaterThan(target: any):boolean;
        isGreaterThanOrEqual(target: any):boolean;
        isLessThan(target: any):boolean;
        isLessThanOrEqual(target: any):boolean;
        lt(target: any):boolean;
        ltEq(target: any):boolean;
        match(target: any):boolean;
        setVersion(packageName: string, version: any):Ext;
        toArray():number[];
        static compare(current: string, target: string):number;
        static getComponentValue(value: any):any;
    }
    export class WindowManager {
        static bringToFront(comp: any):boolean;
        static each(fn: Function, scope?: any):void;
        static eachBottomUp(fn: Function, scope?: any):void;
        static eachTopDown(fn: Function, scope?: any):void;
        static get(id: any):Ext.Component;
        static getActive():Ext.Component;
        static getBy(fn: Function, scope?: any):any[];
        static getInitialConfig(name: any):void;
        static hideAll():void;
        static register(comp: Ext.Component):void;
        static sendToBack(comp: any):Ext.Component;
        static unregister(comp: Ext.Component):void;
    }
    export class XTemplate extends Ext.Template {
        constructor(...html: any[]);
    }
    export class XTemplateCompiler extends Ext.XTemplateParser {
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
        doIf(action: string, actions: any):void;
        doSwitch(action: string, actions: any):void;
        doTag():void;
        doText(text: string):void;
        doTpl():void;
    }
    export class ZIndexManager extends Ext.Base {
        constructor(container: any);
        bringToFront(comp: any):boolean;
        each(fn: Function, scope?: any):void;
        eachBottomUp(fn: Function, scope?: any):void;
        eachTopDown(fn: Function, scope?: any):void;
        get(id: any):Ext.Component;
        getActive():Ext.Component;
        getBy(fn: Function, scope?: any):any[];
        hideAll():void;
        register(comp: Ext.Component):void;
        sendToBack(comp: any):Ext.Component;
        unregister(comp: Ext.Component):void;
    }
    export class is {
        static Android: boolean;
        static Blackberry: boolean;
        static Desktop: boolean;
        static Linux: boolean;
        static Mac: boolean;
        static Phone: boolean;
        static Standalone: boolean;
        static Tablet: any;
        static Windows: boolean;
        static iOS: boolean;
        static iPad: boolean;
        static iPhone: boolean;
        static iPod: boolean;
    }
    export class supports {
        static ArraySort: boolean;
        static AudioTag: boolean;
        static BoundingClientRect: boolean;
        static CSS3BorderRadius: boolean;
        static CSS3BoxShadow: boolean;
        static CSS3DTransform: boolean;
        static CSS3LinearGradient: boolean;
        static Canvas: boolean;
        static ClassList: boolean;
        static ComputedStyle: boolean;
        static CreateContextualFragment: boolean;
        static DeviceMotion: boolean;
        static Direct2DBug: boolean;
        static DisplayChangeInputSelectionBug: any;
        static DisplayChangeTextAreaSelectionBug: any;
        static Float: boolean;
        static GeoLocation: boolean;
        static GetPositionPercentage: boolean;
        static History: boolean;
        static MouseEnterLeave: boolean;
        static MouseWheel: boolean;
        static Opacity: boolean;
        static OrientationChange: boolean;
        static Placeholder: boolean;
        static PointerEvents: boolean;
        static Range: boolean;
        static RightMargin: boolean;
        static SVG: boolean;
        static TextAreaMaxLength: boolean;
        static TimeoutActualLateness: boolean;
        static Touch: boolean;
        static Transitions: boolean;
        static TransparentColor: boolean;
        static VML: boolean;
        static WindowOnError: boolean;
    }
}
declare module Ext.app {
    export class Application extends Ext.app.Controller {
        constructor(config?: any);
        launch(profile: string):boolean;
    }
    export class Controller extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getController(name: string):Ext.app.Controller;
        getModel(name: string):Ext.data.Model;
        getStore(name: string):Ext.data.Store;
        getView(name: string):Ext.Base;
        hasListener(eventName: string):boolean;
        init(application: Ext.app.Application):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        onLaunch(application: Ext.app.Application):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class EventBus extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor();
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        isAction: boolean;
        menu: Ext.menu.Menu;
        pressed: boolean;
        template: Ext.Template;
        constructor(config: any);
        getTemplateArgs():any;
        getText():string;
        hasVisibleMenu():boolean;
        hideMenu():Ext.button.Button;
        setHandler(handler: Function, scope?: any):Ext.button.Button;
        setIcon(icon: string):Ext.button.Button;
        setIconCls(cls: string):Ext.button.Button;
        setParams(params: any):void;
        setScale(scale: string):void;
        setText(text: string):Ext.button.Button;
        setTextAlign(align: string):void;
        setTooltip(tooltip: any):Ext.button.Button;
        showMenu():void;
        toggle(state?: boolean, suppressEvent?: boolean):Ext.button.Button;
    }
    export class Cycle extends Ext.button.Split {
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent?: boolean):void;
        toggleSelected():void;
    }
    export class Split extends Ext.button.Button {
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: any):void;
    }
}
declare module Ext.chart {
    export class Callout extends Ext.Base {
        constructor(config: any);
    }
    export class Chart extends Ext.draw.Component {
        constructor();
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        redraw(resize?: boolean):void;
        restoreZoom():void;
        save(config: any):void;
        setZoom(zoomConfig: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Highlight extends Ext.Base {
        constructor(config: any);
        highlight(Default: any):void;
        highlightItem(item: any):void;
        unHighlightItem():void;
    }
    export class Label extends Ext.Base {
        constructor(config: any);
    }
    export class Legend extends Ext.Base {
        isVertical: boolean;
        constructor(config?: any);
        toggle(Whether: boolean):void;
    }
    export class LegendItem extends Ext.draw.CompositeSprite {
        constructor(config: any);
        createLegend(config: any):void;
        updatePosition(relativeTo?: any):void;
    }
    export class Mask extends Ext.Base {
        constructor(config?: any);
    }
    export class MaskLayer extends Ext.Component {
        constructor(config: any);
    }
    export class Navigation extends Ext.Base {
        constructor();
        restoreZoom():void;
        setZoom(zoomConfig: any):void;
    }
    export class Shape {
        static getInitialConfig(name: any):void;
    }
    export class Tip extends Ext.Base {
        constructor(config: any);
    }
    export class TipSurface extends Ext.draw.Component {
        constructor(config: any);
    }
}
declare module Ext.chart.axis {
    export class Abstract extends Ext.Base {
        constructor(config?: any);
    }
    export class Axis extends Ext.chart.axis.Abstract {
        constructor(config?: any);
        drawAxis(init: any):void;
        drawGrid():void;
        drawLabel():void;
        setTitle(title: string):void;
    }
    export class Category extends Ext.chart.axis.Axis {
        calculateCategoryCount: boolean;
        categoryNames: string;
        constructor(config?: any);
    }
    export class Gauge extends Ext.chart.axis.Abstract {
        constructor(config?: any);
        setTitle(title: string):void;
    }
    export class Numeric extends Ext.chart.axis.Axis {
        adjustMaximumByMajorUnit: boolean;
        adjustMinimumByMajorUnit: boolean;
        decimals: number;
        maximum: number;
        minimum: number;
        constructor(config: any);
    }
    export class Radial extends Ext.chart.axis.Abstract {
        constructor(config?: any);
    }
    export class Time extends Ext.chart.axis.Axis {
        constructor(config: any);
    }
}
declare module Ext.chart.series {
    export class Area extends Ext.chart.series.Cartesian {
        constructor(config: any);
        drawSeries():void;
        highlightSeries(item: any):void;
        unHighlightSeries(item: any):void;
    }
    export class Bar extends Ext.chart.series.Cartesian {
        constructor(config: any);
        drawSeries():void;
    }
    export class Cartesian extends Ext.chart.series.Series {
        constructor(config: any);
        eachYValue(record: Ext.data.Model, fn: Function, scope: any):void;
        getMinMaxXValues():any[];
        getMinMaxYValues():any[];
        getYValueAccessors():any[];
        getYValueCount():number;
    }
    export class Column extends Ext.chart.series.Bar {
        constructor(config: any);
    }
    export class Gauge extends Ext.chart.series.Series {
        constructor(config: any);
        drawSeries():void;
        setValue(value: any):void;
    }
    export class Line extends Ext.chart.series.Cartesian {
        constructor(config: any);
        drawSeries():void;
    }
    export class Pie extends Ext.chart.series.Series {
        constructor(config: any);
        drawSeries():void;
    }
    export class Radar extends Ext.chart.series.Series {
        constructor(config: any);
        drawSeries():void;
    }
    export class Scatter extends Ext.chart.series.Cartesian {
        constructor(config: any);
        drawSeries():void;
    }
    export class Series extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        eachRecord(fn: Function, scope: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getItemForPoint(x: number, y: number):any;
        getLegendColor(index: any):void;
        getRecordCount():void;
        hasListener(eventName: string):boolean;
        hideAll():void;
        highlight(Default: any):void;
        highlightItem(item: any):void;
        isExcluded(index: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setTitle(index: number, title: string):void;
        showAll():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unHighlightItem():void;
    }
}
declare module Ext.chart.theme {
    export class Base extends Ext.Base {
        constructor(config: any);
    }
    export class Theme extends Ext.Base {
    }
}
declare module Ext.container {
    export class AbstractContainer extends Ext.Component {
        items: Ext.util.AbstractMixedCollection;
        constructor(config: any);
        add(...component: any[]):any;
        afterLayout(layout: Ext.layout.container.Container):void;
        beforeLayout():void;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        child(selector?: string):any;
        doLayout():Ext.container.Container;
        down(selector?: string):any;
        getComponent(comp: any):any;
        getLayout():Ext.layout.container.Container;
        insert(index: number, component: Ext.Component):Ext.Component;
        isAncestor(possibleDescendant: Ext.Component):void;
        onAdd(component: Ext.Component, position: number):void;
        onBeforeAdd(item: Ext.Component):void;
        onRemove(component: Ext.Component, autoDestroy: boolean):void;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        remove(component: any, autoDestroy?: boolean):Ext.Component;
        removeAll(autoDestroy?: boolean):Ext.Component[];
    }
    export class ButtonGroup extends Ext.panel.Panel {
        constructor(config: any);
    }
    export class Container extends Ext.container.AbstractContainer {
        constructor(config: any);
        getChildByElement(el: any, deep: boolean):Ext.Component;
    }
    export class DockingContainer extends Ext.Base {
        addDocked(component: any, pos?: number):void;
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, component: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
    }
    export class Viewport extends Ext.container.Container {
        isViewport: boolean;
        constructor(config: any);
    }
}
declare module Ext.data {
    export class AbstractStore extends Ext.Base {
        batchUpdateMode: string;
        defaultProxyType: string;
        defaultSortDirection: string;
        filterOnLoad: boolean;
        filters: Ext.util.MixedCollection;
        hasListeners: any;
        isDestroyed: boolean;
        isObservable: boolean;
        isSortable: boolean;
        isStore: boolean;
        removed: Ext.data.Model[];
        sortOnLoad: boolean;
        sortRoot: string;
        sorters: Ext.util.MixedCollection;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        generateComparator():void;
        getModifiedRecords():Ext.data.Model[];
        getNewRecords():Ext.data.Model[];
        getProxy():Ext.data.proxy.Proxy;
        getRemovedRecords():Ext.data.Model[];
        getUpdatedRecords():Ext.data.Model[];
        hasListener(eventName: string):boolean;
        initSortable():void;
        isLoading():boolean;
        load(options?: any):Ext.data.Store;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeAll():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeAutoSync():void;
        resumeEvents():void;
        save():void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        sort(sorters: any, direction: string):Ext.util.Sorter[];
        suspendAutoSync():void;
        suspendEvents(queueSuspended: boolean):void;
        sync(options?: any):Ext.data.Store;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Batch extends Ext.Base {
        current: number;
        exceptions: Ext.data.Operation[];
        hasException: boolean;
        hasListeners: any;
        isComplete: boolean;
        isObservable: boolean;
        isRunning: boolean;
        operations: Ext.data.Operation[];
        total: number;
        constructor(config?: any);
        add(operation: any):Ext.data.Batch;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        pause():Ext.data.Batch;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        retry():Ext.data.Batch;
        runOperation(index: number):Ext.data.Batch;
        start(index: any):Ext.data.Batch;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class BufferStore extends Ext.data.Store {
        constructor();
    }
    export class Connection extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        abort(request?: any):void;
        abortAll():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: any):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        parseStatus(status: number):any;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        request(options: any):any;
        resumeEvents():void;
        setOptions(options: any, scope: any):any;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        upload(form: any, url: string, params: string, options: any):void;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Errors extends Ext.util.MixedCollection {
        constructor(allowFunctions: boolean, keyFn: Function);
        getByField(fieldName: string):any[];
        isValid():boolean;
    }
    export class Field extends Ext.Base {
        constructor(config: any);
    }
    export class IdGenerator extends Ext.Base {
        isGenerator: boolean;
        constructor(config?: any);
        generate():string;
        static get(config: any):void;
    }
    export class JsonP {
        static callbackKey: string;
        static disableCaching: boolean;
        static disableCachingParam: string;
        static timeout: number;
        static abort(request?: any):void;
        static getInitialConfig(name: any):void;
        static request(options: any):any;
    }
    export class JsonPStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class JsonStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Model extends Ext.Base {
        dirty: boolean;
        editing: boolean;
        fields: Ext.util.MixedCollection;
        hasListeners: any;
        isModel: boolean;
        isObservable: boolean;
        me: any;
        modified: any;
        phantom: boolean;
        raw: any;
        store: Ext.data.Store;
        stores: Ext.data.Store[];
        constructor(data: any, id: any, raw: any, convertedData: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        beginEdit():void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        commit(silent?: boolean):void;
        copy(id?: string):Ext.data.Model;
        destroy(options: any):Ext.data.Model;
        enableBubble(eventNames: any):void;
        endEdit(silent: boolean, modifiedFieldNames: string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(fieldName: string):any;
        getAssociatedData():any;
        getChanges():any;
        getData(includeAssociated: boolean):any;
        getId():any;
        getProxy():Ext.data.proxy.Proxy;
        hasListener(eventName: string):boolean;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        join(store: Ext.data.Store):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        reject(silent?: boolean):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        save(options: any):Ext.data.Model;
        set(fieldName: any, newValue: any):string[];
        setDirty():void;
        setId(id: any):void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.Errors;
        static getFields():Ext.data.Field[];
        static getProxy():Ext.data.proxy.Proxy;
        static id(rec: Ext.data.Model):string;
        static load(id: any, config?: any):void;
        static setFields(fields: any, idProperty: any, clientIdProperty: any):void;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class NodeInterface extends Ext.Base {
        childNodes: any;
        firstChild: any;
        isNode: boolean;
        lastChild: any;
        nextSibling: any;
        parentNode: any;
        previousSibling: any;
        appendChild(node: any):Ext.data.NodeInterface;
        bubble(fn: Function, scope?: any, args?: any[]):void;
        cascadeBy(fn: Function, scope?: any, args?: any[]):void;
        collapse(recursive?: boolean, callback?: Function, scope?: any):void;
        collapseChildren(recursive?: Function, callback?: Function, scope?: any):void;
        contains(node: Ext.data.NodeInterface):boolean;
        copy(id?: string, deep?: boolean):Ext.data.NodeInterface;
        createNode(node: any):boolean;
        destroy(silent: any):void;
        eachChild(fn: Function, scope?: any, args?: any[]):void;
        expand(recursive?: boolean, callback?: Function, scope?: any):void;
        expandChildren(recursive?: boolean, callback?: Function, scope?: any):void;
        findChild(attribute: string, value: any, deep?: boolean):Ext.data.NodeInterface;
        findChildBy(fn: Function, scope?: any, deep?: boolean):Ext.data.NodeInterface;
        getChildAt(index: number):Ext.data.NodeInterface;
        getDepth():number;
        getPath(field?: string, separator?: string):string;
        hasChildNodes():boolean;
        indexOf(node: Ext.data.NodeInterface):number;
        indexOfId(id: string):number;
        insertBefore(node: Ext.data.NodeInterface, refNode: Ext.data.NodeInterface):Ext.data.NodeInterface;
        insertChild(index: number, node: Ext.data.Model):Ext.data.Model;
        isAncestor(node: Ext.data.NodeInterface):boolean;
        isExpandable():boolean;
        isExpanded():boolean;
        isFirst():boolean;
        isLast():boolean;
        isLeaf():boolean;
        isLoaded():boolean;
        isLoading():boolean;
        isRoot():boolean;
        isVisible():boolean;
        remove(destroy?: boolean):Ext.data.NodeInterface;
        removeAll(destroy?: boolean):Ext.data.NodeInterface;
        removeChild(node: Ext.data.NodeInterface, destroy?: boolean):Ext.data.NodeInterface;
        replaceChild(newChild: Ext.data.NodeInterface, oldChild: Ext.data.NodeInterface):Ext.data.NodeInterface;
        sort(fn: Function, recursive?: boolean, suppressEvent?: boolean):void;
        updateInfo(commit: any):boolean;
        static decorate(modelClass: any):void;
    }
    export class NodeStore extends Ext.data.Store {
        constructor(config?: any);
    }
    export class Operation extends Ext.Base {
        actionCommitRecordsRe: RegExp;
        actionSkipSyncRe: RegExp;
        constructor(config?: any);
        allowWrite():boolean;
        commitRecords(serverRecords: Ext.data.Model[]):void;
        getError():any;
        getRecords():Ext.data.Model[];
        getResultSet():Ext.data.ResultSet;
        hasException():boolean;
        isComplete():boolean;
        isRunning():boolean;
        isStarted():boolean;
        setCompleted():void;
        setException(error?: any):void;
        setStarted():void;
        setSuccessful():void;
        wasSuccessful():boolean;
    }
    export class Request extends Ext.Base {
        constructor(config?: any);
    }
    export class ResultSet extends Ext.Base {
        totalRecords: number;
        constructor(config?: any);
    }
    export class SequentialIdGenerator extends Ext.data.IdGenerator {
        constructor();
    }
    export class SortTypes {
        static stripTagsRE: RegExp;
        static asDate(s: any):number;
        static asFloat(s: any):number;
        static asInt(s: any):number;
        static asText(s: any):string;
        static asUCString(s: any):string;
        static asUCText(s: any):string;
        static getInitialConfig(name: any):void;
        static none(s: any):any;
    }
    export class Store extends Ext.data.AbstractStore {
        currentPage: number;
        data: Ext.util.MixedCollection;
        groupers: Ext.util.MixedCollection;
        snapshot: Ext.util.MixedCollection;
        constructor(config?: any);
        addSorted(record: Ext.data.Model):void;
        aggregate(fn: Function, scope?: any, grouped?: boolean, args?: any[]):any;
        average(field: string, grouped?: boolean):any;
        clearFilter(suppressEvent: boolean):void;
        clearGrouping():void;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        commitChanges():void;
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        filter(filters: any, value?: string):void;
        filterBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):void;
        find(fieldName: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any, startIndex?: number):number;
        findExact(fieldName: string, value: any, startIndex?: number):number;
        findRecord(fieldName: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        first(grouped?: boolean):any;
        getAt(index: number):Ext.data.Model;
        getById(id: any):Ext.data.Model;
        getCount():number;
        getGroupString(instance: Ext.data.Model):string;
        getGroups(groupName?: string):any;
        getPageFromRecordIndex(index: number):number;
        getRange(startIndex?: number, endIndex?: number):Ext.data.Model[];
        getTotalCount():number;
        group(groupers: any, direction?: string):void;
        guaranteeRange(start: any, end: any, cb: any, scope: any):void;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        indexOfTotal(record: Ext.data.Model):number;
        insert(index: number, records: Ext.data.Model[]):void;
        isFiltered():boolean;
        isGrouped():boolean;
        last(grouped?: boolean):any;
        loadData(data: any, append?: boolean):void;
        loadPage(page: number, options: any):void;
        loadRawData(data: any[], append?: boolean):void;
        loadRecords(records: Ext.data.Model[], options: any):void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        nextPage(options: any):void;
        prefetch(options?: any):void;
        prefetchPage(page: number, options?: any):void;
        prefetchRange(start: any, end: any):void;
        previousPage(options: any):void;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.MixedCollection;
        rejectChanges():void;
        removeAt(index: number):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static defaultSortDirection: string;
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sortRoot: string;
        static sorters: Ext.util.MixedCollection;
        static add(key: string, o: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static getKey(o: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: string, o?: any):any;
        static last():any;
        static lookup(store: any):Ext.data.Store;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: any, direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unregister(...stores: any[]):void;
    }
    export class Tree extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        root: Ext.data.NodeInterface;
        constructor(root?: Ext.data.NodeInterface);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getNodeById(id: string):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setRootNode(node: Ext.data.NodeInterface):Ext.data.NodeInterface;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class TreeStore extends Ext.data.AbstractStore {
        constructor(config: any);
        getNodeById(id: any):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        setRootNode(root: any):Ext.data.NodeInterface;
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
        static getInitialConfig(name: any):void;
    }
    export class UuidGenerator extends Ext.data.IdGenerator {
        salt: any;
        timestamp: any;
        constructor(config?: any);
        reconfigure(config: any):void;
    }
    export class XmlStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class validations {
        static emailMessage: string;
        static emailRe: RegExp;
        static exclusionMessage: string;
        static formatMessage: boolean;
        static inclusionMessage: string;
        static lengthMessage: string;
        static presenceMessage: string;
        static email(config: any, email: string):boolean;
        static exclusion(config: any, value: string):boolean;
        static format(config: any, value: string):boolean;
        static getInitialConfig(name: any):void;
        static inclusion(config: any, value: string):boolean;
        static length(config: any, value: string):boolean;
        static presence(config: any, value: any):boolean;
    }
}
declare module Ext.data.association {
    export class Association extends Ext.Base {
        associatedName: string;
        ownerName: string;
        constructor(config?: any);
        getReader():Ext.data.reader.Reader;
    }
    export class BelongsTo extends Ext.data.association.Association {
        constructor(config?: any);
    }
    export class HasMany extends Ext.data.association.Association {
        constructor(config?: any);
    }
    export class HasOne extends Ext.data.association.Association {
        constructor(config?: any);
    }
}
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        actionMethods: any;
        constructor(config?: any);
        getMethod(request: Ext.data.Request):string;
    }
    export class Client extends Ext.data.proxy.Proxy {
        constructor(config?: any);
        clear():void;
    }
    export class Direct extends Ext.data.proxy.Server {
        constructor(config: any);
    }
    export class JsonP extends Ext.data.proxy.Server {
        constructor();
        abort():void;
        encodeRecords(records: Ext.data.Model[]):string;
    }
    export class LocalStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class Memory extends Ext.data.proxy.Client {
        constructor(config?: any);
    }
    export class Proxy extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        isProxy: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        clearManagedListeners():void;
        destroy(operation: Ext.data.Operation, callback: Function, scope: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getModel():Ext.data.Model;
        getReader():Ext.data.reader.Reader;
        getWriter():Ext.data.writer.Writer;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        read(operation: Ext.data.Operation, callback: Function, scope: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setModel(model: any, setOnStore: boolean):void;
        setReader(reader: any):Ext.data.reader.Reader;
        setWriter(writer: any):Ext.data.writer.Writer;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        update(operation: Ext.data.Operation, callback: Function, scope: any):void;
    }
    export class Rest extends Ext.data.proxy.Ajax {
        constructor(config?: any);
    }
    export class Server extends Ext.data.proxy.Proxy {
        constructor(config?: any);
        afterRequest(request: Ext.data.Request, success: boolean):void;
        buildRequest(operation: Ext.data.Operation):Ext.data.Request;
        buildUrl(request: Ext.data.Request):string;
        doRequest(operation: Ext.data.Operation, callback: Function, scope: any):void;
        encodeFilters(filters: Ext.util.Filter[]):string;
        encodeSorters(sorters: Ext.util.Sorter[]):string;
        setExtraParam(name: string, value: any):void;
    }
    export class SessionStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class WebStorage extends Ext.data.proxy.Client {
        cache: any;
        constructor(config?: any);
        setRecord(record: Ext.data.Model, id?: string):void;
    }
}
declare module Ext.data.reader {
    export class Array extends Ext.data.reader.Json {
        constructor(meta: any);
    }
    export class Json extends Ext.data.reader.Reader {
        jsonData: any;
        constructor(config?: any);
    }
    export class Reader extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        metaData: any;
        rawData: any;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getResponseData(response: any):Ext.data.ResultSet;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        read(response: any):Ext.data.ResultSet;
        readRecords(data: any):Ext.data.ResultSet;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        xmlData: any;
        constructor(config?: any);
        getData(data: any):any;
    }
}
declare module Ext.data.writer {
    export class Json extends Ext.data.writer.Writer {
        constructor(config?: any);
    }
    export class Writer extends Ext.Base {
        constructor(config?: any);
        getRecordData(record: Ext.data.Model, operation?: Ext.data.Operation):any;
        write(request: Ext.data.Request):Ext.data.Request;
    }
    export class Xml extends Ext.data.writer.Writer {
        constructor(config?: any);
    }
}
declare module Ext.dd {
    export class DD extends Ext.dd.DragDrop {
        scroll: boolean;
        constructor(id: string, sGroup: string, config: any);
        alignElWithMouse(el: HTMLElement, iPageX: number, iPageY: number):void;
        autoOffset(iPageX: number, iPageY: number):void;
        b4Drag(e: any):void;
        b4MouseDown(e: any):void;
        cachePosition(iPageX?: number, iPageY?: number):void;
        setDelta(iDeltaX: number, iDeltaY: number):void;
        setDragElPos(iPageX: number, iPageY: number):void;
    }
    export class DDProxy extends Ext.dd.DD {
        centerFrame: boolean;
        resizeFrame: boolean;
        static dragElId: string;
        constructor(id: string, sGroup: string, config: any);
        createFrame():void;
        initFrame():void;
    }
    export class DDTarget extends Ext.dd.DragDrop {
        constructor(id: string, sGroup: string, config: any);
    }
    export class DragDrop extends Ext.Base {
        available: boolean;
        config: any;
        defaultPadding: any;
        groups: any;
        hasOuterHandles: boolean;
        id: string;
        ignoreSelf: boolean;
        invalidHandleClasses: string[];
        invalidHandleIds: any;
        invalidHandleTypes: any;
        isTarget: boolean;
        maintainOffset: boolean;
        moveOnly: boolean;
        padding: number[];
        primaryButtonOnly: boolean;
        xTicks: number[];
        yTicks: number[];
        constructor(id: string, sGroup: string, config: any);
        addInvalidHandleClass(cssClass: string):void;
        addInvalidHandleId(id: string):void;
        addInvalidHandleType(tagName: string):void;
        addToGroup(sGroup: string):void;
        applyConfig():void;
        clearConstraints():void;
        clearTicks():void;
        constrainTo(constrainTo: any, pad?: any, inContent?: boolean):void;
        endDrag(e: Event):void;
        getDragEl():HTMLElement;
        getEl():HTMLElement;
        init(id: string, sGroup: string, config: any):void;
        initTarget(id: string, sGroup: string, config: any):void;
        isLocked():boolean;
        isValidHandleChild(node: HTMLElement):boolean;
        lock():void;
        onAvailable():void;
        onDrag(e: Event):void;
        onDragDrop(e: Event, id: any):void;
        onDragEnter(e: Event, id: any):void;
        onDragOut(e: Event, id: any):void;
        onDragOver(e: Event, id: any):void;
        onInvalidDrop(e: Event):void;
        onMouseDown(e: Event):void;
        onMouseUp(e: Event):void;
        removeFromGroup(sGroup: string):void;
        removeInvalidHandleClass(cssClass: string):void;
        removeInvalidHandleId(id: string):void;
        removeInvalidHandleType(tagName: string):void;
        resetConstraints(maintainOffset: boolean):void;
        setDragElId(id: string):void;
        setHandleElId(id: string):void;
        setInitPosition(diffX: number, diffY: number):void;
        setOuterHandleElId(id: string):void;
        setPadding(iTop: number, iRight: number, iBot: number, iLeft: number):void;
        setXConstraint(iLeft: number, iRight: number, iTickSize?: number):void;
        setYConstraint(iUp: number, iDown: number, iTickSize?: number):void;
        startDrag(X: number, Y: number):void;
        toString():string;
        unlock():void;
        unreg():void;
    }
    export class DragDropElement {
        getPosX(el: HTMLElement):number;
        getPosY(el: HTMLElement):number;
        getScrollLeft():number;
        getScrollTop():number;
        getStyle(el: HTMLElement, styleProp: string):string;
        handleWasClicked(node: HTMLElement):void;
        moveToEl(moveEl: HTMLElement, targetEl: HTMLElement):void;
        numericSort(a: number, b: number):number;
        swapNode(n1: HTMLElement, n2: HTMLElement):void;
    }
    export class DragDropManager {
        static INTERSECT: number;
        static POINT: number;
        static clickPixelThresh: number;
        static clickTimeThresh: number;
        static mode: number;
        static notifyOccluded: boolean;
        static preventDefault: boolean;
        static stopPropagation: boolean;
        static useCache: boolean;
        static getBestMatch(dds: Ext.dd.DragDrop[]):Ext.dd.DragDrop;
        static getCss(id: string):any;
        static getDDById(id: string):Ext.dd.DragDrop;
        static getElement(id: string):any;
        static getInitialConfig(name: any):void;
        static getLocation(oDD: Ext.dd.DragDrop):Ext.util.Region;
        static getRelated(p_oDD: Ext.dd.DragDrop, bTargetsOnly: boolean):Ext.dd.DragDrop[];
        static isDragDrop(id: string):boolean;
        static isHandle(id: string):boolean;
        static isLegalTarget(oDD: Ext.dd.DragDrop, oTargetDD: Ext.dd.DragDrop):boolean;
        static isLocked():boolean;
        static isTypeOfDD(the: any):boolean;
        static lock():void;
        static refreshCache(groups: any):void;
        static regDragDrop(oDD: Ext.dd.DragDrop, sGroup: string):void;
        static regHandle(sDDId: string, sHandleId: string):void;
        static startDrag(x: number, y: number):void;
        static stopEvent(e: Event):void;
        static unlock():void;
        static verifyEl(el: HTMLElement):boolean;
    }
    export class DragSource extends Ext.dd.DDProxy {
        constructor(el: any, config?: any);
        afterDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOut(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOver(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterInvalidDrop(e: Event, id: string):void;
        afterValidDrop(target: any, e: Event, id: string):void;
        beforeDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOut(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOver(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeInvalidDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        getDragData(e: any):any;
        getProxy():Ext.dd.StatusProxy;
        hideProxy():void;
        onBeforeDrag(data: any, e: Event):boolean;
        onStartDrag(x: number, y: number):void;
    }
    export class DragTracker extends Ext.Base {
        active: boolean;
        dragTarget: HTMLElement;
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getDragTarget():Ext.dom.Element;
        getOffset(constrainMode: any):number[];
        hasListener(eventName: string):boolean;
        initEl(el: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        onBeforeStart(e: Ext.EventObject):void;
        onDrag(e: Ext.EventObject):void;
        onEnd(e: Ext.EventObject):void;
        onStart(e: Ext.EventObject):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        dragData: any;
        constructor(el: any, config: any);
        afterRepair():void;
        getRepairXY(e: Event):number[];
        onInitDrag(x: number, y: number):boolean;
    }
    export class DropTarget extends Ext.dd.DDTarget {
        constructor(el: any, config: any);
        notifyDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        notifyEnter(source: Ext.dd.DragSource, e: Event, data: any):string;
        notifyOut(source: Ext.dd.DragSource, e: Event, data: any):void;
        notifyOver(source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class DropZone extends Ext.dd.DropTarget {
        constructor(el: any, config: any);
        getTargetFromEvent(e: Event):any;
        onContainerDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onContainerOver(source: Ext.dd.DragSource, e: Event, data: any):string;
        onNodeDrop(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onNodeEnter(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOut(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOver(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class Registry {
        static getHandle(id: any):any;
        static getHandleFromEvent(e: Event):any;
        static getInitialConfig(name: any):void;
        static getTarget(id: any):any;
        static getTargetFromEvent(e: Event):any;
        static register(element: any, data: any):void;
        static unregister(element: any):void;
    }
    export class ScrollManager {
        static animDuration: number;
        static animate: boolean;
        static ddGroup: string;
        static frequency: number;
        static hthresh: number;
        static increment: number;
        static vthresh: number;
        static getInitialConfig(name: any):void;
        static refreshCache():void;
        static register(el: any):void;
        static unregister(el: any):void;
    }
    export class StatusProxy extends Ext.Component {
        constructor(config?: any);
        getGhost():Ext.dom.Element;
        repair(xy: number[], callback: Function, scope: any):void;
        reset(clearGhost: boolean):void;
        setStatus(cssClass: string):void;
        stop():void;
        sync():void;
    }
}
declare module Ext.dd.DragDropManager {
    export class ElementWrapper {
        css: any;
        el: any;
        id: any;
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
        createEvent(response: any):Ext.direct.Event;
    }
    export class Manager {
        static hasListeners: any;
        static isObservable: boolean;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addProvider(...provider: any[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static getProvider(id: any):void;
        static hasListener(eventName: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: any):Ext.direct.Provider;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        constructor(config: any);
    }
    export class Provider extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isConnected():void;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class RemotingEvent extends Ext.direct.Event {
        constructor(config?: any);
        getTransaction():Ext.direct.Transaction;
    }
    export class RemotingMethod extends Ext.Base {
        constructor(config: any);
        getCallData(args: any[]):any;
    }
    export class RemotingProvider extends Ext.direct.JsonProvider {
        constructor(config: any);
    }
    export class Transaction extends Ext.Base {
        constructor(config?: any);
    }
}
declare module Ext.dom {
    export class AbstractElement extends Ext.Base {
        defaultUnit: string;
        dom: HTMLElement;
        id: string;
        static ASCLASS: number;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        addCls(className: any):Ext.dom.Element;
        appendChild(el: any):Ext.dom.AbstractElement;
        appendTo(el: any):Ext.dom.AbstractElement;
        applyStyles(styles: any):Ext.dom.Element;
        child(selector: string, returnDom?: boolean):any;
        contains(el: any):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.AbstractElement;
        destroy():void;
        down(selector: string, returnDom?: boolean):any;
        findParent(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        first(selector?: string, returnDom?: boolean):any;
        getActiveElement():HTMLElement;
        getAlignToXY(element: any, position?: string, offsets?: any[]):any[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):any[];
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getById(id: string, asDom?: boolean):void;
        getHTML():void;
        getHeight(contentHeight?: boolean):number;
        getLeft(local: boolean):number;
        getMargin(sides?: string):any;
        getOffsetsTo(element: any):any[];
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRight(local: boolean):number;
        getSize(contentSize?: boolean):any;
        getStyle(property: any, inline?: boolean):any;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):any;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX(el: any):number;
        getXY():any[];
        getY(el: any):number;
        hasCls(className: string):boolean;
        hide(animate?: any):Ext.dom.Element;
        insertAfter(el: any):Ext.dom.AbstractElement;
        insertBefore(el: any):Ext.dom.AbstractElement;
        insertFirst(el: any):Ext.dom.AbstractElement;
        insertHtml(where: string, html: string, returnEl?: boolean):any;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.AbstractElement;
        is(selector: string):boolean;
        isStyle(style: string, value: string):boolean;
        isTransparent(prop: string):boolean;
        last(selector?: string, returnDom?: boolean):any;
        mask(msg?: string, msgCls?: string):void;
        next(selector?: string, returnDom?: boolean):any;
        parent(selector?: string, returnDom?: boolean):any;
        populateStyleMap(map: any, order: any):void;
        prev(selector?: string, returnDom?: boolean):any;
        query(selector: string):HTMLElement[];
        radioCls(className: any):Ext.dom.Element;
        remove():void;
        removeCls(className: any):Ext.dom.Element;
        repaint():Ext.dom.Element;
        replace(el: any):Ext.dom.AbstractElement;
        replaceCls(oldClassName: string, newClassName: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.AbstractElement;
        select(selector: string):Ext.dom.CompositeElement;
        serializeForm(form: any):string;
        set(o: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: string):Ext.dom.AbstractElement;
        setBox(box: any, adjust?: boolean, animate?: any):Ext.dom.AbstractElement;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: any, animate?: any):Ext.dom.Element;
        setLeft(left: string):Ext.dom.AbstractElement;
        setRight(right: string):Ext.dom.AbstractElement;
        setSize(width: any, height: any, animate?: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: string):Ext.dom.AbstractElement;
        setVisibilityMode(mode: any):Ext.dom.AbstractElement;
        setVisible(visible: boolean, animate?: any):Ext.dom.Element;
        setWidth(width: any, animate?: any):Ext.dom.Element;
        setX(The: number, animate?: any):Ext.dom.AbstractElement;
        setXY(pos: any[], animate?: any):Ext.dom.AbstractElement;
        setY(The: number, animate?: any):Ext.dom.AbstractElement;
        show(animate?: any):Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        translatePoints(x: any, y?: number):any;
        unmask():void;
        up(selector: string, limit?: any):Ext.dom.Element;
        update(html: string):Ext.dom.Element;
        wrap(config?: any, returnDom?: boolean):any;
        static fly(dom: any, named?: string):Ext.dom.AbstractElement.Fly;
        static fromPoint(x: number, y: number):string;
        static get(el: any):Ext.dom.Element;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():any;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static mergeClsList(clsList1: any, clsList2: any):any[];
        static normalize(prop: string):string;
        static parseBox(box: any):any;
        static parseStyles(styles: string):any;
        static removeCls(existingClsList: any, removeClsList: any):any[];
        static unitizeBox(box: any, units: string):string;
    }
    export class AbstractHelper extends Ext.Base {
        append(el: any, o: any, returnElement?: boolean):any;
        applyStyles(el: any, styles: any):void;
        generateStyles(styles: any, buffer?: string[]):any;
        insertAfter(el: any, o: any, returnElement?: boolean):any;
        insertBefore(el: any, o: any, returnElement?: boolean):any;
        insertFirst(el: any, o: any, returnElement?: boolean):any;
        insertHtml(where: string, el: any, html: string):HTMLElement;
        markup(spec: any):string;
        overwrite(el: any, o: any, returnElement?: boolean):any;
    }
    export class AbstractQuery extends Ext.Base {
        is(el: any, selector: string):boolean;
        select(selector: string, root?: any):HTMLElement[];
        selectNode(selector: string, root?: any):HTMLElement;
    }
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(elements: any, root: any);
    }
    export class CompositeElementLite extends Ext.Base {
        elements: HTMLElement[];
        isComposite: boolean;
        constructor(elements: any, root: any);
        add(els: any):Ext.dom.CompositeElement;
        clear():void;
        contains(el: any):boolean;
        each(fn: (el: Ext.dom.Element, c: Ext.dom.CompositeElement, index: number) => any, scope?: any):Ext.dom.CompositeElement;
        fill(els: any):Ext.dom.CompositeElement;
        filter(selector: any):Ext.dom.CompositeElement;
        first():Ext.dom.Element;
        getCount():number;
        indexOf(el: any):number;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        removeElement(el: any, removeDom?: boolean):Ext.dom.CompositeElement;
        replaceElement(el: any, replacement: any, domReplace?: boolean):Ext.dom.CompositeElement;
    }
    export class Element extends Ext.dom.AbstractElement {
        autoBoxAdjust: boolean;
        originalDisplay: string;
        constructor(element: any, forceNew?: boolean);
        addClsOnClick(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addClsOnFocus(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addClsOnOver(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addKeyListener(key: any, fn: Function, scope?: any):Ext.util.KeyMap;
        addKeyMap(config: any):Ext.util.KeyMap;
        addListener(eventName: string, fn: Function, scope?: any, options?: any):Ext.dom.Element;
        alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.dom.Element;
        anchorTo(element: any, position: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.dom.Element;
        blur():Ext.dom.Element;
        boxWrap(class_?: string):Ext.dom.Element;
        cacheScrollValues():Function;
        center(centerIn?: any):void;
        clean(forceReclean?: boolean):void;
        clearListeners():Ext.dom.Element;
        clearOpacity():Ext.dom.Element;
        clearPositioning(value?: string):Ext.dom.AbstractElement;
        clip():Ext.dom.Element;
        createProxy(config: any, renderTo?: any, matchBox?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        enableDisplayMode(display?: string):Ext.dom.Element;
        fadeIn(options?: any):Ext.dom.Element;
        fadeOut(options?: any):Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        focusable():boolean;
        frame(color?: string, count?: number, options?: any):Ext.dom.Element;
        getAttributeNS(namespace: string, name: string):string;
        getCenterXY():number[];
        getColor(attr: string, defaultValue: string, prefix?: string):void;
        getComputedHeight():number;
        getComputedWidth():number;
        getConstrainVector(constrainTo: any, proposedPosition: number[]):any;
        getFrameWidth(sides: string):number;
        getLoader():Ext.ElementLoader;
        getPositioning():any;
        getRegion():Ext.util.Region;
        getScopeParent():HTMLElement;
        getScroll():any;
        getStyleSize():any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getViewRegion():Ext.util.Region;
        ghost(anchor?: string, options?: any):Ext.dom.Element;
        highlight(color?: string, options?: any):Ext.dom.Element;
        hover(overFn: Function, outFn: Function, scope?: any, options?: any):Ext.dom.Element;
        initDD(group: string, config: any, overrides: any):Ext.dd.DD;
        initDDProxy(group: string, config: any, overrides: any):Ext.dd.DDProxy;
        initDDTarget(group: string, config: any, overrides: any):Ext.dd.DDTarget;
        isBorderBox():boolean;
        isDisplayed():boolean;
        isMasked():boolean;
        isScrollable():boolean;
        isVisible(deep?: boolean):boolean;
        load(options: any):Ext.dom.Element;
        monitorMouseLeave(delay: number, handler: Function, scope?: any):any;
        move(direction: string, distance: number, animate?: any):void;
        moveTo(x: number, y: number, animate?: any):Ext.dom.AbstractElement;
        needsTabIndex():void;
        on(eventName: string, fn: Function, scope?: any, options?: any):Ext.dom.Element;
        pause(seconds: number):Ext.dom.Element;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        puff(options?: any):Ext.dom.Element;
        purgeAllListeners():Ext.dom.Element;
        relayEvent(eventName: string, observable: any):void;
        removeAllListeners():Ext.dom.Element;
        removeAnchor():Ext.dom.Element;
        removeListener(eventName: string, fn: Function, scope: any):Ext.dom.Element;
        scale(width: number, height: number, options?: any):Ext.dom.Element;
        scroll(direction: string, distance: number, animate?: any):boolean;
        scrollBy(deltaX: any, deltaY: any, animate: any):Ext.dom.Element;
        scrollIntoView(container?: any, hscroll?: boolean):Ext.dom.Element;
        scrollTo(side: string, value: number, animate?: any):Ext.dom.Element;
        selectable():Ext.dom.Element;
        setBounds(x: number, y: number, width: any, height: any, animate?: any):Ext.dom.AbstractElement;
        setDisplayed(value: any):Ext.dom.Element;
        setLeftTop(left: string, top: string):Ext.dom.Element;
        setLocation(x: number, y: number, animate?: any):Ext.dom.AbstractElement;
        setOpacity(opacity: number, animate?: any):Ext.dom.Element;
        setPositioning(posCfg: any):Ext.dom.AbstractElement;
        setRegion(region: Ext.util.Region, animate?: any):Ext.dom.AbstractElement;
        shift(options: any):Ext.dom.Element;
        slideIn(anchor?: string, options?: any):Ext.dom.Element;
        slideOut(anchor?: string, options?: any):Ext.dom.Element;
        swallowEvent(eventName: any, preventDefault?: boolean):Ext.dom.Element;
        switchOff(options?: any):Ext.dom.Element;
        toggle(animate?: any):Ext.dom.Element;
        un(eventName: string, fn: Function, scope: any):Ext.dom.Element;
        unclip():Ext.dom.Element;
        unselectable():Ext.dom.Element;
        static select(selector: any, unique?: boolean, root?: any):any;
        static serializeForm(form: any):string;
    }
    export class Helper {
        static useDom: boolean;
        static append(el: any, o: any, returnElement?: boolean):any;
        static applyStyles(el: any, styles: any):void;
        static createDom(o: any):HTMLElement;
        static createHtml(spec: any):string;
        static createTemplate(o: any):Ext.Template;
        static generateStyles(styles: any, buffer?: string[]):any;
        static getInitialConfig(name: any):void;
        static insertAfter(el: any, o: any, returnElement?: boolean):any;
        static insertBefore(el: any, o: any, returnElement?: boolean):any;
        static insertFirst(el: any, o: any, returnElement?: boolean):any;
        static insertHtml(where: string, el: any, html: string):HTMLElement;
        static markup(spec: any):string;
        static overwrite(el: any, o: any, returnElement?: boolean):any;
    }
    export class Query {
        static matchers: any[];
        static operators: any;
        static pseudos: any;
        static compile(selector: string, type?: string):Function;
        static filter(el: any[], selector: string, nonMatches: boolean):any[];
        static is(el: any, selector: string):boolean;
        static jsSelect(selector: string, root?: any):any[];
        static select(path: string, root?: HTMLElement):any[];
        static selectNode(selector: string, root?: HTMLElement):HTMLElement;
        static selectNumber(selector: string, root?: HTMLElement, defaultValue?: number):number;
        static selectValue(selector: string, root?: HTMLElement, defaultValue?: string):string;
    }
}
declare module Ext.dom.AbstractElement {
    export class Fly extends Ext.dom.AbstractElement {
        isFly: boolean;
    }
}
declare module Ext.draw {
    export class Color extends Ext.Base {
        constructor(red: number, green: number, blue: number);
        getBlue():number;
        getDarker(factor: number):any;
        getGrayscale():number;
        getGreen():number;
        getHSL():number[];
        getLighter(factor: number):any;
        getRGB():number[];
        getRed():number;
        toString():string;
        static fromHSL(h: number, s: number, l: number):any;
        static fromString(str: string):any;
        static toHex(color: any):string;
    }
    export class Component extends Ext.Component {
        constructor(config: any);
        createSurface():void;
    }
    export class CompositeSprite extends Ext.util.MixedCollection {
        constructor(config: any);
        animate(config: any):any;
        destroy():void;
        getActiveAnimation():any;
        getBBox():any;
        hasActiveFx():any;
        hide(redraw: boolean):Ext.draw.CompositeSprite;
        sequenceFx():any;
        setAttributes(attrs: any, redraw: boolean):Ext.draw.CompositeSprite;
        show(redraw: boolean):Ext.draw.CompositeSprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():any;
    }
    export class Draw {
        static getInitialConfig(name: any):void;
        static snapEndsByDate(from: Date, to: Date, stepsMax: number, lockEnds: boolean):any;
        static snapEndsByDateAndStep(from: Date, to: Date, step: any[], lockEnds: boolean):void;
    }
    export class Matrix extends Ext.Base {
        constructor(a: any, b: any, c: any, d: any, e: any, f: any);
    }
    export class Sprite extends Ext.Base {
        dd: Ext.dd.DragSource;
        hasListeners: any;
        isObservable: boolean;
        isSprite: boolean;
        constructor(config: any);
        addCls(className: any):Ext.draw.Sprite;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        animate(config: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getActiveAnimation():any;
        getBBox():any;
        hasActiveFx():any;
        hasListener(eventName: string):boolean;
        hide(redraw: boolean):Ext.draw.Sprite;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        redraw():Ext.draw.Sprite;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove():boolean;
        removeCls(className: any):Ext.draw.Sprite;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        sequenceFx():any;
        setAttributes(attrs: any, redraw: boolean):Ext.draw.Sprite;
        setStyle(property: any, value?: string):Ext.draw.Sprite;
        show(redraw: boolean):Ext.draw.Sprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class SpriteDD extends Ext.dd.DragSource {
        constructor(sprite: any, cfg: any);
    }
    export class Surface extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(...args: any[]):any;
        addCls(sprite: any, className: any):void;
        addEvents(...eventNames: any[]):void;
        addGradient(gradient: any):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getGroup(id: string):any;
        getId():void;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(sprite: Ext.draw.Sprite, destroySprite: boolean):void;
        removeAll(destroySprites: boolean):void;
        removeCls(sprite: any, className: any):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setSize(w: number, h: number):void;
        setStyle(sprite: any, styles: any):void;
        setText(sprite: any, text: string):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Text extends Ext.draw.Component {
        constructor(text: any);
        setAngle(degrees: number):void;
        setText(t: string):void;
    }
}
declare module Ext.draw.engine {
    export class ImageExporter {
        static getInitialConfig(name: any):void;
    }
    export class Svg extends Ext.draw.Surface {
        constructor(config?: any);
        applyZIndex(sprite: Ext.draw.Sprite):void;
        getRegion():Ext.util.Region;
        hasCls(className: string):boolean;
    }
    export class SvgExporter {
        static getInitialConfig(name: any):void;
    }
    export class Vml extends Ext.draw.Surface {
        constructor(config?: any);
    }
}
declare module Ext.env {
    export class Browser extends Ext.Base {
        engineName: string;
        engineVersion: string;
        isSecure: boolean;
        isStrict: boolean;
        name: string;
        version: Ext.Version;
        constructor();
        is(value: string):boolean;
    }
    export class FeatureDetector extends Ext.Base {
        Audio: boolean;
        CSS3DTransforms: boolean;
        CSSAnimations: boolean;
        CSSTransforms: boolean;
        CSSTransitions: boolean;
        Canvas: boolean;
        Geolocation: boolean;
        History: boolean;
        Orientation: boolean;
        SVG: boolean;
        SqlDatabase: boolean;
        Touch: boolean;
        VML: boolean;
        Video: boolean;
        Websockets: boolean;
        constructor();
    }
    export class OS extends Ext.Base {
        name: string;
        version: Ext.Version;
        constructor();
        is(value: string):boolean;
    }
}
declare module Ext.flash {
    export class Component extends Ext.Component {
        swf: Ext.dom.Element;
        static EXPRESS_INSTALL_URL: string;
        constructor(config: any);
        getSwfId():void;
    }
}
declare module Ext.form {
    export class Basic extends Ext.util.Observable {
        owner: Ext.container.Container;
        constructor(owner: Ext.container.Container, config: any);
        applyIfToFields(obj: any):Ext.form.Basic;
        applyToFields(obj: any):Ext.form.Basic;
        checkDirty():void;
        checkValidity():void;
        clearInvalid():Ext.form.Basic;
        destroy():void;
        doAction(action: any, options?: any):Ext.form.Basic;
        findField(id: string):Ext.form.field.Field;
        getFieldValues(dirtyOnly?: boolean):any;
        getFields():Ext.util.MixedCollection;
        getRecord():Ext.data.Model;
        getValues(asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean):any;
        hasInvalidField():void;
        hasUpload():any;
        isDirty():any;
        isValid():any;
        load(options: any):Ext.form.Basic;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        markInvalid(errors: any):Ext.form.Basic;
        reset():Ext.form.Basic;
        setValues(values: any):Ext.form.Basic;
        submit(options: any):Ext.form.Basic;
        updateRecord(record?: Ext.data.Model):Ext.form.Basic;
    }
    export class CheckboxGroup extends Ext.form.FieldContainer {
        isFormField: boolean;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: any):void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getChecked():Ext.form.field.Checkbox[];
        getErrors():string[];
        getModelData():any;
        getSubmitData():any;
        getValue():void;
        initField():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: any, value2: any):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        reset():void;
        resetOriginalValue():void;
        setValue(value: any):Ext.form.CheckboxGroup;
        validate():boolean;
    }
    export class CheckboxManager {
        static defaultSortDirection: string;
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sortRoot: string;
        static sorters: Ext.util.MixedCollection;
        static add(key: string, o: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: string, o?: any):any;
        static last():any;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: any, direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class FieldAncestor extends Ext.Base {
        initFieldAncestor():void;
        onFieldAdded(field: Ext.form.field.Field):void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldRemoved(field: Ext.form.field.Field):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        onLabelableAdded(labelable: Ext.form.Labelable):void;
        onLabelableRemoved(labelable: Ext.form.Labelable):void;
    }
    export class FieldContainer extends Ext.container.Container {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        constructor(config: any);
        getActiveError():string;
        getActiveErrors():string[];
        getCombinedErrors(invalidFields: Ext.form.field.Field[]):string[];
        getFieldLabel():void;
        getInputId():string;
        getLabelableRenderData():any;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initFieldAncestor():void;
        initLabelable():void;
        onFieldAdded(field: Ext.form.field.Field):void;
        onFieldRemoved(field: Ext.form.field.Field):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        onLabelableAdded(labelable: Ext.form.Labelable):void;
        onLabelableRemoved(labelable: Ext.form.Labelable):void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        unsetActiveError():void;
    }
    export class FieldSet extends Ext.container.Container {
        checkboxCmp: Ext.form.field.Checkbox;
        legend: Ext.Component;
        toggleCmp: Ext.panel.Tool;
        constructor(config: any);
        collapse():Ext.form.FieldSet;
        createCheckboxCmp():any;
        createTitleCmp():any;
        createToggleCmp():any;
        expand():Ext.form.FieldSet;
        setTitle(title: string):Ext.form.FieldSet;
        toggle():void;
    }
    export class Label extends Ext.Component {
        constructor(config: any);
        setText(text: string, encode?: boolean):Ext.form.Label;
    }
    export class Labelable extends Ext.Base {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        getActiveError():string;
        getActiveErrors():string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelableRenderData():any;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initLabelable():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        unsetActiveError():void;
    }
    export class Panel extends Ext.panel.Panel {
        constructor(config: any);
        checkChange():void;
        getForm():Ext.form.Basic;
        getRecord():Ext.data.Model;
        getValues(asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean):any;
        initFieldAncestor():void;
        load(options: any):void;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        onFieldAdded(field: Ext.form.field.Field):void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldRemoved(field: Ext.form.field.Field):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        onLabelableAdded(labelable: Ext.form.Labelable):void;
        onLabelableRemoved(labelable: Ext.form.Labelable):void;
        startPolling(interval: number):void;
        stopPolling():void;
        submit(options: any):void;
    }
    export class RadioGroup extends Ext.form.CheckboxGroup {
        constructor(config: any);
    }
    export class RadioManager {
        static defaultSortDirection: string;
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sortRoot: string;
        static sorters: Ext.util.MixedCollection;
        static add(key: string, o: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getCount():number;
        static getInitialConfig(name: any):void;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: string, o?: any):any;
        static last():any;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: any, direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.form.action {
    export class Action extends Ext.Base {
        failureType: string;
        response: any;
        result: any;
        type: string;
        static CLIENT_INVALID: string;
        static CONNECT_FAILURE: string;
        static LOAD_FAILURE: string;
        static SERVER_INVALID: string;
        constructor(config?: any);
        run():void;
    }
    export class DirectLoad extends Ext.form.action.Load {
        constructor(config?: any);
    }
    export class DirectSubmit extends Ext.form.action.Submit {
        constructor(config?: any);
    }
    export class Load extends Ext.form.action.Action {
        constructor(config?: any);
    }
    export class StandardSubmit extends Ext.form.action.Submit {
        constructor(config?: any);
    }
    export class Submit extends Ext.form.action.Action {
        constructor(config?: any);
    }
}
declare module Ext.form.field {
    export class Base extends Ext.Component {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        inputEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        isFormField: boolean;
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: any):void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getActiveError():string;
        getActiveErrors():string[];
        getErrors(value: any):string[];
        getFieldLabel():string;
        getInputId():void;
        getLabelableRenderData():any;
        getModelData():any;
        getRawValue():string;
        getSubTplData():any;
        getSubTplMarkup():void;
        getSubmitData():any;
        getSubmitValue():string;
        getValue():any;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initField():void;
        initLabelable():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: any, value2: any):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        processRawValue(value: any):any;
        rawToValue(rawValue: any):any;
        reset():void;
        resetOriginalValue():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        setFieldStyle(style: any):void;
        setRawValue(value: any):any;
        setReadOnly(readOnly: boolean):void;
        setValue(value: any):Ext.form.field.Field;
        unsetActiveError():void;
        validate():boolean;
        validateValue(value: any):boolean;
        valueToRaw(value: any):any;
    }
    export class Checkbox extends Ext.form.field.Base {
        boxLabelEl: Ext.dom.Element;
        constructor(config: any);
    }
    export class ComboBox extends Ext.form.field.Picker {
        lastQuery: string;
        constructor(config: any);
        bindStore(store: Ext.data.AbstractStore, initial?: boolean):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearValue():void;
        doQuery(queryString: string, forceAll?: boolean, rawQuery?: boolean):boolean;
        findRecord(field: string, value: any):Ext.data.Model;
        findRecordByDisplay(value: any):Ext.data.Model;
        findRecordByValue(value: any):Ext.data.Model;
        getStore():Ext.data.Store;
        getStoreListeners():any;
        onBindStore(store: any, initial: any):void;
        onUnbindStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Date extends Ext.form.field.Picker {
        constructor(config: any);
        safeParse(value: string, format: string):Date;
        setDisabledDates(disabledDates: string[]):void;
        setDisabledDays(disabledDays: number[]):void;
        setMaxValue(value: Date):void;
        setMinValue(value: Date):void;
    }
    export class Display extends Ext.form.field.Base {
        constructor(config: any);
    }
    export class Field extends Ext.Base {
        isFormField: boolean;
        originalValue: any;
        batchChanges(fn: any):void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getErrors(value: any):string[];
        getModelData():any;
        getSubmitData():any;
        getValue():any;
        initField():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: any, value2: any):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        reset():void;
        resetOriginalValue():void;
        setValue(value: any):Ext.form.field.Field;
        validate():boolean;
    }
    export class File extends Ext.form.field.Trigger {
        button: Ext.button.Button;
        fileInputEl: Ext.dom.Element;
        constructor(config: any);
        getTriggerMarkup():void;
    }
    export class Hidden extends Ext.form.field.Base {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.Component {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        isFormField: boolean;
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: any):void;
        checkChange():void;
        checkDirty():void;
        cleanHtml(html: string):string;
        clearInvalid():void;
        createToolbar(editor: Ext.form.field.HtmlEditor):void;
        execCmd(cmd: string, value?: any):void;
        extractFileInput():HTMLElement;
        getActiveError():string;
        getActiveErrors():string[];
        getDocMarkup():void;
        getErrors(value: any):string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelableRenderData():any;
        getModelData():any;
        getSubTplMarkup():string;
        getSubmitData():any;
        getToolbar():Ext.toolbar.Toolbar;
        getValue():any;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initField():void;
        initLabelable():void;
        initValue():void;
        insertAtCursor(text: string):void;
        isDirty():boolean;
        isEqual(value1: any, value2: any):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        pushValue():void;
        relayCmd(cmd: string, value?: any):void;
        reset():void;
        resetOriginalValue():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        setReadOnly(readOnly: boolean):void;
        setValue(value: any):Ext.form.field.Field;
        syncValue():void;
        toggleSourceEdit(sourceEditMode?: boolean):void;
        unsetActiveError():void;
        updateToolbar():void;
    }
    export class Number extends Ext.form.field.Spinner {
        constructor(config: any);
        setMaxValue(value: number):void;
        setMinValue(value: number):void;
    }
    export class Picker extends Ext.form.field.Trigger {
        isExpanded: boolean;
        constructor(config: any);
        alignPicker():void;
        collapse():void;
        createPicker():void;
        expand():void;
        getPicker():Ext.Component;
    }
    export class Radio extends Ext.form.field.Checkbox {
        isRadio: boolean;
        constructor(config: any);
        getGroupValue():string;
    }
    export class Spinner extends Ext.form.field.Trigger {
        spinDownEl: Ext.dom.Element;
        spinUpEl: Ext.dom.Element;
        constructor(config: any);
        onSpinDown():void;
        onSpinUp():void;
        setSpinDownEnabled(enabled: boolean):void;
        setSpinUpEnabled(enabled: boolean):void;
        spinDown():void;
        spinUp():void;
    }
    export class Text extends Ext.form.field.Base {
        constructor(config: any);
        autoSize():void;
        selectText(start?: number, end?: number):void;
    }
    export class TextArea extends Ext.form.field.Text {
        constructor(config: any);
    }
    export class Time extends Ext.form.field.ComboBox {
        constructor(config: any);
        setMaxValue(value: any):void;
        setMinValue(value: any):void;
    }
    export class Trigger extends Ext.form.field.Text {
        inputCell: Ext.dom.Element;
        triggerEl: Ext.dom.CompositeElement;
        triggerWrap: Ext.dom.Element;
        constructor(config: any);
        getTriggerWidth():number;
        onTriggerClick(e: Ext.EventObject):void;
        setEditable(editable: boolean):void;
    }
    export class VTypes {
        static alphaMask: RegExp;
        static alphaText: string;
        static alphanumMask: RegExp;
        static alphanumText: string;
        static emailMask: RegExp;
        static emailText: string;
        static urlText: string;
        static alpha(value: string):boolean;
        static alphanum(value: string):boolean;
        static email(value: string):boolean;
        static getInitialConfig(name: any):void;
        static url(value: string):boolean;
    }
}
declare module Ext.fx {
    export class Anim extends Ext.Base {
        currentIteration: number;
        hasListeners: any;
        isAnimation: boolean;
        isObservable: boolean;
        paused: boolean;
        running: boolean;
        startTime: Date;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animator extends Ext.Base {
        currentIteration: number;
        hasListeners: any;
        isAnimator: boolean;
        isObservable: boolean;
        keyframeStep: number;
        paused: boolean;
        running: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class CubicBezier {
        static getInitialConfig(name: any):void;
    }
    export class Easing {
    }
    export class Manager {
        static addAnim(anim: Ext.fx.Anim):void;
        static getInitialConfig(name: any):void;
        static removeAnim(anim: Ext.fx.Anim):void;
    }
    export class PropertyHandler extends Ext.Base {
    }
    export class Queue extends Ext.Base {
        constructor();
    }
}
declare module Ext.fx.target {
    export class Component extends Ext.fx.target.Target {
        constructor(target: any);
    }
    export class CompositeElement extends Ext.fx.target.Element {
        isComposite: boolean;
        constructor(target: any);
    }
    export class CompositeElementCSS extends Ext.fx.target.CompositeElement {
        constructor(target: any);
    }
    export class CompositeSprite extends Ext.fx.target.Sprite {
        constructor(target: any);
    }
    export class Element extends Ext.fx.target.Target {
        constructor(target: any);
    }
    export class ElementCSS extends Ext.fx.target.Element {
        constructor(target: any);
    }
    export class Sprite extends Ext.fx.target.Target {
        constructor(target: any);
    }
    export class Target extends Ext.Base {
        constructor(target: any);
    }
}
declare module Ext.grid {
    export class CellEditor extends Ext.Editor {
        constructor(config: any);
    }
    export class ColumnComponentLayout extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class ColumnLayout extends Ext.layout.container.HBox {
        constructor(config: any);
    }
    export class Lockable extends Ext.Base {
        syncRowHeights():void;
    }
    export class LockingView extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PagingScroller extends Ext.Base {
        position: number;
        constructor(config: any);
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
        reconfigure(store?: Ext.data.Store, columns?: any[]):void;
    }
    export class RowEditor extends Ext.form.Panel {
        constructor(config: any);
        startEdit(record: Ext.data.Model, columnHeader: Ext.data.Model):void;
    }
    export class RowNumberer extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class View extends Ext.view.Table {
        constructor(config: any);
    }
    export class ViewDropZone extends Ext.view.DropZone {
        constructor(config: any);
    }
}
declare module Ext.grid.column {
    export class Action extends Ext.grid.column.Column {
        constructor(config: any);
        disableAction(index: any, silent?: boolean):void;
        enableAction(index: any, silent?: boolean):void;
    }
    export class Boolean extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Column extends Ext.grid.header.Container {
        isHeader: boolean;
        textEl: Ext.dom.Element;
        triggerEl: Ext.dom.Element;
        constructor(config: any);
        getEditor(record: any, defaultField: any):Ext.form.field.Field;
        getIndex():number;
        getSortParam():string;
        getVisibleIndex():number;
        setEditor(field: any):void;
        setText(text: string):void;
    }
    export class Date extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Number extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Template extends Ext.grid.column.Column {
        constructor(config: any);
    }
}
declare module Ext.grid.feature {
    export class AbstractSummary extends Ext.grid.feature.Feature {
        getColumnValue(column: Ext.grid.column.Column, data: any):string;
        toggleSummaryRow(visible: boolean):void;
    }
    export class Chunking extends Ext.grid.feature.Feature {
    }
    export class Feature extends Ext.util.Observable {
        collectData: boolean;
        disabled: boolean;
        eventPrefix: string;
        eventSelector: string;
        grid: Ext.grid.Panel;
        hasFeatureEvent: boolean;
        view: Ext.view.Table;
        attachEvents():void;
        disable():void;
        enable():void;
        getAdditionalData(data: any, idx: number, record: Ext.data.Model, orig: any):void;
        getFireEventArgs(eventName: any, view: any, featureTarget: any, e: any):void;
        getMetaRowTplFragments():void;
        mutateMetaRowTpl(metaRowTplArray: any[]):void;
    }
    export class Grouping extends Ext.grid.feature.Feature {
        constructor();
        collapse(groupName: any):void;
        collapseAll():void;
        expand(groupName: any):void;
        expandAll():void;
    }
    export class GroupingSummary extends Ext.grid.feature.Grouping {
        constructor();
        getColumnValue(column: Ext.grid.column.Column, data: any):string;
        toggleSummaryRow(visible: boolean):void;
    }
    export class RowBody extends Ext.grid.feature.Feature {
    }
    export class RowWrap extends Ext.grid.feature.Feature {
    }
    export class Summary extends Ext.grid.feature.AbstractSummary {
    }
}
declare module Ext.grid.header {
    export class Container extends Ext.container.Container {
        isGroupHeader: boolean;
        constructor(config: any);
        getColumnCount():void;
        getColumnMenu(headerContainer: any):void;
        getFullWidth(flushCache: any):void;
        getGridColumns(refreshCache: boolean):any[];
        getHeaderAtIndex(The: number):void;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getMenuItems():any[];
        getVisibleGridColumns(refreshCache: boolean):any[];
        getVisibleHeaderClosestToIndex(index: number):void;
        prepareData(data: any, rowIdx: any, record: any, view: any, panel: any):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(headerCt: any);
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(headerCt: any);
    }
}
declare module Ext.grid.plugin {
    export class CellEditing extends Ext.grid.plugin.Editing {
        constructor();
        startEditByPosition(position: any):void;
    }
    export class DragDrop extends Ext.AbstractPlugin {
        constructor(config: any);
    }
    export class Editing extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        completeEdit():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        startEdit(record: any, columnHeader: any):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class HeaderReorderer extends Ext.util.Observable {
    }
    export class HeaderResizer extends Ext.util.Observable {
        getDynamic():boolean;
        setDynamic(dynamic: boolean):void;
    }
    export class RowEditing extends Ext.grid.plugin.Editing {
        constructor();
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        constructor(config: any);
        getSource():any;
        removeProperty(prop: string):void;
        setProperty(prop: string, value: any, create?: boolean):void;
        setSource(source: any):void;
    }
    export class HeaderContainer extends Ext.grid.header.Container {
        constructor(grid: Ext.grid.property.Grid, source: any);
    }
    export class Property extends Ext.data.Model {
        constructor(config: any);
    }
    export class Store extends Ext.data.Store {
        constructor(grid: Ext.grid.Panel, source: any);
    }
}
declare module Ext.layout {
    export class ClassList extends Ext.Base {
        add(cls: any):void;
        addMany(classes: any):void;
        remove(cls: any):void;
        removeMany(classes: any):void;
    }
    export class Context extends Ext.Base {
        layoutQueue: Ext.util.Queue;
        state: number;
        constructor(config: any);
        flush():void;
        getCmp(cmp: Ext.Component):void;
        getEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        invalidate(components: any, ownerCtContext: Ext.layout.ContextItem, full: boolean):void;
        resetLayout(layout: any, ownerContext: any, firstTime: any):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(undefined: any, width: number, height: number):void;
    }
    export class ContextItem extends Ext.Base {
        state: any;
        wrapsComponent: boolean;
        constructor(config: any);
        addCls(newCls: any):void;
        block(layout: Ext.layout.Layout, propName: string):void;
        clearMarginCache():void;
        doInvalidate(full: boolean):void;
        domBlock(layout: Ext.layout.Layout, propName: string):void;
        flush():void;
        getBorderInfo():any;
        getClassList():void;
        getDomProp(propName: string):any;
        getEl(nameOrEl: any, owner: any):void;
        getFrameInfo():any;
        getMarginInfo():any;
        getPaddingInfo():any;
        getProp(propName: string):any;
        getStyle(styleName: string):any;
        getStyles(styleNames: string[], altNames?: string[]):any;
        hasDomProp(propName: string):boolean;
        hasProp(propName: string):boolean;
        init(ownerCtContext: any):void;
        invalidate(options: any):void;
        recoverProp(propName: string, oldProps: any, oldDirty: any):void;
        removeCls(removeCls: any):void;
        setAttribute(name: any, value: any):void;
        setContentHeight(height: any, measured: any):void;
        setContentSize(width: any, height: any, measured: any):void;
        setContentWidth(width: any, measured: any):void;
        setHeight(height: number, dirty?: boolean):number;
        setProp(propName: string, value: any, dirty: boolean):number;
        setWidth(width: number, dirty?: boolean):number;
    }
    export class Layout extends Ext.Base {
        done: boolean;
        isLayout: boolean;
        constructor(config: any);
        afterRemove(item: any):void;
        beginLayout(ownerContext: Ext.layout.ContextItem):void;
        beginLayoutCycle(ownerContext: Ext.layout.ContextItem):void;
        calculate(ownerContext: Ext.layout.ContextItem):void;
        completeLayout(ownerContext: Ext.layout.ContextItem):void;
        configureItem(item: Ext.Component):void;
        destroy():void;
        finalizeLayout(ownerContext: Ext.layout.ContextItem):void;
        finishedLayout(ownerContext: Ext.layout.ContextItem):void;
        getItemSizePolicy(item: Ext.Component):any;
        getLayoutItems():void;
        initLayout():void;
        isValidParent(item: any, target: any, position: any):void;
        notifyOwner(ownerContext: Ext.layout.ContextItem):void;
        onContentChange(child: Ext.Component):boolean;
        renderItems(items: any, target: any):void;
    }
    export class SizeModel {
        auto: boolean;
        calculated: boolean;
        calculatedFromConfigured: boolean;
        calculatedFromNatural: boolean;
        calculatedFromShrinkWrap: boolean;
        configured: boolean;
        constrainedMax: boolean;
        constrainedMin: boolean;
        fixed: boolean;
        name: string;
        names: any;
        natural: boolean;
        shrinkWrap: boolean;
    }
}
declare module Ext.layout.component {
    export class Auto extends Ext.layout.component.Component {
        constructor(config: any);
    }
    export class Body extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class BoundList extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class Button extends Ext.layout.component.Auto {
        constructor();
    }
    export class Component extends Ext.layout.Layout {
        constructor(config: any);
        getRenderTarget():Ext.dom.Element;
        getTarget():Ext.dom.Element;
    }
    export class Dock extends Ext.layout.component.Component {
        constructor(config: any);
        getDockedItems(order?: string, beforeBody?: boolean):Ext.Component[];
    }
    export class Draw extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class FieldSet extends Ext.layout.component.Body {
        constructor(config: any);
    }
    export class ProgressBar extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class Tab extends Ext.layout.component.Button {
        constructor();
    }
}
declare module Ext.layout.component.field {
    export class ComboBox extends Ext.layout.component.field.Trigger {
        constructor(config: any);
    }
    export class Field extends Ext.layout.component.Auto {
        elementId: any;
        errorStrategies: any;
        labelStrategies: any;
        left: any;
        qtip: any;
        right: any;
        side: any;
        title: any;
        top: any;
        under: any;
        constructor(config: any);
        getErrorStrategy():void;
        getLabelStrategy():void;
        static destroyTip():void;
        static initTip():void;
    }
    export class FieldContainer extends Ext.layout.component.field.Field {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.layout.component.field.Field {
        constructor(config: any);
    }
    export class Slider extends Ext.layout.component.field.Field {
        constructor(config: any);
    }
    export class Text extends Ext.layout.component.field.Field {
        constructor(config: any);
    }
    export class TextArea extends Ext.layout.component.field.Text {
        constructor(config: any);
    }
    export class Trigger extends Ext.layout.component.field.Field {
        constructor(config: any);
    }
}
declare module Ext.layout.container {
    export class Absolute extends Ext.layout.container.Anchor {
        constructor();
    }
    export class Accordion extends Ext.layout.container.VBox {
        constructor();
    }
    export class Anchor extends Ext.layout.container.Container {
        constructor();
    }
    export class Auto extends Ext.layout.container.Container {
        constructor();
    }
    export class Border extends Ext.layout.container.Container {
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        constructor(config: any);
        cacheFlexes(ownerContext: any):void;
    }
    export class Card extends Ext.layout.container.Fit {
        constructor();
        getActiveItem():Ext.Component;
        getNext():Ext.Component;
        getPrev():Ext.Component;
        next():Ext.Component;
        prev():Ext.Component;
        setActiveItem(newCard: any):Ext.Component;
    }
    export class CheckboxGroup extends Ext.layout.container.Container {
        constructor();
    }
    export class Column extends Ext.layout.container.Container {
        constructor();
    }
    export class Container extends Ext.layout.Layout {
        getScrollRangeFlags: any;
        overflowPadderEl: Ext.dom.Element;
        constructor();
        addChildEls():void;
        calculateOverflow(ownerContext: Ext.layout.ContextItem, containerSize: any, dimensions: number):void;
        doRenderPadder(out: any, renderData: any):void;
        getContainerSize(ownerContext: Ext.layout.ContextItem, inDom?: boolean):any;
        getElementTarget():Ext.dom.Element;
        getRenderTarget():Ext.dom.Element;
        getRenderedItems():any[];
        getTarget():Ext.dom.Element;
        getVisibleItems():any[];
        removeChildEls(testFn: Function):void;
    }
    export class Editor extends Ext.layout.container.Container {
        constructor();
    }
    export class Fit extends Ext.layout.container.Container {
        constructor();
    }
    export class Form extends Ext.layout.container.Auto {
        constructor();
    }
    export class HBox extends Ext.layout.container.Box {
        constructor(config: any);
    }
    export class Table extends Ext.layout.container.Container {
        constructor();
    }
    export class VBox extends Ext.layout.container.Box {
        constructor(config: any);
    }
}
declare module Ext.layout.container.boxOverflow {
    export class Menu extends Ext.layout.container.boxOverflow.None {
        menuItems: any[];
        noItemsMenuText: string;
        constructor(layout: any);
    }
    export class None extends Ext.Base {
        constructor(layout: any, config: any);
    }
    export class Scroller extends Ext.layout.container.boxOverflow.None {
        hasListeners: any;
        isObservable: boolean;
        constructor(layout: any, config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        scrollToItem(item: any, animate: boolean):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.menu {
    export class CheckItem extends Ext.menu.Item {
        constructor(config: any);
        disableCheckChange():void;
        enableCheckChange():void;
        setChecked(checked: boolean, suppressEvents?: boolean):void;
    }
    export class ColorPicker extends Ext.menu.Menu {
        picker: Ext.picker.Color;
        constructor(config: any);
    }
    export class DatePicker extends Ext.menu.Menu {
        picker: Ext.picker.Date;
        constructor(config: any);
    }
    export class Item extends Ext.Component {
        activated: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        setHandler(fn: Function, scope?: any):void;
        setIcon(icon: string):void;
        setIconCls(iconCls: string):void;
        setMenu(menu: any, destroyMenu?: boolean):void;
        setText(text: string):void;
        setTooltip(tooltip: any):Ext.menu.Item;
    }
    export class KeyNav extends Ext.util.KeyNav {
        constructor(menu: any);
    }
    export class Manager {
        static get(menu: any):Ext.menu.Menu;
        static getInitialConfig(name: any):void;
        static hideAll():boolean;
    }
    export class Menu extends Ext.panel.Panel {
        isAction: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        canActivateItem(item: any):boolean;
        deactivateActiveItem(andBlurFocusedItem: any):void;
        showBy(component: any, position?: string, offsets?: number[]):Ext.menu.Menu;
    }
    export class Separator extends Ext.menu.Item {
        constructor(config: any);
    }
}
declare module Ext.panel {
    export class AbstractPanel extends Ext.container.Container {
        isPanel: boolean;
        constructor(config: any);
        addDocked(component: any, pos?: number):void;
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, component: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        setBodyStyle(style: any, value: string):void;
    }
    export class DD extends Ext.dd.DragSource {
        constructor(panel: any, cfg: any);
    }
    export class Header extends Ext.container.Container {
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: any):void;
        setIcon(icon: string):void;
        setIconCls(cls: string):void;
        setTitle(title: string):void;
    }
    export class Panel extends Ext.panel.AbstractPanel {
        dd: Ext.dd.DragSource;
        constructor(config: any);
        afterCollapse(animated: boolean):void;
        afterExpand(animated: boolean):void;
        close():void;
        collapse(direction: string, animate?: boolean):Ext.panel.Panel;
        expand(animate: boolean):Ext.panel.Panel;
        setIcon(newIcon: string):void;
        setIconCls(newIconCls: string):void;
        setTitle(newTitle: string):void;
        toggleCollapse():Ext.panel.Panel;
    }
    export class Proxy extends Ext.Base {
        panel: Ext.panel.Panel;
        constructor(panel: Ext.panel.Panel, config?: any);
        getEl():Ext.dom.Element;
        getGhost():Ext.panel.Panel;
        getProxy():Ext.dom.Element;
        hide():void;
        moveProxy(parentNode: HTMLElement, before?: HTMLElement):void;
        show():void;
    }
    export class Table extends Ext.panel.Panel {
        hasView: boolean;
        optimizedColumnMove: boolean;
        constructor(config: any);
        determineScrollbars():void;
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.Store;
        getView():Ext.view.Table;
        invalidateScroller():void;
        setScrollTop(top: number):void;
    }
    export class Tool extends Ext.Component {
        constructor(config: any);
        setType(type: string):Ext.panel.Tool;
    }
}
declare module Ext.perf {
    export class Accumulator extends Ext.Base {
    }
    export class Monitor {
        static getInitialConfig(name: any):void;
    }
}
declare module Ext.picker {
    export class Color extends Ext.Component {
        colors: string[];
        constructor(config: any);
        getValue():string;
        select(color: string, suppressEvent?: boolean):void;
    }
    export class Date extends Ext.Component {
        constructor(config: any);
        getDayInitial(value: any):string;
        getValue():Date;
        hideMonthPicker(animate?: boolean):Ext.picker.Date;
        selectToday():Ext.picker.Date;
        setDisabledDates(disabledDates: any):Ext.picker.Date;
        setDisabledDays(disabledDays: number[]):Ext.picker.Date;
        setMaxDate(value: Date):Ext.picker.Date;
        setMinDate(value: Date):Ext.picker.Date;
        setValue(value: Date):Ext.picker.Date;
        showMonthPicker(animate?: boolean):Ext.picker.Date;
        showNextMonth(e: any):Ext.picker.Date;
        showNextYear():Ext.picker.Date;
        showPrevMonth(e: any):Ext.picker.Date;
        showPrevYear():Ext.picker.Date;
    }
    export class Month extends Ext.Component {
        constructor(config: any);
        adjustYear(offset?: number):void;
        getValue():number[];
        hasSelection():boolean;
        setValue(value: any):Ext.picker.Month;
    }
    export class Time extends Ext.view.BoundList {
        constructor(config: any);
        setMaxValue(value: Date):void;
        setMinValue(value: Date):void;
        updateList():void;
    }
}
declare module Ext.resizer {
    export class BorderSplitter extends Ext.resizer.Splitter {
        constructor(config: any);
    }
    export class BorderSplitterTracker extends Ext.resizer.SplitterTracker {
    }
    export class Handle extends Ext.Component {
        constructor(config: any);
    }
    export class ResizeTracker extends Ext.dd.DragTracker {
        constructor(config: any);
        createProxy(target: any):Ext.dom.Element;
    }
    export class Resizer extends Ext.Base {
        el: Ext.dom.Element;
        hasListeners: any;
        isObservable: boolean;
        originalTarget: any;
        resizeTracker: Ext.resizer.ResizeTracker;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getEl():Ext.dom.Element;
        getTarget():any;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resizeTo(width: number, height: number):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Splitter extends Ext.Component {
        orientation: string;
        constructor(config: any);
        getTrackerConfig():void;
    }
    export class SplitterTracker extends Ext.dd.DragTracker {
    }
}
declare module Ext.selection {
    export class CellModel extends Ext.selection.Model {
        constructor();
        getCurrentPosition():void;
        setCurrentPosition(position: any):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        constructor();
        getHeaderConfig():void;
        onHeaderClick(headerCt: any, header: any, e: any):void;
        renderer(value: any, metaData: any, record: any, rowIndex: any, colIndex: any, store: any, view: any):void;
    }
    export class DataViewModel extends Ext.selection.Model {
        constructor(cfg: any);
    }
    export class Model extends Ext.util.Observable {
        selected: Ext.util.MixedCollection;
        constructor(cfg: any);
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        deselect(records: any, suppressEvent?: boolean):void;
        deselectAll(suppressEvent: boolean):void;
        getCount():number;
        getLastSelected():void;
        getSelection():Ext.data.Model[];
        getSelectionMode():string;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        hasSelection():boolean;
        isFocused(record: Ext.data.Model):void;
        isLocked():boolean;
        isSelected(record: any):boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        select(records: any, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectAll(suppressEvent: boolean):void;
        selectRange(startRow: any, endRow: any, keepExisting?: boolean):void;
        setLastFocused(record: Ext.data.Model):void;
        setLocked(locked: boolean):void;
        setSelectionMode(selModel: string):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class RowModel extends Ext.selection.Model {
        constructor();
        selectNext(keepExisting?: boolean, suppressEvent?: boolean):boolean;
        selectPrevious(keepExisting?: boolean, suppressEvent?: boolean):boolean;
    }
    export class TreeModel extends Ext.selection.RowModel {
        constructor();
    }
}
declare module Ext.slider {
    export class Multi extends Ext.form.field.Base {
        dragging: boolean;
        thumbs: any[];
        constructor(config: any);
        addThumb(value?: number):Ext.slider.Thumb;
        getValues():number[];
        setMaxValue(val: number):void;
        setMinValue(val: number):void;
        syncThumbs():void;
    }
    export class Single extends Ext.slider.Multi {
        constructor(config: any);
    }
    export class Thumb extends Ext.Base {
        slider: Ext.slider.Multi;
        constructor(config?: any);
        disable():void;
        enable():void;
        initEvents():void;
        render():void;
    }
    export class Tip extends Ext.tip.Tip {
        constructor(config: any);
        getText(thumb: Ext.slider.Thumb):string;
    }
}
declare module Ext.state {
    export class CookieProvider extends Ext.state.Provider {
        constructor(config?: any);
    }
    export class LocalStorageProvider extends Ext.state.Provider {
        constructor();
    }
    export class Manager {
        static clear(name: string):void;
        static get(name: string, defaultValue: any):any;
        static getInitialConfig(name: any):void;
        static getProvider():Ext.state.Provider;
        static set(name: string, value: any):void;
        static setProvider(stateProvider: Ext.state.Provider):void;
    }
    export class Provider extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear(name: string):void;
        clearListeners():void;
        clearManagedListeners():void;
        decodeValue(value: string):any;
        enableBubble(eventNames: any):void;
        encodeValue(value: any):string;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(name: string, defaultValue: any):any;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        set(name: string, value: any):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Stateful extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        addStateEvents(events: any):void;
        applyState(state: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getState():any;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.tab {
    export class Bar extends Ext.panel.Header {
        isTabBar: boolean;
        constructor(config: any);
    }
    export class Panel extends Ext.panel.Panel {
        tabBar: Ext.tab.Bar;
        constructor(config: any);
        getActiveTab():Ext.Component;
        getTabBar():Ext.tab.Bar;
        setActiveTab(card: any):Ext.Component;
    }
    export class Tab extends Ext.button.Button {
        active: boolean;
        closable: boolean;
        isTab: boolean;
        constructor(config: any);
        setCard(card: Ext.Component):void;
        setClosable(closable: boolean):void;
    }
}
declare module Ext.tip {
    export class QuickTip extends Ext.tip.ToolTip {
        constructor(config: any);
        cancelShow(el: any):void;
        register(config: any):void;
        unregister(el: any):void;
    }
    export class QuickTipManager {
        static destroy():void;
        static disable():void;
        static enable():void;
        static getInitialConfig(name: any):void;
        static getQuickTip():Ext.tip.QuickTip;
        static init(autoRender?: boolean, config?: any):void;
        static isEnabled():boolean;
        static register(config: any):void;
        static tips(config: any):void;
        static unregister(el: any):void;
    }
    export class Tip extends Ext.panel.Panel {
        constructor(config: any);
        showBy(el: any, position?: string):void;
    }
    export class ToolTip extends Ext.tip.Tip {
        triggerElement: HTMLElement;
        constructor(config: any);
        setTarget(t: any):void;
    }
}
declare module Ext.toolbar {
    export class Fill extends Ext.Component {
        isFill: boolean;
        constructor(config: any);
    }
    export class Item extends Ext.Component {
        constructor(config: any);
    }
    export class Paging extends Ext.toolbar.Toolbar {
        constructor(config: any);
        bind(store: Ext.data.Store):void;
        bindStore(store: Ext.data.AbstractStore, initial?: boolean):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        doRefresh():void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        moveFirst():void;
        moveLast():void;
        moveNext():void;
        movePrevious():void;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbind(store: Ext.data.Store):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Separator extends Ext.toolbar.Item {
        constructor(config: any);
    }
    export class Spacer extends Ext.Component {
        constructor(config: any);
    }
    export class TextItem extends Ext.toolbar.Item {
        constructor(text: any);
        setText(t: string):void;
    }
    export class Toolbar extends Ext.container.Container {
        isToolbar: boolean;
        constructor(config: any);
    }
}
declare module Ext.tree {
    export class Column extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
        collapseAll(callback?: Function, scope?: any):void;
        expandAll(callback?: Function, scope?: any):void;
        expandPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        getChecked():Ext.data.NodeInterface[];
        getRootNode():Ext.data.NodeInterface;
        selectPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        setRootNode(root: any):Ext.data.NodeInterface;
    }
    export class View extends Ext.view.Table {
        constructor(config: any);
        collapse(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expand(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        getTreeStore():void;
        toggle(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
    }
    export class ViewDragZone extends Ext.view.DragZone {
        constructor(config: any);
    }
    export class ViewDropZone extends Ext.view.DropZone {
        constructor(config: any);
    }
}
declare module Ext.tree.plugin {
    export class TreeViewDragDrop extends Ext.AbstractPlugin {
        constructor(config: any);
    }
}
declare module Ext.util {
    export class AbstractMixedCollection extends Ext.Base {
        hasListeners: any;
        isMixedCollection: boolean;
        isObservable: boolean;
        constructor(allowFunctions: any, keyFn: any);
        add(key: string, o: any):any;
        addAll(objs: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.MixedCollection;
        collect(property: string, root?: string, allowBlank?: boolean):any[];
        contains(o: any):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope?: any):void;
        eachKey(fn: Function, scope?: any):void;
        enableBubble(eventNames: any):void;
        filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        findBy(fn: Function, scope?: any):any;
        findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: Function, scope?: any, start?: number):number;
        fireEvent(eventName: string, ...args: any[]):boolean;
        first():any;
        get(key: any):any;
        getAt(index: number):any;
        getByKey(key: any):any;
        getCount():number;
        getKey(item: any):any;
        getRange(startIndex?: number, endIndex?: number):any[];
        hasListener(eventName: string):boolean;
        indexOf(o: any):number;
        indexOfKey(key: string):number;
        insert(index: number, key: string, o?: any):any;
        last():any;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(o: any):any;
        removeAll(items: any[]):Ext.util.MixedCollection;
        removeAt(index: number):any;
        removeAtKey(key: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        replace(key: string, o: any):any;
        resumeEvents():void;
        sum(property: string, root?: string, start?: number, end?: number):number;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animate extends Ext.Base {
        animate(config: any):any;
        getActiveAnimation():any;
        hasActiveFx():any;
        sequenceFx():any;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():any;
    }
    export class Bindable extends Ext.Base {
        bindStore(store: Ext.data.AbstractStore, initial?: boolean):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class CSS {
        static createStyleSheet(cssText: string, id: string):CSSStyleSheet;
        static getInitialConfig(name: any):void;
        static getRule(selector: any, refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):any;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: any, property: string, value: string):boolean;
    }
    export class ClickRepeater extends Ext.util.Observable {
        constructor(el: any, config?: any);
        disable(force: any):void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class ComponentDragger extends Ext.dd.DragTracker {
        constructor(comp: any, config?: any);
    }
    export class Cookies {
        static clear(name: string, path?: string):void;
        static get(name: string):any;
        static getInitialConfig(name: any):void;
        static set(name: string, value: any, expires?: any, path?: string, domain?: string, secure?: boolean):void;
    }
    export class DelayedTask {
        constructor(fn?: Function, scope?: any, args?: any[]);
        cancel():void;
        delay(delay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
    }
    export class ElementContainer extends Ext.Base {
        constructor();
        addChildEls():void;
        removeChildEls(testFn: Function):void;
    }
    export class Event {
        isEvent: boolean;
    }
    export class Filter extends Ext.Base {
        constructor(config?: any);
    }
    export class Floating extends Ext.Base {
        alignTo(element: any, position?: string, offsets?: number[]):Ext.Component;
        center():Ext.Component;
        doConstrain(constrainTo?: any):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
    }
    export class Format {
        static currencyAtEnd: boolean;
        static currencyPrecision: number;
        static currencySign: string;
        static decimalSeparator: string;
        static thousandSeparator: string;
        static capitalize(string: string):string;
        static currency(value: any, sign: string, decimals: number, end: boolean):string;
        static date(value: any, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue: string):string;
        static ellipsis(value: string, length: number, word: boolean):string;
        static escapeRegex(str: string):string;
        static fileSize(size: any):string;
        static format(string: string, value1: string, value2: string):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static leftPad(string: string, size: number, character?: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(The: string):string;
        static number(v: number, format: string):string;
        static numberRenderer(format: string):Function;
        static parseBox(v: any):any;
        static plural(value: number, singular: string, plural?: string):void;
        static round(value: any, precision: number):number;
        static stripScripts(value: any):string;
        static stripTags(value: any):string;
        static substr(value: string, start: number, length: number):string;
        static trim(string: string):string;
        static undef(value: any):any;
        static uppercase(value: string):string;
        static usMoney(value: any):string;
    }
    export class Grouper extends Ext.util.Sorter {
        constructor(config: any);
        getGroupString(instance: Ext.data.Model):string;
    }
    export class HashMap extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(key: string, o: any):any;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear(initial: any):Ext.util.HashMap;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope: any):Ext.util.HashMap;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(key: string):any;
        getCount():number;
        getKey(o: any):string;
        getKeys():any[];
        getValues():any[];
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(o: any):boolean;
        removeAtKey(key: string):boolean;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        replace(key: string, value: any):any;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class History {
        static fieldId: string;
        static hasListeners: any;
        static iframeId: string;
        static isObservable: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static back():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static forward():void;
        static getInitialConfig(name: any):void;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Inflector {
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
        static getInitialConfig(name: any):void;
        static isTransnumeral(word: string):boolean;
        static ordinalize(number: number):string;
        static plural(matcher: RegExp, replacer: string):void;
        static pluralize(word: string):string;
        static singular(matcher: RegExp, replacer: string):void;
        static singularize(word: string):string;
    }
    export class KeyMap extends Ext.Base {
        constructor(config: any);
        addBinding(binding: any):void;
        destroy(removeTarget: boolean):void;
        disable():void;
        enable():void;
        isEnabled():boolean;
        on(key: any, fn: Function, scope?: any):void;
        setDisabled(disabled: boolean):void;
    }
    export class KeyNav extends Ext.Base {
        constructor(config: any);
        destroy(removeEl: boolean):void;
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class LruCache extends Ext.util.HashMap {
        constructor(config?: any);
        prune():void;
    }
    export class Memento extends Ext.Base {
        target: any;
        constructor(target: any, props: any);
        capture(props: any, target: any):void;
        remove(props: any):void;
        restore(props: any, clear: boolean, target: any):void;
        restoreAll(clear: boolean, target: any):void;
    }
    export class MixedCollection extends Ext.util.AbstractMixedCollection {
        defaultSortDirection: string;
        isSortable: boolean;
        sortRoot: string;
        sorters: Ext.util.MixedCollection;
        constructor(allowFunctions: boolean, keyFn: Function);
        findInsertionIndex(newItem: any, sorterFn?: Function):number;
        generateComparator():void;
        initSortable():void;
        reorder(mapping: any):void;
        sort(sorters: any, direction: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class Observable extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        static capture(o: Ext.util.Observable, fn: Function, scope?: any):void;
        static observe(c: Function, listeners: any):void;
        static releaseCapture(o: Ext.util.Observable):void;
    }
    export class Offset extends Ext.Base {
        constructor(x: any, y: any);
    }
    export class Point extends Ext.util.Region {
        constructor(x: number, y: number);
        isWithin(p: any, threshold: any):boolean;
        roundedEquals(p: any):boolean;
        toString():string;
        translate(x: any, y: number):Ext.util.Region;
        static fromEvent(e: Event):Ext.util.Point;
    }
    export class ProtoElement extends Ext.Base {
        clsProp: string;
        removedProp: string;
        styleIsText: boolean;
        styleProp: string;
        addCls(cls: string):Ext.util.ProtoElement;
        flush():void;
        hasCls(cls: string):boolean;
        removeCls(cls: string):Ext.util.ProtoElement;
        setStyle(prop: any, value?: string):Ext.util.ProtoElement;
        writeTo(to: any):any;
    }
    export class Queue extends Ext.Base {
        constructor();
        clear():void;
        getCount():number;
        remove(obj: any):any;
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
        intersect(region: Ext.util.Region):any;
        isOutOfBound(axis?: string, p?: any):boolean;
        isOutOfBoundX(p: number):boolean;
        isOutOfBoundY(p: number):boolean;
        round():Ext.util.Region;
        translateBy(x: any, y: number):Ext.util.Region;
        union(region: Ext.util.Region):Ext.util.Region;
        static from(o: any):Ext.util.Region;
        static getRegion(el: any):Ext.util.Region;
    }
    export class Renderable extends Ext.Base {
        afterRender():void;
        doAutoRender():void;
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: any):HTMLElement;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
    }
    export class Sortable extends Ext.Base {
        defaultSortDirection: string;
        isSortable: boolean;
        sortRoot: string;
        sorters: Ext.util.MixedCollection;
        generateComparator():void;
        initSortable():void;
        sort(sorters: any, direction: string):Ext.util.Sorter[];
    }
    export class Sorter extends Ext.Base {
        constructor(config: any);
        setDirection(direction: string):void;
        toggle():void;
        updateSortFunction(fn?: Function):void;
    }
    export class TaskRunner extends Ext.Base {
        constructor(interval?: any);
        destroy():void;
        newTask(config: any):void;
        start(task: any):any;
        stop(task: any):any;
        stopAll():void;
    }
    export class TextMetrics extends Ext.Base {
        constructor(bindTo: any, fixedWidth?: number);
        bind(el: any):void;
        destroy():void;
        getHeight(text: string):number;
        getSize(text: string):any;
        getWidth(text: string):number;
        setFixedWidth(width: number):void;
        static destroy():void;
        static measure(el: any, text: string, fixedWidth?: number):any;
    }
}
declare module Ext.util.TaskRunner {
    export class Task {
        fireOnStart: boolean;
        destroy():void;
        restart(interval?: number):void;
        start(interval?: number):void;
        stop():void;
    }
}
declare module Ext.view {
    export class AbstractView extends Ext.Component {
        constructor(config: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        collectData(records: Ext.data.Model[], startIndex: number):any[];
        deselect(records: any, suppressEvent: boolean):void;
        findItemByChild(node: HTMLElement):HTMLElement;
        findTargetByEvent(e: Ext.EventObject):void;
        getNode(nodeInfo: any):HTMLElement;
        getNodes(start?: number, end?: number):HTMLElement[];
        getRecord(node: any):Ext.data.Model;
        getRecords(nodes: HTMLElement[]):Ext.data.Model[];
        getSelectedNodes():HTMLElement[];
        getSelectedRecords():Ext.data.Model[];
        getSelectionCount():number;
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.Store;
        getStoreListeners():any;
        indexOf(nodeInfo: any):number;
        isSelected(node: any):boolean;
        onBindStore(store: any):void;
        onUnbindStore(store: any):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(index: number):void;
        select(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        getInnerTpl(displayField: string):string;
    }
    export class BoundListKeyNav extends Ext.util.KeyNav {
        constructor(config: any);
        highlightAt(index: number):void;
        selectHighlighted(e: any):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(config: any);
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(config: any);
    }
    export class Table extends Ext.view.View {
        constructor(config: any);
        addRowCls(rowInfo: any, cls: string):void;
        focusRow(rowIdx: any):void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getRowClass(record: Ext.data.Model, index: number, rowParams: any, store: Ext.data.Store):string;
        getTableChunker():void;
        removeRowCls(rowInfo: any, cls: string):void;
    }
    export class TableChunker {
        static getInitialConfig(name: any):void;
    }
    export class View extends Ext.view.AbstractView {
        constructor(config: any);
        clearHighlight():void;
        highlightItem(item: HTMLElement):void;
    }
}
declare module Ext.window {
    export class MessageBox extends Ext.window.Window {
        CANCEL: number;
        ERROR: string;
        INFO: string;
        NO: number;
        OK: number;
        OKCANCEL: number;
        QUESTION: string;
        WARNING: string;
        YES: number;
        YESNO: number;
        YESNOCANCEL: number;
        buttonText: any;
        defaultTextHeight: number;
        minProgressWidth: number;
        minPromptWidth: number;
        constructor(config: any);
        alert(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        confirm(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        wait(msg: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Window extends Ext.panel.Panel {
        isWindow: boolean;
        constructor(config: any);
        getDefaultFocus():void;
        maximize():Ext.window.Window;
        minimize():Ext.window.Window;
        restore():Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}