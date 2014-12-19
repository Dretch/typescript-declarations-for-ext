// Ext type declarations generated on Fri Dec 19 2014 22:30:09 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static USE_NATIVE_JSON: boolean;
    static baseCSSPrefix: string;
    static emptyFn: Function;
    static emptyString: any;
    static enableFx: boolean;
    static enableGarbageCollector: boolean;
    static enableListenerCollection: boolean;
    static enumerables: string[];
    static frameStartTime: any;
    static identityFn: Function;
    static isDomReady: boolean;
    static isReady: boolean;
    static isSecure: boolean;
    static name: string;
    static privateFn: Function;
    static apply(object: any, config: any, defaults?: any):any;
    static applyIf(object: any, config: any):any;
    static batchLayouts(fn: Function, scope?: any):void;
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: any):Function;
    static callback(callback: any, scope?: any, args?: any[], delay?: number, caller?: any, defaultScope?: any):any;
    static checkVersion(specs: any, matchAll?: boolean):boolean;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static coerce(from: any, to: any):any;
    static copyTo(dest: any, source: any, names: any, usePrototypeKeys?: boolean):any;
    static create(name?: string, ...args: any[]):any;
    static createByAlias(alias: string, ...args: any[]):any;
    static decode(json: string, safe?: boolean):any;
    static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
    static define(className: string, data: any, createdFn?: Function):Ext.Base;
    static destroy(...args: any[]):void;
    static destroyMembers(object: any, ...args: string[]):void;
    static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
    static encode(o: any):string;
    static exclude(excludes: any):any;
    static extend(superclass: Function, overrides: any):Function;
    static factory(config: any, classReference: string, instance?: any, aliasNamespace?: any):void;
    static flatten(array: any[]):any[];
    static fly(dom: any, named?: string):Ext.dom.Element;
    static get(element: any):Ext.dom.Element;
    static getBody():Ext.dom.Element;
    static getClass(object: any):Ext.Class;
    static getClassName(object: any):string;
    static getCmp(id: string):any;
    static getDoc():Ext.dom.Element;
    static getDom(el: any):HTMLElement;
    static getHead():Ext.dom.Element;
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any):Ext.data.Store;
    static getVersion(packageName?: string):Ext.Version;
    static getWin():Ext.dom.Element;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(o?: any, prefix?: string):string;
    static interval(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
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
    static max(array: any, comparisonFn?: (max: any, item: any) => any):any;
    static mean(array: any[]):number;
    static merge(destination: any, ...object: any[]):any;
    static min(array: any, comparisonFn?: (min: any, item: any) => any):any;
    static namespace(...namespaces: string[]):any;
    static now():number;
    static ns(...namespaces: string[]):any;
    static num(value: any, defaultValue: number):number;
    static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
    static onReady(fn: Function, scope?: any, options?: any):void;
    static override(target: any, overrides: any):void;
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any, propertyName: string):any[];
    static query(selector: string, asDom?: boolean, root?: any):any;
    static regStore(id: string, config: any):void;
    static removeNode(node: HTMLElement):void;
    static require(expressions: any, fn?: Function, scope?: any):void;
    static resumeLayouts(flush?: boolean):void;
    static returnId(o: any):void;
    static returnTrue():void;
    static select():void;
    static setGlyphFontFamily(fontFamily: string):void;
    static setVersion(packageName: string, version: any):Ext;
    static sum(array: any[]):number;
    static suspendLayouts():void;
    static syncRequire(expressions: any, fn?: Function, scope?: any):void;
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
        create(config: any, defaultType: string):any;
        each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        get(id: string):any;
        getCount():number;
        isRegistered(type: string):boolean;
        onAvailable(id: string, fn: Function, scope: any):void;
        register(item: any):void;
        registerType(type: string, cls: Function):void;
        unregister(item: any):void;
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static method: string;
        static self: Ext.Class;
        static timeout: number;
        static url: string;
        static abort(request?: any):void;
        static abortAll():void;
        static addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clearListeners():void;
        static destroy():void;
        static enableBubble(events: any):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getAsync():boolean;
        static getAutoAbort():boolean;
        static getBinary():boolean;
        static getBubbleEvents():any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCors():boolean;
        static getDefaultHeaders():any;
        static getDefaultPostHeader():string;
        static getDefaultXdrContentType():string;
        static getDefaultXhrHeader():string;
        static getDisableCaching():boolean;
        static getDisableCachingParam():string;
        static getExtraParams():any;
        static getId():string;
        static getInitialConfig(name?: string):any;
        static getIsXdr():boolean;
        static getListeners():any;
        static getMethod():string;
        static getPassword():string;
        static getTimeout():number;
        static getUrl():string;
        static getUseDefaultXhrHeader():boolean;
        static getUsername():string;
        static getWithCredentials():boolean;
        static hasListener(eventName: string):boolean;
        static initConfig(config: any):Ext.Base;
        static isLoading(request?: any):boolean;
        static isSuspended(eventName?: string):boolean;
        static mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        static parseStatus(status: number):any;
        static relayEvents(object: any, events: any):Ext.mixin.Observable;
        static removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        static request(options: any):any;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueuedEvents: boolean):void;
        static setAsync(async: boolean):void;
        static setAutoAbort(autoAbort: boolean):void;
        static setBinary(binary: boolean):void;
        static setBubbleEvents(bubbleEvents: any):void;
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
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        static upload(form: any, url: string, params: string, options: any):void;
    }
    export class AnimationQueue {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static start(fn: Function, scope?: any, args?: any):void;
        static statics():Ext.Class;
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
        static max(array: any, comparisonFn?: (max: any, item: any) => any):any;
        static mean(array: any[]):number;
        static merge(array1: any[], array2: any[], etc: any[]):any[];
        static min(array: any, comparisonFn?: (min: any, item: any) => any):any;
        static numericSortFn(a: any, b: any):void;
        static pluck(array: any, propertyName: string):any[];
        static push(target: any[], ...elements: any[]):any[];
        static remove(array: any[], item: any):any[];
        static replace(array: any[], index: number, removeCount: number, insert?: any[]):any[];
        static slice(array: any[], begin: number, end: number):any[];
        static some(array: any[], fn: (item: any, index: number, array: any[]) => any, scope: any):boolean;
        static sort(array: any[], sortFn?: (a: any, b: any) => number):any[];
        static splice(array: any[], index: number, removeCount: number, ...elements: any[]):any[];
        static sum(array: any[]):number;
        static toArray(iterable: any, start?: number, end?: number):any[];
        static toMap(array: any[], getKey?: any, scope?: any):any;
        static toValueMap(array: any[], getKey?: any, scope?: any, arrayify?: number):any;
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
        isConfiguring: boolean;
        isFirstInstance: boolean;
        isInstance: boolean;
        self: Ext.Class;
        callOverridden(args: any):any;
        callParent(args: any):any;
        callSuper(args: any):any;
        getConfig(name?: string, peek?: boolean):any;
        getInitialConfig(name?: string):any;
        initConfig(config: any):Ext.Base;
        setConfig(name: any, value?: any):Ext.Base;
        statics():Ext.Class;
        static addMembers(members: any, isStatic?: boolean, privacy?: boolean):void;
        static addStatics(members: any):Ext.Base;
        static callParent(args: any):void;
        static callSuper(args: any):void;
        static create():any;
        static createAlias(alias: any, origin: any):void;
        static getName():string;
        static override(members: any):Ext.Base;
    }
    export class Class {
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
    export class Component extends Ext.Base {
        _isLayoutRoot: boolean;
        contentPaddingProperty: string;
        defaultBindProperty: string;
        floatParent: Ext.container.Container;
        frameSize: any;
        hasListeners: any;
        isComponent: boolean;
        isObservable: boolean;
        maskOnDisable: boolean;
        ownerCt: Ext.container.Container;
        rendered: boolean;
        scrollFlags: any;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(config: any);
        addClass(cls: any):Ext.Component;
        addCls(cls: any):Ext.Component;
        addClsWithUI(classes: any, skip?: boolean):void;
        addListener(element: any, listeners: any, scope: any, options: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        addPropertyToState(state: any, propName: string, value?: string):boolean;
        addStateEvents(events: any):void;
        addUIClsToElement(uiCls: string):void;
        afterComponentLayout(width: number, height: number, oldWidth: any, oldHeight: any):void;
        afterHide(callback?: Function, scope?: any):void;
        afterRender():void;
        afterSetPosition(x: number, y: number):void;
        afterShow(animateTarget?: any, callback?: Function, scope?: any):void;
        alignTo(element: any, position?: string, offsets?: number[]):Ext.util.Positionable;
        animate(animObj: any):any;
        applyState(state: any):void;
        beforeBlur(e: Ext.event.Event):void;
        beforeComponentLayout(adjWidth: number, adjHeight: number):void;
        beforeDestroy():void;
        beforeFocus(e: Ext.event.Event):void;
        beforeLayout():void;
        beforeShow():void;
        bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        cancelFocus():void;
        center():Ext.Component;
        clearListeners():void;
        clearManagedListeners():void;
        cloneConfig(overrides: any):Ext.Component;
        disable(silent?: boolean):void;
        doComponentLayout():Ext.Component;
        doConstrain(constrainTo?: any):void;
        enable(silent?: boolean):void;
        enableBubble(eventNames: any):void;
        ensureAttachedToBody(runLayout?: boolean):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: any):Ext.container.Container;
        findPlugin(ptype: string):Ext.plugin.Abstract;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        focus(selectText?: any, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        forceComponentLayout(options?: any):void;
        getActiveAnimation():any;
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAlwaysOnTop():any;
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getBind():any;
        getBox(contentBox?: boolean, local?: boolean):any;
        getBubbleTarget():void;
        getChildEls():any;
        getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        getController():any;
        getData():any;
        getDefaultListenerScope():boolean;
        getEl():Ext.dom.Element;
        getHeight():number;
        getId():string;
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getInsertPosition(position: any):HTMLElement;
        getItemId():string;
        getLoader():Ext.ComponentLoader;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getMaskTarget():void;
        getMaxHeight():number;
        getMaxWidth():number;
        getMinHeight():number;
        getMinWidth():number;
        getOffsetsTo(offsetsTo: any):number[];
        getPlugin(pluginId: string):Ext.plugin.Abstract;
        getPosition(local?: boolean):number[];
        getPublishes():any;
        getRefOwner():void;
        getReference():string;
        getRegion():Ext.util.Region;
        getScrollX():number;
        getScrollY():number;
        getSession():any;
        getSize(contentSize?: boolean):any;
        getSizeModel(ownerCtSizeModel: any):any;
        getState():any;
        getTabIndex():number;
        getViewModel():any;
        getViewRegion():Ext.util.Region;
        getWidth():number;
        getX():number;
        getXType():string;
        getXTypes():string;
        getXY():number[];
        getY():number;
        hasActiveFx():any;
        hasCls(className: string):boolean;
        hasListener(eventName: string):boolean;
        hasUICls(cls: string):void;
        hide(animateTarget?: any, callback?: Function, scope?: any):Ext.Component;
        initComponent():void;
        initEvents():void;
        initFocusable():void;
        initFocusableEvents():void;
        initInheritedState(inheritedState: any):void;
        initRenderData():any;
        is(selector: string):boolean;
        isDescendantOf(container: Ext.container.Container):boolean;
        isDisabled():boolean;
        isDraggable():boolean;
        isDroppable():boolean;
        isFloating():boolean;
        isHidden():boolean;
        isLayoutRoot():void;
        isLayoutSuspended():boolean;
        isMasked(deep?: boolean):boolean;
        isSuspended(event?: string):boolean;
        isVisible(deep?: boolean):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        lookupController(skipThis?: boolean):Ext.app.ViewController;
        lookupSession(skipThis?: boolean):Ext.data.Session;
        lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        mask(msg?: string, msgCls?: string):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        move(direction: string, distance: number):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        nextNode(selector?: string):Ext.Component;
        nextSibling(selector?: string):Ext.Component;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onAdded(container: Ext.container.Container, pos: number, instanced: boolean):void;
        onBoxReady(width: number, height: number):void;
        onDestroy():void;
        onDisable():void;
        onEnable():void;
        onHide(animateTarget?: any, callback?: Function, scope?: any):void;
        onPosition(x: number, y: number):void;
        onRemoved(destroying: boolean):void;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        onResize(width: any, height: any, oldWidth: any, oldHeight: any):void;
        onShow(animateTarget?: any, callback?: Function, scope?: any):void;
        onShowComplete(callback?: Function, scope?: any):void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        previousNode(selector?: string):Ext.Component;
        previousSibling(selector?: string):Ext.Component;
        publishState(property?: string, value?: any):void;
        registerFloatingItem(cmp: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeClass(cls: any):Ext.Component;
        removeCls(cls: any):Ext.Component;
        removeClsWithUI(cls: any):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        removeUIClsFromElement(uiCls: string):void;
        render(container?: any, position?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        scrollTo(x: number, y: number, animate?: any):void;
        sequenceFx():any;
        setAlwaysOnTop(alwaysOnTop: any):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setBind(bind: any):void;
        setBorder(border: any):void;
        setBox(box: any):Ext.util.Positionable;
        setChildEls(childEls: any):void;
        setController(controller: any):void;
        setData(data: any):void;
        setDefaultListenerScope(defaultListenerScope: boolean):void;
        setDisabled(disabled: boolean):void;
        setDock(dock: any):Ext.Component;
        setDocked(dock: any):Ext.Component;
        setHeight(height: number):Ext.Component;
        setHidden(hidden: boolean):Ext.Component;
        setLoading(load: any):Ext.LoadMask;
        setLocalX(x: any):Ext.util.Positionable;
        setLocalXY(x: any, y: any):Ext.util.Positionable;
        setLocalY(y: any):Ext.util.Positionable;
        setMargin(margin: any):void;
        setMaxHeight(maxHeight: number):void;
        setMaxWidth(maxWidth: number):void;
        setMinHeight(minHeight: number):void;
        setMinWidth(minWidth: number):void;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        setPosition(x: any, y?: number, animate?: any):Ext.Component;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setRegion(region: string):string;
        setScrollX(x: number):void;
        setScrollY(y: number):void;
        setSession(session: any):void;
        setSize(width: any, height: any):Ext.Component;
        setStyle(property: any, value?: string):Ext.Component;
        setTabIndex(newTabIndex: number):void;
        setUI(ui: string):void;
        setViewModel(viewModel: any):void;
        setVisible(visible: boolean):Ext.Component;
        setWeight(weight: number):number;
        setWidth(width: number):Ext.Component;
        setX(x: any, animate: any):Ext.util.Positionable;
        setXY(xy: any, animate: any):Ext.util.Positionable;
        setY(y: any, animate: any):Ext.util.Positionable;
        show(animateTarget?: any, callback?: Function, scope?: any):Ext.Component;
        showAt(x: any, y?: number, animate?: any):Ext.Component;
        showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
        translatePoints(x: any, y?: number):any;
        un(eventName: string, fn: Function, scope?: any):void;
        unmask():void;
        up(selector?: any, limit?: any):Ext.container.Container;
        update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        updateBox(box: any):Ext.Component;
        updateLayout(options?: any):void;
        static cancelLayout(comp: Ext.Component):void;
        static flushLayouts():void;
        static resumeLayouts(flush?: boolean):void;
        static suspendLayouts():void;
        static updateLayout(comp: Ext.Component, defer?: boolean):void;
    }
    export class ComponentLoader extends Ext.ElementLoader {
    }
    export class ComponentManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static create(config: any, defaultType?: string):Ext.Component;
        static destroy():void;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static get(id: string):any;
        static getAll():any[];
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static isRegistered(component: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static registerType(type: string, cls: Function):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class ComponentQuery {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static is(component: Ext.Component, selector: string):boolean;
        static query(selector: string, root?: Ext.container.Container):Ext.Component[];
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static visitPostOrder(selector: any, root: string, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        static visitPreOrder(selector: any, root: string, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class Config {
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
        static parse(input: string, format: string, strict?: boolean):any;
        static subtract(date: Date, interval: string, value: number):Date;
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
        abort():void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        isSuspended(event?: string):boolean;
        load(options: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setTarget(target: any):void;
        startAutoRefresh(interval: number, options?: any):void;
        stopAutoRefresh():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Error {
        static ignore: boolean;
        static handle(err: any):void;
        static raise(err: any):void;
    }
    export class EventManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static addListener(el: any, eventName: string, handler?: any, scope?: any, options?: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getId(element: any):string;
        static getInitialConfig(name?: string):any;
        static getPageX(event: any):number;
        static getPageXY(event: any):number[];
        static getPageY(event: any):number;
        static getRelatedTarget(event: any):HTMLElement;
        static getTarget(event: any):HTMLElement;
        static initConfig(config: any):Ext.Base;
        static on(el: any, eventName: string, handler?: any, scope?: any, options?: any):void;
        static onWindowResize(fn: Function, scope: any, options?: boolean):void;
        static onWindowUnload(fn: Function, scope: any, options: boolean):void;
        static preventDefault(event: Event):void;
        static purgeElement(el: any, eventName?: string):void;
        static removeAll(el: any):void;
        static removeListener(el: any, eventName: string, fn: Function, scope: any):void;
        static removeResizeListener(fn: Function, scope: any):void;
        static removeUnloadListener(fn: Function, scope: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static stopEvent(event: Event):void;
        static stopPropagation(event: Event):void;
        static un(el: any, eventName: string, fn: Function, scope: any):void;
    }
    export class Evented extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Factory {
        create(config?: any, defaultType?: string):any;
        define(type: string, config?: any):Function;
    }
    export class FocusManager {
        static enabled: boolean;
        static focusedCmp: Ext.Component;
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isObservable: boolean;
        static self: Ext.Class;
        static whitelist: string[];
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addXTypeToWhitelist(xtype: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static disable():void;
        static enable(options: any):void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static initConfig(config: any):Ext.Base;
        static isSuspended(event?: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeXTypeFromWhitelist(xtype: any):void;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Function {
        static alias(object: any, methodName: string):Function;
        static bind(fn: Function, scope?: any, args?: any[], appendArgs?: any):Function;
        static bindCallback(callback: any, scope: any, args: any, delay: any, caller: any):Function;
        static clone(method: Function):Function;
        static createBarrier(count: number, fn: Function, scope: any):void;
        static createBuffered(fn: Function, buffer: number, scope?: any, args?: any[]):Function;
        static createDelayed(fn: Function, delay: number, scope?: any, args?: any[], appendArgs?: any):Function;
        static createInterceptor(origFn: Function, newFn: Function, scope?: any, returnValue?: any):Function;
        static createSequence(originalFn: Function, newFn: Function, scope?: any):Function;
        static createThrottled(fn: Function, interval: number, scope?: any):Function;
        static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
        static flexSetter(setter: (name: string, value: any) => any):Function;
        static interceptAfter(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interceptBefore(object: any, methodName: string, fn: Function, scope?: any):Function;
        static interval(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
        static pass(fn: Function, args: any[], scope?: any):Function;
    }
    export class GlobalEvents {
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clearListeners():void;
        static destroy():void;
        static enableBubble(events: any):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getBubbleEvents():any;
        static getConfig(name?: string, peek?: boolean):any;
        static getId():string;
        static getInitialConfig(name?: string):any;
        static getListeners():any;
        static hasListener(eventName: string):boolean;
        static initConfig(config: any):Ext.Base;
        static isSuspended(eventName?: string):boolean;
        static mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        static relayEvents(object: any, events: any):Ext.mixin.Observable;
        static removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        static removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueuedEvents: boolean):void;
        static setBubbleEvents(bubbleEvents: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        static unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Img extends Ext.Component {
        constructor(config: any);
        setSrc(src: string):void;
    }
    export class Inventory {
        getAliasesByName(name: string):any[];
        getNameByAlias(alias: string):string;
        getNameByAlternate(alternate: string):string;
        getNamesByExpression(expression: any, exclude?: any, accumulate?: boolean):string[];
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
    export class LoadMask extends Ext.Component {
        isLoadMask: boolean;
        constructor(config?: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: any):any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
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
        static buttonText: any;
        static contentPaddingProperty: string;
        static dd: Ext.util.ComponentDragger;
        static defaultBindProperty: string;
        static defaultTextHeight: number;
        static floatParent: Ext.container.Container;
        static frameSize: any;
        static hasListeners: any;
        static isComponent: boolean;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isObservable: boolean;
        static isPanel: boolean;
        static isWindow: boolean;
        static items: Ext.util.AbstractMixedCollection;
        static maskOnDisable: boolean;
        static minProgressWidth: number;
        static minPromptWidth: number;
        static ownerCt: Ext.container.Container;
        static rendered: boolean;
        static scrollFlags: any;
        static self: Ext.Class;
        static zIndexManager: Ext.ZIndexManager;
        static zIndexParent: Ext.container.Container;
        static add(...component: any[]):any;
        static addBodyCls(cls: string):Ext.panel.Panel;
        static addClass(cls: any):Ext.Component;
        static addCls(cls: any):Ext.Component;
        static addClsWithUI(classes: any, skip?: boolean):void;
        static addDocked(items: any, pos?: number):Ext.Component[];
        static addListener(element: any, listeners: any, scope: any, options: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addPropertyToState(state: any, propName: string, value?: string):boolean;
        static addStateEvents(events: any):void;
        static addTool(tools: any):void;
        static addUIClsToElement(cls: any):void;
        static afterCollapse():void;
        static afterComponentLayout():void;
        static afterExpand():void;
        static afterLayout(layout: Ext.layout.container.Container):void;
        static afterSetPosition(x: number, y: number):void;
        static afterShow(animateTarget?: any, callback?: Function, scope?: any):void;
        static alert(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static alignTo(element: any, position?: string, offsets?: number[]):Ext.util.Positionable;
        static animate(animObj: any):any;
        static applyState(state: any):void;
        static beforeBlur(e: Ext.event.Event):void;
        static beforeComponentLayout(adjWidth: number, adjHeight: number):void;
        static beforeFocus(e: Ext.event.Event):void;
        static beforeLayout():void;
        static beforeShow():void;
        static bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static cancelFocus():void;
        static cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        static center():Ext.Component;
        static child(selector?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static cloneConfig(overrides: any):Ext.Component;
        static close():void;
        static collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        static confirm(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static contains(comp: Ext.Component, deep?: boolean):boolean;
        static convertCollapseDir(collapseDir: any):void;
        static destroy():void;
        static disable():Ext.container.Container;
        static doComponentLayout():Ext.Component;
        static doConstrain(constrainTo?: any):void;
        static doLayout():Ext.container.Container;
        static down(selector?: any):any;
        static enable():Ext.container.Container;
        static enableBubble(eventNames: any):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate?: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: any):Ext.container.Container;
        static findPlugin(ptype: string):Ext.plugin.Abstract;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static focus(selectText?: any, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        static forceComponentLayout(options?: any):void;
        static getActiveAnimation():any;
        static getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        static getAlwaysOnTop():any;
        static getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        static getBind():any;
        static getBox(contentBox?: boolean, local?: boolean):any;
        static getBubbleTarget():void;
        static getChildByElement(el: any, deep: boolean):Ext.Component;
        static getChildEls():any;
        static getCollapsed():any;
        static getComponent(comp: any):Ext.Component;
        static getConfig(name?: string, peek?: boolean):any;
        static getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        static getController():any;
        static getData():any;
        static getDefaultFocus():void;
        static getDefaultListenerScope():boolean;
        static getDockedComponent(comp: any):Ext.Component;
        static getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        static getEl():Ext.dom.Element;
        static getHeader():void;
        static getHeight():number;
        static getId():string;
        static getInherited(inner?: boolean):any;
        static getInheritedConfig(property: string, skipThis?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getInsertPosition(position: any):HTMLElement;
        static getItemId():string;
        static getLayout():Ext.layout.container.Container;
        static getLoader():Ext.ComponentLoader;
        static getLocalX():number;
        static getLocalXY():number[];
        static getLocalY():number;
        static getMaskTarget():void;
        static getMaxHeight():number;
        static getMaxWidth():number;
        static getMinHeight():number;
        static getMinWidth():number;
        static getOffsetsTo(offsetsTo: any):number[];
        static getPlugin(pluginId: string):Ext.plugin.Abstract;
        static getPosition(local?: boolean):number[];
        static getPublishes():any;
        static getRefItems(deep: any):void;
        static getRefOwner():void;
        static getReference():string;
        static getReferences():any;
        static getRegion():Ext.util.Region;
        static getScrollX():number;
        static getScrollY():number;
        static getSession():any;
        static getSize(contentSize?: boolean):any;
        static getSizeModel(ownerCtSizeModel: any):any;
        static getTabIndex():number;
        static getViewModel():any;
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
        static initConfig(config: any):Ext.Base;
        static initEvents():void;
        static initFocusable():void;
        static initFocusableEvents():void;
        static initInheritedState(inheritedState: any, inheritedStateInner: any):void;
        static initItems():void;
        static insert(index: number, component: any):Ext.Component;
        static insertDocked(pos: number, items: any):void;
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
        static isMasked(deep?: boolean):boolean;
        static isSuspended(event?: string):boolean;
        static isVisible(deep: any):boolean;
        static isXType(xtype: string, shallow?: boolean):boolean;
        static lookupController(skipThis?: boolean):Ext.app.ViewController;
        static lookupReference(key: string):Ext.Component;
        static lookupSession(skipThis?: boolean):Ext.data.Session;
        static lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        static mask(msg?: string, msgCls?: string):void;
        static maximize(animate?: boolean):Ext.window.Window;
        static minimize():Ext.window.Window;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static move(fromIdx: any, toIdx: number):Ext.Component;
        static moveAfter(item: Ext.Component, after: Ext.Component):Ext.Component;
        static moveBefore(item: any, before: Ext.Component):Ext.Component;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static nextChild(child: Ext.Component, selector?: string):Ext.Component;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static onAdd(component: Ext.Component, position: number):void;
        static onAdded(container: any, pos: any, instanced: any):void;
        static onBeforeAdd(item: Ext.Component):void;
        static onBoxReady():void;
        static onDestroy():void;
        static onDisable():void;
        static onDockedAdd(component: Ext.Component):void;
        static onDockedRemove(component: Ext.Component):void;
        static onEnable():void;
        static onHide():void;
        static onPosition():void;
        static onRemove(component: Ext.Component, autoDestroy: boolean):void;
        static onRemoved(destroying: any):void;
        static onResize():void;
        static onShow():void;
        static onShowComplete(callback?: Function, scope?: any):void;
        static postBlur(e: Ext.event.Event):void;
        static postFocus(e: Ext.event.Event):void;
        static prevChild(child: Ext.Component, selector?: string):Ext.Component;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, message: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, message: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        static publishState(property?: string, value?: any):void;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: any):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(component: any, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeBodyCls(cls: string):Ext.panel.Panel;
        static removeClass(cls: any):Ext.Component;
        static removeCls(cls: any):Ext.Component;
        static removeClsWithUI(cls: any):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeUIClsFromElement(cls: any):void;
        static render(container?: any, position?: any):void;
        static resolveListenerScope(defaultScope?: any):any;
        static restore(animate?: boolean):Ext.window.Window;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static savePropToState(propName: string, state: any, stateName?: string):boolean;
        static savePropsToState(propNames: any, state: any):any;
        static saveState():void;
        static scrollBy(deltaX: any, deltaY: any, animate: any):void;
        static scrollTo(x: number, y: number, animate?: any):void;
        static sequenceFx():any;
        static setActiveItem(item: any):Ext.Component;
        static setAlwaysOnTop(alwaysOnTop: any):void;
        static setAutoScroll(scroll: boolean):Ext.Component;
        static setBind(bind: any):void;
        static setBodyStyle(style: any, value: string):Ext.panel.Panel;
        static setBorder(border: any, targetEl: any):void;
        static setBox(box: any):Ext.util.Positionable;
        static setChildEls(childEls: any):void;
        static setCollapsed(collapsed: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setController(controller: any):void;
        static setData(data: any):void;
        static setDefaultListenerScope(defaultListenerScope: boolean):void;
        static setDisabled(disabled: boolean):void;
        static setDock(dock: any):Ext.Component;
        static setDocked(dock: any):Ext.Component;
        static setHeight(height: number):Ext.Component;
        static setHidden(hidden: boolean):Ext.Component;
        static setIcon(icon: string, width?: number, height?: number):Ext.window.MessageBox;
        static setLayout(configuration: any):void;
        static setLoading(load: any):Ext.LoadMask;
        static setLocalX(x: any):Ext.util.Positionable;
        static setLocalXY(x: any, y: any):Ext.util.Positionable;
        static setLocalY(y: any):Ext.util.Positionable;
        static setMargin(margin: any):void;
        static setMaxHeight(maxHeight: number):void;
        static setMaxWidth(maxWidth: number):void;
        static setMinHeight(minHeight: number):void;
        static setMinWidth(minWidth: number):void;
        static setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        static setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        static setPosition(x: any, y?: number, animate?: any):Ext.Component;
        static setPublishes(publishes: any):void;
        static setReference(reference: string):void;
        static setRegion(region: string):string;
        static setScrollX(x: number):void;
        static setScrollY(y: number):void;
        static setSession(session: any):void;
        static setSize(width: any, height: any):Ext.Component;
        static setStyle(property: any, value?: string):Ext.Component;
        static setTabIndex(newTabIndex: number):void;
        static setUI(ui: any):void;
        static setViewModel(viewModel: any):void;
        static setVisible(visible: boolean):Ext.Component;
        static setWeight(weight: number):number;
        static setWidth(width: number):Ext.Component;
        static setX(x: any, animate: any):Ext.util.Positionable;
        static setXY(xy: any, animate: any):Ext.util.Positionable;
        static setY(y: any, animate: any):Ext.util.Positionable;
        static show(config: any):Ext.window.MessageBox;
        static showAt(x: any, y?: number, animate?: any):Ext.Component;
        static showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
        static statics():Ext.Class;
        static stopAnimation():Ext.dom.Element;
        static stopFx():Ext.dom.Element;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static syncFx():any;
        static toBack():Ext.Component;
        static toFront(preventFocus?: boolean):Ext.Component;
        static toggleCollapse():Ext.panel.Panel;
        static toggleMaximize():Ext.window.Window;
        static translatePoints(x: any, y?: number):any;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unmask():void;
        static up(selector?: any, limit?: any):Ext.container.Container;
        static update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        static updateBox(box: any):Ext.Component;
        static updateLayout(options?: any):void;
        static updateProgress(value?: number, progressText?: string, message?: string):Ext.window.MessageBox;
        static visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        static visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        static wait(message: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Mixin extends Ext.Base {
    }
    export class Number {
        static clipIndices(length: number, indices: number[], options?: any):number[];
        static constrain(number: number, min: number, max: number):number;
        static correctFloat(The: number):number;
        static from(value: any, defaultValue: number):number;
        static randomInt(from: number, to: number):number;
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
        static getKey(object: any, value: any):void;
        static getKeys(object: any):string[];
        static getSize(object: any):number;
        static getValues(object: any):any[];
        static isEmpty(object: any):boolean;
        static merge(destination: any, ...object: any[]):any;
        static toQueryObjects(name: string, value: any, recursive?: boolean):any[];
        static toQueryString(object: any, recursive?: boolean):string;
    }
    export class ProgressBar extends Ext.Component {
        constructor(config: any);
        getTextTpl():any;
        getValue():number;
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        setTextTpl(textTpl: any):void;
        setValue(value: number):void;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class ProgressBarWidget extends Ext.Widget {
        constructor(config: any);
        getAnimate():boolean;
        getBaseCls():string;
        getText():string;
        getTextCls():string;
        getTextTpl():any;
        getUi():string;
        getValue():number;
        setAnimate(animate: boolean):void;
        setBaseCls(baseCls: string):void;
        setText(text: string):void;
        setTextCls(textCls: string):void;
        setTextTpl(textTpl: any):void;
        setUi(ui: string):void;
        setValue(value: number):void;
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class String {
        static addCharacterEntities(newEntities: any):void;
        static capitalize(string: string):string;
        static createRegex(value: any, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):RegExp;
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
        static splitWords(words: any):void;
        static startsWith(s: string, start: string, ignoreCase?: boolean):void;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static urlAppend(url: string, string: string):string;
    }
    export class TaskQueue {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
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
        build: number;
        major: number;
        minor: number;
        patch: number;
        release: string;
        compareTo(other: any):number;
        equals(target: any):boolean;
        getBuild():number;
        getMajor():number;
        getMinor():number;
        getPatch():number;
        getRelease():string;
        getReleaseValue():any;
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
        static getComponentValue(value: any):any;
    }
    export class Widget extends Ext.Evented {
        defaultBindProperty: string;
        constructor(config: any);
        getBind():any;
        getController():any;
        getDefaultListenerScope():boolean;
        getHeight():any;
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getPublishes():any;
        getRefOwner():void;
        getReference():string;
        getSession():any;
        getSize():any;
        getViewModel():any;
        getWidth():any;
        initInheritedState(inheritedState: any):void;
        is(selector: string):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        lookupController(skipThis?: boolean):Ext.app.ViewController;
        lookupSession(skipThis?: boolean):Ext.data.Session;
        lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        publishState(property?: string, value?: any):void;
        resolveListenerScope(defaultType: any):any;
        setBind(bind: any):void;
        setController(controller: any):void;
        setDefaultListenerScope(defaultListenerScope: boolean):void;
        setHeight(height: any):void;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setSession(session: any):void;
        setSize(width: number, height: number):void;
        setViewModel(viewModel: any):void;
        setWidth(width: any):void;
    }
    export class WindowManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static bringToFront(comp: any, preventFocus: boolean):boolean;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static each(fn: Function, scope?: any):void;
        static eachBottomUp(fn: Function, scope?: any):void;
        static eachTopDown(fn: Function, scope?: any):void;
        static get(id: any):Ext.Component;
        static getActive():Ext.Component;
        static getBy(fn: Function, scope?: any):any[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hideAll():void;
        static initConfig(config: any):Ext.Base;
        static register(comp: Ext.Component):void;
        static sendToBack(comp: any):Ext.Component;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static unregister(comp: Ext.Component):void;
    }
    export class XTemplate extends Ext.Template {
        constructor(...html: any[]);
        static getTpl(instance: any, name: string):Ext.XTemplate;
    }
    export class ZIndexManager extends Ext.Base {
        constructor(container: any);
        bringToFront(comp: any, preventFocus: boolean):boolean;
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
    export class feature {
        static has(name: string):boolean;
    }
    export class os {
        static deviceType: string;
        static name: string;
        static version: Ext.Version;
        static is(name: string):boolean;
    }
    export class supports {
        static Audio: boolean;
        static AudioTag: boolean;
        static BoundingClientRect: boolean;
        static CSS3BorderRadius: boolean;
        static CSS3BoxShadow: boolean;
        static CSS3LinearGradient: boolean;
        static CSSPointerEvents: boolean;
        static Canvas: boolean;
        static ClassList: boolean;
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
}
declare module Ext.app {
    export class Application extends Ext.app.Controller {
        constructor(config?: any);
        createController(name: string):Ext.app.Controller;
        destroyController(controller: any):void;
        getAppProperty():string;
        getAutoCreateViewport():any;
        getDefaultToken():string;
        getEnableQuickTips():boolean;
        getGlyphFontFamily():string;
        getName():string;
        launch(profile: string):boolean;
        setAppProperty(appProperty: string):void;
        setAutoCreateViewport(autoCreateViewport: any):void;
        setDefaultToken(defaultToken: string):void;
        setEnableQuickTips(enableQuickTips: boolean):void;
        setGlyphFontFamily(glyphFontFamily: string):void;
        setName(name: string):void;
    }
    export class BaseController extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners?: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBefore():any;
        getControl():any;
        getId():string;
        getListen():any;
        getRoutes():any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        listen(to: any, controller?: Ext.app.Controller):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        redirectTo(token: string, force: boolean):boolean;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setBefore(before: any):void;
        setControl(control: any):void;
        setId(id: string):void;
        setListen(listen: any):void;
        setRoutes(routes: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Controller extends Ext.app.BaseController {
        constructor(config?: any);
        activate():void;
        addRef(refs: any):void;
        deactivate():void;
        getActive():boolean;
        getApplication():Ext.app.Application;
        getController(id: string):Ext.app.Controller;
        getModel(name: string):Ext.Class;
        getModuleClassName():any;
        getRefs():any[];
        getStore(name: string):Ext.data.Store;
        getView(view: string):Ext.Base;
        hasRef(ref: string):boolean;
        init(application: Ext.app.Application):void;
        onLaunch(application: Ext.app.Application):void;
        setActive(active: boolean):void;
        setApplication(application: Ext.app.Application):void;
        setModuleClassName(moduleClassName: any):void;
        setRefs(refs: any[]):void;
    }
    export class EventBus {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static control(selectors: any, controller: Ext.app.BaseController):void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static listen(to: any, controller: Ext.app.BaseController):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static unlisten(controllerId: Ext.app.BaseController):void;
    }
    export class EventDomain extends Ext.Base {
        static instances: any;
        constructor();
        match(target: any, selector: string):boolean;
        monitor(observable: Ext.Class):void;
    }
    export class Util extends Ext.Base {
    }
    export class ViewController extends Ext.app.BaseController {
        factoryConfig: any;
        constructor();
        beforeInit(view: Ext.Component):void;
        closeView():void;
        fireViewEvent(eventName: string, ...args: any[]):boolean;
        getCloseViewAction():string;
        getReferences():any;
        getSession():Ext.data.Session;
        getStore(name: string):Ext.data.Store;
        getView():Ext.Component;
        getViewModel():Ext.app.ViewModel;
        init(view: Ext.Component):void;
        initViewModel(viewModel: Ext.app.ViewModel):void;
        lookupReference(key: string):Ext.Component;
        setCloseViewAction(closeViewAction: string):void;
    }
    export class ViewModel extends Ext.Base {
        factoryConfig: any;
        constructor(config: any);
        bind(descriptor: any, callback: Function, scope?: any, options?: any):any;
        get(path: string):any;
        getData():any;
        getFormulas():any;
        getId():string;
        getLinks():any;
        getParent():Ext.app.ViewModel;
        getSchema():any;
        getSession():Ext.data.Session;
        getStore(key: string):Ext.data.Store;
        getStores():any;
        getView():Ext.container.Container;
        linkTo(key: string, reference: any):void;
        set(path: any, The: any):void;
        setData(data: any):void;
        setFormulas(formulas: any):void;
        setLinks(links: any):void;
        setParent(parent: Ext.app.ViewModel):void;
        setSchema(schema: any):void;
        setSession(session: Ext.data.Session):void;
        setStores(stores: any):void;
        setView(view: Ext.container.Container):void;
    }
}
declare module Ext.app.bind {
    export class AbstractStub extends Ext.util.Schedulable {
        owner: any;
        constructor(owner: any, name: any);
    }
    export class BaseBinding extends Ext.util.Schedulable {
        constructor();
    }
    export class Binding extends Ext.app.bind.BaseBinding {
        constructor();
        bindValidation(callback: Function, scope?: any):Ext.app.bind.Binding;
        getValue():any;
        isLoading():boolean;
        isReadOnly():boolean;
        refresh():void;
        setValue(value: any):void;
    }
    export class Formula extends Ext.util.Schedulable {
        constructor(stub: any, formula: any);
    }
    export class LinkStub extends Ext.app.bind.Stub {
        constructor(owner: any, name: any, parent: any);
    }
    export class Multi extends Ext.app.bind.BaseBinding {
        constructor(descriptor: any, owner: any, callback: any, scope: any, options: any);
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
declare module Ext.app.bindinspector {
    export class Environment extends Ext.Base {
    }
    export class Util {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
}
declare module Ext.app.domain {
    export class Component {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static match(target: any, selector: any):boolean;
        static monitor(observable: Ext.Class):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Controller {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static match(target: any, selector: any):boolean;
        static monitor(observable: Ext.Class):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Direct {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static match(target: any, selector: string):boolean;
        static monitor(observable: Ext.Class):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Global {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static match(target: any, selector: string):boolean;
        static monitor(observable: Ext.Class):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Store {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static match(target: any, selector: any):boolean;
        static monitor(observable: Ext.Class):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
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
        constructor(config: any);
        recognize(url: string):any;
    }
    export class Router {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static multipleToken: string;
        static queueRoutes: boolean;
        static routes: Ext.app.route.Route[];
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clear():void;
        static connect(url: string, action: string, controller: Ext.app.Controller):void;
        static destroy():void;
        static disconnectAll(controller: Ext.app.Controller):void;
        static draw(fn: Function):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static recognize(url: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        disabled: boolean;
        hidden: boolean;
        menu: Ext.menu.Menu;
        pressed: boolean;
        template: Ext.Template;
        constructor(config: any);
        child(selector?: any):any;
        down(selector?: any):any;
        getArrowVisible():boolean;
        getIconAlign():string;
        getMenu():Ext.menu.Menu;
        getTemplateArgs():any;
        getText():string;
        getTextAlign():string;
        hasVisibleMenu():boolean;
        hideMenu():Ext.button.Button;
        isWithinTrigger(e: Ext.event.Event):void;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        setArrowVisible(arrowVisible: boolean):void;
        setGlyph(glyph: any):Ext.button.Button;
        setHandler(handler: Function, scope?: any):Ext.button.Button;
        setHref(href: string):void;
        setIcon(icon: string):Ext.button.Button;
        setIconAlign(iconAlign: string):void;
        setIconCls(cls: string):Ext.button.Button;
        setMenu(menu: any, destroyMenu: boolean):void;
        setParams(params: any):void;
        setPressed(pressed?: boolean):Ext.button.Button;
        setScale(scale: string):void;
        setText(text: string):void;
        setTextAlign(textAlign: string):void;
        setTooltip(tooltip: any):Ext.button.Button;
        showMenu(fromEvent: any):void;
        toggle(state?: boolean, suppressEvent?: boolean):Ext.button.Button;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class Cycle extends Ext.button.Split {
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent?: boolean):void;
        toggleSelected():void;
    }
    export class Manager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getPressed(groupName: string):Ext.button.Button;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Segmented extends Ext.container.Container {
        constructor(config: any);
        getAllowDepress():boolean;
        getAllowMultiple():boolean;
        getAllowToggle():boolean;
        getDefaultUI():string;
        getVertical():boolean;
        setAllowDepress(allowDepress: boolean):void;
        setAllowMultiple(allowMultiple: boolean):void;
        setAllowToggle(allowToggle: boolean):void;
        setDefaultUI(defaultUI: string):void;
        setVertical(vertical: boolean):void;
    }
    export class Split extends Ext.button.Button {
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: any):void;
    }
}
declare module Ext.chart {
    export class AbstractChart extends Ext.draw.Container {
        version: string;
        constructor(config: any);
        bindStore(store: Ext.data.Store):void;
        cancelLayout():void;
        getAxes():any;
        getHighlightItem():any;
        getInsetPadding():any;
        getInteractions():any[];
        getItemForPoint(x: number, y: number):any;
        getItemsForPoint(x: number, y: number):any[];
        getLegend():any;
        getLegendStore():Ext.data.Store;
        getSeries():any;
        getShadow():any;
        getStore():Ext.data.Store;
        getStyle():any;
        getTheme():string;
        redraw():void;
        resumeThicknessChanged():void;
        scheduleLayout():void;
        setAnimation(animation: any):void;
        setAxes(axes: any):void;
        setColors(colors: any[]):void;
        setHighlightItem(highlightItem: any):void;
        setInsetPadding(insetPadding: any):void;
        setInteractions(interactions: any[]):void;
        setLegend(legend: any):void;
        setSeries(series: any):void;
        setShadow(shadow: any):void;
        setStore(store: Ext.data.Store):void;
        setTheme(theme: string):void;
        suspendThicknessChanged():void;
    }
    export class CartesianChart extends Ext.chart.AbstractChart {
        constructor(config: any);
        getFlipXY():boolean;
        getInnerPadding():any;
        getInnerRect():any[];
        setFlipXY(flipXY: boolean):void;
        setInnerPadding(innerPadding: any):void;
        setInnerRect(innerRect: any[]):void;
    }
    export class Legend extends Ext.chart.LegendBase {
        constructor(config: any);
        getBaseCls():string;
        getDisableSelection():boolean;
        getPadding():number;
        getRect():any[];
        getToggleable():boolean;
        setBaseCls(baseCls: string):void;
        setDisableSelection(disableSelection: boolean):void;
        setPadding(padding: number):void;
        setRect(rect: any[]):void;
        setToggleable(toggleable: boolean):void;
    }
    export class LegendBase extends Ext.view.View {
        constructor(config: any);
        getDocked():string;
        setItemSelector(itemSelector: string):void;
        setNodeContainerSelector(nodeContainerSelector: string):void;
        setTpl(tpl: any[]):void;
    }
    export class MarkerHolder extends Ext.Mixin {
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
    }
    export class Markers extends Ext.draw.sprite.Instancing {
        constructor();
        clear(category: string):void;
        getMarkerBBoxFor(category: string, index: any, isWithoutTransform?: boolean):void;
        putMarkerFor(category: string, attr: any, index: any, canonical?: boolean, keepRevision?: boolean):void;
    }
    export class PolarChart extends Ext.chart.AbstractChart {
        constructor(config: any);
        getCenter():any[];
        getInnerPadding():number;
        getRadius():number;
        setCenter(center: any[]):void;
        setInnerPadding(innerPadding: number):void;
        setRadius(radius: number):void;
    }
    export class SpaceFillingChart extends Ext.chart.AbstractChart {
        constructor(config: any);
    }
    export class TipSurface extends Ext.draw.Container {
        constructor(config: any);
    }
}
declare module Ext.chart.axis {
    export class Axis extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAdjustByMajorUnit():boolean;
        getBackground():any;
        getBubbleEvents():any;
        getChart():Ext.chart.AbstractChart;
        getCoordFor(value: any, field: string, idx?: number, items?: Ext.util.MixedCollection):number;
        getFields():any[];
        getFloating():any;
        getGrid():any;
        getHidden():boolean;
        getIncrement():number;
        getLabel():any;
        getLabelInSpan():boolean;
        getLayout():any;
        getLimits():any;
        getLinkedTo():any;
        getListeners():any;
        getMajorTickSteps():number;
        getMargin():number;
        getMaxZoom():number;
        getMaximum():number;
        getMinZoom():number;
        getMinimum():number;
        getMinorTickSteps():number;
        getNeedHighPrecision():boolean;
        getPosition():string;
        getRange():any[];
        getReconcileRange():boolean;
        getRenderer():Function;
        getSegmenter():any;
        getStyle():any;
        getTitle():any;
        getTitleMargin():number;
        getVisibleRange():any[];
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        processData():void;
        reconcileRange():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        renderFrame():void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAdjustByMajorUnit(adjustByMajorUnit: boolean):void;
        setBackground(background: any):void;
        setBubbleEvents(bubbleEvents: any):void;
        setChart(chart: Ext.chart.AbstractChart):void;
        setFields(fields: any[]):void;
        setFloating(floating: any):void;
        setGrid(grid: any):void;
        setHidden(hidden: boolean):void;
        setIncrement(increment: number):void;
        setLabel(label: any):void;
        setLabelInSpan(labelInSpan: boolean):void;
        setLayout(layout: any):void;
        setLimits(limits: any):void;
        setLinkedTo(linkedTo: any):void;
        setListeners(listeners: any):void;
        setMajorTickSteps(majorTickSteps: number):void;
        setMargin(margin: number):void;
        setMaxZoom(maxZoom: number):void;
        setMaximum(maximum: number):void;
        setMinZoom(minZoom: number):void;
        setMinimum(minimum: number):void;
        setMinorTickSteps(minorTickSteps: number):void;
        setNeedHighPrecision(needHighPrecision: boolean):void;
        setPosition(position: string):void;
        setReconcileRange(reconcileRange: boolean):void;
        setRenderer(renderer: Function):string;
        setSegmenter(segmenter: any):void;
        setStyle(style: any):void;
        setTitle(title: any):void;
        setTitleMargin(titleMargin: number):void;
        setVisibleRange(visibleRange: any[]):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Category extends Ext.chart.axis.Axis {
        constructor(config: any);
    }
    export class Numeric extends Ext.chart.axis.Axis {
        constructor(config: any);
        getAggregator():string;
        setAggregator(aggregator: string):void;
    }
    export class Time extends Ext.chart.axis.Numeric {
        constructor(config: any);
        getCalculateByLabelSize():boolean;
        getDateFormat():any;
        getFromDate():Date;
        getStep():any[];
        getToDate():Date;
        setCalculateByLabelSize(calculateByLabelSize: boolean):void;
        setDateFormat(dateFormat: any):void;
        setFromDate(fromDate: Date):void;
        setStep(step: any[]):void;
        setToDate(toDate: Date):void;
    }
}
declare module Ext.chart.axis.layout {
    export class CombineDuplicate extends Ext.chart.axis.layout.Discrete {
        constructor(config: any);
    }
    export class Continuous extends Ext.chart.axis.layout.Layout {
        constructor(config: any);
        getAdjustMaximumByMajorUnit():boolean;
        getAdjustMinimumByMajorUnit():boolean;
        setAdjustMaximumByMajorUnit(adjustMaximumByMajorUnit: boolean):void;
        setAdjustMinimumByMajorUnit(adjustMinimumByMajorUnit: boolean):void;
    }
    export class Discrete extends Ext.chart.axis.layout.Layout {
        constructor(config: any);
    }
    export class Layout extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        calculateLayout(context: any):any;
        calculateMajorTicks(context: any):void;
        calculateMinorTicks(context: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAxis():Ext.chart.axis.Axis;
        getBubbleEvents():any;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        processData(series: Ext.chart.series.Series):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAxis(axis: Ext.chart.axis.Axis):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        snapEnds(context: any, min: number, max: number, estStepSize: number):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        trimByRange(context: any, out: any, trimMin: number, trimMax: number):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
}
declare module Ext.chart.axis.segmenter {
    export class Names extends Ext.chart.axis.segmenter.Segmenter {
        constructor(config: any);
    }
    export class Numeric extends Ext.chart.axis.segmenter.Segmenter {
        constructor(config: any);
        exactStep(min: any, estStepSize: any):any;
    }
    export class Segmenter extends Ext.Base {
        constructor(config: any);
        add(value: any, step: number, unit: any):void;
        align(value: any, step: number, unit: any):any;
        diff(min: any, max: any, unit: any):number;
        from(value: any):any;
        getAxis():Ext.chart.axis.Axis;
        preferredStep(start: any, estStepSize: any):any;
        renderer(value: any, context: any):string;
        setAxis(axis: Ext.chart.axis.Axis):void;
    }
    export class Time extends Ext.chart.axis.segmenter.Segmenter {
        constructor(config: any);
        getStep():any;
        setStep(step: any):void;
    }
}
declare module Ext.chart.axis.sprite {
    export class Axis extends Ext.draw.sprite.Sprite {
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getAxis():Ext.chart.axis.Axis;
        getLabel():any;
        getLayout():any;
        getRenderer():Function;
        getSegmenter():any;
        setAxis(axis: Ext.chart.axis.Axis):void;
        setLabel(label: any):void;
        setLayout(layout: any):void;
        setRenderer(renderer: Function):void;
        setSegmenter(segmenter: any):void;
    }
}
declare module Ext.chart.grid {
    export class CircularGrid extends Ext.draw.sprite.Circle {
        constructor(config: any);
    }
    export class HorizontalGrid extends Ext.draw.sprite.Sprite {
        constructor(config: any);
    }
    export class RadialGrid extends Ext.draw.sprite.Path {
        constructor(config: any);
    }
    export class VerticalGrid extends Ext.draw.sprite.Sprite {
        constructor(config: any);
    }
}
declare module Ext.chart.interactions {
    export class Abstract extends Ext.Base {
        hasListeners: any;
        throttleGap: number;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getChart():Ext.chart.AbstractChart;
        getEnabled():boolean;
        getItemForEvent(e: Event):any;
        getItemsForEvent(e: Event):any[];
        getListeners():any;
        hasListener(eventName: string):boolean;
        initialize():void;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        onGesture():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setChart(chart: Ext.chart.AbstractChart):void;
        setEnabled(enabled: boolean):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class CrossZoom extends Ext.chart.interactions.Abstract {
        constructor();
        getAxes():any;
        getGestures():any;
        getUndoButton():any;
        setAxes(axes: any):void;
        setGestures(gestures: any):void;
        setUndoButton(undoButton: any):void;
    }
    export class Crosshair extends Ext.chart.interactions.Abstract {
        constructor(config: any);
        getAxes():any;
        getGesture():string;
        getLines():any;
        setAxes(axes: any):void;
        setGesture(gesture: string):void;
        setLines(lines: any):void;
    }
    export class ItemHighlight extends Ext.chart.interactions.Abstract {
        constructor(config: any);
        getGestures():any;
        setGestures(gestures: any):void;
    }
    export class ItemInfo extends Ext.chart.interactions.Abstract {
        constructor(config: any);
        getExtjsGestures():any;
        getGestures():any;
        getPanel():any;
        setExtjsGestures(extjsGestures: any):void;
        setGestures(gestures: any):void;
        setPanel(panel: any):void;
    }
    export class PanZoom extends Ext.chart.interactions.Abstract {
        constructor(config: any);
        getAxes():any;
        getHideLabelInGesture():boolean;
        getMaxZoom():any;
        getMinZoom():any;
        getModeToggleButton():any;
        getShowOverflowArrows():boolean;
        getZoomOnPanGesture():boolean;
        setAxes(axes: any):void;
        setHideLabelInGesture(hideLabelInGesture: boolean):void;
        setMaxZoom(maxZoom: any):void;
        setMinZoom(minZoom: any):void;
        setModeToggleButton(modeToggleButton: any):void;
        setShowOverflowArrows(showOverflowArrows: boolean):void;
        setZoomOnPanGesture(zoomOnPanGesture: boolean):void;
    }
    export class Rotate extends Ext.chart.interactions.Abstract {
        constructor(config: any);
        getGestures():any;
        rotateTo(angle: number, relative?: boolean, animate?: boolean):void;
        setGestures(gestures: any):void;
    }
    export class RotatePie3D extends Ext.chart.interactions.Rotate {
        constructor(config: any);
    }
}
declare module Ext.chart.label {
    export class Callout extends Ext.draw.modifier.Modifier {
        constructor(config: any);
    }
    export class Label extends Ext.draw.sprite.Text {
        constructor(config: any);
        getCalloutLine():any;
        getField():any;
        getFx():any;
        setCalloutLine(calloutLine: any):void;
        setField(field: any):void;
        setFx(fx: any):void;
    }
}
declare module Ext.chart.series {
    export class Area extends Ext.chart.series.StackedCartesian {
        constructor();
    }
    export class Bar extends Ext.chart.series.StackedCartesian {
        constructor();
    }
    export class CandleStick extends Ext.chart.series.Cartesian {
        constructor();
        getCloseField():string;
        getHighField():string;
        getLowField():string;
        getOpenField():string;
        setCloseField(closeField: string):void;
        setHighField(highField: string):void;
        setLowField(lowField: string):void;
        setOpenField(openField: string):void;
    }
    export class Cartesian extends Ext.chart.series.Series {
        constructor();
        getXAxis():any;
        getXField():string;
        getYAxis():any;
        getYField():any;
        setXAxis(xAxis: any):void;
        setXField(xField: string):void;
        setYAxis(yAxis: any):void;
        setYField(yField: any):void;
    }
    export class Gauge extends Ext.chart.series.Series {
        constructor(config: any);
        getAngleField():string;
        getCenter():any[];
        getDonut():number;
        getField():string;
        getMaximum():number;
        getMinimum():number;
        getNeedle():boolean;
        getNeedleLength():number;
        getNeedleLengthRatio():number;
        getNeedleWidth():number;
        getRadius():number;
        getRect():any[];
        getRotation():number;
        getSectors():any[];
        getTotalAngle():number;
        getValue():number;
        getWholeDisk():boolean;
        setAngleField(angleField: string):void;
        setCenter(center: any[]):void;
        setDonut(donut: number):void;
        setField(field: string):void;
        setMaximum(maximum: number):void;
        setMinimum(minimum: number):void;
        setNeedle(needle: boolean):void;
        setNeedleLength(needleLength: number):void;
        setNeedleLengthRatio(needleLengthRatio: number):void;
        setNeedleWidth(needleWidth: number):void;
        setRadius(radius: number):void;
        setRect(rect: any[]):void;
        setRotation(rotation: number):void;
        setSectors(sectors: any[]):void;
        setTotalAngle(totalAngle: number):void;
        setValue(value: number):void;
        setWholeDisk(wholeDisk: boolean):void;
    }
    export class ItemPublisher extends Ext.event.publisher.Publisher {
        constructor();
    }
    export class Line extends Ext.chart.series.Cartesian {
        constructor();
        getAggregator():any;
        getFill():boolean;
        getSelectionTolerance():number;
        getSmooth():any;
        getStep():boolean;
        setAggregator(aggregator: any):void;
        setFill(fill: boolean):void;
        setSelectionTolerance(selectionTolerance: number):void;
        setSmooth(smooth: any):void;
        setStep(step: boolean):void;
    }
    export class Pie extends Ext.chart.series.Polar {
        constructor(config: any);
        getClockwise():boolean;
        getDonut():number;
        getItemForAngle(angle: number):any;
        getTotalAngle():number;
        setClockwise(clockwise: boolean):void;
        setDonut(donut: number):void;
        setTotalAngle(totalAngle: number):void;
    }
    export class Pie3D extends Ext.chart.series.Polar {
        constructor(config: any);
        getDistortion():number;
        getDonut():any;
        getRect():any[];
        getThickness():number;
        setDistortion(distortion: number):void;
        setDonut(donut: any):void;
        setRect(rect: any[]):void;
        setThickness(thickness: number):void;
    }
    export class Polar extends Ext.chart.series.Series {
        constructor(config: any);
        getCenter():any[];
        getOffsetX():number;
        getOffsetY():number;
        getRadius():number;
        getRotation():number;
        getXAxis():any;
        getXField():string;
        getYAxis():any;
        getYField():string;
        setCenter(center: any[]):void;
        setOffsetX(offsetX: number):void;
        setOffsetY(offsetY: number):void;
        setRadius(radius: number):void;
        setRotation(rotation: number):void;
        setXAxis(xAxis: any):void;
        setXField(xField: string):void;
        setYAxis(yAxis: any):void;
        setYField(yField: string):void;
    }
    export class Radar extends Ext.chart.series.Polar {
        constructor(config: any);
    }
    export class Scatter extends Ext.chart.series.Cartesian {
        constructor();
    }
    export class Series extends Ext.Base {
        hasListeners: any;
        seriesType: string;
        type: string;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAnimation():any;
        getBackground():any;
        getBubbleEvents():any;
        getColors():any[];
        getHidden():any;
        getHighlight():any;
        getHighlightCfg():any;
        getHighlightItem():any;
        getItemForPoint(x: number, y: number, target?: any):any;
        getItemInstancing():any;
        getLabel():any;
        getLabelField():any;
        getLabelOverflowPadding():number;
        getListeners():any;
        getMarker():any;
        getMarkerSubStyle():any;
        getOverlaySurface():any;
        getRenderer():Function;
        getShowInLegend():boolean;
        getShowMarkers():boolean;
        getSprites():void;
        getStyle():any;
        getSubStyle():any;
        getSurface():any;
        getTitle():any;
        getTooltip():any;
        getUseDarkerStrokeColor():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        provideLegendInfo(target: any[]):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAnimation(animation: any):void;
        setBackground(background: any):void;
        setBubbleEvents(bubbleEvents: any):void;
        setColors(colors: any[]):void;
        setHidden(hidden: any):void;
        setHiddenByIndex(index: number, value: boolean):void;
        setHighlight(highlight: any):void;
        setHighlightCfg(highlightCfg: any):void;
        setHighlightItem(highlightItem: any):void;
        setItemInstancing(itemInstancing: any):void;
        setLabel(label: any):any;
        setLabelField(labelField: any):void;
        setLabelOverflowPadding(labelOverflowPadding: number):void;
        setListeners(listeners: any):void;
        setMarker(marker: any):void;
        setMarkerSubStyle(markerSubStyle: any):void;
        setOverlaySurface(overlaySurface: any):void;
        setRenderer(renderer: Function):any;
        setShowInLegend(showInLegend: boolean):void;
        setShowMarkers(showMarkers: boolean):void;
        setStore(store: any):void;
        setStyle(style: any):void;
        setSubStyle(subStyle: any):void;
        setSurface(surface: any):void;
        setTitle(title: any):void;
        setTooltip(tooltip: any):void;
        setUseDarkerStrokeColor(useDarkerStrokeColor: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class StackedCartesian extends Ext.chart.series.Cartesian {
        constructor();
        getStacked():boolean;
        setStacked(stacked: boolean):void;
    }
}
declare module Ext.chart.series.sprite {
    export class Aggregative extends Ext.chart.series.sprite.Cartesian {
        constructor();
        getAggregator():any;
        setAggregator(aggregator: any):void;
    }
    export class Area extends Ext.chart.series.sprite.StackedCartesian {
        constructor();
    }
    export class Bar extends Ext.chart.series.sprite.StackedCartesian {
        constructor();
    }
    export class CandleStick extends Ext.chart.series.sprite.Aggregative {
        constructor();
    }
    export class Cartesian extends Ext.draw.sprite.Sprite {
        constructor();
        binarySearch(key: string):any;
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getField():string;
        getIndexNearPoint(x: number, y: number):number;
        renderClipped(surface: Ext.draw.Surface, ctx: any, clip: any[], rect: any[]):void;
        setField(field: string):void;
    }
    export class Line extends Ext.chart.series.sprite.Aggregative {
        constructor();
    }
    export class Pie3DPart extends Ext.draw.sprite.Path {
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
    }
    export class PieSlice extends Ext.draw.sprite.Sector {
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getRendererIndex():number;
        setRendererIndex(rendererIndex: number):void;
    }
    export class Polar extends Ext.draw.sprite.Sprite {
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getField():any;
        setField(field: any):void;
    }
    export class Radar extends Ext.chart.series.sprite.Polar {
        constructor();
    }
    export class Scatter extends Ext.chart.series.sprite.Cartesian {
        constructor();
    }
    export class StackedCartesian extends Ext.chart.series.sprite.Cartesian {
        constructor();
    }
}
declare module Ext.chart.theme {
    export class Base extends Ext.Base {
        factoryConfig: any;
        constructor(config: any);
        getAxis():any;
        getBackground():any;
        getBaseColor():any;
        getChart():any;
        getMarkerThemes():any;
        getSeries():any;
        getSeriesThemes():any;
        getSprites():any;
        getUseGradients():boolean;
        setAxis(axis: any):void;
        setBackground(background: any):void;
        setBaseColor(baseColor: any):void;
        setChart(chart: any):void;
        setMarkerThemes(markerThemes: any):void;
        setSeries(series: any):void;
        setSeriesThemes(seriesThemes: any):void;
        setSprites(sprites: any):void;
        setUseGradients(useGradients: boolean):void;
    }
}
declare module Ext.container {
    export class ButtonGroup extends Ext.panel.Panel {
        constructor(config: any);
    }
    export class Container extends Ext.Component {
        items: Ext.util.AbstractMixedCollection;
        constructor(config: any);
        add(...component: any[]):any;
        afterLayout(layout: Ext.layout.container.Container):void;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        child(selector?: any):any;
        contains(comp: Ext.Component, deep?: boolean):boolean;
        doLayout():Ext.container.Container;
        down(selector?: any):any;
        getChildByElement(el: any, deep: boolean):Ext.Component;
        getComponent(comp: any):Ext.Component;
        getLayout():Ext.layout.container.Container;
        getRefItems(deep: any):void;
        getReferences():any;
        initItems():void;
        insert(index: number, component: any):Ext.Component;
        isAncestor(possibleDescendant: Ext.Component):void;
        lookupReference(key: string):Ext.Component;
        moveAfter(item: Ext.Component, after: Ext.Component):Ext.Component;
        moveBefore(item: any, before: Ext.Component):Ext.Component;
        nextChild(child: Ext.Component, selector?: string):Ext.Component;
        onAdd(component: Ext.Component, position: number):void;
        onBeforeAdd(item: Ext.Component):void;
        onRemove(component: Ext.Component, autoDestroy: boolean):void;
        prevChild(child: Ext.Component, selector?: string):Ext.Component;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        remove(component: any, autoDestroy?: boolean):Ext.Component;
        removeAll(autoDestroy?: boolean):Ext.Component[];
        setActiveItem(item: any):Ext.Component;
        setLayout(configuration: any):void;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class DockingContainer extends Ext.Base {
        addDocked(items: any, pos?: number):Ext.Component[];
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, items: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
    }
    export class Monitor extends Ext.Base {
        constructor(config: any);
    }
    export class Viewport extends Ext.container.Container {
        isViewport: boolean;
        constructor(config: any);
        destroy():void;
    }
}
declare module Ext.dashboard {
    export class Column extends Ext.container.Container {
        constructor(config: any);
    }
    export class Dashboard extends Ext.panel.Panel {
        constructor(config: any);
        getParts():any;
        setParts(parts: any):void;
    }
    export class DropZone extends Ext.dd.DropTarget {
        constructor(dashboard: any, cfg: any);
    }
    export class Panel extends Ext.panel.Panel {
        constructor(config: any);
    }
    export class Part extends Ext.Base {
        dashboard: Ext.dashboard.Panel;
        factoryConfig: any;
        constructor(config: any);
        createView(config: any):any;
        displayForm(instance: Ext.Component, currentConfig: any, callback: (config: any) => any, scope: any):void;
        getId():any;
        getViewTemplate():any;
        setId(id: any):void;
        setViewTemplate(viewTemplate: any):void;
    }
}
declare module Ext.data {
    export class AbstractStore extends Ext.Base {
        currentPage: number;
        factoryConfig: any;
        hasListeners: any;
        isDestroyed: boolean;
        isStore: boolean;
        updating: number;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addFilter(filters: any):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        beginUpdate():void;
        clearFilter(suppressEvent?: boolean):void;
        clearGrouping():void;
        clearListeners():void;
        contains(record: Ext.data.Model):boolean;
        enableBubble(events: any):void;
        endUpdate():void;
        filterBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):void;
        find(property: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any, startIndex?: number):number;
        findExact(fieldName: string, value: any, startIndex?: number):number;
        findRecord(fieldName: string, value: any, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAt(index: number):Ext.data.Model;
        getAutoDestroy():boolean;
        getAutoFilter():boolean;
        getAutoSort():boolean;
        getBubbleEvents():any;
        getById(id: any):Ext.data.Model;
        getCount():number;
        getFilters():any;
        getGroupDir():string;
        getGroups():Ext.util.GroupCollection;
        getListeners():any;
        getPageSize():number;
        getRange(start: number, end: number):Ext.data.Model[];
        getRemoteFilter():boolean;
        getRemoteSort():boolean;
        getSorters():any;
        getStatefulFilters():boolean;
        getStoreId():string;
        group(grouper: any, direction?: string):void;
        hasListener(eventName: string):boolean;
        isFiltered():boolean;
        isGrouped():boolean;
        isLoading():boolean;
        isSorted():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeFilter(toRemove: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAutoDestroy(autoDestroy: boolean):void;
        setAutoFilter(autoFilter: boolean):void;
        setAutoSort(autoSort: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setFilters(filters: any):void;
        setGroupDir(groupDir: string):void;
        setGroupField(groupField: string):void;
        setGrouper(grouper: any):void;
        setListeners(listeners: any):void;
        setPageSize(pageSize: number):void;
        setRemoteFilter(remoteFilter: boolean):void;
        setRemoteSort(remoteSort: boolean):void;
        setSorters(sorters: any):void;
        setStatefulFilters(statefulFilters: boolean):void;
        setStoreId(storeId: string):void;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config?: any);
    }
    export class Batch extends Ext.Base {
        exceptions: Ext.data.operation.Operation[];
        hasListeners: any;
        constructor(config?: any);
        add(operation: any):Ext.data.Batch;
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getCurrent():Ext.data.operation.Operation;
        getExceptions():Ext.data.operation.Operation[];
        getListeners():any;
        getOperations():Ext.data.operation.Operation[];
        getPauseOnException():boolean;
        getTotal():number;
        hasException():boolean;
        hasListener(eventName: string):boolean;
        isComplete():boolean;
        isRunning():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        pause():Ext.data.Batch;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        retry():Ext.data.Batch;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        setPauseOnException(pauseOnException: boolean):void;
        sort():void;
        start(index: any):Ext.data.Batch;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class BufferedStore extends Ext.data.ProxyStore {
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
        constructor();
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):any;
        getById(id: any):Ext.data.Model;
        getByInternalId(internalId: any):Ext.data.Model;
        getModel():Ext.data.Model;
        getSource():any;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        last(grouped?: boolean):any;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        setSource(source: any):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class Connection extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        abort(request?: any):void;
        abortAll():void;
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAsync():boolean;
        getAutoAbort():boolean;
        getBinary():boolean;
        getBubbleEvents():any;
        getCors():boolean;
        getDefaultHeaders():any;
        getDefaultPostHeader():string;
        getDefaultXdrContentType():string;
        getDefaultXhrHeader():string;
        getDisableCaching():boolean;
        getDisableCachingParam():string;
        getExtraParams():any;
        getIsXdr():boolean;
        getListeners():any;
        getMethod():string;
        getPassword():string;
        getTimeout():number;
        getUrl():string;
        getUseDefaultXhrHeader():boolean;
        getUsername():string;
        getWithCredentials():boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: any):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        parseStatus(status: number):any;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        request(options: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAsync(async: boolean):void;
        setAutoAbort(autoAbort: boolean):void;
        setBinary(binary: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
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
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        upload(form: any, url: string, params: string, options: any):void;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Error extends Ext.Base {
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static timeout: number;
        static abort(request?: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static request(options: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class JsonPStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class JsonStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class LocalStore extends Ext.Mixin {
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):any;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        last(grouped?: boolean):any;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        sum(field: string, grouped?: boolean):number;
    }
    export class Model extends Ext.Base {
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
        schema: Ext.data.schema.Schema;
        session: Ext.data.Session;
        store: Ext.data.Store;
        constructor(data: any, session: any);
        abort():void;
        beginEdit():void;
        cancelEdit():void;
        clone(session?: any):Ext.data.Model;
        commit(silent?: boolean, modifiedFieldNames?: string[]):void;
        copy(newId?: string, session?: Ext.data.Session):Ext.data.Model;
        drop(cascade?: boolean):void;
        endEdit(silent?: boolean, modifiedFieldNames?: string[]):void;
        erase(options: any):Ext.data.operation.Operation;
        get(fieldName: string):any;
        getAssociatedData(result?: any):any;
        getChanges():any;
        getCriticalFields():Ext.data.field.Field[];
        getData(options?: any):any;
        getFields():Ext.data.field.Field[];
        getId():any;
        getIdProperty():string;
        getModified(fieldName: any):any;
        getObservableId():void;
        getPrevious(fieldName: string):any;
        getProxy():Ext.data.proxy.Proxy;
        getTransientFields():Ext.data.field.Field[];
        getValidation(refresh?: boolean):Ext.data.Validation;
        isLoading():boolean;
        isModified(fieldName: string):boolean;
        isValid():boolean;
        join(item: Ext.data.Store):void;
        load(options?: any):Ext.data.operation.Operation;
        onLoad():void;
        reject(silent?: boolean):void;
        save(options?: any):Ext.data.operation.Operation;
        set(fieldName: any, newValue: any, options?: any):string[];
        setId(id: any):void;
        setSession(session: Ext.data.Session):void;
        toUrl():string;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.ErrorCollection;
        static addFields(newFields: any):void;
        static getProxy():Ext.data.proxy.Proxy;
        static load(id: any, options?: any, session?: Ext.data.Session):Ext.data.Model;
        static removeFields(removeFields: any):void;
        static replaceFields(newFields: any, removeFields: any):void;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class ModelManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getModel(id: any):Ext.data.Model;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
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
        bubble(fn: Function, scope?: any, args?: any[]):void;
        cascadeBy(spec: any):void;
        collapse(recursive?: boolean, callback?: Function, scope?: any):void;
        collapseChildren(recursive?: Function, callback?: Function, scope?: any):void;
        contains(node: Ext.data.NodeInterface):boolean;
        copy(id?: string, deep?: boolean):Ext.data.NodeInterface;
        createNode(node: any):Ext.data.NodeInterface;
        eachChild(fn: Function, scope?: any, args?: any[]):void;
        erase(deep: any):void;
        expand(recursive?: boolean, callback?: Function, scope?: any):void;
        expandChildren(recursive?: boolean, callback?: Function, scope?: any):void;
        findChild(attribute: string, value: any, deep?: boolean):Ext.data.NodeInterface;
        findChildBy(fn: Function, scope?: any, deep?: boolean):Ext.data.NodeInterface;
        fireEvent(eventName: string, ...args: any[]):boolean;
        getChildAt(index: number):Ext.data.NodeInterface;
        getDepth():number;
        getOwnerTree():Ext.tree.Panel;
        getPath(field?: string, separator?: string):string;
        getTreeStore():Ext.data.TreeStore;
        hasChildNodes():boolean;
        indexOf(node: Ext.data.NodeInterface):number;
        indexOfId(id: string):number;
        insertBefore(node: any, refNode: Ext.data.NodeInterface):Ext.data.NodeInterface;
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
        remove(erase?: boolean):Ext.data.NodeInterface;
        removeAll(erase?: boolean):Ext.data.NodeInterface;
        removeChild(node: Ext.data.NodeInterface, erase?: boolean):Ext.data.NodeInterface;
        replaceChild(newChild: Ext.data.NodeInterface, oldChild: Ext.data.NodeInterface):Ext.data.NodeInterface;
        serialize():void;
        sort(sortFn?: Function, recursive?: boolean, suppressEvent?: boolean):void;
        updateInfo(commit: boolean, info: any):void;
        static decorate(model: any):void;
    }
    export class NodeStore extends Ext.data.Store {
        isExpandingOrCollapsing: number;
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
        constructor(config?: any);
        findBy(fn: (rec: any, index: any) => any, scope?: any):any;
        findIndexBy(fn: (rec: any, index: any) => any, scope?: any):number;
        getPageSize():number;
        getRootProperty():string;
        setPageSize(pageSize: number):void;
        setRootProperty(rootProperty: string):void;
    }
    export class ProxyStore extends Ext.data.AbstractStore {
        lastOptions: any;
        removed: Ext.data.Model[];
        constructor(config: any);
        getAutoLoad():any;
        getAutoSync():boolean;
        getBatchUpdateMode():string;
        getFields():any[];
        getModel():any;
        getModifiedRecords():Ext.data.Model[];
        getNewRecords():Ext.data.Model[];
        getProxy():any;
        getRemovedRecords():Ext.data.Model[];
        getSortOnLoad():boolean;
        getTotalCount():number;
        getTrackRemoved():boolean;
        getUpdatedRecords():Ext.data.Model[];
        isLoaded():boolean;
        load(options?: any):Ext.data.Store;
        reload(options?: any):void;
        removeAll():void;
        resumeAutoSync(syncNow: boolean):void;
        save():void;
        setAutoLoad(autoLoad: any):void;
        setAutoSync(autoSync: boolean):void;
        setBatchUpdateMode(batchUpdateMode: string):void;
        setFields(fields: any[]):void;
        setModel(model: any):void;
        setProxy(proxy: any):void;
        setSortOnLoad(sortOnLoad: boolean):void;
        setTrackRemoved(trackRemoved: boolean):void;
        suspendAutoSync():void;
        sync(options?: any):Ext.data.Store;
    }
    export class Request extends Ext.Base {
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
        isResultSet: boolean;
        constructor(config?: any);
        getCount():number;
        getLoaded():boolean;
        getMessage():string;
        getRecords():any;
        getSuccess():boolean;
        getTotal():number;
        setCount(count: number):void;
        setLoaded(loaded: boolean):void;
        setMessage(message: string):void;
        setRecords(records: any):void;
        setSuccess(success: boolean):void;
        setTotal(total: number):void;
    }
    export class Session extends Ext.Base {
        constructor(config: any);
        adopt(record: Ext.data.Model):void;
        createRecord(type: any, data?: any):Ext.data.Model;
        getAutoDestroy():boolean;
        getChanges():any;
        getChangesForParent():any;
        getCrudProperties():any;
        getEntityList(entityType: Ext.Class, ids: any[]):Ext.data.Model[];
        getModelIdentifier(entityType: Ext.Class, id: any):string;
        getParent():Ext.data.Session;
        getRecord(type: any, id: any, autoLoad?: any):Ext.data.Model;
        getSaveBatch(sort?: boolean):Ext.data.Batch;
        getSchema():any;
        onInvalidAssociationEntity(entityType: Ext.Class, id: any):void;
        onInvalidEntityCreate(entityType: Ext.Class, id: any):void;
        onInvalidEntityDrop(entityType: Ext.Class, id: any):void;
        onInvalidEntityRead(entityType: Ext.Class, id: any):void;
        onInvalidEntityUpdate(entityType: Ext.Class, id: any, dropped: boolean):void;
        peekRecord(type: any, id: any, deep?: boolean):Ext.data.Model;
        save():void;
        setAutoDestroy(autoDestroy: boolean):void;
        setCrudProperties(crudProperties: any):void;
        setParent(parent: Ext.data.Session):void;
        setSchema(schema: any):void;
        spawn():Ext.data.Session;
        update(data: any):void;
        visitData(visitor: any):any;
    }
    export class SortTypes {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static stripTagsRE: RegExp;
        static asDate(s: any):number;
        static asFloat(s: any):number;
        static asInt(s: any):number;
        static asText(s: any):string;
        static asUCString(s: any):string;
        static asUCText(s: any):string;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static none(s: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Store extends Ext.data.ProxyStore {
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
        first(grouped?: boolean):any;
        getById(id: any):Ext.data.Model;
        getByInternalId(internalId: any):Ext.data.Model;
        getClearOnPageLoad():boolean;
        getClearRemovedOnLoad():boolean;
        getData():any;
        getSession():Ext.data.Session;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        insert(index: number, records: Ext.data.Model[]):Ext.data.Model[];
        last(grouped?: boolean):any;
        loadData(data: any, append?: boolean):void;
        loadPage(page: number, options?: any):void;
        loadRawData(data: any[], append?: boolean):boolean;
        loadRecords(records: Ext.data.Model[], options: any):void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        nextPage(options: any):void;
        previousPage(options: any):void;
        query(property: string, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        rejectChanges():void;
        remove(records: any):void;
        removeAt(index: number, count?: number):void;
        setClearOnPageLoad(clearOnPageLoad: boolean):void;
        setClearRemovedOnLoad(clearRemovedOnLoad: boolean):void;
        setData(data: any):void;
        setSession(session: Ext.data.Session):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
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
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: (item: any, key: string) => any, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(o: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorterCount():void;
        static getSorters():any;
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initConfig(config: any):Ext.Base;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static lookup(store: any):Ext.data.Store;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: any):void;
        static sort(sorters?: any, direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unregister(...stores: any[]):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class TreeModel extends Ext.data.Model {
        constructor(data: any, session: any);
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class TreeStore extends Ext.data.NodeStore {
        isTreeStore: boolean;
        constructor(config?: any);
        getDefaultRootProperty():string;
        getNodeById(id: string):Ext.data.NodeInterface;
        getParentIdProperty():string;
        getRoot():any;
        getRootNode():Ext.data.NodeInterface;
        setDefaultRootProperty(defaultRootProperty: string):void;
        setParentIdProperty(parentIdProperty: string):void;
        setRoot(root: any):void;
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static stripRe: RegExp;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Validation extends Ext.data.Model {
        record: Ext.data.Model;
        constructor(data: any, session: any);
    }
    export class XmlStore extends Ext.data.Store {
        constructor(config: any);
    }
}
declare module Ext.data.amf {
    export class Encoder extends Ext.Base {
        bytes: any[];
        constructor(config: any);
        applyFormat(protocol_version: number):void;
        clear():void;
        encodeUtf8Char(c: number):any[];
        encodeXInt(value: number, byte_count: number):any[];
        getFormat():number;
        isXmlDocument(item: any):boolean;
        setFormat(format: number):void;
        write0ObjectProperty(key: string, value: any):void;
        write0ShortUtf8String(str: string):void;
        write0StrictArray(arr: any[]):void;
        write3ByteArray(arr: any[]):void;
        write3XmlDocument(xml: any):void;
        writeAmfPacket(headers: any[], messages: any[]):void;
        writeObject(item: any):void;
    }
    export class Packet extends Ext.Base {
        headers: any[];
        messages: any[];
        version: number;
        decode(byteArray: any[]):Ext.data.amf.Packet;
        decodeValue(byteArray: any[]):any;
    }
    export class Proxy extends Ext.data.proxy.Ajax {
        constructor(config?: any);
    }
    export class Reader extends Ext.data.reader.Json {
        constructor(config?: any);
    }
    export class RemotingMessage extends Ext.Base {
        body: any[];
        clientID: string;
        destination: string;
        headers: any;
        messageId: string;
        operation: string;
        source: any[];
        timeToLive: number;
        timestamp: number;
        constructor(config: any);
        encodeMessage():void;
        get$flexType():string;
        set$flexType($flexType: string):void;
    }
    export class XmlDecoder extends Ext.Base {
        constructor(config: any);
        clear():void;
        readAmfxMessage(xml: string):any;
        readArray(node: any):any[];
        readDictionary(node: any):any;
        readObject(the: any):any;
        readObjectRef(node: any):any;
        readString(node: any):string;
        readTraits(node: any):any[];
        readValue(node: HTMLElement):any;
        static decodeTidFromFlexUID(messageId: string):number;
        static readAMF3Value(bytes: any[]):any;
        static readByteArray(node: any):any[];
    }
    export class XmlEncoder extends Ext.Base {
        body: string;
        constructor(config: any);
        clear():void;
        encodeAmfxRemotingPacket(message: Ext.data.amf.RemotingMessage):void;
        encodeArray(array: any[]):void;
        encodeBoolean(val: boolean):void;
        encodeByteArray(array: any[]):void;
        encodeDate(date: Date):void;
        encodeDouble(num: number):void;
        encodeGenericObject(obj: any):string;
        encodeInt(num: number):void;
        encodeNull():void;
        encodeNumber(num: number):void;
        encodeObject(item: any):string;
        encodeString(str: string):void;
        encodeUndefined():void;
        encodeXml(xml: any):void;
        isXmlDocument(item: any):boolean;
        writeAmfxRemotingPacket(message: Ext.data.amf.RemotingMessage):void;
        writeArray(array: any[]):void;
        writeBoolean(val: boolean):void;
        writeByteArray(array: any[]):void;
        writeDate(date: Date):void;
        writeDouble(num: number):void;
        writeGenericObject(obj: any):void;
        writeInt(num: number):void;
        writeNull():void;
        writeNumber(num: number):void;
        writeObject(item: any):void;
        writeString(str: string):void;
        writeUndefined():void;
        writeXml(xml: any):void;
        static generateFlexUID(id: number):string;
        static randomInt(from: number, to: number):number;
    }
}
declare module Ext.data.field {
    export class Boolean extends Ext.data.field.Field {
        trueRe: RegExp;
        constructor(config: any);
    }
    export class Date extends Ext.data.field.Field {
        constructor(config: any);
        getDateFormat():string;
        getDateReadFormat():string;
        getDateWriteFormat():string;
    }
    export class Field extends Ext.Base {
        calculated: boolean;
        defaultInvalidMessage: string;
        definedBy: Ext.Class;
        factoryConfig: any;
        identifier: boolean;
        ordinal: number;
        stripRe: RegExp;
        constructor(config: any);
        convert(value: any, record: Ext.data.Model):any;
        getAllowBlank():boolean;
        getAllowNull():boolean;
        getConvert():Function;
        getDefaultValue():any;
        getDepends():string[];
        getMapping():any;
        getName():string;
        getPersist():boolean;
        getSortDir():string;
        getSortType():Function;
        getType():string;
        hasMapping():boolean;
        serialize(value: any, record: Ext.data.Model):string;
        validate(value: any, separator?: string, errors?: Ext.data.ErrorCollection):any;
    }
    export class Integer extends Ext.data.field.Field {
        constructor(config: any);
    }
    export class Number extends Ext.data.field.Field {
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
        factoryConfig: any;
        isGenerator: boolean;
        constructor(config?: any);
        generate():any;
        getId():string;
        setId(id: string):void;
    }
    export class Negative extends Ext.data.identifier.Sequential {
        constructor(config?: any);
    }
    export class Sequential extends Ext.data.identifier.Generator {
        constructor(config?: any);
        getIncrement():number;
        getPrefix():string;
        getSeed():number;
        setIncrement(increment: number):void;
        setPrefix(prefix: string):void;
        setSeed(seed: number):void;
    }
    export class Uuid extends Ext.data.identifier.Generator {
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
        id: any;
        members: any;
        side: Ext.data.matrix.Side;
        constructor(side: any, id: any);
    }
}
declare module Ext.data.operation {
    export class Create extends Ext.data.operation.Operation {
        constructor(config?: any);
    }
    export class Destroy extends Ext.data.operation.Operation {
        constructor(config?: any);
    }
    export class Operation extends Ext.Base {
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
    }
}
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        constructor(config?: any);
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
        constructor(config?: any);
        getDirectFn():any;
        getParamOrder():any;
        getParamsAsHash():boolean;
        setDirectFn(directFn: any):void;
        setParamOrder(paramOrder: any):void;
        setParamsAsHash(paramsAsHash: boolean):void;
    }
    export class JsonP extends Ext.data.proxy.Server {
        constructor(config?: any);
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
        constructor(config?: any);
        getData():any;
        getEnablePaging():boolean;
        setData(data: any):void;
        setEnablePaging(enablePaging: boolean):void;
    }
    export class Proxy extends Ext.Base {
        factoryConfig: any;
        hasListeners: any;
        isProxy: boolean;
        isSynchronous: boolean;
        constructor(config?: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        create(operation: Ext.data.operation.Operation):void;
        destroy():void;
        enableBubble(events: any):void;
        erase(operation: Ext.data.operation.Operation):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBatchActions():boolean;
        getBatchOrder():string;
        getBubbleEvents():any;
        getListeners():any;
        getModel():any;
        getReader():any;
        getWriter():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        read(operation: Ext.data.operation.Operation):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBatchActions(batchActions: boolean):void;
        setBatchOrder(batchOrder: string):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        setModel(model: any):void;
        setReader(reader: any):void;
        setWriter(writer: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        update(operation: Ext.data.operation.Operation):void;
    }
    export class Rest extends Ext.data.proxy.Ajax {
        actionMethods: any;
        constructor(config?: any);
        getAppendId():boolean;
        getFormat():string;
        setAppendId(appendId: boolean):void;
        setFormat(format: string):void;
    }
    export class Server extends Ext.data.proxy.Proxy {
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
    export class Sql extends Ext.data.proxy.Client {
        constructor(config?: any);
        getColumns():string;
        getDatabase():string;
        getDefaultDateFormat():string;
        getRecordData(record: any):any;
        getTable():string;
        getTableExists():boolean;
        getUniqueIdStrategy():boolean;
        setColumns(columns: string):void;
        setDatabase(database: string):void;
        setDefaultDateFormat(defaultDateFormat: string):void;
        setTable(table: string):void;
        setTableExists(tableExists: boolean):void;
        setUniqueIdStrategy(uniqueIdStrategy: boolean):void;
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
        factoryConfig: any;
        hasListeners: any;
        isReader: boolean;
        metaData: any;
        rawData: any;
        constructor(config?: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getData(data: any):any;
        getImplicitIncludes():boolean;
        getListeners():any;
        getMessageProperty():string;
        getModel():any;
        getReadRecordsOnFailure():boolean;
        getResponseData(response: any):any;
        getRootProperty():string;
        getSuccessProperty():string;
        getTotalProperty():string;
        getTransform():any;
        getTypeProperty():string;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        read(response: any, readOptions?: any):Ext.data.ResultSet;
        readRecords(data: any, readOptions?: any):Ext.data.ResultSet;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setImplicitIncludes(implicitIncludes: boolean):void;
        setListeners(listeners: any):void;
        setMessageProperty(messageProperty: string):void;
        setModel(model: any):void;
        setReadRecordsOnFailure(readRecordsOnFailure: boolean):void;
        setRootProperty(rootProperty: string):void;
        setSuccessProperty(successProperty: string):void;
        setTotalProperty(totalProperty: string):void;
        setTransform(transform: any):void;
        setTypeProperty(typeProperty: string):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        xmlData: any;
        constructor(config?: any);
        getNamespace():string;
        getRecord():string;
        setNamespace(namespace: string):void;
        setRecord(record: string):void;
    }
}
declare module Ext.data.schema {
    export class Association extends Ext.Base {
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
        getEntityName(cls: any):string;
        getNamer():any;
        getNamespace():string;
        getProxy():any;
        getUrlPrefix():string;
        hasAssociations(The: any):boolean;
        hasEntity(entity: any):boolean;
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
declare module Ext.data.soap {
    export class Proxy extends Ext.data.proxy.Ajax {
        actionMethods: any;
        constructor(config?: any);
        getCreateBodyTpl():any;
        getDestroyBodyTpl():any;
        getEnvelopeTpl():any[];
        getOperationParam():string;
        getReadBodyTpl():any;
        getSoapAction():any;
        getTargetNamespace():string;
        getUpdateBodyTpl():any;
        getWriteBodyTpl():any;
        setCreateBodyTpl(createBodyTpl: any):void;
        setDestroyBodyTpl(destroyBodyTpl: any):void;
        setEnvelopeTpl(envelopeTpl: any[]):void;
        setOperationParam(operationParam: string):void;
        setReadBodyTpl(readBodyTpl: any):void;
        setSoapAction(soapAction: any):void;
        setTargetNamespace(targetNamespace: string):void;
        setUpdateBodyTpl(updateBodyTpl: any):void;
        setWriteBodyTpl(writeBodyTpl: any):void;
    }
    export class Reader extends Ext.data.reader.Xml {
        constructor(config?: any);
    }
}
declare module Ext.data.validator {
    export class Bound extends Ext.data.validator.Validator {
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
        constructor();
        getMessage():string;
        setMessage(message: string):void;
    }
    export class Format extends Ext.data.validator.Validator {
        constructor();
        getMatcher():RegExp;
        getMessage():string;
        setMatcher(matcher: RegExp):void;
        setMessage(message: string):void;
    }
    export class Inclusion extends Ext.data.validator.List {
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
        constructor(config: any);
        getList():any[];
        setList(list: any[]):void;
    }
    export class Presence extends Ext.data.validator.Validator {
        constructor(config: any);
        getAllowEmpty():boolean;
        getMessage():string;
        setAllowEmpty(allowEmpty: boolean):void;
        setMessage(message: string):void;
    }
    export class Range extends Ext.data.validator.Bound {
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
        validate(value: any, record: Ext.data.Model):any;
    }
}
declare module Ext.data.writer {
    export class Json extends Ext.data.writer.Writer {
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
        constructor(config?: any);
        getDefaultDocumentRoot():string;
        getDocumentRoot():string;
        getHeader():string;
        getRecord():string;
        setDefaultDocumentRoot(defaultDocumentRoot: string):void;
        setDocumentRoot(documentRoot: string):void;
        setHeader(header: string):void;
        setRecord(record: string):void;
    }
}
declare module Ext.dd {
    export class DD extends Ext.dd.DragDrop {
        scroll: boolean;
        constructor(id: string, sGroup: string, config: any);
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
        static dragCls: string;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static mode: number;
        static notifyOccluded: boolean;
        static preventDefault: boolean;
        static self: Ext.Class;
        static stopPropagation: boolean;
        static useCache: boolean;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getBestMatch(dds: Ext.dd.DragDrop[]):Ext.dd.DragDrop;
        static getConfig(name?: string, peek?: boolean):any;
        static getCss(id: string):any;
        static getDDById(id: string):Ext.dd.DragDrop;
        static getElement(id: string):any;
        static getInitialConfig(name?: string):any;
        static getLocation(oDD: Ext.dd.DragDrop):Ext.util.Region;
        static getRelated(p_oDD: Ext.dd.DragDrop, bTargetsOnly: boolean):Ext.dd.DragDrop[];
        static initConfig(config: any):Ext.Base;
        static isDragDrop(id: string):boolean;
        static isHandle(id: string):boolean;
        static isLegalTarget(oDD: Ext.dd.DragDrop, oTargetDD: Ext.dd.DragDrop):boolean;
        static isLocked():boolean;
        static isTypeOfDD(the: any):boolean;
        static lock():void;
        static refreshCache(groups: any):void;
        static regDragDrop(oDD: Ext.dd.DragDrop, sGroup: string):void;
        static regHandle(sDDId: string, sHandleId: string):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static startDrag(x: number, y: number):void;
        static statics():Ext.Class;
        static stopEvent(e: Event):void;
        static unlock():void;
        static verifyEl(el: HTMLElement):boolean;
    }
    export class DragSource extends Ext.dd.DDProxy {
        dragData: any;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getDragTarget():Ext.dom.Element;
        getOffset(constrainMode?: string):number[];
        hasListener(eventName: string):boolean;
        initEl(el: any):void;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onBeforeStart(e: Ext.event.Event):void;
        onDrag(e: Ext.event.Event):void;
        onEnd(e: Ext.event.Event):void;
        onStart(e: Ext.event.Event):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        constructor(el: any, config: any);
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getHandle(id: any):any;
        static getHandleFromEvent(e: Event):any;
        static getInitialConfig(name?: string):any;
        static getTarget(id: any):any;
        static getTargetFromEvent(e: Event):any;
        static initConfig(config: any):Ext.Base;
        static register(element: any, data: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static unregister(element: any):void;
    }
    export class ScrollManager {
        static animDuration: number;
        static animate: boolean;
        static ddGroup: string;
        static frequency: number;
        static hthresh: any;
        static increment: number;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static vthresh: any;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static refreshCache():void;
        static register(el: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
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
    export class AmfRemotingProvider extends Ext.direct.Provider {
        constructor(config: any);
        createEvent(response: any):Ext.direct.Event;
        getActions():any;
        getBinary():string;
        getEnableBuffer():any;
        getEnableUrlEncode():string;
        getEndpoint():string;
        getMaxRetries():number;
        getNamespace():any;
        getTimeout():number;
        getUrl():string;
        setActions(actions: any):void;
        setBinary(binary: string):void;
        setEnableBuffer(enableBuffer: any):void;
        setEnableUrlEncode(enableUrlEncode: string):void;
        setEndpoint(endpoint: string):void;
        setMaxRetries(maxRetries: number):void;
        setNamespace(namespace: any):void;
        setTimeout(timeout: number):void;
        setUrl(url: string):void;
    }
    export class Event extends Ext.Base {
        constructor(config?: any);
        getData():any;
        getName():string;
    }
    export class ExceptionEvent extends Ext.direct.RemotingEvent {
        constructor(config?: any);
    }
    export class JsonProvider extends Ext.direct.Provider {
        createEvent(response: any):Ext.direct.Event;
        createEvents(response: any):Ext.direct.Event[];
    }
    export class Manager {
        static exceptions: any;
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isObservable: boolean;
        static self: Ext.Class;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addProvider(...provider: any[]):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getProvider(id: any):void;
        static hasListener(eventName: string):boolean;
        static initConfig(config: any):Ext.Base;
        static isSuspended(event?: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static parseMethod(fn: any):Function;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: any):Ext.direct.Provider;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
    }
    export class Provider extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isConnected():void;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
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
    }
    export class Transaction extends Ext.Base {
        constructor(config?: any);
    }
}
declare module Ext.dom {
    export class ButtonElement extends Ext.dom.Element {
    }
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(element: any);
    }
    export class CompositeElementLite extends Ext.Base {
        component: Ext.Component;
        elements: HTMLElement[];
        isComposite: boolean;
        constructor(element: any);
        add(els: any, root?: any):Ext.dom.CompositeElementLite;
        addCls(names: any, prefix?: string, suffix?: string):void;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element;
        appendTo(el: any):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        center(centerIn: any):void;
        child(selector: string, returnDom?: boolean):any;
        clear(removeDom?: boolean):void;
        contains(el: any):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        cssTranslate():void;
        destroy():void;
        down(selector: string, returnDom?: boolean):any;
        each(fn: (el: Ext.dom.Element, c: Ext.dom.CompositeElementLite, index: number) => any, scope?: any):Ext.dom.CompositeElementLite;
        fill(els: any):Ext.dom.CompositeElementLite;
        filter(selector: any):Ext.dom.CompositeElementLite;
        findParent(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        first():Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        getActiveElement():HTMLElement;
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getById(id: string, asDom?: boolean):void;
        getCount():number;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getLeft(local: boolean):number;
        getMargin(sides?: string):any;
        getOuterHeight():void;
        getOuterWidth():void;
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRight(local: boolean):number;
        getScrollParent():void;
        getSize(contentSize?: boolean):any;
        getStyle(property: any, inline?: boolean):any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):any;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        hasCls(name: string):boolean;
        hide():Ext.dom.Element;
        id(obj?: any, prefix?: string):string;
        indexOf(el: any):number;
        insertAfter(el: any):Ext.dom.Element;
        insertBefore(el: any):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element;
        insertHtml(where: string, html: string, returnEl?: boolean):any;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element;
        is(selector: any):boolean;
        isAncestor(el: any):boolean;
        isDescendent():void;
        isStyle(style: string, value: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        next(selector?: string, returnDom?: boolean):any;
        parent(selector?: string, returnDom?: boolean):any;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):any;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):any;
        radioCls(className: any):Ext.dom.Element;
        remove():void;
        removeAllListeners():void;
        removeCls(names: any, prefix?: string, suffix?: string):void;
        removeElement(el: any, removeDom?: boolean):Ext.dom.CompositeElementLite;
        repaint():Ext.dom.Element;
        replace(el: any, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceElement(el: any, replacement: any, domReplace?: boolean):Ext.dom.CompositeElementLite;
        replaceWith(el: any):Ext.dom.Element;
        select(selector: any, composite: boolean):any;
        selectNode(selector: string, asDom?: boolean):HTMLElement;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: any):Ext.dom.Element;
        setCls(className: any):void;
        setHTML(html: string):void;
        setHeight(height: any):Ext.dom.Element;
        setHtml(html: string):void;
        setLeft(left: any):Ext.dom.Element;
        setMaxHeight(height: any):Ext.dom.Element;
        setMaxWidth(width: any):Ext.dom.Element;
        setMinHeight(height: any):Ext.dom.Element;
        setMinWidth(width: any):Ext.dom.Element;
        setRight(right: any):Ext.dom.Element;
        setSize(width: any, height: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: any):Ext.dom.Element;
        setTopLeft():void;
        setVisibilityMode(mode: any):Ext.dom.Element;
        setVisible(visible: boolean):Ext.dom.Element;
        setWidth(width: any):Ext.dom.Element;
        setX(x: number):Ext.dom.Element;
        setXY(xy: number[]):Ext.dom.Element;
        setY(y: number):Ext.dom.Element;
        show():Ext.dom.Element;
        slice(start?: number, end?: number):HTMLElement[];
        toggle():Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        up(selector: string, limit?: any, returnDom?: boolean):Ext.dom.Element;
        update(html: string):void;
        wrap(config?: any, returnDom?: boolean, selector?: string):any;
    }
    export class Element extends Ext.Base {
        component: Ext.Component;
        dom: HTMLElement;
        hasListeners: any;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addCls(names: any, prefix?: string, suffix?: string):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        alignTo(element: any, position?: string, offsets?: number[]):Ext.util.Positionable;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element;
        appendTo(el: any):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        center(centerIn: any):void;
        child(selector: string, returnDom?: boolean):any;
        clearListeners():void;
        contains(element: any):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        cssTranslate():void;
        down(selector: string, returnDom?: boolean):any;
        enableBubble(events: any):void;
        findParent(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: any, returnEl?: boolean):HTMLElement;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        first(selector?: string, returnDom?: boolean):any;
        focus(defer?: number):Ext.dom.Element;
        getActiveElement():HTMLElement;
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getBubbleEvents():any;
        getById(id: string, asDom?: boolean):void;
        getConstrainVector(constrainTo?: any, proposedPosition?: number[], proposedSize?: number[]):any;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getLeft(local: boolean):number;
        getListeners():any;
        getLocalX():number;
        getLocalXY():number[];
        getLocalY():number;
        getMargin(sides?: string):any;
        getOffsetsTo(offsetsTo: any):number[];
        getOuterHeight():void;
        getOuterWidth():void;
        getPadding(side: string):number;
        getPageBox(asRegion?: boolean):any;
        getRegion():Ext.util.Region;
        getRight(local: boolean):number;
        getScrollParent():void;
        getSize(contentSize?: boolean):any;
        getStyle(property: any, inline?: boolean):any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getValue(asNumber: boolean):any;
        getViewRegion():Ext.util.Region;
        getViewSize():any;
        getWidth(contentWidth?: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        hasCls(name: string):boolean;
        hasListener(eventName: string):boolean;
        hide():Ext.dom.Element;
        id(obj?: any, prefix?: string):string;
        insertAfter(el: any):Ext.dom.Element;
        insertBefore(el: any):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element;
        insertHtml(where: string, html: string, returnEl?: boolean):any;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element;
        is(selector: any):boolean;
        isAncestor(el: any):boolean;
        isDescendent():void;
        isStyle(style: string, value: string):boolean;
        isSuspended(eventName?: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        last(selector?: string, returnDom?: boolean):any;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        move(direction: string, distance: number):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        next(selector?: string, returnDom?: boolean):any;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):any;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):any;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):any;
        radioCls(className: any):Ext.dom.Element;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove():void;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeAllListeners():void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeCls(names: any, prefix?: string, suffix?: string):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        repaint():Ext.dom.Element;
        replace(el: any, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.Element;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        select(selector: any, composite: boolean):any;
        selectNode(selector: string, asDom?: boolean):HTMLElement;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: any):Ext.dom.Element;
        setBox(box: any):Ext.util.Positionable;
        setBubbleEvents(bubbleEvents: any):void;
        setCls(className: any):void;
        setHTML(html: string):void;
        setHeight(height: any):Ext.dom.Element;
        setHtml(html: string):void;
        setLeft(left: any):Ext.dom.Element;
        setListeners(listeners: any):void;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: any, y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setMaxHeight(height: any):Ext.dom.Element;
        setMaxWidth(width: any):Ext.dom.Element;
        setMinHeight(height: any):Ext.dom.Element;
        setMinWidth(width: any):Ext.dom.Element;
        setRight(right: any):Ext.dom.Element;
        setSize(width: any, height: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setTop(top: any):Ext.dom.Element;
        setTopLeft():void;
        setVisibilityMode(mode: any):Ext.dom.Element;
        setVisible(visible: boolean):Ext.dom.Element;
        setWidth(width: any):Ext.dom.Element;
        setX(x: number):Ext.dom.Element;
        setXY(xy: number[]):Ext.dom.Element;
        setY(y: number):Ext.dom.Element;
        show():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        toggle():Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        translatePoints(x: any, y?: number):any;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        up(selector: string, limit?: any, returnDom?: boolean):Ext.dom.Element;
        update(html: string):void;
        wrap(config?: any, returnDom?: boolean, selector?: string):any;
        static fly(dom: any, named?: string):Ext.dom.Element;
        static fromPoint(x: number, y: number):string;
        static get(element: any):Ext.dom.Element;
        static getDocumentHeight():number;
        static getDocumentWidth():number;
        static getOrientation():string;
        static getViewSize():any;
        static getViewportHeight():number;
        static getViewportWidth():number;
        static normalize(prop: string):string;
        static parseBox(box: any):any;
        static parseStyles(styles: string):any;
        static query(selector: string, asDom?: boolean, root?: any):any;
        static serializeForm(form: any):string;
        static unitizeBox(box: any, units: string):string;
    }
    export class Fly extends Ext.dom.Element {
        isFly: boolean;
        constructor(element: any);
    }
    export class GarbageCollector {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Helper extends Ext.Base {
        append(el: any, o: any, returnElement?: boolean):any;
        applyStyles(el: any, styles: any):void;
        createDom(o: any):HTMLElement;
        createHtml(spec: any):void;
        createTemplate(o: any):Ext.Template;
        generateStyles(styles: any, buffer?: string[], encode?: boolean):any;
        insertAfter(el: any, o: any, returnElement?: boolean):any;
        insertBefore(el: any, o: any, returnElement?: boolean):any;
        insertFirst(el: any, o: any, returnElement?: boolean):any;
        insertHtml(where: string, el: any, html: string):HTMLElement;
        markup(spec: any):string;
        overwrite(el: any, o: any, returnElement?: boolean):any;
    }
    export class Layer extends Ext.dom.Element {
        constructor(config?: any, existingEl?: any);
        setZIndex(zindex: number):Ext.dom.Layer;
    }
    export class Query {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static matchers: any;
        static operators: any;
        static pseudos: any;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static compile(selector: string, type?: string):Function;
        static destroy():void;
        static filter(el: HTMLElement[], selector: string, nonMatches: boolean):HTMLElement[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getNodeValue(The: any, defaultValue?: string):string;
        static initConfig(config: any):Ext.Base;
        static is(el: any, selector: string):boolean;
        static jsSelect(selector: string, root?: any):HTMLElement[];
        static select(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
        static selectNode(selector: string, root?: HTMLElement):HTMLElement;
        static selectNumber(selector: string, root?: HTMLElement, defaultValue?: number):number;
        static selectValue(selector: string, root?: HTMLElement, defaultValue?: string):string;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
}
declare module Ext.draw {
    export class Animator {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static add(animation: any):void;
        static addFrameCallback(callback: Function, scope: any):string;
        static animationTime():number;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static cancel(id: string):void;
        static contains(animation: any):boolean;
        static destroy():void;
        static empty():boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static remove(animation: any):void;
        static removeFrameCallback(id: string):void;
        static schedule(callback: Function, scope: any):string;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static step(frameTime: number):void;
    }
    export class Color extends Ext.Base {
        constructor(red: number, green: number, blue: number, alpha?: number);
        createDarker(factor?: number):Ext.draw.Color;
        createLighter(factor?: number):Ext.draw.Color;
        getGrayscale():number;
        getHSL(target?: any[]):any[];
        setFromString(str: string):any;
        setHSL(h: number, s: number, l: number):any;
        toHex(color: any):string;
        toString():string;
        static fly(red: any, green?: number, blue?: number, alpha?: number):Ext.draw.Color;
        static fromHSL(h: number, s: number, l: number):Ext.draw.Color;
        static fromString(string: string):Ext.draw.Color;
    }
    export class Container extends Ext.draw.ContainerBase {
        defaultDownloadServerUrl: string;
        constructor(config: any);
        download(config?: any):boolean;
        getBackground():any;
        getCls():string;
        getGradients():any[];
        getImage(format?: string):any;
        getResizeHandler():Function;
        getSprites():any;
        getSurface(id?: string):Ext.draw.Surface;
        onPlaceWatermark(width: number, height: number):void;
        renderFrame():void;
        setBackground(background: any):void;
        setCls(cls: string):void;
        setGradients(gradients: any[]):void;
        setResizeHandler(resizeHandler: Function):void;
        setSprites(sprites: any):void;
    }
    export class ContainerBase extends Ext.panel.Panel {
        constructor(config: any);
    }
    export class Draw {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static degrees(radian: number):number;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static isBBoxIntersect(bbox1: any, bbox2: any, padding?: number):boolean;
        static rad(degrees: number):number;
        static reflectFn(a: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static smooth(dataX: any, dataY: any, value: any):any;
        static spline(points: any[]):void;
        static statics():Ext.Class;
    }
    export class LimitedCache extends Ext.Base {
        constructor(config: any);
        clear():void;
        get(id: string, ...args: any[]):any;
        getFeeder():Function;
        getLimit():number;
        getScope():any;
        setFeeder(feeder: Function):number;
        setLimit(limit: number):void;
        setScope(scope: any):void;
    }
    export class Matrix extends Ext.Base {
        a: number;
        constructor(xx: number, xy: number, yx: number, yy: number, dx: number, dy: number);
        append(xx: number, xy: number, yx: number, yy: number, dx: number, dy: number):Ext.draw.Matrix;
        appendMatrix(matrix: Ext.draw.Matrix):Ext.draw.Matrix;
        clone():Ext.draw.Matrix;
        equals(matrix: Ext.draw.Matrix):boolean;
        flipX():Ext.draw.Matrix;
        flipY():Ext.draw.Matrix;
        getDX():number;
        getDY():number;
        getScaleX():number;
        getScaleY():number;
        getXX():number;
        getXY():number;
        getYX():number;
        getYY():number;
        inverse(target?: Ext.draw.Matrix):Ext.draw.Matrix;
        isIdentity():boolean;
        multiply(matrix: Ext.draw.Matrix):Ext.draw.Matrix;
        prepend(xx: number, xy: number, yx: number, yy: number, dx: number, dy: number):Ext.draw.Matrix;
        prependMatrix(matrix: Ext.draw.Matrix):Ext.draw.Matrix;
        reset():Ext.draw.Matrix;
        rotate(angle: number, rcx: any, rcy: any, prepend?: boolean):Ext.draw.Matrix;
        rotateFromVector(x: number, y: number, prepend?: boolean):Ext.draw.Matrix;
        scale(sx: number, sy: number, scx: number, scy: number, prepend?: boolean):Ext.draw.Matrix;
        set(xx: number, xy: number, yx: number, yy: number, dx: number, dy: number):Ext.draw.Matrix;
        skewX(angle: number):Ext.draw.Matrix;
        skewY(angle: number):Ext.draw.Matrix;
        split():any;
        toArray():any[];
        toContext(ctx: any):Ext.draw.Matrix;
        toString():any[];
        toSvg():string;
        toVerticalArray():any;
        transformBBox(bbox: any, radius?: number, target?: any):any;
        transformList(list: any[]):any[];
        transformPoint(point: any[]):any[];
        translate(x: number, y: number, prepend?: boolean):Ext.draw.Matrix;
        x(x: number, y: number):number;
        y(x: number, y: number):number;
        static createAffineMatrixFromTwoPair(x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number):void;
        static createPanZoomFromTwoPair(x0: number, y0: number, x1: number, y1: number, x0p: number, y0p: number, x1p: number, y1p: number):void;
        static fly(elements: any[]):Ext.draw.Matrix;
    }
    export class Path extends Ext.Base {
        constructor(pathString: string);
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number):void;
        arcSvg(rx: number, ry: number, rotation: number, fA: number, fS: number, x2: number, y2: number):void;
        arcTo(x1: number, y1: number, x2: number, y2: number, rx?: number, ry?: number, rotation?: number):void;
        bezierCurveTo(cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number):void;
        clear():void;
        clone():Ext.draw.Path;
        closePath():void;
        ellipse(cx: number, cy: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: number):void;
        fromStripes(stripes: any[]):void;
        fromSvgString(pathString: string):void;
        getDimension(target?: any):any;
        getDimensionWithTransform(matrix: Ext.draw.Matrix, target?: any):any;
        isPointInPath(x: number, y: number):boolean;
        lineTo(x: number, y: number):void;
        moveTo(x: number, y: number):void;
        quadraticCurveTo(cx: number, cy: number, x: number, y: number):void;
        rect(x: number, y: number, width: number, height: number):void;
        toString():string;
        toStripes(target?: any[]):any[];
        transform(matrix: Ext.draw.Matrix):void;
    }
    export class SegmentTree extends Ext.Base {
        constructor(config: any);
        getAggregation(min: number, max: number, estStep: number):any;
        getStrategy():string;
        setData(dataX: number, dataOpen: number, dataHigh: number, dataLow: number, dataClose: number):void;
        setStrategy(strategy: string):void;
    }
    export class Solver {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static cubicFunction(a: number, b: number, c: number, d: number):void;
        static cubicRoot(number: number):void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static linearFunction(a: number, b: number):void;
        static quadraticFunction(a: number, b: number, c: number):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Surface extends Ext.draw.SurfaceBase {
        devicePixelRatio: any;
        constructor(config: any);
        add():void;
        clear():void;
        flatten(size: any, surfaces: Ext.draw.Surface[]):any;
        get(id: any):Ext.draw.sprite.Sprite;
        getBBox(sprites: any, isWithoutTransform?: boolean):any;
        getBackground():any;
        getCls():string;
        getDirty():boolean;
        getFlipRtlText():boolean;
        getItems():any[];
        getRect():any[];
        onAdd(sprite: Ext.draw.sprite.Sprite):void;
        remove(sprite: Ext.draw.sprite.Sprite, destroySprite?: boolean):void;
        removeAll(destroySprites?: boolean):void;
        renderFrame():void;
        repaint():void;
        resetTransform():void;
        roundPixel(num: number):number;
        setBackground(background: any):void;
        setCls(cls: string):void;
        setFlipRtlText(flipRtlText: boolean):void;
        setItems(items: any[]):void;
        setRect(rect: any[]):void;
        waitFor(surface: Ext.draw.Surface):void;
        static stableSort(list: any[]):void;
    }
    export class SurfaceBase extends Ext.Widget {
        constructor(config: any);
    }
    export class TextMeasurer {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static measureText(text: string, font: string):any;
        static measureTextSingleLine(text: string, font: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class TimingFunctions {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
}
declare module Ext.draw.engine {
    export class Canvas extends Ext.draw.Surface {
        constructor(config: any);
        getHighPrecision():boolean;
        setHighPrecision(highPrecision: boolean):void;
    }
    export class Svg extends Ext.draw.Surface {
        constructor(config: any);
        bind(f: Function, obj: any, var_args: any):Function;
        createSvgNode(type: string):any;
        getContext():any;
        getHighPrecision():boolean;
        setHighPrecision(highPrecision: boolean):void;
    }
    export class SvgContext extends Ext.Base {
        constructor(SvgSurface: any);
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number):void;
        arcSvg(r1: number, r2: number, rotation: number, large: number, swipe: number, x2: number, y2: number):void;
        arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number):void;
        beginPath():void;
        bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number):void;
        clear():void;
        closePath():void;
        createLinearGradient(x0: number, y0: number, x1: number, y1: number):Ext.draw.engine.SvgContext.Gradient;
        createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number):Ext.draw.engine.SvgContext.Gradient;
        drawImage(image: HTMLElement, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number):void;
        ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: number):void;
        fill():void;
        fillRect(x: number, y: number, width: number, height: number):void;
        fillStroke(attr: any, transformFillStroke?: boolean):void;
        fillText(text: string, x: number, y: number):void;
        lineTo(x: number, y: number):void;
        moveTo(x: number, y: number):void;
        rect(x: number, y: number, width: number, height: number):void;
        restore():void;
        rotate(angle: number):void;
        save():void;
        scale(x: number, y: number):void;
        setTransform(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number):void;
        stroke():void;
        strokeRect(x: number, y: number, width: number, height: number):void;
        strokeText(text: string, x: number, y: number):void;
        transform(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number):void;
        translate(x: number, y: number):void;
    }
}
declare module Ext.draw.engine.SvgContext {
    export class Gradient extends Ext.Base {
        constructor(ctx: any, surface: any, element: any, compression: any);
        addColorStop(offset: number, color: string):void;
    }
}
declare module Ext.draw.gradient {
    export class Gradient extends Ext.Base {
        constructor(config: any);
        generateGradient(ctx: Ext.draw.engine.SvgContext, bbox: any):any;
    }
    export class GradientDefinition {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Linear extends Ext.draw.gradient.Gradient {
        constructor(config: any);
    }
    export class Radial extends Ext.draw.gradient.Gradient {
        constructor(config: any);
        getEnd():any;
        getStart():any;
        setEnd(end: any):void;
        setStart(start: any):void;
    }
}
declare module Ext.draw.modifier {
    export class Animation extends Ext.draw.modifier.Modifier {
        constructor();
        clearDurationOn(attrs: any):void;
        clearEasingOn(attrs: any):void;
        getCustomDuration():any;
        getCustomDurations():any;
        getCustomEasings():any;
        getDuration():number;
        getEasing():Function;
        setCustomDuration(customDuration: any):void;
        setCustomDurations(customDurations: any):void;
        setCustomEasings(customEasings: any):void;
        setDuration(duration: number):void;
        setDurationOn(attrs: any, duration: number):void;
        setEasing(easing: Function):void;
        setEasingOn(attrs: any, easing: string):void;
        stop():void;
    }
    export class Highlight extends Ext.draw.modifier.Modifier {
        constructor(config: any);
        filterChanges(attr: any, changes: any):any;
        getEnabled():boolean;
        getHighlightStyle():any;
        setEnabled(enabled: boolean):void;
        setHighlightStyle(highlightStyle: any):void;
    }
    export class Modifier extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getListeners():any;
        getNext():Ext.draw.modifier.Modifier;
        getPrevious():Ext.draw.modifier.Modifier;
        getSprite():Ext.draw.sprite.Sprite;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        popUp(attributes: any, changes: any):void;
        prepareAttributes(attr: any):void;
        pushDown(attr: any, changes: any):any;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        setNext(next: Ext.draw.modifier.Modifier):void;
        setPrevious(previous: Ext.draw.modifier.Modifier):void;
        setSprite(sprite: Ext.draw.sprite.Sprite):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Target extends Ext.draw.modifier.Modifier {
        constructor(config: any);
    }
}
declare module Ext.draw.sprite {
    export class AnimationParser {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Arc extends Ext.draw.sprite.Circle {
        constructor(config: any);
    }
    export class AttributeDefinition extends Ext.Base {
        constructor(config: any);
        getAliases():any;
        getAnimationProcessors():any;
        getDefaults():any;
        getProcessors():any;
        getUpdaters():any;
        normalize(changes: any, keepUnrecognized: boolean):any;
        setAliases(aliases: any):void;
        setAnimationProcessors(animationProcessors: any):void;
        setDefaults(defaults: any):void;
        setProcessors(processors: any):void;
        setUpdaters(updaters: any):void;
    }
    export class AttributeParser {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Circle extends Ext.draw.sprite.Path {
        constructor(config: any);
    }
    export class Composite extends Ext.draw.sprite.Sprite {
        constructor();
        add(sprite: any):void;
        addAll(sprites: any):void;
    }
    export class Ellipse extends Ext.draw.sprite.Path {
        constructor(config: any);
    }
    export class EllipticalArc extends Ext.draw.sprite.Ellipse {
        constructor(config: any);
    }
    export class Image extends Ext.draw.sprite.Rect {
        constructor(config: any);
    }
    export class Instancing extends Ext.draw.sprite.Sprite {
        constructor(config: any);
        createInstance(config: any, data?: any, bypassNormalization?: boolean, avoidCopy?: boolean):any;
        getBBoxFor(index: number, isWithoutTransform?: boolean):any;
        getTemplate():any;
        setAttributesFor(index: number, changes: any, bypassNormalization?: boolean):void;
        setTemplate(template: any):void;
    }
    export class Path extends Ext.draw.sprite.Sprite {
        static debug: boolean;
        constructor(config: any);
        updatePath(path: Ext.draw.Path, attr: any):void;
    }
    export class Rect extends Ext.draw.sprite.Path {
        constructor(config: any);
    }
    export class Sector extends Ext.draw.sprite.Path {
        constructor(config: any);
    }
    export class Sprite extends Ext.Base {
        attr: any;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBBox(isWithoutTransform?: boolean):void;
        getBBoxCenter(isWithoutTransform: boolean):any[];
        getBubbleEvents():any;
        getListeners():any;
        getParent():any;
        getSurface():Ext.draw.Surface;
        hasListener(eventName: string):boolean;
        hide():Ext.draw.sprite.Sprite;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        preRender():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        render(surface: Ext.draw.Surface, ctx: any, rect: any[]):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAttributes(changes: any, bypassNormalization?: boolean, avoidCopy?: boolean):void;
        setAttributesBypassingNormalization(changes: any, avoidCopy?: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        setParent(parent: any):void;
        setSurface(surface: Ext.draw.Surface):void;
        show():Ext.draw.sprite.Sprite;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        updatePlainBBox(plain: any):void;
        updateTransformedBBox(transform: any, plain: any):void;
        useAttributes(ctx: any, rect: any[]):void;
    }
    export class Text extends Ext.draw.sprite.Sprite {
        static debug: boolean;
        constructor(config: any);
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
        center: string;
        checkboxgroup: string;
        column: string;
        container: string;
        fit: string;
        form: string;
        hbox: string;
        table: string;
        'ux.center': string;
        vbox: string;
    }
    export class Plugin {
        cellediting: string;
        gridfilters: string;
        gridheaderresizer: string;
        gridviewdragdrop: string;
        responsive: string;
        rowediting: string;
        rowexpander: string;
        treeviewdragdrop: string;
        viewport: string;
    }
    export class Widget {
        actioncolumn: string;
        axis: string;
        booleancolumn: string;
        boundlist: string;
        box: string;
        breadcrumb: string;
        button: string;
        buttongroup: string;
        cartesian: string;
        checkbox: string;
        checkboxfield: string;
        checkboxgroup: string;
        checkcolumn: string;
        colormenu: string;
        colorpicker: string;
        columnsplitter: string;
        combo: string;
        combobox: string;
        component: string;
        container: string;
        cycle: string;
        dashboard: string;
        'dashboard-column': string;
        'dashboard-panel': string;
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
        interaction: string;
        jsonpstore: string;
        label: string;
        legend: string;
        loadmask: string;
        menu: string;
        menucheckitem: string;
        menuitem: string;
        menuseparator: string;
        messagebox: string;
        multiselector: string;
        'multiselector-search': string;
        multislider: string;
        numbercolumn: string;
        numberfield: string;
        pagingtoolbar: string;
        panel: string;
        pickerfield: string;
        polar: string;
        progressbar: string;
        progressbarwidget: string;
        propertygrid: string;
        quicktip: string;
        radio: string;
        radiofield: string;
        radiogroup: string;
        rownumberer: string;
        segmentedbutton: string;
        slider: string;
        sliderfield: string;
        slidertip: string;
        sliderwidget: string;
        spacefilling: string;
        sparklinebar: string;
        sparklinebox: string;
        sparklinebullet: string;
        sparklinediscrete: string;
        sparklineline: string;
        sparklinepie: string;
        sparklinetristate: string;
        spinnerfield: string;
        splitbutton: string;
        splitter: string;
        surface: string;
        tab: string;
        tabbar: string;
        tablepanel: string;
        tableview: string;
        tabpanel: string;
        tagfield: string;
        tbfill: string;
        tbitem: string;
        tbseparator: string;
        tbspacer: string;
        tbtext: string;
        templatecolumn: string;
        textarea: string;
        textareafield: string;
        textfield: string;
        timefield: string;
        timepicker: string;
        tip: string;
        title: string;
        toast: string;
        tool: string;
        toolbar: string;
        tooltip: string;
        treecolumn: string;
        treepanel: string;
        treeview: string;
        trigger: string;
        triggerfield: string;
        viewport: string;
        widget: string;
        widgetcolumn: string;
        window: string;
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
        name: string;
        version: Ext.Version;
        is(name: string):boolean;
    }
    export class Ready {
        static invoke(listener: any):void;
        static invokeAll():void;
    }
}
declare module Ext.event {
    export class Controller extends Ext.Base {
        constructor(dispatcher: any);
    }
    export class Dispatcher extends Ext.Base {
        constructor(config: any);
        getPublishers():any;
        setPublishers(publishers: any):void;
    }
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
        ctrlKey: boolean;
        currentTarget: HTMLElement;
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
        getPageX():number;
        getPageY():number;
        getPoint():Ext.util.Point;
        getRelatedTarget(selector?: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        getTarget(selector?: string, maxDepth?: any, returnEl?: boolean):HTMLElement;
        getTime():Date;
        getWheelDelta():number;
        getWheelDeltas():any;
        getX():number;
        getXY():number[];
        getY():number;
        hasModifier():boolean;
        isNavKeyPress():boolean;
        isSpecialKey():boolean;
        preventDefault():Ext.event.Event;
        stopEvent():Ext.event.Event;
        stopPropagation():Ext.event.Event;
        within(el: any, related?: boolean, allowEl?: boolean):boolean;
    }
    export class ListenerStack extends Ext.Base {
        constructor();
    }
}
declare module Ext.event.gesture {
    export class DoubleTap extends Ext.event.gesture.SingleTouch {
        constructor(config: any);
        getMaxDuration():number;
        getMoveDistance():number;
        getTapDistance():number;
        setMaxDuration(maxDuration: number):void;
        setMoveDistance(moveDistance: number):void;
        setTapDistance(tapDistance: number):void;
    }
    export class Drag extends Ext.event.gesture.SingleTouch {
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
        constructor(config: any);
        getMoveDistance():number;
        setMoveDistance(moveDistance: number):void;
    }
}
declare module Ext.event.publisher {
    export class Dom extends Ext.event.publisher.Publisher {
        constructor();
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
        getRecognizers():any;
        setRecognizers(recognizers: any):void;
    }
    export class Publisher extends Ext.Base {
        constructor();
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
        doAction(action: any, options?: any):Ext.form.Basic;
        findField(id: string):Ext.form.field.Field;
        getFieldValues(dirtyOnly?: boolean):any;
        getFields():Ext.util.MixedCollection;
        getRecord():Ext.data.Model;
        getValues(asString?: boolean, dirtyOnly?: boolean, includeEmptyText?: boolean, useDataValues?: boolean):any;
        hasInvalidField():void;
        hasUpload():boolean;
        isDirty():boolean;
        isValid():boolean;
        load(options: any):Ext.form.Basic;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        markInvalid(errors: any):Ext.form.Basic;
        reset(resetRecord?: boolean):Ext.form.Basic;
        setValues(values: any):Ext.form.Basic;
        submit(options: any):Ext.form.Basic;
        updateRecord(record?: Ext.data.Model):Ext.form.Basic;
    }
    export class CheckboxGroup extends Ext.form.FieldContainer {
        isFormField: boolean;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: Function):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getChecked():Ext.form.field.Checkbox[];
        getErrors():string[];
        getModelData():any;
        getName():string;
        getSubmitData():any;
        getValidation():any;
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
        setValidation(validation: any):void;
        setValue(value: any):Ext.form.CheckboxGroup;
        validate():boolean;
    }
    export class CheckboxManager {
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
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
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: (item: any, key: string) => any, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorterCount():void;
        static getSorters():any;
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initConfig(config: any):Ext.Base;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: any):void;
        static sort(sorters?: any, direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class FieldAncestor extends Ext.Mixin {
        initFieldAncestor():void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
    }
    export class FieldContainer extends Ext.container.Container {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelEl: Ext.dom.Element;
        constructor(config: any);
        getActiveError():string;
        getActiveErrors():string[];
        getChildEls():any[];
        getCombinedErrors(invalidFields: Ext.form.field.Field[]):string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelableRenderData(data: any):any;
        getSubTplMarkup(fieldData: any):string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initFieldAncestor():void;
        initLabelable():void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setChildEls(childEls: any[]):void;
        setFieldDefaults(defaults: any):void;
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
    export class Labelable extends Ext.Mixin {
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelEl: Ext.dom.Element;
        getActiveError():string;
        getActiveErrors():string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelableRenderData(data: any):any;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initLabelable():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        trimLabelSeparator():string;
        unsetActiveError():void;
        static destroyTip():void;
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
        load(options: any):void;
        loadRecord(record: Ext.data.Model):Ext.form.Basic;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
        reset(resetRecord?: boolean):Ext.form.Basic;
        startPolling(interval: number):void;
        stopPolling():void;
        submit(options: any):void;
        updateRecord(record?: Ext.data.Model):Ext.form.Basic;
    }
    export class RadioGroup extends Ext.form.CheckboxGroup {
        constructor(config: any);
    }
    export class RadioManager {
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static self: Ext.Class;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
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
        static enableBubble(eventNames: any):void;
        static filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        static filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        static find():void;
        static findBy(fn: (item: any, key: string) => any, scope?: any):any;
        static findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        static findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        static findInsertionIndex(newItem: any, sorterFn?: Function):number;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: any):any;
        static getAt(index: number):any;
        static getByKey(key: any):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getFirstSorter():Ext.util.Sorter;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorterCount():void;
        static getSorters():any;
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initConfig(config: any):Ext.Base;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: any):void;
        static sort(sorters?: any, direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static statics():Ext.Class;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static updateKey(oldKey: any, newKey: any):void;
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
        labelEl: Ext.dom.Element;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: Function):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getActiveError():string;
        getActiveErrors():string[];
        getChildEls():any[];
        getErrors(value: any):string[];
        getFieldLabel():string;
        getInputId():void;
        getLabelableRenderData(data: any):any;
        getModelData(includeEmptyText: any, isSubmitting: any):any;
        getName():string;
        getRawValue():string;
        getSubTplData(fieldData: any):any;
        getSubTplMarkup(fieldData: any):void;
        getSubmitData():any;
        getSubmitValue():string;
        getValidation():any;
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
        setChildEls(childEls: any[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        setFieldStyle(style: any):void;
        setRawValue(value: any):any;
        setReadOnly(readOnly: boolean):void;
        setValidation(validation: any):void;
        setValue(value: any):Ext.form.field.Field;
        transformRawValue(value: any):any;
        trimLabelSeparator():string;
        unsetActiveError():void;
        validate():boolean;
        validateValue(value: any):boolean;
        valueToRaw(value: any):any;
    }
    export class Checkbox extends Ext.form.field.Base {
        boxLabelEl: Ext.dom.Element;
        constructor(config: any);
        setBoxLabel(boxLabel: string):void;
    }
    export class ComboBox extends Ext.form.field.Picker {
        lastQuery: string;
        constructor(config: any);
        afterQuery(queryPlan: any):void;
        beforeQuery(queryPlan: any):void;
        bindStore(store?: any, preventFilter?: boolean):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearValue():void;
        doQuery(queryString: string, forceAll?: boolean, rawQuery?: boolean):boolean;
        findRecord(field: string, value: any):Ext.data.Model;
        findRecordByDisplay(value: any):Ext.data.Model;
        findRecordByValue(value: any):Ext.data.Model;
        getFilters(autoCreate?: any):Ext.util.FilterCollection;
        getStore():Ext.data.Store;
        getStoreListeners():any;
        onBindStore(store: any, initial: any):void;
        onUnbindStore():void;
        select(r: any):void;
        setFilters(filters: any):void;
        setSelection(selection: any):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Date extends Ext.form.field.Picker {
        valuePublishEvent: any[];
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
        batchChanges(fn: Function):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        clearInvalid():void;
        extractFileInput():HTMLElement;
        getErrors(value: any):string[];
        getModelData(includeEmptyText: any, isSubmitting: any):any;
        getName():string;
        getSubmitData():any;
        getValidation():any;
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
        setValidation(validation: any):void;
        setValue(value: any):Ext.form.field.Field;
        validate():boolean;
    }
    export class File extends Ext.form.field.Text {
        button: Ext.button.Button;
        fileInputEl: Ext.dom.Element;
        constructor(config: any);
        getTriggerMarkup():void;
    }
    export class FileButton extends Ext.button.Button {
        constructor(config: any);
    }
    export class Hidden extends Ext.form.field.Base {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.form.FieldContainer {
        buttonTips: any;
        isFormField: boolean;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: Function):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        cleanHtml(html: string):string;
        clearInvalid():void;
        execCmd(cmd: string, value?: any):void;
        extractFileInput():HTMLElement;
        getDocMarkup():void;
        getErrors(value: any):string[];
        getModelData(includeEmptyText: any, isSubmitting: any):any;
        getName():string;
        getSubmitData():any;
        getToolbar():Ext.toolbar.Toolbar;
        getValidation():any;
        getValue():any;
        initField():void;
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
        setReadOnly(readOnly: boolean):void;
        setValidation(validation: any):void;
        setValue(value: any):Ext.form.field.Field;
        syncValue():void;
        toggleSourceEdit(sourceEditMode?: boolean):void;
        updateToolbar():void;
    }
    export class Number extends Ext.form.field.Spinner {
        constructor(config: any);
        setMaxValue(value: number):void;
        setMinValue(value: number):void;
    }
    export class Picker extends Ext.form.field.Text {
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
    export class Spinner extends Ext.form.field.Text {
        constructor(config: any);
        onSpinDown():void;
        onSpinUp():void;
        setSpinDownEnabled(enabled: boolean):void;
        setSpinUpEnabled(enabled: boolean):void;
        spinDown():void;
        spinUp():void;
    }
    export class Tag extends Ext.form.field.ComboBox {
        constructor(config: any);
        addValue(value: any):void;
        getRecordByListItemNode(itemEl: any):void;
        getValueRecords():any[];
        mimicBlur():void;
        onBeforeListRefresh():void;
        onItemListClick(evt: any):void;
        preFocus():void;
        removeByListItemNode(itemEl: any):void;
        removeValue(value: any):void;
        toggleSelectionByListItemNode(itemEl: any, keepExisting: any):void;
    }
    export class Text extends Ext.form.field.Base {
        inputCell: Ext.dom.Element;
        inputWrap: Ext.dom.Element;
        triggerEl: Ext.dom.CompositeElement;
        triggerWrap: Ext.dom.Element;
        constructor(config: any);
        autoSize():void;
        getHideTrigger():boolean;
        getTrigger(id: string):Ext.form.trigger.Trigger;
        getTriggerWidth():number;
        getTriggers():any;
        selectText(start?: number, end?: number):void;
        setEditable(editable: boolean):void;
        setHideTrigger(hideTrigger: boolean):void;
        setTriggers(triggers: any):void;
    }
    export class TextArea extends Ext.form.field.Text {
        constructor(config: any);
    }
    export class Time extends Ext.form.field.ComboBox {
        valuePublishEvent: any[];
        constructor(config: any);
        setMaxValue(value: any):void;
        setMinValue(value: any):void;
    }
    export class Trigger extends Ext.form.field.Text {
        constructor(config: any);
    }
    export class VTypes {
        static alphaMask: RegExp;
        static alphaText: string;
        static alphanumMask: RegExp;
        static alphanumText: string;
        static emailMask: RegExp;
        static emailText: string;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static urlText: string;
        static alpha(value: string):boolean;
        static alphanum(value: string):boolean;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static email(value: string):boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static url(value: string):boolean;
    }
}
declare module Ext.form.trigger {
    export class Component extends Ext.form.trigger.Trigger {
        component: any;
        constructor(config: any);
    }
    export class Spinner extends Ext.form.trigger.Trigger {
        constructor(config: any);
    }
    export class Trigger extends Ext.Base {
        bodyTpl: any;
        factoryConfig: any;
        constructor(config: any);
        afterFieldRender():void;
        getBodyRenderData():any;
        getEl():Ext.dom.Element;
        getStateEl():void;
        hide():void;
        isVisible():boolean;
        onClick():void;
        onFieldBlur():void;
        onFieldFocus():void;
        onFieldRender():void;
        show():void;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        jumpToEnd():void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animation extends Ext.Base {
    }
    export class Animator extends Ext.Base {
        currentIteration: number;
        hasListeners: any;
        isAnimator: boolean;
        isObservable: boolean;
        keyframeStep: number;
        paused: boolean;
        running: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class CubicBezier {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class DrawPath {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Easing {
    }
    export class Manager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static addAnim(anim: Ext.fx.Anim):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static removeAnim(anim: Ext.fx.Anim):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class PropertyHandler extends Ext.Base {
    }
    export class Queue extends Ext.Base {
        constructor();
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
        constructor();
        getAfter():any;
        getBefore():any;
        getDelay():number;
        getDirection():string;
        getDuration():number;
        getEasing():string;
        getElement():any;
        getIteration():number;
        getName():string;
        getOnBeforeEnd():any;
        getOnBeforeStart():any;
        getOnEnd():any;
        getPreserveEndState():boolean;
        getReplacePrevious():boolean;
        getReverse():any;
        getScope():any;
        setAfter(after: any):void;
        setBefore(before: any):void;
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
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class Fade extends Ext.fx.animation.Abstract {
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class FadeOut extends Ext.fx.animation.Fade {
        constructor();
    }
    export class Flip extends Ext.fx.animation.Abstract {
        constructor();
        getHalf():boolean;
        getOut():any;
        setHalf(half: boolean):void;
        setOut(out: any):void;
    }
    export class Pop extends Ext.fx.animation.Abstract {
        constructor();
        getOut():boolean;
        setOut(out: boolean):void;
    }
    export class PopOut extends Ext.fx.animation.Pop {
        constructor();
    }
    export class Slide extends Ext.fx.animation.Abstract {
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
    export class CssTransition extends Ext.fx.runner.Css {
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
    export class CellContext extends Ext.Base {
        isCellContext: boolean;
        constructor(view: any);
    }
    export class CellEditor extends Ext.Editor {
        constructor(config: any);
    }
    export class ColumnComponentLayout extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class ColumnLayout extends Ext.layout.container.HBox {
        constructor(config: any);
    }
    export class ColumnManager extends Ext.Base {
        constructor(visibleOnly: any, headerCt: any, secondHeaderCt: any);
        getFirst():Ext.grid.column.Column;
        getHeaderAtIndex(index: number):Ext.grid.column.Column;
        getHeaderByDataIndex(dataIndex: string):Ext.grid.column.Column;
        getHeaderById(id: string):Ext.grid.column.Column;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getLast():Ext.grid.column.Column;
        getVisibleHeaderClosestToIndex(index: number):void;
    }
    export class NavigationModel extends Ext.view.NavigationModel {
        constructor();
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
    }
    export class RowEditor extends Ext.form.Panel {
        constructor(config: any);
        startEdit(record: Ext.data.Model, columnHeader: Ext.data.Model):void;
    }
    export class RowEditorButtons extends Ext.container.Container {
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
    export class Check extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Column extends Ext.grid.header.Container {
        isColumn: boolean;
        isHeader: boolean;
        producesHTML: boolean;
        textEl: Ext.dom.Element;
        triggerEl: Ext.dom.Element;
        constructor(config: any);
        autoSize():void;
        defaultRenderer():void;
        getEditor(record: any, defaultField: any):Ext.form.field.Field;
        getIndex():number;
        getSortParam():string;
        getTriggerVisible():boolean;
        getVisibleIndex():number;
        isHideable():void;
        isLockable():void;
        setEditor(field: any):void;
        setText(text: string):void;
        setTriggerVisible(triggerVisible: boolean):void;
    }
    export class Date extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Number extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class RowNumberer extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Template extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Widget extends Ext.grid.column.Column {
        sortable: boolean;
        constructor(config: any);
    }
}
declare module Ext.grid.feature {
    export class AbstractSummary extends Ext.grid.feature.Feature {
        constructor(config: any);
        toggleSummaryRow(visible: boolean):void;
    }
    export class Feature extends Ext.util.Observable {
        disabled: boolean;
        eventPrefix: string;
        eventSelector: string;
        grid: Ext.grid.Panel;
        hasFeatureEvent: boolean;
        view: Ext.view.Table;
        constructor(config: any);
        disable():void;
        enable():void;
        getFireEventArgs(eventName: any, view: any, featureTarget: any, e: any):void;
    }
    export class GroupStore extends Ext.util.Observable {
        constructor(groupingFeature: any, store: any);
        indexOfTotal(record: Ext.data.Model):number;
    }
    export class Grouping extends Ext.grid.feature.Feature {
        constructor();
        collapse(groupName: string, focus: boolean):void;
        collapseAll():void;
        expand(groupName: string, focus: boolean):void;
        expandAll():void;
        getRecordGroup(record: Ext.data.Model):any;
        isExpanded(groupName: string):boolean;
        toggleSummaryRow(visible: boolean):void;
    }
    export class GroupingSummary extends Ext.grid.feature.Grouping {
        constructor();
    }
    export class RowBody extends Ext.grid.feature.Feature {
        constructor(config: any);
        getAdditionalData(data: any, idx: number, record: Ext.data.Model, orig: any):void;
    }
    export class Summary extends Ext.grid.feature.AbstractSummary {
        constructor(config: any);
    }
}
declare module Ext.grid.filters {
    export class Filters extends Ext.plugin.Abstract {
        filterCls: string;
        constructor(config?: any);
        addFilter(filters: any):any[];
        addFilters(filters: any[]):any[];
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearFilters(autoFilter: boolean):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Ext.data.Store):any;
        isStateful():boolean;
        onBindStore(store: any, initial: any, propName: any):void;
        onUnbindStore(store: any):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
}
declare module Ext.grid.filters.filter {
    export class Base extends Ext.Base {
        active: boolean;
        factoryConfig: any;
        menu: Ext.menu.Menu;
        type: string;
        constructor(config: any);
        ''():boolean;
        getItemDefaults():any;
        getMenuDefaults():any;
        setActive(active: boolean, key: string):void;
        setItemDefaults(itemDefaults: any):void;
        setMenuDefaults(menuDefaults: any):void;
    }
    export class Boolean extends Ext.grid.filters.filter.SingleFilter {
        constructor(config: any);
    }
    export class Date extends Ext.grid.filters.filter.TriFilter {
        constructor(config: any);
        getFields():any;
        getPicker(item: string):any;
        getPickerDefaults():any;
        onMenuSelect(picker: Ext.picker.Date, date: any):void;
        setFields(fields: any):void;
        setPickerDefaults(pickerDefaults: any):void;
    }
    export class List extends Ext.grid.filters.filter.SingleFilter {
        constructor(config: any);
    }
    export class Number extends Ext.grid.filters.filter.TriFilter {
        constructor(config: any);
        getFields():any;
        setFields(fields: any):void;
    }
    export class SingleFilter extends Ext.grid.filters.filter.Base {
        constructor(config: any);
    }
    export class String extends Ext.grid.filters.filter.SingleFilter {
        constructor(config: any);
    }
    export class TriFilter extends Ext.grid.filters.filter.Base {
        constructor(config: any);
    }
}
declare module Ext.grid.header {
    export class Container extends Ext.container.Container {
        isGroupHeader: boolean;
        constructor(config: any);
        getColumnCount():void;
        getColumnMenu(headerContainer: any):void;
        getGridColumns(inResult: any, hiddenAncestor: any):any[];
        getHeaderAtIndex(index: number):void;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getMenuItems():any[];
        getTableWidth():void;
        getVisibleGridColumns():any[];
        getVisibleHeaderClosestToIndex(index: number):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(headerCt: any);
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(headerCt: any);
    }
}
declare module Ext.grid.locking {
    export class HeaderContainer extends Ext.grid.header.Container {
        constructor(lockable: any);
    }
    export class Lockable extends Ext.Base {
        syncRowHeights():void;
    }
    export class View extends Ext.Base {
        hasListeners: any;
        isLockingView: boolean;
        isObservable: boolean;
        constructor(config: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        beforeBlur(e: Ext.event.Event):void;
        beforeFocus(e: Ext.event.Event):void;
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        cancelFocus():void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        focus():Ext.Component;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        getTabIndex():number;
        hasListener(eventName: string):boolean;
        initFocusable():void;
        initFocusableEvents():void;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onBindStore(store: Ext.data.Store):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setStore(store: any):void;
        setTabIndex(newTabIndex: number):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
}
declare module Ext.grid.plugin {
    export class BufferedRenderer extends Ext.plugin.Abstract {
        isBufferedRenderer: boolean;
        position: number;
        constructor(config?: any);
        scrollTo(recordIdx: number, doSelect: boolean, callback: (recordIdx: number, record: Ext.data.Model) => any, scope: any):void;
    }
    export class CellEditing extends Ext.grid.plugin.Editing {
        constructor(config?: any);
        onSpecialKey(ed: any, field: any, e: any):void;
        startEditByPosition(position: any):void;
    }
    export class DragDrop extends Ext.plugin.Abstract {
        dragZone: Ext.view.DragZone;
        dropZone: Ext.grid.ViewDropZone;
        constructor(config?: any);
    }
    export class Editing extends Ext.plugin.Abstract {
        editing: boolean;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        completeEdit():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onReconfigure():void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        startEdit(record: any, columnHeader: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class HeaderReorderer extends Ext.plugin.Abstract {
        constructor(config?: any);
    }
    export class HeaderResizer extends Ext.plugin.Abstract {
        constructor(config?: any);
        getDynamic():boolean;
        setDynamic(dynamic: boolean):void;
    }
    export class RowEditing extends Ext.grid.plugin.Editing {
        constructor();
    }
    export class RowExpander extends Ext.plugin.Abstract {
        constructor(config?: any);
        getFeatureConfig(grid: any):any[];
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        constructor(config: any);
        getSource():any;
        removeProperty(prop: string):void;
        setProperty(prop: string, value: any, create?: boolean):void;
        setSource(source: any, sourceConfig?: any):void;
    }
    export class HeaderContainer extends Ext.grid.header.Container {
        constructor(grid: Ext.grid.property.Grid, source: any);
    }
    export class Property extends Ext.data.Model {
        constructor(config: any);
    }
    export class Reader extends Ext.data.reader.Reader {
        constructor(config?: any);
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
        invalidate(components: any, full: boolean):void;
        removeEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        resetLayout(layout: any, ownerContext: any, firstTime: any):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(item: any, width: number, height: number):void;
    }
    export class ContextItem extends Ext.Base {
        state: any;
        wrapsComponent: boolean;
        constructor(config: any);
        addCls(newCls: any):void;
        block(layout: Ext.layout.Layout, propName: string):void;
        clearMarginCache():void;
        domBlock(layout: Ext.layout.Layout, propName: string):void;
        flush():void;
        getBorderInfo():any;
        getClassList():void;
        getDomProp(propName: string):any;
        getEl(nameOrEl: any, owner?: any):Ext.layout.ContextItem;
        getFrameInfo():any;
        getMarginInfo():any;
        getPaddingInfo():any;
        getProp(propName: string):any;
        getStyle(styleName: string):any;
        getStyles(styleNames: string[], altNames?: string[]):any;
        hasDomProp(propName: string):boolean;
        hasProp(propName: string):boolean;
        invalidate(options: any):void;
        recoverProp(propName: string, oldProps: any, oldDirty: any):void;
        removeCls(removeCls: any):void;
        removeEl(nameOrEl: any, owner?: any):void;
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
        factoryConfig: any;
        isLayout: boolean;
        constructor(config: any);
        afterRemove(item: any):void;
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
        isValidParent(item: any, target: any, position: any):void;
        notifyOwner(ownerContext: Ext.layout.ContextItem):void;
        onContentChange(child: Ext.Component):boolean;
        renderItems(items: any, target: any):void;
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
        names: any;
        natural: boolean;
        ordinal: number;
        pairsByHeightOrdinal: any[];
        shrinkWrap: boolean;
        constructor(config: any);
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
        constructor(config: any);
    }
    export class Body extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class BoundList extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class Component extends Ext.layout.Layout {
        constructor(config: any);
        getRenderTarget():Ext.dom.Element;
        getTarget():Ext.dom.Element;
    }
    export class Dock extends Ext.layout.component.Component {
        constructor(config: any);
        getDockedItems(order?: string, beforeBody?: boolean):Ext.Component[];
        invalidateAxes(ownerContext: any, horz: any, vert: any):void;
    }
    export class FieldSet extends Ext.layout.component.Body {
        constructor(config: any);
    }
    export class ProgressBar extends Ext.layout.component.Auto {
        constructor(config: any);
    }
}
declare module Ext.layout.component.field {
    export class FieldContainer extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class HtmlEditor extends Ext.layout.component.field.FieldContainer {
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
        setCtSizeIfNeeded(ownerContext: Ext.layout.ContextItem, containerSize: any):void;
    }
    export class Border extends Ext.layout.container.Container {
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        constructor(config: any);
        cacheFlexes(ownerContext: any):void;
        getAlign():string;
        getAlignRoundingMethod():any;
        getConstrainAlign():boolean;
        getEnableSplitters():boolean;
        getOverflowHandler():any;
        getPack():string;
        getPadding():string;
        getStretchMaxPartner():any;
        getVertical():boolean;
        setAlign(align: string):void;
        setAlignRoundingMethod(alignRoundingMethod: any):void;
        setConstrainAlign(constrainAlign: boolean):void;
        setEnableSplitters(enableSplitters: boolean):void;
        setOverflowHandler(overflowHandler: any):void;
        setPack(pack: string):void;
        setPadding(padding: string):void;
        setStretchMaxPartner(stretchMaxPartner: any):void;
        setVertical(vertical: boolean):void;
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
    export class Center extends Ext.layout.container.Fit {
        constructor();
    }
    export class CheckboxGroup extends Ext.layout.container.Container {
        constructor();
    }
    export class Column extends Ext.layout.container.Auto {
        constructor();
    }
    export class ColumnSplitter extends Ext.resizer.Splitter {
        constructor(config: any);
    }
    export class ColumnSplitterTracker extends Ext.resizer.SplitterTracker {
    }
    export class Container extends Ext.layout.Layout {
        constructor();
        destroy():void;
        getChildEls():any;
        getContainerSize(ownerContext: Ext.layout.ContextItem, inDom?: boolean):any;
        getElementTarget():Ext.dom.Element;
        getRenderTarget():Ext.dom.Element;
        getRenderedItems():any[];
        getTarget():Ext.dom.Element;
        getVisibleItems():any[];
        setChildEls(childEls: any):void;
    }
    export class Dashboard extends Ext.layout.container.Column {
        constructor();
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
        constructor(config: any);
    }
    export class None extends Ext.Base {
        factoryConfig: any;
        constructor(config: any);
    }
    export class Scroller extends Ext.layout.container.boxOverflow.None {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getListeners():any;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        scrollToItem(item: any, animate: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
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
        isMenuItem: boolean;
        menu: Ext.menu.Menu;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        setHandler(fn: Function, scope?: any):void;
        setIcon(icon: string):void;
        setIconCls(iconCls: string):void;
        setMenu(menu: any, destroyMenu?: boolean):void;
        setText(text: string):void;
        setTooltip(tooltip: any):Ext.menu.Item;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class KeyNav extends Ext.util.KeyNav {
        constructor(config: any);
    }
    export class Manager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static get(menu: any, config?: any):Ext.menu.Menu;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hideAll():boolean;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Menu extends Ext.panel.Panel {
        isMenu: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        canActivateItem(item: any):boolean;
        deactivateActiveItem(andBlurFocusedItem: any):void;
    }
    export class Separator extends Ext.menu.Item {
        constructor(config: any);
    }
}
declare module Ext.mixin {
    export class Bindable extends Ext.Base {
        defaultBindProperty: string;
        getBind():any;
        getController():any;
        getDefaultListenerScope():boolean;
        getPublishes():any;
        getReference():string;
        getSession():any;
        getViewModel():any;
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
        setViewModel(viewModel: any):void;
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
    }
    export class Mashup extends Ext.Base {
    }
    export class Observable extends Ext.Mixin {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getId():string;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class Queryable extends Ext.Base {
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class Responsive extends Ext.Base {
    }
    export class Selectable extends Ext.Mixin {
        constructor();
        clearSelections():void;
        deselect(records: any, suppressEvent: boolean):void;
        deselectAll(supress: any):void;
        doDeselect(records: any, suppressEvent: boolean):void;
        doSelect(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        getAllowDeselect():boolean;
        getCount():number;
        getDeselectOnContainerClick():boolean;
        getDisableSelection():boolean;
        getLastSelected():any[];
        getMode():string;
        getSelection():any[];
        getSelectionCount():number;
        getSelectionMode():string;
        hasSelection():boolean;
        isLocked():boolean;
        isSelected(record: any):boolean;
        select(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        selectAll(silent: boolean):void;
        selectRange(startRecord: number, endRecord: number, keepExisting?: boolean):void;
        setAllowDeselect(allowDeselect: boolean):void;
        setDeselectOnContainerClick(deselectOnContainerClick: boolean):void;
        setDisableSelection(disableSelection: boolean):void;
        setLastFocused():void;
        setMode(mode: string):void;
        updateLastFocused(newRecord: Ext.data.Model, oldRecord: Ext.data.Model):void;
    }
    export class Templatable extends Ext.Mixin {
    }
    export class Traversable extends Ext.Mixin {
        getParent():Ext.Component;
        hasParent():boolean;
    }
}
declare module Ext.panel {
    export class Bar extends Ext.container.Container {
        constructor(config: any);
    }
    export class DD extends Ext.dd.DragSource {
        constructor(panel: any, cfg: any);
    }
    export class Header extends Ext.panel.Bar {
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: any):void;
        getTools():Ext.panel.Tool[];
    }
    export class Panel extends Ext.container.Container {
        body: Ext.dom.Element;
        dd: any;
        isPanel: boolean;
        constructor(config: any);
        addBodyCls(cls: string):Ext.panel.Panel;
        addDocked(items: any, pos?: number):Ext.Component[];
        addTool(tools: any):void;
        addTools():void;
        afterCollapse(animated: boolean):void;
        afterExpand(animated: boolean):void;
        close():void;
        collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        convertCollapseDir(collapseDir: any):void;
        expand(animate?: boolean):Ext.panel.Panel;
        getCollapsed():any;
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        getHeader():void;
        insertDocked(pos: number, items: any):void;
        onDockedAdd(component: Ext.Component):void;
        onDockedRemove(component: Ext.Component):void;
        removeBodyCls(cls: string):Ext.panel.Panel;
        removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        setBodyStyle(style: any, value: string):Ext.panel.Panel;
        setCollapsed(collapsed: boolean):void;
        toggleCollapse():Ext.panel.Panel;
    }
    export class Pinnable extends Ext.Mixin {
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
        getSelection():Ext.data.Model[];
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.Store;
        getView():Ext.view.Table;
        reconfigure(store?: Ext.data.Store, columns?: any[]):void;
        setSelection(selection: any):void;
    }
    export class Title extends Ext.Component {
        constructor(config: any);
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
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
declare module Ext.plugin {
    export class Abstract extends Ext.Base {
        isPlugin: boolean;
        constructor(config?: any);
        applyState(state: any, allState: any):void;
        clonePlugin(overrideCfg?: any):void;
        disable():void;
        enable():void;
        getCmp():Ext.Component;
        getState():any;
        init(client: Ext.Component):void;
        setCmp(cmp: Ext.Component):void;
    }
    export class Manager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static create(config: any, defaultType?: Function):Ext.Component;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class Responsive extends Ext.mixin.Responsive {
        constructor(config: any);
    }
    export class Viewport extends Ext.plugin.Responsive {
        constructor(config: any);
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getEl():Ext.dom.Element;
        getTarget():any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resizeTo(width: number, height: number):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
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
declare module Ext.scroll {
    export class Indicator extends Ext.Base {
        length: number;
        margin: number;
        size: number;
        constructor(config: any);
        getAxis():string;
        getContainerEl():Ext.dom.Element;
        getHasOpposite():boolean;
        getMaxScrollPosition():number;
        getMinLength():number;
        getScrollSize():number;
        getScroller():Ext.scroll.Scroller;
        setAxis(axis: string):void;
        setContainerEl(containerEl: Ext.dom.Element):void;
        setHasOpposite(hasOpposite: boolean):void;
        setMaxScrollPosition(maxScrollPosition: number):void;
        setMinLength(minLength: number):void;
        setScrollSize(scrollSize: number):void;
        setScroller(scroller: Ext.scroll.Scroller):void;
        setValue(value: number):void;
    }
    export class Manager extends Ext.util.Observable {
        constructor(config: any);
    }
    export class Scroller extends Ext.Evented {
        getDirection():string;
        getDirectionLock():boolean;
        getDisabled():boolean;
        getInitialOffset():any;
        getMomentumEasing():any;
        getSlotSnapEasing():any;
        getSlotSnapSize():any;
        getTranslatable():any;
        isAxisEnabled(axis: string):boolean;
        scrollBy(x: number, y: number, animation?: any):Ext.scroll.Scroller;
        scrollTo(x: number, y: number, animation?: any):Ext.scroll.Scroller;
        scrollToEnd(animation: any):Ext.scroll.Scroller;
        setDirection(direction: string):void;
        setDirectionLock(directionLock: boolean):void;
        setDisabled(disabled: boolean):void;
        setInitialOffset(initialOffset: any):void;
        setMomentumEasing(momentumEasing: any):void;
        setOffset(offset: any):Ext.scroll.Scroller;
        setSlotSnapEasing(slotSnapEasing: any):void;
        setSlotSnapSize(slotSnapSize: any):void;
        setTranslatable(translatable: any):void;
        updateBoundary():Ext.scroll.Scroller;
    }
}
declare module Ext.selection {
    export class CellModel extends Ext.selection.DataViewModel {
        getCurrentPosition():void;
        getPosition():Ext.grid.CellContext;
        setCurrentPosition(position: any, suppressEvent: boolean):void;
        setPosition(position: any, suppressEvent: boolean):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        constructor();
        getHeaderConfig():void;
        onHeaderClick(headerCt: any, header: any, e: any):void;
        renderer(value: any, metaData: any, record: any, rowIndex: any, colIndex: any, store: any, view: any):void;
    }
    export class DataViewModel extends Ext.selection.Model {
    }
    export class Model extends Ext.util.Observable {
        selected: Ext.util.MixedCollection;
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        deselect(records: any, suppressEvent?: boolean):void;
        deselectAll(suppressEvent?: boolean):void;
        deselectRange(startRow: any, endRow: any):void;
        getCount():number;
        getLastSelected():Ext.data.Model;
        getSelection():Ext.data.Model[];
        getSelectionMode():string;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        hasSelection():boolean;
        isLocked():boolean;
        isRangeSelected(from: any, to: any):boolean;
        isSelected(record: any):boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        select(records: any, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectAll(suppressEvent: boolean):void;
        selectRange(startRow: any, endRow: any, keepExisting?: boolean):void;
        setLocked(locked: boolean):void;
        setSelectionMode(selMode: string):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class RowModel extends Ext.selection.DataViewModel {
        getCurrentPosition():void;
        selectNext(keepExisting?: boolean, suppressEvent?: boolean):boolean;
        selectPrevious(keepExisting?: boolean, suppressEvent?: boolean):boolean;
    }
    export class TreeModel extends Ext.selection.RowModel {
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
    export class Widget extends Ext.Widget {
        constructor(config: any);
        getClickToChange():boolean;
        getMaxValue():number;
        getMinValue():number;
        getPublishOnComplete():boolean;
        getUi():string;
        getValue(index: number):any;
        getValues():number[];
        getVertical():boolean;
        setClickToChange(clickToChange: boolean):void;
        setMaxValue(maxValue: number):void;
        setMinValue(minValue: number):void;
        setPublishOnComplete(publishOnComplete: boolean):void;
        setThumbValue(index: any, value: number, animate?: boolean):Ext.slider.Multi;
        setUi(ui: string):void;
        setValue(value: number):void;
        setVertical(vertical: boolean):void;
    }
}
declare module Ext.sparkline {
    export class Bar extends Ext.sparkline.BarBase {
        constructor(config: any);
        getBarColor():string;
        getBarSpacing():number;
        getBarWidth():number;
        getChartRangeClip():boolean;
        getChartRangeMax():number;
        getChartRangeMin():number;
        getColorMap():any;
        getNegBarColor():string;
        getNullColor():string;
        getStackedBarColor():string[];
        getZeroAxis():boolean;
        getZeroColor():string;
        setBarColor(barColor: string):void;
        setBarSpacing(barSpacing: number):void;
        setBarWidth(barWidth: number):void;
        setChartRangeClip(chartRangeClip: boolean):void;
        setChartRangeMax(chartRangeMax: number):void;
        setChartRangeMin(chartRangeMin: number):void;
        setColorMap(colorMap: any):void;
        setNegBarColor(negBarColor: string):void;
        setNullColor(nullColor: string):void;
        setStackedBarColor(stackedBarColor: string[]):void;
        setZeroAxis(zeroAxis: boolean):void;
        setZeroColor(zeroColor: string):void;
    }
    export class BarBase extends Ext.sparkline.Base {
        constructor(config: any);
    }
    export class Base extends Ext.Widget {
        constructor(config: any);
        getBaseCls():string;
        getDefaultPixelsPerValue():number;
        getDisableInteraction():boolean;
        getDisableTooltips():boolean;
        getEnableHighlight():boolean;
        getEnableTagOptions():boolean;
        getFillColor():string;
        getHighlightColor():string;
        getHighlightLighten():number;
        getLineColor():string;
        getTagValuesAttribute():string;
        getTipTpl():any;
        getTooltipPrefix():string;
        getTooltipSkipNull():boolean;
        getValues():number[];
        setBaseCls(baseCls: string):void;
        setDefaultPixelsPerValue(defaultPixelsPerValue: number):void;
        setDisableInteraction(disableInteraction: boolean):void;
        setDisableTooltips(disableTooltips: boolean):void;
        setEnableHighlight(enableHighlight: boolean):void;
        setEnableTagOptions(enableTagOptions: boolean):void;
        setFillColor(fillColor: string):void;
        setHighlightColor(highlightColor: string):void;
        setHighlightLighten(highlightLighten: number):void;
        setLineColor(lineColor: string):void;
        setTagValuesAttribute(tagValuesAttribute: string):void;
        setTipTpl(tipTpl: any):void;
        setTooltipPrefix(tooltipPrefix: string):void;
        setTooltipSkipNull(tooltipSkipNull: boolean):void;
        setValues(values: number[]):void;
    }
    export class Box extends Ext.sparkline.Base {
        constructor(config: any);
        getBoxFillColor():string;
        getBoxLineColor():string;
        getChartRangeMax():number;
        getChartRangeMin():number;
        getMedianColor():string;
        getOutlierFillColor():string;
        getOutlierIQR():number;
        getOutlierLineColor():string;
        getRaw():boolean;
        getShowOutliers():boolean;
        getSpotRadius():number;
        getTarget():number;
        getTargetColor():number;
        getTooltipFormatFieldlistKey():string;
        getWhiskerColor():string;
        setBoxFillColor(boxFillColor: string):void;
        setBoxLineColor(boxLineColor: string):void;
        setChartRangeMax(chartRangeMax: number):void;
        setChartRangeMin(chartRangeMin: number):void;
        setMedianColor(medianColor: string):void;
        setOutlierFillColor(outlierFillColor: string):void;
        setOutlierIQR(outlierIQR: number):void;
        setOutlierLineColor(outlierLineColor: string):void;
        setRaw(raw: boolean):void;
        setShowOutliers(showOutliers: boolean):void;
        setSpotRadius(spotRadius: number):void;
        setTarget(target: number):void;
        setTargetColor(targetColor: number):void;
        setTooltipFormatFieldlistKey(tooltipFormatFieldlistKey: string):void;
        setWhiskerColor(whiskerColor: string):void;
    }
    export class Bullet extends Ext.sparkline.Base {
        constructor(config: any);
        getBase():number;
        getPerformanceColor():string;
        getRangeColors():string[];
        getTargetColor():string;
        getTargetWidth():number;
        setBase(base: number):void;
        setPerformanceColor(performanceColor: string):void;
        setRangeColors(rangeColors: string[]):void;
        setTargetColor(targetColor: string):void;
        setTargetWidth(targetWidth: number):void;
    }
    export class Discrete extends Ext.sparkline.BarBase {
        constructor(config: any);
        getChartRangeClip():boolean;
        getChartRangeMax():number;
        getChartRangeMin():number;
        getLineHeight():number;
        getThresholdColor():string;
        getThresholdValue():number;
        setChartRangeClip(chartRangeClip: boolean):void;
        setChartRangeMax(chartRangeMax: number):void;
        setChartRangeMin(chartRangeMin: number):void;
        setLineHeight(lineHeight: number):void;
        setThresholdColor(thresholdColor: string):void;
        setThresholdValue(thresholdValue: number):void;
    }
    export class Line extends Ext.sparkline.Base {
        constructor(config: any);
        getChartRangeMax():number;
        getChartRangeMaxX():number;
        getChartRangeMin():number;
        getChartRangeMinX():number;
        getDrawNormalOnTop():boolean;
        getHighlightLineColor():string;
        getHighlightSpotColor():string;
        getLineWidth():number;
        getMaxSpotColor():string;
        getMinSpotColor():string;
        getNormalRangeColor():string;
        getNormalRangeMax():number;
        getNormalRangeMin():number;
        getSpotColor():string;
        getSpotRadius():number;
        getValueSpots():any;
        setChartRangeMax(chartRangeMax: number):void;
        setChartRangeMaxX(chartRangeMaxX: number):void;
        setChartRangeMin(chartRangeMin: number):void;
        setChartRangeMinX(chartRangeMinX: number):void;
        setDrawNormalOnTop(drawNormalOnTop: boolean):void;
        setHighlightLineColor(highlightLineColor: string):void;
        setHighlightSpotColor(highlightSpotColor: string):void;
        setLineWidth(lineWidth: number):void;
        setMaxSpotColor(maxSpotColor: string):void;
        setMinSpotColor(minSpotColor: string):void;
        setNormalRangeColor(normalRangeColor: string):void;
        setNormalRangeMax(normalRangeMax: number):void;
        setNormalRangeMin(normalRangeMin: number):void;
        setSpotColor(spotColor: string):void;
        setSpotRadius(spotRadius: number):void;
        setValueSpots(valueSpots: any):void;
    }
    export class Pie extends Ext.sparkline.Base {
        constructor(config: any);
        getBorderColor():string;
        getBorderWidth():number;
        getOffset():number;
        getSliceColors():string[];
        setBorderColor(borderColor: string):void;
        setBorderWidth(borderWidth: number):void;
        setOffset(offset: number):void;
        setSliceColors(sliceColors: string[]):void;
    }
    export class RangeMap extends Ext.Base {
        constructor(map: any);
    }
    export class TriState extends Ext.sparkline.BarBase {
        constructor(config: any);
        getBarSpacing():number;
        getColorMap():any;
        getNegBarColor():string;
        getPosBarColor():string;
        getZeroBarColor():string;
        setBarSpacing(barSpacing: number):void;
        setBarWidth(barWidth: number):void;
        setColorMap(colorMap: any):void;
        setNegBarColor(negBarColor: string):void;
        setPosBarColor(posBarColor: string):void;
        setZeroBarColor(zeroBarColor: string):void;
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clear(key: string):void;
        static destroy():void;
        static get(key: string, defaultValue: any):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getProvider():Ext.state.Provider;
        static initConfig(config: any):Ext.Base;
        static set(key: string, value: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setProvider(stateProvider: Ext.state.Provider):void;
        static statics():Ext.Class;
    }
    export class Provider extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clear(name: string):void;
        clearListeners():void;
        clearManagedListeners():void;
        decodeValue(value: string):any;
        enableBubble(eventNames: any):void;
        encodeValue(value: any):string;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        get(name: string, defaultValue: any):any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        set(name: string, value: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Stateful extends Ext.Base {
        addStateEvents(events: any):void;
        applyState(state: any):void;
        getState():any;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
    }
}
declare module Ext.tab {
    export class Bar extends Ext.panel.Bar {
        isTabBar: boolean;
        constructor(config: any);
        getTabRotation():any;
        getTabStretchMax():boolean;
        setTabRotation(tabRotation: any):void;
        setTabStretchMax(tabStretchMax: boolean):void;
    }
    export class Panel extends Ext.panel.Panel {
        constructor(config: any);
        getActiveTab():Ext.Component;
        getTabBar():any;
        getTabPosition():any;
        getTabRotation():any;
        getTabStretchMax():boolean;
        setActiveTab(card: any):Ext.Component;
        setTabBar(tabBar: any):void;
        setTabPosition(tabPosition: any):void;
        setTabRotation(tabRotation: any):void;
        setTabStretchMax(tabStretchMax: boolean):void;
    }
    export class Tab extends Ext.button.Button {
        active: boolean;
        closable: boolean;
        isTab: boolean;
        constructor(config: any);
        getRotation():any;
        getTabPosition():any;
        setCard(card: Ext.Component):void;
        setClosable(closable: boolean):void;
        setRotation(rotation: any):void;
        setTabPosition(tabPosition: any):void;
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
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static disable():void;
        static enable():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getQuickTip():Ext.tip.QuickTip;
        static init(autoRender?: boolean, config?: any):void;
        static initConfig(config: any):Ext.Base;
        static isEnabled():boolean;
        static register(config: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static tips(config: any):void;
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
    export class Breadcrumb extends Ext.container.Container {
        constructor(config: any);
        getButtonUI():string;
        getOverflowHandler():string;
        getShowIcons():boolean;
        getStore():Ext.data.TreeStore;
        getUseSplitButtons():boolean;
        setButtonUI(buttonUI: string):void;
        setOverflowHandler(overflowHandler: string):void;
        setShowIcons(showIcons: boolean):void;
        setStore(store: Ext.data.TreeStore):void;
        setUseSplitButtons(useSplitButtons: boolean):void;
    }
    export class Fill extends Ext.Component {
        isFill: boolean;
        constructor(config: any);
    }
    export class Item extends Ext.Component {
        constructor(config: any);
    }
    export class Paging extends Ext.toolbar.Toolbar {
        constructor(config: any);
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        doRefresh():boolean;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        moveFirst():boolean;
        moveLast():boolean;
        moveNext():boolean;
        movePrevious():boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        setStore(store: any):void;
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
    export class NavigationModel extends Ext.grid.NavigationModel {
        constructor();
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
        collapseAll(callback?: Function, scope?: any):void;
        collapseNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expandAll(callback?: Function, scope?: any):void;
        expandNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expandPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        getChecked():Ext.data.TreeModel[];
        getRootNode():Ext.data.TreeModel;
        selectPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        setRootNode(root: any):Ext.data.TreeModel;
    }
    export class View extends Ext.view.Table {
        isTreeView: boolean;
        constructor(config: any);
        collapse(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expand(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
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
    export class TreeViewDragDrop extends Ext.plugin.Abstract {
        dragZone: Ext.view.DragZone;
        dropZone: Ext.grid.ViewDropZone;
        constructor(config?: any);
    }
}
declare module Ext.util {
    export class AbstractMixedCollection extends Ext.Base {
        hasListeners: any;
        isMixedCollection: boolean;
        isObservable: boolean;
        constructor(allowFunctions: any, keyFn: any);
        add(key: any, obj?: any):any;
        addAll(objs: any):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clear():void;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.MixedCollection;
        collect(property: string, root?: string, allowBlank?: boolean):any[];
        contains(o: any):boolean;
        containsKey(key: string):boolean;
        each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        enableBubble(eventNames: any):void;
        filter(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean):Ext.util.MixedCollection;
        filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.MixedCollection;
        find():void;
        findBy(fn: (item: any, key: string) => any, scope?: any):any;
        findIndex(property: string, value: any, start?: number, anyMatch?: boolean, caseSensitive?: boolean):number;
        findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
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
        insert(index: number, key: any, o?: any):any;
        isSuspended(event?: string):boolean;
        last():any;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        remove(o: any):any;
        removeAll(items?: any[]):Ext.util.MixedCollection;
        removeAt(index: number):any;
        removeAtKey(key: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        removeRange(index: number, removeCount?: number):any;
        replace(key: string, o: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        sum(property: string, root?: string, start?: number, end?: number):number;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        updateKey(oldKey: any, newKey: any):void;
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
    export class Base64 {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static decode(input: any):string;
        static destroy():void;
        static encode(input: any):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class CSS {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static createRule(styleSheet: CSSStyleSheet, selector: string, property: string):CSSStyleRule;
        static createStyleSheet(cssText: string, id: string):CSSStyleSheet;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getRule(selector: any, refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):any;
        static initConfig(config: any):Ext.Base;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: any, property: string, value: string):boolean;
    }
    export class ClickRepeater extends Ext.util.Observable {
        constructor(el: any, config?: any);
        disable(force: any):void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class Collection extends Ext.Base {
        filtered: boolean;
        generation: number;
        grouped: boolean;
        hasListeners: any;
        isCollection: boolean;
        length: number;
        sorted: boolean;
        updating: number;
        constructor(config: any);
        add(item: any):any;
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        aggregate(property: string, operation: any, begin?: number, end?: number, scope?: any):any;
        aggregateByGroup(property: string, operation: any, scope?: any):any;
        average(property: string, begin?: number, end?: number):any;
        averageByGroup(property: string):any;
        beginUpdate():void;
        bounds(property: string, begin?: number, end?: number):any[];
        boundsByGroup(property: string):any;
        clear():void;
        clearListeners():void;
        clone():Ext.util.Collection;
        collect(property: string, root?: string, allowNull?: boolean):any[];
        contains(item: any):boolean;
        containsKey(key: string):boolean;
        count():number;
        countByGroup():any;
        createFiltered(property: any, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        decodeRemoveItems():void;
        destroy():void;
        each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        enableBubble(events: any):void;
        endUpdate():void;
        extremes(property: string, begin?: number, end?: number):any[];
        extremesByGroup(property: string):any;
        filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.Collection;
        find(property: string, value: any, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):any;
        findBy(fn: (item: any, key: string) => any, scope?: any, start?: number):any;
        findIndex(property: string, value: any, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):number;
        findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        first(grouped?: boolean):any;
        get(key: any):any;
        getAt(index: number):any;
        getAutoFilter():boolean;
        getAutoSort():boolean;
        getBubbleEvents():any;
        getByKey(key: any):any;
        getCount():number;
        getDecoder():Function;
        getDefaultSortDirection():string;
        getExtraKeys():any;
        getFilterFn():Function;
        getFilters(autoCreate?: any):Ext.util.FilterCollection;
        getGrouper():any;
        getKey(item: any):any;
        getListeners():any;
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
        isSuspended(eventName?: string):boolean;
        itemChanged(item: any, modified?: string[], oldKey?: any):void;
        last(grouped?: boolean):any;
        max(property: string, begin?: number, end?: number):any;
        maxByGroup(property: string):any;
        maxItem(property: string, begin?: number, end?: number):any;
        maxItemByGroup(property: string):any;
        min(property: string, begin?: number, end?: number):any;
        minByGroup(property: string):any;
        minItem(property: string, begin?: number, end?: number):any;
        minItemByGroup(property: string):any;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        onFilterChange(filters: Ext.util.FilterCollection):void;
        onSortChange(sorters: Ext.util.SorterCollection):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove(item: any):number;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeAll():Ext.util.Collection;
        removeAt(index: number, count?: number):any;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeByKey(key: string):any;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        replaceAll(item: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAutoFilter(autoFilter: boolean):void;
        setAutoSort(autoSort: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setDecoder(decoder: Function):void;
        setDefaultSortDirection(defaultSortDirection: string):void;
        setExtraKeys(extraKeys: any):void;
        setFilters(filters: any):void;
        setGrouper(grouper: any):void;
        setGroups(groups: Ext.util.GroupCollection):void;
        setListeners(listeners: any):void;
        setMultiSortLimit(multiSortLimit: number):void;
        setRootProperty(rootProperty: string):void;
        setSorters(sorters: any):void;
        setSource(source: Ext.util.Collection):void;
        sort(property?: any, direction?: string, mode?: string):Ext.util.Collection;
        sortBy(sorterFn: Function):void;
        sortData(data: any[]):any[];
        sortItems(sortFn: Function):void;
        splice(index: number, toRemove: any, toAdd?: any[]):void;
        sum(property: string, begin?: number, end?: number):any;
        sumByGroup(property: string):any;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        update(fn: (collection: Ext.util.Collection) => any, scope?: any):any;
        updateKey(item: any, oldKey: string):void;
    }
    export class CollectionKey extends Ext.Base {
        name: string;
        get(key: any):any;
        getCollection():any;
        getId():string;
        getKeyFn():any;
        getProperty():string;
        getUnique():boolean;
        indexOf(key: any, startAt?: number):number;
        setCollection(collection: any):void;
        setKeyFn(keyFn: any):void;
        setProperty(property: string):void;
        setRootProperty(rootProperty: string):void;
        setUnique(unique: boolean):void;
        updateKey(item: any, oldKey: string):void;
    }
    export class ComponentDragger extends Ext.dd.DragTracker {
        constructor(comp: any, config?: any);
    }
    export class Cookies {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clear(name: string, path?: string):void;
        static destroy():void;
        static get(name: string):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static set(name: string, value: any, expires?: any, path?: string, domain?: string, secure?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class DelayedTask {
        id: number;
        constructor(fn?: Function, scope?: any, args?: any[], cancelOnDelay?: boolean);
        cancel():void;
        delay(newDelay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
    }
    export class ElementContainer extends Ext.Base {
        getChildEls():any;
        setChildEls(childEls: any):void;
    }
    export class Event extends Ext.Base {
        isEvent: boolean;
    }
    export class Filter extends Ext.Base {
        disabled: boolean;
        constructor(config: any);
        getAnyMatch():boolean;
        getCaseSensitive():boolean;
        getExactMatch():boolean;
        getOperator():string;
        getProperty():string;
        getRoot():string;
        getState():any;
        getValue():any;
        serialize():any;
        setAnyMatch(anyMatch: boolean):void;
        setCaseSensitive(caseSensitive: boolean):void;
        setExactMatch(exactMatch: boolean):void;
        setFilterFn(filterFn: Function):void;
        setId(id: string):void;
        setOperator(operator: string):void;
        setProperty(property: string):void;
        setRoot(root: string):void;
        setValue(value: any):void;
        static createFilterFn(filters: any):Function;
    }
    export class FilterCollection extends Ext.util.Collection {
        filterFn: any;
        constructor(config: any);
        filterData(data: any[]):any[];
    }
    export class Floating extends Ext.Base {
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(dom: any);
        center():Ext.Component;
        doConstrain(constrainTo?: any):void;
        getAlwaysOnTop():any;
        setAlwaysOnTop(alwaysOnTop: any):void;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
    }
    export class Focusable extends Ext.Base {
        beforeBlur(e: Ext.event.Event):void;
        beforeFocus(e: Ext.event.Event):void;
        cancelFocus():void;
        focus(selectText?: any, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        getTabIndex():number;
        initFocusable():void;
        initFocusableEvents():void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        setTabIndex(newTabIndex: number):void;
    }
    export class FocusableContainer extends Ext.Mixin {
    }
    export class Format {
        static currencyAtEnd: boolean;
        static currencyPrecision: number;
        static currencySign: string;
        static decimalSeparator: string;
        static defaultDateFormat: string;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static percentSign: string;
        static self: Ext.Class;
        static thousandSeparator: string;
        static attributes(attributes: any):void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static capitalize(string: string):string;
        static currency(value: any, sign?: string, decimals?: number, end?: boolean):string;
        static date(value: any, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue?: string):string;
        static destroy():void;
        static ellipsis(value: string, length: number, word?: boolean):string;
        static escape(string: string):string;
        static escapeRegex(string: string):string;
        static fileSize(size: any):string;
        static format(string: string, ...values: any[]):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hex(value: number, digits: number):string;
        static htmlDecode(value: string):string;
        static htmlEncode(value: string):string;
        static initConfig(config: any):Ext.Base;
        static leftPad(string: string, size: number, character?: string):string;
        static lowercase(value: string):string;
        static math():Function;
        static nl2br(v: string):string;
        static number(v: number, formatString: string):string;
        static numberRenderer(format: string):Function;
        static or(value: boolean, orValue: any):void;
        static parseBox(box: any):any;
        static percent(value: number, formatString?: string):string;
        static pick(value: boolean, firstValue: any, secondValue: any):void;
        static plural(value: number, singular: string, plural?: string):void;
        static round(value: any, precision?: number):number;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static stripScripts(value: any):string;
        static stripTags(value: any):string;
        static substr(value: string, start: number, length: number):string;
        static toggle(string: string, value: string, other: string):string;
        static trim(string: string):string;
        static uncapitalize(string: string):string;
        static undef(value: any):any;
        static uppercase(value: string):string;
        static usMoney(value: any):string;
    }
    export class Group extends Ext.util.Collection {
        constructor(config: any);
        getGroupKey():any;
        setGroupKey(groupKey: any):void;
    }
    export class GroupCollection extends Ext.util.Collection {
        constructor(config: any);
        getItemRoot():any;
        setItemRoot(itemRoot: any):void;
    }
    export class Grouper extends Ext.util.Sorter {
        constructor(config: any);
        getGroupFn():Function;
        getGroupString(item: Ext.data.Model):string;
        getSortProperty():string;
        setGroupFn(groupFn: Function):void;
        setSortProperty(sortProperty: string):void;
    }
    export class HashMap extends Ext.Base {
        hasListeners: any;
        constructor(config?: any);
        add(key: any, o?: any):any;
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clear():Ext.util.HashMap;
        clearListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        destroy():void;
        each(fn: (key: string, value: number, length: number) => any, scope?: any):Ext.util.HashMap;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        get(key: string):any;
        getBubbleEvents():any;
        getCount():number;
        getKey(o: any):string;
        getKeyFn():Function;
        getKeys():any[];
        getListeners():any;
        getValues():any[];
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove(o: any):boolean;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeAtKey(key: string):boolean;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        replace(key: string, value: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setKeyFn(keyFn: Function):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class History {
        static hasListeners: any;
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static isObservable: boolean;
        static self: Ext.Class;
        static useTopWindow: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static back():void;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static destroy():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static forward():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static initConfig(config: any):Ext.Base;
        static isSuspended(event?: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static resolveListenerScope(defaultScope?: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Inflector {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static isTransnumeral(word: string):boolean;
        static ordinalize(number: number):string;
        static plural(matcher: RegExp, replacer: string):void;
        static pluralize(word: string):string;
        static setConfig(name: any, value?: any):Ext.Base;
        static singular(matcher: RegExp, replacer: string):void;
        static singularize(word: string):string;
        static statics():Ext.Class;
    }
    export class KeyMap extends Ext.Base {
        lastKeyEvent: Ext.event.Event;
        constructor(config: any);
        addBinding(binding: any):void;
        disable():void;
        enable():void;
        isEnabled():boolean;
        on(key: any, fn: Function, scope?: any):void;
        removeBinding(binding: any):void;
        setDisabled(disabled: boolean):void;
        un(key: any, fn: Function, scope?: any):void;
    }
    export class KeyNav extends Ext.Base {
        lastKeyEvent: Ext.event.Event;
        constructor(config: any);
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class LocalStorage extends Ext.Base {
        destroyed: boolean;
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
        constructor(config?: any);
        getMaxSize():number;
        prune():void;
        setMaxSize(maxSize: number):void;
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
        isSortable: boolean;
        constructor(config: any);
        findInsertionIndex(newItem: any, sorterFn?: Function):number;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        getSorterCount():void;
        getSorters():any;
        reorder(mapping: any):void;
        setSorters(sorters: any):void;
        sort(sorters?: any, direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class ObjectTemplate extends Ext.Base {
        constructor(template: any, options?: any);
        apply(context: any):any;
        compile(template: any):Function;
    }
    export class Observable extends Ext.Base {
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        static capture(o: Ext.util.Observable, fn: Function, scope?: any):void;
        static observe(c: Function, listeners: any):void;
        static releaseCapture(o: Ext.util.Observable):void;
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
        translate(x: any, y: number):Ext.util.Region;
        static from(object: any):Ext.util.Point;
        static fromEvent(e: Event):Ext.util.Point;
        static fromTouch(touch: Event):Ext.util.Point;
    }
    export class Positionable extends Ext.Base {
        alignTo(element: any, position?: string, offsets?: number[]):Ext.util.Positionable;
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getBox(contentBox?: boolean, local?: boolean):any;
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
        move(direction: string, distance: number):void;
        setBox(box: any):Ext.util.Positionable;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: any, y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setX(The: number):Ext.util.Positionable;
        setXY(pos: number[]):Ext.util.Positionable;
        setY(The: number):Ext.util.Positionable;
        translatePoints(x: any, y?: number):any;
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
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: any):HTMLElement;
        initRenderData():any;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        render(container?: any, position?: any):void;
    }
    export class Schedulable extends Ext.Base {
        constructor();
        getScheduler():Ext.util.Scheduler;
        schedule():void;
        sort():void;
        unschedule():void;
    }
    export class Scheduler extends Ext.Base {
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        adjustBusy(adjustment: number):void;
        clearListeners():void;
        destroy():void;
        enableBubble(events: any):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():any;
        getListeners():any;
        getPreSort():any;
        getTickDelay():number;
        hasListener(eventName: string):boolean;
        isBusy():boolean;
        isIdle():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: any, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: any, eventName: any, fn?: Function, scope?: any):void;
        notify():void;
        on(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: any, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: any, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: any, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: any):void;
        setListeners(listeners: any):void;
        setPreSort(preSort: any):void;
        setTickDelay(tickDelay: number):void;
        sortItem(item: any):Ext.util.Scheduler;
        sortItems(items: any):Ext.util.Scheduler;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: any, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: any, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: any, scope?: any, options?: any):void;
    }
    export class SizeMonitor extends Ext.Base {
        constructor(config: any);
    }
    export class Sortable extends Ext.Base {
        isSortable: boolean;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        getSorterCount():void;
        getSorters():any;
        setSorters(sorters: any):void;
        sort(sorters?: any, direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static createComparator(sorters: Ext.util.Sorter[]):Function;
    }
    export class Sorter extends Ext.Base {
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
        static createComparator(sorters: any, nextFn?: any):Function;
    }
    export class SorterCollection extends Ext.util.Collection {
        sortFn: any;
        constructor(config: any);
    }
    export class StoreHolder extends Ext.Base {
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Ext.data.Store):any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class TaskManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static initConfig(config: any):Ext.Base;
        static newTask(config: any):Ext.util.TaskRunner.Task;
        static setConfig(name: any, value?: any):Ext.Base;
        static start(task: any):any;
        static statics():Ext.Class;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class TaskRunner extends Ext.Base {
        constructor(interval?: any);
        newTask(config: any):Ext.util.TaskRunner.Task;
        start(task: any):any;
        stop(task: any):any;
        stopAll():void;
    }
    export class TextMetrics extends Ext.Base {
        constructor(bindTo: any, fixedWidth?: number);
        bind(el: any):void;
        getHeight(text: string):number;
        getSize(text: string):any;
        getWidth(text: string):number;
        setFixedWidth(width: number):void;
        static destroy():void;
        static measure(el: any, text: string, fixedWidth?: number):any;
    }
    export class Translatable extends Ext.Base {
        constructor(config: any);
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
        fireOnStart: boolean;
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
    export class Default extends Ext.util.sizemonitor.Abstract {
        constructor(config: any);
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
    export class SimManager {
        static isConfiguring: boolean;
        static isFirstInstance: boolean;
        static isInstance: boolean;
        static self: Ext.Class;
        static callOverridden(args: any):any;
        static callParent(args: any):any;
        static callSuper(args: any):any;
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static init(config: any):Ext.ux.ajax.SimManager;
        static initConfig(config: any):Ext.Base;
        static register(simlet: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static statics():Ext.Class;
    }
    export class SimXhr extends Ext.Base {
        constructor(config: any);
    }
    export class Simlet extends Ext.Base {
        exec(xhr: Ext.ux.ajax.SimXhr):any;
    }
    export class XmlSimlet extends Ext.ux.ajax.DataSimlet {
        xmlTpl: any[];
    }
}
declare module Ext.view {
    export class AbstractView extends Ext.Component {
        constructor(config: any);
        addItemCls(itemInfo: any, cls: string):void;
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearSelections():void;
        collectData(records: Ext.data.Model[], startIndex: number):any[];
        deselect(records: any, suppressEvent: boolean):void;
        findItemByChild(node: HTMLElement):HTMLElement;
        findTargetByEvent(e: Ext.event.Event):void;
        getNode(nodeInfo: any):HTMLElement;
        getNodeContainerSelector():void;
        getNodes(start?: number, end?: number):HTMLElement[];
        getRecord(node: any):Ext.data.Model;
        getRecords(nodes: HTMLElement[]):Ext.data.Model[];
        getSelectedNodes():HTMLElement[];
        getSelectedRecords():Ext.data.Model[];
        getSelectionCount():number;
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        indexOf(nodeInfo: any):number;
        isSelected(node: any):boolean;
        onBindStore(store: any, initial: any, propName: any):void;
        onUnbindStore(store: any):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(record: any):void;
        removeItemCls(itemInfo: any, cls: string):void;
        select(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        setSelection(selection: any):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        child(selector?: any):any;
        down(selector?: any):any;
        getInnerTpl(displayField: string):string;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class BoundListKeyNav extends Ext.view.NavigationModel {
        constructor();
        selectHighlighted(e: any):void;
    }
    export class DragZone extends Ext.dd.DragZone {
        constructor(config: any);
        isPreventDrag(e: Ext.event.Event, record: Ext.data.Model, item: HTMLElement, index: number):void;
    }
    export class DropZone extends Ext.dd.DropZone {
        constructor(config: any);
    }
    export class MultiSelector extends Ext.grid.Panel {
        constructor(config: any);
        getSearch():any;
        setSearch(search: any):void;
    }
    export class MultiSelectorSearch extends Ext.panel.Panel {
        constructor(config: any);
        getSearchStore():Ext.data.Store;
    }
    export class NavigationModel extends Ext.Base {
        factoryConfig: any;
        hasListeners: any;
        isObservable: boolean;
        constructor();
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        focusItem(item: any):void;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class NodeCache extends Ext.Base {
        constructor(view: any);
        clear(removeDom?: boolean):void;
        fill(els: HTMLElement[]):Ext.view.NodeCache;
        indexOf(el: any):number;
        removeElement(el: any, removeDom?: boolean):void;
        replaceElement(el: any, replacement: any, domReplace?: boolean):Ext.view.NodeCache;
        scroll(newRecords: Ext.data.Model[], direction: number, removeCount: number):void;
    }
    export class Table extends Ext.view.View {
        constructor(config: any);
        addRowCls(rowInfo: any, cls: string):void;
        autoSizeColumn(header: any):void;
        expandToFit(header: any):void;
        focusCell(pos: Ext.grid.CellContext, delay?: any):void;
        focusRow(row: any, delay?: any):void;
        getBodySelector():void;
        getCellSelector(header?: Ext.grid.column.Column):void;
        getColumnSizerSelector(header: any):void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getRow(nodeInfo: any):HTMLElement;
        getRowClass(record: Ext.data.Model, index: number, rowParams: any, store: Ext.data.Store):string;
        removeRowCls(rowInfo: any, cls: string):void;
        walkRecs(startRec: Ext.data.Model, distance: number):void;
        walkRows(startRow: number, distance: number):void;
    }
    export class TableLayout extends Ext.layout.component.Auto {
        constructor(config: any);
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
        buttonText: any;
        defaultTextHeight: number;
        minProgressWidth: number;
        minPromptWidth: number;
        constructor(cfg: any);
        alert(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        confirm(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        progress(title: string, message: string, progressText?: string):Ext.window.MessageBox;
        prompt(title: string, message: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, message?: string):Ext.window.MessageBox;
        wait(message: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Toast extends Ext.window.Window {
        constructor(config: any);
    }
    export class Window extends Ext.panel.Panel {
        isWindow: boolean;
        constructor(config: any);
        getDefaultFocus():void;
        maximize(animate?: boolean):Ext.window.Window;
        minimize():Ext.window.Window;
        restore(animate?: boolean):Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}