// Ext type declarations (Typescript 1.4 or newer) generated on Tue Mar 03 2015 19:46:25 GMT+0000 (GMT)
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
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
    static callback(callback: Function, scope?: any, args?: any[], delay?: number):void;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static copyTo(dest: any, source: any, names: string|string[], usePrototypeKeys?: boolean):any;
    static create(name?: string, ...args: any[]):any;
    static createByAlias():void;
    static createWidget():void;
    static decode(json: string, safe?: boolean):any;
    static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
    static define(className: string, data: any, createdFn: Function):Ext.Base;
    static destroy(...args: any[]):void;
    static destroyMembers(o: any, ...args: string[]):void;
    static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
    static encode(o: any):string;
    static escapeRe(str: string):string;
    static exclude():void;
    static extend(superclass: Function, overrides: any):Function;
    static flatten(array: any[]):any[];
    static fly(dom: string|HTMLElement, named?: string):Ext.dom.AbstractElement.Fly;
    static get(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
    static getBody():any;
    static getClass():void;
    static getClassName():void;
    static getCmp(id: string):any;
    static getDoc():any;
    static getDom(el: string|HTMLElement|Ext.dom.Element):any;
    static getHead():any;
    static getOrientation():string;
    static getScrollBarWidth(force?: boolean):number;
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any):Ext.data.Store;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(el?: HTMLElement|Ext.dom.Element, prefix?: string):string;
    static invoke(arr: any[]|NodeList, methodName: string, ...args: any[]):any[];
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
    static max(array: any[]|NodeList, comparisonFn?: Function):any;
    static mean(array: any[]):number;
    static merge(destination: any, ...object: any[]):any;
    static min(array: any[]|NodeList, comparisonFn?: Function):any;
    static namespace(...namespaces: string[]):any;
    static ns(...namespaces: string[]):any;
    static num(value: any, defaultValue: number):number;
    static onDocumentReady():void;
    static onReady(fn: any, scope: any, options: any):void;
    static override(target: any, overrides: any):void;
    static partition(arr: any[]|NodeList, truth?: Function):any[];
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any[]|NodeList, propertyName: string):any[];
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
        autoEl: any;
        autoRender: boolean|string|HTMLElement|Ext.dom.Element;
        autoShow: boolean;
        baseCls: string;
        border: number|string;
        cls: string;
        componentCls: string;
        componentLayout: any;
        contentEl: string;
        data: any;
        disabled: boolean;
        disabledCls: string;
        floating: boolean;
        frame: boolean;
        height: number;
        hidden: boolean;
        hideMode: string;
        html: any;
        id: string;
        itemId: string;
        listeners: any;
        loader: any;
        margin: number|string;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        overCls: string;
        padding: number|string;
        plugins: any;
        renderData: any;
        renderSelectors: any;
        renderTo: string|HTMLElement|Ext.dom.Element;
        renderTpl: Ext.XTemplate|string|string[];
        saveDelay: number;
        shrinkWrap: boolean|number;
        stateEvents: string[];
        stateId: string;
        stateful: boolean;
        style: any;
        styleHtmlCls: string;
        styleHtmlContent: boolean;
        tpl: Ext.XTemplate|Ext.Template|string|string[];
        tplWriteMode: string;
        ui: string|string[];
        width: number;
        xtype: string;
        _isLayoutRoot: boolean;
        draggable: boolean|boolean;
        frameSize: any;
        hasListeners: any;
        isComponent: boolean;
        isObservable: boolean;
        maskOnDisable: boolean;
        ownerCt: Ext.container.Container;
        rendered: boolean;
        constructor(config?: any);
        addChildEls():void;
        addClass(cls: string|string[]):Ext.Component;
        addCls(cls: string|string[]):Ext.Component;
        addClsWithUI(classes: string|string[], skip: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(element: any, listeners: any, scope: any, options: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        addPropertyToState(state: any, propName: string, value?: string):boolean;
        addStateEvents(events: string|string[]):void;
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
        enableBubble(eventNames: string|string[]):void;
        ensureAttachedToBody(runLayout?: boolean):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        forceComponentLayout():void;
        getActiveAnimation():Ext.fx.Anim|boolean;
        getBubbleTarget():Ext.container.Container;
        getEl():Ext.dom.Element;
        getHeight():number;
        getId():string;
        getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
        getLoader():Ext.ComponentLoader;
        getPlugin(pluginId: string):Ext.AbstractPlugin;
        getSize():any;
        getSizeModel(ownerCtSizeModel: any):any;
        getState():any;
        getWidth():number;
        getXTypes():string;
        hasActiveFx():Ext.fx.Anim|boolean;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        removeCls(cls: string|string[]):Ext.Component;
        removeClsWithUI(cls: string|string[]):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        removeUIClsFromElement(ui: string):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: string|string[], state: any):any;
        saveState():void;
        sequenceFx():any;
        setBorder(border: string|number):void;
        setDisabled(disabled: boolean):void;
        setDocked(dock: any, layoutParent?: boolean):Ext.Component;
        setHeight(height: number):Ext.Component;
        setPosition(left: number, top: number, animate?: any):Ext.Component;
        setSize(width: any, height: number|string):Ext.Component;
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
        disabled: boolean;
        handler: Function;
        hidden: boolean;
        iconCls: string;
        itemId: string;
        scope: any;
        text: string;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static hasListener(eventName: string):boolean;
        static isLoading(request?: any):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static parseStatus(status: number):any;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static request(options: any):any;
        static resumeEvents():void;
        static setOptions(options: any, scope: any):any;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static upload(form: string|HTMLElement|Ext.dom.Element, url: string, params: string, options: any):void;
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
        static max(array: any[]|NodeList, comparisonFn?: Function):any;
        static mean(array: any[]):number;
        static merge(array1: any[], array2: any[], etc: any[]):any[];
        static min(array: any[]|NodeList, comparisonFn?: Function):any;
        static pluck(array: any[]|NodeList, propertyName: string):any[];
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
        alias: string[];
        alternateClassName: string|string[];
        config: any;
        extend: string;
        inheritableStatics: any;
        mixins: any;
        requires: string[];
        singleton: boolean;
        statics: any;
        uses: string[];
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
        static setAlias(cls: Ext.Class|string, alias: string):Ext.ClassManager;
        static setNamespace(name: string, value: any):void;
    }
    export class Component extends Ext.AbstractComponent {
        autoScroll: boolean;
        focusOnToFront: boolean;
        overflowX: string;
        overflowY: string;
        resizable: any;
        resizeHandles: string;
        shadow: string|boolean;
        shadowOffset: string|boolean;
        toFrontOnShow: boolean;
        floatParent: Ext.container.Container;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(config: any);
        afterHide(callback?: Function, scope?: any):void;
        afterShow(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):void;
        alignTo(element: Ext.Component|Ext.dom.Element|HTMLElement|string, position?: string, offsets?: number[]):Ext.Component;
        beforeShow():void;
        bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        cancelFocus():void;
        center():Ext.Component;
        cloneConfig(overrides: any):Ext.Component;
        doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: string|Ext.Class):Ext.container.Container;
        focus(selectText?: boolean, delay?: boolean|number):Ext.Component;
        getBox(local?: boolean):any;
        getPosition(local?: boolean):number[];
        getXType():string;
        hide(animateTarget?: string|Ext.dom.Element|Ext.Component, callback?: Function, scope?: any):Ext.Component;
        initComponent():void;
        onDestroy():void;
        onHide(animateTarget?: string|Ext.dom.Element|Ext.Component, callback?: Function, scope?: any):void;
        onShow(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):void;
        onShowComplete(callback?: Function, scope?: any):void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: number, y: number, animate?: any):Ext.Component;
        show(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):Ext.Component;
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
        alignment: string;
        allowBlur: boolean;
        autoSize: any;
        cancelOnEsc: boolean;
        completeOnEnter: boolean;
        constrain: boolean;
        field: Ext.form.field.Field;
        hideEl: boolean;
        ignoreNoChange: boolean;
        offsets: number[];
        parentEl: string|HTMLElement|Ext.dom.Element;
        revertInvalid: boolean;
        swallowKeys: boolean;
        updateEl: boolean;
        value: any;
        constructor(config: any);
        cancelEdit(remainVisible?: boolean):void;
        completeEdit(remainVisible?: boolean):void;
        getValue():any;
        realign(autoSize?: boolean):void;
        setValue(value: any):void;
        startEdit(el: string|HTMLElement|Ext.dom.Element, value?: string):void;
    }
    export class ElementLoader extends Ext.Base {
        ajaxOptions: any;
        autoLoad: any;
        baseParams: any;
        callback: Function;
        failure: Function;
        listeners: any;
        loadMask: boolean|string;
        params: any;
        renderer: Function;
        scope: any;
        scripts: boolean;
        success: Function;
        target: HTMLElement|Ext.dom.Element|string;
        url: string;
        hasListeners: any;
        isLoader: boolean;
        isObservable: boolean;
        constructor(config: any);
        abort():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        load(options: any):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setTarget(target: string|HTMLElement|Ext.dom.Element):void;
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
        static addListener(el: string|HTMLElement, eventName: string, handler: Function, scope?: any, options?: any):void;
        static getId(element: HTMLElement|Ext.dom.Element):string;
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
        static purgeElement(el: string|HTMLElement, eventName?: string):void;
        static removeAll(el: string|HTMLElement):void;
        static removeListener(el: string|HTMLElement, eventName: string, fn: Function, scope: any):void;
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
        static getRelatedTarget(selector?: string, maxDepth?: number|HTMLElement, returnEl?: boolean):HTMLElement;
        static getTarget(selector?: string, maxDepth?: number|HTMLElement, returnEl?: boolean):HTMLElement;
        static getWheelDelta():number;
        static getWheelDeltas():any;
        static getX():number;
        static getXY():number[];
        static getY():number;
        static hasModifier():boolean;
        static injectEvent(target?: Ext.dom.Element|HTMLElement):void;
        static isNavKeyPress():boolean;
        static isSpecialKey():boolean;
        static preventDefault():void;
        static stopEvent():void;
        static stopPropagation():void;
        static within(el: string|HTMLElement|Ext.dom.Element, related?: boolean, allowEl?: boolean):boolean;
    }
    export class FocusManager {
        static enabled: boolean;
        static focusedCmp: Ext.Component;
        static hasListeners: any;
        static isObservable: boolean;
        static whitelist: string[];
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addXTypeToWhitelist(xtype: string|string[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static disable():void;
        static enable(options: any, focusFrame?: boolean):void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static hasListener(eventName: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeXTypeFromWhitelist(xtype: string|string[]):void;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Function {
        static alias(object: any, methodName: string):Function;
        static bind(fn: Function, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
        static clone(method: Function):Function;
        static createBuffered(fn: Function, buffer: number, scope?: any, args?: any[]):Function;
        static createDelayed(fn: Function, delay: number, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
        static createInterceptor(origFn: Function, newFn: Function, scope?: any, returnValue?: any):Function;
        static createSequence(originalFn: Function, newFn: Function, scope?: any):Function;
        static createThrottled(fn: Function, interval: number, scope?: any):Function;
        static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: boolean|number):number;
        static flexSetter(setter: Function):Function;
        static interceptAfter(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interceptBefore(object: any, methodName: string, fn: Function, scope?: any):Function;
        static pass(fn: Function, args: any[], scope?: any):Function;
    }
    export class Img extends Ext.Component {
        alt: string;
        imgCls: string;
        src: string;
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
        cls: string;
        constrain: boolean;
        dh: any;
        hideMode: string;
        shadow: string|boolean;
        shadowOffset: number;
        shim: boolean;
        useDisplay: boolean;
        visibilityCls: string;
        zindex: number;
        constructor(config?: any, existingEl?: string|HTMLElement);
        setZIndex(zindex: number):Ext.Layer;
    }
    export class LoadMask extends Ext.Component {
        maskCls: string;
        msgCls: string;
        store: Ext.data.Store;
        useMsg: boolean;
        useTargetEl: boolean;
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
        static require(expressions: string|any[], fn?: Function, scope?: any, excludes?: string|any[]):void;
        static setConfig(config: any):Ext.Loader;
        static setPath(name: any, path: string):Ext.Loader;
        static syncRequire(expressions: string|any[], fn?: Function, scope?: any, excludes?: string|any[]):void;
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
        static add(...component: any[]):Ext.Component[]|Ext.Component;
        static addChildEls():void;
        static addClass(cls: string|string[]):Ext.Component;
        static addCls(cls: string|string[]):Ext.Component;
        static addClsWithUI(classes: string|string[], skip: any):void;
        static addDocked(component: any, pos?: number):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(element: any, listeners: any, scope: any, options: any):void;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addStateEvents(events: string|string[]):void;
        static addUIClsToElement(cls: any):void;
        static alert(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static alignTo(element: Ext.Component|Ext.dom.Element|HTMLElement|string, position?: string, offsets?: number[]):Ext.Component;
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
        static doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
        static doLayout():Ext.container.Container;
        static down(selector?: string):any;
        static enableBubble(eventNames: string|string[]):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: string|Ext.Class):Ext.container.Container;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static focus(selectText?: boolean, delay?: boolean|number):Ext.Component;
        static forceComponentLayout():void;
        static getActiveAnimation():Ext.fx.Anim|boolean;
        static getBox(local?: boolean):any;
        static getBubbleTarget():Ext.container.Container;
        static getChildByElement(el: Ext.dom.Element|HTMLElement|string, deep: boolean):Ext.Component;
        static getComponent(comp: string|number):Ext.Component;
        static getDefaultFocus():void;
        static getDockedComponent(comp: string|number):Ext.Component;
        static getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        static getEl():Ext.dom.Element;
        static getHeight():number;
        static getId():string;
        static getInitialConfig(name: any):void;
        static getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
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
        static hasActiveFx():Ext.fx.Anim|boolean;
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
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static move(fromIdx: number, toIdx: number):Ext.Component;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: boolean|number, value?: string):Ext.window.MessageBox;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: any):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(component: Ext.Component|string, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeChildEls(testFn: Function):void;
        static removeCls(cls: string|string[]):Ext.Component;
        static removeClsWithUI(cls: string|string[]):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeUIClsFromElement(cls: any):void;
        static restore():Ext.window.Window;
        static resumeEvents():void;
        static savePropToState(propName: string, state: any, stateName?: string):boolean;
        static savePropsToState(propNames: string|string[], state: any):any;
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
        static setSize(width: any, height: number|string):Ext.Component;
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
        text: string;
        textEl: string|HTMLElement|Ext.dom.Element;
        value: number;
        constructor(config: any);
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class Shadow extends Ext.Base {
        mode: string;
        offset: number;
        constructor(config?: any);
        hide():void;
        isVisible():void;
        realign(left: number, top: number, width: number, height: number):void;
        setOpacity(opacity: number):void;
        setZIndex(zindex: number):void;
        show(targetEl: string|HTMLElement|Ext.dom.Element):void;
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
        static splitWords(words: string|any[]):void;
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
        constructor(version: string|number);
        deprecate(packageName: string, since: string, closure: Function, scope: any):void;
        equals(target: string|number):boolean;
        getBuild():number;
        getMajor():number;
        getMinor():number;
        getPatch():number;
        getRelease():number;
        getShortVersion():string;
        getVersion(packageName?: string):Ext.Version;
        gt(target: string|number):boolean;
        gtEq(target: string|number):boolean;
        isGreaterThan(target: string|number):boolean;
        isGreaterThanOrEqual(target: string|number):boolean;
        isLessThan(target: string|number):boolean;
        isLessThanOrEqual(target: string|number):boolean;
        lt(target: string|number):boolean;
        ltEq(target: string|number):boolean;
        match(target: string|number):boolean;
        setVersion(packageName: string, version: string|Ext.Version):Ext;
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
        definitions: string|any[];
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
        appFolder: string;
        autoCreateViewport: boolean;
        controllers: string[];
        defaultUrl: string;
        enableQuickTips: boolean;
        name: string;
        scope: any;
        constructor(config?: any);
        launch(profile: string):boolean;
    }
    export class Controller extends Ext.Base {
        id: string;
        listeners: any;
        models: string[];
        refs: any[];
        stores: string[];
        views: string[];
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners: any):void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getController(name: string):Ext.app.Controller;
        getModel(name: string):Ext.data.Model;
        getStore(name: string):Ext.data.Store;
        getView(name: string):Ext.Base;
        hasListener(eventName: string):boolean;
        init(application: Ext.app.Application):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        onLaunch(application: Ext.app.Application):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class EventBus extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor();
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        allowDepress: boolean;
        arrowAlign: string;
        arrowCls: string;
        baseParams: any;
        clickEvent: string;
        enableToggle: boolean;
        focusCls: string;
        handleMouseEvents: boolean;
        handler: Function;
        href: string;
        hrefTarget: string;
        icon: string;
        iconAlign: string;
        iconCls: string;
        menuActiveCls: string;
        menuAlign: string;
        overflowText: string;
        params: any;
        pressedCls: string;
        preventDefault: boolean;
        repeat: any;
        scale: string;
        scope: any;
        tabIndex: number;
        text: string;
        textAlign: string;
        toggleGroup: string;
        toggleHandler: Function;
        tooltip: any;
        tooltipType: string;
        type: string;
        isAction: boolean;
        menu: any;
        pressed: boolean|boolean;
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
        changeHandler: Function;
        forceIcon: string;
        items: any[];
        prependText: string;
        showText: boolean;
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent?: boolean):void;
        toggleSelected():void;
    }
    export class Split extends Ext.button.Button {
        arrowHandler: Function;
        arrowTooltip: string;
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: any):void;
    }
}
declare module Ext.chart {
    export class Callout extends Ext.Base {
        constructor(config: any);
    }
    export class Chart extends Ext.draw.Component {
        axes: Ext.chart.axis.Axis[];
        background: any;
        insetPadding: number;
        legend: any;
        series: Ext.chart.series.Series[];
        store: Ext.data.Store;
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
        label: any;
        constructor(config: any);
    }
    export class Legend extends Ext.Base {
        boxFill: string;
        boxStroke: string;
        boxStrokeWidth: string;
        boxZIndex: number;
        itemSpacing: number;
        labelColor: string;
        labelFont: string;
        padding: number;
        position: string;
        update: boolean;
        visible: boolean;
        x: number;
        y: number;
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
        mask: boolean|string;
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
        fields: string[];
        label: Ext.chart.Label;
        constructor(config?: any);
    }
    export class Axis extends Ext.chart.axis.Abstract {
        adjustEnd: boolean;
        dashSize: number;
        length: number;
        minorTickSteps: number;
        position: string;
        title: string;
        width: number;
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
        margin: number;
        maximum: number;
        minimum: number;
        title: string;
        constructor(config?: any);
        setTitle(title: string):void;
    }
    export class Numeric extends Ext.chart.axis.Axis {
        constrain: boolean;
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
        constrain: boolean;
        dateFormat: string|boolean;
        fromDate: Date;
        step: any[]|boolean;
        toDate: Date;
        constructor(config: any);
    }
}
declare module Ext.chart.series {
    export class Area extends Ext.chart.series.Cartesian {
        style: any;
        constructor(config: any);
        drawSeries():void;
        highlightSeries(item: any):void;
        unHighlightSeries(item: any):void;
    }
    export class Bar extends Ext.chart.series.Cartesian {
        column: boolean;
        groupGutter: number;
        gutter: number;
        style: any;
        xPadding: number;
        yPadding: number;
        constructor(config: any);
        drawSeries():void;
    }
    export class Cartesian extends Ext.chart.series.Series {
        axis: string|string[];
        xField: string;
        yField: string;
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
        angleField: string;
        donut: boolean|number;
        highlightDuration: number;
        needle: boolean;
        style: any;
        constructor(config: any);
        drawSeries():void;
        setValue(value: any):void;
    }
    export class Line extends Ext.chart.series.Cartesian {
        fill: boolean;
        markerConfig: any;
        selectionTolerance: number;
        showMarkers: boolean;
        smooth: boolean|number;
        style: any;
        constructor(config: any);
        drawSeries():void;
    }
    export class Pie extends Ext.chart.series.Series {
        angleField: string;
        colorSet: any[];
        donut: boolean|number;
        field: string;
        highlightDuration: number;
        lengthField: string;
        style: any;
        xField: string;
        constructor(config: any);
        drawSeries():void;
    }
    export class Radar extends Ext.chart.series.Series {
        style: any;
        constructor(config: any);
        drawSeries():void;
    }
    export class Scatter extends Ext.chart.series.Cartesian {
        markerConfig: any;
        style: any;
        constructor(config: any);
        drawSeries():void;
    }
    export class Series extends Ext.Base {
        label: any;
        listeners: any;
        renderer: Function;
        shadowAttributes: any[];
        showInLegend: boolean;
        tips: any;
        title: string;
        type: string;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        eachRecord(fn: Function, scope: any):void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getItemForPoint(x: number, y: number):any;
        getLegendColor(index: any):void;
        getRecordCount():void;
        hasListener(eventName: string):boolean;
        hideAll():void;
        highlight(Default: any):void;
        highlightItem(item: any):void;
        isExcluded(index: any):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        activeItem: string|number;
        autoDestroy: boolean;
        defaultType: string;
        defaults: any;
        detachOnRemove: boolean;
        layout: any;
        suspendLayout: boolean;
        items: any;
        constructor(config: any);
        add(...component: any[]):Ext.Component[]|Ext.Component;
        afterLayout(layout: Ext.layout.container.Container):void;
        beforeLayout():void;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        child(selector?: string):any;
        doLayout():Ext.container.Container;
        down(selector?: string):any;
        getComponent(comp: string|number):any;
        getLayout():Ext.layout.container.Container;
        insert(index: number, component: Ext.Component):Ext.Component;
        isAncestor(possibleDescendant: Ext.Component):void;
        move(fromIdx: number, toIdx: number):Ext.Component;
        onAdd(component: Ext.Component, position: number):void;
        onBeforeAdd(item: Ext.Component):void;
        onRemove(component: Ext.Component, autoDestroy: boolean):void;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        remove(component: Ext.Component|string, autoDestroy?: boolean):Ext.Component;
        removeAll(autoDestroy?: boolean):Ext.Component[];
    }
    export class ButtonGroup extends Ext.panel.Panel {
        columns: number;
        constructor(config: any);
    }
    export class Container extends Ext.container.AbstractContainer {
        anchorSize: any;
        constructor(config: any);
        getChildByElement(el: Ext.dom.Element|HTMLElement|string, deep: boolean):Ext.Component;
    }
    export class DockingContainer extends Ext.Base {
        defaultDockWeights: any;
        addDocked(component: any, pos?: number):void;
        getDockedComponent(comp: string|number):Ext.Component;
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
        autoLoad: any;
        autoSync: boolean;
        fields: any[];
        listeners: any;
        model: string;
        proxy: any;
        storeId: string;
        batchUpdateMode: string;
        defaultProxyType: string;
        defaultSortDirection: string;
        filterOnLoad: boolean;
        filters: any[]|Ext.util.MixedCollection;
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
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeAll():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeAutoSync():void;
        resumeEvents():void;
        save():void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
        suspendAutoSync():void;
        suspendEvents(queueSuspended: boolean):void;
        sync(options?: any):Ext.data.Store;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Batch extends Ext.Base {
        autoStart: boolean;
        listeners: any;
        pauseOnException: boolean;
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
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        pause():Ext.data.Batch;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        autoAbort: boolean;
        cors: boolean;
        defaultHeaders: any;
        disableCaching: boolean;
        disableCachingParam: string;
        extraParams: any;
        listeners: any;
        timeout: number;
        withCredentials: boolean;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        abort(request?: any):void;
        abortAll():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: any):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        parseStatus(status: number):any;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        request(options: any):any;
        resumeEvents():void;
        setOptions(options: any, scope: any):any;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        upload(form: string|HTMLElement|Ext.dom.Element, url: string, params: string, options: any):void;
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
        convert: Function;
        dateFormat: string;
        defaultValue: any;
        mapping: string|number;
        name: string;
        persist: boolean;
        sortDir: string;
        sortType: Function;
        type: any;
        useNull: boolean;
        constructor(config: any);
    }
    export class IdGenerator extends Ext.Base {
        id: string;
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
        associations: any[];
        belongsTo: any;
        clientIdProperty: string;
        defaultProxyType: string;
        hasMany: any;
        idProperty: string;
        idgen: any;
        listeners: any;
        persistenceProperty: string;
        proxy: any;
        validations: any[];
        dirty: boolean;
        editing: boolean;
        fields: any[]|string[]|Ext.util.MixedCollection;
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
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        beginEdit():void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        commit(silent?: boolean):void;
        copy(id?: string):Ext.data.Model;
        destroy(options: any):Ext.data.Model;
        enableBubble(eventNames: string|string[]):void;
        endEdit(silent: boolean, modifiedFieldNames: string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(fieldName: string):any;
        getAssociatedData():any;
        getChanges():any;
        getData(includeAssociated: boolean):any;
        getId():number|string;
        getProxy():Ext.data.proxy.Proxy;
        hasListener(eventName: string):boolean;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        join(store: Ext.data.Store):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        reject(silent?: boolean):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        save(options: any):Ext.data.Model;
        set(fieldName: any, newValue: any):string[];
        setDirty():void;
        setId(id: number|string):void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.Errors;
        static getFields():Ext.data.Field[];
        static getProxy():Ext.data.proxy.Proxy;
        static id(rec: Ext.data.Model):string;
        static load(id: number|string, config?: any):void;
        static setFields(fields: any, idProperty: any, clientIdProperty: any):void;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class NodeInterface extends Ext.Base {
        allowDrag: boolean;
        allowDrop: boolean;
        checked: boolean;
        children: Ext.data.NodeInterface[];
        cls: string;
        depth: number;
        expandable: boolean;
        expanded: boolean;
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        index: number;
        leaf: boolean;
        loaded: boolean;
        loading: boolean;
        parentId: string;
        qtip: string;
        qtitle: string;
        root: boolean;
        text: string;
        childNodes: any;
        firstChild: any;
        isNode: boolean;
        lastChild: any;
        nextSibling: any;
        parentNode: any;
        previousSibling: any;
        appendChild(node: Ext.data.NodeInterface|Ext.data.NodeInterface[]):Ext.data.NodeInterface;
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
        static decorate(modelClass: Ext.Class|Ext.data.Model):void;
    }
    export class NodeStore extends Ext.data.Store {
        node: Ext.data.Model;
        recursive: boolean;
        rootVisible: boolean;
        treeStore: Ext.data.TreeStore;
        constructor(config?: any);
    }
    export class Operation extends Ext.Base {
        action: string;
        batch: Ext.data.Batch;
        callback: Function;
        filters: Ext.util.Filter[];
        groupers: Ext.util.Grouper[];
        limit: number;
        scope: any;
        sorters: Ext.util.Sorter[];
        start: number;
        synchronous: boolean;
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
        action: string;
        method: string;
        params: any;
        url: string;
        constructor(config?: any);
    }
    export class ResultSet extends Ext.Base {
        count: number;
        loaded: boolean;
        records: Ext.data.Model[];
        success: boolean;
        total: number;
        totalRecords: number;
        constructor(config?: any);
    }
    export class SequentialIdGenerator extends Ext.data.IdGenerator {
        prefix: string;
        seed: number;
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
        buffered: boolean;
        clearOnPageLoad: boolean;
        clearRemovedOnLoad: boolean;
        groupDir: string;
        groupField: string;
        leadingBufferZone: number;
        pageSize: number;
        purgePageCount: number;
        remoteGroup: boolean;
        sortOnFilter: boolean;
        trailingBufferZone: number;
        currentPage: number;
        data: any[]|Ext.data.Model[]|Ext.util.MixedCollection;
        groupers: Ext.util.MixedCollection;
        snapshot: Ext.util.MixedCollection;
        constructor(config?: any);
        add(...model: any[]):Ext.data.Model[];
        addSorted(record: Ext.data.Model):void;
        aggregate(fn: Function, scope?: any, grouped?: boolean, args?: any[]):any;
        average(field: string, grouped?: boolean):any;
        clearFilter(suppressEvent: boolean):void;
        clearGrouping():void;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        commitChanges():void;
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        filter(filters: any[]|Ext.util.Filter[]|string, value?: string):void;
        filterBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):void;
        find(fieldName: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any, startIndex?: number):number;
        findExact(fieldName: string, value: any, startIndex?: number):number;
        findRecord(fieldName: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        first(grouped?: boolean):Ext.data.Model|void;
        getAt(index: number):Ext.data.Model;
        getById(id: any):Ext.data.Model;
        getCount():number;
        getGroupString(instance: Ext.data.Model):string;
        getGroups(groupName?: string):any;
        getPageFromRecordIndex(index: number):number;
        getRange(startIndex?: number, endIndex?: number):Ext.data.Model[];
        getTotalCount():number;
        group(groupers: string|any[], direction?: string):void;
        guaranteeRange(start: any, end: any, cb: any, scope: any):void;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        indexOfTotal(record: Ext.data.Model):number;
        insert(index: number, records: Ext.data.Model[]):void;
        isFiltered():boolean;
        isGrouped():boolean;
        last(grouped?: boolean):Ext.data.Model|void;
        loadData(data: Ext.data.Model[]|any[], append?: boolean):void;
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
        remove(records: Ext.data.Model|Ext.data.Model[]):void;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: string|string[]):void;
        static filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
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
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unregister(...stores: any[]):void;
    }
    export class Tree extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        root: Ext.data.NodeInterface;
        constructor(root?: Ext.data.NodeInterface);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getNodeById(id: string):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setRootNode(node: Ext.data.NodeInterface):Ext.data.NodeInterface;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class TreeStore extends Ext.data.AbstractStore {
        clearOnLoad: boolean;
        clearRemovedOnLoad: boolean;
        defaultRootId: string;
        defaultRootProperty: string;
        folderSort: boolean;
        nodeParam: string;
        root: any;
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
        version: number;
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
        associatedModel: string;
        associationKey: string;
        ownerModel: string;
        primaryKey: string;
        reader: Ext.data.reader.Reader;
        associatedName: string;
        ownerName: string;
        constructor(config?: any);
        getReader():Ext.data.reader.Reader;
    }
    export class BelongsTo extends Ext.data.association.Association {
        foreignKey: string;
        getterName: string;
        setterName: string;
        type: string;
        constructor(config?: any);
    }
    export class HasMany extends Ext.data.association.Association {
        autoLoad: boolean;
        filterProperty: string;
        foreignKey: string;
        name: string;
        storeConfig: any;
        type: string;
        constructor(config?: any);
    }
    export class HasOne extends Ext.data.association.Association {
        foreignKey: string;
        getterName: string;
        setterName: string;
        type: string;
        constructor(config?: any);
    }
}
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        headers: any;
        actionMethods: any;
        constructor(config?: any);
        getMethod(request: Ext.data.Request):string;
    }
    export class Client extends Ext.data.proxy.Proxy {
        constructor(config?: any);
        clear():void;
    }
    export class Direct extends Ext.data.proxy.Server {
        directFn: Function|string;
        paramOrder: string|string[];
        paramsAsHash: boolean;
        constructor(config: any);
    }
    export class JsonP extends Ext.data.proxy.Server {
        autoAppendParams: boolean;
        callbackKey: string;
        recordParam: string;
        constructor();
        abort():void;
        encodeRecords(records: Ext.data.Model[]):string;
    }
    export class LocalStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class Memory extends Ext.data.proxy.Client {
        data: any;
        constructor(config?: any);
    }
    export class Proxy extends Ext.Base {
        batchActions: boolean;
        batchOrder: string;
        listeners: any;
        model: string|Ext.data.Model;
        reader: any;
        writer: any;
        hasListeners: any;
        isObservable: boolean;
        isProxy: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        clearManagedListeners():void;
        destroy(operation: Ext.data.Operation, callback: Function, scope: any):void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getModel():Ext.data.Model;
        getReader():Ext.data.reader.Reader;
        getWriter():Ext.data.writer.Writer;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        read(operation: Ext.data.Operation, callback: Function, scope: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setModel(model: string|Ext.data.Model, setOnStore: boolean):void;
        setReader(reader: any):Ext.data.reader.Reader;
        setWriter(writer: any):Ext.data.writer.Writer;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        update(operation: Ext.data.Operation, callback: Function, scope: any):void;
    }
    export class Rest extends Ext.data.proxy.Ajax {
        appendId: boolean;
        format: string;
        constructor(config?: any);
    }
    export class Server extends Ext.data.proxy.Proxy {
        api: any;
        cacheString: string;
        directionParam: string;
        extraParams: any;
        filterParam: string;
        groupParam: string;
        limitParam: string;
        noCache: boolean;
        pageParam: string;
        simpleSortMode: boolean;
        sortParam: string;
        startParam: string;
        timeout: number;
        url: string;
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
        id: string;
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
        record: string;
        useSimpleAccessors: boolean;
        jsonData: any;
        constructor(config?: any);
    }
    export class Reader extends Ext.Base {
        idProperty: string;
        implicitIncludes: boolean;
        listeners: any;
        messageProperty: string;
        readRecordsOnFailure: boolean;
        root: string;
        successProperty: string;
        totalProperty: string;
        hasListeners: any;
        isObservable: boolean;
        metaData: any;
        rawData: any;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getResponseData(response: any):Ext.data.ResultSet;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        read(response: any):Ext.data.ResultSet;
        readRecords(data: any):Ext.data.ResultSet;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        record: string;
        xmlData: any;
        constructor(config?: any);
        getData(data: any):any;
    }
}
declare module Ext.data.writer {
    export class Json extends Ext.data.writer.Writer {
        allowSingle: boolean;
        encode: boolean;
        root: string;
        constructor(config?: any);
    }
    export class Writer extends Ext.Base {
        nameProperty: string;
        writeAllFields: boolean;
        constructor(config?: any);
        getRecordData(record: Ext.data.Model, operation?: Ext.data.Operation):any;
        write(request: Ext.data.Request):Ext.data.Request;
    }
    export class Xml extends Ext.data.writer.Writer {
        defaultDocumentRoot: string;
        documentRoot: string;
        header: string;
        record: string;
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
        constrainTo(constrainTo: string|HTMLElement|Ext.dom.Element, pad?: any, inContent?: boolean):void;
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
        onDragDrop(e: Event, id: string|Ext.dd.DragDrop[]):void;
        onDragEnter(e: Event, id: string|Ext.dd.DragDrop[]):void;
        onDragOut(e: Event, id: string|Ext.dd.DragDrop[]):void;
        onDragOver(e: Event, id: string|Ext.dd.DragDrop[]):void;
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
        animRepair: boolean;
        ddGroup: string;
        dropAllowed: string;
        dropNotAllowed: string;
        repairHighlightColor: string;
        constructor(el: string|HTMLElement|Ext.dom.Element, config?: any);
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
        autoStart: boolean|number;
        constrainTo: Ext.util.Region|Ext.dom.Element;
        delegate: string;
        listeners: any;
        overCls: string;
        preventDefault: boolean;
        stopEvent: boolean;
        tolerance: number;
        trackOver: boolean;
        active: boolean;
        dragTarget: HTMLElement;
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getDragTarget():Ext.dom.Element;
        getOffset(constrainMode: any):number[];
        hasListener(eventName: string):boolean;
        initEl(el: Ext.dom.Element|HTMLElement):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        onBeforeStart(e: Ext.EventObject):void;
        onDrag(e: Ext.EventObject):void;
        onEnd(e: Ext.EventObject):void;
        onStart(e: Ext.EventObject):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        containerScroll: boolean;
        dragData: any;
        constructor(el: string|HTMLElement|Ext.dom.Element, config: any);
        afterRepair():void;
        getRepairXY(e: Event):number[];
        onInitDrag(x: number, y: number):boolean;
    }
    export class DropTarget extends Ext.dd.DDTarget {
        ddGroup: string;
        dropAllowed: string;
        dropNotAllowed: string;
        overClass: string;
        constructor(el: string|HTMLElement|Ext.dom.Element, config: any);
        notifyDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        notifyEnter(source: Ext.dd.DragSource, e: Event, data: any):string;
        notifyOut(source: Ext.dd.DragSource, e: Event, data: any):void;
        notifyOver(source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class DropZone extends Ext.dd.DropTarget {
        constructor(el: string|HTMLElement|Ext.dom.Element, config: any);
        getTargetFromEvent(e: Event):any;
        onContainerDrop(source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onContainerOver(source: Ext.dd.DragSource, e: Event, data: any):string;
        onNodeDrop(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):boolean;
        onNodeEnter(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOut(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):void;
        onNodeOver(nodeData: any, source: Ext.dd.DragSource, e: Event, data: any):string;
    }
    export class Registry {
        static getHandle(id: string|HTMLElement):any;
        static getHandleFromEvent(e: Event):any;
        static getInitialConfig(name: any):void;
        static getTarget(id: string|HTMLElement):any;
        static getTargetFromEvent(e: Event):any;
        static register(element: string|HTMLElement, data: any):void;
        static unregister(element: string|HTMLElement):void;
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
        static register(el: string|HTMLElement|Ext.dom.Element|string[]|HTMLElement[]|Ext.dom.Element[]):void;
        static unregister(el: string|HTMLElement|Ext.dom.Element|string[]|HTMLElement[]|Ext.dom.Element[]):void;
    }
    export class StatusProxy extends Ext.Component {
        dropAllowed: string;
        dropNotAllowed: string;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static addProvider(...provider: any[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static getInitialConfig(name: any):void;
        static getProvider(id: string|Ext.direct.Provider):void;
        static hasListener(eventName: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: string|Ext.direct.Provider):Ext.direct.Provider;
        static resumeEvents():void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        baseParams: any;
        interval: number;
        url: string|Function;
        constructor(config: any);
    }
    export class Provider extends Ext.Base {
        id: string;
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isConnected():void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        actions: any;
        enableBuffer: number|boolean;
        enableUrlEncode: string;
        maxRetries: number;
        namespace: any;
        timeout: number;
        url: string;
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
        addCls(className: string|string[]):Ext.dom.Element;
        appendChild(el: string|HTMLElement|Ext.dom.AbstractElement):Ext.dom.AbstractElement;
        appendTo(el: string|HTMLElement|Ext.dom.AbstractElement):Ext.dom.AbstractElement;
        applyStyles(styles: any):Ext.dom.Element;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        contains(el: HTMLElement|string):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.AbstractElement;
        destroy():void;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        findParent(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        first(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        getActiveElement():HTMLElement;
        getAlignToXY(element: Ext.dom.Element|HTMLElement|string, position?: string, offsets?: any[]):any[];
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
        getOffsetsTo(element: Ext.dom.Element|HTMLElement|string):any[];
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRight(local: boolean):number;
        getSize(contentSize?: boolean):any;
        getStyle(property: string|string[], inline?: boolean):any;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):string|number;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX(el: any):number;
        getXY():any[];
        getY(el: any):number;
        hasCls(className: string):boolean;
        hide(animate?: any):Ext.dom.Element;
        insertAfter(el: string|HTMLElement|Ext.dom.AbstractElement):Ext.dom.AbstractElement;
        insertBefore(el: string|HTMLElement|Ext.dom.AbstractElement):Ext.dom.AbstractElement;
        insertFirst(el: any):Ext.dom.AbstractElement;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.dom.AbstractElement;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.AbstractElement;
        is(selector: string):boolean;
        isStyle(style: string, value: string):boolean;
        isTransparent(prop: string):boolean;
        last(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        mask(msg?: string, msgCls?: string):void;
        next(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        parent(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        populateStyleMap(map: any, order: any):void;
        prev(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        query(selector: string):HTMLElement[];
        radioCls(className: string|string[]):Ext.dom.Element;
        remove():void;
        removeCls(className: string|string[]):Ext.dom.Element;
        repaint():Ext.dom.Element;
        replace(el: string|HTMLElement|Ext.dom.AbstractElement):Ext.dom.AbstractElement;
        replaceCls(oldClassName: string, newClassName: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.AbstractElement;
        select(selector: string):Ext.dom.CompositeElement;
        serializeForm(form: any):string;
        set(o: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: string):Ext.dom.AbstractElement;
        setBox(box: any, adjust?: boolean, animate?: any):Ext.dom.AbstractElement;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: number|string, animate?: any):Ext.dom.Element;
        setLeft(left: string):Ext.dom.AbstractElement;
        setRight(right: string):Ext.dom.AbstractElement;
        setSize(width: number|string, height: number|string, animate?: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: string):Ext.dom.AbstractElement;
        setVisibilityMode(mode: any):Ext.dom.AbstractElement;
        setVisible(visible: boolean, animate?: any):Ext.dom.Element;
        setWidth(width: number|string, animate?: any):Ext.dom.Element;
        setX(The: number, animate?: any):Ext.dom.AbstractElement;
        setXY(pos: any[], animate?: any):Ext.dom.AbstractElement;
        setY(The: number, animate?: any):Ext.dom.AbstractElement;
        show(animate?: any):Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        translatePoints(x: number|any[], y?: number):any;
        unmask():void;
        up(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        update(html: string):Ext.dom.Element;
        wrap(config?: any, returnDom?: boolean):HTMLElement|Ext.dom.AbstractElement;
        static fly(dom: string|HTMLElement, named?: string):Ext.dom.AbstractElement.Fly;
        static fromPoint(x: number, y: number):string;
        static get(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():any;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static mergeClsList(clsList1: any, clsList2: any):any[];
        static normalize(prop: string):string;
        static parseBox(box: number|string):any;
        static parseStyles(styles: string):any;
        static removeCls(existingClsList: any, removeClsList: any):any[];
        static unitizeBox(box: number|string, units: string):string;
    }
    export class AbstractHelper extends Ext.Base {
        append(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        applyStyles(el: string|HTMLElement, styles: any):void;
        generateStyles(styles: any, buffer?: string[]):string|string[];
        insertAfter(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertFirst(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertHtml(where: string, el: HTMLElement|Text, html: string):HTMLElement;
        markup(spec: any):string;
        overwrite(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
    }
    export class AbstractQuery extends Ext.Base {
        is(el: string|HTMLElement|any[], selector: string):boolean;
        select(selector: string, root?: HTMLElement|string):HTMLElement[];
        selectNode(selector: string, root?: HTMLElement|string):HTMLElement;
    }
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(elements: any, root: any);
    }
    export class CompositeElementLite extends Ext.Base {
        elements: HTMLElement[];
        isComposite: boolean;
        constructor(elements: any, root: any);
        add(els: HTMLElement[]|Ext.dom.CompositeElement):Ext.dom.CompositeElement;
        clear():void;
        contains(el: string|HTMLElement|Ext.dom.Element|number):boolean;
        each(fn: (el: Ext.dom.Element, c: Ext.dom.CompositeElement, index: number) => any, scope?: any):Ext.dom.CompositeElement;
        fill(els: HTMLElement[]|Ext.dom.CompositeElement):Ext.dom.CompositeElement;
        filter(selector: string|((el: Ext.dom.Element, index: number) => any)):Ext.dom.CompositeElement;
        first():Ext.dom.Element;
        getCount():number;
        indexOf(el: string|HTMLElement|Ext.dom.Element|number):number;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        removeElement(el: string|HTMLElement|Ext.dom.Element|number, removeDom?: boolean):Ext.dom.CompositeElement;
        replaceElement(el: string|HTMLElement|Ext.dom.Element|number, replacement: string|Ext.dom.Element, domReplace?: boolean):Ext.dom.CompositeElement;
    }
    export class Element extends Ext.dom.AbstractElement {
        autoBoxAdjust: boolean;
        originalDisplay: string;
        constructor(element: string|HTMLElement, forceNew?: boolean);
        addClsOnClick(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addClsOnFocus(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addClsOnOver(className: string, testFn?: Function, scope?: any):Ext.dom.Element;
        addKeyListener(key: any, fn: Function, scope?: any):Ext.util.KeyMap;
        addKeyMap(config: any):Ext.util.KeyMap;
        addListener(eventName: string, fn: Function, scope?: any, options?: any):Ext.dom.Element;
        alignTo(element: string|HTMLElement|Ext.dom.Element, position?: string, offsets?: number[], animate?: any):Ext.dom.Element;
        anchorTo(element: string|HTMLElement|Ext.dom.Element, position: string, offsets?: number[], animate?: any, monitorScroll?: boolean|number, callback?: Function):Ext.dom.Element;
        blur():Ext.dom.Element;
        boxWrap(class_?: string):Ext.dom.Element;
        cacheScrollValues():Function;
        center(centerIn?: string|HTMLElement|Ext.dom.Element):void;
        clean(forceReclean?: boolean):void;
        clearListeners():Ext.dom.Element;
        clearOpacity():Ext.dom.Element;
        clearPositioning(value?: string):Ext.dom.AbstractElement;
        clip():Ext.dom.Element;
        createProxy(config: any, renderTo?: string|HTMLElement, matchBox?: boolean):Ext.dom.Element;
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
        getConstrainVector(constrainTo: Ext.dom.Element|Ext.util.Region, proposedPosition: number[]):number[]|boolean;
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
        scrollIntoView(container?: string|HTMLElement|Ext.dom.Element, hscroll?: boolean):Ext.dom.Element;
        scrollTo(side: string, value: number, animate?: any):Ext.dom.Element;
        selectable():Ext.dom.Element;
        setBounds(x: number, y: number, width: number|string, height: number|string, animate?: any):Ext.dom.AbstractElement;
        setDisplayed(value: boolean|string):Ext.dom.Element;
        setLeftTop(left: string, top: string):Ext.dom.Element;
        setLocation(x: number, y: number, animate?: any):Ext.dom.AbstractElement;
        setOpacity(opacity: number, animate?: any):Ext.dom.Element;
        setPositioning(posCfg: any):Ext.dom.AbstractElement;
        setRegion(region: Ext.util.Region, animate?: any):Ext.dom.AbstractElement;
        shift(options: any):Ext.dom.Element;
        slideIn(anchor?: string, options?: any):Ext.dom.Element;
        slideOut(anchor?: string, options?: any):Ext.dom.Element;
        swallowEvent(eventName: string|string[], preventDefault?: boolean):Ext.dom.Element;
        switchOff(options?: any):Ext.dom.Element;
        toggle(animate?: any):Ext.dom.Element;
        un(eventName: string, fn: Function, scope: any):Ext.dom.Element;
        unclip():Ext.dom.Element;
        unselectable():Ext.dom.Element;
        static select(selector: string|HTMLElement[], unique?: boolean, root?: HTMLElement|string):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        static serializeForm(form: any):string;
    }
    export class Helper {
        static useDom: boolean;
        static append(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static applyStyles(el: string|HTMLElement, styles: any):void;
        static createDom(o: any):HTMLElement;
        static createHtml(spec: any):string;
        static createTemplate(o: any):Ext.Template;
        static generateStyles(styles: any, buffer?: string[]):string|string[];
        static getInitialConfig(name: any):void;
        static insertAfter(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertBefore(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertFirst(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        static insertHtml(where: string, el: HTMLElement|Text, html: string):HTMLElement;
        static markup(spec: any):string;
        static overwrite(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
    }
    export class Query {
        static matchers: any[];
        static operators: any;
        static pseudos: any;
        static compile(selector: string, type?: string):Function;
        static filter(el: any[], selector: string, nonMatches: boolean):any[];
        static is(el: string|HTMLElement|any[], selector: string):boolean;
        static jsSelect(selector: string, root?: HTMLElement|string):any[];
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
        lightnessFactor: number;
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
        static toHex(color: string|string[]):string;
    }
    export class Component extends Ext.Component {
        autoSize: boolean;
        enginePriority: string[];
        gradients: any[];
        viewBox: boolean;
        constructor(config: any);
        createSurface():void;
    }
    export class CompositeSprite extends Ext.util.MixedCollection {
        constructor(config: any);
        animate(config: any):any;
        destroy():void;
        getActiveAnimation():Ext.fx.Anim|boolean;
        getBBox():any;
        hasActiveFx():Ext.fx.Anim|boolean;
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
        draggable: boolean;
        fill: string;
        font: string;
        group: string|string[];
        height: number;
        listeners: any;
        opacity: number;
        path: string;
        radius: number;
        size: number;
        stroke: string;
        'stroke-width': number;
        text: string;
        type: string;
        width: number;
        x: number;
        y: number;
        dd: Ext.dd.DragSource;
        hasListeners: any;
        isObservable: boolean;
        isSprite: boolean;
        constructor(config: any);
        addCls(className: string|string[]):Ext.draw.Sprite;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        animate(config: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getActiveAnimation():Ext.fx.Anim|boolean;
        getBBox():any;
        hasActiveFx():Ext.fx.Anim|boolean;
        hasListener(eventName: string):boolean;
        hide(redraw: boolean):Ext.draw.Sprite;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        redraw():Ext.draw.Sprite;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove():boolean;
        removeCls(className: string|string[]):Ext.draw.Sprite;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(...args: any[]):Ext.draw.Sprite[]|Ext.draw.Sprite;
        addCls(sprite: any, className: string|string[]):void;
        addEvents(...eventNames: any[]):void;
        addGradient(gradient: any):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getGroup(id: string):any;
        getId():void;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(sprite: Ext.draw.Sprite, destroySprite: boolean):void;
        removeAll(destroySprites: boolean):void;
        removeCls(sprite: any, className: string|string[]):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        setSize(w: number, h: number):void;
        setStyle(sprite: any, styles: any):void;
        setText(sprite: any, text: string):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Text extends Ext.draw.Component {
        degrees: number;
        styleSelector: string;
        text: string;
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
        backgroundColor: string;
        expressInstall: boolean;
        flashAttributes: any;
        flashParams: any;
        flashVars: any;
        flashVersion: string;
        swfHeight: string|number;
        swfWidth: string|number;
        url: string;
        wmode: string;
        swf: Ext.dom.Element;
        static EXPRESS_INSTALL_URL: string;
        constructor(config: any);
        getSwfId():void;
    }
}
declare module Ext.form {
    export class Basic extends Ext.util.Observable {
        api: any;
        baseParams: any;
        errorReader: Ext.data.reader.Reader;
        method: string;
        paramOrder: string|string[];
        paramsAsHash: boolean;
        reader: Ext.data.reader.Reader;
        standardSubmit: boolean;
        timeout: number;
        trackResetOnLoad: boolean;
        url: string;
        waitMsgTarget: string|HTMLElement|Ext.dom.Element;
        owner: Ext.container.Container;
        constructor(owner: Ext.container.Container, config: any);
        applyIfToFields(obj: any):Ext.form.Basic;
        applyToFields(obj: any):Ext.form.Basic;
        checkDirty():void;
        checkValidity():void;
        clearInvalid():Ext.form.Basic;
        destroy():void;
        doAction(action: string|Ext.form.action.Action, options?: any):Ext.form.Basic;
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
        allowBlank: boolean;
        columns: string|number|number[];
        submitValue: boolean;
        validateOnChange: boolean;
        value: any;
        vertical: boolean;
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
        markInvalid(errors: string|string[]):void;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: string|string[]):void;
        static filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
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
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class FieldAncestor extends Ext.Base {
        fieldDefaults: any;
        initFieldAncestor():void;
        onFieldAdded(field: Ext.form.field.Field):void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldRemoved(field: Ext.form.field.Field):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        onLabelableAdded(labelable: Ext.form.Labelable):void;
        onLabelableRemoved(labelable: Ext.form.Labelable):void;
    }
    export class FieldContainer extends Ext.container.Container {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
        clearCls: string;
        combineErrors: boolean;
        combineLabels: boolean;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldDefaults: any;
        fieldLabel: string;
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        invalidCls: string;
        labelAlign: string;
        labelAttrTpl: string|any[]|Ext.XTemplate;
        labelCls: string;
        labelClsExtra: string;
        labelPad: number;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        preventMark: boolean;
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
        checkboxName: string;
        checkboxToggle: boolean;
        collapsed: boolean;
        collapsible: boolean;
        title: string;
        toggleOnTitleClick: boolean;
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
        forId: string;
        text: string;
        constructor(config: any);
        setText(text: string, encode?: boolean):Ext.form.Label;
    }
    export class Labelable extends Ext.Base {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
        clearCls: string;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldLabel: string;
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        invalidCls: string;
        labelAlign: string;
        labelAttrTpl: string|any[]|Ext.XTemplate;
        labelCls: string;
        labelClsExtra: string;
        labelPad: number;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        preventMark: boolean;
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
        fieldDefaults: any;
        pollForChanges: boolean;
        pollInterval: number;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: any):void;
        static eachKey(fn: Function, scope?: any):void;
        static enableBubble(eventNames: string|string[]):void;
        static filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        static findBy(fn: Function, scope?: any):any;
        static findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
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
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static remove(o: any):any;
        static removeAll(items: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvents():void;
        static sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.form.action {
    export class Action extends Ext.Base {
        failure: Function;
        form: Ext.form.Basic;
        headers: any;
        method: string;
        params: any;
        reset: boolean;
        scope: any;
        submitEmptyText: boolean;
        success: Function;
        timeout: number;
        url: string;
        waitMsg: string;
        waitTitle: string;
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
        target: string;
        constructor(config?: any);
    }
    export class Submit extends Ext.form.action.Action {
        clientValidation: boolean;
        constructor(config?: any);
    }
}
declare module Ext.form.field {
    export class Base extends Ext.Component {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
        checkChangeBuffer: number;
        checkChangeEvents: string[];
        clearCls: string;
        dirtyCls: string;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldCls: string;
        fieldLabel: string;
        fieldStyle: string;
        focusCls: string;
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        inputAttrTpl: string|any[]|Ext.XTemplate;
        inputId: string;
        inputType: string;
        invalidCls: string;
        labelAlign: string;
        labelAttrTpl: string|any[]|Ext.XTemplate;
        labelCls: string;
        labelClsExtra: string;
        labelPad: number;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        name: string;
        preventMark: boolean;
        readOnly: boolean;
        readOnlyCls: string;
        submitValue: boolean;
        tabIndex: number;
        validateOnBlur: boolean;
        validateOnChange: boolean;
        value: any;
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
        markInvalid(errors: string|string[]):void;
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
        afterBoxLabelTextTpl: string|any[]|Ext.XTemplate;
        afterBoxLabelTpl: string|any[]|Ext.XTemplate;
        beforeBoxLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeBoxLabelTpl: string|any[]|Ext.XTemplate;
        boxLabel: string;
        boxLabelAlign: string;
        boxLabelAttrTpl: string|any[]|Ext.XTemplate;
        boxLabelCls: string;
        checked: boolean;
        checkedCls: string;
        handler: Function;
        inputValue: string;
        scope: any;
        uncheckedValue: string;
        boxLabelEl: Ext.dom.Element;
        constructor(config: any);
    }
    export class ComboBox extends Ext.form.field.Picker {
        allQuery: string;
        autoSelect: boolean;
        defaultListConfig: any;
        displayField: string;
        fieldSubTpl: Ext.XTemplate;
        forceSelection: boolean;
        growToLongestValue: boolean;
        hiddenName: string;
        listConfig: any;
        minChars: number;
        multiSelect: boolean;
        pageSize: number;
        queryCaching: boolean;
        queryDelay: number;
        queryMode: string;
        queryParam: string;
        selectOnTab: boolean;
        store: Ext.data.Store|any[];
        transform: string|HTMLElement|Ext.dom.Element;
        triggerAction: string;
        typeAhead: boolean;
        typeAheadDelay: number;
        valueField: string;
        valueNotFoundText: string;
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
        select(r: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Date extends Ext.form.field.Picker {
        disabledDates: string[];
        disabledDays: number[];
        maxValue: Date|string;
        minValue: Date|string;
        showToday: boolean;
        submitFormat: string;
        useStrict: boolean;
        constructor(config: any);
        safeParse(value: string, format: string):Date;
        setDisabledDates(disabledDates: string[]):void;
        setDisabledDays(disabledDays: number[]):void;
        setMaxValue(value: Date):void;
        setMinValue(value: Date):void;
    }
    export class Display extends Ext.form.field.Base {
        htmlEncode: boolean;
        renderer: Function;
        scope: any;
        constructor(config: any);
    }
    export class Field extends Ext.Base {
        disabled: boolean;
        name: string;
        submitValue: boolean;
        validateOnChange: boolean;
        value: any;
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
        markInvalid(errors: string|string[]):void;
        reset():void;
        resetOriginalValue():void;
        setValue(value: any):Ext.form.field.Field;
        validate():boolean;
    }
    export class File extends Ext.form.field.Trigger {
        buttonConfig: any;
        buttonMargin: number;
        buttonOnly: boolean;
        button: Ext.button.Button;
        fileInputEl: Ext.dom.Element;
        constructor(config: any);
        getTriggerMarkup():void;
    }
    export class Hidden extends Ext.form.field.Base {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.Component {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterIFrameTpl: string|any[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        afterTextAreaTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeIFrameTpl: string|any[]|Ext.XTemplate;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
        beforeTextAreaTpl: string|any[]|Ext.XTemplate;
        clearCls: string;
        defaultLinkValue: string;
        defaultValue: string;
        enableAlignments: boolean;
        enableColors: boolean;
        enableFont: boolean;
        enableFontSize: boolean;
        enableFormat: boolean;
        enableLinks: boolean;
        enableLists: boolean;
        enableSourceEdit: boolean;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldLabel: string;
        fontFamilies: string[];
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        iframeAttrTpl: string|any[]|Ext.XTemplate;
        labelAlign: string;
        labelAttrTpl: string|any[]|Ext.XTemplate;
        labelCls: string;
        labelClsExtra: string;
        labelPad: number;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        name: string;
        preventMark: boolean;
        submitValue: boolean;
        validateOnChange: boolean;
        value: any;
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
        execCmd(cmd: string, value?: string|boolean):void;
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
        markInvalid(errors: string|string[]):void;
        pushValue():void;
        relayCmd(cmd: string, value?: string|boolean):void;
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
        allowDecimals: boolean;
        autoStripChars: boolean;
        baseChars: string;
        maxValue: number;
        minValue: number;
        step: number;
        constructor(config: any);
        setMaxValue(value: number):void;
        setMinValue(value: number):void;
    }
    export class Picker extends Ext.form.field.Trigger {
        matchFieldWidth: boolean;
        openCls: string;
        pickerAlign: string;
        pickerOffset: number[];
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
        keyNavEnabled: boolean;
        mouseWheelEnabled: boolean;
        spinDownEnabled: boolean;
        spinUpEnabled: boolean;
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
        allowBlank: boolean;
        disableKeyFilter: boolean;
        emptyCls: string;
        emptyText: string;
        enableKeyEvents: boolean;
        enforceMaxLength: boolean;
        grow: boolean;
        growMax: number;
        growMin: number;
        maskRe: RegExp;
        maxLength: number;
        minLength: number;
        regex: RegExp;
        regexText: string;
        selectOnFocus: boolean;
        size: number;
        stripCharsRe: RegExp;
        validator: Function;
        vtype: string;
        vtypeText: string;
        constructor(config: any);
        autoSize():void;
        selectText(start?: number, end?: number):void;
    }
    export class TextArea extends Ext.form.field.Text {
        cols: number;
        enterIsSpecial: boolean;
        preventScrollbars: boolean;
        rows: number;
        constructor(config: any);
    }
    export class Time extends Ext.form.field.ComboBox {
        increment: number;
        maxValue: Date|string;
        minValue: Date|string;
        pickerMaxHeight: number;
        snapToIncrement: boolean;
        constructor(config: any);
        setMaxValue(value: Date|string):void;
        setMinValue(value: Date|string):void;
    }
    export class Trigger extends Ext.form.field.Text {
        editable: boolean;
        hideTrigger: boolean;
        repeatTriggerClick: boolean;
        triggerBaseCls: string;
        triggerCls: string;
        triggerWrapCls: string;
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
        alternate: boolean;
        callback: Function;
        delay: number;
        duration: number;
        dynamic: boolean;
        easing: string;
        from: any;
        iterations: number;
        keyframes: any;
        listeners: any;
        reverse: boolean;
        scope: Function;
        target: any;
        to: any;
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
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animator extends Ext.Base {
        delay: number;
        duration: number;
        dynamic: boolean;
        easing: string;
        iterations: number;
        keyframes: any;
        listeners: any;
        target: Ext.fx.target.Target;
        currentIteration: number;
        hasListeners: any;
        isAnimator: boolean;
        isObservable: boolean;
        keyframeStep: number;
        paused: boolean;
        running: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
    }
    export class CompositeElement extends Ext.fx.target.Element {
        isComposite: boolean;
        constructor(target: any);
    }
    export class CompositeElementCSS extends Ext.fx.target.CompositeElement {
        constructor(target: any);
    }
    export class CompositeSprite extends Ext.fx.target.Sprite {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
    }
    export class Element extends Ext.fx.target.Target {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
    }
    export class ElementCSS extends Ext.fx.target.Element {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
    }
    export class Sprite extends Ext.fx.target.Target {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
    }
    export class Target extends Ext.Base {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.Sprite);
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
        lockedGridConfig: any;
        lockedViewConfig: any;
        normalGridConfig: any;
        normalViewConfig: any;
        scrollDelta: number;
        subGridXType: string;
        syncRowHeight: boolean;
        syncRowHeights():void;
    }
    export class LockingView extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PagingScroller extends Ext.Base {
        leadingBufferZone: number;
        numFromEdge: number;
        percentageFromEdge: number;
        scrollToLoadBuffer: number;
        trailingBufferZone: number;
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
        altText: string;
        getClass: Function;
        handler: Function;
        icon: string;
        iconCls: string;
        scope: any;
        stopSelection: boolean;
        tooltip: string;
        constructor(config: any);
        disableAction(index: number|Ext.grid.column.Action, silent?: boolean):void;
        enableAction(index: number|Ext.grid.column.Action, silent?: boolean):void;
    }
    export class Boolean extends Ext.grid.column.Column {
        undefinedText: string;
        constructor(config: any);
    }
    export class Column extends Ext.grid.header.Container {
        align: string;
        columns: any[];
        dataIndex: string;
        editRenderer: Function;
        editor: any;
        emptyCellText: string;
        field: any;
        fixed: boolean;
        groupable: boolean;
        hideable: boolean;
        menuDisabled: boolean;
        menuText: string;
        renderer: Function;
        tdCls: string;
        text: string;
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
        format: string;
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
        showSummaryRow: boolean;
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
        depthToIndent: number;
        enableGroupingMenu: boolean;
        enableNoGroups: boolean;
        groupByText: string;
        groupHeaderTpl: string|any[]|Ext.Template;
        hideGroupedHeader: boolean;
        showGroupsText: string;
        startCollapsed: boolean;
        constructor();
        collapse(groupName: string|Ext.dom.Element):void;
        collapseAll():void;
        expand(groupName: string|Ext.dom.Element):void;
        expandAll():void;
    }
    export class GroupingSummary extends Ext.grid.feature.Grouping {
        remoteRoot: string;
        showSummaryRow: boolean;
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
        defaultWidth: number;
        sealed: boolean;
        sortable: boolean;
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
        ddGroup: string;
        dragGroup: string;
        dropGroup: string;
        enableDrag: boolean;
        enableDrop: boolean;
        constructor(config: any);
    }
    export class Editing extends Ext.Base {
        clicksToEdit: number;
        listeners: any;
        triggerEvent: string;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        completeEdit():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        startEdit(record: Ext.data.Model|number, columnHeader: Ext.grid.column.Column|number):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class HeaderReorderer extends Ext.util.Observable {
    }
    export class HeaderResizer extends Ext.util.Observable {
        dynamic: boolean;
        getDynamic():boolean;
        setDynamic(dynamic: boolean):void;
    }
    export class RowEditing extends Ext.grid.plugin.Editing {
        autoCancel: boolean;
        clicksToMoveEditor: number;
        errorSummary: boolean;
        constructor();
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        customEditors: any;
        customRenderers: any;
        nameColumnWidth: number;
        nameField: string;
        propertyNames: any;
        source: any;
        valueField: string;
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
        invalidate(components: Ext.Component|any[], ownerCtContext: Ext.layout.ContextItem, full: boolean):void;
        resetLayout(layout: any, ownerContext: any, firstTime: any):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(undefined: Ext.Component|Ext.Component[]|Ext.dom.Element|Ext.dom.Element[]|Ext.dom.CompositeElement, width: number, height: number):void;
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
        setHeightInDom: boolean;
        setWidthInDom: boolean;
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
        ignoreOnContentChange: boolean;
        constructor();
    }
    export class Accordion extends Ext.layout.container.VBox {
        activeOnTop: boolean;
        animate: boolean;
        autoWidth: boolean;
        collapseFirst: boolean;
        fill: boolean;
        hideCollapseTool: boolean;
        multi: boolean;
        titleCollapse: boolean;
        constructor();
    }
    export class Anchor extends Ext.layout.container.Container {
        anchor: string;
        defaultAnchor: string;
        constructor();
    }
    export class Auto extends Ext.layout.container.Container {
        constructor();
    }
    export class Border extends Ext.layout.container.Container {
        padding: any;
        regionWeights: any;
        split: boolean;
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        defaultMargins: any;
        flex: number;
        pack: string;
        padding: string;
        stretchMaxPartner: string|Ext.Component;
        constructor(config: any);
        cacheFlexes(ownerContext: any):void;
    }
    export class Card extends Ext.layout.container.Fit {
        deferredRender: boolean;
        constructor();
        getActiveItem():Ext.Component;
        getNext():Ext.Component;
        getPrev():Ext.Component;
        next():Ext.Component;
        prev():Ext.Component;
        setActiveItem(newCard: Ext.Component|number|string):Ext.Component;
    }
    export class CheckboxGroup extends Ext.layout.container.Container {
        autoFlex: boolean;
        constructor();
    }
    export class Column extends Ext.layout.container.Container {
        constructor();
    }
    export class Container extends Ext.layout.Layout {
        itemCls: string;
        manageOverflow: number;
        reserveScrollbar: boolean;
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
        defaultMargins: any;
        constructor();
    }
    export class Form extends Ext.layout.container.Auto {
        constructor();
    }
    export class HBox extends Ext.layout.container.Box {
        align: string;
        constructor(config: any);
    }
    export class Table extends Ext.layout.container.Container {
        columns: number;
        tableAttrs: any;
        tdAttrs: any;
        trAttrs: any;
        constructor();
    }
    export class VBox extends Ext.layout.container.Box {
        align: string;
        constructor(config: any);
    }
}
declare module Ext.layout.container.boxOverflow {
    export class Menu extends Ext.layout.container.boxOverflow.None {
        triggerButtonCls: string;
        menuItems: any[];
        noItemsMenuText: string;
        constructor(layout: any);
    }
    export class None extends Ext.Base {
        constructor(layout: any, config: any);
    }
    export class Scroller extends Ext.layout.container.boxOverflow.None {
        afterCtCls: string;
        afterScrollerCls: string;
        animateScroll: boolean;
        beforeCtCls: string;
        beforeScrollerCls: string;
        listeners: any;
        scrollDuration: number;
        scrollIncrement: number;
        scrollRepeatInterval: number;
        scrollerCls: string;
        wheelIncrement: number;
        hasListeners: any;
        isObservable: boolean;
        constructor(layout: any, config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        scrollToItem(item: string|number|Ext.Component, animate: boolean):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.menu {
    export class CheckItem extends Ext.menu.Item {
        checkChangeDisabled: boolean;
        checked: boolean;
        checkedCls: string;
        groupCls: string;
        uncheckedCls: string;
        constructor(config: any);
        disableCheckChange():void;
        enableCheckChange():void;
        setChecked(checked: boolean, suppressEvents?: boolean):void;
    }
    export class ColorPicker extends Ext.menu.Menu {
        hideOnClick: boolean;
        pickerId: string;
        picker: Ext.picker.Color;
        constructor(config: any);
    }
    export class DatePicker extends Ext.menu.Menu {
        hideOnClick: boolean;
        pickerId: string;
        picker: Ext.picker.Date;
        constructor(config: any);
    }
    export class Item extends Ext.Component {
        activeCls: string;
        canActivate: boolean;
        clickHideDelay: number;
        destroyMenu: boolean;
        handler: Function;
        hideOnClick: boolean;
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        menu: Ext.menu.Menu;
        menuAlign: string;
        menuExpandDelay: number;
        menuHideDelay: number;
        plain: boolean;
        text: string;
        tooltip: any;
        tooltipType: string;
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
        allowOtherMenus: boolean;
        defaultAlign: string;
        ignoreParentClicks: boolean;
        plain: boolean;
        showSeparator: boolean;
        isAction: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        canActivateItem(item: any):boolean;
        deactivateActiveItem(andBlurFocusedItem: any):void;
        showBy(component: Ext.Component|Ext.dom.Element, position?: string, offsets?: number[]):Ext.menu.Menu;
    }
    export class Separator extends Ext.menu.Item {
        separatorCls: string;
        constructor(config: any);
    }
}
declare module Ext.panel {
    export class AbstractPanel extends Ext.container.Container {
        bodyBorder: boolean;
        bodyCls: string|string[];
        bodyPadding: number|string;
        bodyStyle: any;
        defaultDockWeights: any;
        dockedItems: any;
        isPanel: boolean;
        constructor(config: any);
        addDocked(component: any, pos?: number):void;
        getDockedComponent(comp: string|number):Ext.Component;
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
        icon: string;
        iconCls: string;
        title: string;
        titleAlign: string;
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: any):void;
        setIcon(icon: string):void;
        setIconCls(cls: string):void;
        setTitle(title: string):void;
    }
    export class Panel extends Ext.panel.AbstractPanel {
        animCollapse: boolean;
        bbar: any;
        buttonAlign: string;
        buttons: any;
        closable: boolean;
        closeAction: string;
        collapseDirection: boolean;
        collapseFirst: boolean;
        collapseMode: string;
        collapsed: boolean;
        collapsedCls: string;
        collapsible: boolean;
        fbar: any;
        floatable: boolean;
        frameHeader: boolean;
        header: any;
        headerPosition: string;
        hideCollapseTool: boolean;
        icon: string;
        iconCls: string;
        lbar: any;
        manageHeight: boolean;
        minButtonWidth: number;
        overlapHeader: boolean;
        placeholder: any;
        placeholderCollapseHideMode: number;
        preventHeader: boolean;
        rbar: any;
        tbar: any;
        title: string;
        titleAlign: string;
        titleCollapse: boolean;
        tools: any[]|Ext.panel.Tool[];
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
        insertProxy: boolean;
        moveOnDrag: boolean;
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
        columnLines: boolean;
        columns: any;
        deferRowRender: boolean;
        disableSelection: boolean;
        emptyText: string;
        enableColumnHide: boolean;
        enableColumnMove: boolean;
        enableColumnResize: boolean;
        enableLocking: boolean;
        features: Ext.grid.feature.Feature[];
        forceFit: boolean;
        hideHeaders: boolean;
        multiSelect: boolean;
        restrictColumnReorder: boolean;
        rowLines: boolean;
        scroll: string|boolean;
        selModel: any;
        selType: string;
        simpleSelect: boolean;
        sortableColumns: boolean;
        store: Ext.data.Store;
        verticalScroller: any;
        view: Ext.view.Table;
        viewConfig: any;
        viewType: string;
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
        handler: Function;
        scope: any;
        stopEvent: boolean;
        tooltip: any;
        tooltipType: string;
        type: string;
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
        allowReselect: boolean;
        clickEvent: string;
        handler: Function;
        scope: any;
        selectedCls: string;
        value: string;
        colors: string[];
        constructor(config: any);
        getValue():string;
        select(color: string, suppressEvent?: boolean):void;
    }
    export class Date extends Ext.Component {
        dayNames: string[];
        disableAnim: boolean;
        disabledCellCls: string;
        disabledDates: string[];
        disabledDatesRE: RegExp;
        disabledDays: number[];
        focusOnShow: boolean;
        format: string;
        handler: Function;
        keyNavConfig: any;
        maxDate: Date;
        minDate: Date;
        monthNames: string[];
        scope: any;
        selectedCls: string;
        constructor(config: any);
        getDayInitial(value: any):string;
        getValue():Date;
        hideMonthPicker(animate?: boolean):Ext.picker.Date;
        selectToday():Ext.picker.Date;
        setDisabledDates(disabledDates: string[]|RegExp):Ext.picker.Date;
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
        selectedCls: string;
        showButtons: boolean;
        value: Date|number[];
        constructor(config: any);
        adjustYear(offset?: number):void;
        getValue():number[];
        hasSelection():boolean;
        setValue(value: Date|number[]):Ext.picker.Month;
    }
    export class Time extends Ext.view.BoundList {
        increment: number;
        maxValue: Date;
        minValue: Date;
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
        createProxy(target: Ext.Component|Ext.dom.Element):Ext.dom.Element;
    }
    export class Resizer extends Ext.Base {
        constrainTo: Ext.dom.Element|Ext.util.Region;
        dynamic: boolean;
        handles: string;
        height: number;
        heightIncrement: number;
        listeners: any;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        pinned: boolean;
        preserveRatio: boolean;
        target: Ext.dom.Element|Ext.Component;
        transparent: boolean;
        width: number;
        widthIncrement: number;
        el: Ext.dom.Element;
        hasListeners: any;
        isObservable: boolean;
        originalTarget: Ext.dom.Element|Ext.Component;
        resizeTracker: Ext.resizer.ResizeTracker;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getEl():Ext.dom.Element;
        getTarget():Ext.dom.Element|Ext.Component;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resizeTo(width: number, height: number):void;
        resumeEvents():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Splitter extends Ext.Component {
        collapseOnDblClick: boolean;
        collapseTarget: string|Ext.panel.Panel;
        collapsedCls: string;
        collapsible: boolean;
        defaultSplitMax: number;
        defaultSplitMin: number;
        performCollapse: boolean;
        orientation: string;
        constructor(config: any);
        getTrackerConfig():void;
    }
    export class SplitterTracker extends Ext.dd.DragTracker {
    }
}
declare module Ext.selection {
    export class CellModel extends Ext.selection.Model {
        enableKeyNav: boolean;
        preventWrap: boolean;
        constructor();
        getCurrentPosition():void;
        setCurrentPosition(position: any):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        checkOnly: boolean;
        injectCheckbox: number|string;
        showHeaderCheckbox: boolean;
        constructor();
        getHeaderConfig():void;
        onHeaderClick(headerCt: any, header: any, e: any):void;
        renderer(value: any, metaData: any, record: any, rowIndex: any, colIndex: any, store: any, view: any):void;
    }
    export class DataViewModel extends Ext.selection.Model {
        enableKeyNav: boolean;
        constructor(cfg: any);
    }
    export class Model extends Ext.util.Observable {
        allowDeselect: boolean;
        mode: string;
        selected: Ext.util.MixedCollection;
        constructor(cfg: any);
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        deselect(records: Ext.data.Model[]|number, suppressEvent?: boolean):void;
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
        isSelected(record: Ext.data.Model|number):boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        select(records: Ext.data.Model[]|number, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectAll(suppressEvent: boolean):void;
        selectRange(startRow: Ext.data.Model|number, endRow: Ext.data.Model|number, keepExisting?: boolean):void;
        setLastFocused(record: Ext.data.Model):void;
        setLocked(locked: boolean):void;
        setSelectionMode(selModel: string):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class RowModel extends Ext.selection.Model {
        enableKeyNav: boolean;
        ignoreRightMouseSelection: boolean;
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
        clickToChange: boolean;
        constrainThumbs: boolean;
        decimalPrecision: number|boolean;
        increment: number;
        keyIncrement: number;
        maxValue: number;
        minValue: number;
        tipText: Function;
        useTips: any;
        values: number[];
        vertical: boolean;
        zeroBasedSnapping: boolean;
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
        constrain: boolean;
        slider: Ext.slider.Multi|Ext.slider.Multi;
        constructor(config?: any);
        disable():void;
        enable():void;
        initEvents():void;
        render():void;
    }
    export class Tip extends Ext.tip.Tip {
        align: string;
        offsets: any[];
        position: string;
        constructor(config: any);
        getText(thumb: Ext.slider.Thumb):string;
    }
}
declare module Ext.state {
    export class CookieProvider extends Ext.state.Provider {
        domain: string;
        expires: Date;
        path: string;
        secure: boolean;
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
        listeners: any;
        prefix: string;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear(name: string):void;
        clearListeners():void;
        clearManagedListeners():void;
        decodeValue(value: string):any;
        enableBubble(eventNames: string|string[]):void;
        encodeValue(value: any):string;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(name: string, defaultValue: any):any;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        set(name: string, value: any):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Stateful extends Ext.Base {
        listeners: any;
        saveDelay: number;
        stateEvents: string[];
        stateId: string;
        stateful: boolean;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        addStateEvents(events: string|string[]):void;
        applyState(state: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getState():any;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: string|string[], state: any):any;
        saveState():void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.tab {
    export class Bar extends Ext.panel.Header {
        maxTabWidth: number;
        minTabWidth: number;
        plain: boolean;
        isTabBar: boolean;
        constructor(config: any);
    }
    export class Panel extends Ext.panel.Panel {
        activeTab: string|number|Ext.Component;
        deferredRender: boolean;
        itemCls: string;
        maxTabWidth: number;
        minTabWidth: number;
        plain: boolean;
        removePanelHeader: boolean;
        tabPosition: string;
        tabBar: any;
        constructor(config: any);
        getActiveTab():Ext.Component;
        getTabBar():Ext.tab.Bar;
        setActiveTab(card: string|number|Ext.Component):Ext.Component;
    }
    export class Tab extends Ext.button.Button {
        activeCls: string;
        closableCls: string;
        active: boolean;
        closable: boolean|boolean;
        isTab: boolean;
        constructor(config: any);
        setCard(card: Ext.Component):void;
        setClosable(closable: boolean):void;
    }
}
declare module Ext.tip {
    export class QuickTip extends Ext.tip.ToolTip {
        interceptTitles: boolean;
        constructor(config: any);
        cancelShow(el: string|HTMLElement|Ext.dom.Element):void;
        register(config: any):void;
        unregister(el: string|HTMLElement|Ext.dom.Element):void;
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
        static unregister(el: string|HTMLElement|Ext.dom.Element):void;
    }
    export class Tip extends Ext.panel.Panel {
        constrainPosition: boolean;
        defaultAlign: string;
        constructor(config: any);
        showBy(el: string|HTMLElement|Ext.dom.Element, position?: string):void;
    }
    export class ToolTip extends Ext.tip.Tip {
        anchor: string;
        anchorOffset: number;
        anchorToTarget: boolean;
        autoHide: boolean;
        delegate: string;
        dismissDelay: number;
        hideDelay: number;
        mouseOffset: number[];
        showDelay: number;
        target: HTMLElement|Ext.dom.Element|string;
        trackMouse: boolean;
        triggerElement: HTMLElement;
        constructor(config: any);
        setTarget(t: string|HTMLElement|Ext.dom.Element):void;
    }
}
declare module Ext.toolbar {
    export class Fill extends Ext.Component {
        isFill: boolean;
        constructor(config: any);
    }
    export class Item extends Ext.Component {
        overflowText: string;
        constructor(config: any);
    }
    export class Paging extends Ext.toolbar.Toolbar {
        displayInfo: boolean;
        inputItemWidth: number;
        prependButtons: boolean;
        store: Ext.data.Store;
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
        text: string;
        constructor(text: any);
        setText(t: string):void;
    }
    export class Toolbar extends Ext.container.Container {
        enableOverflow: boolean;
        menuTriggerCls: string;
        vertical: boolean;
        isToolbar: boolean;
        constructor(config: any);
    }
}
declare module Ext.tree {
    export class Column extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Panel extends Ext.panel.Table {
        displayField: string;
        folderSort: boolean;
        lines: boolean;
        root: any;
        rootVisible: boolean;
        singleExpand: boolean;
        useArrows: boolean;
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
        rootVisible: boolean;
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
        allowContainerDrop: string;
        allowParentInsert: boolean;
        appendOnly: string;
        expandDelay: string;
        constructor(config: any);
    }
}
declare module Ext.tree.plugin {
    export class TreeViewDragDrop extends Ext.AbstractPlugin {
        allowContainerDrop: string;
        allowParentInsert: boolean;
        appendOnly: string;
        ddGroup: string;
        dragGroup: string;
        dropGroup: string;
        enableDrag: boolean;
        enableDrop: boolean;
        expandDelay: string;
        nodeHighlightColor: string;
        nodeHighlightOnDrop: boolean;
        nodeHighlightOnRepair: boolean;
        constructor(config: any);
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
        add(key: string, o: any):any;
        addAll(objs: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.MixedCollection;
        collect(property: string, root?: string, allowBlank?: boolean):any[];
        contains(o: any):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope?: any):void;
        eachKey(fn: Function, scope?: any):void;
        enableBubble(eventNames: string|string[]):void;
        filter(property: Ext.util.Filter[]|string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        filterBy(fn: Function, scope?: any):Ext.util.MixedCollection;
        findBy(fn: Function, scope?: any):any;
        findIndex(property: string, value: string|RegExp, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: Function, scope?: any, start?: number):number;
        fireEvent(eventName: string, ...args: any[]):boolean;
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
        insert(index: number, key: string, o?: any):any;
        last():any;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(o: any):any;
        removeAll(items: any[]):Ext.util.MixedCollection;
        removeAt(index: number):any;
        removeAtKey(key: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        replace(key: string, o: any):any;
        resumeEvents():void;
        sum(property: string, root?: string, start?: number, end?: number):number;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animate extends Ext.Base {
        animate(config: any):any;
        getActiveAnimation():Ext.fx.Anim|boolean;
        hasActiveFx():Ext.fx.Anim|boolean;
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
        static getRule(selector: string|string[], refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):any;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: string|string[], property: string, value: string):boolean;
    }
    export class ClickRepeater extends Ext.util.Observable {
        accelerate: boolean;
        delay: number;
        el: string|HTMLElement|Ext.dom.Element;
        interval: number;
        pressedCls: string;
        preventDefault: boolean;
        stopDefault: boolean;
        constructor(el: string|HTMLElement|Ext.dom.Element, config?: any);
        disable(force: any):void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class ComponentDragger extends Ext.dd.DragTracker {
        constrain: boolean;
        constrainDelegate: boolean;
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
        anyMatch: boolean;
        caseSensitive: boolean;
        exactMatch: boolean;
        filterFn: Function;
        property: string;
        root: string;
        constructor(config?: any);
    }
    export class Floating extends Ext.Base {
        focusOnToFront: boolean;
        shadow: string|boolean;
        shadowOffset: string|boolean;
        alignTo(element: Ext.Component|Ext.dom.Element|HTMLElement|string, position?: string, offsets?: number[]):Ext.Component;
        center():Ext.Component;
        doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
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
        static currency(value: number|string, sign: string, decimals: number, end: boolean):string;
        static date(value: string|Date, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue: string):string;
        static ellipsis(value: string, length: number, word: boolean):string;
        static escapeRegex(str: string):string;
        static fileSize(size: number|string):string;
        static format(string: string, value1: string, value2: string):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static leftPad(string: string, size: number, character?: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(The: string):string;
        static number(v: number, format: string):string;
        static numberRenderer(format: string):Function;
        static parseBox(v: number|string):any;
        static plural(value: number, singular: string, plural?: string):void;
        static round(value: number|string, precision: number):number;
        static stripScripts(value: any):string;
        static stripTags(value: any):string;
        static substr(value: string, start: number, length: number):string;
        static trim(string: string):string;
        static undef(value: any):any;
        static uppercase(value: string):string;
        static usMoney(value: number|string):string;
    }
    export class Grouper extends Ext.util.Sorter {
        constructor(config: any);
        getGroupString(instance: Ext.data.Model):string;
    }
    export class HashMap extends Ext.Base {
        keyFn: Function;
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(key: string, o: any):any;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clear(initial: any):Ext.util.HashMap;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope: any):Ext.util.HashMap;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        get(key: string):any;
        getCount():number;
        getKey(o: any):string;
        getKeys():any[];
        getValues():any[];
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        remove(o: any):boolean;
        removeAtKey(key: string):boolean;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static back():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static forward():void;
        static getInitialConfig(name: any):void;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        binding: any;
        eventName: string;
        processEvent: Function;
        processEventScope: any;
        target: Ext.Component|Ext.dom.Element|HTMLElement|string;
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
        defaultEventAction: string;
        disabled: boolean;
        eventName: string;
        forceKeyDown: boolean;
        processEvent: Function;
        processEventScope: any;
        target: Ext.Component|Ext.dom.Element|HTMLElement|string;
        constructor(config: any);
        destroy(removeEl: boolean):void;
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class LruCache extends Ext.util.HashMap {
        maxSize: number;
        constructor(config?: any);
        prune():void;
    }
    export class Memento extends Ext.Base {
        target: any;
        constructor(target: any, props: string|string[]);
        capture(props: string|string[], target: any):void;
        remove(props: string|string[]):void;
        restore(props: string|string[], clear: boolean, target: any):void;
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
        sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class Observable extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):void;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, opt?: any):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
    export class Renderable extends Ext.Base {
        afterRender():void;
        doAutoRender():void;
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
    }
    export class Sortable extends Ext.Base {
        defaultSortDirection: string;
        isSortable: boolean;
        sortRoot: string;
        sorters: Ext.util.MixedCollection;
        generateComparator():void;
        initSortable():void;
        sort(sorters: string|Ext.util.Sorter[], direction: string):Ext.util.Sorter[];
    }
    export class Sorter extends Ext.Base {
        direction: string;
        property: string;
        root: string;
        sorterFn: Function;
        transform: Function;
        constructor(config: any);
        setDirection(direction: string):void;
        toggle():void;
        updateSortFunction(fn?: Function):void;
    }
    export class TaskRunner extends Ext.Base {
        interval: number;
        constructor(interval?: any);
        destroy():void;
        newTask(config: any):void;
        start(task: any):any;
        stop(task: any):any;
        stopAll():void;
    }
    export class TextMetrics extends Ext.Base {
        constructor(bindTo: string|HTMLElement|Ext.dom.Element, fixedWidth?: number);
        bind(el: string|HTMLElement|Ext.dom.Element):void;
        destroy():void;
        getHeight(text: string):number;
        getSize(text: string):any;
        getWidth(text: string):number;
        setFixedWidth(width: number):void;
        static destroy():void;
        static measure(el: string|HTMLElement, text: string, fixedWidth?: number):any;
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
        blockRefresh: boolean;
        deferEmptyText: boolean;
        deferInitialRefresh: boolean;
        disableSelection: boolean;
        itemCls: string;
        itemSelector: string;
        itemTpl: string|string[]|Ext.XTemplate;
        loadMask: any;
        loadingCls: string;
        loadingHeight: number;
        multiSelect: boolean;
        overItemCls: string;
        preserveScrollOnRefresh: boolean;
        selectedItemCls: string;
        simpleSelect: boolean;
        singleSelect: boolean;
        store: Ext.data.Store;
        trackOver: boolean;
        constructor(config: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        collectData(records: Ext.data.Model[], startIndex: number):any[];
        deselect(records: Ext.data.Model[]|number, suppressEvent: boolean):void;
        findItemByChild(node: HTMLElement):HTMLElement;
        findTargetByEvent(e: Ext.EventObject):void;
        getNode(nodeInfo: HTMLElement|string|number|Ext.data.Model):HTMLElement;
        getNodes(start?: number, end?: number):HTMLElement[];
        getRecord(node: Ext.dom.Element|HTMLElement):Ext.data.Model;
        getRecords(nodes: HTMLElement[]):Ext.data.Model[];
        getSelectedNodes():HTMLElement[];
        getSelectedRecords():Ext.data.Model[];
        getSelectionCount():number;
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.Store;
        getStoreListeners():any;
        indexOf(nodeInfo: HTMLElement|string|number|Ext.data.Model):number;
        isSelected(node: HTMLElement|number|Ext.data.Model):boolean;
        onBindStore(store: any):void;
        onUnbindStore(store: any):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(index: number):void;
        select(records: Ext.data.Model[]|number, keepExisting: boolean, suppressEvent: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        displayField: string;
        pageSize: number;
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        getInnerTpl(displayField: string):string;
    }
    export class BoundListKeyNav extends Ext.util.KeyNav {
        boundList: Ext.view.BoundList;
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
        enableTextSelection: boolean;
        firstCls: string;
        lastCls: string;
        markDirty: boolean;
        stripeRows: boolean;
        constructor(config: any);
        addRowCls(rowInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
        focusRow(rowIdx: HTMLElement|string|number|Ext.data.Model):void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getRowClass(record: Ext.data.Model, index: number, rowParams: any, store: Ext.data.Store):string;
        getTableChunker():void;
        removeRowCls(rowInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
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
        prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: boolean|number, value?: string):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        wait(msg: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Window extends Ext.panel.Panel {
        animateTarget: string|Ext.dom.Element;
        constrain: boolean;
        constrainHeader: boolean;
        constrainTo: Ext.util.Region|Ext.dom.Element;
        defaultFocus: string|number|Ext.Component;
        expandOnShow: boolean;
        maximizable: boolean;
        maximized: boolean;
        minimizable: boolean;
        modal: boolean;
        plain: boolean;
        x: number;
        y: number;
        isWindow: boolean;
        constructor(config: any);
        getDefaultFocus():void;
        maximize():Ext.window.Window;
        minimize():Ext.window.Window;
        restore():Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}