// Ext type declarations (Typescript 1.4 or newer) generated on Sun Mar 01 2015 14:14:31 GMT+0000 (GMT)
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
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: boolean|number):Function;
    static callback(callback: Function|string, scope?: any, args?: any[], delay?: number, caller?: any, defaultScope?: any):any;
    static checkVersion(specs: any, matchAll?: boolean):boolean;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static coerce(from: any, to: any):any;
    static copyTo(dest: any, source: any, names: string|string[], usePrototypeKeys?: boolean):any;
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
    static factory(config: any, classReference: string, instance?: any, aliasNamespace?: any):void;
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
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any):Ext.data.Store;
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
    static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
    static onReady(fn: Function, scope?: any, options?: any):void;
    static override(target: any, overrides: any):void;
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any[]|NodeList, propertyName: string):any[];
    static query(selector: string, asDom?: boolean, root?: HTMLElement|string):HTMLElement[]|Ext.dom.Element[];
    static regStore(id: string, config: any):void;
    static removeNode(node: HTMLElement):void;
    static require(expressions: string|string[], fn?: Function, scope?: any):void;
    static resumeLayouts(flush?: boolean):void;
    static returnId(o: any):void;
    static returnTrue():void;
    static select():void;
    static setGlyphFontFamily(fontFamily: string):void;
    static setVersion(packageName: string, version: string|Ext.Version):Ext;
    static sum(array: any[]):number;
    static suspendLayouts():void;
    static syncRequire(expressions: string|string[], fn?: Function, scope?: any):void;
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
        static method: string;
        static timeout: number;
        static url: string;
        static abort(request?: any):void;
        static abortAll():void;
        static addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static clearListeners():void;
        static enableBubble(events: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getAsync():boolean;
        static getAutoAbort():boolean;
        static getBinary():boolean;
        static getBubbleEvents():string|string[];
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
        static isLoading(request?: any):boolean;
        static isSuspended(eventName?: string):boolean;
        static mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static parseStatus(status: number):any;
        static relayEvents(object: any, events: any):Ext.mixin.Observable;
        static removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        static request(options: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueuedEvents: boolean):void;
        static setAsync(async: boolean):void;
        static setAutoAbort(autoAbort: boolean):void;
        static setBinary(binary: boolean):void;
        static setBubbleEvents(bubbleEvents: string|string[]):void;
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
        static un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static upload(form: string|HTMLElement|Ext.dom.Element, url: string, params: string, options: any):void;
    }
    export class AnimationQueue {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
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
        static remove(array: any[], item: any):any[];
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
    export class Class {
        alias: string|string[];
        alternateClassName: string|string[];
        cachedConfig: any;
        config: any;
        extend: string;
        inheritableStatics: any;
        mixins: any;
        platformConfig: any;
        requires: string[];
        singleton: boolean;
        statics: any;
        uses: string[];
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
        alignTarget: string;
        alwaysOnTop: boolean|number;
        autoEl: any;
        autoRender: boolean|string|HTMLElement|Ext.dom.Element;
        autoScroll: boolean;
        autoShow: boolean;
        baseCls: string;
        bind: any;
        border: number|string|boolean;
        childEls: any;
        cls: string;
        columnWidth: number|string;
        componentCls: string;
        componentLayout: any;
        constrain: boolean;
        constrainTo: Ext.util.Region|Ext.dom.Element;
        constraintInsets: any;
        contentEl: string;
        controller: any;
        data: any;
        defaultAlign: string;
        defaultListenerScope: boolean;
        disabled: boolean;
        disabledCls: string;
        draggable: any;
        fixed: boolean;
        floating: boolean;
        focusCls: string;
        focusOnToFront: boolean;
        formBind: boolean;
        frame: boolean;
        height: number|string;
        hidden: boolean;
        hideMode: string;
        html: any;
        id: string;
        itemId: string;
        listeners: any;
        loader: any;
        margin: number|string;
        maskElement: string;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        modelValidation: boolean;
        overCls: string;
        overflowX: string;
        overflowY: string;
        padding: number|string;
        plugins: any;
        publishes: any;
        reference: string;
        region: any;
        renderData: any;
        renderSelectors: any;
        renderTo: string|HTMLElement|Ext.dom.Element;
        renderTpl: Ext.XTemplate|string|string[];
        resizable: any;
        resizeHandles: string;
        rtl: boolean;
        saveDelay: number;
        session: any;
        shadow: string|boolean;
        shadowOffset: number;
        shrinkWrap: boolean|number;
        stateEvents: string[];
        stateId: string;
        stateful: boolean;
        style: any;
        tabIndex: number;
        toFrontOnShow: boolean;
        tpl: Ext.XTemplate|Ext.Template|string|string[];
        tplWriteMode: string;
        ui: string;
        viewModel: any;
        weight: number;
        width: number|string;
        xtype: string;
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
        addClass(cls: string|string[]):Ext.Component;
        addCls(cls: string|string[]):Ext.Component;
        addClsWithUI(classes: string|string[], skip?: boolean):void;
        addListener(element: any, listeners: any, scope: any, options: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        addPropertyToState(state: any, propName: string, value?: string):boolean;
        addStateEvents(events: string|string[]):void;
        addUIClsToElement(uiCls: string):void;
        afterComponentLayout(width: number, height: number, oldWidth: number|void, oldHeight: number|void):void;
        afterHide(callback?: Function, scope?: any):void;
        afterRender():void;
        afterSetPosition(x: number, y: number):void;
        afterShow(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):void;
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
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
        doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
        enable(silent?: boolean):void;
        enableBubble(eventNames: string|string[]):void;
        ensureAttachedToBody(runLayout?: boolean):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: string|Ext.Class):Ext.container.Container;
        findPlugin(ptype: string):Ext.plugin.Abstract;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        focus(selectText?: any, delay?: boolean|number, callback?: Function, scope?: Function):Ext.Component;
        forceComponentLayout(options?: any):void;
        getActiveAnimation():Ext.fx.Anim|boolean;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAlwaysOnTop():boolean|number;
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getBind():any;
        getBox(contentBox?: boolean, local?: boolean):any;
        getBubbleTarget():void;
        getChildEls():any;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getController():any;
        getData():any;
        getDefaultListenerScope():boolean;
        getEl():Ext.dom.Element;
        getHeight():number;
        getId():string;
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
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
        getOffsetsTo(offsetsTo: Ext.util.Positionable|HTMLElement|string):number[];
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
        hasActiveFx():Ext.fx.Anim|boolean;
        hasCls(className: string):boolean;
        hasListener(eventName: string):boolean;
        hasUICls(cls: string):void;
        hide(animateTarget?: string|Ext.dom.Element|Ext.Component, callback?: Function, scope?: any):Ext.Component;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        move(direction: string, distance: number):void;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        nextNode(selector?: string):Ext.Component;
        nextSibling(selector?: string):Ext.Component;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onAdded(container: Ext.container.Container, pos: number, instanced: boolean):void;
        onBoxReady(width: number, height: number):void;
        onDestroy():void;
        onDisable():void;
        onEnable():void;
        onHide(animateTarget?: string|Ext.dom.Element|Ext.Component, callback?: Function, scope?: any):void;
        onPosition(x: number, y: number):void;
        onRemoved(destroying: boolean):void;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        onResize(width: any, height: any, oldWidth: any, oldHeight: any):void;
        onShow(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):void;
        onShowComplete(callback?: Function, scope?: any):void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        previousNode(selector?: string):Ext.Component;
        previousSibling(selector?: string):Ext.Component;
        publishState(property?: string, value?: any):void;
        registerFloatingItem(cmp: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeClass(cls: string|string[]):Ext.Component;
        removeCls(cls: string|string[]):Ext.Component;
        removeClsWithUI(cls: string|string[]):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        removeUIClsFromElement(uiCls: string):void;
        render(container?: Ext.dom.Element|HTMLElement|string, position?: string|number):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: string|string[], state: any):any;
        saveState():void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        scrollTo(x: number, y: number, animate?: any):void;
        sequenceFx():any;
        setAlwaysOnTop(alwaysOnTop: boolean|number):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setBind(bind: any):void;
        setBorder(border: string|number):void;
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
        setMargin(margin: number|string):void;
        setMaxHeight(maxHeight: number):void;
        setMaxWidth(maxWidth: number):void;
        setMinHeight(minHeight: number):void;
        setMinWidth(minWidth: number):void;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: number|number[], y?: number, animate?: any):Ext.Component;
        setPosition(x: any, y?: number, animate?: any):Ext.Component;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setRegion(region: string):string;
        setScrollX(x: number):void;
        setScrollY(y: number):void;
        setSession(session: any):void;
        setSize(width: any, height: number|string):Ext.Component;
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
        show(animateTarget?: string|Ext.dom.Element, callback?: Function, scope?: any):Ext.Component;
        showAt(x: number|number[], y?: number, animate?: any):Ext.Component;
        showBy(component: Ext.Component|Ext.dom.Element, position?: string, offsets?: number[]):Ext.Component;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: string, fn: Function, scope?: any):void;
        unmask():void;
        up(selector?: string|Ext.Component, limit?: string|number|Ext.Component):Ext.container.Container;
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
        loadOnRender: any;
    }
    export class ComponentManager {
        static create(config: any, defaultType?: string):Ext.Component;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static is(component: Ext.Component, selector: string):boolean;
        static query(selector: string, root?: Ext.container.Container):Ext.Component[];
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
    export class Editor extends Ext.container.Container {
        alignment: string;
        allowBlur: boolean;
        autoSize: any;
        cancelOnEsc: boolean;
        completeOnEnter: boolean;
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
        rendererScope: any;
        scope: any;
        scripts: boolean;
        success: Function;
        target: HTMLElement|Ext.dom.Element|string;
        url: string;
        hasListeners: any;
        isLoader: boolean;
        isObservable: boolean;
        abort():void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        isSuspended(event?: string):boolean;
        load(options: any):void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        setTarget(target: string|HTMLElement|Ext.dom.Element):void;
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
        static addListener(el: any, eventName: string, handler?: ((event: Ext.event.Event, target: Ext.dom.Element, options: any) => any)|string, scope?: any, options?: any):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getId(element: HTMLElement|Ext.dom.Element):string;
        static getInitialConfig(name?: string):any;
        static getPageX(event: any):number;
        static getPageXY(event: any):number[];
        static getPageY(event: any):number;
        static getRelatedTarget(event: any):HTMLElement;
        static getTarget(event: any):HTMLElement;
        static on(el: any, eventName: string, handler?: ((event: Ext.event.Event, target: Ext.dom.Element, options: any) => any)|string, scope?: any, options?: any):void;
        static onWindowResize(fn: Function, scope: any, options?: boolean):void;
        static onWindowUnload(fn: Function, scope: any, options: boolean):void;
        static preventDefault(event: Event):void;
        static purgeElement(el: any, eventName?: string):void;
        static removeAll(el: any):void;
        static removeListener(el: any, eventName: string, fn: Function, scope: any):void;
        static removeResizeListener(fn: Function, scope: any):void;
        static removeUnloadListener(fn: Function, scope: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static stopEvent(event: Event):void;
        static stopPropagation(event: Event):void;
        static un(el: any, eventName: string, fn: Function, scope: any):void;
    }
    export class Evented extends Ext.Base {
        bubbleEvents: string|string[];
        listeners: any;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
        define(type: string, config?: any):Function;
    }
    export class FocusManager {
        static enabled: boolean;
        static focusedCmp: Ext.Component;
        static hasListeners: any;
        static isObservable: boolean;
        static whitelist: string[];
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addXTypeToWhitelist(xtype: string|string[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static disable():void;
        static enable(options: any):void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeXTypeFromWhitelist(xtype: string|string[]):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
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
        static pass(fn: Function, args: any[], scope?: any):Function;
    }
    export class GlobalEvents {
        static hasListeners: any;
        static addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static clearListeners():void;
        static enableBubble(events: string|string[]):void;
        static fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getBubbleEvents():string|string[];
        static getConfig(name?: string, peek?: boolean):any;
        static getId():string;
        static getInitialConfig(name?: string):any;
        static getListeners():any;
        static hasListener(eventName: string):boolean;
        static isSuspended(eventName?: string):boolean;
        static mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        static mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static relayEvents(object: any, events: any):Ext.mixin.Observable;
        static removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueuedEvents: boolean):void;
        static setBubbleEvents(bubbleEvents: string|string[]):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setListeners(listeners: any):void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        static unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        static unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Img extends Ext.Component {
        alt: string;
        glyph: number|string;
        imgCls: string;
        src: string;
        title: string;
        constructor(config: any);
        setSrc(src: string):void;
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
    export class LoadMask extends Ext.Component {
        maskCls: string;
        msg: string;
        msgCls: string;
        store: Ext.data.Store;
        target: Ext.Component;
        useMsg: boolean;
        useTargetEl: boolean;
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
        static body: Ext.dom.Element;
        static buttonText: any;
        static contentPaddingProperty: string;
        static dd: Ext.util.ComponentDragger;
        static defaultTextHeight: number;
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
        static scrollFlags: any;
        static zIndexManager: Ext.ZIndexManager;
        static zIndexParent: Ext.container.Container;
        static add(...component: any[]):Ext.Component[]|Ext.Component;
        static addBodyCls(cls: string):Ext.panel.Panel;
        static addClass(cls: string|string[]):Ext.Component;
        static addCls(cls: string|string[]):Ext.Component;
        static addClsWithUI(classes: string|string[], skip?: boolean):void;
        static addDocked(items: any, pos?: number):Ext.Component[];
        static addListener(element: any, listeners: any, scope: any, options: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addStateEvents(events: string|string[]):void;
        static addTool(tools: any[]|Ext.panel.Tool[]):void;
        static alert(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        static animate(animObj: any):any;
        static applyState(state: any):void;
        static bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        static cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        static center():Ext.Component;
        static child(selector?: string|Ext.Component):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static cloneConfig(overrides: any):Ext.Component;
        static close():void;
        static collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        static confirm(title: string, message: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static contains(comp: Ext.Component, deep?: boolean):boolean;
        static convertCollapseDir(collapseDir: any):void;
        static disable():Ext.container.Container;
        static doComponentLayout():Ext.Component;
        static doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
        static doLayout():Ext.container.Container;
        static down(selector?: string|Ext.Component):any;
        static enable():Ext.container.Container;
        static enableBubble(eventNames: string|string[]):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate?: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: string|Ext.Class):Ext.container.Container;
        static findPlugin(ptype: string):Ext.plugin.Abstract;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static focus(selectText?: any, delay?: boolean|number, callback?: Function, scope?: Function):Ext.Component;
        static forceComponentLayout(options?: any):void;
        static getActiveAnimation():Ext.fx.Anim|boolean;
        static getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        static getAlwaysOnTop():boolean|number;
        static getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        static getBind():any;
        static getBox(contentBox?: boolean, local?: boolean):any;
        static getChildByElement(el: Ext.dom.Element|HTMLElement|string, deep: boolean):Ext.Component;
        static getChildEls():any;
        static getCollapsed():boolean|string;
        static getComponent(comp: string|number):Ext.Component;
        static getConfig(name?: string, peek?: boolean):any;
        static getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        static getController():any;
        static getData():any;
        static getDefaultFocus():void;
        static getDefaultListenerScope():boolean;
        static getDockedComponent(comp: string|number):Ext.Component;
        static getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        static getEl():Ext.dom.Element;
        static getHeader():void;
        static getHeight():number;
        static getId():string;
        static getInherited(inner?: boolean):any;
        static getInheritedConfig(property: string, skipThis?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
        static getItemId():string;
        static getLayout():Ext.layout.container.Container;
        static getLoader():Ext.ComponentLoader;
        static getLocalX():number;
        static getLocalXY():number[];
        static getLocalY():number;
        static getMaxHeight():number;
        static getMaxWidth():number;
        static getMinHeight():number;
        static getMinWidth():number;
        static getOffsetsTo(offsetsTo: Ext.util.Positionable|HTMLElement|string):number[];
        static getPlugin(pluginId: string):Ext.plugin.Abstract;
        static getPosition(local?: boolean):number[];
        static getPublishes():any;
        static getReference():string;
        static getReferences():any;
        static getRegion():Ext.util.Region;
        static getScrollX():number;
        static getScrollY():number;
        static getSession():any;
        static getSize(contentSize?: boolean):any;
        static getTabIndex():number;
        static getViewModel():any;
        static getViewRegion():Ext.util.Region;
        static getWidth():number;
        static getX():number;
        static getXType():string;
        static getXTypes():string;
        static getXY():number[];
        static getY():number;
        static hasActiveFx():Ext.fx.Anim|boolean;
        static hasCls(className: string):boolean;
        static hasListener(eventName: string):boolean;
        static hasUICls(cls: string):void;
        static hide():Ext.Component;
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
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static move(fromIdx: number|Ext.Component, toIdx: number):Ext.Component;
        static moveAfter(item: Ext.Component, after: Ext.Component):Ext.Component;
        static moveBefore(item: any, before: Ext.Component):Ext.Component;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static nextChild(child: Ext.Component, selector?: string):Ext.Component;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static prevChild(child: Ext.Component, selector?: string):Ext.Component;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, message: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, message: string, fn?: Function, scope?: any, multiline?: boolean|number, value?: string):Ext.window.MessageBox;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: any):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(component: Ext.Component|string, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeBodyCls(cls: string):Ext.panel.Panel;
        static removeClass(cls: string|string[]):Ext.Component;
        static removeCls(cls: string|string[]):Ext.Component;
        static removeClsWithUI(cls: string|string[]):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static render(container?: Ext.dom.Element|HTMLElement|string, position?: string|number):void;
        static restore(animate?: boolean):Ext.window.Window;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static savePropToState(propName: string, state: any, stateName?: string):boolean;
        static savePropsToState(propNames: string|string[], state: any):any;
        static saveState():void;
        static scrollBy(deltaX: any, deltaY: any, animate: any):void;
        static scrollTo(x: number, y: number, animate?: any):void;
        static sequenceFx():any;
        static setActiveItem(item: Ext.Component|number|string):Ext.Component;
        static setAlwaysOnTop(alwaysOnTop: boolean|number):void;
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
        static setMargin(margin: number|string):void;
        static setMaxHeight(maxHeight: number):void;
        static setMaxWidth(maxWidth: number):void;
        static setMinHeight(minHeight: number):void;
        static setMinWidth(minWidth: number):void;
        static setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        static setPagePosition(x: number|number[], y?: number, animate?: any):Ext.Component;
        static setPosition(x: any, y?: number, animate?: any):Ext.Component;
        static setPublishes(publishes: any):void;
        static setReference(reference: string):void;
        static setRegion(region: string):string;
        static setScrollX(x: number):void;
        static setScrollY(y: number):void;
        static setSession(session: any):void;
        static setSize(width: any, height: number|string):Ext.Component;
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
        static showAt(x: number|number[], y?: number, animate?: any):Ext.Component;
        static showBy(component: Ext.Component|Ext.dom.Element, position?: string, offsets?: number[]):Ext.Component;
        static stopAnimation():Ext.dom.Element;
        static stopFx():Ext.dom.Element;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static syncFx():any;
        static toBack():Ext.Component;
        static toFront(preventFocus?: boolean):Ext.Component;
        static toggleCollapse():Ext.panel.Panel;
        static toggleMaximize():Ext.window.Window;
        static translatePoints(x: number|any[], y?: number):any;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unmask():void;
        static up(selector?: string|Ext.Component, limit?: string|number|Ext.Component):Ext.container.Container;
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
        text: string;
        textEl: string|HTMLElement|Ext.dom.Element;
        textTpl: string|Ext.XTemplate;
        value: number;
        constructor(config: any);
        getTextTpl():string|Ext.XTemplate;
        getValue():number;
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        setTextTpl(textTpl: string|Ext.XTemplate):void;
        setValue(value: number):void;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class ProgressBarWidget extends Ext.Widget {
        animate: boolean;
        baseCls: string;
        text: string;
        textTpl: string|Ext.XTemplate;
        value: number;
        constructor(config: any);
        getAnimate():boolean;
        getBaseCls():string;
        getText():string;
        getTextCls():string;
        getTextTpl():string|Ext.XTemplate;
        getUi():string;
        getValue():number;
        setAnimate(animate: boolean):void;
        setBaseCls(baseCls: string):void;
        setText(text: string):void;
        setTextCls(textCls: string):void;
        setTextTpl(textTpl: string|Ext.XTemplate):void;
        setUi(ui: string):void;
        setValue(value: number):void;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
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
    export class TaskQueue {
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
        viewModel: any;
        width: number|string;
        defaultBindProperty: string;
        constructor(config: any);
        getBind():any;
        getController():any;
        getDefaultListenerScope():boolean;
        getHeight():number|string;
        getInherited(inner?: boolean):any;
        getInheritedConfig(property: string, skipThis?: boolean):any;
        getPublishes():any;
        getRefOwner():void;
        getReference():string;
        getSession():any;
        getSize():any;
        getViewModel():any;
        getWidth():number|string;
        initInheritedState(inheritedState: any):void;
        is(selector: string):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        lookupController(skipThis?: boolean):Ext.app.ViewController;
        lookupSession(skipThis?: boolean):Ext.data.Session;
        lookupViewModel(skipThis?: boolean):Ext.app.ViewModel;
        publishState(property?: string, value?: any):void;
        setBind(bind: any):void;
        setController(controller: any):void;
        setDefaultListenerScope(defaultListenerScope: boolean):void;
        setHeight(height: number|string):void;
        setPublishes(publishes: any):void;
        setReference(reference: string):void;
        setSession(session: any):void;
        setSize(width: number, height: number):void;
        setViewModel(viewModel: any):void;
        setWidth(width: number|string):void;
    }
    export class WindowManager {
        static bringToFront(comp: any, preventFocus: boolean):boolean;
        static each(fn: Function, scope?: any):void;
        static eachBottomUp(fn: Function, scope?: any):void;
        static eachTopDown(fn: Function, scope?: any):void;
        static get(id: any):Ext.Component;
        static getActive():Ext.Component;
        static getBy(fn: Function, scope?: any):any[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hideAll():void;
        static register(comp: Ext.Component):void;
        static sendToBack(comp: any):Ext.Component;
        static setConfig(name: any, value?: any):Ext.Base;
        static unregister(comp: Ext.Component):void;
    }
    export class XTemplate extends Ext.Template {
        definitions: string|any[];
        strict: boolean;
        constructor(...html: any[]);
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
        appFolder: string;
        appProperty: string;
        autoCreateViewport: boolean|string;
        defaultToken: string;
        enableQuickTips: boolean;
        glyphFontFamily: string;
        name: string;
        namespaces: string|string[];
        paths: any;
        scope: any;
        constructor(config?: any);
        createController(name: string):Ext.app.Controller;
        destroyController(controller: string|Ext.app.Controller):void;
        getAppProperty():string;
        getAutoCreateViewport():boolean|string;
        getDefaultToken():string;
        getEnableQuickTips():boolean;
        getGlyphFontFamily():string;
        launch(profile: string):boolean;
        setAppProperty(appProperty: string):void;
        setAutoCreateViewport(autoCreateViewport: boolean|string):void;
        setDefaultToken(defaultToken: string):void;
        setEnableQuickTips(enableQuickTips: boolean):void;
        setGlyphFontFamily(glyphFontFamily: string):void;
        setName(name: string):void;
    }
    export class BaseController extends Ext.Base {
        id: string;
        listeners: any;
        routes: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners?: any):void;
        enableBubble(eventNames: string|string[]):void;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        redirectTo(token: string, force: boolean):boolean;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        application: Ext.app.Application;
        models: string|string[];
        refs: any[];
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
        getModuleClassName():any;
        getRefs():any[];
        getStore(name: string):Ext.data.Store;
        getView(view: string):Ext.Base;
        hasRef(ref: string):boolean;
        init(application: Ext.app.Application):void;
        isActive():boolean;
        onLaunch(application: Ext.app.Application):void;
        setActive(active: boolean):void;
        setApplication(application: Ext.app.Application):void;
        setModuleClassName(moduleClassName: any):void;
        setRefs(refs: any[]):void;
    }
    export class EventBus {
        static control(selectors: any, controller: Ext.app.BaseController):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static listen(to: any, controller: Ext.app.BaseController):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static unlisten(controllerId: Ext.app.BaseController):void;
    }
    export class EventDomain extends Ext.Base {
        idProperty: string;
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
        formulas: any;
        links: any;
        parent: Ext.app.ViewModel;
        schema: string|Ext.data.schema.Schema;
        session: Ext.data.Session;
        stores: any;
        view: Ext.container.Container;
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
        getStores():any;
        getView():Ext.container.Container;
        linkTo(key: string, reference: any):void;
        set(path: any, The: any):void;
        setData(data: any):void;
        setFormulas(formulas: any):void;
        setLinks(links: any):void;
        setParent(parent: Ext.app.ViewModel):void;
        setSchema(schema: string|Ext.data.schema.Schema):void;
        setSession(session: Ext.data.Session):void;
        setStores(stores: any):void;
        setView(view: Ext.container.Container):void;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.app.domain {
    export class Component {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Controller {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Direct {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Global {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Store {
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
        static disconnectAll(controller: Ext.app.Controller):void;
        static draw(fn: Function):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static recognize(url: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        allowDepress: boolean;
        arrowAlign: string;
        arrowCls: string;
        arrowVisible: boolean;
        baseParams: any;
        clickEvent: string;
        destroyMenu: boolean;
        enableToggle: boolean;
        glyph: number|string;
        handleMouseEvents: boolean;
        handler: Function;
        href: string;
        hrefTarget: string;
        icon: string;
        iconAlign: string;
        iconCls: string;
        menuAlign: string;
        overflowText: string;
        params: any;
        preventDefault: boolean;
        repeat: any;
        scale: any;
        scope: any;
        showEmptyMenu: boolean;
        text: string;
        textAlign: string;
        toggleGroup: string;
        toggleHandler: Function;
        tooltip: any;
        tooltipType: string;
        value: string|number;
        menu: any;
        pressed: boolean|boolean;
        template: Ext.Template;
        constructor(config: any);
        child(selector?: string|Ext.Component):any;
        down(selector?: string|Ext.Component):any;
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
        setGlyph(glyph: number|string):Ext.button.Button;
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
        changeHandler: Function;
        forceGlyph: number|string;
        forceIcon: string;
        items: any[];
        prependText: string;
        showText: boolean;
        constructor(config: any);
        getActiveItem():Ext.menu.CheckItem;
        setActiveItem(item: Ext.menu.CheckItem, suppressEvent?: boolean):void;
        toggleSelected():void;
    }
    export class Manager {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getPressed(groupName: string):Ext.button.Button;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Segmented extends Ext.container.Container {
        allowDepress: boolean;
        allowMultiple: boolean;
        allowToggle: boolean;
        defaultUI: string;
        value: string|number|string[]|number[];
        vertical: boolean;
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
        arrowHandler: Function;
        arrowTooltip: string;
        constructor(config: any);
        setArrowHandler(handler: Function, scope?: any):void;
    }
}
declare module Ext.chart {
    export class AbstractChart extends Ext.draw.Container {
        animation: any;
        axes: any;
        background: any;
        colors: any[];
        highlightItem: any;
        insetPadding: any;
        interactions: any[];
        legend: any;
        series: Ext.chart.series.Series|any[];
        store: Ext.data.Store;
        theme: string;
        version: string;
        constructor(config: any);
        bindStore(store: Ext.data.Store):void;
        getAxes():any;
        getHighlightItem():any;
        getInsetPadding():any;
        getInteractions():any[];
        getItemForPoint(x: number, y: number):any;
        getItemsForPoint(x: number, y: number):any[];
        getLegend():any;
        getLegendStore():Ext.data.Store;
        getSeries():Ext.chart.series.Series|any[];
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
        setSeries(series: Ext.chart.series.Series|any[]):void;
        setShadow(shadow: any):void;
        setStore(store: Ext.data.Store):void;
        setTheme(theme: string):void;
        suspendThicknessChanged():void;
    }
    export class CartesianChart extends Ext.chart.AbstractChart {
        flipXY: boolean;
        innerPadding: any;
        constructor(config: any);
        getFlipXY():boolean;
        getInnerPadding():any;
        getInnerRect():any[];
        performLayout():void;
        setFlipXY(flipXY: boolean):void;
        setInnerPadding(innerPadding: any):void;
        setInnerRect(innerRect: any[]):void;
    }
    export class Legend extends Ext.chart.LegendBase {
        rect: any[];
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
        getItemSelector():string;
        getTpl():any[];
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
        putMarkerFor(category: string, attr: any, index: string|number, canonical?: boolean, keepRevision?: boolean):void;
    }
    export class PolarChart extends Ext.chart.AbstractChart {
        innerPadding: number;
        radius: number;
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
        adjustByMajorUnit: boolean;
        background: any;
        bubbleEvents: string|string[];
        chart: Ext.chart.AbstractChart;
        fields: any[];
        floating: any;
        grid: any;
        hidden: boolean;
        increment: number;
        label: any;
        labelInSpan: boolean;
        layout: any;
        limits: any;
        linkedTo: Ext.chart.axis.Axis|string|number;
        listeners: any;
        majorTickSteps: number;
        margin: number;
        maxZoom: number;
        maximum: number;
        minZoom: number;
        minimum: number;
        minorTickSteps: number;
        needHighPrecision: boolean;
        position: string;
        renderer: Function;
        segmenter: any;
        style: any;
        title: any;
        titleMargin: number;
        visibleRange: any[];
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAdjustByMajorUnit():boolean;
        getBackground():any;
        getBubbleEvents():string|string[];
        getChart():Ext.chart.AbstractChart;
        getCoordFor(value: any, field: string, idx?: number, items?: Ext.util.MixedCollection):number;
        getFields():any[];
        getFloating():any;
        getGrid():any;
        getHidden():boolean;
        getId():string;
        getIncrement():number;
        getLabel():any;
        getLabelInSpan():boolean;
        getLayout():any;
        getLimits():any;
        getLinkedTo():Ext.chart.axis.Axis|string|number;
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
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        processData():void;
        reconcileRange():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        renderFrame():void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAdjustByMajorUnit(adjustByMajorUnit: boolean):void;
        setBackground(background: any):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
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
        setLinkedTo(linkedTo: Ext.chart.axis.Axis|string|number):void;
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
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
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
        calculateByLabelSize: boolean;
        dateFormat: string|boolean;
        fromDate: Date;
        step: any[];
        toDate: Date;
        constructor(config: any);
        getCalculateByLabelSize():boolean;
        getDateFormat():string|boolean;
        getFromDate():Date;
        getStep():any[];
        getToDate():Date;
        setCalculateByLabelSize(calculateByLabelSize: boolean):void;
        setDateFormat(dateFormat: string|boolean):void;
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
        axis: Ext.chart.axis.Axis;
        bubbleEvents: string|string[];
        listeners: any;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        calculateLayout(context: any):any;
        calculateMajorTicks(context: any):void;
        calculateMinorTicks(context: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAxis():Ext.chart.axis.Axis;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        processData(series: Ext.chart.series.Series):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAxis(axis: Ext.chart.axis.Axis):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        snapEnds(context: any, min: number, max: number, estStepSize: number):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        trimByRange(context: any, out: any, trimMin: number, trimMax: number):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
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
        axis: Ext.chart.axis.Axis;
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
        step: any;
        constructor(config: any);
        getStep():any;
        setStep(step: any):void;
    }
}
declare module Ext.chart.axis.sprite {
    export class Axis extends Ext.draw.sprite.Sprite {
        The: number;
        axis: Ext.chart.axis.Axis;
        axisLine: boolean;
        centerX: number;
        centerY: number;
        dataMax: number;
        dataMin: number;
        enlargeEstStepSizeByText: boolean;
        grid: boolean;
        label: any;
        layout: any;
        length: number;
        majorTickSize: number;
        majorTicks: boolean;
        max: number;
        min: number;
        minStepSize: number;
        minorTickSize: number;
        minorTricks: boolean;
        position: string;
        renderer: Function;
        segmenter: any;
        textPadding: number;
        visibleMax: number;
        visibleMin: number;
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
        bubbleEvents: string|string[];
        chart: Ext.chart.AbstractChart;
        enabled: boolean;
        listeners: any;
        hasListeners: any;
        throttleGap: number;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getChart():Ext.chart.AbstractChart;
        getEnabled():boolean;
        getId():string;
        getItemForEvent(e: Event):any;
        getItemsForEvent(e: Event):any[];
        getListeners():any;
        hasListener(eventName: string):boolean;
        initialize():void;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onGesture():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setChart(chart: Ext.chart.AbstractChart):void;
        setEnabled(enabled: boolean):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class CrossZoom extends Ext.chart.interactions.Abstract {
        axes: any;
        constructor();
        getAxes():any;
        getGestures():any;
        getUndoButton():any;
        setAxes(axes: any):void;
        setGestures(gestures: any):void;
        setUndoButton(undoButton: any):void;
    }
    export class Crosshair extends Ext.chart.interactions.Abstract {
        axes: any;
        gesture: string;
        lines: any;
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
        extjsGestures: any;
        gestures: any;
        panel: any;
        constructor(config: any);
        getExtjsGestures():any;
        getGestures():any;
        getPanel():any;
        setExtjsGestures(extjsGestures: any):void;
        setGestures(gestures: any):void;
        setPanel(panel: any):void;
    }
    export class PanZoom extends Ext.chart.interactions.Abstract {
        axes: any;
        overflowArrowOptions: any;
        showOverflowArrows: boolean;
        zoomOnPanGesture: boolean;
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
        calloutLine: any;
        fx: any;
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
        closeField: string;
        highField: string;
        lowField: string;
        openField: string;
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
        xAxis: Ext.chart.axis.Axis|number|string;
        xField: string;
        yAxis: Ext.chart.axis.Axis|number|string;
        yField: string|string[];
        constructor();
        getXAxis():Ext.chart.axis.Axis|number|string;
        getXField():string;
        getYAxis():Ext.chart.axis.Axis|number|string;
        getYField():string|string[];
        setXAxis(xAxis: Ext.chart.axis.Axis|number|string):void;
        setXField(xField: string):void;
        setYAxis(yAxis: Ext.chart.axis.Axis|number|string):void;
        setYField(yField: string|string[]):void;
    }
    export class Gauge extends Ext.chart.series.Series {
        angleField: string;
        donut: number;
        field: string;
        maximum: number;
        minimum: number;
        needle: boolean;
        needleLength: number;
        needleLengthRatio: number;
        needleWidth: number;
        sectors: any[];
        totalAngle: number;
        value: number;
        wholeDisk: boolean;
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
        fill: boolean;
        selectionTolerance: number;
        smooth: boolean|number;
        step: boolean;
        constructor();
        getAggregator():any;
        getFill():boolean;
        getSelectionTolerance():number;
        getSmooth():boolean|number;
        getStep():boolean;
        setAggregator(aggregator: any):void;
        setFill(fill: boolean):void;
        setSelectionTolerance(selectionTolerance: number):void;
        setSmooth(smooth: boolean|number):void;
        setStep(step: boolean):void;
    }
    export class Pie extends Ext.chart.series.Polar {
        Allows: number;
        Default: any;
        clockwise: boolean;
        donut: number;
        field: string;
        totalAngle: number;
        constructor(config: any);
        getClockwise():boolean;
        getDonut():number;
        getItemForAngle(angle: number):any;
        getLengthField():string;
        getTotalAngle():number;
        setClockwise(clockwise: boolean):void;
        setDonut(donut: number):void;
        setLengthField(lengthField: string):void;
        setTotalAngle(totalAngle: number):void;
    }
    export class Pie3D extends Ext.chart.series.Polar {
        donut: boolean|number;
        field: string;
        constructor(config: any);
        getDistortion():number;
        getDonut():boolean|number;
        getRect():any[];
        getThickness():number;
        setDistortion(distortion: number):void;
        setDonut(donut: boolean|number):void;
        setRect(rect: any[]):void;
        setThickness(thickness: number):void;
    }
    export class Polar extends Ext.chart.series.Series {
        angleField: string;
        center: any[];
        lengthField: string;
        offsetX: number;
        offsetY: number;
        radius: number;
        rotation: number;
        xField: string;
        yField: string;
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
        animation: any;
        background: any;
        bubbleEvents: string|string[];
        colors: any[];
        hidden: boolean|any[];
        highlight: any;
        highlightCfg: any;
        highlightItem: any;
        itemInstancing: any;
        label: any;
        labelField: string|string[];
        labelOverflowPadding: number;
        listeners: any;
        marker: any;
        markerSubStyle: any;
        overlaySurface: any;
        renderer: Function;
        showInLegend: boolean;
        showMarkers: boolean;
        store: any;
        style: any;
        subStyle: any;
        surface: any;
        title: string|string[];
        tooltip: any;
        useDarkerStrokeColor: boolean|number;
        hasListeners: any;
        seriesType: string;
        type: string;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAnimation():any;
        getBackground():any;
        getBubbleEvents():string|string[];
        getColors():any[];
        getHidden():boolean|any[];
        getHighlight():any;
        getHighlightCfg():any;
        getHighlightItem():any;
        getId():string;
        getItemForPoint(x: number, y: number, target?: any):any;
        getItemInstancing():any;
        getLabel():any;
        getLabelField():string|string[];
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
        getTitle():string|string[];
        getTooltip():any;
        getUseDarkerStrokeColor():boolean|number;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        provideLegendInfo(target: any[]):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAnimation(animation: any):void;
        setBackground(background: any):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setColors(colors: any[]):void;
        setHidden(hidden: boolean|any[]):void;
        setHiddenByIndex(index: number, value: boolean):void;
        setHighlight(highlight: any):void;
        setHighlightCfg(highlightCfg: any):void;
        setHighlightItem(highlightItem: any):void;
        setItemInstancing(itemInstancing: any):void;
        setLabel(label: any):any;
        setLabelField(labelField: string|string[]):void;
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
        setTitle(title: string|string[]):void;
        setTooltip(tooltip: any):void;
        setUseDarkerStrokeColor(useDarkerStrokeColor: boolean|number):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class StackedCartesian extends Ext.chart.series.Cartesian {
        stacked: boolean;
        constructor();
        getStacked():boolean;
        setStacked(stacked: boolean):void;
    }
}
declare module Ext.chart.series.sprite {
    export class Aggregative extends Ext.chart.series.sprite.Cartesian {
        dataClose: any;
        dataHigh: any;
        dataLow: any;
        dataOpen: any;
        constructor();
        getAggregator():any;
        setAggregator(aggregator: any):void;
    }
    export class Area extends Ext.chart.series.sprite.StackedCartesian {
        step: boolean;
        constructor();
    }
    export class Bar extends Ext.chart.series.sprite.StackedCartesian {
        inGroupGapWidth: number;
        maxBarWidth: number;
        minBarWidth: number;
        minGapWidth: number;
        radius: number;
        constructor();
    }
    export class CandleStick extends Ext.chart.series.sprite.Aggregative {
        barWidth: number;
        ohlcType: string;
        padding: number;
        constructor();
    }
    export class Cartesian extends Ext.draw.sprite.Sprite {
        If: boolean;
        dataMaxX: number;
        dataMaxY: number;
        dataMinX: number;
        dataMinY: number;
        dataX: any;
        dataY: any;
        field: string;
        labelOverflowPadding: number;
        labels: any;
        rangeX: any[];
        rangeY: any[];
        selectionTolerance: number;
        constructor();
        binarySearch(key: string):any;
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getField():string;
        getIndexNearPoint(x: number, y: number):number;
        renderClipped(surface: Ext.draw.Surface, ctx: Ext.draw.engine.Canvas|Ext.draw.engine.SvgContext, clip: any[], rect: any[]):void;
        setField(field: string):void;
    }
    export class Line extends Ext.chart.series.sprite.Aggregative {
        fillArea: boolean;
        preciseStroke: boolean;
        smooth: boolean;
        step: boolean;
        constructor();
    }
    export class Pie3DPart extends Ext.draw.sprite.Path {
        baseColor: any;
        baseRotation: number;
        centerX: number;
        centerY: number;
        distortion: number;
        endAngle: number;
        endRho: number;
        margin: number;
        part: string;
        startAngle: number;
        startRho: number;
        thickness: number;
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
    }
    export class PieSlice extends Ext.draw.sprite.Sector {
        doCallout: boolean;
        label: string;
        labelOverflowPadding: number;
        constructor();
        bindMarker(name: string, marker: Ext.chart.Markers):void;
        getRendererIndex():number;
        setRendererIndex(rendererIndex: number):void;
    }
    export class Polar extends Ext.draw.sprite.Sprite {
        baseRotation: number;
        centerX: number;
        centerY: number;
        dataMaxX: number;
        dataMaxY: number;
        dataMinX: number;
        dataMinY: number;
        dataX: any;
        dataY: any;
        endAngle: number;
        endRho: number;
        labelOverflowPadding: number;
        labels: any;
        rangeX: any[];
        rangeY: any[];
        startAngle: number;
        startRho: number;
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
        Array: any[];
        The: any;
        axis: any;
        background: any;
        baseColor: string|Ext.draw.Color;
        chart: any;
        series: any;
        sprites: any;
        useGradients: boolean;
        factoryConfig: any;
        constructor(config: any);
        getAxis():any;
        getBackground():any;
        getBaseColor():string|Ext.draw.Color;
        getChart():any;
        getMarkerThemes():any;
        getSeries():any;
        getSeriesThemes():any;
        getSprites():any;
        getUseGradients():boolean;
        setAxis(axis: any):void;
        setBackground(background: any):void;
        setBaseColor(baseColor: string|Ext.draw.Color):void;
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
        columns: number;
        defaultButtonUI: string;
        constructor(config: any);
    }
    export class Container extends Ext.Component {
        activeItem: string|number;
        anchorSize: any;
        autoDestroy: boolean;
        bubbleEvents: string[];
        defaultType: string;
        defaults: any;
        detachOnRemove: boolean;
        layout: any;
        referenceHolder: boolean;
        suspendLayout: boolean;
        items: any;
        constructor(config: any);
        add(...component: any[]):Ext.Component[]|Ext.Component;
        afterLayout(layout: Ext.layout.container.Container):void;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        child(selector?: string|Ext.Component):any;
        contains(comp: Ext.Component, deep?: boolean):boolean;
        doLayout():Ext.container.Container;
        down(selector?: string|Ext.Component):any;
        getChildByElement(el: Ext.dom.Element|HTMLElement|string, deep: boolean):Ext.Component;
        getComponent(comp: string|number):Ext.Component;
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
        remove(component: Ext.Component|string, autoDestroy?: boolean):Ext.Component;
        removeAll(autoDestroy?: boolean):Ext.Component[];
        setActiveItem(item: Ext.Component|number|string):Ext.Component;
        setLayout(configuration: any):void;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class DockingContainer extends Ext.Base {
        defaultDockWeights: any;
        addDocked(items: any, pos?: number):Ext.Component[];
        getDockedComponent(comp: string|number):Ext.Component;
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
        maxUserScale: number;
        responsiveConfig: any;
        responsiveFormulas: any;
        isViewport: boolean;
        constructor(config: any);
    }
}
declare module Ext.dashboard {
    export class Column extends Ext.container.Container {
        constructor(config: any);
    }
    export class Dashboard extends Ext.panel.Panel {
        maxColumns: any;
        parts: any;
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
        viewTemplate: any;
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
        autoDestroy: boolean;
        bubbleEvents: string|string[];
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
        isDestroyed: boolean;
        isStore: boolean;
        updating: number;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addFilter(filters: any[]|Ext.util.Filter[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        beginUpdate():void;
        clearFilter(suppressEvent?: boolean):void;
        clearGrouping():void;
        clearListeners():void;
        contains(record: Ext.data.Model):boolean;
        enableBubble(events: string|string[]):void;
        endUpdate():void;
        filterBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):void;
        find(property: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):number;
        findBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any, startIndex?: number):number;
        findExact(fieldName: string, value: any, startIndex?: number):number;
        findRecord(fieldName: string, value: string|RegExp, startIndex?: number, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.data.Model;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAt(index: number):Ext.data.Model;
        getAutoDestroy():boolean;
        getAutoFilter():boolean;
        getAutoSort():boolean;
        getBubbleEvents():string|string[];
        getById(id: any):Ext.data.Model;
        getCount():number;
        getFilters():any[]|Function[];
        getGroupDir():string;
        getGroups():Ext.util.GroupCollection;
        getId():string;
        getListeners():any;
        getPageSize():number;
        getRange(start: number, end: number):Ext.data.Model[];
        getRemoteFilter():boolean;
        getRemoteSort():boolean;
        getSorters():Ext.util.Sorter[]|any[];
        getStatefulFilters():boolean;
        getStoreId():string;
        group(grouper: any, direction?: string):void;
        hasListener(eventName: string):boolean;
        isFiltered():boolean;
        isGrouped():boolean;
        isLoading():boolean;
        isSorted():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeFilter(toRemove: string|Ext.util.Filter):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAutoDestroy(autoDestroy: boolean):void;
        setAutoFilter(autoFilter: boolean):void;
        setAutoSort(autoSort: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setFilters(filters: any[]|Function[]):void;
        setGroupDir(groupDir: string):void;
        setGroupField(groupField: string):void;
        setGrouper(grouper: any):void;
        setListeners(listeners: any):void;
        setPageSize(pageSize: number):void;
        setRemoteFilter(remoteFilter: boolean):void;
        setRemoteSort(remoteSort: boolean):void;
        setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        setStatefulFilters(statefulFilters: boolean):void;
        setStoreId(storeId: string):void;
        sort(sorters?: string|Ext.util.Sorter[], direction?: string):Ext.util.Sorter[];
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class ArrayStore extends Ext.data.Store {
        constructor(config?: any);
    }
    export class Batch extends Ext.Base {
        bubbleEvents: string|string[];
        listeners: any;
        pauseOnException: boolean;
        exceptions: Ext.data.operation.Operation[];
        hasListeners: any;
        constructor(config?: any);
        add(operation: Ext.data.operation.Operation|Ext.data.operation.Operation[]):Ext.data.Batch;
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getCurrent():Ext.data.operation.Operation;
        getExceptions():Ext.data.operation.Operation[];
        getId():string;
        getListeners():any;
        getOperations():Ext.data.operation.Operation[];
        getPauseOnException():boolean;
        getTotal():number;
        hasException():boolean;
        hasListener(eventName: string):boolean;
        isComplete():boolean;
        isRunning():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        pause():Ext.data.Batch;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        retry():Ext.data.Batch;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        setPauseOnException(pauseOnException: boolean):void;
        sort():void;
        start(index: any):Ext.data.Batch;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):Ext.data.Model|void;
        getByInternalId(internalId: any):Ext.data.Model;
        getModel():Ext.data.Model;
        getSource():Ext.data.Store|string;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        last(grouped?: boolean):Ext.data.Model|void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
        setSource(source: Ext.data.Store|string):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class Connection extends Ext.Base {
        async: boolean;
        autoAbort: boolean;
        binary: boolean;
        bubbleEvents: string|string[];
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
        constructor(config: any);
        abort(request?: any):void;
        abortAll():void;
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getAsync():boolean;
        getAutoAbort():boolean;
        getBinary():boolean;
        getBubbleEvents():string|string[];
        getCors():boolean;
        getDefaultHeaders():any;
        getDefaultPostHeader():string;
        getDefaultXdrContentType():string;
        getDefaultXhrHeader():string;
        getDisableCaching():boolean;
        getDisableCachingParam():string;
        getExtraParams():any;
        getId():string;
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
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        parseStatus(status: number):any;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        request(options: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAsync(async: boolean):void;
        setAutoAbort(autoAbort: boolean):void;
        setBinary(binary: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
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
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        upload(form: string|HTMLElement|Ext.dom.Element, url: string, params: string, options: any):void;
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
        aggregate(fn: Function, scope?: any, grouped?: boolean, field?: string):any;
        average(field: string, grouped?: boolean):any;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        first(grouped?: boolean):Ext.data.Model|void;
        getById(id: any):Ext.data.Model;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        last(grouped?: boolean):Ext.data.Model|void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        query(property: string, value: string|RegExp, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.Collection;
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
        getId():number|string;
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
        setId(id: number|string):void;
        setSession(session: Ext.data.Session):void;
        toUrl():string;
        unjoin(store: Ext.data.Store):void;
        validate():Ext.data.ErrorCollection;
        static getProxy():Ext.data.proxy.Proxy;
        static load(id: number|string, options?: any, session?: Ext.data.Session):Ext.data.Model;
        static setProxy(proxy: any):Ext.data.proxy.Proxy;
    }
    export class ModelManager {
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
        qshowDelay: number;
        qtip: string;
        qtitle: string;
        root: boolean;
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
        static decorate(model: Ext.Class|Ext.data.Model):void;
    }
    export class NodeStore extends Ext.data.Store {
        folderSort: boolean;
        node: Ext.data.Model;
        recursive: boolean;
        rootVisible: boolean;
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
        pageSize: number;
        rootProperty: string;
        constructor(config?: any);
        findBy(fn: (rec: any, index: any) => any, scope?: any):any;
        findIndexBy(fn: (rec: any, index: any) => any, scope?: any):number;
        getPageSize():number;
        getRootProperty():string;
        setPageSize(pageSize: number):void;
        setRootProperty(rootProperty: string):void;
    }
    export class ProxyStore extends Ext.data.AbstractStore {
        autoLoad: any;
        autoSync: boolean;
        batchUpdateMode: string;
        fields: any[];
        model: string|Ext.data.Model;
        proxy: any;
        sortOnLoad: boolean;
        trackRemoved: boolean;
        lastOptions: any;
        removed: Ext.data.Model[];
        constructor(config: any);
        getAutoLoad():any;
        getAutoSync():boolean;
        getBatchUpdateMode():string;
        getFields():any[];
        getModel():string|Ext.data.Model;
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
        rootExists: boolean;
        success: boolean;
        total: number;
        isResultSet: boolean;
        constructor(config?: any);
        getCount():number;
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
        createRecord(type: string|Ext.Class, data?: any):Ext.data.Model;
        getAutoDestroy():boolean;
        getChanges():any;
        getChangesForParent():any;
        getCrudProperties():any;
        getEntityList(entityType: Ext.Class, ids: any[]):Ext.data.Model[];
        getModelIdentifier(entityType: Ext.Class, id: any):string;
        getParent():Ext.data.Session;
        getRecord(type: string|Ext.Class, id: any, autoLoad?: any):Ext.data.Model;
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
        static stripTagsRE: RegExp;
        static asDate(s: any):number;
        static asFloat(s: any):number;
        static asInt(s: any):number;
        static asText(s: any):string;
        static asUCString(s: any):string;
        static asUCText(s: any):string;
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
        getData():any[]|Ext.data.Model[];
        getSession():Ext.data.Session;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        insert(index: number, records: Ext.data.Model[]):Ext.data.Model[];
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
        removeAt(index: number, count?: number):void;
        setClearOnPageLoad(clearOnPageLoad: boolean):void;
        setClearRemovedOnLoad(clearRemovedOnLoad: boolean):void;
        setData(data: any[]|Ext.data.Model[]):void;
        setSession(session: Ext.data.Session):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
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
        static lookup(store: any):Ext.data.Store;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static register(...stores: Ext.data.Store[]):void;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        static sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unregister(...stores: any[]):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class TreeModel extends Ext.data.Model {
        childType: string;
        constructor(data: any, session: any);
        child(selector?: string|Ext.Component):any;
        down(selector?: string|Ext.Component):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class TreeStore extends Ext.data.NodeStore {
        clearOnLoad: boolean;
        defaultRootId: string;
        defaultRootProperty: string;
        defaultRootText: string;
        nodeParam: string;
        parentIdProperty: string;
        root: any;
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
        static stripRe: RegExp;
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
        messageIndex: number;
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
        sortDir: string;
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
        serialize(value: any, record: Ext.data.Model):string;
        validate(value: any, separator?: string, errors?: Ext.data.ErrorCollection):boolean|string;
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
        paramOrder: string|string[];
        paramsAsHash: boolean;
        constructor(config?: any);
        extractResponseData(response: any):any;
        getDirectFn():Function|string;
        getParamOrder():string|string[];
        getParamsAsHash():boolean;
        setDirectFn(directFn: Function|string):void;
        setException(operation: Ext.data.operation.Operation, response: any):void;
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
        bubbleEvents: string|string[];
        listeners: any;
        model: string|Ext.data.Model;
        reader: any;
        writer: any;
        factoryConfig: any;
        hasListeners: any;
        isProxy: boolean;
        isSynchronous: boolean;
        constructor(config?: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        erase(operation: Ext.data.operation.Operation):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBatchActions():boolean;
        getBatchOrder():string;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        getModel():string|Ext.data.Model;
        getReader():any;
        getWriter():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        read(operation: Ext.data.operation.Operation):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBatchActions(batchActions: boolean):void;
        setBatchOrder(batchOrder: string):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        setModel(model: string|Ext.data.Model):void;
        setReader(reader: any):void;
        setWriter(writer: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
        database: string;
        table: string;
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
        id: string;
        cache: any;
        constructor(config?: any);
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
        bubbleEvents: string|string[];
        implicitIncludes: boolean;
        listeners: any;
        messageProperty: string;
        model: string|Ext.data.Model;
        readRecordsOnFailure: boolean;
        rootProperty: string;
        successProperty: string;
        totalProperty: string;
        transform: any;
        typeProperty: string;
        factoryConfig: any;
        hasListeners: any;
        isReader: boolean;
        metaData: any;
        rawData: any;
        constructor(config?: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getData(data: any):any;
        getId():string;
        getImplicitIncludes():boolean;
        getListeners():any;
        getMessageProperty():string;
        getModel():string|Ext.data.Model;
        getReadRecordsOnFailure():boolean;
        getResponseData(response: any):any;
        getRootProperty():string;
        getSuccessProperty():string;
        getTotalProperty():string;
        getTransform():any;
        getTypeProperty():string;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        read(response: any, readOptions?: any):Ext.data.ResultSet;
        readRecords(data: any, readOptions?: any):Ext.data.ResultSet;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setImplicitIncludes(implicitIncludes: boolean):void;
        setListeners(listeners: any):void;
        setMessageProperty(messageProperty: string):void;
        setModel(model: string|Ext.data.Model):void;
        setReadRecordsOnFailure(readRecordsOnFailure: boolean):void;
        setRootProperty(rootProperty: string):void;
        setSuccessProperty(successProperty: string):void;
        setTotalProperty(totalProperty: string):void;
        setTransform(transform: any):void;
        setTypeProperty(typeProperty: string):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
        hasAssociations(The: string|Ext.Class|Ext.data.Model):boolean;
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
declare module Ext.data.soap {
    export class Proxy extends Ext.data.proxy.Ajax {
        createBodyTpl: Ext.XTemplate|any[];
        destroyBodyTpl: Ext.XTemplate|any[];
        envelopeTpl: any[];
        operationParam: string;
        readBodyTpl: Ext.XTemplate|any[];
        soapAction: any;
        targetNamespace: string;
        updateBodyTpl: Ext.XTemplate|any[];
        writeBodyTpl: Ext.XTemplate|any[];
        constructor(config?: any);
        getCreateBodyTpl():Ext.XTemplate|any[];
        getDestroyBodyTpl():Ext.XTemplate|any[];
        getEnvelopeTpl():any[];
        getOperationParam():string;
        getReadBodyTpl():Ext.XTemplate|any[];
        getSoapAction():any;
        getTargetNamespace():string;
        getUpdateBodyTpl():Ext.XTemplate|any[];
        getUrl():string;
        getWriteBodyTpl():Ext.XTemplate|any[];
        setCreateBodyTpl(createBodyTpl: Ext.XTemplate|any[]):void;
        setDestroyBodyTpl(destroyBodyTpl: Ext.XTemplate|any[]):void;
        setEnvelopeTpl(envelopeTpl: any[]):void;
        setOperationParam(operationParam: string):void;
        setReadBodyTpl(readBodyTpl: Ext.XTemplate|any[]):void;
        setSoapAction(soapAction: any):void;
        setTargetNamespace(targetNamespace: string):void;
        setUpdateBodyTpl(updateBodyTpl: Ext.XTemplate|any[]):void;
        setWriteBodyTpl(writeBodyTpl: Ext.XTemplate|any[]):void;
    }
    export class Reader extends Ext.data.reader.Xml {
        constructor(config?: any);
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
        static mode: number;
        static notifyOccluded: boolean;
        static preventDefault: boolean;
        static stopPropagation: boolean;
        static useCache: boolean;
        static getBestMatch(dds: Ext.dd.DragDrop[]):Ext.dd.DragDrop;
        static getConfig(name?: string, peek?: boolean):any;
        static getCss(id: string):any;
        static getDDById(id: string):Ext.dd.DragDrop;
        static getElement(id: string):any;
        static getInitialConfig(name?: string):any;
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
        static setConfig(name: any, value?: any):Ext.Base;
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
        dragData: any;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getDragTarget():Ext.dom.Element;
        getOffset(constrainMode?: string):number[];
        hasListener(eventName: string):boolean;
        initEl(el: Ext.dom.Element|HTMLElement):void;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onBeforeStart(e: Ext.event.Event):void;
        onDrag(e: Ext.event.Event):void;
        onEnd(e: Ext.event.Event):void;
        onStart(e: Ext.event.Event):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        containerScroll: any;
        scrollEl: string|HTMLElement|Ext.dom.Element;
        constructor(el: string|HTMLElement|Ext.dom.Element, config: any);
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
        static getConfig(name?: string, peek?: boolean):any;
        static getHandle(id: string|HTMLElement):any;
        static getHandleFromEvent(e: Event):any;
        static getInitialConfig(name?: string):any;
        static getTarget(id: string|HTMLElement):any;
        static getTargetFromEvent(e: Event):any;
        static register(element: string|HTMLElement, data: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static unregister(element: string|HTMLElement):void;
    }
    export class ScrollManager {
        static animDuration: number;
        static animate: boolean;
        static ddGroup: string;
        static frequency: number;
        static hthresh: any;
        static increment: number;
        static vthresh: any;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static refreshCache():void;
        static register(el: string|HTMLElement|Ext.dom.Element|string[]|HTMLElement[]|Ext.dom.Element[]):void;
        static setConfig(name: any, value?: any):Ext.Base;
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
    export class AmfRemotingProvider extends Ext.direct.Provider {
        actions: any;
        binary: string;
        enableBuffer: number|boolean;
        enableUrlEncode: string;
        endpoint: string;
        maxRetries: number;
        namespace: any;
        timeout: number;
        url: string;
        constructor(config: any);
        createEvent(response: any):Ext.direct.Event;
        getActions():any;
        getBinary():string;
        getEnableBuffer():number|boolean;
        getEnableUrlEncode():string;
        getEndpoint():string;
        getMaxRetries():number;
        getNamespace():any;
        getTimeout():number;
        getUrl():string;
        setActions(actions: any):void;
        setBinary(binary: string):void;
        setEnableBuffer(enableBuffer: number|boolean):void;
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
        static isObservable: boolean;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addProvider(...provider: any[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getProvider(id: string|Ext.direct.Provider):void;
        static hasListener(eventName: string):boolean;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: string|Ext.direct.Provider):Ext.direct.Provider;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        baseParams: any;
        interval: number;
        url: string|Function;
    }
    export class Provider extends Ext.Base {
        id: string;
        listeners: any;
        relayedEvents: string[];
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        connect():void;
        disconnect():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isConnected():void;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        actions: any;
        disableNestedActions: boolean;
        enableBuffer: number|boolean;
        enableUrlEncode: string;
        maxRetries: number;
        namespace: any;
        timeout: number;
        url: string;
    }
    export class Transaction extends Ext.Base {
        provider: Ext.direct.Provider;
        constructor(config?: any);
    }
}
declare module Ext.dom {
    export class ButtonElement extends Ext.dom.Element {
        constructor(element: string|HTMLElement);
    }
    export class CompositeElement extends Ext.dom.CompositeElementLite {
        constructor(element: string|HTMLElement);
    }
    export class CompositeElementLite extends Ext.Base {
        component: Ext.Component;
        elements: HTMLElement[];
        hasListeners: any;
        isComposite: boolean;
        constructor(element: string|HTMLElement);
        add(els: HTMLElement[]|Ext.dom.CompositeElementLite, root?: HTMLElement|string):Ext.dom.CompositeElementLite;
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addCls(names: string|string[], prefix?: string, suffix?: string):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element;
        appendTo(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        center(centerIn: string|HTMLElement|Ext.dom.Element):void;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        clear(removeDom?: boolean):void;
        clearListeners():void;
        contains(el: string|HTMLElement|Ext.dom.Element|number):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        cssTranslate():void;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        each(fn: (el: Ext.dom.Element, c: Ext.dom.CompositeElementLite, index: number) => any, scope?: any):Ext.dom.CompositeElementLite;
        enableBubble(events: string|string[]):void;
        fill(els: HTMLElement[]|Ext.dom.CompositeElementLite):Ext.dom.CompositeElementLite;
        filter(selector: string|((el: Ext.dom.Element, index: number) => any)):Ext.dom.CompositeElementLite;
        findParent(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        first():Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        getActiveElement():HTMLElement;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getBubbleEvents():string|string[];
        getById(id: string, asDom?: boolean):void;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getCount():number;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getId():string;
        getLeft(local: boolean):number;
        getListeners():any;
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
        getScrollParent():void;
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
        hasCls(name: string):boolean;
        hasListener(eventName: string):boolean;
        hide():Ext.dom.Element;
        id(obj?: any, prefix?: string):string;
        indexOf(el: string|HTMLElement|Ext.dom.Element|number):number;
        insertAfter(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element;
        is(selector: string|Function):boolean;
        isAncestor(el: string|HTMLElement|Ext.dom.Element):boolean;
        isDescendent():void;
        isStyle(style: string, value: string):boolean;
        isSuspended(eventName?: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        item(index: number):Ext.dom.Element;
        last():Ext.dom.Element;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        move(direction: string, distance: number):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        next(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):HTMLElement[]|Ext.dom.Element[];
        radioCls(className: string|string[]):Ext.dom.Element;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove():void;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeAllListeners():void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeCls(names: string|string[], prefix?: string, suffix?: string):void;
        removeElement(el: string|HTMLElement|Ext.dom.Element|number, removeDom?: boolean):Ext.dom.CompositeElementLite;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        repaint():Ext.dom.Element;
        replace(el: string|HTMLElement|Ext.dom.Element, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceElement(el: string|HTMLElement|Ext.dom.Element|number, replacement: string|Ext.dom.Element, domReplace?: boolean):Ext.dom.CompositeElementLite;
        replaceWith(el: any):Ext.dom.Element;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        select(selector: string|HTMLElement[], composite: boolean):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        selectNode(selector: string, asDom?: boolean):HTMLElement;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: number|string):Ext.dom.Element;
        setBox(box: any):Ext.util.Positionable;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setCls(className: string|any[]):void;
        setHTML(html: string):void;
        setHeight(height: number|string):Ext.dom.Element;
        setHtml(html: string):void;
        setLeft(left: number|string):Ext.dom.Element;
        setListeners(listeners: any):void;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: number|any[], y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setMaxHeight(height: number|string):Ext.dom.Element;
        setMaxWidth(width: number|string):Ext.dom.Element;
        setMinHeight(height: number|string):Ext.dom.Element;
        setMinWidth(width: number|string):Ext.dom.Element;
        setRight(right: number|string):Ext.dom.Element;
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
        show():Ext.dom.Element;
        slice(start?: number, end?: number):HTMLElement[];
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        toggle():Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        up(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnDom?: boolean):Ext.dom.Element;
        update(html: string):void;
        wrap(config?: any, returnDom?: boolean, selector?: string):HTMLElement|Ext.dom.Element;
    }
    export class Element extends Ext.Base {
        bubbleEvents: string|string[];
        listeners: any;
        component: Ext.Component;
        dom: HTMLElement;
        hasListeners: any;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        constructor(element: string|HTMLElement);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addCls(names: string|string[], prefix?: string, suffix?: string):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        alignTo(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):Ext.util.Positionable;
        appendChild(el: any, returnDom?: boolean):Ext.dom.Element;
        appendTo(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        applyStyles(styles: any):Ext.dom.Element;
        blur():Ext.dom.Element;
        center(centerIn: string|HTMLElement|Ext.dom.Element):void;
        child(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        clearListeners():void;
        contains(element: HTMLElement|string):boolean;
        createChild(config: any, insertBefore?: HTMLElement, returnDom?: boolean):Ext.dom.Element;
        createShim():Ext.dom.Element;
        cssTranslate():void;
        down(selector: string, returnDom?: boolean):HTMLElement|Ext.dom.Element;
        enableBubble(events: string|string[]):void;
        findParent(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        findParentNode(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnEl?: boolean):HTMLElement;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        first(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        focus(defer?: number):Ext.dom.Element;
        getActiveElement():HTMLElement;
        getAlignToXY(element: Ext.util.Positionable|HTMLElement|string, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getBottom(local: boolean):number;
        getBox(contentBox?: boolean, local?: boolean):any;
        getBubbleEvents():string|string[];
        getById(id: string, asDom?: boolean):void;
        getConstrainVector(constrainTo?: Ext.util.Positionable|HTMLElement|string|Ext.util.Region, proposedPosition?: number[], proposedSize?: number[]):number[]|boolean;
        getHTML():string;
        getHeight(contentHeight?: boolean):number;
        getHtml():string;
        getId():string;
        getLeft(local: boolean):number;
        getListeners():any;
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
        getScrollParent():void;
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
        hasCls(name: string):boolean;
        hasListener(eventName: string):boolean;
        hide():Ext.dom.Element;
        id(obj?: any, prefix?: string):string;
        insertAfter(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
        insertFirst(el: any, returnDom?: boolean):Ext.dom.Element;
        insertHtml(where: string, html: string, returnEl?: boolean):HTMLElement|Ext.dom.Element;
        insertSibling(el: any, where?: string, returnDom?: boolean):Ext.dom.Element;
        is(selector: string|Function):boolean;
        isAncestor(el: string|HTMLElement|Ext.dom.Element):boolean;
        isDescendent():void;
        isStyle(style: string, value: string):boolean;
        isSuspended(eventName?: string):boolean;
        isTransparent(prop: string):boolean;
        isVisible(deep?: boolean):boolean;
        last(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        move(direction: string, distance: number):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        next(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        parent(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        prev(selector?: string, returnDom?: boolean):Ext.dom.Element|HTMLElement;
        purgeAllListeners():void;
        query(selector: string, asDom?: boolean):HTMLElement[]|Ext.dom.Element[];
        radioCls(className: string|string[]):Ext.dom.Element;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove():void;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeAllListeners():void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeCls(names: string|string[], prefix?: string, suffix?: string):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        repaint():Ext.dom.Element;
        replace(el: string|HTMLElement|Ext.dom.Element, destroy?: boolean):Ext.dom.Element;
        replaceCls(oldName: string, newName: string, prefix?: string, suffix?: string):Ext.dom.Element;
        replaceWith(el: any):Ext.dom.Element;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        select(selector: string|HTMLElement[], composite: boolean):Ext.dom.CompositeElementLite|Ext.dom.CompositeElement;
        selectNode(selector: string, asDom?: boolean):HTMLElement;
        set(attributes: any, useSet?: boolean):Ext.dom.Element;
        setBottom(bottom: number|string):Ext.dom.Element;
        setBox(box: any):Ext.util.Positionable;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setCls(className: string|any[]):void;
        setHTML(html: string):void;
        setHeight(height: number|string):Ext.dom.Element;
        setHtml(html: string):void;
        setLeft(left: number|string):Ext.dom.Element;
        setListeners(listeners: any):void;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: number|any[], y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setMaxHeight(height: number|string):Ext.dom.Element;
        setMaxWidth(width: number|string):Ext.dom.Element;
        setMinHeight(height: number|string):Ext.dom.Element;
        setMinWidth(width: number|string):Ext.dom.Element;
        setRight(right: number|string):Ext.dom.Element;
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
        show():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        toggle():Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        translatePoints(x: number|any[], y?: number):any;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        up(selector: string, limit?: number|string|HTMLElement|Ext.dom.Element, returnDom?: boolean):Ext.dom.Element;
        update(html: string):void;
        wrap(config?: any, returnDom?: boolean, selector?: string):HTMLElement|Ext.dom.Element;
        static fly(dom: string|HTMLElement, named?: string):Ext.dom.Element;
        static fromPoint(x: number, y: number):string;
        static get(element: string|HTMLElement|Ext.dom.Element):Ext.dom.Element;
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
        static serializeForm(form: any):string;
        static unitizeBox(box: any, units: string):string;
    }
    export class Fly extends Ext.dom.Element {
        isFly: boolean;
        constructor(element: string|HTMLElement);
    }
    export class GarbageCollector {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Helper extends Ext.Base {
        append(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        applyStyles(el: string|HTMLElement, styles: any):void;
        createDom(o: any):HTMLElement;
        createHtml(spec: any):void;
        createTemplate(o: any):Ext.Template;
        generateStyles(styles: any, buffer?: string[], encode?: boolean):string|string[];
        insertAfter(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertBefore(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertFirst(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
        insertHtml(where: string, el: HTMLElement|Text, html: string):HTMLElement;
        markup(spec: any):string;
        overwrite(el: string|HTMLElement|Ext.dom.Element, o: any, returnElement?: boolean):HTMLElement|Ext.dom.Element;
    }
    export class Layer extends Ext.dom.Element {
        cls: string;
        constrain: boolean;
        dh: any;
        hideMode: string;
        shadow: string|boolean;
        shadowOffset: number;
        useDisplay: boolean;
        visibilityCls: string;
        zindex: number;
        constructor(config?: any, existingEl?: string|HTMLElement);
        setZIndex(zindex: number):Ext.dom.Layer;
    }
    export class Query {
        static matchers: any;
        static operators: any;
        static pseudos: any;
        static compile(selector: string, type?: string):Function;
        static filter(el: HTMLElement[], selector: string, nonMatches: boolean):HTMLElement[];
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getNodeValue(The: any, defaultValue?: string):string;
        static is(el: string|HTMLElement|HTMLElement[], selector: string):boolean;
        static jsSelect(selector: string, root?: HTMLElement|string):HTMLElement[];
        static select(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
        static selectNode(selector: string, root?: HTMLElement):HTMLElement;
        static selectNumber(selector: string, root?: HTMLElement, defaultValue?: number):number;
        static selectValue(selector: string, root?: HTMLElement, defaultValue?: string):string;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.draw {
    export class Animator {
        static add(animation: any):void;
        static addFrameCallback(callback: Function, scope: any):string;
        static animationTime():number;
        static cancel(id: string):void;
        static contains(animation: any):boolean;
        static empty():boolean;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static remove(animation: any):void;
        static removeFrameCallback(id: string):void;
        static schedule(callback: Function, scope: any):string;
        static setConfig(name: any, value?: any):Ext.Base;
        static step(frameTime: number):void;
    }
    export class Color extends Ext.Base {
        lightnessFactor: number;
        constructor(red: number, green: number, blue: number, alpha?: number);
        createDarker(factor?: number):Ext.draw.Color;
        createLighter(factor?: number):Ext.draw.Color;
        getGrayscale():number;
        getHSL(target?: any[]):any[];
        setFromString(str: string):any;
        setHSL(h: number, s: number, l: number):any;
        toHex(color: string|any[]):string;
        toString():string;
        static fly(red: number|string, green?: number, blue?: number, alpha?: number):Ext.draw.Color;
        static fromHSL(h: number, s: number, l: number):Ext.draw.Color;
        static fromString(string: string):Ext.draw.Color;
    }
    export class Container extends Ext.draw.ContainerBase {
        gradients: any[];
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
        preview():void;
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
        static degrees(radian: number):number;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static isBBoxIntersect(bbox1: any, bbox2: any, padding?: number):boolean;
        static rad(degrees: number):number;
        static reflectFn(a: any):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static smooth(dataX: any, dataY: any, value: any):any;
        static spline(points: any[]):void;
    }
    export class LimitedCache extends Ext.Base {
        feeder: Function;
        limit: number;
        scope: any;
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
        rotate(angle: number, rcx: number|void, rcy: number|void, prepend?: boolean):Ext.draw.Matrix;
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
        toVerticalArray():any[]|string;
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
        static cubicFunction(a: number, b: number, c: number, d: number):void;
        static cubicRoot(number: number):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static linearFunction(a: number, b: number):void;
        static quadraticFunction(a: number, b: number, c: number):void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Surface extends Ext.draw.SurfaceBase {
        background: any;
        dirty: boolean;
        flipRtlText: boolean;
        items: any[];
        rect: any[];
        devicePixelRatio: any;
        constructor(config: any);
        add():void;
        clear():void;
        flatten(size: any, surfaces: Ext.draw.Surface[]):any;
        get(id: string|number):Ext.draw.sprite.Sprite;
        getBBox(sprites: Ext.draw.sprite.Sprite[]|Ext.draw.sprite.Sprite, isWithoutTransform?: boolean):any;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static measureText(text: string, font: string):any;
        static measureTextSingleLine(text: string, font: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class TimingFunctions {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.draw.engine {
    export class Canvas extends Ext.draw.Surface {
        highPrecision: boolean;
        constructor(config: any);
        clearTransform():void;
        getHighPrecision():boolean;
        setHighPrecision(highPrecision: boolean):void;
    }
    export class Svg extends Ext.draw.Surface {
        highPrecision: boolean;
        constructor(config: any);
        clearTransform():void;
        createSvgNode(type: string):any;
        getContext():any;
        getHighPrecision():boolean;
        initElement(el: HTMLElement):HTMLElement;
        renderSprite(sprite: Ext.draw.sprite.Sprite):boolean;
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
        Defines: any;
        constructor(config: any);
        generateGradient(ctx: Ext.draw.engine.SvgContext, bbox: any):any;
    }
    export class GradientDefinition {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Linear extends Ext.draw.gradient.Gradient {
        The: number;
        constructor(config: any);
    }
    export class Radial extends Ext.draw.gradient.Gradient {
        end: any;
        start: any;
        constructor(config: any);
        getEnd():any;
        getStart():any;
        setEnd(end: any):void;
        setStart(start: any):void;
    }
}
declare module Ext.draw.modifier {
    export class Animation extends Ext.draw.modifier.Modifier {
        customDuration: any;
        customDurations: any;
        customEasings: any;
        duration: number;
        easing: Function;
        constructor();
        clearDurationOn(attrs: any):void;
        clearEasingOn(attrs: string|any[]):void;
        getCustomDuration():any;
        getCustomDurations():any;
        getCustomEasings():any;
        getDuration():number;
        getEasing():Function;
        setCustomDuration(customDuration: any):void;
        setCustomDurations(customDurations: any):void;
        setCustomEasings(customEasings: any):void;
        setDuration(duration: number):void;
        setDurationOn(attrs: string|any[], duration: number):void;
        setEasing(easing: Function):void;
        setEasingOn(attrs: string|any[], easing: string):void;
        stop():void;
    }
    export class Highlight extends Ext.draw.modifier.Modifier {
        enabled: boolean;
        highlightStyle: any;
        constructor(config: any);
        filterChanges(attr: any, changes: any):any;
        getEnabled():boolean;
        getHighlightStyle():any;
        setEnabled(enabled: boolean):void;
        setHighlightStyle(highlightStyle: any):void;
    }
    export class Modifier extends Ext.Base {
        bubbleEvents: string|string[];
        listeners: any;
        next: Ext.draw.modifier.Modifier;
        previous: Ext.draw.modifier.Modifier;
        sprite: Ext.draw.sprite.Sprite;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        getNext():Ext.draw.modifier.Modifier;
        getPrevious():Ext.draw.modifier.Modifier;
        getSprite():Ext.draw.sprite.Sprite;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        popUp(attributes: any, changes: any):void;
        prepareAttributes(attr: any):void;
        pushDown(attr: any, changes: any):any;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        setNext(next: Ext.draw.modifier.Modifier):void;
        setPrevious(previous: Ext.draw.modifier.Modifier):void;
        setSprite(sprite: Ext.draw.sprite.Sprite):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Target extends Ext.draw.modifier.Modifier {
        constructor(config: any);
    }
}
declare module Ext.draw.sprite {
    export class AnimationParser {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Arc extends Ext.draw.sprite.Circle {
        anticlockwise: boolean;
        endAngle: number;
        size: number;
        startAngle: number;
        constructor(config: any);
    }
    export class AttributeDefinition extends Ext.Base {
        aliases: any;
        animationProcessors: any;
        defaults: any;
        dirty: any;
        processors: any;
        updaters: any;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Circle extends Ext.draw.sprite.Path {
        cx: number;
        cy: number;
        r: number;
        constructor(config: any);
    }
    export class Composite extends Ext.draw.sprite.Sprite {
        size: number;
        constructor();
        add(sprite: any):void;
        addAll(sprites: any):void;
    }
    export class Ellipse extends Ext.draw.sprite.Path {
        axisRotation: number;
        cx: number;
        cy: number;
        rx: number;
        ry: number;
        constructor(config: any);
    }
    export class EllipticalArc extends Ext.draw.sprite.Ellipse {
        anticlockwise: boolean;
        endAngle: number;
        startAngle: number;
        constructor(config: any);
    }
    export class Image extends Ext.draw.sprite.Rect {
        src: string;
        constructor(config: any);
    }
    export class Instancing extends Ext.draw.sprite.Sprite {
        size: number;
        template: any;
        constructor(config: any);
        createInstance(config: any, data?: any, bypassNormalization?: boolean, avoidCopy?: boolean):any;
        getBBoxFor(index: number, isWithoutTransform?: boolean):any;
        getTemplate():any;
        setAttributesFor(index: number, changes: any, bypassNormalization?: boolean):void;
        setTemplate(template: any):void;
    }
    export class Path extends Ext.draw.sprite.Sprite {
        path: string;
        static debug: boolean;
        constructor(config: any);
        updatePath(path: Ext.draw.Path, attr: any):void;
    }
    export class Rect extends Ext.draw.sprite.Path {
        height: number;
        radius: number;
        width: number;
        x: number;
        y: number;
        constructor(config: any);
    }
    export class Sector extends Ext.draw.sprite.Path {
        centerX: number;
        centerY: number;
        endAngle: number;
        endRho: number;
        margin: number;
        size: number;
        startAngle: number;
        startRho: number;
        constructor(config: any);
    }
    export class Sprite extends Ext.Base {
        A: number;
        An: any[];
        bubbleEvents: string|string[];
        fillOpacity: number;
        fillStyle: string;
        globalAlpha: number;
        globalCompositeOperation: string;
        hidden: boolean;
        lineCap: string;
        lineJoin: string;
        lineWidth: number;
        listeners: any;
        miterLimit: number;
        rotationCenterX: number;
        rotationCenterY: number;
        rotationRads: number;
        scalingCenterX: number;
        scalingCenterY: number;
        scalingX: number;
        scalingY: number;
        shadowBlur: number;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        strokeOpacity: number;
        strokeStyle: string;
        surface: Ext.draw.Surface;
        transformFillStroke: boolean;
        translationX: number;
        translationY: number;
        zIndex: number;
        attr: any;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBBox(isWithoutTransform?: boolean):void;
        getBBoxCenter(isWithoutTransform: boolean):any[];
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        getParent():any;
        getSurface():Ext.draw.Surface;
        hasListener(eventName: string):boolean;
        hide():Ext.draw.sprite.Sprite;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        preRender():void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        render(surface: Ext.draw.Surface, ctx: any, rect: any[]):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAttributes(changes: any, bypassNormalization?: boolean, avoidCopy?: boolean):void;
        setAttributesBypassingNormalization(changes: any, avoidCopy?: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        setParent(parent: any):void;
        setSurface(surface: Ext.draw.Surface):void;
        show():Ext.draw.sprite.Sprite;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        updatePlainBBox(plain: any):void;
        updateTransformedBBox(transform: any, plain: any):void;
        useAttributes(ctx: any, rect: any[]):void;
    }
    export class Text extends Ext.draw.sprite.Sprite {
        font: string;
        fontFamily: string;
        fontSize: string|number;
        fontStyle: string;
        fontVariant: string;
        fontWeight: string;
        size: number;
        text: string;
        textAlign: string;
        textBaseline: string;
        x: number;
        y: number;
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
        getRelatedTarget(selector?: string, maxDepth?: number|HTMLElement, returnEl?: boolean):HTMLElement;
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
        within(el: string|HTMLElement|Ext.dom.Element, related?: boolean, allowEl?: boolean):boolean;
    }
    export class ListenerStack extends Ext.Base {
        constructor();
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
        errorReader: any;
        jsonSubmit: boolean;
        method: string;
        paramOrder: string|string[];
        paramsAsHash: boolean;
        reader: any;
        standardSubmit: boolean;
        timeout: number;
        trackResetOnLoad: boolean;
        url: string;
        waitMsgTarget: string|HTMLElement|Ext.dom.Element;
        waitTitle: string;
        owner: Ext.container.Container;
        constructor(owner: Ext.container.Container, config: any);
        applyIfToFields(obj: any):Ext.form.Basic;
        applyToFields(obj: any):Ext.form.Basic;
        checkDirty():void;
        checkValidity():void;
        clearInvalid():Ext.form.Basic;
        doAction(action: string|Ext.form.action.Action, options?: any):Ext.form.Basic;
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
        allowBlank: boolean;
        blankText: string;
        columns: string|number|number[];
        submitValue: boolean;
        validateOnChange: boolean;
        validation: boolean|string;
        value: any;
        valuePublishEvent: string[]|string;
        vertical: boolean;
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
        getSubmitData():any;
        getValidation():boolean|string;
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
        setValidation(validation: boolean|string):void;
        setValue(value: any):Ext.form.CheckboxGroup;
        validate():boolean;
    }
    export class CheckboxManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorters():Ext.util.Sorter[]|any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        static sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class FieldAncestor extends Ext.Mixin {
        fieldDefaults: any;
        initFieldAncestor():void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
    }
    export class FieldContainer extends Ext.container.Container {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterBodyEl: string|any[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: string|any[]|Ext.XTemplate;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
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
        labelConnector: string;
        labelPad: number;
        labelSeparator: string;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        preventMark: boolean;
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelEl: Ext.dom.Element;
        constructor(config: any);
        getActiveError():string;
        getActiveErrors():string[];
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
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        trimLabelSeparator():string;
        unsetActiveError():void;
    }
    export class FieldSet extends Ext.container.Container {
        checkboxName: string;
        checkboxToggle: boolean;
        checkboxUI: string;
        collapsed: boolean;
        collapsible: boolean;
        fieldDefaults: any;
        title: string;
        toggleOnTitleClick: boolean;
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
        forId: string;
        text: string;
        constructor(config: any);
        setText(text: string, encode?: boolean):Ext.form.Label;
    }
    export class Labelable extends Ext.Mixin {
        activeError: string;
        activeErrorsTpl: string|string[]|Ext.XTemplate;
        afterBodyEl: string|any[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: string|any[]|Ext.XTemplate;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
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
        labelSeparator: string;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        preventMark: boolean;
        bodyEl: Ext.dom.Element;
        errorEl: Ext.dom.Element;
        isFieldLabelable: boolean;
        labelEl: Ext.dom.Element;
        getActiveError():string;
        getActiveErrors():string[];
        getChildEls():any[];
        getFieldLabel():string;
        getInputId():string;
        getLabelableRenderData(data: any):any;
        getSubTplMarkup():string;
        hasActiveError():boolean;
        hasVisibleLabel():boolean;
        initLabelable():void;
        setActiveError(msg: string):void;
        setActiveErrors(errors: string[]):void;
        setChildEls(childEls: any[]):void;
        setFieldDefaults(defaults: any):void;
        setFieldLabel(label: string):void;
        trimLabelSeparator():string;
        unsetActiveError():void;
        static destroyTip():void;
    }
    export class Panel extends Ext.panel.Panel {
        api: any;
        baseParams: any;
        errorReader: any;
        fieldDefaults: any;
        jsonSubmit: boolean;
        method: string;
        paramOrder: string|string[];
        paramsAsHash: boolean;
        pollForChanges: boolean;
        pollInterval: number;
        reader: any;
        standardSubmit: boolean;
        timeout: number;
        trackResetOnLoad: boolean;
        url: string;
        waitMsgTarget: string|HTMLElement|Ext.dom.Element;
        waitTitle: string;
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
        activeChildTabIndex: number;
        enableFocusableContainer: boolean;
        inactiveChildTabIndex: number;
        constructor(config: any);
    }
    export class RadioManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static first():any;
        static generateComparator():void;
        static get(key: string|number):any;
        static getAt(index: number):any;
        static getByKey(key: string|number):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static getSorters():Ext.util.Sorter[]|any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static insert(index: number, key: any, o?: any):any;
        static isSuspended(event?: string):boolean;
        static last():any;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(o: any):any;
        static removeAll(items?: any[]):Ext.util.MixedCollection;
        static removeAt(index: number):any;
        static removeAtKey(key: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static removeRange(index: number, removeCount?: number):any;
        static reorder(mapping: any):void;
        static replace(key: string, o: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setSorters(sorters: Ext.util.Sorter[]|any[]):void;
        static sort(sorters?: string|Ext.util.Sorter[], direction?: string, insertionPosition?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static updateKey(oldKey: any, newKey: any):void;
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
        afterBodyEl: string|any[]|Ext.XTemplate;
        afterLabelTextTpl: string|any[]|Ext.XTemplate;
        afterLabelTpl: string|any[]|Ext.XTemplate;
        afterSubTpl: string|any[]|Ext.XTemplate;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: string|any[]|Ext.XTemplate;
        beforeLabelTextTpl: string|any[]|Ext.XTemplate;
        beforeLabelTpl: string|any[]|Ext.XTemplate;
        beforeSubTpl: string|any[]|Ext.XTemplate;
        checkChangeBuffer: number;
        checkChangeEvents: string[];
        dirtyCls: string;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldCls: string;
        fieldLabel: string;
        fieldStyle: string;
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        inputAttrTpl: string|any[]|Ext.XTemplate;
        inputId: string;
        inputType: string;
        invalidCls: string;
        invalidText: string;
        labelAlign: string;
        labelAttrTpl: string|any[]|Ext.XTemplate;
        labelCls: string;
        labelClsExtra: string;
        labelPad: number;
        labelSeparator: string;
        labelStyle: string;
        labelWidth: number;
        msgTarget: string;
        name: string;
        preventMark: boolean;
        readOnly: boolean;
        readOnlyCls: string;
        submitValue: boolean;
        validateOnBlur: boolean;
        validateOnChange: boolean;
        validation: boolean|string;
        value: any;
        valuePublishEvent: string[]|string;
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
        getErrors(value: any):string[];
        getFieldLabel():string;
        getInputId():void;
        getLabelableRenderData(data: any):any;
        getModelData(includeEmptyText: any, isSubmitting: any):any;
        getRawValue():string;
        getSubTplData(fieldData: any):any;
        getSubTplMarkup(fieldData: any):void;
        getSubmitData():any;
        getSubmitValue():string;
        getValidation():boolean|string;
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
        setValidation(validation: boolean|string):void;
        setValue(value: any):Ext.form.field.Field;
        transformRawValue(value: any):any;
        trimLabelSeparator():string;
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
        setBoxLabel(boxLabel: string):void;
    }
    export class ComboBox extends Ext.form.field.Picker {
        allQuery: string;
        anyMatch: boolean;
        autoLoadOnValue: boolean;
        autoSelect: boolean;
        caseSensitive: boolean;
        clearFilterOnBlur: boolean;
        defaultListConfig: any;
        delimiter: string;
        displayField: string;
        displayTpl: string|string[]|Ext.XTemplate;
        enableRegEx: boolean;
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
        store: Ext.data.Store|string|any[];
        transform: string|HTMLElement|Ext.dom.Element;
        transformInPlace: boolean;
        triggerAction: string;
        typeAhead: boolean;
        typeAheadDelay: number;
        valueField: string;
        valueNotFoundText: string;
        lastQuery: string;
        constructor(config: any);
        afterQuery(queryPlan: any):void;
        beforeQuery(queryPlan: any):void;
        bindStore(store?: Ext.data.AbstractStore|string, preventFilter?: boolean):void;
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
        setFilters(filters: any):void;
        setSelection(selection: any):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Date extends Ext.form.field.Picker {
        altFormats: string;
        disabledDates: string[];
        disabledDatesText: string;
        disabledDays: number[];
        disabledDaysText: string;
        format: string;
        maxText: string;
        maxValue: Date|string;
        minText: string;
        minValue: Date|string;
        showToday: boolean;
        startDay: number;
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
        validation: boolean|string;
        value: any;
        valuePublishEvent: string[]|string;
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
        getSubmitData():any;
        getValidation():boolean|string;
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
        setValidation(validation: boolean|string):void;
        setValue(value: any):Ext.form.field.Field;
        validate():boolean;
    }
    export class File extends Ext.form.field.Text {
        buttonConfig: any;
        buttonMargin: number;
        buttonOnly: boolean;
        buttonText: string;
        clearOnSubmit: boolean;
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
        afterIFrameTpl: string|any[]|Ext.XTemplate;
        afterTextAreaTpl: string|any[]|Ext.XTemplate;
        beforeIFrameTpl: string|any[]|Ext.XTemplate;
        beforeTextAreaTpl: string|any[]|Ext.XTemplate;
        createLinkText: string;
        defaultButtonUI: string;
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
        fontFamilies: string[];
        iframeAttrTpl: string|any[]|Ext.XTemplate;
        name: string;
        submitValue: boolean;
        validateOnChange: boolean;
        validation: boolean|string;
        value: any;
        valuePublishEvent: string[]|string;
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
        createToolbar(editor: Ext.form.field.HtmlEditor):void;
        execCmd(cmd: string, value?: string|boolean):void;
        extractFileInput():HTMLElement;
        getDocMarkup():void;
        getErrors(value: any):string[];
        getModelData(includeEmptyText: any, isSubmitting: any):any;
        getSubmitData():any;
        getToolbar():Ext.toolbar.Toolbar;
        getValidation():boolean|string;
        getValue():any;
        initField():void;
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
        setReadOnly(readOnly: boolean):void;
        setValidation(validation: boolean|string):void;
        setValue(value: any):Ext.form.field.Field;
        syncValue():void;
        toggleSourceEdit(sourceEditMode?: boolean):void;
        updateToolbar():void;
    }
    export class Number extends Ext.form.field.Spinner {
        allowDecimals: boolean;
        allowExponential: boolean;
        autoStripChars: boolean;
        baseChars: string;
        decimalPrecision: number;
        decimalSeparator: string;
        maxText: string;
        maxValue: number;
        minText: string;
        minValue: number;
        nanText: string;
        negativeText: string;
        step: number;
        submitLocaleSeparator: boolean;
        constructor(config: any);
        setMaxValue(value: number):void;
        setMinValue(value: number):void;
    }
    export class Picker extends Ext.form.field.Text {
        matchFieldWidth: boolean;
        openCls: string;
        pickerAlign: string;
        pickerOffset: number[];
        triggerCls: string;
        isExpanded: boolean;
        constructor(config: any);
        alignPicker():void;
        collapse():void;
        createPicker():void;
        expand():void;
        getPicker():Ext.Component;
        onTriggerClick(e: any):void;
    }
    export class Radio extends Ext.form.field.Checkbox {
        isRadio: boolean;
        constructor(config: any);
        getGroupValue():string;
    }
    export class Spinner extends Ext.form.field.Text {
        keyNavEnabled: boolean;
        mouseWheelEnabled: boolean;
        spinDownEnabled: boolean;
        spinUpEnabled: boolean;
        constructor(config: any);
        onSpinDown():void;
        onSpinUp():void;
        setSpinDownEnabled(enabled: boolean):void;
        setSpinUpEnabled(enabled: boolean):void;
        spinDown():void;
        spinUp():void;
    }
    export class Tag extends Ext.form.field.ComboBox {
        createNewOnBlur: boolean;
        createNewOnEnter: boolean;
        encodeSubmitValue: boolean;
        filterPickList: boolean;
        labelTpl: string|Ext.XTemplate;
        pinList: boolean;
        stacked: boolean;
        triggerOnClick: boolean;
        valueParam: string;
        constructor(config: any);
        addValue(value: any):void;
        applyEmptyText():void;
        assertValue():void;
        doRawQuery():void;
        getRecordByListItemNode(itemEl: any):void;
        getValueRecords():any[];
        mimicBlur():void;
        onBeforeListRefresh():void;
        onBlur():void;
        onFocus():void;
        onItemListClick(evt: any):void;
        onKeyDown(e: any):void;
        onKeyUp(e: any, t: any):void;
        onListRefresh():void;
        onLoad():void;
        onPaste(e: any):void;
        onTypeAhead():void;
        preFocus():void;
        removeByListItemNode(itemEl: any):void;
        removeValue(value: any):void;
        renderActiveError():void;
        toggleSelectionByListItemNode(itemEl: any, keepExisting: any):void;
    }
    export class Text extends Ext.form.field.Base {
        allowBlank: boolean;
        allowOnlyWhitespace: boolean;
        blankText: string;
        disableKeyFilter: boolean;
        editable: boolean;
        emptyCls: string;
        emptyText: string;
        enableKeyEvents: boolean;
        enforceMaxLength: boolean;
        grow: boolean;
        growAppend: string;
        growMax: number;
        growMin: number;
        hideTrigger: boolean;
        inputWrapCls: string;
        maskRe: RegExp;
        maxLength: number;
        maxLengthText: string;
        minLength: number;
        minLengthText: string;
        regex: RegExp;
        regexText: string;
        repeatTriggerClick: boolean;
        requiredCls: string;
        selectOnFocus: boolean;
        size: number;
        stripCharsRe: RegExp;
        triggerWrapCls: string;
        triggers: any;
        validateBlank: boolean;
        validator: Function;
        vtype: string;
        vtypeText: string;
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
        enterIsSpecial: boolean;
        preventScrollbars: boolean;
        constructor(config: any);
    }
    export class Time extends Ext.form.field.ComboBox {
        altFormats: string;
        format: string;
        increment: number;
        maxText: string;
        maxValue: Date|string;
        minText: string;
        minValue: Date|string;
        pickerMaxHeight: number;
        snapToIncrement: boolean;
        submitFormat: string;
        constructor(config: any);
        setMaxValue(value: Date|string):void;
        setMinValue(value: Date|string):void;
    }
    export class Trigger extends Ext.form.field.Text {
        triggerCls: string;
        constructor(config: any);
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
        static url(value: string):boolean;
    }
}
declare module Ext.form.trigger {
    export class Component extends Ext.form.trigger.Trigger {
        A: any;
        component: Ext.Component|Ext.Widget;
        constructor(config: any);
    }
    export class Spinner extends Ext.form.trigger.Trigger {
        downHandler: Function|string;
        upHandler: Function|string;
        constructor(config: any);
    }
    export class Trigger extends Ext.Base {
        cls: string;
        extraCls: string;
        handler: Function|string;
        hidden: boolean;
        hideOnReadOnly: boolean;
        repeatClick: boolean;
        scope: any;
        weight: number;
        width: number;
        bodyTpl: Ext.Template|string|any[];
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
        alternate: boolean;
        autoEnd: boolean;
        callback: Function;
        delay: number;
        duration: number;
        dynamic: boolean;
        easing: string;
        from: any;
        iterations: number;
        keyframes: any;
        listeners: any;
        remove: boolean;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        jumpToEnd():void;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Animation extends Ext.Base {
        type: string;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class CubicBezier {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class DrawPath {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Easing {
    }
    export class Manager {
        static addAnim(anim: Ext.fx.Anim):void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static removeAnim(anim: Ext.fx.Anim):void;
        static setConfig(name: any, value?: any):Ext.Base;
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
        before: any;
        easing: string;
        constructor();
        getAfter():any;
        getBefore():any;
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
    export class CssTransition extends Ext.fx.runner.Css {
        constructor();
    }
}
declare module Ext.fx.target {
    export class Component extends Ext.fx.target.Target {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
    }
    export class CompositeElement extends Ext.fx.target.Element {
        isComposite: boolean;
        constructor(target: any);
    }
    export class CompositeElementCSS extends Ext.fx.target.CompositeElement {
        constructor(target: any);
    }
    export class CompositeSprite extends Ext.fx.target.Sprite {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
    }
    export class Element extends Ext.fx.target.Target {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
    }
    export class ElementCSS extends Ext.fx.target.Element {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
    }
    export class Sprite extends Ext.fx.target.Target {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
    }
    export class Target extends Ext.Base {
        constructor(target: Ext.Component|Ext.dom.Element|Ext.draw.sprite.Sprite);
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
        altText: string;
        getClass: Function;
        getTip: Function;
        handler: Function;
        icon: string;
        iconCls: string;
        stopSelection: boolean;
        constructor(config: any);
        disableAction(index: number|Ext.grid.column.Action, silent?: boolean):void;
        enableAction(index: number|Ext.grid.column.Action, silent?: boolean):void;
    }
    export class Boolean extends Ext.grid.column.Column {
        falseText: string;
        trueText: string;
        undefinedText: string;
        constructor(config: any);
    }
    export class Check extends Ext.grid.column.Column {
        stopSelection: boolean;
        constructor(config: any);
    }
    export class Column extends Ext.grid.header.Container {
        align: string;
        cellWrap: boolean;
        columns: any[];
        dataIndex: string;
        editRenderer: Function|string;
        editor: any;
        emptyCellText: string;
        field: any;
        formatter: string;
        groupable: boolean;
        header: string;
        hideable: boolean;
        lockable: boolean;
        locked: boolean;
        menuDisabled: boolean;
        menuText: string;
        renderer: Function|string;
        scope: any;
        summaryRenderer: Function|string;
        tdCls: string;
        text: string;
        tooltip: string;
        tooltipType: string;
        updater: Function|string;
        variableRowHeight: boolean;
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
        format: string;
        constructor(config: any);
    }
    export class Number extends Ext.grid.column.Column {
        format: string;
        constructor(config: any);
    }
    export class RowNumberer extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Template extends Ext.grid.column.Column {
        constructor(config: any);
    }
    export class Widget extends Ext.grid.column.Column {
        defaultCellUI: any;
        stopSelection: boolean;
        widget: any;
        constructor(config: any);
    }
}
declare module Ext.grid.feature {
    export class AbstractSummary extends Ext.grid.feature.Feature {
        remoteRoot: string;
        showSummaryRow: boolean;
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
        collapsible: boolean;
        depthToIndent: number;
        enableGroupingMenu: boolean;
        enableNoGroups: boolean;
        groupByText: string;
        groupHeaderTpl: string|any[]|Ext.Template;
        hideGroupedHeader: boolean;
        remoteRoot: string;
        showGroupsText: string;
        showSummaryRow: boolean;
        startCollapsed: boolean;
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
        bodyBefore: boolean;
        constructor(config: any);
        getAdditionalData(data: any, idx: number, record: Ext.data.Model, orig: any):void;
    }
    export class Summary extends Ext.grid.feature.AbstractSummary {
        dock: string;
        constructor(config: any);
    }
}
declare module Ext.grid.filters {
    export class Filters extends Ext.plugin.Abstract {
        menuFilterText: string;
        showMenu: boolean;
        stateId: string;
        filterCls: string;
        constructor(config?: any);
        addFilter(filters: any):any[];
        addFilters(filters: any[]):any[];
        bindStore(store?: Ext.data.AbstractStore|string):void;
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
        dataIndex: string;
        itemDefaults: any;
        updateBuffer: number;
        active: boolean|boolean;
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
        defaultValue: boolean;
        noText: string;
        yesText: string;
        constructor(config: any);
    }
    export class Date extends Ext.grid.filters.filter.TriFilter {
        dateFormat: string;
        fields: any;
        maxDate: Date;
        minDate: Date;
        pickerDefaults: any;
        constructor(config: any);
        getFields():any;
        getPicker(item: string):any;
        getPickerDefaults():any;
        onMenuSelect(picker: Ext.picker.Date, date: any):void;
        setFields(fields: any):void;
        setPickerDefaults(pickerDefaults: any):void;
    }
    export class List extends Ext.grid.filters.filter.SingleFilter {
        idField: string;
        labelField: string;
        loadOnShow: boolean;
        options: any[];
        paramPrefix: string;
        single: boolean;
        store: Ext.data.Store;
        constructor(config: any);
    }
    export class Number extends Ext.grid.filters.filter.TriFilter {
        emptyText: string;
        fields: any;
        constructor(config: any);
        getFields():any;
        setFields(fields: any):void;
    }
    export class SingleFilter extends Ext.grid.filters.filter.Base {
        constructor(config: any);
    }
    export class String extends Ext.grid.filters.filter.SingleFilter {
        emptyText: string;
        constructor(config: any);
    }
    export class TriFilter extends Ext.grid.filters.filter.Base {
        constructor(config: any);
    }
}
declare module Ext.grid.header {
    export class Container extends Ext.container.Container {
        activeChildTabIndex: number;
        defaultWidth: number;
        enableColumnHide: boolean;
        enableFocusableContainer: boolean;
        inactiveChildTabIndex: number;
        sealed: boolean;
        sortable: boolean;
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
        layout: any;
        lockedGridConfig: any;
        lockedViewConfig: any;
        normalGridConfig: any;
        normalViewConfig: any;
        scrollDelta: number;
        split: boolean;
        subGridXType: string;
        syncRowHeight: boolean;
        syncRowHeights():void;
    }
    export class View extends Ext.Base {
        focusCls: string;
        listeners: any;
        tabIndex: number;
        hasListeners: any;
        isLockingView: boolean;
        isObservable: boolean;
        constructor(config: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        beforeBlur(e: Ext.event.Event):void;
        beforeFocus(e: Ext.event.Event):void;
        bindStore(store?: Ext.data.AbstractStore|string):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        cancelFocus():void;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onBindStore(store: Ext.data.Store):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        leadingBufferZone: number;
        numFromEdge: number;
        scrollToLoadBuffer: number;
        synchronousRender: boolean;
        trailingBufferZone: number;
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
        containerScroll: any;
        ddGroup: string;
        dragGroup: string;
        dragText: string;
        dropGroup: string;
        enableDrag: boolean;
        enableDrop: boolean;
        dragZone: any;
        dropZone: any;
        constructor(config?: any);
    }
    export class Editing extends Ext.plugin.Abstract {
        clicksToEdit: number;
        default: string;
        listeners: any;
        triggerEvent: string;
        editing: boolean;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        completeEdit():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onReconfigure():void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        startEdit(record: Ext.data.Model|number, columnHeader: Ext.grid.column.Column|number):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class HeaderReorderer extends Ext.plugin.Abstract {
        constructor(config?: any);
    }
    export class HeaderResizer extends Ext.plugin.Abstract {
        dynamic: boolean;
        constructor(config?: any);
        getDynamic():boolean;
        setDynamic(dynamic: boolean):void;
    }
    export class RowEditing extends Ext.grid.plugin.Editing {
        autoCancel: boolean;
        clicksToMoveEditor: number;
        errorSummary: boolean;
        constructor();
    }
    export class RowExpander extends Ext.plugin.Abstract {
        bodyBefore: boolean;
        columnWidth: number;
        expandOnDblClick: boolean;
        expandOnEnter: boolean;
        headerWidth: number;
        lockedTpl: Ext.XTemplate;
        rowBodyTpl: Ext.XTemplate;
        selectRowOnExpand: boolean;
        constructor(config?: any);
        getFeatureConfig(grid: any):any[];
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        customEditors: any;
        customRenderers: any;
        inferTypes: boolean;
        nameColumnWidth: number|string;
        nameField: string;
        propertyNames: any;
        source: any;
        sourceConfig: any;
        valueField: string;
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
        getSource():void;
        setSource(dataObject: any):void;
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
        invalidate(components: Ext.Component|any[], full: boolean):void;
        removeEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        resetLayout(layout: any, ownerContext: any, firstTime: any):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(item: Ext.Component|Ext.Component[]|Ext.dom.Element|Ext.dom.Element[]|Ext.dom.CompositeElement, width: number, height: number):void;
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
        getEl(nameOrEl: string|Ext.dom.Element, owner?: Ext.layout.container.Container|Ext.Component):Ext.layout.ContextItem;
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
        removeEl(nameOrEl: string|Ext.dom.Element, owner?: Ext.layout.container.Container|Ext.Component):void;
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
    export class Anchor extends Ext.layout.container.Auto {
        anchor: string;
        defaultAnchor: string;
        constructor();
    }
    export class Auto extends Ext.layout.container.Container {
        reserveScrollbar: boolean;
        manageOverflow: boolean;
        managePadding: boolean;
        constructor();
        calculateOverflow(ownerContext: Ext.layout.ContextItem):void;
        getOverflowXStyle(ownerContext: Ext.layout.ContextItem):string;
        getOverflowYStyle(ownerContext: Ext.layout.ContextItem):string;
        setCtSizeIfNeeded(ownerContext: Ext.layout.ContextItem, containerSize: any):void;
    }
    export class Border extends Ext.layout.container.Container {
        padding: any;
        regionWeights: any;
        split: boolean|Ext.resizer.BorderSplitter;
        splitterResize: boolean;
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        align: string;
        alignRoundingMethod: any;
        constrainAlign: boolean;
        enableSplitters: boolean;
        flex: number;
        overflowHandler: string|Ext.layout.container.boxOverflow.None;
        pack: string;
        padding: string;
        stretchMaxPartner: string|Ext.Component;
        vertical: boolean;
        constructor(config: any);
        cacheFlexes(ownerContext: any):void;
        getAlign():string;
        getAlignRoundingMethod():any;
        getConstrainAlign():boolean;
        getEnableSplitters():boolean;
        getOverflowHandler():string|Ext.layout.container.boxOverflow.None;
        getPack():string;
        getPadding():string;
        getStretchMaxPartner():string|Ext.Component;
        getVertical():boolean;
        setAlign(align: string):void;
        setAlignRoundingMethod(alignRoundingMethod: any):void;
        setConstrainAlign(constrainAlign: boolean):void;
        setEnableSplitters(enableSplitters: boolean):void;
        setOverflowHandler(overflowHandler: string|Ext.layout.container.boxOverflow.None):void;
        setPack(pack: string):void;
        setPadding(padding: string):void;
        setStretchMaxPartner(stretchMaxPartner: string|Ext.Component):void;
        setVertical(vertical: boolean):void;
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
    export class Center extends Ext.layout.container.Fit {
        constructor();
    }
    export class CheckboxGroup extends Ext.layout.container.Container {
        autoFlex: boolean;
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
        childEls: any;
        itemCls: string;
        constructor();
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
        itemSpacing: number;
        labelWidth: number|string;
        constructor();
    }
    export class HBox extends Ext.layout.container.Box {
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
        animateScroll: boolean;
        bubbleEvents: string|string[];
        listeners: any;
        scrollDuration: number;
        scrollIncrement: number;
        scrollRepeatInterval: number;
        wheelIncrement: number;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        scrollToItem(item: string|number|Ext.Component, animate: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
}
declare module Ext.menu {
    export class CheckItem extends Ext.menu.Item {
        checkChangeDisabled: boolean;
        checkHandler: Function;
        checked: boolean;
        checkedCls: string;
        group: string;
        groupCls: string;
        scope: any;
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
        ariaLabel: string;
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
        glyph: number|string;
        handler: Function;
        hideOnClick: boolean;
        href: string;
        hrefTarget: string;
        icon: string;
        iconCls: string;
        menuAlign: string;
        menuExpandDelay: number;
        menuHideDelay: number;
        plain: boolean;
        text: string;
        tooltip: any;
        tooltipType: string;
        activated: boolean;
        isMenuItem: boolean;
        menu: any;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        child(selector?: string|Ext.Component):any;
        down(selector?: string|Ext.Component):any;
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
        static get(menu: any, config?: any):Ext.menu.Menu;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static hideAll():boolean;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Menu extends Ext.panel.Panel {
        allowOtherMenus: boolean;
        enableKeyNav: boolean;
        ignoreParentClicks: boolean;
        plain: boolean;
        showSeparator: boolean;
        isMenu: boolean;
        parentMenu: Ext.menu.Menu;
        constructor(config: any);
        canActivateItem(item: any):boolean;
        deactivateActiveItem(andBlurFocusedItem: any):void;
    }
    export class Separator extends Ext.menu.Item {
        separatorCls: string;
        constructor(config: any);
    }
}
declare module Ext.mixin {
    export class Bindable extends Ext.Base {
        bind: any;
        controller: any;
        defaultListenerScope: boolean;
        publishes: any;
        reference: string;
        session: any;
        viewModel: any;
        defaultBindProperty: string;
        getBind():any;
        getController():any;
        getDefaultListenerScope():boolean;
        getPublishes():any;
        getReference():string;
        getSession():any;
        getViewModel():any;
        initInheritedState(inheritedState: any):void;
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
        resolveListenerScope(defaultScope?: any):Ext.app.ViewController|Ext.container.Container;
    }
    export class Mashup extends Ext.Base {
    }
    export class Observable extends Ext.Mixin {
        bubbleEvents: string|string[];
        listeners: any;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class Queryable extends Ext.Base {
        child(selector?: string|Ext.Component):any;
        down(selector?: string|Ext.Component):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
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
        getSelection():any[];
        getSelectionCount():number;
        getSelectionMode():string;
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
        glyph: number|string;
        icon: string;
        iconCls: string;
        title: string|Ext.panel.Title;
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: any):void;
        getTools():Ext.panel.Tool[];
    }
    export class Panel extends Ext.container.Container {
        animCollapse: boolean;
        bbar: any;
        bodyBorder: boolean;
        bodyCls: string|string[];
        bodyPadding: number|string;
        bodyStyle: any;
        buttonAlign: string;
        buttons: any;
        closable: boolean;
        closeAction: string;
        collapseDirection: string;
        collapseFirst: boolean;
        collapseMode: string;
        collapsed: boolean;
        collapsedCls: string;
        collapsible: boolean;
        constrainHeader: boolean;
        defaultDockWeights: any;
        dockedItems: any;
        fbar: any;
        floatable: boolean;
        frameHeader: boolean;
        glyph: number|string;
        header: any;
        headerOverCls: string;
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
        shrinkWrapDock: boolean|number;
        simpleDrag: boolean;
        tbar: any;
        title: string;
        titleCollapse: boolean;
        tools: any[]|Ext.panel.Tool[];
        body: Ext.dom.Element;
        dd: Ext.dd.DragSource|Ext.util.ComponentDragger;
        isPanel: boolean;
        constructor(config: any);
        addBodyCls(cls: string):Ext.panel.Panel;
        addDocked(items: any, pos?: number):Ext.Component[];
        addTool(tools: any[]|Ext.panel.Tool[]):void;
        addTools():void;
        afterCollapse(animated: boolean):void;
        afterExpand(animated: boolean):void;
        close():void;
        collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        convertCollapseDir(collapseDir: any):void;
        expand(animate?: boolean):Ext.panel.Panel;
        getCollapsed():boolean|string;
        getDockedComponent(comp: string|number):Ext.Component;
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
        allowDeselect: boolean;
        autoLoad: boolean;
        bufferedRenderer: boolean;
        columnLines: boolean;
        columns: any;
        deferRowRender: boolean;
        disableSelection: boolean;
        emptyText: string;
        enableColumnHide: boolean;
        enableColumnMove: boolean;
        enableColumnResize: boolean;
        enableLocking: boolean;
        features: Ext.grid.feature.Feature[]|any[]|string[];
        forceFit: boolean;
        hideHeaders: boolean;
        leadingBufferZone: number;
        multiColumnSort: boolean;
        multiSelect: boolean;
        numFromEdge: number;
        reserveScrollbar: boolean;
        rowLines: boolean;
        scroll: string|boolean;
        sealedColumns: boolean;
        selModel: any;
        selType: string;
        simpleSelect: boolean;
        sortableColumns: boolean;
        store: Ext.data.Store;
        trailingBufferZone: number;
        variableRowHeight: boolean;
        view: Ext.view.Table;
        viewConfig: any;
        viewType: string;
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
        glyph: number|string;
        icon: string;
        iconCls: string;
        constructor(config: any);
    }
    export class Tool extends Ext.Component {
        callback: Function;
        handler: Function;
        scope: any;
        stopEvent: boolean;
        toolOwner: Ext.Component;
        tooltip: any;
        tooltipType: string;
        type: string;
        isTool: boolean;
        constructor(config: any);
        setType(type: string):Ext.panel.Tool;
    }
}
declare module Ext.perf {
    export class Accumulator extends Ext.Base {
    }
    export class Monitor {
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
}
declare module Ext.picker {
    export class Color extends Ext.Component {
        allowReselect: boolean;
        clickEvent: string;
        handler: Function;
        itemCls: string;
        scope: any;
        selectedCls: string;
        value: string;
        colors: string[];
        constructor(config: any);
        clear():void;
        getValue():string;
        select(color: string, suppressEvent?: boolean):void;
    }
    export class Date extends Ext.Component {
        ariaTitle: string;
        ariaTitleDateFormat: string;
        dayNames: string[];
        disableAnim: boolean;
        disabledCellCls: string;
        disabledDates: string[];
        disabledDatesRE: RegExp;
        disabledDatesText: string;
        disabledDays: number[];
        disabledDaysText: string;
        format: string;
        handler: Function;
        keyNavConfig: any;
        longDayFormat: string;
        maxDate: Date;
        maxText: string;
        minDate: Date;
        minText: string;
        monthNames: string[];
        monthYearFormat: string;
        monthYearText: string;
        nextText: string;
        prevText: string;
        scope: any;
        selectedCls: string;
        showToday: boolean;
        startDay: number;
        todayText: string;
        todayTip: string;
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
        cancelText: string;
        okText: string;
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
        format: string;
        increment: number;
        maxValue: Date;
        minValue: Date;
        constructor(config: any);
        setMaxValue(value: Date):void;
        setMinValue(value: Date):void;
        updateList():void;
    }
}
declare module Ext.plugin {
    export class Abstract extends Ext.Base {
        pluginId: string;
        stateEvents: string|any[];
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
        static create(config: any, defaultType?: Function):Ext.Component;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class Responsive extends Ext.mixin.Responsive {
        constructor(config: any);
    }
    export class Viewport extends Ext.plugin.Responsive {
        maxUserScale: number;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getEl():Ext.dom.Element;
        getTarget():Ext.dom.Element|Ext.Component;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resizeTo(width: number, height: number):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        suspendEvent(...eventName: string[]):void;
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
        size: number;
        tracker: any;
        orientation: string;
        constructor(config: any);
        getTrackerConfig():void;
    }
    export class SplitterTracker extends Ext.dd.DragTracker {
    }
}
declare module Ext.scroll {
    export class Indicator extends Ext.Base {
        axis: string;
        containerEl: Ext.dom.Element;
        hasOpposite: boolean;
        maxScrollPosition: number;
        minLength: number;
        scrollSize: number;
        scroller: Ext.scroll.Scroller;
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
        direction: string;
        el: Ext.dom.Element;
        minIndicatorLength: number;
        owner: Ext.Component;
        constructor(config: any);
    }
    export class Scroller extends Ext.Evented {
        acceleration: number;
        direction: string;
        directionLock: boolean;
        disabled: boolean;
        friction: number;
        initialOffset: any;
        momentumEasing: any;
        slotSnapSize: any;
        constructor(config: any);
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
        preventWrap: boolean;
        getCurrentPosition():void;
        getPosition():Ext.grid.CellContext;
        setCurrentPosition(position: any, suppressEvent: boolean):void;
        setPosition(position: any, suppressEvent: boolean):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        checkOnly: boolean;
        checkSelector: string;
        injectCheckbox: number|string;
        showHeaderCheckbox: boolean;
        constructor();
        getHeaderConfig():void;
        onHeaderClick(headerCt: any, header: any, e: any):void;
        renderer(value: any, metaData: any, record: any, rowIndex: any, colIndex: any, store: any, view: any):void;
    }
    export class DataViewModel extends Ext.selection.Model {
        enableKeyNav: boolean;
    }
    export class Model extends Ext.util.Observable {
        allowDeselect: boolean;
        ignoreRightMouseSelection: boolean;
        mode: any;
        pruneRemoved: boolean;
        toggleOnClick: boolean;
        selected: Ext.util.MixedCollection;
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        deselect(records: Ext.data.Model[]|number, suppressEvent?: boolean):void;
        deselectAll(suppressEvent?: boolean):void;
        deselectRange(startRow: Ext.data.Model|number, endRow: Ext.data.Model|number):void;
        getCount():number;
        getLastSelected():Ext.data.Model;
        getSelection():Ext.data.Model[];
        getSelectionMode():string;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        hasSelection():boolean;
        isLocked():boolean;
        isRangeSelected(from: Ext.data.Model|number, to: Ext.data.Model|number):boolean;
        isSelected(record: Ext.data.Model|number):boolean;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        select(records: Ext.data.Model[]|number, keepExisting?: boolean, suppressEvent?: boolean):void;
        selectAll(suppressEvent: boolean):void;
        selectRange(startRow: Ext.data.Model|number, endRow: Ext.data.Model|number, keepExisting?: boolean):void;
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
        publishOnComplete: boolean;
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
    export class Widget extends Ext.Widget {
        clickToChange: boolean;
        publishOnComplete: boolean;
        twoWayBindable: any;
        constructor(config: any);
        getClickToChange():boolean;
        getMaxValue():number;
        getMinValue():number;
        getPublishOnComplete():boolean;
        getTwoWayBindable():any;
        getUi():string;
        getValue(index: number):number|number[];
        getValues():number[];
        getVertical():boolean;
        setClickToChange(clickToChange: boolean):void;
        setMaxValue(maxValue: number):void;
        setMinValue(minValue: number):void;
        setPublishOnComplete(publishOnComplete: boolean):void;
        setThumbValue(index: number|number[], value: number, animate?: boolean):Ext.slider.Multi;
        setTwoWayBindable(twoWayBindable: any):void;
        setUi(ui: string):void;
        setValue(value: number):void;
        setVertical(vertical: boolean):void;
    }
}
declare module Ext.sparkline {
    export class Bar extends Ext.sparkline.BarBase {
        barColor: string;
        barSpacing: number;
        barWidth: number;
        chartRangeClip: boolean;
        chartRangeMax: number;
        chartRangeMin: number;
        colorMap: any;
        negBarColor: string;
        nullColor: string;
        stackedBarColor: string[];
        zeroAxis: boolean;
        zeroColor: string;
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
        fillColor: string;
        highlightColor: string;
        highlightLighten: number;
        lineColor: string;
        tipTpl: string|Ext.XTemplate;
        tooltipPrefix: string;
        tooltipSkipNull: boolean;
        values: number[];
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
        getTipTpl():string|Ext.XTemplate;
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
        setTipTpl(tipTpl: string|Ext.XTemplate):void;
        setTooltipPrefix(tooltipPrefix: string):void;
        setTooltipSkipNull(tooltipSkipNull: boolean):void;
        setValues(values: number[]):void;
    }
    export class Box extends Ext.sparkline.Base {
        boxFillColor: string;
        boxLineColor: string;
        chartRangeMax: number;
        chartRangeMin: number;
        medianColor: string;
        outlierFillColor: string;
        outlierIQR: number;
        outlierLineColor: string;
        raw: boolean;
        showOutliers: boolean;
        spotRadius: number;
        target: number;
        targetColor: number;
        whiskerColor: string;
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
        base: number;
        performanceColor: string;
        rangeColors: string[];
        targetColor: string;
        targetWidth: number;
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
        chartRangeClip: boolean;
        chartRangeMax: number;
        chartRangeMin: number;
        lineHeight: number;
        thresholdColor: string;
        thresholdValue: number;
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
        chartRangeMax: number;
        chartRangeMaxX: number;
        chartRangeMin: number;
        chartRangeMinX: number;
        drawNormalOnTop: boolean;
        highlightLineColor: string;
        highlightSpotColor: string;
        lineWidth: number;
        maxSpotColor: string;
        minSpotColor: string;
        normalRangeColor: string;
        normalRangeMax: number;
        normalRangeMin: number;
        spotColor: string;
        spotRadius: number;
        valueSpots: any;
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
        borderColor: string;
        borderWidth: number;
        offset: number;
        sliceColors: string[];
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
        barSpacing: number;
        barWidth: number;
        colorMap: any;
        negBarColor: string;
        posBarColor: string;
        zeroBarColor: string;
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
        static clear(key: string):void;
        static get(key: string, defaultValue: any):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getProvider():Ext.state.Provider;
        static set(key: string, value: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static setProvider(stateProvider: Ext.state.Provider):void;
    }
    export class Provider extends Ext.Base {
        listeners: any;
        prefix: string;
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clear(name: string):void;
        clearListeners():void;
        clearManagedListeners():void;
        decodeValue(value: string):any;
        enableBubble(eventNames: string|string[]):void;
        encodeValue(value: any):string;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        get(name: string, defaultValue: any):any;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueue?: boolean):void;
        set(name: string, value: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Stateful extends Ext.Base {
        saveDelay: number;
        stateEvents: string[];
        stateId: string;
        stateful: boolean;
        addStateEvents(events: string|string[]):void;
        applyState(state: any):void;
        getState():any;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: string|string[], state: any):any;
        saveState():void;
    }
}
declare module Ext.tab {
    export class Bar extends Ext.panel.Bar {
        activeChildTabIndex: number;
        enableFocusableContainer: boolean;
        inactiveChildTabIndex: number;
        maxTabWidth: number;
        minTabWidth: number;
        plain: boolean;
        tabRotation: any;
        tabStretchMax: boolean;
        isTabBar: boolean;
        constructor(config: any);
        getTabRotation():any;
        getTabStretchMax():boolean;
        setTabRotation(tabRotation: any):void;
        setTabStretchMax(tabStretchMax: boolean):void;
    }
    export class Panel extends Ext.panel.Panel {
        activeTab: string|number|Ext.Component;
        deferredRender: boolean;
        itemCls: string;
        maxTabWidth: number;
        minTabWidth: number;
        plain: boolean;
        removePanelHeader: boolean;
        tabBar: any;
        tabBarHeaderPosition: number;
        tabPosition: any;
        tabRotation: any;
        tabStretchMax: boolean;
        constructor(config: any);
        getActiveTab():Ext.Component;
        getTabBar():any;
        getTabPosition():any;
        getTabRotation():any;
        getTabStretchMax():boolean;
        setActiveTab(card: string|number|Ext.Component):Ext.Component;
        setTabBar(tabBar: any):void;
        setTabPosition(tabPosition: any):void;
        setTabRotation(tabRotation: any):void;
        setTabStretchMax(tabStretchMax: boolean):void;
    }
    export class Tab extends Ext.button.Button {
        closeText: string;
        rotation: any;
        tabPosition: any;
        active: boolean;
        closable: boolean|boolean;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getQuickTip():Ext.tip.QuickTip;
        static init(autoRender?: boolean, config?: any):void;
        static isEnabled():boolean;
        static register(config: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static tips(config: any):void;
        static unregister(el: string|HTMLElement|Ext.dom.Element):void;
    }
    export class Tip extends Ext.panel.Panel {
        constrainPosition: boolean;
        constructor(config: any);
    }
    export class ToolTip extends Ext.tip.Tip {
        anchor: string;
        anchorOffset: number;
        anchorToTarget: boolean;
        autoHide: boolean;
        delegate: string;
        dismissDelay: number;
        fadeOutDuration: number;
        hideAction: string;
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
    export class Breadcrumb extends Ext.container.Container {
        activeChildTabIndex: number;
        buttonUI: string;
        displayFieldName: string;
        enableFocusableContainer: boolean;
        inactiveChildTabIndex: number;
        overflowHandler: string;
        selection: Ext.data.TreeModel|string;
        showIcons: boolean;
        store: Ext.data.TreeStore;
        useSplitButtons: boolean;
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
        overflowText: string;
        constructor(config: any);
    }
    export class Paging extends Ext.toolbar.Toolbar {
        afterPageText: string;
        beforePageText: string;
        displayInfo: boolean;
        displayMsg: string;
        emptyMsg: string;
        firstText: string;
        inputItemWidth: number;
        lastText: string;
        nextText: string;
        prependButtons: boolean;
        prevText: string;
        refreshText: string;
        store: Ext.data.Store;
        constructor(config: any);
        bindStore(store?: Ext.data.AbstractStore|string):void;
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
        text: string;
        constructor(text: any);
        setText(text: string):void;
    }
    export class Toolbar extends Ext.container.Container {
        activeChildTabIndex: number;
        defaultButtonUI: string;
        defaultFieldUI: string;
        defaultFooterButtonUI: string;
        defaultFooterFieldUI: string;
        enableFocusableContainer: boolean;
        enableOverflow: boolean;
        inactiveChildTabIndex: number;
        overflowHandler: string;
        vertical: boolean;
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
        displayField: string;
        folderSort: boolean;
        lines: boolean;
        root: any;
        rootVisible: boolean;
        singleExpand: boolean;
        useArrows: boolean;
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
        rootVisible: boolean;
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
        allowContainerDrops: boolean;
        allowParentInserts: boolean;
        appendOnly: boolean;
        expandDelay: number;
        constructor(config: any);
    }
}
declare module Ext.tree.plugin {
    export class TreeViewDragDrop extends Ext.plugin.Abstract {
        allowContainerDrops: boolean;
        allowParentInserts: boolean;
        appendOnly: boolean;
        containerScroll: any;
        ddGroup: string;
        displayField: string;
        dragGroup: string;
        dragText: string;
        dropGroup: string;
        enableDrag: boolean;
        enableDrop: boolean;
        expandDelay: number;
        nodeHighlightColor: string;
        nodeHighlightOnDrop: boolean;
        nodeHighlightOnRepair: boolean;
        sortOnDrop: boolean;
        dragZone: any;
        dropZone: any;
        constructor(config?: any);
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
        addAll(objs: any):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
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
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
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
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        remove(o: any):any;
        removeAll(items?: any[]):Ext.util.MixedCollection;
        removeAt(index: number):any;
        removeAtKey(key: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        getActiveAnimation():Ext.fx.Anim|boolean;
        hasActiveFx():Ext.fx.Anim|boolean;
        sequenceFx():any;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():any;
    }
    export class Base64 {
        static decode(input: any):string;
        static encode(input: any):string;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class CSS {
        static createRule(styleSheet: CSSStyleSheet, selector: string, property: string):CSSStyleRule;
        static createStyleSheet(cssText: string, id: string):CSSStyleSheet;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getRule(selector: string|string[], refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):any;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static setConfig(name: any, value?: any):Ext.Base;
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
    export class Collection extends Ext.Base {
        bubbleEvents: string|string[];
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
        length: number;
        sorted: boolean;
        updating: number;
        constructor(config: any);
        add(item: any):any;
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        aggregate(property: string, operation: string|((items: any[], values: any[]) => any), begin?: number, end?: number, scope?: any):any;
        aggregateByGroup(property: string, operation: string|((items: any[], values: any[]) => any), scope?: any):any;
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
        createFiltered(property: Ext.util.Filter[]|string|Function, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.Collection;
        decodeRemoveItems():void;
        each(fn: (item: any, index: number, len: number) => any, scope?: any):void;
        eachKey(fn: (key: string, item: any, index: number, len: number) => any, scope?: any):void;
        enableBubble(events: string|string[]):void;
        endUpdate():void;
        extremes(property: string, begin?: number, end?: number):any[];
        extremesByGroup(property: string):any;
        filterBy(fn: (item: any, key: string) => any, scope?: any):Ext.util.Collection;
        find(property: string, value: string|RegExp, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):any;
        findBy(fn: (item: any, key: string) => any, scope?: any, start?: number):any;
        findIndex(property: string, value: string|RegExp, start?: number, startsWith?: boolean, endsWith?: boolean, ignoreCase?: boolean):number;
        findIndexBy(fn: (item: any, key: string) => any, scope?: any, start?: number):number;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        first(grouped?: boolean):any;
        get(key: string|number):any;
        getAt(index: number):any;
        getAutoFilter():boolean;
        getAutoSort():boolean;
        getBubbleEvents():string|string[];
        getByKey(key: string|number):any;
        getCount():number;
        getDecoder():Function;
        getDefaultSortDirection():string;
        getExtraKeys():any;
        getFilterFn():Function;
        getFilters(autoCreate?: any):Ext.util.FilterCollection;
        getGrouper():any;
        getId():string;
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
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onFilterChange(filters: Ext.util.FilterCollection):void;
        onSortChange(sorters: Ext.util.SorterCollection):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove(item: any):number;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeAll():Ext.util.Collection;
        removeAt(index: number, count?: number):any;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeByKey(key: string):any;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        replaceAll(item: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setAutoFilter(autoFilter: boolean):void;
        setAutoSort(autoSort: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
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
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
    export class ComponentDragger extends Ext.dd.DragTracker {
        constrain: boolean;
        constrainDelegate: boolean;
        constructor(comp: any, config?: any);
    }
    export class Cookies {
        static clear(name: string, path?: string):void;
        static get(name: string):any;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static set(name: string, value: any, expires?: any, path?: string, domain?: string, secure?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class DelayedTask {
        id: number;
        constructor(fn?: Function, scope?: any, args?: any[], cancelOnDelay?: boolean);
        cancel():void;
        delay(newDelay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
    }
    export class ElementContainer extends Ext.Base {
        childEls: any;
        getChildEls():any;
        setChildEls(childEls: any):void;
    }
    export class Event extends Ext.Base {
        isEvent: boolean;
    }
    export class Filter extends Ext.Base {
        anyMatch: boolean;
        caseSensitive: boolean;
        exactMatch: boolean;
        filterFn: Function;
        id: string;
        operator: string;
        property: string;
        root: string;
        scope: any;
        value: any;
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
        static createFilterFn(filters: Ext.util.Filter[]|Ext.util.Collection):Function;
    }
    export class FilterCollection extends Ext.util.Collection {
        filterFn: any;
        constructor(config: any);
        filterData(data: any[]):any[];
    }
    export class Floating extends Ext.Base {
        alwaysOnTop: boolean|number;
        constrain: boolean;
        fixed: boolean;
        focusOnToFront: boolean;
        shadow: string|boolean;
        shadowOffset: number;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(dom: any);
        center():Ext.Component;
        doConstrain(constrainTo?: string|HTMLElement|Ext.dom.Element|Ext.util.Region):void;
        getAlwaysOnTop():boolean|number;
        setAlwaysOnTop(alwaysOnTop: boolean|number):void;
        toBack():Ext.Component;
        toFront(preventFocus?: boolean):Ext.Component;
    }
    export class Focusable extends Ext.Base {
        focusCls: string;
        tabIndex: number;
        beforeBlur(e: Ext.event.Event):void;
        beforeFocus(e: Ext.event.Event):void;
        cancelFocus():void;
        focus(selectText?: any, delay?: boolean|number, callback?: Function, scope?: Function):Ext.Component;
        getTabIndex():number;
        initFocusable():void;
        initFocusableEvents():void;
        postBlur(e: Ext.event.Event):void;
        postFocus(e: Ext.event.Event):void;
        setTabIndex(newTabIndex: number):void;
    }
    export class FocusableContainer extends Ext.Mixin {
        activeChildTabIndex: number;
        enableFocusableContainer: boolean;
        inactiveChildTabIndex: number;
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
        static plural(value: number, singular: string, plural?: string):void;
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
        bubbleEvents: string|string[];
        keyFn: Function;
        listeners: any;
        hasListeners: any;
        constructor(config?: any);
        add(key: any, o?: any):any;
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        clear():Ext.util.HashMap;
        clearListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        each(fn: (key: string, value: number, length: number) => any, scope?: any):Ext.util.HashMap;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        get(key: string):any;
        getBubbleEvents():string|string[];
        getCount():number;
        getId():string;
        getKey(o: any):string;
        getKeyFn():Function;
        getKeys():any[];
        getListeners():any;
        getValues():any[];
        hasListener(eventName: string):boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        remove(o: any):boolean;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeAtKey(key: string):boolean;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        replace(key: string, value: any):any;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setKeyFn(keyFn: Function):void;
        setListeners(listeners: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        unAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        unBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
    }
    export class History {
        static hasListeners: any;
        static isObservable: boolean;
        static useTopWindow: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static back():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: string|string[]):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static forward():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static isSuspended(event?: string):boolean;
        static mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents(discardQueue?: boolean):void;
        static setConfig(name: any, value?: any):Ext.Base;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Inflector {
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
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
    export class KeyMap extends Ext.Base {
        binding: any;
        eventName: string;
        ignoreInputFields: boolean;
        processEvent: Function;
        processEventScope: any;
        target: Ext.Component|Ext.dom.Element|HTMLElement|string;
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
        defaultEventAction: string;
        disabled: boolean;
        eventName: string;
        forceKeyDown: boolean;
        ignoreInputFields: boolean;
        keyMap: Ext.util.KeyMap;
        processEvent: Function;
        processEventScope: any;
        target: Ext.Component|Ext.dom.Element|HTMLElement|string;
        lastKeyEvent: Ext.event.Event;
        constructor(config: any);
        disable():void;
        enable():void;
        setDisabled(disabled: boolean):void;
    }
    export class LocalStorage extends Ext.Base {
        flushDelay: number;
        id: string;
        lazyKeys: boolean;
        prefix: string;
        session: boolean;
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
        maxSize: number;
        constructor(config?: any);
        getMaxSize():number;
        prune():void;
        setMaxSize(maxSize: number):void;
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
        reorder(mapping: any):void;
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
    export class Observable extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
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
        isContainedBy(region: Ext.util.Region|Ext.Component|Ext.dom.Element|HTMLElement):boolean;
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
        setX(The: number):Ext.util.Positionable;
        setXY(pos: number[]):Ext.util.Positionable;
        setY(The: number):Ext.util.Positionable;
        translatePoints(x: number|any[], y?: number):any;
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
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: string|number|Ext.dom.Element|HTMLElement):HTMLElement;
        initRenderData():any;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        render(container?: Ext.dom.Element|HTMLElement|string, position?: string|number):void;
    }
    export class Schedulable extends Ext.Base {
        constructor();
        getScheduler():Ext.util.Scheduler;
        schedule():void;
        sort():void;
        unschedule():void;
    }
    export class Scheduler extends Ext.Base {
        bubbleEvents: string|string[];
        listeners: any;
        preSort: string|Function;
        tickDelay: number;
        hasListeners: any;
        constructor(config: any);
        addAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        addManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        adjustBusy(adjustment: number):void;
        clearListeners():void;
        enableBubble(events: string|string[]):void;
        fireAction(eventName: string, args: any[], fn: Function, scope: any):any;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getBubbleEvents():string|string[];
        getId():string;
        getListeners():any;
        getPreSort():string|Function;
        getTickDelay():number;
        hasListener(eventName: string):boolean;
        isBusy():boolean;
        isIdle():boolean;
        isSuspended(eventName?: string):boolean;
        mon(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any, options?: any):void;
        mun(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        notify():void;
        on(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        onAfter(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        onBefore(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        relayEvents(object: any, events: any):Ext.mixin.Observable;
        removeAfterListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeBeforeListener(eventName: any, fn: Function|string, scope?: any, options?: any):void;
        removeListener(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
        removeManagedListener(object: Ext.mixin.Observable|HTMLElement, eventName: any, fn?: Function, scope?: any):void;
        resolveListenerScope(defaultScope?: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents(discardQueuedEvents: boolean):void;
        setBubbleEvents(bubbleEvents: string|string[]):void;
        setListeners(listeners: any):void;
        setPreSort(preSort: string|Function):void;
        setTickDelay(tickDelay: number):void;
        sortItem(item: any):Ext.util.Scheduler;
        sortItems(items: any):Ext.util.Scheduler;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: any, fn: Function|string, scope?: any, options?: any, order?: string):void;
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
    export class StoreHolder extends Ext.Base {
        bindStore(store?: Ext.data.AbstractStore|string):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Ext.data.Store):any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class TaskManager {
        static destroy():void;
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static newTask(config: any):Ext.util.TaskRunner.Task;
        static setConfig(name: any, value?: any):Ext.Base;
        static start(task: any):any;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class TaskRunner extends Ext.Base {
        fireIdleEvent: boolean;
        interval: number;
        constructor(interval?: any);
        newTask(config: any):Ext.util.TaskRunner.Task;
        start(task: any):any;
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
        static getConfig(name?: string, peek?: boolean):any;
        static getInitialConfig(name?: string):any;
        static init(config: any):Ext.ux.ajax.SimManager;
        static register(simlet: any):void;
        static setConfig(name: any, value?: any):Ext.Base;
    }
    export class SimXhr extends Ext.Base {
        constructor(config: any);
    }
    export class Simlet extends Ext.Base {
        responseHeaders: any;
        responseText: number;
        responseXML: number;
        status: number;
        statusText: string;
        exec(xhr: Ext.ux.ajax.SimXhr):any;
    }
    export class XmlSimlet extends Ext.ux.ajax.DataSimlet {
        xmlTpl: any[];
    }
}
declare module Ext.view {
    export class AbstractView extends Ext.Component {
        blockRefresh: boolean;
        deferEmptyText: boolean;
        deferInitialRefresh: boolean;
        disableSelection: boolean;
        emptyText: string;
        itemCls: string;
        itemSelector: string;
        itemTpl: string|string[]|Ext.XTemplate;
        loadMask: any;
        loadingCls: string;
        loadingHeight: number;
        loadingText: string;
        multiSelect: boolean;
        overItemCls: string;
        preserveScrollOnRefresh: boolean;
        selectedItemCls: string;
        simpleSelect: boolean;
        singleSelect: boolean;
        store: Ext.data.Store;
        throttledUpdate: boolean;
        trackOver: boolean;
        static updateDelay: number;
        constructor(config: any);
        addItemCls(itemInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearSelections():void;
        collectData(records: Ext.data.Model[], startIndex: number):any[];
        deselect(records: Ext.data.Model[]|number, suppressEvent: boolean):void;
        findItemByChild(node: HTMLElement):HTMLElement;
        findTargetByEvent(e: Ext.event.Event):void;
        getNode(nodeInfo: HTMLElement|string|number|Ext.data.Model):HTMLElement;
        getNodeContainerSelector():void;
        getNodes(start?: number, end?: number):HTMLElement[];
        getRecord(node: Ext.dom.Element|HTMLElement):Ext.data.Model;
        getRecords(nodes: HTMLElement[]):Ext.data.Model[];
        getSelectedNodes():HTMLElement[];
        getSelectedRecords():Ext.data.Model[];
        getSelectionCount():number;
        getSelectionModel():Ext.selection.Model;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        indexOf(nodeInfo: HTMLElement|string|number|Ext.data.Model):number;
        isSelected(node: HTMLElement|number|Ext.data.Model):boolean;
        onBindStore(store: any, initial: any, propName: any):void;
        onUnbindStore(store: any):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(record: Ext.data.Model|number):void;
        removeItemCls(itemInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
        select(records: Ext.data.Model[]|number, keepExisting: boolean, suppressEvent: boolean):void;
        setSelection(selection: any):void;
        setStore(store: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        displayField: string;
        pageSize: number;
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        child(selector?: string|Ext.Component):any;
        down(selector?: string|Ext.Component):any;
        getInnerTpl(displayField: string):string;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        visitPostOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
        visitPreOrder(selector: any, fn: (node: any) => any, scope?: any, extraArgs?: any[]):void;
    }
    export class BoundListKeyNav extends Ext.view.NavigationModel {
        boundList: Ext.view.BoundList;
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
        addToolText: string;
        fieldName: string;
        fieldTitle: string;
        removeRowText: string;
        removeRowTip: string;
        search: any;
        constructor(config: any);
        getSearch():any;
        setSearch(search: any):void;
    }
    export class MultiSelectorSearch extends Ext.panel.Panel {
        searchText: string;
        constructor(config: any);
        getSearchStore():Ext.data.Store;
    }
    export class NavigationModel extends Ext.Base {
        listeners: any;
        factoryConfig: any;
        hasListeners: any;
        isObservable: boolean;
        constructor();
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: string|string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        focusItem(item: any):void;
        hasListener(eventName: string):boolean;
        isSuspended(event?: string):boolean;
        mon(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: Ext.util.Observable|Ext.dom.Element, ename: any, fn?: Function, scope?: any):void;
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
        indexOf(el: string|HTMLElement|Ext.dom.Element|number):number;
        removeElement(el: string|HTMLElement|Ext.dom.Element|number, removeDom?: boolean):void;
        replaceElement(el: string|HTMLElement|Ext.dom.Element|number, replacement: string|Ext.dom.Element, domReplace?: boolean):Ext.view.NodeCache;
        scroll(newRecords: Ext.data.Model[], direction: number, removeCount: number):void;
    }
    export class Table extends Ext.view.View {
        enableTextSelection: boolean;
        firstCls: string;
        lastCls: string;
        markDirty: boolean;
        stripeRows: boolean;
        constructor(config: any);
        addRowCls(rowInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
        autoSizeColumn(header: Ext.grid.column.Column|number):void;
        expandToFit(header: any):void;
        focusCell(pos: Ext.grid.CellContext, delay?: boolean|number):void;
        focusRow(row: HTMLElement|string|number|Ext.data.Model, delay?: boolean|number):void;
        getBodySelector():void;
        getCellSelector(header?: Ext.grid.column.Column):void;
        getColumnSizerSelector(header: any):void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getItemSelector():void;
        getRow(nodeInfo: HTMLElement|string|number|Ext.data.Model):HTMLElement;
        getRowClass(record: Ext.data.Model, index: number, rowParams: any, store: Ext.data.Store):string;
        removeRowCls(rowInfo: HTMLElement|string|number|Ext.data.Model, cls: string):void;
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
        prompt(title: string, message: string, fn?: Function, scope?: any, multiline?: boolean|number, value?: string):Ext.window.MessageBox;
        setIcon(icon: string, width?: number, height?: number):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, message?: string):Ext.window.MessageBox;
        wait(message: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Toast extends Ext.window.Window {
        align: any;
        anchor: string|Ext.Component;
        anchorAlign: string;
        useXAxis: boolean;
        constructor(config: any);
    }
    export class Window extends Ext.panel.Panel {
        animateTarget: string|Ext.dom.Element;
        defaultFocus: string|number|Ext.Component;
        expandOnShow: boolean;
        hideShadowOnDeactivate: boolean;
        maximizable: boolean;
        maximized: boolean;
        minimizable: boolean;
        modal: boolean;
        monitorResize: boolean;
        plain: boolean;
        x: number;
        y: number;
        isWindow: boolean;
        constructor(config: any);
        getDefaultFocus():void;
        maximize(animate?: boolean):Ext.window.Window;
        minimize():Ext.window.Window;
        restore(animate?: boolean):Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}