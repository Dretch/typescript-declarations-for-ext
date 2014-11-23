// Ext type declarations generated on Sun Nov 23 2014 16:37:04 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static BLANK_IMAGE_URL: string;
    static SSL_SECURE_URL: string;
    static USE_NATIVE_JSON: boolean;
    static chromeVersion: number;
    static emptyFn: Function;
    static emptyString: Object;
    static enableFx: boolean;
    static enableGarbageCollector: boolean;
    static enableListenerCollection: boolean;
    static enableNestedListenerRemoval: boolean;
    static enumerables: string[];
    static firefoxVersion: number;
    static globalEvents: Ext.util.Observable;
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
    static isIE10: boolean;
    static isIE10m: boolean;
    static isIE10p: boolean;
    static isIE6: boolean;
    static isIE7: boolean;
    static isIE7m: boolean;
    static isIE7p: boolean;
    static isIE8: boolean;
    static isIE8m: boolean;
    static isIE8p: boolean;
    static isIE9: boolean;
    static isIE9m: boolean;
    static isIE9p: boolean;
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
    static safariVersion: number;
    static useShims: boolean;
    static webKitVersion: number;
    static addBehaviors(obj: Object):void;
    static addNamespaces(namespace: any):void;
    static application(config: any):void;
    static apply(object: Object, config: Object, defaults?: Object):Object;
    static applyIf(object: Object, config: Object):Object;
    static batchLayouts(fn: Function, scope?: Object):void;
    static bind(fn: Function, scope?: Object, args?: any[], appendArgs?: any):Function;
    static callback(callback: Function, scope?: Object, args?: any[], delay?: number):Object;
    static clean(array: any[]):any[];
    static clone(item: Object):Object;
    static coerce(from: any, to: any):Object;
    static copyTo(dest: Object, source: Object, names: any, usePrototypeKeys?: boolean):Object;
    static create(name?: string, ...args: Object[]):Object;
    static createByAlias(alias: string, ...args: Object[]):Object;
    static createWidget():void;
    static decode(json: string, safe?: boolean):Object;
    static defer(fn: Function, millis: number, scope?: Object, args?: any[], appendArgs?: any):number;
    static define(className: string, data: Object, createdFn: Function):Ext.Base;
    static deprecate(packageName: string, since: string, closure: Function, scope: Object):void;
    static destroy(...args: any[]):void;
    static destroyMembers(o: Object, ...args: string[]):void;
    static each(iterable: any, fn: Function, scope?: Object, reverse?: boolean):boolean;
    static encode(o: Object):string;
    static escapeRe(str: string):string;
    static exclude(excludes: any[]):Object;
    static extend(superclass: Function, overrides: Object):Function;
    static flatten(array: any[]):any[];
    static fly(dom: any, named?: string):Ext.dom.Element.Fly;
    static get(el: any):Ext.dom.Element;
    static getBody():Ext.dom.Element;
    static getClass(object: Object):Ext.Class;
    static getClassName(object: any):string;
    static getCmp(id: string):Object;
    static getDoc():Ext.dom.Element;
    static getDom(el: any):Object;
    static getHead():Ext.dom.Element;
    static getNamespace(className: string):string;
    static getOrientation():string;
    static getScrollBarWidth(force?: boolean):number;
    static getScrollbarSize(force?: boolean):Object;
    static getStore(store: any):Ext.data.Store;
    static getVersion(packageName?: string):Ext.Version;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(el?: any, prefix?: string):string;
    static identityFn(o: Object):void;
    static invoke(arr: any, methodName: string, ...args: Object[]):any[];
    static isArray(target: Object):boolean;
    static isBoolean(value: Object):boolean;
    static isDate(object: Object):boolean;
    static isDefined(value: Object):boolean;
    static isElement(value: Object):boolean;
    static isEmpty(value: Object, allowEmptyString?: boolean):boolean;
    static isFunction(value: Object):boolean;
    static isIterable(value: Object):boolean;
    static isNumber(value: Object):boolean;
    static isNumeric(value: Object):boolean;
    static isObject(value: Object):boolean;
    static isPrimitive(value: Object):boolean;
    static isString(value: Object):boolean;
    static isTextNode(value: Object):boolean;
    static iterate(object: any, fn: Function, scope?: Object):void;
    static log(options?: any, ...message: string[]):void;
    static max(array: any, comparisonFn?: Function):Object;
    static mean(array: any[]):number;
    static merge(destination: Object, ...object: Object[]):Object;
    static min(array: any, comparisonFn?: Function):Object;
    static namespace(...namespaces: string[]):Object;
    static ns(...namespaces: string[]):Object;
    static num(value: Object, defaultValue: number):number;
    static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
    static onDocumentReady(fn: Function, scope?: Object, options?: Object):void;
    static onReady(fn: Function, scope: Object, options: Object):void;
    static override(target: Object, overrides: Object):void;
    static partition(arr: any, truth?: Function):any[];
    static pass(fn: Function, args: any[], scope?: Object):Function;
    static pluck(array: any, propertyName: string):any[];
    static preg(ptype: string, cls: Function):void;
    static query(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
    static regModel(name: string, config: Object):Ext.data.Model;
    static regStore(id: string, config: Object):void;
    static removeNode(node: HTMLElement):void;
    static require(expressions: any, fn?: Function, scope?: Object, excludes?: any):void;
    static resumeLayouts(flush: Object):void;
    static select(selector: string, unique?: boolean):Ext.dom.CompositeElement;
    static setGlyphFontFamily(fontFamily: string):void;
    static setVersion(packageName: string, version: any):Ext;
    static sum(array: any[]):number;
    static suspendLayouts():void;
    static syncRequire(expressions: any, fn?: Function, scope?: Object, excludes?: any):void;
    static toArray(iterable: Object, start?: number, end?: number):any[];
    static toSentence(items: string[], connector: string):string;
    static type(value: Object):string;
    static typeOf(value: Object):string;
    static un(eventName: string, fn: Function, scope?: Object):void;
    static unique(array: any[]):any[];
    static urlAppend(url: string, string: string):string;
    static urlDecode(queryString: string, recursive?: boolean):Object;
    static urlEncode(object: Object, recursive?: boolean):string;
    static value(value: Object, defaultValue: Object, allowBlank?: boolean):Object;
    static valueFrom(value: Object, defaultValue: Object, allowBlank?: boolean):Object;
    static widget(name?: string, config?: Object):Object;
    static zip(...arr: any[]):any[];
}
declare module Ext {
    export class AbstractComponent extends Ext.Base {
        _isLayoutRoot: boolean;
        contentPaddingProperty: string;
        draggable: boolean;
        frameSize: Object;
        hasListeners: Object;
        isComponent: boolean;
        isObservable: boolean;
        maskOnDisable: boolean;
        ownerCt: Ext.container.Container;
        rendered: boolean;
        constructor(config?: Object);
        addChildEls():void;
        addClass(cls: any):Ext.Component;
        addCls(cls: any):Ext.Component;
        addClsWithUI(classes: any, skip: Object):void;
        addEvents(...eventNames: any[]):void;
        addListener(element: Object, listeners: Object, scope: Object, options: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        addPropertyToState(state: Object, propName: string, value?: string):boolean;
        addStateEvents(events: any):void;
        addUIClsToElement(ui: string):void;
        afterComponentLayout(width: number, height: number, oldWidth: any, oldHeight: any):void;
        afterRender():void;
        afterSetPosition(x: number, y: number):void;
        alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        animate(animObj: Object):Object;
        applyState(state: Object):void;
        beforeBlur(e: Ext.EventObject):void;
        beforeComponentLayout(adjWidth: number, adjHeight: number):void;
        beforeDestroy():void;
        beforeFocus(e: Ext.EventObject):void;
        beforeLayout():void;
        calculateConstrainedPosition(constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]):number[];
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        disable(silent?: boolean):void;
        doAutoRender():void;
        doComponentLayout():Ext.container.Container;
        enable(silent?: boolean):void;
        enableBubble(eventNames: any):void;
        ensureAttachedToBody(runLayout?: boolean):void;
        findPlugin(ptype: string):Ext.AbstractPlugin;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        forceComponentLayout():void;
        getActiveAnimation():any;
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: Object):number[];
        getBox(contentBox?: boolean, local?: boolean):Object;
        getBubbleTarget():Ext.container.Container;
        getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        getEl():Ext.dom.Element;
        getHeight():number;
        getId():string;
        getInsertPosition(position: any):HTMLElement;
        getItemId():string;
        getLoader():Ext.ComponentLoader;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getOffsetsTo(offsetsTo: any):number[];
        getPlugin(pluginId: string):Ext.AbstractPlugin;
        getRegion():Ext.util.Region;
        getSize():Object;
        getSizeModel(ownerCtSizeModel: Object):Object;
        getState():Object;
        getViewRegion():Ext.util.Region;
        getWidth():number;
        getX():number;
        getXTypes():string;
        getXY():number[];
        getY():number;
        hasActiveFx():any;
        hasCls(className: string):boolean;
        hasListener(eventName: string):boolean;
        hasUICls(cls: string):void;
        initEvents():void;
        initRenderData():Object;
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
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        move(direction: string, distance: number, animate?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        nextNode(selector?: string):Ext.Component;
        nextSibling(selector?: string):Ext.Component;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        onAdded(container: Ext.container.Container, pos: number):void;
        onDisable():void;
        onEnable():void;
        onPosition(x: number, y: number):void;
        onRemoved(destroying: boolean):void;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        onResize(width: Object, height: Object, oldWidth: Object, oldHeight: Object):void;
        postBlur(e: Ext.EventObject):void;
        previousNode(selector?: string):Ext.Component;
        previousSibling(selector?: string):Ext.Component;
        registerFloatingItem(cmp: Object):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeAnchor():Ext.util.Positionable;
        removeChildEls(testFn: Function):void;
        removeCls(cls: any):Ext.Component;
        removeClsWithUI(cls: any):void;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        removeUIClsFromElement(ui: string):void;
        render(container?: any, position?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        savePropToState(propName: string, state: Object, stateName?: string):boolean;
        savePropsToState(propNames: any, state: Object):Object;
        saveState():void;
        sequenceFx():Object;
        setBorder(border: any):void;
        setBox(box: Object, animate?: any):Ext.util.Positionable;
        setDisabled(disabled: boolean):void;
        setDocked(dock: Object, layoutParent?: boolean):Ext.Component;
        setHeight(height: number):Ext.Component;
        setLocalX(x: Object):Ext.util.Positionable;
        setLocalXY(x: Object, y: Object):Ext.util.Positionable;
        setLocalY(y: Object):Ext.util.Positionable;
        setMargin(margin: any):void;
        setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        setSize(width: any, height: any):Ext.Component;
        setUI(ui: string):void;
        setVisible(visible: boolean):Ext.Component;
        setWidth(width: number):Ext.Component;
        setX(x: Object, animate: Object):Ext.util.Positionable;
        setXY(xy: Object, animate: Object):Ext.util.Positionable;
        setY(y: Object, animate: Object):Ext.util.Positionable;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():Object;
        translatePoints(x: any, y?: number):Object;
        un(eventName: string, fn: Function, scope?: Object):void;
        up(selector?: any, limit?: any):Ext.container.Container;
        update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        updateLayout(options?: Object):void;
        static cancelLayout(comp: Ext.Component):void;
        static flushLayouts():void;
        static resumeLayouts(flush?: boolean):void;
        static suspendLayouts():void;
        static updateLayout(comp: Ext.Component, defer?: boolean):void;
    }
    export class AbstractManager extends Ext.Base {
        all: Ext.util.HashMap;
        constructor(config: Object);
        create(config: Object, defaultType: string):Object;
        each(fn: Function, scope: Object):void;
        get(id: string):Object;
        getCount():number;
        isRegistered(type: string):boolean;
        onAvailable(id: string, fn: Function, scope: Object):void;
        register(item: Object):void;
        registerType(type: string, cls: Function):void;
        unregister(item: Object):void;
    }
    export class AbstractPlugin extends Ext.Base {
        isPlugin: boolean;
        constructor(config?: Object);
        clonePlugin(overrideCfg?: Object):void;
        disable():void;
        enable():void;
        getCmp():Ext.Component;
        init(client: Ext.Component):void;
        setCmp(cmp: Ext.Component):void;
    }
    export class Action extends Ext.Base {
        constructor(config: Object);
        disable():void;
        each(fn: Function, scope: Object):void;
        enable():void;
        execute(...args: Object[]):void;
        getIconCls():void;
        getText():void;
        hide():void;
        isDisabled():void;
        isHidden():void;
        setDisabled(disabled: boolean):void;
        setHandler(fn: Function, scope: Object):void;
        setHidden(hidden: boolean):void;
        setIconCls(cls: string):void;
        setText(text: string):void;
        show():void;
    }
    export class Ajax {
        static autoAbort: boolean;
        static defaultHeaders: Object;
        static disableCaching: boolean;
        static extraParams: Object;
        static hasListeners: Object;
        static isObservable: boolean;
        static method: string;
        static self: Ext.Class;
        static timeout: number;
        static url: string;
        static abort(request?: Object):void;
        static abortAll():void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static initConfig(config: Object):Ext.Base;
        static isLoading(request?: Object):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static parseStatus(status: number):Object;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static request(options: Object):Object;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static setOptions(options: Object, scope: Object):Object;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
        static upload(form: any, url: string, params: string, options: Object):void;
    }
    export class Array {
        static clean(array: any[]):any[];
        static clone(array: any[]):any[];
        static contains(array: any[], item: Object):boolean;
        static difference(arrayA: any[], arrayB: any[]):any[];
        static each(iterable: any, fn: Function, scope?: Object, reverse?: boolean):boolean;
        static equals(array1: any[], array2: any[]):boolean;
        static erase(array: any[], index: number, removeCount: number):any[];
        static every(array: any[], fn: Function, scope: Object):boolean;
        static filter(array: any[], fn: Function, scope: Object):any[];
        static findBy(array: any[], fn: Function, scope?: Object):Object;
        static flatten(array: any[]):any[];
        static forEach(array: any[], fn: Function, scope?: Object):void;
        static from(value: Object, newReference?: boolean):any[];
        static include(array: any[], item: Object):void;
        static indexOf(array: any[], item: Object, from?: number):number;
        static insert(array: any[], index: number, items: any[]):any[];
        static intersect(array1: any[], array2: any[], etc: any[]):any[];
        static map(array: any[], fn: Function, scope?: Object):any[];
        static max(array: any, comparisonFn?: Function):Object;
        static mean(array: any[]):number;
        static merge(array1: any[], array2: any[], etc: any[]):any[];
        static min(array: any, comparisonFn?: Function):Object;
        static pluck(array: any, propertyName: string):any[];
        static push(target: any[], ...elements: Object[]):any[];
        static remove(array: any[], item: Object):any[];
        static replace(array: any[], index: number, removeCount: number, insert?: any[]):any[];
        static slice(array: any[], begin: number, end: number):any[];
        static some(array: any[], fn: Function, scope: Object):boolean;
        static sort(array: any[], sortFn?: Function):any[];
        static splice(array: any[], index: number, removeCount: number, ...elements: Object[]):any[];
        static sum(array: any[]):number;
        static toArray(iterable: Object, start?: number, end?: number):any[];
        static toMap(array: any[], getKey?: any, scope?: Object):Object;
        static toValueMap(array: any[], getKey?: any, scope?: Object):Object;
        static union(array1: any[], array2: any[], etc: any[]):any[];
        static unique(array: any[]):any[];
    }
    export class Base {
        self: Ext.Class;
        callOverridden(args: any):Object;
        callParent(args: any):Object;
        callSuper(args: any):Object;
        getInitialConfig(name?: string):any;
        initConfig(config: Object):Ext.Base;
        statics():Ext.Class;
        static addMembers(members: Object):void;
        static addStatics(members: Object):Ext.Base;
        static createAlias(alias: any, origin: any):void;
        static getName():string;
        static implement():void;
        static override(members: Object):Ext.Base;
    }
    export class Class {
        constructor(data: Object, onCreated: Function);
    }
    export class ClassManager {
        static addNameAliasMappings(aliases: Object):Ext.ClassManager;
        static addNameAlternateMappings(alternates: Object):Ext.ClassManager;
        static create(className: Object, data: Object, createdFn: Object):void;
        static get(name: string):Ext.Class;
        static getAliasesByName(name: string):any[];
        static getByAlias(alias: string):Ext.Class;
        static getClass(object: Object):Ext.Class;
        static getDisplayName(object: Object):string;
        static getName(object: any):string;
        static getNameByAlias(alias: string):string;
        static getNameByAlternate(alternate: string):string;
        static getNamesByExpression(expression: string):string[];
        static instantiateByAlias(alias: string, ...args: Object[]):Object;
        static isCreated(className: string):boolean;
        static set(name: string, value: Object):Ext.ClassManager;
        static setAlias(cls: any, alias: string):Ext.ClassManager;
        static setNamespace(name: string, value: Object):void;
    }
    export class Component extends Ext.AbstractComponent {
        floatParent: Ext.container.Container;
        scrollFlags: Object;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(config: any);
        afterHide(callback?: Function, scope?: Object):void;
        afterShow(animateTarget?: any, callback?: Function, scope?: Object):void;
        beforeShow():void;
        bubble(fn: Function, scope?: Object, args?: any[]):Ext.Component;
        cancelFocus():void;
        center():Ext.Component;
        cloneConfig(overrides: Object):Ext.Component;
        doConstrain(constrainTo?: any):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: any):Ext.container.Container;
        focus(selectText?: boolean, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        getPosition(local?: boolean):number[];
        getXType():string;
        hide(animateTarget?: any, callback?: Function, scope?: Object):Ext.Component;
        onShowComplete(callback?: Function, scope?: Object):void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setBorderRegion(region: string):string;
        setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        setPosition(x: any, y?: number, animate?: any):Ext.Component;
        setRegionWeight(weight: number):number;
        showAt(x: any, y?: number, animate?: any):Ext.Component;
        showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
        updateBox(box: Object):Ext.Component;
    }
    export class ComponentLoader extends Ext.ElementLoader {
        constructor(config: Object);
    }
    export class ComponentManager {
        static all: Ext.util.HashMap;
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static create(config: Object, defaultType?: string):Ext.Component;
        static each(fn: Function, scope: Object):void;
        static get(id: string):Object;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: Object):void;
        static register(item: Object):void;
        static registerType(type: Object, cls: Object):void;
        static statics():Ext.Class;
        static unregister(item: Object):void;
    }
    export class ComponentQuery {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static is(component: Ext.Component, selector: string):boolean;
        static query(selector: string, root?: Ext.container.Container):Ext.Component[];
        static statics():Ext.Class;
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
        static defaults: Object;
        static formatCodes: Object;
        static formatFunctions: Object;
        static monthNames: string[];
        static monthNumbers: Object;
        static parseFunctions: Object;
        static useStrict: boolean;
        static add(date: Date, interval: string, value: number):Date;
        static between(date: Date, start: Date, end: Date):boolean;
        static clearTime(date: Date, clone?: boolean):Date;
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
        static subtract(date: Date, interval: string, value: number):Date;
        static unescapeFormat(format: string):string;
    }
    export class DomHelper {
        static self: Ext.Class;
        static useDom: boolean;
        static append(el: any, o: any, returnElement?: boolean):any;
        static applyStyles(el: any, styles: any):void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static createDom(o: any):HTMLElement;
        static createHtml(spec: Object):string;
        static createTemplate(o: Object):Ext.Template;
        static generateStyles(styles: Object, buffer?: string[]):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static insertAfter(el: any, o: Object, returnElement?: boolean):any;
        static insertBefore(el: any, o: any, returnElement?: boolean):any;
        static insertFirst(el: any, o: any, returnElement?: boolean):any;
        static insertHtml(where: string, el: any, html: string):HTMLElement;
        static markup(spec: Object):string;
        static overwrite(el: any, o: any, returnElement?: boolean):any;
        static statics():Ext.Class;
    }
    export class Editor extends Ext.container.Container {
        constructor(config: any);
        cancelEdit(remainVisible?: boolean):void;
        completeEdit(remainVisible?: boolean):void;
        getValue():Object;
        realign(autoSize?: boolean):void;
        setValue(value: Object):void;
        startEdit(el: any, value?: string):void;
    }
    export class ElementLoader extends Ext.Base {
        hasListeners: Object;
        isLoader: boolean;
        isObservable: boolean;
        constructor(config: Object);
        abort():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        load(options: Object):void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setTarget(target: any):void;
        startAutoRefresh(interval: number, options?: Object):void;
        stopAutoRefresh():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
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
        static idleEvent: Object;
        static addListener(el: any, eventName: string, handler: any, scope?: Object, options?: Object):void;
        static getId(element: any):string;
        static getKeyEvent():string;
        static getPageX(event: Object):number;
        static getPageXY(event: Object):number[];
        static getPageY(event: Object):number;
        static getRelatedTarget(event: Object):HTMLElement;
        static getTarget(event: Object):HTMLElement;
        static on(el: any, eventName: string, handler: any, scope?: Object, options?: Object):void;
        static onDocumentReady(fn: Function, scope?: Object, options?: Object):void;
        static onWindowResize(fn: Function, scope: Object, options?: boolean):void;
        static onWindowUnload(fn: Function, scope: Object, options: boolean):void;
        static pollScroll():void;
        static preventDefault(event: Event):void;
        static purgeElement(el: any, eventName?: string):void;
        static removeAll(el: any):void;
        static removeListener(el: any, eventName: string, fn: Function, scope: Object):void;
        static removeResizeListener(fn: Function, scope: Object):void;
        static removeUnloadListener(fn: Function, scope: Object):void;
        static stopEvent(event: Event):void;
        static stopPropagation(event: Event):void;
        static un(el: any, eventName: string, fn: Function, scope: Object):void;
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
        static getWheelDeltas():Object;
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
        static hasListeners: Object;
        static isObservable: boolean;
        static self: Ext.Class;
        static whitelist: string[];
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addXTypeToWhitelist(xtype: any):void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clearListeners():void;
        static clearManagedListeners():void;
        static disable():void;
        static enable(options: any):void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static initConfig(config: Object):Ext.Base;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeXTypeFromWhitelist(xtype: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class Function {
        static alias(object: any, methodName: string):Function;
        static bind(fn: Function, scope?: Object, args?: any[], appendArgs?: any):Function;
        static clone(method: Function):Function;
        static createBuffered(fn: Function, buffer: number, scope?: Object, args?: any[]):Function;
        static createDelayed(fn: Function, delay: number, scope?: Object, args?: any[], appendArgs?: any):Function;
        static createInterceptor(origFn: Function, newFn: Function, scope?: Object, returnValue?: Object):Function;
        static createSequence(originalFn: Function, newFn: Function, scope?: Object):Function;
        static createThrottled(fn: Function, interval: number, scope?: Object):Function;
        static defer(fn: Function, millis: number, scope?: Object, args?: any[], appendArgs?: any):number;
        static flexSetter(setter: Function):Function;
        static interceptAfter(object: Object, methodName: string, fn: Function, scope?: Object):Function;
        static interceptBefore(object: Object, methodName: string, fn: Function, scope?: Object):Function;
        static pass(fn: Function, args: any[], scope?: Object):Function;
    }
    export class Img extends Ext.Component {
        constructor(config: any);
        setSrc(src: string):void;
    }
    export class JSON {
        static decode(json: string, safe?: boolean):Object;
        static encode(o: Object):string;
        static encodeDate(d: Date):string;
        static encodeString(s: string):string;
        static encodeValue(o: Object):string;
    }
    export class LoadMask extends Ext.Component {
        constructor(config?: Object);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        center():Ext.Component;
        doConstrain(constrainTo?: any):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Object):Object;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Loader {
        static history: any[];
        static addClassPathMappings(paths: Object):Ext.Loader;
        static exclude(excludes: any[]):Object;
        static getConfig(name: string):Object;
        static getPath(className: string):string;
        static loadScript(options: any):void;
        static onReady(fn: Function, scope: Object, withDomReady: boolean):void;
        static require(expressions: any, fn?: Function, scope?: Object, excludes?: any):void;
        static setConfig(config: Object):Ext.Loader;
        static setPath(name: any, path?: string):Ext.Loader;
        static syncRequire(expressions: any, fn?: Function, scope?: Object, excludes?: any):void;
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
        static _isLayoutRoot: boolean;
        static body: Ext.dom.Element;
        static buttonText: Object;
        static contentPaddingProperty: string;
        static dd: Ext.util.ComponentDragger;
        static defaultTextHeight: number;
        static draggable: boolean;
        static floatParent: Ext.container.Container;
        static frameSize: Object;
        static hasListeners: Object;
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
        static scrollFlags: Object;
        static self: Ext.Class;
        static zIndexManager: Ext.ZIndexManager;
        static zIndexParent: Ext.container.Container;
        static add(...component: any[]):any;
        static addBodyCls(cls: string):Ext.panel.Panel;
        static addChildEls():void;
        static addClass(cls: any):Ext.Component;
        static addCls(cls: any):Ext.Component;
        static addClsWithUI(classes: any, skip: Object):void;
        static addDocked(component: any, pos?: number):Ext.Component[];
        static addEvents(...eventNames: any[]):void;
        static addListener(element: Object, listeners: Object, scope: Object, options: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addPropertyToState(state: Object, propName: string, value?: string):boolean;
        static addStateEvents(events: any):void;
        static addTool(tools: any):void;
        static addUIClsToElement(cls: Object):void;
        static afterCollapse():void;
        static afterComponentLayout():void;
        static afterExpand():void;
        static afterLayout(layout: Ext.layout.container.Container):void;
        static afterSetPosition(ax: Object, ay: Object):void;
        static afterShow(animateTarget?: any, callback?: Function, scope?: Object):void;
        static alert(title: string, msg: string, fn?: Function, scope?: Object):Ext.window.MessageBox;
        static alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        static anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        static animate(animObj: Object):Object;
        static applyState(state: Object):void;
        static beforeBlur(e: Ext.EventObject):void;
        static beforeComponentLayout(adjWidth: number, adjHeight: number):void;
        static beforeFocus(e: Ext.EventObject):void;
        static beforeLayout():void;
        static beforeShow():void;
        static bubble(fn: Function, scope?: Object, args?: any[]):Ext.Component;
        static calculateConstrainedPosition(constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]):number[];
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static cancelFocus():void;
        static cascade(fn: Function, scope?: Object, args?: any[]):Ext.container.Container;
        static center():Ext.Component;
        static child(selector?: any):Object;
        static clearListeners():void;
        static clearManagedListeners():void;
        static cloneConfig(overrides: Object):Ext.Component;
        static close():void;
        static collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        static confirm(title: string, msg: string, fn?: Function, scope?: Object):Ext.window.MessageBox;
        static contains(comp: Ext.Component, deep?: boolean):boolean;
        static convertCollapseDir(collapseDir: Object):void;
        static disable():Ext.container.AbstractContainer;
        static doAutoRender():void;
        static doComponentLayout():Ext.container.Container;
        static doConstrain(constrainTo?: any):void;
        static doLayout():Ext.container.Container;
        static down(selector?: any):Object;
        static enableBubble(eventNames: any):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate?: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: any):Ext.container.Container;
        static findPlugin(ptype: string):Ext.AbstractPlugin;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static focus(selectText?: boolean, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        static forceComponentLayout():void;
        static getActiveAnimation():any;
        static getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        static getAnchorXY(anchor?: string, local?: boolean, size?: Object):number[];
        static getBox(contentBox?: boolean, local?: boolean):Object;
        static getBubbleTarget():void;
        static getChildByElement(el: any, deep: boolean):Ext.Component;
        static getCollapsed():any;
        static getComponent(comp: any):Ext.Component;
        static getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        static getDefaultFocus():void;
        static getDockedComponent(comp: any):Ext.Component;
        static getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        static getEl():Ext.dom.Element;
        static getHeader():void;
        static getHeight():number;
        static getId():string;
        static getInitialConfig(name?: string):any;
        static getInsertPosition(position: any):HTMLElement;
        static getItemId():string;
        static getLayout():Ext.layout.container.Container;
        static getLoader():Ext.ComponentLoader;
        static getLocalX():number;
        static getLocalXY():number[];
        static getLocalY():number;
        static getOffsetsTo(offsetsTo: any):number[];
        static getPlugin(pluginId: string):Ext.AbstractPlugin;
        static getPosition(local?: boolean):number[];
        static getRefItems(deep: Object):void;
        static getRegion():Ext.util.Region;
        static getSize():Object;
        static getSizeModel(ownerCtSizeModel: Object):Object;
        static getViewRegion():Ext.util.Region;
        static getWidth():number;
        static getX():number;
        static getXType():string;
        static getXTypes():string;
        static getXY():number[];
        static getY():number;
        static hasActiveFx():any;
        static hasCls(className: string):boolean;
        static hasListener(eventName: string):boolean;
        static hasUICls(cls: string):void;
        static hide():Ext.Component;
        static initConfig(config: Object):Ext.Base;
        static initEvents():void;
        static insert(index: number, component: any):Ext.Component;
        static insertDocked(pos: number, component: any):void;
        static is(selector: string):boolean;
        static isAncestor(possibleDescendant: Ext.Component):void;
        static isDescendantOf(container: Ext.container.Container):boolean;
        static isDisabled():boolean;
        static isDraggable():boolean;
        static isDroppable():boolean;
        static isFloating():boolean;
        static isHidden():boolean;
        static isLayoutRoot():void;
        static isLayoutSuspended():boolean;
        static isVisible(deep: Object):boolean;
        static isXType(xtype: string, shallow?: boolean):boolean;
        static maximize(animate: boolean):Ext.window.Window;
        static minimize():Ext.window.Window;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static move(fromIdx: any, toIdx: number):Ext.Component;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static onAdd(component: Ext.Component, position: number):void;
        static onAdded():void;
        static onBeforeAdd(item: Ext.Component):void;
        static onDestroy():void;
        static onDisable():void;
        static onDockedAdd(component: Ext.Component):void;
        static onDockedRemove(component: Ext.Component):void;
        static onEnable():void;
        static onHide():void;
        static onPosition():void;
        static onRemove(component: Ext.Component, autoDestroy: boolean):void;
        static onRemoved(destroying: Object):void;
        static onResize():void;
        static onShow():void;
        static onShowComplete(callback?: Function, scope?: Object):void;
        static postBlur(e: Ext.EventObject):void;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, msg: string, fn?: Function, scope?: Object, multiline?: any, value?: string):Ext.window.MessageBox;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: Object):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: Object):void;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static remove(component: any, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeAnchor():Ext.util.Positionable;
        static removeBodyCls(cls: string):Ext.panel.Panel;
        static removeChildEls(testFn: Function):void;
        static removeCls(cls: any):Ext.Component;
        static removeClsWithUI(cls: any):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeUIClsFromElement(cls: Object):void;
        static render(container?: any, position?: any):void;
        static restore(animate: Object):Ext.window.Window;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static savePropToState(propName: string, state: Object, stateName?: string):boolean;
        static savePropsToState(propNames: any, state: Object):Object;
        static saveState():void;
        static scrollBy(deltaX: any, deltaY: any, animate: any):void;
        static sequenceFx():Object;
        static setActive(active?: boolean, newActive?: Ext.Component):void;
        static setAutoScroll(scroll: boolean):Ext.Component;
        static setBodyStyle(style: any, value: string):Ext.panel.Panel;
        static setBorder(border: Object, targetEl: Object):void;
        static setBorderRegion(region: string):string;
        static setBox(box: Object, animate?: any):Ext.util.Positionable;
        static setDisabled(disabled: boolean):void;
        static setDocked(dock: Object, layoutParent?: boolean):Ext.Component;
        static setGlyph(newGlyph: any):void;
        static setHeight(height: number):Ext.Component;
        static setIcon(icon: string, width?: number, height?: number):Ext.window.MessageBox;
        static setIconCls(newIconCls: string):void;
        static setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        static setLocalX(x: Object):Ext.util.Positionable;
        static setLocalXY(x: Object, y: Object):Ext.util.Positionable;
        static setLocalY(y: Object):Ext.util.Positionable;
        static setMargin(margin: any):void;
        static setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        static setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        static setPosition(x: any, y?: number, animate?: any):Ext.Component;
        static setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        static setRegionWeight(weight: number):number;
        static setSize(width: any, height: any):Ext.Component;
        static setTitle(newTitle: string):void;
        static setUI(ui: Object):void;
        static setVisible(visible: boolean):Ext.Component;
        static setWidth(width: number):Ext.Component;
        static setX(x: Object, animate: Object):Ext.util.Positionable;
        static setXY(xy: Object, animate: Object):Ext.util.Positionable;
        static setY(y: Object, animate: Object):Ext.util.Positionable;
        static show(config: Object):Ext.window.MessageBox;
        static showAt(x: any, y?: number, animate?: any):Ext.Component;
        static showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
        static statics():Ext.Class;
        static stopAnimation():Ext.dom.Element;
        static stopFx():Ext.dom.Element;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static syncFx():Object;
        static toBack():Ext.Component;
        static toFront(preventFocus?: boolean):Ext.Component;
        static toggleCollapse():Ext.panel.Panel;
        static toggleMaximize():Ext.window.Window;
        static translatePoints(x: any, y?: number):Object;
        static un(eventName: string, fn: Function, scope?: Object):void;
        static up(selector?: any, limit?: any):Ext.container.Container;
        static update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        static updateBox(box: Object):Ext.Component;
        static updateLayout(options?: Object):void;
        static updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        static wait(msg: string, title?: string, config?: Object):Ext.window.MessageBox;
    }
    export class ModelManager {
        static all: Ext.util.HashMap;
        static associationStack: Ext.data.association.Association[];
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static create(data: Object, name: string, id?: number):void;
        static each(fn: Function, scope: Object):void;
        static get(id: string):Object;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getModel(id: any):Ext.data.Model;
        static initConfig(config: Object):Ext.Base;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: Object):void;
        static register(item: Object):void;
        static statics():Ext.Class;
        static unregister(item: Object):void;
    }
    export class Number {
        static constrain(number: number, min: number, max: number):number;
        static correctFloat(The: number):number;
        static from(value: Object, defaultValue: number):number;
        static randomInt(from: number, to: number):number;
        static snap(value: number, increment: number, minValue: number, maxValue: number):number;
        static snapInRange(value: number, increment: number, minValue?: number, maxValue?: number):number;
        static toFixed(value: number, precision: number):void;
    }
    export class Object {
        static chain(object: Object):void;
        static each(object: Object, fn: Function, scope?: Object):void;
        static equals(object1: Object, object2: Object):boolean;
        static fromQueryString(queryString: string, recursive?: boolean):Object;
        static getKey(object: Object, value: Object):void;
        static getKeys(object: Object):string[];
        static getSize(object: Object):number;
        static getValues(object: Object):any[];
        static isEmpty(object: Object):boolean;
        static merge(destination: Object, ...object: Object[]):Object;
        static toQueryObjects(name: string, value: any, recursive?: boolean):any[];
        static toQueryString(object: Object, recursive?: boolean):string;
    }
    export class PluginManager {
        static all: Ext.util.HashMap;
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static create(config: Object, defaultType?: Function):Ext.Component;
        static each(fn: Function, scope: Object):void;
        static findByType(type: string, defaultsOnly: boolean):Ext.AbstractPlugin[];
        static get(id: string):Object;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: Object):void;
        static register(item: Object):void;
        static registerType(type: string, cls: Function):void;
        static statics():Ext.Class;
        static unregister(item: Object):void;
    }
    export class ProgressBar extends Ext.Component {
        constructor(config: any);
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: Object):Ext.ProgressBar;
    }
    export class Queryable extends Ext.Base {
        child(selector?: any):Object;
        down(selector?: any):Object;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: Object):Ext.Component[];
        queryById(id: string):Ext.Component;
    }
    export class Shadow extends Ext.Base {
        constructor(config?: Object);
        hide():void;
        isVisible():void;
        realign(left: number, top: number, width: number, height: number):void;
        setOpacity(opacity: number):void;
        setZIndex(zindex: number):void;
        show(targetEl: any):void;
    }
    export class ShadowPool {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class String {
        static addCharacterEntities(entities: Object):void;
        static capitalize(string: string):string;
        static createVarName(s: string):string;
        static ellipsis(value: string, length: number, word?: boolean):string;
        static endsWith(s: string, start: string, ignoreCase?: boolean):void;
        static escape(string: string):string;
        static escapeRegex(string: string):string;
        static format(string: string, ...values: any[]):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static insert(s: string, value: string, index: number):string;
        static leftPad(string: string, size: number, character?: string):string;
        static repeat(pattern: string, count: number, sep: string):void;
        static resetCharacterEntities():void;
        static splitWords(words: any):void;
        static startsWith(s: string, start: string, ignoreCase?: boolean):void;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static urlAppend(url: string, string: string):string;
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
        static from(el: any, config?: Object):Ext.Template;
    }
    export class Version {
        constructor(version: any);
        equals(target: any):boolean;
        getBuild():number;
        getMajor():number;
        getMinor():number;
        getPatch():number;
        getRelease():number;
        getShortVersion():string;
        gt(target: any):boolean;
        gtEq(target: any):boolean;
        isGreaterThan(target: any):boolean;
        isGreaterThanOrEqual(target: any):boolean;
        isLessThan(target: any):boolean;
        isLessThanOrEqual(target: any):boolean;
        lt(target: any):boolean;
        ltEq(target: any):boolean;
        match(target: any):boolean;
        toArray():number[];
        static compare(current: string, target: string):number;
        static getComponentValue(value: Object):Object;
    }
    export class WindowManager {
        static self: Ext.Class;
        static bringToFront(comp: any):boolean;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static each(fn: Function, scope?: Object):void;
        static eachBottomUp(fn: Function, scope?: Object):void;
        static eachTopDown(fn: Function, scope?: Object):void;
        static get(id: any):Ext.Component;
        static getActive():Ext.Component;
        static getBy(fn: Function, scope?: Object):any[];
        static getInitialConfig(name?: string):any;
        static hideAll():void;
        static initConfig(config: Object):Ext.Base;
        static register(comp: Ext.Component):void;
        static sendToBack(comp: any):Ext.Component;
        static statics():Ext.Class;
        static unregister(comp: Ext.Component):void;
    }
    export class XTemplate extends Ext.Template {
        constructor(...html: any[]);
        static getTpl(instance: Object, name: string):Ext.XTemplate;
    }
    export class XTemplateCompiler extends Ext.XTemplateParser {
        constructor(config: Object);
    }
    export class XTemplateParser extends Ext.Base {
        level: number;
        constructor(config: Object);
        doCase(action: string, actions: Object):void;
        doDefault():void;
        doElse():void;
        doElseIf(action: string, actions: Object):void;
        doEnd(type: string, actions: Object):void;
        doEval(text: string):void;
        doExec(action: string, actions: Object):void;
        doExpr(expr: string):void;
        doFor(action: string, actions: Object):void;
        doForEach(action: string, actions: Object):void;
        doIf(action: string, actions: Object):void;
        doSwitch(action: string, actions: Object):void;
        doTag():void;
        doText(text: string):void;
        doTpl():void;
    }
    export class ZIndexManager extends Ext.Base {
        constructor(container: Object);
        bringToFront(comp: any):boolean;
        each(fn: Function, scope?: Object):void;
        eachBottomUp(fn: Function, scope?: Object):void;
        eachTopDown(fn: Function, scope?: Object):void;
        get(id: any):Ext.Component;
        getActive():Ext.Component;
        getBy(fn: Function, scope?: Object):any[];
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
        static Tablet: Object;
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
        static DisplayChangeInputSelectionBug: Object;
        static DisplayChangeTextAreaSelectionBug: Object;
        static Float: boolean;
        static GeoLocation: boolean;
        static GetPositionPercentage: boolean;
        static History: boolean;
        static LocalStorage: Object;
        static MouseEnterLeave: boolean;
        static MouseWheel: boolean;
        static Opacity: boolean;
        static OrientationChange: boolean;
        static Placeholder: boolean;
        static PointerEvents: boolean;
        static Range: boolean;
        static RightMargin: boolean;
        static RotatedBoundingClientRect: boolean;
        static ScrollWidthInlinePaddingBug: boolean;
        static Svg: boolean;
        static TextAreaMaxLength: boolean;
        static TimeoutActualLateness: boolean;
        static Touch: boolean;
        static Transitions: boolean;
        static TransparentColor: boolean;
        static Vml: boolean;
        static WindowOnError: boolean;
    }
}
declare module Ext.app {
    export class Application extends Ext.app.Controller {
        constructor(config?: Object);
        launch(profile: string):boolean;
    }
    export class Controller extends Ext.Base {
        application: Ext.app.Application;
        hasListeners: Object;
        isObservable: boolean;
        constructor(config?: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        addRef(refs: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners?: Object):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getApplication():Ext.app.Application;
        getController(id: string):Ext.app.Controller;
        getModel(name: string):Ext.data.Model;
        getStore(name: string):Ext.data.Store;
        getView(name: string):Ext.Base;
        hasListener(eventName: string):boolean;
        hasRef(ref: Object):boolean;
        init(application: Ext.app.Application):void;
        listen(to: Object):void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        onLaunch(application: Ext.app.Application):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class EventBus {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static control(selectors: Object, controller: Ext.app.Controller):void;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static listen(to: Object, controller: Ext.app.Controller):void;
        static statics():Ext.Class;
        static unlisten(controllerId: string):void;
    }
    export class EventDomain extends Ext.Base {
        static instances: Object;
        constructor();
        match(target: Object, selector: string):boolean;
        monitor(observable: Ext.Class):void;
    }
}
declare module Ext.app.domain {
    export class Component {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static match(target: Object, selector: Object):boolean;
        static monitor(observable: Ext.Class):void;
        static statics():Ext.Class;
    }
    export class Controller {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static match(target: Object, selector: string):boolean;
        static monitor(observable: Ext.Class):void;
        static statics():Ext.Class;
    }
    export class Direct {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static match(target: Object, selector: string):boolean;
        static monitor(observable: Ext.Class):void;
        static statics():Ext.Class;
    }
    export class Global {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static match():boolean;
        static monitor(observable: Ext.Class):void;
        static statics():Ext.Class;
    }
    export class Store {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static match(target: Object, selector: string):boolean;
        static monitor(observable: Ext.Class):void;
        static statics():Ext.Class;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        disabled: boolean;
        hidden: boolean;
        isAction: boolean;
        menu: Ext.menu.Menu;
        pressed: boolean;
        template: Ext.Template;
        constructor(config: any);
        child(selector?: any):Object;
        down(selector?: any):Object;
        getTemplateArgs():Object;
        getText():string;
        hasVisibleMenu():boolean;
        hideMenu():Ext.button.Button;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: Object):Ext.Component[];
        queryById(id: string):Ext.Component;
        setGlyph(glyph: any):Ext.button.Button;
        setHandler(handler: Function, scope?: Object):Ext.button.Button;
        setHref(href: string):void;
        setIcon(icon: string):Ext.button.Button;
        setIconCls(cls: string):Ext.button.Button;
        setParams(params: Object):void;
        setScale(scale: string):void;
        setText(text: string):Ext.button.Button;
        setTextAlign(align: string):void;
        setTooltip(tooltip: any):Ext.button.Button;
        showMenu(fromEvent: Object):void;
        toggle(state?: boolean, suppressEvent?: boolean):Ext.button.Button;
    }
    export class Cycle extends Ext.button.Split {
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent?: boolean):void;
        toggleSelected():void;
    }
    export class Manager {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Split extends Ext.button.Button {
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: Object):void;
    }
}
declare module Ext.chart {
    export class Callout extends Ext.Base {
        constructor(config: Object);
    }
    export class Chart extends Ext.draw.Component {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config?: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        bindStore(store: Object, initial: Object):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():Object;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        redraw(resize?: boolean):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        restoreZoom():void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        save(config?: Object):Object;
        setZoom(zoomConfig: Object):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Highlight extends Ext.Base {
        highlightCfg: Object;
        constructor(config: Object);
        highlightItem(item: Object):void;
        unHighlightItem():void;
    }
    export class Label extends Ext.Base {
        onCreateLabel(storeItem: Ext.data.Model, item: Object, i: number, display: string):Ext.draw.Sprite;
        onPlaceLabel(label: Ext.draw.Sprite, storeItem: Ext.data.Model, item: Object, i: number, display: string, animate: boolean, index: number):void;
    }
    export class Legend extends Ext.Base {
        isVertical: boolean;
        constructor(config?: Object);
        toggle(show: boolean):void;
    }
    export class LegendItem extends Ext.draw.CompositeSprite {
        constructor(config: Object);
        createLegend(config: Object):void;
        updatePosition(relativeTo?: Object):void;
    }
    export class Mask extends Ext.Base {
        constructor(config?: Object);
    }
    export class MaskLayer extends Ext.Component {
        constructor(config: Object);
    }
    export class Navigation extends Ext.Base {
        restoreZoom():void;
        setZoom(zoomConfig: Object):void;
    }
    export class Shape {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Tip extends Ext.Base {
        constructor(config: Object);
    }
    export class TipSurface extends Ext.draw.Component {
        constructor(config: Object);
    }
}
declare module Ext.chart.axis {
    export class Abstract extends Ext.Base {
        constructor(config?: Object);
    }
    export class Axis extends Ext.chart.axis.Abstract {
        constructor(config?: Object);
        drawGrid():void;
        drawLabel():void;
        setTitle(title: string):void;
    }
    export class Category extends Ext.chart.axis.Axis {
        constructor(config?: Object);
    }
    export class Gauge extends Ext.chart.axis.Abstract {
        constructor(config?: Object);
        setTitle(title: string):void;
    }
    export class Numeric extends Ext.chart.axis.Axis {
        constructor(config: Object);
    }
    export class Radial extends Ext.chart.axis.Numeric {
        constructor(config: Object);
    }
    export class Time extends Ext.chart.axis.Numeric {
        constructor(config: Object);
    }
}
declare module Ext.chart.series {
    export class Area extends Ext.chart.series.Cartesian {
        constructor(config: Object);
        drawSeries():void;
        highlightSeries(item: Object):void;
        unHighlightSeries(item: Object):void;
    }
    export class Bar extends Ext.chart.series.Cartesian {
        constructor(config: Object);
        drawSeries():void;
    }
    export class Cartesian extends Ext.chart.series.Series {
        constructor(config: Object);
        eachYValue(record: Ext.data.Model, fn: Function, scope: Object):void;
        getMinMaxXValues():any[];
        getMinMaxYValues():any[];
        getYValueAccessors():any[];
        getYValueCount():number;
    }
    export class Column extends Ext.chart.series.Bar {
        constructor(config: Object);
    }
    export class Gauge extends Ext.chart.series.Series {
        constructor(config: Object);
        drawSeries():void;
        setValue(value: Object):void;
    }
    export class Line extends Ext.chart.series.Cartesian {
        constructor(config: Object);
        drawSeries():void;
    }
    export class Pie extends Ext.chart.series.Series {
        constructor(config: Object);
        drawSeries():void;
    }
    export class Radar extends Ext.chart.series.Series {
        constructor(config: Object);
        drawSeries():void;
    }
    export class Scatter extends Ext.chart.series.Cartesian {
        constructor(config: Object);
        drawSeries():void;
    }
    export class Series extends Ext.Base {
        hasListeners: Object;
        highlightCfg: Object;
        isObservable: boolean;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        eachRecord(fn: Function, scope: Object):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getItemForPoint(x: number, y: number):Object;
        getLegendColor(index: Object):void;
        getRecordCount():void;
        hasListener(eventName: string):boolean;
        hideAll():void;
        highlightItem(item: Object):void;
        isExcluded(index: Object):void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        onCreateLabel(storeItem: Ext.data.Model, item: Object, i: number, display: string):Ext.draw.Sprite;
        onPlaceLabel(label: Ext.draw.Sprite, storeItem: Ext.data.Model, item: Object, i: number, display: string, animate: boolean, index: number):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setTitle(index: number, title: string):void;
        showAll():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        unHighlightItem():void;
    }
}
declare module Ext.chart.theme {
    export class Base extends Ext.Base {
        constructor(config: Object);
    }
    export class Theme {
    }
}
declare module Ext.container {
    export class AbstractContainer extends Ext.Component {
        items: Ext.util.AbstractMixedCollection;
        constructor(config: any);
        add(...component: any[]):any;
        afterLayout(layout: Ext.layout.container.Container):void;
        cascade(fn: Function, scope?: Object, args?: any[]):Ext.container.Container;
        child(selector?: any):Object;
        contains(comp: Ext.Component, deep?: boolean):boolean;
        doLayout():Ext.container.Container;
        down(selector?: any):Object;
        getComponent(comp: any):Ext.Component;
        getLayout():Ext.layout.container.Container;
        getRefItems(deep: Object):void;
        insert(index: number, component: any):Ext.Component;
        isAncestor(possibleDescendant: Ext.Component):void;
        onAdd(component: Ext.Component, position: number):void;
        onBeforeAdd(item: Ext.Component):void;
        onRemove(component: Ext.Component, autoDestroy: boolean):void;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: Object):Ext.Component[];
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
        addDocked(component: any, pos?: number):Ext.Component[];
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, component: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
    }
    export class Monitor extends Ext.Base {
        constructor(config: Object);
    }
    export class Viewport extends Ext.container.Container {
        isViewport: boolean;
        constructor(config: any);
    }
}
declare module Ext.data {
    export class AbstractStore extends Ext.Base {
        defaultProxyType: string;
        filters: Ext.util.MixedCollection;
        hasListeners: Object;
        isDestroyed: boolean;
        isObservable: boolean;
        isSortable: boolean;
        isStore: boolean;
        removed: Ext.data.Model[];
        sorters: Ext.util.MixedCollection;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        getModifiedRecords():Ext.data.Model[];
        getNewRecords():Ext.data.Model[];
        getProxy():Ext.data.proxy.Proxy;
        getRemovedRecords():Ext.data.Model[];
        getUpdatedRecords():Ext.data.Model[];
        hasListener(eventName: string):boolean;
        initSortable():void;
        isLoading():boolean;
        load(options?: Object):Ext.data.Store;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        reload(options: Object):void;
        removeAll():void;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeAutoSync():void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        save():void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        suspendAutoSync():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        sync(options?: Object):Ext.data.Store;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config: Object);
    }
    export class Batch extends Ext.Base {
        current: number;
        exceptions: Ext.data.Operation[];
        hasException: boolean;
        hasListeners: Object;
        isComplete: boolean;
        isObservable: boolean;
        isRunning: boolean;
        operations: Ext.data.Operation[];
        total: number;
        constructor(config?: Object);
        add(operation: Object):Ext.data.Batch;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        pause():Ext.data.Batch;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        retry():Ext.data.Batch;
        runOperation(index: number):Ext.data.Batch;
        start(index: Object):Ext.data.Batch;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class BufferStore extends Ext.data.Store {
        constructor();
    }
    export class Connection extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config: Object);
        abort(request?: Object):void;
        abortAll():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: Object):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        parseStatus(status: number):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        request(options: Object):Object;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setOptions(options: Object, scope: Object):Object;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        upload(form: any, url: string, params: string, options: Object):void;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: Object);
    }
    export class Errors extends Ext.util.MixedCollection {
        constructor(config: Object);
        getByField(fieldName: string):Object[];
        isValid():boolean;
    }
    export class Field extends Ext.Base {
        constructor(config: Object);
    }
    export class Group extends Ext.util.Observable {
        constructor();
    }
    export class IdGenerator extends Ext.Base {
        isGenerator: boolean;
        constructor(config?: Object);
        generate():string;
        static get(config: any):void;
    }
    export class JsonP {
        static callbackKey: string;
        static disableCaching: boolean;
        static disableCachingParam: string;
        static self: Ext.Class;
        static timeout: number;
        static abort(request?: any):void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static request(options: Object):Object;
        static statics():Ext.Class;
    }
    export class JsonPStore extends Ext.data.Store {
        constructor(config: Object);
    }
    export class JsonStore extends Ext.data.Store {
        constructor(config: Object);
    }
    export class Model extends Ext.Base {
        dirty: boolean;
        editing: boolean;
        fields: Ext.util.MixedCollection;
        hasListeners: Object;
        isModel: boolean;
        isObservable: boolean;
        modified: Object;
        phantom: boolean;
        raw: Object;
        store: Ext.data.Store;
        stores: Ext.data.Store[];
        static COMMIT: string;
        static EDIT: string;
        static REJECT: string;
        constructor(data: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        beginEdit():void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        commit(silent?: boolean, modifiedFieldNames?: string[]):void;
        copy(id?: string):Ext.data.Model;
        enableBubble(eventNames: any):void;
        endEdit(silent?: boolean, modifiedFieldNames?: string[]):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        get(fieldName: string):Object;
        getAssociatedData():Object;
        getChanges():Object;
        getData(includeAssociated: boolean):Object;
        getId():any;
        getProxy():Ext.data.proxy.Proxy;
        hasListener(eventName: string):boolean;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        join(store: Ext.data.Store):void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        reject(silent?: boolean):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        save(options?: Object):Ext.data.Model;
        set(fieldName: any, newValue: Object):string[];
        setDirty():void;
        setId(id: any):void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.Errors;
        static getFields():Ext.data.Field[];
        static getProxy():Ext.data.proxy.Proxy;
        static id(rec: Ext.data.Model):string;
        static load(id: any, config?: Object):void;
        static setFields(fields: Object, idProperty: Object, clientIdProperty: Object):void;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class NodeInterface extends Ext.Base {
        childNodes: Ext.data.NodeInterface[];
        firstChild: Ext.data.NodeInterface;
        isNode: boolean;
        lastChild: Ext.data.NodeInterface;
        nextSibling: Ext.data.NodeInterface;
        parentNode: Ext.data.NodeInterface;
        previousSibling: Ext.data.NodeInterface;
        appendChild(node: any, suppressEvents?: boolean, commit?: boolean):Ext.data.NodeInterface;
        bubble(fn: Function, scope?: Object, args?: any[]):void;
        cascadeBy(fn: Function, scope?: Object, args?: any[]):void;
        collapse(recursive?: boolean, callback?: Function, scope?: Object):void;
        collapseChildren(recursive?: Function, callback?: Function, scope?: Object):void;
        contains(node: Ext.data.NodeInterface):boolean;
        copy(id?: string, deep?: boolean):Ext.data.NodeInterface;
        createNode(node: Object):Ext.data.NodeInterface;
        eachChild(fn: Function, scope?: Object, args?: any[]):void;
        expand(recursive?: boolean, callback?: Function, scope?: Object):void;
        expandChildren(recursive?: boolean, callback?: Function, scope?: Object):void;
        findChild(attribute: string, value: Object, deep?: boolean):Ext.data.NodeInterface;
        findChildBy(fn: Function, scope?: Object, deep?: boolean):Ext.data.NodeInterface;
        getChildAt(index: number):Ext.data.NodeInterface;
        getDepth():number;
        getOwnerTree():Ext.tree.Panel;
        getPath(field?: string, separator?: string):string;
        hasChildNodes():boolean;
        indexOf(node: Ext.data.NodeInterface):number;
        indexOfId(id: string):number;
        insertBefore(node: Ext.data.NodeInterface, refNode: Ext.data.NodeInterface):Ext.data.NodeInterface;
        insertChild(index: number, node: Ext.data.NodeInterface):Ext.data.NodeInterface;
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
        serialize():void;
        sort(fn: Function, recursive?: boolean, suppressEvent?: boolean):void;
        updateInfo(commit: boolean, info: Object):void;
        static decorate(modelClass: any):void;
    }
    export class NodeStore extends Ext.data.Store {
        isExpandingOrCollapsing: number;
        isNodeStore: boolean;
        constructor(config: Object);
    }
    export class Operation extends Ext.Base {
        actionCommitRecordsRe: RegExp;
        actionSkipSyncRe: RegExp;
        constructor(config?: Object);
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
    export class PageMap extends Ext.util.LruCache {
        constructor(config?: Object);
        findBy(fn: Function, scope?: Object):Object;
        findIndexBy(fn: Function, scope?: Object):number;
    }
    export class Request extends Ext.Base {
        constructor(config?: Object);
    }
    export class ResultSet extends Ext.Base {
        totalRecords: number;
        constructor(config?: Object);
    }
    export class SequentialIdGenerator extends Ext.data.IdGenerator {
        constructor();
    }
    export class SortTypes {
        static self: Ext.Class;
        static stripTagsRE: RegExp;
        static asDate(s: Object):number;
        static asFloat(s: Object):number;
        static asInt(s: Object):number;
        static asText(s: Object):string;
        static asUCString(s: Object):string;
        static asUCText(s: Object):string;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static none(s: Object):Object;
        static statics():Ext.Class;
    }
    export class Store extends Ext.data.AbstractStore {
        currentPage: number;
        data: any;
        snapshot: Ext.util.MixedCollection;
        constructor(config?: Object);
        add(...model: any[]):Ext.data.Model[];
        addFilter(filters: any, applyFilters?: boolean):void;
        addSorted(record: Ext.data.Model):void;
        aggregate(fn: Function, scope?: Object, grouped?: boolean, args?: any[]):Object;
        average(field: string, grouped?: boolean):Object;
        clearGrouping():void;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):Object[];
        commitChanges():void;
        count(grouped?: boolean):number;
        each(fn: Function, scope?: Object):void;
        find(fieldName: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: Function, scope?: Object, startIndex?: number):number;
        findExact(fieldName: string, value: Object, startIndex?: number):number;
        findRecord(fieldName: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        first(grouped?: boolean):any;
        getAt(index: number):Ext.data.Model;
        getGroupString(instance: Ext.data.Model):string;
        getGroups(groupName?: string):any;
        getPageFromRecordIndex(index: number):number;
        getRange(start: number, end: number, options?: Object):Ext.data.Model[];
        getTotalCount():number;
        group(groupers: any, direction?: string):void;
        guaranteeRange(start: Object, end: Object, callback: Object, scope: Object, options: Object):void;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        indexOfTotal(record: Ext.data.Model):number;
        insert(index: number, records: Ext.data.Model[]):Ext.data.Model[];
        isGrouped():boolean;
        last(grouped?: boolean):any;
        loadData(data: any, append?: boolean):void;
        loadPage(page: number, options?: Object):void;
        loadRawData(data: Object[], append?: boolean):void;
        loadRecords(records: Ext.data.Model[], options: Object):void;
        max(field: string, grouped?: boolean):Object;
        min(field: string, grouped?: boolean):Object;
        nextPage(options: Object):void;
        prefetch(options?: Object):void;
        prefetchPage(page: number, options?: Object):void;
        prefetchRange(start: Object, end: Object):void;
        previousPage(options: Object):void;
        query(property: string, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.MixedCollection;
        queryBy(fn: Function, scope?: Object):Ext.util.MixedCollection;
        rejectChanges():void;
        remove(records: any):void;
        removeAt(index: number, count?: number):void;
        removeFilter(toRemove: any, applyFilters?: boolean):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static hasListeners: Object;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: Object):Object;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: Object):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: Object):void;
        static eachKey(fn: Function, scope?: Object):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: Object):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: Function, scope?: Object):Object;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: Object, start?: number):number;
        static findInsertionIndex(newItem: Object, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static first():Object;
        static generateComparator():void;
        static get(key: any):Object;
        static getAt(index: number):Object;
        static getByKey(key: any):Object;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(o: Object):Object;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: Object):number;
        static indexOfKey(key: string):number;
        static initConfig(config: Object):Ext.Base;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):Object;
        static last():Object;
        static lookup(store: any):Ext.data.Store;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static remove(o: Object):Object;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):Object;
        static removeAtKey(key: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeRange(index: number, removeCount?: number):Object;
        static reorder(mapping: Object):void;
        static replace(key: string, o: Object):Object;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
        static unregister(...stores: any[]):void;
        static updateKey(oldKey: Object, newKey: Object):void;
    }
    export class Tree extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        root: Ext.data.NodeInterface;
        constructor(root?: Ext.data.NodeInterface);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getNodeById(id: string):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        removeRootNode():Ext.data.NodeInterface;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setRootNode(node: Ext.data.NodeInterface):Ext.data.NodeInterface;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class TreeModel extends Ext.data.Model {
        constructor(data: Object);
    }
    export class TreeStore extends Ext.data.AbstractStore {
        fields: Object;
        constructor(config: Object);
        getNodeById(id: Object):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        setRootNode(root: any):Ext.data.NodeInterface;
    }
    export class Types {
        static AUTO: Object;
        static BOOL: Object;
        static BOOLEAN: Object;
        static DATE: Object;
        static FLOAT: Object;
        static INT: Object;
        static INTEGER: Object;
        static NUMBER: Object;
        static STRING: Object;
        static self: Ext.Class;
        static stripRe: RegExp;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class UuidGenerator extends Ext.data.IdGenerator {
        salt: any;
        timestamp: any;
        constructor(config?: Object);
        reconfigure(config: Object):void;
    }
    export class XmlStore extends Ext.data.Store {
        constructor(config: Object);
    }
    export class validations {
        static emailMessage: string;
        static emailRe: RegExp;
        static exclusionMessage: string;
        static formatMessage: string;
        static inclusionMessage: string;
        static lengthMessage: string;
        static presenceMessage: string;
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static email(config: Object, email: string):boolean;
        static exclusion(config: Object, value: string):boolean;
        static format(config: Object, value: string):boolean;
        static getInitialConfig(name?: string):any;
        static inclusion(config: Object, value: string):boolean;
        static initConfig(config: Object):Ext.Base;
        static length(config: Object, value: string):boolean;
        static presence(config: Object, value: Object):boolean;
        static statics():Ext.Class;
    }
}
declare module Ext.data.association {
    export class Association extends Ext.Base {
        associatedName: string;
        ownerName: string;
        constructor(config?: Object);
        getReader():Ext.data.reader.Reader;
    }
    export class BelongsTo extends Ext.data.association.Association {
        constructor(config?: Object);
    }
    export class HasMany extends Ext.data.association.Association {
        constructor(config?: Object);
    }
    export class HasOne extends Ext.data.association.Association {
        constructor(config?: Object);
    }
}
declare module Ext.data.flash {
    export class BinaryXhr extends Ext.Base {
        readyState: number;
        responseBytes: any[];
        status: number;
        statusText: string;
        constructor(config: Object);
        abort():void;
        getAllResponseHeaders():void;
        getResponseHeader(header: Object):void;
        onreadystatechange():void;
        open(method: Object, url: Object, async: Object, user: Object, password: Object):void;
        overrideMimeType(mimeType: Object):void;
        send(body: any[]):void;
        setRequestHeader(header: Object, value: Object):void;
    }
}
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        actionMethods: Object;
        constructor(config?: Object);
        getMethod(request: Ext.data.Request):string;
    }
    export class Client extends Ext.data.proxy.Proxy {
        constructor(config?: Object);
        clear():void;
    }
    export class Direct extends Ext.data.proxy.Server {
        constructor(config: Object);
    }
    export class JsonP extends Ext.data.proxy.Server {
        constructor();
        abort():void;
        encodeRecords(records: Ext.data.Model[]):any[];
    }
    export class LocalStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: Object);
    }
    export class Memory extends Ext.data.proxy.Client {
        constructor(config?: Object);
    }
    export class Proxy extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        isProxy: boolean;
        isSynchronous: boolean;
        constructor(config?: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        batch(options: Object):Ext.data.Batch;
        clearListeners():void;
        clearManagedListeners():void;
        create(operation: Ext.data.Operation, callback: Function, scope: Object):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getModel():Ext.data.Model;
        getReader():Ext.data.reader.Reader;
        getWriter():Ext.data.writer.Writer;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        read(operation: Ext.data.Operation, callback: Function, scope: Object):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setModel(model: any, setOnStore: boolean):void;
        setReader(reader: any):Ext.data.reader.Reader;
        setWriter(writer: any):Ext.data.writer.Writer;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        update(operation: Ext.data.Operation, callback: Function, scope: Object):void;
    }
    export class Rest extends Ext.data.proxy.Ajax {
        constructor(config?: Object);
    }
    export class Server extends Ext.data.proxy.Proxy {
        constructor(config?: Object);
        afterRequest(request: Ext.data.Request, success: boolean):void;
        buildRequest(operation: Ext.data.Operation):Ext.data.Request;
        buildUrl(request: Ext.data.Request):string;
        doRequest(operation: Ext.data.Operation, callback: Function, scope: Object):void;
        encodeFilters(filters: Ext.util.Filter[]):string;
        encodeSorters(sorters: Ext.util.Sorter[]):string;
        setExtraParam(name: string, value: Object):void;
    }
    export class SessionStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: Object);
    }
    export class WebStorage extends Ext.data.proxy.Client {
        cache: Object;
        constructor(config?: Object);
        setRecord(record: Ext.data.Model, id?: string):void;
    }
}
declare module Ext.data.reader {
    export class Array extends Ext.data.reader.Json {
        constructor(meta: Object);
    }
    export class Json extends Ext.data.reader.Reader {
        jsonData: Object;
        constructor(config?: Object);
    }
    export class Reader extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        metaData: Object;
        rawData: Object;
        constructor(config?: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getResponseData(response: Object):Ext.data.ResultSet;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        read(response: Object):Ext.data.ResultSet;
        readRecords(data: Object):Ext.data.ResultSet;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        xmlData: Object;
        constructor(config?: Object);
    }
}
declare module Ext.data.writer {
    export class Json extends Ext.data.writer.Writer {
        constructor(config?: Object);
        getExpandedData(data: Object):void;
    }
    export class Writer extends Ext.Base {
        constructor(config?: Object);
        getRecordData(record: Ext.data.Model, operation?: Ext.data.Operation):Object;
        write(request: Ext.data.Request):Ext.data.Request;
    }
    export class Xml extends Ext.data.writer.Writer {
        constructor(config?: Object);
    }
}
declare module Ext.dd {
    export class DD extends Ext.dd.DragDrop {
        scroll: boolean;
        constructor(id: string, sGroup: string, config: Object);
        alignElWithMouse(el: HTMLElement, iPageX: number, iPageY: number):void;
        autoOffset(iPageX: number, iPageY: number):void;
        cachePosition(iPageX?: number, iPageY?: number):void;
        setDelta(iDeltaX: number, iDeltaY: number):void;
        setDragElPos(iPageX: number, iPageY: number):void;
    }
    export class DDProxy extends Ext.dd.DD {
        centerFrame: boolean;
        resizeFrame: boolean;
        static dragElId: string;
        constructor(id: string, sGroup: string, config: Object);
        createFrame():void;
        initFrame():void;
    }
    export class DDTarget extends Ext.dd.DragDrop {
        constructor(id: string, sGroup: string, config: Object);
    }
    export class DragDrop extends Ext.Base {
        available: boolean;
        config: Object;
        defaultPadding: Object;
        groups: Object;
        hasOuterHandles: boolean;
        id: string;
        ignoreSelf: boolean;
        invalidHandleClasses: string[];
        invalidHandleIds: Object;
        invalidHandleTypes: Object;
        isTarget: boolean;
        maintainOffset: boolean;
        moveOnly: boolean;
        padding: number[];
        primaryButtonOnly: boolean;
        xTicks: number[];
        yTicks: number[];
        constructor(id: string, sGroup: string, config: Object);
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
        init(id: string, sGroup: string, config: Object):void;
        initTarget(id: string, sGroup: string, config: Object):void;
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
        startDrag(x: number, y: number):void;
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
        static dragCls: string;
        static mode: number;
        static notifyOccluded: boolean;
        static preventDefault: boolean;
        static self: Ext.Class;
        static stopPropagation: boolean;
        static useCache: boolean;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getBestMatch(dds: Ext.dd.DragDrop[]):Ext.dd.DragDrop;
        static getCss(id: string):Object;
        static getDDById(id: string):Ext.dd.DragDrop;
        static getElement(id: string):Object;
        static getInitialConfig(name?: string):any;
        static getLocation(oDD: Ext.dd.DragDrop):Ext.util.Region;
        static getRelated(p_oDD: Ext.dd.DragDrop, bTargetsOnly: boolean):Ext.dd.DragDrop[];
        static initConfig(config: Object):Ext.Base;
        static isDragDrop(id: string):boolean;
        static isHandle(id: string):boolean;
        static isLegalTarget(oDD: Ext.dd.DragDrop, oTargetDD: Ext.dd.DragDrop):boolean;
        static isLocked():boolean;
        static isTypeOfDD(the: Object):boolean;
        static lock():void;
        static refreshCache(groups: Object):void;
        static regDragDrop(oDD: Ext.dd.DragDrop, sGroup: string):void;
        static regHandle(sDDId: string, sHandleId: string):void;
        static startDrag(x: number, y: number):void;
        static statics():Ext.Class;
        static stopEvent(e: Event):void;
        static unlock():void;
        static verifyEl(el: HTMLElement):boolean;
    }
    export class DragSource extends Ext.dd.DDProxy {
        dragData: Object;
        constructor(el: any, config?: Object);
        afterDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOut(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterDragOver(target: Ext.dd.DragDrop, e: Event, id: string):void;
        afterInvalidDrop(e: Event, id: string):void;
        afterValidDrop(target: Object, e: Event, id: string):void;
        beforeDragDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragEnter(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOut(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeDragOver(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        beforeInvalidDrop(target: Ext.dd.DragDrop, e: Event, id: string):boolean;
        getDragData(e: Object):Object;
        getProxy():Ext.dd.StatusProxy;
        hideProxy():void;
        onBeforeDrag(data: Object, e: Event):boolean;
        onStartDrag(x: number, y: number):void;
    }
    export class DragTracker extends Ext.Base {
        active: boolean;
        dragTarget: HTMLElement;
        hasListeners: Object;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getDragTarget():Ext.dom.Element;
        getOffset(constrainMode?: string):number[];
        hasListener(eventName: string):boolean;
        initEl(el: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        onBeforeStart(e: Ext.EventObject):void;
        onDrag(e: Ext.EventObject):void;
        onEnd(e: Ext.EventObject):void;
        onStart(e: Ext.EventObject):void;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        constructor(el: any, config: Object);
    }
    export class DropTarget extends Ext.dd.DDTarget {
        constructor(el: any, config: Object);
        notifyDrop(source: Ext.dd.DragSource, e: Event, data: Object):boolean;
        notifyEnter(source: Ext.dd.DragSource, e: Event, data: Object):string;
        notifyOut(source: Ext.dd.DragSource, e: Event, data: Object):void;
        notifyOver(source: Ext.dd.DragSource, e: Event, data: Object):string;
    }
    export class DropZone extends Ext.dd.DropTarget {
        constructor(el: any, config: Object);
        getTargetFromEvent(e: Event):Object;
        onContainerDrop(source: Ext.dd.DragSource, e: Event, data: Object):boolean;
        onContainerOver(source: Ext.dd.DragSource, e: Event, data: Object):string;
        onNodeDrop(nodeData: Object, source: Ext.dd.DragSource, e: Event, data: Object):boolean;
        onNodeEnter(nodeData: Object, source: Ext.dd.DragSource, e: Event, data: Object):void;
        onNodeOut(nodeData: Object, source: Ext.dd.DragSource, e: Event, data: Object):void;
        onNodeOver(nodeData: Object, source: Ext.dd.DragSource, e: Event, data: Object):string;
    }
    export class Registry {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getHandle(id: any):Object;
        static getHandleFromEvent(e: Event):Object;
        static getInitialConfig(name?: string):any;
        static getTarget(id: any):Object;
        static getTargetFromEvent(e: Event):Object;
        static initConfig(config: Object):Ext.Base;
        static register(element: any, data: Object):void;
        static statics():Ext.Class;
        static unregister(element: any):void;
    }
    export class ScrollManager {
        static animDuration: number;
        static animate: boolean;
        static ddGroup: string;
        static frequency: number;
        static hthresh: number;
        static increment: number;
        static self: Ext.Class;
        static vthresh: number;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static refreshCache():void;
        static register(el: any):void;
        static statics():Ext.Class;
        static unregister(el: any):void;
    }
    export class StatusProxy extends Ext.Component {
        constructor(config?: Object);
        getGhost():Ext.dom.Element;
        repair(xy: number[], callback: Function, scope: Object):void;
        reset(clearGhost: boolean):void;
        setStatus(cssClass: string):void;
        stop():void;
        sync():void;
    }
}
declare module Ext.dd.DragDropManager {
    export class ElementWrapper {
        css: Object;
        el: Object;
        id: Object;
    }
}
declare module Ext.direct {
    export class Event extends Ext.Base {
        constructor(config?: Object);
        getData():any;
        getName():string;
    }
    export class ExceptionEvent extends Ext.direct.RemotingEvent {
        constructor(config?: Object);
    }
    export class JsonProvider extends Ext.direct.Provider {
        createEvent(response: Object):Ext.direct.Event;
        createEvents(response: Object):Ext.direct.Event[];
    }
    export class Manager {
        static exceptions: Object;
        static hasListeners: Object;
        static isObservable: boolean;
        static self: Ext.Class;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addProvider(...provider: any[]):void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static getInitialConfig(name?: string):any;
        static getProvider(id: any):void;
        static hasListener(eventName: string):boolean;
        static initConfig(config: Object):Ext.Base;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static parseMethod(fn: any):Function;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeProvider(provider: any):Ext.direct.Provider;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
    }
    export class Provider extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        isConnected():void;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class RemotingEvent extends Ext.direct.Event {
        constructor(config?: Object);
        getTransaction():Ext.direct.Transaction;
    }
    export class RemotingMethod extends Ext.Base {
        constructor(config: Object);
        getCallData(args: any[]):Object;
    }
    export class RemotingProvider extends Ext.direct.JsonProvider {
    }
    export class Transaction extends Ext.Base {
        constructor(config?: Object);
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
        constructor(element: Object, forceNew: Object);
        addCls(className: any):Ext.dom.Element;
        appendChild(el: any, returnDom?: boolean):Ext.dom.AbstractElement;
        appendTo(el: any):Ext.dom.AbstractElement;
        applyStyles(styles: any):Ext.dom.Element;
        child(selector: string, returnDom?: boolean):any;
        contains(el: any):boolean;
        createChild(config: Object, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.AbstractElement;
        down(selector: string, returnDom?: boolean):any;
        findParent(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        first(selector?: string, returnDom?: boolean):any;
        getActiveElement():HTMLElement;
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getById(id: string, asDom?: boolean):void;
        getHTML():void;
        getHeight(contentHeight?: boolean):number;
        getMargin(sides?: string):any;
        getPadding(side: string):number;
        getSize(contentSize?: boolean):Object;
        getStyle(property: any, inline?: boolean):any;
        getValue(asNumber: boolean):any;
        getViewSize():Object;
        getWidth(contentWidth?: boolean):number;
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
        prev(selector?: string, returnDom?: boolean):any;
        query(selector: string):HTMLElement[];
        radioCls(className: any):Ext.dom.Element;
        remove():void;
        removeCls(className: any):Ext.dom.Element;
        repaint():Ext.dom.Element;
        replace(el: any):Ext.dom.AbstractElement;
        replaceCls(oldClassName: string, newClassName: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.AbstractElement;
        select(selector: string, unique?: boolean):Ext.dom.CompositeElement;
        serializeForm(form: Object):string;
        set(o: Object, useSet?: boolean):Ext.dom.Element;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: any):Ext.dom.Element;
        setSize(width: any, height: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setVisibilityMode(mode: Object):Ext.dom.AbstractElement;
        setVisible(visible: boolean, animate?: any):Ext.dom.Element;
        setWidth(width: any):Ext.dom.Element;
        show(animate?: any):Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        unmask():void;
        up(selector: string, limit?: any, returnDom?: boolean):Ext.dom.Element;
        update(html: string):Ext.dom.Element;
        wrap(config?: Object, returnDom?: boolean, selector?: string):any;
        static fly(dom: any, named?: string):Ext.dom.Element.Fly;
        static fromPoint(x: number, y: number):string;
        static get(el: any):Ext.dom.Element;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():Object;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static mergeClsList(clsList1: any, clsList2: any):any[];
        static normalize(prop: string):string;
        static parseBox(box: any):Object;
        static parseStyles(styles: string):Object;
        static removeCls(existingClsList: any, removeClsList: any):any[];
        static unitizeBox(box: any, units: string):string;
    }
    export class AbstractHelper extends Ext.Base {
        append(el: any, o: any, returnElement?: boolean):any;
        applyStyles(el: any, styles: any):void;
        generateStyles(styles: Object, buffer?: string[]):any;
        insertAfter(el: any, o: Object, returnElement?: boolean):any;
        insertBefore(el: any, o: any, returnElement?: boolean):any;
        insertFirst(el: any, o: any, returnElement?: boolean):any;
        insertHtml(where: string, el: any, html: string):HTMLElement;
        markup(spec: Object):string;
        overwrite(el: any, o: any, returnElement?: boolean):any;
    }
    export class AbstractQuery extends Ext.Base {
        is(el: any, selector: string):boolean;
        select(selector: string, root?: any):HTMLElement[];
        selectNode(selector: string, root?: any):HTMLElement;
    }
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(elements: Object, root: Object);
    }
    export class CompositeElementLite extends Ext.Base {
        elements: HTMLElement[];
        isComposite: boolean;
        constructor(elements: Object, root: Object);
        add(els: any):Ext.dom.CompositeElement;
        clear(removeDom?: boolean):void;
        contains(el: any):boolean;
        each(fn: Function, scope?: Object):Ext.dom.CompositeElement;
        fill(els: any):Ext.dom.CompositeElement;
        filter(selector: any):Ext.dom.CompositeElement;
        first():Ext.dom.Element;
        getCount():number;
        indexOf(el: any):number;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        removeElement(el: any, removeDom?: boolean):Ext.dom.CompositeElement;
        replaceElement(el: any, replacement: any, domReplace?: boolean):Ext.dom.CompositeElement;
        slice(start?: number, end?: number):HTMLElement[];
    }
    export class Element extends Ext.dom.AbstractElement {
        autoBoxAdjust: boolean;
        originalDisplay: string;
        constructor(element: any, forceNew?: boolean);
        addClsOnClick(className: string, testFn?: Function, scope?: Object):Ext.dom.Element;
        addClsOnFocus(className: string, testFn?: Function, scope?: Object):Ext.dom.Element;
        addClsOnOver(className: string, testFn?: Function, scope?: Object):Ext.dom.Element;
        addKeyListener(key: any, fn: Function, scope?: Object):Ext.util.KeyMap;
        addKeyMap(config: Object):Ext.util.KeyMap;
        addListener(eventName: string, fn: Function, scope?: Object, options?: Object):Ext.dom.Element;
        animate(config: Object):Ext.dom.Element;
        blur():Ext.dom.Element;
        boxWrap(class_?: string):Ext.dom.Element;
        cacheScrollValues():Function;
        center(centerIn: any):void;
        clean(forceReclean?: boolean):void;
        clearListeners():Ext.dom.Element;
        clearOpacity():Ext.dom.Element;
        clearPositioning(value?: string):Ext.dom.Element;
        clip():Ext.dom.Element;
        createProxy(config: any, renderTo?: any, matchBox?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        enableDisplayMode(display?: string):Ext.dom.Element;
        fadeIn(options?: Object):Ext.dom.Element;
        fadeOut(options?: Object):Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        focusable():boolean;
        frame(color?: string, count?: number, options?: Object):Ext.dom.Element;
        getAttributeNS(namespace: string, name: string):string;
        getBottom(local: boolean):number;
        getCenterXY():number[];
        getColor(attr: string, defaultValue: string, prefix?: string):void;
        getComputedHeight():number;
        getComputedWidth():number;
        getFrameWidth(sides: string):number;
        getLeft(local: boolean):number;
        getLoader():Ext.ElementLoader;
        getLocalX():number;
        getLocalXY():any[];
        getLocalY():number;
        getPageBox(asRegion?: boolean):any;
        getRight(local: boolean):number;
        getScroll():Object;
        getScrollLeft():number;
        getScrollTop():number;
        getStyleSize():Object;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        ghost(anchor?: string, options?: Object):Ext.dom.Element;
        highlight(color?: string, options?: Object):Ext.dom.Element;
        hover(overFn: Function, outFn: Function, scope?: Object, options?: Object):Ext.dom.Element;
        initDD(group: string, config: Object, overrides: Object):Ext.dd.DD;
        initDDProxy(group: string, config: Object, overrides: Object):Ext.dd.DDProxy;
        initDDTarget(group: string, config: Object, overrides: Object):Ext.dd.DDTarget;
        isBorderBox():boolean;
        isDisplayed():boolean;
        isFocusable(asFocusEl: Object):boolean;
        isMasked():boolean;
        isScrollable():boolean;
        isVisible(deep?: boolean):boolean;
        load(options: Object):Ext.dom.Element;
        monitorMouseLeave(delay: number, handler: Function, scope?: Object):Object;
        moveTo(x: number, y: number, animate?: any):Ext.dom.Element;
        needsTabIndex():void;
        on(eventName: string, fn: Function, scope?: Object, options?: Object):Ext.dom.Element;
        pause(seconds: number):Ext.dom.Element;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        puff(options?: Object):Ext.dom.Element;
        purgeAllListeners():Ext.dom.Element;
        relayEvent(eventName: string, observable: Object):void;
        removeAllListeners():Ext.dom.Element;
        removeListener(eventName: string, fn: Function, scope: Object):Ext.dom.Element;
        scale(width: number, height: number, options?: Object):Ext.dom.Element;
        scroll(direction: string, distance: number, animate?: any):boolean;
        scrollBy(deltaX: any, deltaY: any, animate: any):Ext.dom.Element;
        scrollIntoView(container?: any, hscroll?: boolean, animate?: any, highlight?: boolean):Ext.dom.Element;
        scrollTo(side: string, value: number, animate?: any):Ext.dom.Element;
        selectable():Ext.dom.Element;
        setBottom(bottom: any):Ext.dom.Element;
        setBounds(x: number, y: number, width: any, height: any, animate?: any):Ext.dom.Element;
        setDisplayed(value: any):Ext.dom.Element;
        setLeft(left: any):Ext.dom.Element;
        setLeftTop(left: any, top: any):Ext.dom.Element;
        setLocation(x: number, y: number, animate?: any):Ext.dom.Element;
        setOpacity(opacity: number, animate?: any):Ext.dom.Element;
        setPositioning(posCfg: Object):Ext.dom.Element;
        setRight(right: any):Ext.dom.Element;
        setScrollLeft(left: number):Ext.dom.Element;
        setScrollTop(top: number):Ext.dom.Element;
        setTop(top: any):Ext.dom.Element;
        shift(options: Object):Ext.dom.Element;
        slideIn(anchor?: string, options?: Object):Ext.dom.Element;
        slideOut(anchor?: string, options?: Object):Ext.dom.Element;
        swallowEvent(eventName: any, preventDefault?: boolean):Ext.dom.Element;
        switchOff(options?: Object):Ext.dom.Element;
        toggle(animate?: any):Ext.dom.Element;
        un(eventName: string, fn: Function, scope: Object):Ext.dom.Element;
        unclip():Ext.dom.Element;
        unselectable():Ext.dom.Element;
        static select(selector: any, unique?: boolean, root?: any):any;
    }
    export class Helper extends Ext.dom.AbstractHelper {
        useDom: boolean;
        createDom(o: any):HTMLElement;
        createHtml(spec: Object):string;
        createTemplate(o: Object):Ext.Template;
    }
    export class Layer extends Ext.dom.Element {
        constructor(config?: Object, existingEl?: any);
        setZIndex(zindex: number):Ext.dom.Layer;
    }
    export class Query {
        static matchers: Object;
        static operators: Object;
        static pseudos: Object;
        static compile(selector: string, type?: string):Function;
        static filter(el: HTMLElement[], selector: string, nonMatches: boolean):HTMLElement[];
        static is(el: any, selector: string):boolean;
        static jsSelect(selector: string, root?: any):HTMLElement[];
        static select(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
        static selectNode(selector: string, root?: HTMLElement):HTMLElement;
        static selectNumber(selector: string, root?: HTMLElement, defaultValue?: number):number;
        static selectValue(selector: string, root?: HTMLElement, defaultValue?: string):string;
    }
}
declare module Ext.dom.Element {
    export class Fly extends Ext.dom.Element {
        isFly: boolean;
        constructor(element: any, forceNew?: boolean);
    }
}
declare module Ext.draw {
    export class Color extends Ext.Base {
        constructor(red: number, green: number, blue: number);
        getBlue():number;
        getDarker(factor: number):Object;
        getGrayscale():number;
        getGreen():number;
        getHSL():number[];
        getLighter(factor: number):Object;
        getRGB():number[];
        getRed():number;
        toString():string;
        static fromHSL(h: number, s: number, l: number):Object;
        static fromString(str: string):Object;
        static toHex(color: any):string;
    }
    export class Component extends Ext.Component {
        surface: Ext.draw.Surface;
        constructor(config: any);
    }
    export class CompositeSprite extends Ext.util.MixedCollection {
        constructor(config: Object);
        addCls(cls: string):void;
        animate(config: Object):Object;
        getActiveAnimation():any;
        getBBox():Object;
        hasActiveFx():any;
        hide(redraw: boolean):Ext.draw.CompositeSprite;
        redraw():void;
        removeCls(cls: string):void;
        sequenceFx():Object;
        setAttributes(attrs: Object, redraw: boolean):Ext.draw.CompositeSprite;
        setStyle(style: string):void;
        show(redraw: boolean):Ext.draw.CompositeSprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():Object;
    }
    export class Draw {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static snapEndsByDate(from: Date, to: Date, stepsMax: number, lockEnds: boolean):Object;
        static snapEndsByDateAndStep(from: Date, to: Date, step: any[], lockEnds: boolean):Object;
        static statics():Ext.Class;
    }
    export class Matrix extends Ext.Base {
        constructor(a: Object, b: Object, c: Object, d: Object, e: Object, f: Object);
    }
    export class Sprite extends Ext.Base {
        dd: Ext.dd.DragSource;
        hasListeners: Object;
        isObservable: boolean;
        isSprite: boolean;
        constructor(config: Object);
        addCls(className: any):Ext.draw.Sprite;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        animate(config: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getActiveAnimation():any;
        getBBox():Object;
        hasActiveFx():any;
        hasListener(eventName: string):boolean;
        hide(redraw: boolean):Ext.draw.Sprite;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        redraw():Ext.draw.Sprite;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        remove():boolean;
        removeCls(className: any):Ext.draw.Sprite;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        sequenceFx():Object;
        setAttributes(attrs: Object, redraw: boolean):Ext.draw.Sprite;
        setStyle(property: any, value?: string):Ext.draw.Sprite;
        show(redraw: boolean):Ext.draw.Sprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():Object;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class SpriteDD extends Ext.dd.DragSource {
        constructor(sprite: Object, cfg: Object);
    }
    export class Surface extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config?: Object);
        add(...args: any[]):any;
        addCls(sprite: Object, className: any):void;
        addEvents(...eventNames: any[]):void;
        addGradient(gradient: Object):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getGroup(id: string):Object;
        getId():void;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        remove(sprite: Ext.draw.Sprite, destroySprite: boolean):void;
        removeAll(destroySprites: boolean):void;
        removeCls(sprite: Object, className: any):void;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setSize(w: number, h: number):void;
        setStyle(sprite: Object, styles: Object):void;
        setText(sprite: Object, text: string):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        static save(surface: Ext.draw.Surface, config?: Object):Object;
    }
    export class Text extends Ext.draw.Component {
        constructor(text: Object);
        setAngle(degrees: number):void;
        setText(t: string):void;
    }
}
declare module Ext.draw.engine {
    export class ImageExporter {
        static defaultUrl: string;
        static heightParam: string;
        static self: Ext.Class;
        static supportedTypes: any[];
        static svgParam: string;
        static typeParam: string;
        static widthParam: string;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static generate(surface: Ext.draw.Surface, config?: Object):boolean;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Svg extends Ext.draw.Surface {
        constructor(config?: Object);
        applyZIndex(sprite: Ext.draw.Sprite):void;
        getRegion():Ext.util.Region;
        hasCls(sprite: Ext.draw.Sprite, className: string):boolean;
    }
    export class SvgExporter {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static generate(surface: Ext.draw.Surface, config?: Object):string;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Vml extends Ext.draw.Surface {
        constructor(config?: Object);
    }
}
declare module Ext.enums {
    export class Feature {
        abstractsummary: string;
        feature: string;
        grouping: string;
        groupingsummary: string;
        rowbody: string;
        summary: string;
    }
    export class Layout {
        absolute: string;
        accordion: string;
        anchor: string;
        auto: string;
        autocomponent: string;
        autocontainer: string;
        border: string;
        box: string;
        card: string;
        checkboxgroup: string;
        column: string;
        container: string;
        fit: string;
        form: string;
        hbox: string;
        table: string;
        vbox: string;
    }
    export class Plugin {
        bufferedrenderer: string;
        cellediting: string;
        gridheaderresizer: string;
        gridviewdragdrop: string;
        rowediting: string;
        rowexpander: string;
        treeviewdragdrop: string;
    }
    export class Widget {
        actioncolumn: string;
        booleancolumn: string;
        boundlist: string;
        box: string;
        button: string;
        buttongroup: string;
        chart: string;
        checkbox: string;
        checkboxfield: string;
        checkboxgroup: string;
        checkcolumn: string;
        colormenu: string;
        colorpicker: string;
        combo: string;
        combobox: string;
        component: string;
        container: string;
        cycle: string;
        dataview: string;
        datecolumn: string;
        datefield: string;
        datemenu: string;
        datepicker: string;
        displayfield: string;
        draw: string;
        editor: string;
        field: string;
        fieldcontainer: string;
        fieldset: string;
        filebutton: string;
        filefield: string;
        fileuploadfield: string;
        flash: string;
        form: string;
        grid: string;
        gridcolumn: string;
        gridpanel: string;
        gridview: string;
        header: string;
        headercontainer: string;
        hidden: string;
        hiddenfield: string;
        htmleditor: string;
        image: string;
        imagecomponent: string;
        jsonpstore: string;
        label: string;
        loadmask: string;
        menu: string;
        menucheckitem: string;
        menuitem: string;
        menuseparator: string;
        messagebox: string;
        multislider: string;
        numbercolumn: string;
        numberfield: string;
        pagingtoolbar: string;
        panel: string;
        pickerfield: string;
        progressbar: string;
        propertygrid: string;
        quicktip: string;
        radio: string;
        radiofield: string;
        radiogroup: string;
        rownumberer: string;
        slider: string;
        sliderfield: string;
        slidertip: string;
        spinnerfield: string;
        splitbutton: string;
        splitter: string;
        tab: string;
        tabbar: string;
        tablepanel: string;
        tableview: string;
        tabpanel: string;
        tbfill: string;
        tbitem: string;
        tbseparator: string;
        tbspacer: string;
        tbtext: string;
        templatecolumn: string;
        text: string;
        textarea: string;
        textareafield: string;
        textfield: string;
        timefield: string;
        timepicker: string;
        tip: string;
        tool: string;
        toolbar: string;
        tooltip: string;
        treepanel: string;
        treeview: string;
        trigger: string;
        triggerfield: string;
        viewport: string;
        window: string;
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
        constructor(owner: Ext.container.Container, config: Object);
        applyIfToFields(obj: Object):Ext.form.Basic;
        applyToFields(obj: Object):Ext.form.Basic;
        checkDirty():void;
        checkValidity():void;
        clearInvalid():Ext.form.Basic;
        doAction(action: any, options?: Object):Ext.form.Basic;
        findField(id: string):Ext.form.field.Field;
        getFieldValues(dirtyOnly?: boolean):Object;
        getFields():Ext.util.MixedCollection;
        getRecord():Ext.data.Model;
        getValues(asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean):any;
        hasInvalidField():void;
        hasUpload():boolean;
        isDirty():boolean;
        isValid():boolean;
        load(options: Object):Ext.form.Basic;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        markInvalid(errors: any):Ext.form.Basic;
        reset(resetRecord?: boolean):Ext.form.Basic;
        setValues(values: any):Ext.form.Basic;
        submit(options: Object):Ext.form.Basic;
        updateRecord(record?: Ext.data.Model):Ext.form.Basic;
    }
    export class CheckboxGroup extends Ext.form.FieldContainer {
        isFormField: boolean;
        originalValue: Object;
        constructor(config: any);
        batchChanges(fn: Object):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getChecked():Ext.form.field.Checkbox[];
        getErrors():string[];
        getModelData():Object;
        getName():string;
        getSubmitData():Object;
        getValue():void;
        initField():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: Object, value2: Object):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        reset():void;
        resetOriginalValue():void;
        setValue(value: Object):Ext.form.CheckboxGroup;
        transformOriginalValue(value: Object):Object;
        validate():boolean;
    }
    export class CheckboxManager {
        static hasListeners: Object;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: Object):Object;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: Object):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: Object):void;
        static eachKey(fn: Function, scope?: Object):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: Object):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: Function, scope?: Object):Object;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: Object, start?: number):number;
        static findInsertionIndex(newItem: Object, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static first():Object;
        static generateComparator():void;
        static get(key: any):Object;
        static getAt(index: number):Object;
        static getByKey(key: any):Object;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(item: Object):Object;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: Object):number;
        static indexOfKey(key: string):number;
        static initConfig(config: Object):Ext.Base;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):Object;
        static last():Object;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static remove(o: Object):Object;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):Object;
        static removeAtKey(key: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeRange(index: number, removeCount?: number):Object;
        static reorder(mapping: Object):void;
        static replace(key: string, o: Object):Object;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
        static updateKey(oldKey: Object, newKey: Object):void;
    }
    export class FieldAncestor extends Ext.Base {
        initFieldAncestor():void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
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
        getFieldLabel():string;
        getInputId():string;
        getLabelWidth():number;
        getLabelableRenderData():Object;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initFieldAncestor():void;
        initLabelable():void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: Object):void;
        setFieldLabel(label: string):void;
        trimLabelSeparator():string;
        unsetActiveError():void;
    }
    export class FieldSet extends Ext.container.Container {
        checkboxCmp: Ext.form.field.Checkbox;
        legend: Ext.Component;
        toggleCmp: Ext.panel.Tool;
        constructor(config: any);
        collapse():Ext.form.FieldSet;
        createCheckboxCmp():Ext.Component;
        createTitleCmp():Ext.Component;
        createToggleCmp():Ext.Component;
        expand():Ext.form.FieldSet;
        initFieldAncestor():void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
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
        getLabelWidth():number;
        getLabelableRenderData():Object;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initLabelable():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: Object):void;
        setFieldLabel(label: string):void;
        trimLabelSeparator():string;
        unsetActiveError():void;
    }
    export class Panel extends Ext.panel.Panel {
        constructor(config: any);
        checkChange():void;
        getForm():Ext.form.Basic;
        getRecord():Ext.data.Model;
        getValues(asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean):any;
        hasInvalidField():void;
        initFieldAncestor():void;
        isDirty():boolean;
        isValid():boolean;
        load(options: Object):void;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        startPolling(interval: number):void;
        stopPolling():void;
        submit(options: Object):void;
        updateRecord(record?: Ext.data.Model):Ext.form.Basic;
    }
    export class RadioGroup extends Ext.form.CheckboxGroup {
        constructor(config: any);
    }
    export class RadioManager {
        static hasListeners: Object;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: Object):Object;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: Object):boolean;
        static containsKey(key: string):boolean;
        static each(fn: Function, scope?: Object):void;
        static eachKey(fn: Function, scope?: Object):void;
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: Function, scope?: Object):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: Function, scope?: Object):Object;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: Function, scope?: Object, start?: number):number;
        static findInsertionIndex(newItem: Object, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static first():Object;
        static generateComparator():void;
        static get(key: any):Object;
        static getAt(index: number):Object;
        static getByKey(key: any):Object;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(item: Object):Object;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: Object):number;
        static indexOfKey(key: string):number;
        static initConfig(config: Object):Ext.Base;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):Object;
        static last():Object;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static remove(o: Object):Object;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):Object;
        static removeAtKey(key: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static removeRange(index: number, removeCount?: number):Object;
        static reorder(mapping: Object):void;
        static replace(key: string, o: Object):Object;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
        static updateKey(oldKey: Object, newKey: Object):void;
    }
}
declare module Ext.form.action {
    export class Action extends Ext.Base {
        failureType: string;
        response: Object;
        result: Object;
        type: string;
        static CLIENT_INVALID: string;
        static CONNECT_FAILURE: string;
        static LOAD_FAILURE: string;
        static SERVER_INVALID: string;
        constructor(config?: Object);
        run():void;
    }
    export class DirectLoad extends Ext.form.action.Load {
        constructor(config?: Object);
    }
    export class DirectSubmit extends Ext.form.action.Submit {
        constructor(config?: Object);
    }
    export class Load extends Ext.form.action.Action {
        constructor(config?: Object);
    }
    export class StandardSubmit extends Ext.form.action.Submit {
        constructor(config?: Object);
    }
    export class Submit extends Ext.form.action.Action {
        constructor(config?: Object);
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
        originalValue: Object;
        constructor(config: any);
        batchChanges(fn: Object):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getActiveError():string;
        getActiveErrors():string[];
        getErrors(value: Object):string[];
        getFieldLabel():string;
        getInputId():void;
        getLabelWidth():number;
        getLabelableRenderData():Object;
        getModelData():Object;
        getName():string;
        getRawValue():string;
        getSubTplData():Object;
        getSubTplMarkup():void;
        getSubmitData():Object;
        getSubmitValue():string;
        getValue():Object;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initField():void;
        initLabelable():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: Object, value2: Object):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        processRawValue(value: Object):Object;
        rawToValue(rawValue: Object):Object;
        reset():void;
        resetOriginalValue():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: Object):void;
        setFieldLabel(label: string):void;
        setFieldStyle(style: any):void;
        setRawValue(value: Object):Object;
        setReadOnly(readOnly: boolean):void;
        setValue(value: Object):Ext.form.field.Field;
        transformOriginalValue(value: Object):Object;
        transformRawValue(value: Object):Object;
        trimLabelSeparator():string;
        unsetActiveError():void;
        validate():boolean;
        validateValue(value: Object):boolean;
        valueToRaw(value: Object):Object;
    }
    export class Checkbox extends Ext.form.field.Base {
        boxLabelEl: Ext.dom.Element;
        constructor(config: any);
        setBoxLabel(boxLabel: string):void;
    }
    export class ComboBox extends Ext.form.field.Picker {
        lastQuery: string;
        constructor(config: any);
        afterQuery(queryPlan: Object):void;
        beforeQuery(queryPlan: Object):void;
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearValue():void;
        doQuery(queryString: string, forceAll?: boolean, rawQuery?: boolean):boolean;
        findRecord(field: string, value: Object):Ext.data.Model;
        findRecordByDisplay(value: Object):Ext.data.Model;
        findRecordByValue(value: Object):Ext.data.Model;
        getStore():Ext.data.Store;
        getStoreListeners():Object;
        onBindStore(store: Object, initial: Object):void;
        onUnbindStore(store: Object):void;
        select(r: Object):void;
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
        originalValue: Object;
        batchChanges(fn: Object):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getErrors(value: Object):string[];
        getModelData():Object;
        getName():string;
        getSubmitData():Object;
        getValue():Object;
        initField():void;
        initValue():void;
        isDirty():boolean;
        isEqual(value1: Object, value2: Object):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        reset():void;
        resetOriginalValue():void;
        setValue(value: Object):Ext.form.field.Field;
        transformOriginalValue(value: Object):Object;
        validate():boolean;
    }
    export class File extends Ext.form.field.Trigger {
        button: Ext.button.Button;
        fileInputEl: Ext.dom.Element;
        constructor(config: any);
    }
    export class FileButton extends Ext.button.Button {
        constructor(config: any);
    }
    export class Hidden extends Ext.form.field.Base {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.form.FieldContainer {
        buttonTips: Object;
        isFormField: boolean;
        originalValue: Object;
        constructor(config: any);
        batchChanges(fn: Object):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        cleanHtml(html: string):string;
        clearInvalid():void;
        execCmd(cmd: string, value?: any):void;
        extractFileInput():HTMLElement;
        getDocMarkup():void;
        getErrors(value: Object):string[];
        getModelData():Object;
        getName():string;
        getSubmitData():Object;
        getToolbar():Ext.toolbar.Toolbar;
        getValue():Object;
        initField():void;
        initValue():void;
        insertAtCursor(text: string):void;
        isDirty():boolean;
        isEqual(value1: Object, value2: Object):boolean;
        isFileUpload():boolean;
        isValid():boolean;
        markInvalid(errors: any):void;
        pushValue():void;
        relayCmd(cmd: string, value?: any):void;
        reset():void;
        resetOriginalValue():void;
        setReadOnly(readOnly: boolean):void;
        setValue(value: Object):Ext.form.field.Field;
        syncValue():void;
        toggleSourceEdit(sourceEditMode?: boolean):void;
        transformOriginalValue(value: Object):Object;
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
        static self: Ext.Class;
        static urlText: string;
        static alpha(value: string):boolean;
        static alphanum(value: string):boolean;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static email(value: string):boolean;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
        static url(value: string):boolean;
    }
}
declare module Ext.fx {
    export class Anim extends Ext.Base {
        currentIteration: number;
        hasListeners: Object;
        isAnimation: boolean;
        isObservable: boolean;
        paused: boolean;
        running: boolean;
        startTime: Date;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class Animator extends Ext.Base {
        currentIteration: number;
        hasListeners: Object;
        isAnimator: boolean;
        isObservable: boolean;
        keyframeStep: number;
        paused: boolean;
        running: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class CubicBezier {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Easing {
    }
    export class Manager {
        static self: Ext.Class;
        static addAnim(anim: Ext.fx.Anim):void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static removeAnim(anim: Ext.fx.Anim):void;
        static statics():Ext.Class;
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
        constructor(target: Object);
    }
    export class CompositeElementCSS extends Ext.fx.target.CompositeElement {
        constructor(target: Object);
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
    export class CellContext extends Ext.Base {
        isCellContext: boolean;
        constructor(view: Object);
    }
    export class CellEditor extends Ext.Editor {
        constructor(config: Object);
    }
    export class ColumnComponentLayout extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class ColumnLayout extends Ext.layout.container.HBox {
        constructor(config: Object);
    }
    export class ColumnManager extends Ext.Base {
        constructor(headerCt: Object, secondHeaderCt: Object);
        getHeaderAtIndex(index: number):Ext.grid.column.Column;
        getHeaderById(id: string):Ext.grid.column.Column;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getVisibleHeaderClosestToIndex(index: number):void;
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
    }
    export class RowEditor extends Ext.form.Panel {
        constructor(config: any);
        startEdit(record: Ext.data.Model, columnHeader: Ext.data.Model):void;
    }
    export class RowEditorButtons extends Ext.container.Container {
        constructor(config: Object);
    }
    export class View extends Ext.view.Table {
        constructor(config: Object);
    }
    export class ViewDropZone extends Ext.view.DropZone {
        constructor(config: Object);
    }
}
declare module Ext.grid.column {
    export class Action extends Ext.grid.column.Column {
        constructor(config: Object);
        disableAction(index: any, silent?: boolean):void;
        enableAction(index: any, silent?: boolean):void;
    }
    export class Boolean extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class CheckColumn extends Ext.grid.column.Column {
        constructor();
    }
    export class Column extends Ext.grid.header.Container {
        isColumn: boolean;
        isHeader: boolean;
        textEl: Ext.dom.Element;
        triggerEl: Ext.dom.Element;
        constructor(config: any);
        autoSize(The: any):void;
        defaultRenderer():void;
        getEditor(record: Object, defaultField: Object):Ext.form.field.Field;
        getIndex():number;
        getSortParam():string;
        getVisibleIndex():number;
        isHideable():void;
        isLockable():void;
        setEditor(field: Object):void;
        setText(text: string):void;
    }
    export class Date extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Number extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class RowNumberer extends Ext.grid.column.Column {
        constructor(config: Object);
    }
    export class Template extends Ext.grid.column.Column {
        constructor(config: any);
    }
}
declare module Ext.grid.feature {
    export class AbstractSummary extends Ext.grid.feature.Feature {
        constructor(config: Object);
        toggleSummaryRow(visible: boolean):void;
    }
    export class Feature extends Ext.util.Observable {
        disabled: boolean;
        eventPrefix: string;
        eventSelector: string;
        grid: Ext.grid.Panel;
        hasFeatureEvent: boolean;
        view: Ext.view.Table;
        constructor(config: Object);
        disable():void;
        enable():void;
        getFireEventArgs(eventName: Object, view: Object, featureTarget: Object, e: Object):void;
    }
    export class GroupStore extends Ext.util.Observable {
        constructor(groupingFeature: Object, store: Object);
        indexOfTotal(record: Ext.data.Model):number;
    }
    export class Grouping extends Ext.grid.feature.Feature {
        constructor();
        collapse(groupName: string, focus: boolean):void;
        collapseAll():void;
        expand(groupName: string, focus: boolean):void;
        expandAll():void;
        getRecordGroup(record: Ext.data.Model):Object;
        isExpanded(groupName: string):boolean;
        toggleSummaryRow(visible: boolean):void;
    }
    export class GroupingSummary extends Ext.grid.feature.Grouping {
        constructor();
    }
    export class RowBody extends Ext.grid.feature.Feature {
        constructor(config: Object);
        getAdditionalData(data: Object, idx: number, record: Ext.data.Model, orig: Object):void;
    }
    export class RowWrap extends Ext.grid.feature.Feature {
        constructor(config: Object);
    }
    export class Summary extends Ext.grid.feature.AbstractSummary {
        constructor(config: Object);
    }
}
declare module Ext.grid.header {
    export class Container extends Ext.container.Container {
        isGroupHeader: boolean;
        constructor(config: any);
        getColumnCount():void;
        getColumnMenu(headerContainer: Object):void;
        getFullWidth():void;
        getGridColumns(inResult: Object, hiddenAncestor: Object):any[];
        getHeaderAtIndex(index: number):void;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getMenuItems():any[];
        getVisibleGridColumns():any[];
        getVisibleHeaderClosestToIndex(index: number):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(headerCt: Object);
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(headerCt: Object);
    }
}
declare module Ext.grid.locking {
    export class HeaderContainer extends Ext.grid.header.Container {
        constructor(lockable: Object);
    }
    export class Lockable extends Ext.Base {
        syncRowHeights():void;
    }
    export class View extends Ext.Base {
        hasListeners: Object;
        isLockingView: boolean;
        isObservable: boolean;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
}
declare module Ext.grid.plugin {
    export class BufferedRenderer extends Ext.AbstractPlugin {
        position: number;
        constructor(config?: Object);
        scrollTo(recordIdx: number, doSelect: boolean, callback: Function, scope: Object):void;
    }
    export class CellEditing extends Ext.grid.plugin.Editing {
        constructor(config: Object);
        startEditByPosition(position: Object):void;
    }
    export class DragDrop extends Ext.AbstractPlugin {
        constructor(config?: Object);
    }
    export class Editing extends Ext.AbstractPlugin {
        editing: boolean;
        hasListeners: Object;
        isObservable: boolean;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        completeEdit():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        startEdit(record: any, columnHeader: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class HeaderReorderer extends Ext.AbstractPlugin {
        constructor(config?: Object);
    }
    export class HeaderResizer extends Ext.AbstractPlugin {
        constructor(config?: Object);
        getDynamic():boolean;
        setDynamic(dynamic: boolean):void;
    }
    export class RowEditing extends Ext.grid.plugin.Editing {
        constructor();
    }
    export class RowExpander extends Ext.AbstractPlugin {
        constructor(config?: Object);
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        constructor(config: any);
        getSource():Object;
        removeProperty(prop: string):void;
        setProperty(prop: string, value: Object, create?: boolean):void;
        setSource(source: Object, sourceConfig?: Object):void;
    }
    export class HeaderContainer extends Ext.grid.header.Container {
        constructor(grid: Ext.grid.property.Grid, source: Object);
    }
    export class Property extends Ext.data.Model {
        constructor(config: Object);
    }
    export class Store extends Ext.data.Store {
        constructor(grid: Ext.grid.Panel, source: Object);
    }
}
declare module Ext.layout {
    export class ClassList extends Ext.Base {
        add(cls: Object):void;
        addMany(classes: Object):void;
        remove(cls: Object):void;
        removeMany(classes: Object):void;
    }
    export class Context extends Ext.Base {
        layoutQueue: Ext.util.Queue;
        state: number;
        constructor(config: Object);
        flush():void;
        getCmp(cmp: Ext.Component):void;
        getEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        invalidate(components: any, full: boolean):void;
        removeEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        resetLayout(layout: Object, ownerContext: Object, firstTime: Object):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(items: any, width: number, height: number):void;
    }
    export class ContextItem extends Ext.Base {
        state: Object;
        wrapsComponent: boolean;
        constructor(config: Object);
        addCls(newCls: Object):void;
        block(layout: Ext.layout.Layout, propName: string):void;
        clearMarginCache():void;
        domBlock(layout: Ext.layout.Layout, propName: string):void;
        flush():void;
        getBorderInfo():Object;
        getClassList():void;
        getDomProp(propName: string):Object;
        getEl(nameOrEl: any, owner?: any):Ext.layout.ContextItem;
        getFrameInfo():Object;
        getMarginInfo():Object;
        getPaddingInfo():Object;
        getProp(propName: string):Object;
        getStyle(styleName: string):Object;
        getStyles(styleNames: string[], altNames?: string[]):Object;
        hasDomProp(propName: string):boolean;
        hasProp(propName: string):boolean;
        invalidate(options: Object):void;
        recoverProp(propName: string, oldProps: Object, oldDirty: Object):void;
        removeCls(removeCls: Object):void;
        removeEl(nameOrEl: any, owner?: any):void;
        setAttribute(name: Object, value: Object):void;
        setContentHeight(height: Object, measured: Object):void;
        setContentSize(width: Object, height: Object, measured: Object):void;
        setContentWidth(width: Object, measured: Object):void;
        setHeight(height: number, dirty?: boolean):number;
        setProp(propName: string, value: Object, dirty: boolean):number;
        setWidth(width: number, dirty?: boolean):number;
    }
    export class Layout extends Ext.Base {
        done: boolean;
        isLayout: boolean;
        constructor(config: Object);
        afterRemove(item: Object):void;
        beginLayout(ownerContext: Ext.layout.ContextItem):void;
        beginLayoutCycle(ownerContext: Ext.layout.ContextItem):void;
        calculate(ownerContext: Ext.layout.ContextItem):void;
        completeLayout(ownerContext: Ext.layout.ContextItem):void;
        configureItem(item: Ext.Component):void;
        finalizeLayout(ownerContext: Ext.layout.ContextItem):void;
        finishedLayout(ownerContext: Ext.layout.ContextItem):void;
        getItemSizePolicy(item: Ext.Component):Ext.layout.SizePolicy;
        getLayoutItems():void;
        initLayout():void;
        isValidParent(item: Object, target: Object, position: Object):void;
        notifyOwner(ownerContext: Ext.layout.ContextItem):void;
        onContentChange(child: Ext.Component):boolean;
        renderItems(items: Object, target: Object):void;
    }
    export class SizeModel extends Ext.Base {
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
        names: Object;
        natural: boolean;
        ordinal: number;
        pairsByHeightOrdinal: Object[];
        shrinkWrap: boolean;
        constructor(config: Object);
    }
    export class SizePolicy {
        readsHeight: boolean;
        readsWidth: boolean;
        setsHeight: boolean;
        setsWidth: boolean;
    }
}
declare module Ext.layout.component {
    export class Auto extends Ext.layout.component.Component {
        constructor(config: Object);
    }
    export class Body extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class BoundList extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class Button extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class Component extends Ext.layout.Layout {
        constructor(config: Object);
        getRenderTarget():Ext.dom.Element;
        getTarget():Ext.dom.Element;
    }
    export class Dock extends Ext.layout.component.Component {
        constructor(config: Object);
        getDockedItems(order?: string, beforeBody?: boolean):Ext.Component[];
        invalidateAxes(ownerContext: Object, horz: Object, vert: Object):void;
    }
    export class Draw extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class FieldSet extends Ext.layout.component.Body {
        constructor(config: Object);
    }
    export class ProgressBar extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
}
declare module Ext.layout.component.field {
    export class ComboBox extends Ext.layout.component.field.Trigger {
        constructor(config: Object);
    }
    export class Field extends Ext.layout.component.Auto {
        elementId: Object;
        errorStrategies: Object;
        labelStrategies: Object;
        left: Object;
        qtip: Object;
        right: Object;
        side: Object;
        title: Object;
        top: Object;
        under: Object;
        constructor(config: Object);
        getErrorStrategy():void;
        getLabelStrategy():void;
        static destroyTip():void;
        static initTip():void;
    }
    export class FieldContainer extends Ext.layout.component.field.Field {
        constructor(config: Object);
    }
    export class HtmlEditor extends Ext.layout.component.field.FieldContainer {
        constructor(config: Object);
    }
    export class Slider extends Ext.layout.component.field.Field {
        constructor(config: Object);
    }
    export class Text extends Ext.layout.component.field.Field {
        constructor(config: Object);
    }
    export class TextArea extends Ext.layout.component.field.Text {
        constructor(config: Object);
    }
    export class Trigger extends Ext.layout.component.field.Field {
        constructor(config: Object);
    }
}
declare module Ext.layout.container {
    export class Absolute extends Ext.layout.container.Anchor {
        constructor();
    }
    export class Accordion extends Ext.layout.container.VBox {
        constructor();
    }
    export class Anchor extends Ext.layout.container.Auto {
        constructor();
    }
    export class Auto extends Ext.layout.container.Container {
        manageOverflow: boolean;
        managePadding: boolean;
        constructor();
        calculateOverflow(ownerContext: Ext.layout.ContextItem):void;
        getOverflowXStyle(ownerContext: Ext.layout.ContextItem):string;
        getOverflowYStyle(ownerContext: Ext.layout.ContextItem):string;
        setCtSizeIfNeeded(ownerContext: Ext.layout.ContextItem, containerSize: Object):void;
    }
    export class Border extends Ext.layout.container.Container {
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        constructor(config: Object);
        cacheFlexes(ownerContext: Object):void;
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
    export class Column extends Ext.layout.container.Auto {
        constructor();
    }
    export class Container extends Ext.layout.Layout {
        overflowPadderEl: Ext.dom.Element;
        constructor();
        addChildEls():void;
        getContainerSize(ownerContext: Ext.layout.ContextItem, inDom?: boolean):Object;
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
    export class Form extends Ext.layout.container.Container {
        getScrollRangeFlags: Object;
        constructor();
        calculateOverflow(ownerContext: Ext.layout.ContextItem, containerSize: Object, dimensions: number):void;
        doRenderPadder(out: Object, renderData: Object):void;
        getOverflowXStyle(ownerContext: Ext.layout.ContextItem):string;
        getOverflowYStyle(ownerContext: Ext.layout.ContextItem):string;
    }
    export class HBox extends Ext.layout.container.Box {
        constructor(config: Object);
    }
    export class Table extends Ext.layout.container.Container {
        constructor();
    }
    export class VBox extends Ext.layout.container.Box {
        constructor(config: Object);
    }
}
declare module Ext.layout.container.boxOverflow {
    export class Menu extends Ext.layout.container.boxOverflow.None {
        menuItems: any[];
        noItemsMenuText: string;
        constructor(layout: Object);
    }
    export class None extends Ext.Base {
        constructor(layout: Object, config: Object);
    }
    export class Scroller extends Ext.layout.container.boxOverflow.None {
        hasListeners: Object;
        isObservable: boolean;
        constructor(layout: Object, config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        scrollToItem(item: any, animate: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
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
        menu: Ext.menu.Menu;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        child(selector?: any):Object;
        down(selector?: any):Object;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: Object):Ext.Component[];
        queryById(id: string):Ext.Component;
        setHandler(fn: Function, scope?: Object):void;
        setIcon(icon: string):void;
        setIconCls(iconCls: string):void;
        setMenu(menu: any, destroyMenu?: boolean):void;
        setText(text: string):void;
        setTooltip(tooltip: any):Ext.menu.Item;
    }
    export class KeyNav extends Ext.util.KeyNav {
        constructor(config: Object);
    }
    export class Manager {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static get(menu: any):Ext.menu.Menu;
        static getInitialConfig(name?: string):any;
        static hideAll():boolean;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
    export class Menu extends Ext.panel.Panel {
        isMenu: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        canActivateItem(item: Object):boolean;
        deactivateActiveItem(andBlurFocusedItem: Object):void;
    }
    export class Separator extends Ext.menu.Item {
        constructor(config: any);
    }
}
declare module Ext.panel {
    export class AbstractPanel extends Ext.container.Container {
        body: Ext.dom.Element;
        isPanel: boolean;
        constructor(config: any);
        addBodyCls(cls: string):Ext.panel.Panel;
        addDocked(component: any, pos?: number):Ext.Component[];
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, component: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeBodyCls(cls: string):Ext.panel.Panel;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        setBodyStyle(style: any, value: string):Ext.panel.Panel;
    }
    export class DD extends Ext.dd.DragSource {
        constructor(panel: Object, cfg: Object);
    }
    export class Header extends Ext.container.Container {
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: Object):void;
        getTools():Ext.panel.Tool[];
        setGlyph(glyph: any):void;
        setIcon(icon: string):void;
        setIconCls(cls: string):void;
        setTitle(title: string):void;
    }
    export class Panel extends Ext.panel.AbstractPanel {
        dd: any;
        constructor(config: any);
        addTool(tools: any):void;
        afterCollapse(animated: boolean):void;
        afterExpand(animated: boolean):void;
        close():void;
        collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        convertCollapseDir(collapseDir: Object):void;
        expand(animate?: boolean):Ext.panel.Panel;
        getCollapsed():any;
        getHeader():void;
        setGlyph(newGlyph: any):void;
        setIcon(newIcon: string):void;
        setIconCls(newIconCls: string):void;
        setTitle(newTitle: string):void;
        toggleCollapse():Ext.panel.Panel;
    }
    export class Proxy extends Ext.Base {
        panel: Ext.panel.Panel;
        constructor(panel: Ext.panel.Panel, config?: Object);
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
        syncRowHeights():void;
    }
    export class Tool extends Ext.Component {
        isTool: boolean;
        constructor(config: any);
        setType(type: string):Ext.panel.Tool;
    }
}
declare module Ext.perf {
    export class Accumulator extends Ext.Base {
    }
    export class Monitor {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static statics():Ext.Class;
    }
}
declare module Ext.picker {
    export class Color extends Ext.Component {
        colors: string[];
        constructor(config: any);
        clear():void;
        getValue():string;
        select(color: string, suppressEvent?: boolean):void;
    }
    export class Date extends Ext.Component {
        constructor(config: any);
        getDayInitial(value: Object):string;
        getValue():Date;
        hideMonthPicker(animate?: boolean):Ext.picker.Date;
        selectToday():Ext.picker.Date;
        setDisabledDates(disabledDates: any):Ext.picker.Date;
        setDisabledDays(disabledDays: number[]):Ext.picker.Date;
        setMaxDate(value: Date):Ext.picker.Date;
        setMinDate(value: Date):Ext.picker.Date;
        setValue(value: Date):Ext.picker.Date;
        showMonthPicker(animate?: boolean):Ext.picker.Date;
        showNextMonth(e: Object):Ext.picker.Date;
        showNextYear():Ext.picker.Date;
        showPrevMonth(e: Object):Ext.picker.Date;
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
        constructor(config: Object);
        createProxy(target: any):Ext.dom.Element;
    }
    export class Resizer extends Ext.Base {
        el: Ext.dom.Element;
        hasListeners: Object;
        isObservable: boolean;
        originalTarget: any;
        resizeTracker: Ext.resizer.ResizeTracker;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getEl():Ext.dom.Element;
        getTarget():any;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resizeTo(width: number, height: number):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
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
        setCurrentPosition(position: Object, suppressEvent: boolean):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        constructor();
        getHeaderConfig():void;
        onHeaderClick(headerCt: Object, header: Object, e: Object):void;
        renderer(value: Object, metaData: Object, record: Object, rowIndex: Object, colIndex: Object, store: Object, view: Object):void;
    }
    export class DataViewModel extends Ext.selection.Model {
        constructor(cfg: Object);
    }
    export class Model extends Ext.util.Observable {
        selected: Ext.util.MixedCollection;
        constructor(cfg: Object);
        bindStore(store: Object, initial: Object):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        deselect(records: any, suppressEvent?: boolean):void;
        deselectAll(suppressEvent?: boolean):void;
        deselectRange(startRow: any, endRow: any):void;
        getCount():number;
        getLastSelected():Ext.data.Model;
        getSelection():Ext.data.Model[];
        getSelectionMode():string;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():Object;
        hasSelection():boolean;
        isFocused(record: Ext.data.Model):void;
        isLocked():boolean;
        isRangeSelected(from: any, to: any):boolean;
        isSelected(record: any):boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        select(records: any, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectAll(suppressEvent: boolean):void;
        selectRange(startRow: any, endRow: any, keepExisting?: boolean):void;
        setLastFocused(record: Ext.data.Model):void;
        setLocked(locked: boolean):void;
        setSelectionMode(selMode: string):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class RowModel extends Ext.selection.Model {
        constructor();
        getCurrentPosition():void;
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
        constructor(config?: Object);
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
        constructor(config?: Object);
    }
    export class LocalStorageProvider extends Ext.state.Provider {
        constructor();
    }
    export class Manager {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clear(name: string):void;
        static get(name: string, defaultValue: Object):Object;
        static getInitialConfig(name?: string):any;
        static getProvider():Ext.state.Provider;
        static initConfig(config: Object):Ext.Base;
        static set(name: string, value: Object):void;
        static setProvider(stateProvider: Ext.state.Provider):void;
        static statics():Ext.Class;
    }
    export class Provider extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clear(name: string):void;
        clearListeners():void;
        clearManagedListeners():void;
        decodeValue(value: string):Object;
        enableBubble(eventNames: any):void;
        encodeValue(value: Object):string;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        get(name: string, defaultValue: Object):Object;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        set(name: string, value: Object):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class Stateful extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config: Object);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        addStateEvents(events: any):void;
        applyState(state: Object):void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        getState():Object;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        savePropToState(propName: string, state: Object, stateName?: string):boolean;
        savePropsToState(propNames: any, state: Object):Object;
        saveState():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
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
        register(config: Object):void;
        unregister(el: any):void;
    }
    export class QuickTipManager {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static destroy():void;
        static disable():void;
        static enable():void;
        static getInitialConfig(name?: string):any;
        static getQuickTip():Ext.tip.QuickTip;
        static init(autoRender?: boolean, config?: Object):void;
        static initConfig(config: Object):Ext.Base;
        static isEnabled():boolean;
        static register(config: Object):void;
        static statics():Ext.Class;
        static tips(config: Object):void;
        static unregister(el: any):void;
    }
    export class Tip extends Ext.panel.Panel {
        constructor(config: any);
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
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        doRefresh():void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():Object;
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
        constructor(text: Object);
        setText(text: string):void;
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
        constructor(config: Object);
        collapseAll(callback?: Function, scope?: Object):void;
        collapseNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: Object):void;
        expandAll(callback?: Function, scope?: Object):void;
        expandNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: Object):void;
        expandPath(path: string, field?: string, separator?: string, callback?: Function, scope?: Object):void;
        getChecked():Ext.data.NodeInterface[];
        getRootNode():Ext.data.NodeInterface;
        selectPath(path: string, field?: string, separator?: string, callback?: Function, scope?: Object):void;
        setRootNode(root: any):Ext.data.NodeInterface;
    }
    export class View extends Ext.view.Table {
        isTreeView: boolean;
        constructor(config: Object);
        collapse(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: Object):void;
        expand(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: Object):void;
        getTreeStore():void;
        toggle(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: Object):void;
    }
    export class ViewDragZone extends Ext.view.DragZone {
        constructor(config: Object);
    }
    export class ViewDropZone extends Ext.view.DropZone {
        constructor(config: Object);
    }
}
declare module Ext.tree.plugin {
    export class TreeViewDragDrop extends Ext.AbstractPlugin {
        constructor(config?: Object);
    }
}
declare module Ext.util {
    export class AbstractMixedCollection extends Ext.Base {
        hasListeners: Object;
        isMixedCollection: boolean;
        isObservable: boolean;
        constructor(allowFunctions: Object, keyFn: Object);
        add(key: any, obj?: Object):Object;
        addAll(objs: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.MixedCollection;
        collect(property: string, root?: string, allowBlank?: boolean):any[];
        contains(o: Object):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope?: Object):void;
        eachKey(fn: Function, scope?: Object):void;
        enableBubble(eventNames: any):void;
        filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        filterBy(fn: Function, scope?: Object):Ext.util.MixedCollection;
        find():void;
        findBy(fn: Function, scope?: Object):Object;
        findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: Function, scope?: Object, start?: number):number;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        first():Object;
        get(key: any):Object;
        getAt(index: number):Object;
        getByKey(key: any):Object;
        getCount():number;
        getKey(item: Object):Object;
        getRange(startIndex?: number, endIndex?: number):any[];
        hasListener(eventName: string):boolean;
        indexOf(o: Object):number;
        indexOfKey(key: string):number;
        insert(index: number, key: any, o?: any):Object;
        last():Object;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        remove(o: Object):Object;
        removeAll(items?: any[]):Ext.util.MixedCollection;
        removeAt(index: number):Object;
        removeAtKey(key: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        removeRange(index: number, removeCount?: number):Object;
        replace(key: string, o: Object):Object;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        sum(property: string, root?: string, start?: number, end?: number):number;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        updateKey(oldKey: Object, newKey: Object):void;
    }
    export class Animate extends Ext.Base {
        animate(config: Object):Object;
        getActiveAnimation():any;
        hasActiveFx():any;
        sequenceFx():Object;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():Object;
    }
    export class Bindable extends Ext.Base {
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Ext.data.Store):Object;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class CSS {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static createRule(styleSheet: CSSStyleSheet, selector: string, property: string):CSSStyleRule;
        static createStyleSheet(cssText: string, id: string):CSSStyleSheet;
        static getInitialConfig(name?: string):any;
        static getRule(selector: any, refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):Object;
        static initConfig(config: Object):Ext.Base;
        static refreshCache():Object;
        static removeStyleSheet(id: string):void;
        static statics():Ext.Class;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: any, property: string, value: string):boolean;
    }
    export class ClickRepeater extends Ext.util.Observable {
        constructor(el: any, config?: Object);
        disable(force: Object):void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class ComponentDragger extends Ext.dd.DragTracker {
        constructor(comp: Object, config?: Object);
    }
    export class Cookies {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clear(name: string, path?: string):void;
        static get(name: string):Object;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static set(name: string, value: Object, expires?: Object, path?: string, domain?: string, secure?: boolean):void;
        static statics():Ext.Class;
    }
    export class DelayedTask {
        id: number;
        constructor(fn?: Function, scope?: Object, args?: any[], cancelOnDelay?: boolean);
        cancel():void;
        delay(newDelay: number, newFn?: Function, newScope?: Object, newArgs?: any[]):void;
    }
    export class ElementContainer extends Ext.Base {
        constructor();
        addChildEls():void;
        removeChildEls(testFn: Function):void;
    }
    export class Event extends Ext.Base {
        isEvent: boolean;
    }
    export class Filter extends Ext.Base {
        disabled: boolean;
        constructor(config?: Object);
        setFilterFn(filterFn: Function):void;
        setValue(value: any):void;
        static createFilterFn(filters: Ext.util.Filter[]):Function;
    }
    export class Floating extends Ext.Base {
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
        static attributes(attributes: Object):void;
        static capitalize(string: string):string;
        static currency(value: any, sign?: string, decimals?: number, end?: boolean):string;
        static date(value: any, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: Object, defaultValue?: string):string;
        static ellipsis(value: string, length: number, word?: boolean):string;
        static escapeRegex(str: string):string;
        static fileSize(size: any):string;
        static format(string: string, ...values: any[]):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static leftPad(string: string, size: number, character?: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(v: string):string;
        static number(v: number, format: string):string;
        static numberRenderer(format: string):Function;
        static parseBox(v: any):Object;
        static plural(value: number, singular: string, plural?: string):void;
        static round(value: any, precision: number):number;
        static stripScripts(value: Object):string;
        static stripTags(value: Object):string;
        static substr(value: string, start: number, length: number):string;
        static trim(string: string):string;
        static undef(value: Object):Object;
        static uppercase(value: string):string;
        static usMoney(value: any):string;
    }
    export class Grouper extends Ext.util.Sorter {
        constructor(config: Object);
        getGroupString(instance: Ext.data.Model):string;
    }
    export class HashMap extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        constructor(config?: Object);
        add(key: any, o?: Object):Object;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clear(initial: Object):Ext.util.HashMap;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.HashMap;
        contains(value: Object):boolean;
        containsKey(key: string):boolean;
        each(fn: Function, scope?: Object):Ext.util.HashMap;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        get(key: string):Object;
        getCount():number;
        getKey(o: Object):string;
        getKeys():any[];
        getValues():any[];
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        remove(o: Object):boolean;
        removeAtKey(key: string):boolean;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        replace(key: string, value: Object):Object;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class History {
        static fieldId: string;
        static hasListeners: Object;
        static iframeId: string;
        static isObservable: boolean;
        static self: Ext.Class;
        static useTopWindow: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static back():void;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: Object[]):boolean;
        static fireEventArgs(eventName: string, args: Object[]):boolean;
        static forward():void;
        static getInitialConfig(name?: string):any;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: Object):void;
        static initConfig(config: Object):Ext.Base;
        static mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        static mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        static on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        static relayEvents(origin: Object, events: string[], prefix?: string):Object;
        static removeListener(eventName: string, fn: Function, scope?: Object):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: Object):void;
    }
    export class Inflector {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static isTransnumeral(word: string):boolean;
        static ordinalize(number: number):string;
        static plural(matcher: RegExp, replacer: string):void;
        static pluralize(word: string):string;
        static singular(matcher: RegExp, replacer: string):void;
        static singularize(word: string):string;
        static statics():Ext.Class;
    }
    export class KeyMap extends Ext.Base {
        constructor(config: Object);
        addBinding(binding: any):void;
        disable():void;
        enable():void;
        isEnabled():boolean;
        on(key: any, fn: Function, scope?: Object):void;
        removeBinding(binding: Object):void;
        setDisabled(disabled: boolean):void;
        un(key: any, fn: Function, scope?: Object):void;
    }
    export class KeyNav extends Ext.Base {
        constructor(config: Object);
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class LruCache extends Ext.util.HashMap {
        constructor(config?: Object);
        prune():void;
    }
    export class Memento extends Ext.Base {
        target: Object;
        constructor(target: Object, props: any);
        capture(props: any, target: Object):void;
        remove(props: any):void;
        restore(props: any, clear: boolean, target: Object):void;
        restoreAll(clear: boolean, target: Object):void;
    }
    export class MixedCollection extends Ext.util.AbstractMixedCollection {
        isSortable: boolean;
        sorters: Ext.util.MixedCollection;
        constructor(config: Object);
        findInsertionIndex(newItem: Object, sorterFn?: Function):number;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        initSortable():void;
        reorder(mapping: Object):void;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class Observable extends Ext.Base {
        hasListeners: Object;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: Object[]):boolean;
        fireEventArgs(eventName: string, args: Object[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: Object, options?: Object):Object;
        mun(item: any, ename: any, fn?: Function, scope?: Object):void;
        on(eventName: any, fn?: Function, scope?: Object, options?: Object):Object;
        relayEvents(origin: Object, events: string[], prefix?: string):Object;
        removeListener(eventName: string, fn: Function, scope?: Object):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: Object):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: Object):void;
        static capture(o: Ext.util.Observable, fn: Function, scope?: Object):void;
        static observe(c: Function, listeners: Object):void;
        static releaseCapture(o: Ext.util.Observable):void;
    }
    export class Offset extends Ext.Base {
        constructor(x: Object, y: Object);
    }
    export class Point extends Ext.util.Region {
        constructor(x: number, y: number);
        isContainedBy(region: any):boolean;
        isWithin(p: any, threshold: any):boolean;
        roundedEquals(p: any):boolean;
        translate(x: any, y: number):Ext.util.Region;
        static fromEvent(e: any):Ext.util.Point;
    }
    export class Positionable extends Ext.Base {
        alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        calculateConstrainedPosition(constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]):number[];
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: Object):number[];
        getBox(contentBox?: boolean, local?: boolean):Object;
        getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getOffsetsTo(offsetsTo: any):number[];
        getRegion():Ext.util.Region;
        getViewRegion():Ext.util.Region;
        getX():number;
        getXY():number[];
        getY():number;
        move(direction: string, distance: number, animate?: any):void;
        removeAnchor():Ext.util.Positionable;
        setBox(box: Object, animate?: any):Ext.util.Positionable;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: any, y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        setX(The: number, animate?: any):Ext.util.Positionable;
        setXY(pos: number[], animate?: any):Ext.util.Positionable;
        setY(The: number, animate?: any):Ext.util.Positionable;
        translatePoints(x: any, y?: number):Object;
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
        writeTo(to: Object):Object;
    }
    export class Queue extends Ext.Base {
        constructor();
        clear():void;
        getCount():number;
        remove(obj: Object):Object;
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
        static from(o: Object):Ext.util.Region;
        static getRegion(el: any):Ext.util.Region;
    }
    export class Renderable extends Ext.Base {
        afterRender():void;
        doAutoRender():void;
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: any):HTMLElement;
        initRenderData():Object;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        render(container?: any, position?: any):void;
    }
    export class Sortable extends Ext.Base {
        isSortable: boolean;
        sorters: Ext.util.MixedCollection;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        initSortable():void;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static createComparator(sorters: Ext.util.Sorter[]):Function;
    }
    export class Sorter extends Ext.Base {
        constructor(config: Object);
        setDirection(direction: string):void;
        toggle():void;
        updateSortFunction(fn?: Function):void;
    }
    export class TaskManager {
        static self: Ext.Class;
        static callOverridden(args: any):Object;
        static callParent(args: any):Object;
        static callSuper(args: any):Object;
        static destroy():void;
        static getInitialConfig(name?: string):any;
        static initConfig(config: Object):Ext.Base;
        static newTask(config: Object):void;
        static start(task: Object):Object;
        static statics():Ext.Class;
        static stop(task: Object):Object;
        static stopAll():void;
    }
    export class TaskRunner extends Ext.Base {
        constructor(interval?: any);
        newTask(config: Object):void;
        start(task: Object):Object;
        stop(task: Object):Object;
        stopAll():void;
    }
    export class TextMetrics extends Ext.Base {
        constructor(bindTo: any, fixedWidth?: number);
        bind(el: any):void;
        getHeight(text: string):number;
        getSize(text: string):Object;
        getWidth(text: string):number;
        setFixedWidth(width: number):void;
        static destroy():void;
        static measure(el: any, text: string, fixedWidth?: number):Object;
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
        clearSelections():void;
        collectData(records: Ext.data.Model[], startIndex: number):Object[];
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
        getStoreListeners():Object;
        indexOf(nodeInfo: any):number;
        isSelected(node: any):boolean;
        onBindStore(store: Object, initial: Object, propName: Object):void;
        onUnbindStore(store: Object):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(index: number):void;
        select(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        child(selector?: any):Object;
        down(selector?: any):Object;
        getInnerTpl(displayField: string):string;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: Object):Ext.Component[];
        queryById(id: string):Ext.Component;
    }
    export class BoundListKeyNav extends Ext.util.KeyNav {
        constructor(config: Object);
        highlightAt(index: number):void;
        selectHighlighted(e: Object):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(config: Object);
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(config: Object);
    }
    export class NodeCache extends Ext.Base {
        constructor(view: Object);
        clear(removeDom?: boolean):void;
        fill(els: HTMLElement[]):Ext.view.NodeCache;
        indexOf(el: any):number;
        removeElement(el: any, removeDom?: boolean):void;
        replaceElement(el: any, replacement: any, domReplace?: boolean):Ext.view.NodeCache;
        scroll(newRecords: Ext.data.Model[], direction: number, removeCount: number):void;
    }
    export class Table extends Ext.view.View {
        constructor(config: Object);
        addRowCls(rowInfo: any, cls: string):void;
        autoSizeColumn(header: any):void;
        expandToFit(header: Object):void;
        focusRow(row: any, delay?: any):void;
        getBodySelector():void;
        getCellSelector(header?: Ext.grid.column.Column):void;
        getColumnSizerSelector(header: Object):void;
        getDataRowSelector():void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getNodeContainerSelector():void;
        getRowClass(record: Ext.data.Model, index: number, rowParams: Object, store: Ext.data.Store):string;
        removeRowCls(rowInfo: any, cls: string):void;
        walkRecs(startRec: Ext.data.Model, distance: number):void;
        walkRows(startRow: number, distance: number):void;
    }
    export class TableLayout extends Ext.layout.component.Auto {
        constructor(config: Object);
    }
    export class View extends Ext.view.AbstractView {
        constructor(config: any);
        clearHighlight():void;
        focusNode(rec: Ext.data.Model):void;
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
        buttonText: Object;
        defaultTextHeight: number;
        minProgressWidth: number;
        minPromptWidth: number;
        constructor(cfg: Object);
        alert(title: string, msg: string, fn?: Function, scope?: Object):Ext.window.MessageBox;
        confirm(title: string, msg: string, fn?: Function, scope?: Object):Ext.window.MessageBox;
        progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        prompt(title: string, msg: string, fn?: Function, scope?: Object, multiline?: any, value?: string):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        wait(msg: string, title?: string, config?: Object):Ext.window.MessageBox;
    }
    export class Window extends Ext.panel.Panel {
        isWindow: boolean;
        constructor(config: any);
        getDefaultFocus():void;
        maximize(animate: boolean):Ext.window.Window;
        minimize():Ext.window.Window;
        restore(animate: Object):Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}