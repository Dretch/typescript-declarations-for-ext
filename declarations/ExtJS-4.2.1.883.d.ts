// Ext type declarations generated on Sun Jan 25 2015 17:03:41 GMT+0000 (GMT)
// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext
declare class Ext {
    static BLANK_IMAGE_URL: string;
    static SSL_SECURE_URL: string;
    static USE_NATIVE_JSON: boolean;
    static chromeVersion: number;
    static emptyFn: Function;
    static emptyString: any;
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
    static addBehaviors(obj: any):void;
    static addNamespaces(namespace: any):void;
    static application(config: any):void;
    static apply(object: any, config: any, defaults?: any):any;
    static applyIf(object: any, config: any):any;
    static batchLayouts(fn: Function, scope?: any):void;
    static bind(fn: Function, scope?: any, args?: any[], appendArgs?: any):Function;
    static callback(callback: Function, scope?: any, args?: any[], delay?: number):any;
    static clean(array: any[]):any[];
    static clone(item: any):any;
    static coerce(from: any, to: any):any;
    static copyTo(dest: any, source: any, names: any, usePrototypeKeys?: boolean):any;
    static create(name?: string, ...args: any[]):any;
    static createByAlias(alias: string, ...args: any[]):any;
    static createWidget():void;
    static decode(json: string, safe?: boolean):any;
    static defer(fn: Function, millis: number, scope?: any, args?: any[], appendArgs?: any):number;
    static define(className: string, data: any, createdFn: Function):Ext.Base;
    static deprecate(packageName: string, since: string, closure: Function, scope: any):void;
    static destroy(...args: any[]):void;
    static destroyMembers(o: any, ...args: string[]):void;
    static each(iterable: any, fn: (item: any, index: number, allItems: any[]) => boolean, scope?: any, reverse?: boolean):boolean;
    static encode(o: any):string;
    static escapeRe(str: string):string;
    static exclude(excludes: any[]):any;
    static extend(superclass: Function, overrides: any):Function;
    static flatten(array: any[]):any[];
    static fly(dom: any, named?: string):Ext.dom.Element.Fly;
    static get(el: any):Ext.dom.Element;
    static getBody():Ext.dom.Element;
    static getClass(object: any):Ext.Class;
    static getClassName(object: any):string;
    static getCmp(id: string):any;
    static getDoc():Ext.dom.Element;
    static getDom(el: any):any;
    static getHead():Ext.dom.Element;
    static getNamespace(className: string):string;
    static getOrientation():string;
    static getScrollBarWidth(force?: boolean):number;
    static getScrollbarSize(force?: boolean):any;
    static getStore(store: any):Ext.data.Store;
    static getVersion(packageName?: string):Ext.Version;
    static htmlDecode(value: string):string;
    static htmlEncode(value: string):string;
    static id(el?: any, prefix?: string):string;
    static identityFn(o: any):void;
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
    static log(options?: any, ...message: string[]):void;
    static max(array: any, comparisonFn?: (max: any, item: any) => any):any;
    static mean(array: any[]):number;
    static merge(destination: any, ...object: any[]):any;
    static min(array: any, comparisonFn?: (min: any, item: any) => any):any;
    static namespace(...namespaces: string[]):any;
    static ns(...namespaces: string[]):any;
    static num(value: any, defaultValue: number):number;
    static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
    static onDocumentReady(fn: Function, scope?: any, options?: any):void;
    static onReady(fn: Function, scope: any, options: any):void;
    static override(target: any, overrides: any):void;
    static partition(arr: any, truth?: Function):any[];
    static pass(fn: Function, args: any[], scope?: any):Function;
    static pluck(array: any, propertyName: string):any[];
    static preg(ptype: string, cls: Function):void;
    static query(path: string, root?: HTMLElement, type?: string, single?: boolean):HTMLElement[];
    static regModel(name: string, config: any):Ext.data.Model;
    static regStore(id: string, config: any):void;
    static removeNode(node: HTMLElement):void;
    static require(expressions: any, fn?: Function, scope?: any, excludes?: any):void;
    static resumeLayouts(flush: any):void;
    static select(selector: string, unique?: boolean):Ext.dom.CompositeElement;
    static setGlyphFontFamily(fontFamily: string):void;
    static setVersion(packageName: string, version: any):Ext;
    static sum(array: any[]):number;
    static suspendLayouts():void;
    static syncRequire(expressions: any, fn?: Function, scope?: any, excludes?: any):void;
    static toArray(iterable: any, start?: number, end?: number):any[];
    static toSentence(items: string[], connector: string):string;
    static type(value: any):string;
    static typeOf(value: any):string;
    static un(eventName: string, fn: Function, scope?: any):void;
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
        autoLoad: any;
        autoRender: any;
        autoShow: boolean;
        baseCls: string;
        border: any;
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
        margin: any;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        overCls: string;
        padding: any;
        plugins: any;
        renderData: any;
        renderSelectors: any;
        renderTo: any;
        renderTpl: any;
        rtl: boolean;
        saveDelay: number;
        shrinkWrap: any;
        stateEvents: string[];
        stateId: string;
        stateful: boolean;
        style: any;
        tpl: any;
        tplWriteMode: string;
        ui: string;
        width: number;
        xtype: string;
        _isLayoutRoot: boolean;
        contentPaddingProperty: string;
        draggable: any;
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
        addListener(element: any, listeners: any, scope: any, options: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        addPropertyToState(state: any, propName: string, value?: string):boolean;
        addStateEvents(events: any):void;
        addUIClsToElement(ui: string):void;
        afterComponentLayout(width: number, height: number, oldWidth: any, oldHeight: any):void;
        afterRender():void;
        afterSetPosition(x: number, y: number):void;
        alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        animate(animObj: any):any;
        applyState(state: any):void;
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
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        forceComponentLayout():void;
        getActiveAnimation():any;
        getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        getBox(contentBox?: boolean, local?: boolean):any;
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
        getSize():any;
        getSizeModel(ownerCtSizeModel: any):any;
        getState():any;
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
        isVisible(deep?: boolean):boolean;
        isXType(xtype: string, shallow?: boolean):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        move(direction: string, distance: number, animate?: any):void;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        nextNode(selector?: string):Ext.Component;
        nextSibling(selector?: string):Ext.Component;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onAdded(container: Ext.container.Container, pos: number):void;
        onDisable():void;
        onEnable():void;
        onPosition(x: number, y: number):void;
        onRemoved(destroying: boolean):void;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        onResize(width: any, height: any, oldWidth: any, oldHeight: any):void;
        postBlur(e: Ext.EventObject):void;
        previousNode(selector?: string):Ext.Component;
        previousSibling(selector?: string):Ext.Component;
        registerFloatingItem(cmp: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeAnchor():Ext.util.Positionable;
        removeChildEls(testFn: Function):void;
        removeCls(cls: any):Ext.Component;
        removeClsWithUI(cls: any):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        removeUIClsFromElement(ui: string):void;
        render(container?: any, position?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
        sequenceFx():any;
        setBorder(border: any):void;
        setBox(box: any, animate?: any):Ext.util.Positionable;
        setDisabled(disabled: boolean):void;
        setDocked(dock: any, layoutParent?: boolean):Ext.Component;
        setHeight(height: number):Ext.Component;
        setLocalX(x: any):Ext.util.Positionable;
        setLocalXY(x: any, y: any):Ext.util.Positionable;
        setLocalY(y: any):Ext.util.Positionable;
        setMargin(margin: any):void;
        setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        setSize(width: any, height: any):Ext.Component;
        setUI(ui: string):void;
        setVisible(visible: boolean):Ext.Component;
        setWidth(width: number):Ext.Component;
        setX(x: any, animate: any):Ext.util.Positionable;
        setXY(xy: any, animate: any):Ext.util.Positionable;
        setY(y: any, animate: any):Ext.util.Positionable;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        translatePoints(x: any, y?: number):any;
        un(eventName: string, fn: Function, scope?: any):void;
        up(selector?: any, limit?: any):Ext.container.Container;
        update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        updateLayout(options?: any):void;
        static cancelLayout(comp: Ext.Component):void;
        static flushLayouts():void;
        static resumeLayouts(flush?: boolean):void;
        static suspendLayouts():void;
        static updateLayout(comp: Ext.Component, defer?: boolean):void;
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
        pluginId: string;
        isPlugin: boolean;
        constructor(config?: any);
        clonePlugin(overrideCfg?: any):void;
        destroy():void;
        disable():void;
        enable():void;
        getCmp():Ext.Component;
        init(client: Ext.Component):void;
        setCmp(cmp: Ext.Component):void;
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
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static isLoading(request?: any):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static parseStatus(status: number):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static request(options: any):any;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static setOptions(options: any, scope: any):any;
        static suspendEvent(...eventName: string[]):void;
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
        static pluck(array: any, propertyName: string):any[];
        static push(target: any[], ...elements: any[]):any[];
        static remove(array: any[], item: any):any[];
        static replace(array: any[], index: number, removeCount: number, insert?: any[]):any[];
        static slice(array: any[], begin: number, end: number):any[];
        static some(array: any[], fn: (item: any, index: number, array: any[]) => any, scope: any):boolean;
        static sort(array: any[], sortFn?: (a: any, b: any) => any):any[];
        static splice(array: any[], index: number, removeCount: number, ...elements: any[]):any[];
        static sum(array: any[]):number;
        static toArray(iterable: any, start?: number, end?: number):any[];
        static toMap(array: any[], getKey?: any, scope?: any):any;
        static toValueMap(array: any[], getKey?: any, scope?: any):any;
        static union(array1: any[], array2: any[], etc: any[]):any[];
        static unique(array: any[]):any[];
    }
    export class Base {
        self: Ext.Class;
        callOverridden(args: any):any;
        callParent(args: any):any;
        callSuper(args: any):any;
        getInitialConfig(name?: string):any;
        initConfig(config: any):Ext.Base;
        statics():Ext.Class;
        static addMembers(members: any):void;
        static addStatics(members: any):Ext.Base;
        static create():any;
        static createAlias(alias: any, origin: any):void;
        static getName():string;
        static implement():void;
        static override(members: any):Ext.Base;
    }
    export class Class {
        alias: string[];
        alternateClassName: any;
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
        static addNameAliasMappings(aliases: any):Ext.ClassManager;
        static addNameAlternateMappings(alternates: any):Ext.ClassManager;
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
        autoScroll: boolean;
        columnWidth: any;
        constrain: boolean;
        constrainTo: any;
        constraintInsets: any;
        defaultAlign: string;
        fixed: boolean;
        focusOnToFront: boolean;
        formBind: boolean;
        overflowX: string;
        overflowY: string;
        region: any;
        resizable: any;
        resizeHandles: string;
        shadow: any;
        shadowOffset: number;
        toFrontOnShow: boolean;
        floatParent: Ext.container.Container;
        scrollFlags: any;
        zIndexManager: Ext.ZIndexManager;
        zIndexParent: Ext.container.Container;
        constructor(config: any);
        afterHide(callback?: Function, scope?: any):void;
        afterShow(animateTarget?: any, callback?: Function, scope?: any):void;
        beforeShow():void;
        bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        cancelFocus():void;
        center():Ext.Component;
        cloneConfig(overrides: any):Ext.Component;
        doConstrain(constrainTo?: any):void;
        findParentBy(fn: Function):Ext.container.Container;
        findParentByType(xtype: any):Ext.container.Container;
        getPosition(local?: boolean):number[];
        getRefOwner():void;
        getXType():string;
        initComponent():void;
        onDestroy():void;
        onHide(animateTarget?: any, callback?: Function, scope?: any):void;
        onShow(animateTarget?: any, callback?: Function, scope?: any):void;
        onShowComplete(callback?: Function, scope?: any):void;
        scrollBy(deltaX: any, deltaY: any, animate: any):void;
        setActive(active?: boolean, newActive?: Ext.Component):void;
        setAutoScroll(scroll: boolean):Ext.Component;
        setBorderRegion(region: string):string;
        setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        setPosition(x: any, y?: number, animate?: any):Ext.Component;
        setRegionWeight(weight: number):number;
        show(animateTarget?: any, callback?: Function, scope?: any):Ext.Component;
        showAt(x: any, y?: number, animate?: any):Ext.Component;
        showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
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
        static getInitialConfig(name?: string):any;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static registerType(type: any, cls: any):void;
        static unregister(item: any):void;
    }
    export class ComponentQuery {
        static getInitialConfig(name?: string):any;
        static is(component: Ext.Component, selector: string):boolean;
        static query(selector: string, root?: Ext.container.Container):Ext.Component[];
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
        static useDom: boolean;
        static append(el: any, o: any, returnElement?: boolean):any;
        static applyStyles(el: any, styles: any):void;
        static createDom(o: any):HTMLElement;
        static createHtml(spec: any):string;
        static createTemplate(o: any):Ext.Template;
        static generateStyles(styles: any, buffer?: string[]):any;
        static getInitialConfig(name?: string):any;
        static insertAfter(el: any, o: any, returnElement?: boolean):any;
        static insertBefore(el: any, o: any, returnElement?: boolean):any;
        static insertFirst(el: any, o: any, returnElement?: boolean):any;
        static insertHtml(where: string, el: any, html: string):HTMLElement;
        static markup(spec: any):string;
        static overwrite(el: any, o: any, returnElement?: boolean):any;
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
        parentEl: any;
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
        startEdit(el: any, value?: string):void;
    }
    export class ElementLoader extends Ext.Base {
        ajaxOptions: any;
        autoLoad: any;
        baseParams: any;
        callback: Function;
        failure: Function;
        listeners: any;
        loadMask: any;
        params: any;
        renderer: Function;
        scope: any;
        scripts: boolean;
        success: Function;
        target: any;
        url: string;
        hasListeners: any;
        isLoader: boolean;
        isObservable: boolean;
        constructor(config: any);
        abort():void;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getTarget():Ext.Component;
        hasListener(eventName: string):boolean;
        isAutoRefreshing():boolean;
        load(options: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setTarget(target: any):void;
        startAutoRefresh(interval: number, options?: any):void;
        stopAutoRefresh():void;
        suspendEvent(...eventName: string[]):void;
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
        static addListener(el: any, eventName: string, handler: any, scope?: any, options?: any):void;
        static getId(element: any):string;
        static getKeyEvent():string;
        static getPageX(event: any):number;
        static getPageXY(event: any):number[];
        static getPageY(event: any):number;
        static getRelatedTarget(event: any):HTMLElement;
        static getTarget(event: any):HTMLElement;
        static on(el: any, eventName: string, handler: any, scope?: any, options?: any):void;
        static onDocumentReady(fn: Function, scope?: any, options?: any):void;
        static onWindowResize(fn: Function, scope: any, options?: boolean):void;
        static onWindowUnload(fn: Function, scope: any, options: boolean):void;
        static pollScroll():void;
        static preventDefault(event: Event):void;
        static purgeElement(el: any, eventName?: string):void;
        static removeAll(el: any):void;
        static removeListener(el: any, eventName: string, fn: Function, scope: any):void;
        static removeResizeListener(fn: Function, scope: any):void;
        static removeUnloadListener(fn: Function, scope: any):void;
        static stopEvent(event: Event):void;
        static stopPropagation(event: Event):void;
        static un(el: any, eventName: string, fn: Function, scope: any):void;
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
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addXTypeToWhitelist(xtype: any):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static disable():void;
        static enable(options: any):void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getInitialConfig(name?: string):any;
        static hasListener(eventName: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeXTypeFromWhitelist(xtype: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static suspendEvent(...eventName: string[]):void;
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
        alt: string;
        glyph: any;
        imgCls: string;
        src: string;
        title: string;
        constructor(config: any);
        setSrc(src: string):void;
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
        constructor(config?: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: any):any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Loader {
        static history: any[];
        static addClassPathMappings(paths: any):Ext.Loader;
        static exclude(excludes: any[]):any;
        static getConfig(name: string):any;
        static getPath(className: string):string;
        static loadScript(options: any):void;
        static onReady(fn: Function, scope: any, withDomReady: boolean):void;
        static require(expressions: any, fn?: Function, scope?: any, excludes?: any):void;
        static setConfig(config: any):Ext.Loader;
        static setPath(name: any, path?: string):Ext.Loader;
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
        static body: Ext.dom.Element;
        static buttonText: any;
        static contentPaddingProperty: string;
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
        static scrollFlags: any;
        static zIndexManager: Ext.ZIndexManager;
        static zIndexParent: Ext.container.Container;
        static add(...component: any[]):any;
        static addBodyCls(cls: string):Ext.panel.Panel;
        static addChildEls():void;
        static addClass(cls: any):Ext.Component;
        static addCls(cls: any):Ext.Component;
        static addClsWithUI(classes: any, skip: any):void;
        static addDocked(component: any, pos?: number):Ext.Component[];
        static addEvents(...eventNames: any[]):void;
        static addListener(element: any, listeners: any, scope: any, options: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addStateEvents(events: any):void;
        static addTool(tools: any):void;
        static addUIClsToElement(cls: any):void;
        static alert(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        static anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        static animate(animObj: any):any;
        static applyState(state: any):void;
        static bubble(fn: Function, scope?: any, args?: any[]):Ext.Component;
        static calculateConstrainedPosition(constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]):number[];
        static cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        static center():Ext.Component;
        static child(selector?: any):any;
        static clearListeners():void;
        static clearManagedListeners():void;
        static cloneConfig(overrides: any):Ext.Component;
        static close():void;
        static collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        static confirm(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        static contains(comp: Ext.Component, deep?: boolean):boolean;
        static convertCollapseDir(collapseDir: any):void;
        static disable():Ext.container.AbstractContainer;
        static doAutoRender():void;
        static doComponentLayout():Ext.container.Container;
        static doConstrain(constrainTo?: any):void;
        static doLayout():Ext.container.Container;
        static down(selector?: any):any;
        static enableBubble(eventNames: any):void;
        static ensureAttachedToBody(runLayout?: boolean):void;
        static expand(animate?: boolean):Ext.panel.Panel;
        static findParentBy(fn: Function):Ext.container.Container;
        static findParentByType(xtype: any):Ext.container.Container;
        static findPlugin(ptype: string):Ext.AbstractPlugin;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static focus(selectText?: boolean, delay?: any, callback?: Function, scope?: Function):Ext.Component;
        static forceComponentLayout():void;
        static getActiveAnimation():any;
        static getAlignToXY(element: any, position?: string, offsets?: number[]):number[];
        static getAnchorXY(anchor?: string, local?: boolean, size?: any):number[];
        static getBox(contentBox?: boolean, local?: boolean):any;
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
        static getRegion():Ext.util.Region;
        static getSize():any;
        static getSizeModel(ownerCtSizeModel: any):any;
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
        static isLayoutSuspended():boolean;
        static isVisible(deep: any):boolean;
        static isXType(xtype: string, shallow?: boolean):boolean;
        static maximize(animate: boolean):Ext.window.Window;
        static minimize():Ext.window.Window;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static move(fromIdx: any, toIdx: number):Ext.Component;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static nextNode(selector?: string):Ext.Component;
        static nextSibling(selector?: string):Ext.Component;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static previousNode(selector?: string):Ext.Component;
        static previousSibling(selector?: string):Ext.Component;
        static progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        static prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        static query(selector?: string):Ext.Component[];
        static queryBy(fn: Function, scope?: any):Ext.Component[];
        static queryById(id: string):Ext.Component;
        static registerFloatingItem(cmp: any):void;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static remove(component: any, autoDestroy?: boolean):Ext.Component;
        static removeAll(autoDestroy?: boolean):Ext.Component[];
        static removeAnchor():Ext.util.Positionable;
        static removeBodyCls(cls: string):Ext.panel.Panel;
        static removeChildEls(testFn: Function):void;
        static removeCls(cls: any):Ext.Component;
        static removeClsWithUI(cls: any):void;
        static removeDocked(item: Ext.Component, autoDestroy?: boolean):void;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeUIClsFromElement(cls: any):void;
        static render(container?: any, position?: any):void;
        static restore(animate: any):Ext.window.Window;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static savePropToState(propName: string, state: any, stateName?: string):boolean;
        static savePropsToState(propNames: any, state: any):any;
        static saveState():void;
        static scrollBy(deltaX: any, deltaY: any, animate: any):void;
        static sequenceFx():any;
        static setActive(active?: boolean, newActive?: Ext.Component):void;
        static setAutoScroll(scroll: boolean):Ext.Component;
        static setBodyStyle(style: any, value: string):Ext.panel.Panel;
        static setBorder(border: any, targetEl: any):void;
        static setBorderRegion(region: string):string;
        static setBox(box: any, animate?: any):Ext.util.Positionable;
        static setDisabled(disabled: boolean):void;
        static setDocked(dock: any, layoutParent?: boolean):Ext.Component;
        static setGlyph(newGlyph: any):void;
        static setHeight(height: number):Ext.Component;
        static setIcon(icon: string, width?: number, height?: number):Ext.window.MessageBox;
        static setIconCls(newIconCls: string):void;
        static setLoading(load: any, targetEl?: boolean):Ext.LoadMask;
        static setLocalX(x: any):Ext.util.Positionable;
        static setLocalXY(x: any, y: any):Ext.util.Positionable;
        static setLocalY(y: any):Ext.util.Positionable;
        static setMargin(margin: any):void;
        static setOverflowXY(overflowX: string, overflowY: string):Ext.Component;
        static setPagePosition(x: any, y?: number, animate?: any):Ext.Component;
        static setPosition(x: any, y?: number, animate?: any):Ext.Component;
        static setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        static setRegionWeight(weight: number):number;
        static setSize(width: any, height: any):Ext.Component;
        static setTitle(newTitle: string):void;
        static setUI(ui: any):void;
        static setVisible(visible: boolean):Ext.Component;
        static setWidth(width: number):Ext.Component;
        static setX(x: any, animate: any):Ext.util.Positionable;
        static setXY(xy: any, animate: any):Ext.util.Positionable;
        static setY(y: any, animate: any):Ext.util.Positionable;
        static show(config: any):Ext.window.MessageBox;
        static showAt(x: any, y?: number, animate?: any):Ext.Component;
        static showBy(component: any, position?: string, offsets?: number[]):Ext.Component;
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
        static up(selector?: any, limit?: any):Ext.container.Container;
        static update(htmlOrData: any, loadScripts?: boolean, callback?: Function):void;
        static updateBox(box: any):Ext.Component;
        static updateLayout(options?: any):void;
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
        static getInitialConfig(name?: string):any;
        static getModel(id: any):Ext.data.Model;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static unregister(item: any):void;
    }
    export class Number {
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
        static each(object: any, fn: (key: string, value: any, object: any) => any, scope?: any):void;
        static equals(object1: any, object2: any):boolean;
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
    export class PluginManager {
        static all: Ext.util.HashMap;
        static create(config: any, defaultType?: Function):Ext.Component;
        static each(fn: (key: string, value: number, length: number) => boolean, scope: any):void;
        static findByType(type: string, defaultsOnly: boolean):Ext.AbstractPlugin[];
        static get(id: string):any;
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static isRegistered(type: string):boolean;
        static onAvailable(id: string, fn: Function, scope: any):void;
        static register(item: any):void;
        static registerType(type: string, cls: Function):void;
        static unregister(item: any):void;
    }
    export class ProgressBar extends Ext.Component {
        text: string;
        textEl: any;
        value: number;
        constructor(config: any);
        isWaiting():boolean;
        reset(hide?: boolean):Ext.ProgressBar;
        updateProgress(value?: number, text?: string, animate?: boolean):Ext.ProgressBar;
        updateText(text?: string):Ext.ProgressBar;
        wait(config?: any):Ext.ProgressBar;
    }
    export class Queryable extends Ext.Base {
        child(selector?: any):any;
        down(selector?: any):any;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
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
        show(targetEl: any):void;
    }
    export class ShadowPool {
        static getInitialConfig(name?: string):any;
    }
    export class String {
        static addCharacterEntities(entities: any):void;
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
        compiled: boolean;
        disableFormats: boolean;
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
        static getInitialConfig(name?: string):any;
        static hideAll():void;
        static register(comp: Ext.Component):void;
        static sendToBack(comp: any):Ext.Component;
        static unregister(comp: Ext.Component):void;
    }
    export class XTemplate extends Ext.Template {
        definitions: any;
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
        doForEach(action: string, actions: any):void;
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
        static LocalStorage: any;
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
        appFolder: string;
        appProperty: string;
        autoCreateViewport: boolean;
        controllers: any;
        enableQuickTips: boolean;
        name: string;
        namespaces: any;
        paths: any;
        scope: any;
        constructor(config?: any);
        launch(profile: string):boolean;
    }
    export class Controller extends Ext.Base {
        id: string;
        listeners: any;
        models: any;
        refs: any[];
        stores: any;
        views: any;
        application: Ext.app.Application;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        addRef(refs: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        control(selectors: any, listeners?: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getApplication():Ext.app.Application;
        getController(id: string):Ext.app.Controller;
        getModel(name: string):Ext.data.Model;
        getStore(name: string):Ext.data.Store;
        getView(name: string):Ext.Base;
        hasListener(eventName: string):boolean;
        hasRef(ref: any):boolean;
        init(application: Ext.app.Application):void;
        listen(to: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onLaunch(application: Ext.app.Application):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class EventBus {
        static control(selectors: any, controller: Ext.app.Controller):void;
        static getInitialConfig(name?: string):any;
        static listen(to: any, controller: Ext.app.Controller):void;
        static unlisten(controllerId: string):void;
    }
    export class EventDomain extends Ext.Base {
        idProperty: string;
        static instances: any;
        constructor();
        match(target: any, selector: string):boolean;
        monitor(observable: Ext.Class):void;
    }
}
declare module Ext.app.domain {
    export class Component {
        static getInitialConfig(name?: string):any;
    }
    export class Controller {
        static getInitialConfig(name?: string):any;
    }
    export class Direct {
        static getInitialConfig(name?: string):any;
    }
    export class Global {
        static getInitialConfig(name?: string):any;
    }
    export class Store {
        static getInitialConfig(name?: string):any;
    }
}
declare module Ext.button {
    export class Button extends Ext.Component {
        allowDepress: boolean;
        arrowAlign: string;
        arrowCls: string;
        baseParams: any;
        clickEvent: string;
        destroyMenu: boolean;
        enableToggle: boolean;
        focusCls: string;
        glyph: any;
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
        scale: any;
        scope: any;
        showEmptyMenu: boolean;
        tabIndex: number;
        text: string;
        textAlign: string;
        toggleGroup: string;
        toggleHandler: Function;
        tooltip: any;
        tooltipType: string;
        isAction: boolean;
        menu: any;
        pressed: any;
        template: Ext.Template;
        constructor(config: any);
        child(selector?: any):any;
        down(selector?: any):any;
        getTemplateArgs():any;
        getText():string;
        hasVisibleMenu():boolean;
        hideMenu():Ext.button.Button;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
        setGlyph(glyph: any):Ext.button.Button;
        setHandler(handler: Function, scope?: any):Ext.button.Button;
        setHref(href: string):void;
        setIcon(icon: string):Ext.button.Button;
        setIconCls(cls: string):Ext.button.Button;
        setParams(params: any):void;
        setScale(scale: string):void;
        setText(text: string):Ext.button.Button;
        setTextAlign(align: string):void;
        setTooltip(tooltip: any):Ext.button.Button;
        showMenu(fromEvent: any):void;
        toggle(state?: boolean, suppressEvent?: boolean):Ext.button.Button;
    }
    export class Cycle extends Ext.button.Split {
        changeHandler: Function;
        forceGlyph: any;
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
        static getInitialConfig(name?: string):any;
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
        theme: string;
        constructor(config?: any);
        bindStore(store: any, initial: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners():any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        redraw(resize?: boolean):void;
        restoreZoom():void;
        save(config?: any):any;
        setZoom(zoomConfig: any):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class Highlight extends Ext.Base {
        highlight: any;
        highlightCfg: any;
        constructor(config: any);
        highlightItem(item: any):void;
        unHighlightItem():void;
    }
    export class Label extends Ext.Base {
        label: any;
        constructor(config: any);
        onCreateLabel(storeItem: Ext.data.Model, item: any, i: number, display: string):Ext.draw.Sprite;
        onPlaceLabel(label: Ext.draw.Sprite, storeItem: Ext.data.Model, item: any, i: number, display: string, animate: boolean, index: number):void;
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
        toggle(show: boolean):void;
    }
    export class LegendItem extends Ext.draw.CompositeSprite {
        constructor(config: any);
        createLegend(config: any):void;
        updatePosition(relativeTo?: any):void;
    }
    export class Mask extends Ext.Base {
        mask: any;
        constructor(config?: any);
    }
    export class MaskLayer extends Ext.Component {
        constructor(config: any);
    }
    export class Navigation extends Ext.Base {
        restoreZoom():void;
        setZoom(zoomConfig: any):void;
    }
    export class Shape {
        static getInitialConfig(name?: string):any;
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
        hidden: boolean;
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
        adjustMaximumByMajorUnit: boolean;
        adjustMinimumByMajorUnit: boolean;
        constrain: boolean;
        decimals: number;
        maximum: number;
        minimum: number;
        constructor(config: any);
    }
    export class Radial extends Ext.chart.axis.Numeric {
        constructor(config: any);
    }
    export class Time extends Ext.chart.axis.Numeric {
        dateFormat: any;
        fromDate: Date;
        step: any[];
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
        stacked: boolean;
        style: any;
        xPadding: any;
        yPadding: any;
        constructor(config: any);
        drawSeries():void;
    }
    export class Cartesian extends Ext.chart.series.Series {
        axis: any;
        xField: string;
        yField: any;
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
        donut: any;
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
        smooth: any;
        style: any;
        constructor(config: any);
        drawSeries():void;
    }
    export class Pie extends Ext.chart.series.Series {
        angleField: string;
        colorSet: any[];
        donut: any;
        field: string;
        highlightDuration: number;
        lengthField: string;
        style: any;
        xField: string;
        constructor(config: any);
        drawSeries():void;
    }
    export class Radar extends Ext.chart.series.Series {
        markerConfig: any;
        showMarkers: boolean;
        style: any;
        xField: string;
        yField: string;
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
        highlight: any;
        label: any;
        listeners: any;
        renderer: Function;
        shadowAttributes: any[];
        showInLegend: boolean;
        tips: any;
        title: string;
        type: string;
        hasListeners: any;
        highlightCfg: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        eachRecord(fn: Function, scope: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getItemForPoint(x: number, y: number):any;
        getLegendColor(index: any):void;
        getRecordCount():void;
        hasListener(eventName: string):boolean;
        hideAll():void;
        highlightItem(item: any):void;
        isExcluded(index: any):void;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onCreateLabel(storeItem: Ext.data.Model, item: any, i: number, display: string):Ext.draw.Sprite;
        onPlaceLabel(label: Ext.draw.Sprite, storeItem: Ext.data.Model, item: any, i: number, display: string, animate: boolean, index: number):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setTitle(index: number, title: string):void;
        showAll():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        unHighlightItem():void;
    }
}
declare module Ext.chart.theme {
    export class Base extends Ext.Base {
        constructor(config: any);
    }
    export class Theme {
    }
}
declare module Ext.container {
    export class AbstractContainer extends Ext.Component {
        activeItem: any;
        autoDestroy: boolean;
        defaultType: string;
        defaults: any;
        detachOnRemove: boolean;
        layout: any;
        suspendLayout: boolean;
        items: any;
        constructor(config: any);
        add(...component: any[]):any;
        afterLayout(layout: Ext.layout.container.Container):void;
        cascade(fn: Function, scope?: any, args?: any[]):Ext.container.Container;
        child(selector?: any):any;
        contains(comp: Ext.Component, deep?: boolean):boolean;
        doLayout():Ext.container.Container;
        down(selector?: any):any;
        getComponent(comp: any):Ext.Component;
        getLayout():Ext.layout.container.Container;
        getRefItems(deep: any):void;
        insert(index: number, component: any):Ext.Component;
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
        columns: number;
        defaultButtonUI: string;
        constructor(config: any);
    }
    export class Container extends Ext.container.AbstractContainer {
        anchorSize: any;
        constructor(config: any);
        getChildByElement(el: any, deep: boolean):Ext.Component;
    }
    export class DockingContainer extends Ext.Base {
        defaultDockWeights: any;
        addDocked(component: any, pos?: number):Ext.Component[];
        getDockedComponent(comp: any):Ext.Component;
        getDockedItems(selector: string, beforeBody: boolean):Ext.Component[];
        insertDocked(pos: number, component: any):void;
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
    }
}
declare module Ext.data {
    export class AbstractStore extends Ext.Base {
        autoLoad: any;
        autoSync: boolean;
        batchUpdateMode: string;
        defaultSortDirection: string;
        fields: any[];
        filterOnLoad: boolean;
        listeners: any;
        model: string;
        proxy: any;
        remoteFilter: boolean;
        remoteSort: boolean;
        sortOnLoad: boolean;
        sortRoot: string;
        statefulFilters: boolean;
        storeId: string;
        defaultProxyType: string;
        filters: any;
        hasListeners: any;
        isDestroyed: boolean;
        isObservable: boolean;
        isSortable: boolean;
        isStore: boolean;
        removed: Ext.data.Model[];
        sorters: any;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
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
        load(options?: any):Ext.data.Store;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        reload(options: any):void;
        removeAll():void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeAutoSync():void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        save():void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        suspendAutoSync():void;
        suspendEvent(...eventName: string[]):void;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        pause():Ext.data.Batch;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        retry():Ext.data.Batch;
        runOperation(index: number):Ext.data.Batch;
        start(index: any):Ext.data.Batch;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class BufferStore extends Ext.data.Store {
        constructor();
    }
    export class Connection extends Ext.Base {
        autoAbort: boolean;
        binary: boolean;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        isLoading(request?: any):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        parseStatus(status: number):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        request(options: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setOptions(options: any, scope: any):any;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        upload(form: any, url: string, params: string, options: any):void;
    }
    export class DirectStore extends Ext.data.Store {
        constructor(config: any);
    }
    export class Errors extends Ext.util.MixedCollection {
        constructor(config: any);
        getByField(fieldName: string):any[];
        isValid():boolean;
    }
    export class Field extends Ext.Base {
        convert: Function;
        dateFormat: string;
        dateReadFormat: string;
        dateWriteFormat: string;
        defaultValue: any;
        mapping: any;
        name: string;
        persist: boolean;
        serialize: Function;
        sortDir: string;
        sortType: any;
        type: any;
        useNull: boolean;
        constructor(config: any);
    }
    export class Group extends Ext.util.Observable {
        constructor();
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
        static getInitialConfig(name?: string):any;
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
        idProperty: any;
        idgen: any;
        listeners: any;
        persistenceProperty: string;
        proxy: any;
        validations: any[];
        dirty: boolean;
        editing: boolean;
        fields: any;
        hasListeners: any;
        isModel: boolean;
        isObservable: boolean;
        modified: any;
        phantom: boolean;
        raw: any;
        store: Ext.data.Store;
        stores: Ext.data.Store[];
        static COMMIT: string;
        static EDIT: string;
        static REJECT: string;
        constructor(data: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        beginEdit():void;
        cancelEdit():void;
        clearListeners():void;
        clearManagedListeners():void;
        commit(silent?: boolean, modifiedFieldNames?: string[]):void;
        copy(id?: string):Ext.data.Model;
        destroy(options: any):Ext.data.Model;
        enableBubble(eventNames: any):void;
        endEdit(silent?: boolean, modifiedFieldNames?: string[]):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        reject(silent?: boolean):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        save(options?: any):Ext.data.Model;
        set(fieldName: any, newValue: any):string[];
        setDirty():void;
        setId(id: any):void;
        setProxy(proxy: any):Ext.data.proxy.Proxy;
        suspendEvent(...eventName: string[]):void;
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
        cascadeBy(fn: Function, scope?: any, args?: any[]):void;
        collapse(recursive?: boolean, callback?: Function, scope?: any):void;
        collapseChildren(recursive?: Function, callback?: Function, scope?: any):void;
        contains(node: Ext.data.NodeInterface):boolean;
        copy(id?: string, deep?: boolean):Ext.data.NodeInterface;
        createNode(node: any):Ext.data.NodeInterface;
        destroy(silent: any):void;
        eachChild(fn: Function, scope?: any, args?: any[]):void;
        expand(recursive?: boolean, callback?: Function, scope?: any):void;
        expandChildren(recursive?: boolean, callback?: Function, scope?: any):void;
        findChild(attribute: string, value: any, deep?: boolean):Ext.data.NodeInterface;
        findChildBy(fn: Function, scope?: any, deep?: boolean):Ext.data.NodeInterface;
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
        updateInfo(commit: boolean, info: any):void;
        static decorate(modelClass: any):void;
    }
    export class NodeStore extends Ext.data.Store {
        node: Ext.data.Model;
        recursive: boolean;
        rootVisible: boolean;
        treeStore: Ext.data.TreeStore;
        isExpandingOrCollapsing: number;
        isNodeStore: boolean;
        constructor(config: any);
    }
    export class Operation extends Ext.Base {
        action: string;
        batch: Ext.data.Batch;
        callback: Function;
        filters: Ext.util.Filter[];
        groupers: Ext.util.Grouper[];
        limit: number;
        params: any;
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
    export class PageMap extends Ext.util.LruCache {
        constructor(config?: any);
        findBy(fn: (rec: any, index: any) => any, scope?: any):any;
        findIndexBy(fn: (rec: any, index: any) => any, scope?: any):number;
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
        static getInitialConfig(name?: string):any;
        static none(s: any):any;
    }
    export class Store extends Ext.data.AbstractStore {
        autoDestroy: boolean;
        buffered: boolean;
        clearOnPageLoad: boolean;
        clearRemovedOnLoad: boolean;
        groupDir: string;
        groupField: string;
        groupers: Ext.util.MixedCollection;
        leadingBufferZone: number;
        pageSize: number;
        purgePageCount: number;
        remoteGroup: boolean;
        sortOnFilter: boolean;
        trailingBufferZone: number;
        currentPage: number;
        data: any;
        snapshot: Ext.util.MixedCollection;
        constructor(config?: any);
        addFilter(filters: any, applyFilters?: boolean):void;
        addSorted(record: Ext.data.Model):void;
        aggregate(fn: Function, scope?: any, grouped?: boolean, args?: any[]):any;
        average(field: string, grouped?: boolean):any;
        clearFilter(suppressEvent?: boolean):void;
        clearGrouping():void;
        collect(dataIndex: string, allowNull?: boolean, bypassFilter?: boolean):any[];
        commitChanges():void;
        count(grouped?: boolean):number;
        each(fn: Function, scope?: any):void;
        filter(filters?: any, value?: string):void;
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
        getRange(start: number, end: number, options?: any):Ext.data.Model[];
        getTotalCount():number;
        group(groupers: any, direction?: string):void;
        guaranteeRange(start: any, end: any, callback: any, scope: any, options: any):void;
        indexOf(record: Ext.data.Model):number;
        indexOfId(id: string):number;
        indexOfTotal(record: Ext.data.Model):number;
        insert(index: number, records: Ext.data.Model[]):Ext.data.Model[];
        isFiltered():boolean;
        isGrouped():boolean;
        last(grouped?: boolean):any;
        loadData(data: any, append?: boolean):void;
        loadPage(page: number, options?: any):void;
        loadRawData(data: any[], append?: boolean):void;
        loadRecords(records: Ext.data.Model[], options: any):void;
        max(field: string, grouped?: boolean):any;
        min(field: string, grouped?: boolean):any;
        nextPage(options: any):void;
        prefetch(options?: any):void;
        prefetchPage(page: number, options?: any):void;
        prefetchRange(start: any, end: any):void;
        previousPage(options: any):void;
        query(property: string, value: any, anyMatch?: boolean, caseSensitive?: boolean, exactMatch?: boolean):Ext.util.MixedCollection;
        queryBy(fn: (record: Ext.data.Model, id: any) => any, scope?: any):Ext.util.MixedCollection;
        rejectChanges():void;
        removeAt(index: number, count?: number):void;
        removeFilter(toRemove: any, applyFilters?: boolean):void;
        sum(field: string, grouped?: boolean):number;
    }
    export class StoreManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(o: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):any;
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
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static unregister(...stores: any[]):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class Tree extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        root: Ext.data.NodeInterface;
        constructor(root?: Ext.data.NodeInterface);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getNodeById(id: string):Ext.data.NodeInterface;
        getRootNode():Ext.data.NodeInterface;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        removeRootNode():Ext.data.NodeInterface;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setRootNode(node: Ext.data.NodeInterface):Ext.data.NodeInterface;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class TreeModel extends Ext.data.Model {
        constructor(data: any);
    }
    export class TreeStore extends Ext.data.AbstractStore {
        clearOnLoad: boolean;
        clearRemovedOnLoad: boolean;
        defaultRootId: string;
        defaultRootProperty: string;
        defaultRootText: string;
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
        static getInitialConfig(name?: string):any;
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
        static formatMessage: string;
        static inclusionMessage: string;
        static lengthMessage: string;
        static presenceMessage: string;
        static email(config: any, email: string):boolean;
        static exclusion(config: any, value: string):boolean;
        static format(config: any, value: string):boolean;
        static getInitialConfig(name?: string):any;
        static inclusion(config: any, value: string):boolean;
        static length(config: any, value: string):boolean;
        static presence(config: any, value: any):boolean;
    }
}
declare module Ext.data.association {
    export class Association extends Ext.Base {
        associatedModel: string;
        associationKey: string;
        model: string;
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
declare module Ext.data.proxy {
    export class Ajax extends Ext.data.proxy.Server {
        binary: boolean;
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
        directFn: any;
        paramOrder: any;
        paramsAsHash: boolean;
        constructor(config: any);
    }
    export class JsonP extends Ext.data.proxy.Server {
        autoAppendParams: boolean;
        callbackKey: string;
        recordParam: string;
        constructor();
        abort():void;
        encodeRecords(records: Ext.data.Model[]):any[];
    }
    export class LocalStorage extends Ext.data.proxy.WebStorage {
        constructor(config?: any);
    }
    export class Memory extends Ext.data.proxy.Client {
        data: any;
        enablePaging: boolean;
        constructor(config?: any);
    }
    export class Proxy extends Ext.Base {
        batchActions: boolean;
        batchOrder: string;
        listeners: any;
        model: any;
        reader: any;
        writer: any;
        hasListeners: any;
        isObservable: boolean;
        isProxy: boolean;
        isSynchronous: boolean;
        constructor(config?: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        batch(options: any):Ext.data.Batch;
        clearListeners():void;
        clearManagedListeners():void;
        destroy(operation: Ext.data.Operation, callback: Function, scope: any):void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getModel():Ext.data.Model;
        getReader():Ext.data.reader.Reader;
        getWriter():Ext.data.writer.Writer;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        read(operation: Ext.data.Operation, callback: Function, scope: any):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setModel(model: any, setOnStore: boolean):void;
        setReader(reader: any):Ext.data.reader.Reader;
        setWriter(writer: any):Ext.data.writer.Writer;
        suspendEvent(...eventName: string[]):void;
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
        metaProperty: string;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getResponseData(response: any):Ext.data.ResultSet;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        read(response: any):Ext.data.ResultSet;
        readRecords(data: any):Ext.data.ResultSet;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Xml extends Ext.data.reader.Reader {
        namespace: string;
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
        expandData: boolean;
        root: string;
        constructor(config?: any);
        getExpandedData(data: any):void;
    }
    export class Writer extends Ext.Base {
        dateFormat: string;
        nameProperty: string;
        writeAllFields: boolean;
        writeRecordId: boolean;
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
        constrainTo(constrainTo: any, pad?: any, inContent?: boolean):void;
        destroy():void;
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
        static clickTimeThresh: number;
        static dragCls: string;
        static mode: number;
        static notifyOccluded: boolean;
        static preventDefault: boolean;
        static stopPropagation: boolean;
        static useCache: boolean;
        static getBestMatch(dds: Ext.dd.DragDrop[]):Ext.dd.DragDrop;
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
        autoStart: any;
        constrainTo: any;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        onBeforeStart(e: Ext.EventObject):void;
        onDrag(e: Ext.EventObject):void;
        onEnd(e: Ext.EventObject):void;
        onStart(e: Ext.EventObject):void;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class DragZone extends Ext.dd.DragSource {
        containerScroll: any;
        scrollEl: any;
        constructor(el: any, config: any);
        getRepairXY(e: Event):number[];
        onInitDrag(x: number, y: number):boolean;
    }
    export class DropTarget extends Ext.dd.DDTarget {
        ddGroup: string;
        dropAllowed: string;
        dropNotAllowed: string;
        overClass: string;
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
        static getInitialConfig(name?: string):any;
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
        static getInitialConfig(name?: string):any;
        static refreshCache():void;
        static register(el: any):void;
        static unregister(el: any):void;
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
        createEvents(response: any):Ext.direct.Event[];
    }
    export class Manager {
        static exceptions: any;
        static hasListeners: any;
        static isObservable: boolean;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static addProvider(...provider: any[]):void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static getInitialConfig(name?: string):any;
        static getProvider(id: any):void;
        static hasListener(eventName: string):boolean;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static removeProvider(provider: any):Ext.direct.Provider;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class PollingProvider extends Ext.direct.JsonProvider {
        baseParams: any;
        interval: number;
        url: any;
    }
    export class Provider extends Ext.Base {
        id: string;
        listeners: any;
        relayedEvents: string[];
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
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
        enableBuffer: any;
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
    export class AbstractElement extends Ext.Base {
        defaultUnit: string;
        dom: HTMLElement;
        id: string;
        static ASCLASS: number;
        static DISPLAY: number;
        static OFFSETS: number;
        static VISIBILITY: number;
        constructor(element: any, forceNew: any);
        addCls(className: any):Ext.dom.Element;
        appendChild(el: any, returnDom?: boolean):Ext.dom.AbstractElement;
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
        getAttribute(name: string, namespace?: string):string;
        getBorderWidth(side: string):number;
        getById(id: string, asDom?: boolean):void;
        getHTML():void;
        getHeight(contentHeight?: boolean):number;
        getMargin(sides?: string):any;
        getPadding(side: string):number;
        getSize(contentSize?: boolean):any;
        getStyle(property: any, inline?: boolean):any;
        getValue(asNumber: boolean):any;
        getViewSize():any;
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
        serializeForm(form: any):string;
        set(o: any, useSet?: boolean):Ext.dom.Element;
        setHTML(html: string):Ext.dom.Element;
        setHeight(height: any):Ext.dom.Element;
        setSize(width: any, height: any):Ext.dom.Element;
        setStyle(property: any, value?: string):Ext.dom.Element;
        setVisibilityMode(mode: any):Ext.dom.AbstractElement;
        setVisible(visible: boolean, animate?: any):Ext.dom.Element;
        setWidth(width: any):Ext.dom.Element;
        show(animate?: any):Ext.dom.Element;
        toggleCls(className: string):Ext.dom.Element;
        unmask():void;
        up(selector: string, limit?: any, returnDom?: boolean):Ext.dom.Element;
        update(html: string):Ext.dom.Element;
        wrap(config?: any, returnDom?: boolean, selector?: string):any;
        static fly(dom: any, named?: string):Ext.dom.Element.Fly;
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
        clear(removeDom?: boolean):void;
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
        slice(start?: number, end?: number):HTMLElement[];
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
        animate(config: any):Ext.dom.Element;
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
        fadeIn(options?: any):Ext.dom.Element;
        fadeOut(options?: any):Ext.dom.Element;
        focus(defer?: number):Ext.dom.Element;
        focusable():boolean;
        frame(color?: string, count?: number, options?: any):Ext.dom.Element;
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
        getPositioning(autoPx?: boolean):any;
        getRight(local: boolean):number;
        getScroll():any;
        getScrollLeft():number;
        getScrollTop():number;
        getStyleSize():any;
        getTextWidth(text: string, min?: number, max?: number):number;
        getTop(local: boolean):number;
        getX():number;
        getXY():any[];
        getY():number;
        ghost(anchor?: string, options?: any):Ext.dom.Element;
        highlight(color?: string, options?: any):Ext.dom.Element;
        hover(overFn: Function, outFn: Function, scope?: any, options?: any):Ext.dom.Element;
        initDD(group: string, config: any, overrides: any):Ext.dd.DD;
        initDDProxy(group: string, config: any, overrides: any):Ext.dd.DDProxy;
        initDDTarget(group: string, config: any, overrides: any):Ext.dd.DDTarget;
        isBorderBox():boolean;
        isDisplayed():boolean;
        isFocusable(asFocusEl: any):boolean;
        isMasked():boolean;
        isScrollable():boolean;
        isVisible(deep?: boolean):boolean;
        load(options: any):Ext.dom.Element;
        monitorMouseLeave(delay: number, handler: Function, scope?: any):any;
        moveTo(x: number, y: number, animate?: any):Ext.dom.Element;
        needsTabIndex():void;
        on(eventName: string, fn: Function, scope?: any, options?: any):Ext.dom.Element;
        pause(seconds: number):Ext.dom.Element;
        position(pos?: string, zIndex?: number, x?: number, y?: number):void;
        puff(options?: any):Ext.dom.Element;
        purgeAllListeners():Ext.dom.Element;
        relayEvent(eventName: string, observable: any):void;
        removeAllListeners():Ext.dom.Element;
        removeListener(eventName: string, fn: Function, scope: any):Ext.dom.Element;
        scale(width: number, height: number, options?: any):Ext.dom.Element;
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
        setPositioning(posCfg: any):Ext.dom.Element;
        setRight(right: any):Ext.dom.Element;
        setScrollLeft(left: number):Ext.dom.Element;
        setScrollTop(top: number):Ext.dom.Element;
        setTop(top: any):Ext.dom.Element;
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
    }
    export class Helper extends Ext.dom.AbstractHelper {
        useDom: boolean;
        createDom(o: any):HTMLElement;
        createHtml(spec: any):string;
        createTemplate(o: any):Ext.Template;
    }
    export class Layer extends Ext.dom.Element {
        cls: string;
        constrain: boolean;
        dh: any;
        hideMode: string;
        shadow: any;
        shadowOffset: number;
        shim: boolean;
        useDisplay: boolean;
        visibilityCls: string;
        zindex: number;
        constructor(config?: any, existingEl?: any);
        setZIndex(zindex: number):Ext.dom.Layer;
    }
    export class Query {
        static matchers: any;
        static operators: any;
        static pseudos: any;
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
        static toHex(color: any):string;
    }
    export class Component extends Ext.Component {
        autoSize: boolean;
        enginePriority: string[];
        gradients: any[];
        items: Ext.draw.Sprite[];
        viewBox: boolean;
        surface: Ext.draw.Surface;
        constructor(config: any);
    }
    export class CompositeSprite extends Ext.util.MixedCollection {
        constructor(config: any);
        addCls(cls: string):void;
        animate(config: any):any;
        destroy():void;
        getActiveAnimation():any;
        getBBox():any;
        hasActiveFx():any;
        hide(redraw: boolean):Ext.draw.CompositeSprite;
        redraw():void;
        removeCls(cls: string):void;
        sequenceFx():any;
        setAttributes(attrs: any, redraw: boolean):Ext.draw.CompositeSprite;
        setStyle(style: string):void;
        show(redraw: boolean):Ext.draw.CompositeSprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        syncFx():any;
    }
    export class Draw {
        static getInitialConfig(name?: string):any;
        static snapEndsByDate(from: Date, to: Date, stepsMax: number, lockEnds: boolean):any;
        static snapEndsByDateAndStep(from: Date, to: Date, step: any[], lockEnds: boolean):any;
    }
    export class Matrix extends Ext.Base {
        constructor(a: any, b: any, c: any, d: any, e: any, f: any);
    }
    export class Sprite extends Ext.Base {
        draggable: boolean;
        fill: string;
        font: string;
        group: any;
        height: number;
        listeners: any;
        opacity: number;
        path: string;
        radius: number;
        radiusX: number;
        radiusY: number;
        src: string;
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
        addCls(className: any):Ext.draw.Sprite;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        animate(config: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getActiveAnimation():any;
        getBBox():any;
        hasActiveFx():any;
        hasListener(eventName: string):boolean;
        hide(redraw: boolean):Ext.draw.Sprite;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        redraw():Ext.draw.Sprite;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        remove():boolean;
        removeCls(className: any):Ext.draw.Sprite;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        sequenceFx():any;
        setAttributes(attrs: any, redraw: boolean):Ext.draw.Sprite;
        setStyle(property: any, value?: string):Ext.draw.Sprite;
        show(redraw: boolean):Ext.draw.Sprite;
        stopAnimation():Ext.dom.Element;
        stopFx():Ext.dom.Element;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        syncFx():any;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class SpriteDD extends Ext.dd.DragSource {
        constructor(sprite: any, cfg: any);
    }
    export class Surface extends Ext.Base {
        items: Ext.draw.Sprite[];
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(...args: any[]):any;
        addCls(sprite: any, className: any):void;
        addEvents(...eventNames: any[]):void;
        addGradient(gradient: any):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getGroup(id: string):any;
        getId():void;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        remove(sprite: Ext.draw.Sprite, destroySprite: boolean):void;
        removeAll(destroySprites: boolean):void;
        removeCls(sprite: any, className: any):void;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        setSize(w: number, h: number):void;
        setStyle(sprite: any, styles: any):void;
        setText(sprite: any, text: string):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
        static save(surface: Ext.draw.Surface, config?: any):any;
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
        static defaultUrl: string;
        static heightParam: string;
        static supportedTypes: any[];
        static svgParam: string;
        static typeParam: string;
        static widthParam: string;
        static generate(surface: Ext.draw.Surface, config?: any):boolean;
        static getInitialConfig(name?: string):any;
    }
    export class Svg extends Ext.draw.Surface {
        constructor(config?: any);
        applyZIndex(sprite: Ext.draw.Sprite):void;
        getRegion():Ext.util.Region;
        hasCls(sprite: Ext.draw.Sprite, className: string):boolean;
    }
    export class SvgExporter {
        static generate(surface: Ext.draw.Surface, config?: any):string;
        static getInitialConfig(name?: string):any;
    }
    export class Vml extends Ext.draw.Surface {
        constructor(config?: any);
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
        backgroundColor: string;
        expressInstall: boolean;
        flashAttributes: any;
        flashParams: any;
        flashVars: any;
        flashVersion: string;
        swfHeight: any;
        swfWidth: any;
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
        paramOrder: any;
        paramsAsHash: boolean;
        reader: any;
        standardSubmit: boolean;
        timeout: number;
        trackResetOnLoad: boolean;
        url: string;
        waitMsgTarget: any;
        waitTitle: string;
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
        columns: any;
        submitValue: boolean;
        validateOnChange: boolean;
        value: any;
        vertical: boolean;
        isFormField: boolean;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: any):void;
        beforeReset():void;
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
        transformOriginalValue(value: any):any;
        validate():boolean;
    }
    export class CheckboxManager {
        static hasListeners: any;
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):any;
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
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static sortBy(sorterFn: Function):void;
        static sortByKey(direction?: string, fn?: Function):void;
        static sum(property: string, root?: string, start?: number, end?: number):number;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
        static updateKey(oldKey: any, newKey: any):void;
    }
    export class FieldAncestor extends Ext.Base {
        fieldDefaults: any;
        initFieldAncestor():void;
        onFieldErrorChange(field: Ext.form.Labelable, error: string):void;
        onFieldValidityChange(field: Ext.form.field.Field, valid: boolean):void;
    }
    export class FieldContainer extends Ext.container.Container {
        activeError: string;
        activeErrorsTpl: any;
        afterBodyEl: any;
        afterLabelTextTpl: any;
        afterLabelTpl: any;
        afterSubTpl: any;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: any;
        beforeLabelTextTpl: any;
        beforeLabelTpl: any;
        beforeSubTpl: any;
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
        labelAttrTpl: any;
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
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        constructor(config: any);
        getActiveError():string;
        getActiveErrors():string[];
        getCombinedErrors(invalidFields: Ext.form.field.Field[]):string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelWidth():number;
        getLabelableRenderData():any;
        getSubTplMarkup():string;
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
    export class Labelable extends Ext.Base {
        activeError: string;
        activeErrorsTpl: any;
        afterBodyEl: any;
        afterLabelTextTpl: any;
        afterLabelTpl: any;
        afterSubTpl: any;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: any;
        beforeLabelTextTpl: any;
        beforeLabelTpl: any;
        beforeSubTpl: any;
        clearCls: string;
        errorMsgCls: string;
        fieldBodyCls: string;
        fieldLabel: string;
        formItemCls: string;
        hideEmptyLabel: boolean;
        hideLabel: boolean;
        invalidCls: string;
        labelAlign: string;
        labelAttrTpl: any;
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
        labelCell: Ext.dom.Element;
        labelEl: Ext.dom.Element;
        getActiveError():string;
        getActiveErrors():string[];
        getFieldLabel():string;
        getInputId():string;
        getLabelWidth():number;
        getLabelableRenderData():any;
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
    }
    export class Panel extends Ext.panel.Panel {
        fieldDefaults: any;
        pollForChanges: boolean;
        pollInterval: number;
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
        static isMixedCollection: boolean;
        static isObservable: boolean;
        static isSortable: boolean;
        static sorters: Ext.util.MixedCollection;
        static add(key: any, obj?: any):any;
        static addAll(objs: any):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static clear():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static clone():Ext.util.MixedCollection;
        static collect(property: string, root?: string, allowBlank?: boolean):any[];
        static contains(o: any):boolean;
        static containsKey(key: string):boolean;
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
        static getCount():number;
        static getInitialConfig(name?: string):any;
        static getKey(item: any):any;
        static getRange(startIndex?: number, endIndex?: number):any[];
        static hasListener(eventName: string):boolean;
        static indexOf(o: any):number;
        static indexOfKey(key: string):number;
        static initSortable():void;
        static insert(index: number, key: any, o?: any):any;
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
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static sort(sorters?: any, direction?: string):Ext.util.Sorter[];
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
        activeErrorsTpl: any;
        afterBodyEl: any;
        afterLabelTextTpl: any;
        afterLabelTpl: any;
        afterSubTpl: any;
        autoFitErrors: boolean;
        baseBodyCls: string;
        beforeBodyEl: any;
        beforeLabelTextTpl: any;
        beforeLabelTpl: any;
        beforeSubTpl: any;
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
        inputAttrTpl: any;
        inputId: string;
        inputType: string;
        invalidCls: string;
        invalidText: string;
        labelAlign: string;
        labelAttrTpl: any;
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
        getLabelWidth():number;
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
        transformOriginalValue(value: any):any;
        transformRawValue(value: any):any;
        trimLabelSeparator():string;
        unsetActiveError():void;
        validate():boolean;
        validateValue(value: any):boolean;
        valueToRaw(value: any):any;
    }
    export class Checkbox extends Ext.form.field.Base {
        afterBoxLabelTextTpl: any;
        afterBoxLabelTpl: any;
        beforeBoxLabelTextTpl: any;
        beforeBoxLabelTpl: any;
        boxLabel: string;
        boxLabelAlign: string;
        boxLabelAttrTpl: any;
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
        autoSelect: boolean;
        caseSensitive: boolean;
        defaultListConfig: any;
        delimiter: string;
        displayField: string;
        enableRegEx: boolean;
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
        store: any;
        transform: any;
        triggerAction: string;
        typeAhead: boolean;
        typeAheadDelay: number;
        valueField: string;
        valueNotFoundText: string;
        lastQuery: string;
        constructor(config: any);
        afterQuery(queryPlan: any):void;
        beforeQuery(queryPlan: any):void;
        bindStore(store?: any):void;
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
        altFormats: string;
        disabledDates: string[];
        disabledDatesText: string;
        disabledDays: number[];
        disabledDaysText: string;
        format: string;
        maxText: string;
        maxValue: any;
        minText: string;
        minValue: any;
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
        value: any;
        isFormField: boolean;
        originalValue: any;
        batchChanges(fn: any):void;
        beforeReset():void;
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
        transformOriginalValue(value: any):any;
        validate():boolean;
    }
    export class File extends Ext.form.field.Trigger {
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
        afterIFrameTpl: any;
        afterTextAreaTpl: any;
        beforeIFrameTpl: any;
        beforeTextAreaTpl: any;
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
        iframeAttrTpl: any;
        name: string;
        submitValue: boolean;
        validateOnChange: boolean;
        value: any;
        buttonTips: any;
        isFormField: boolean;
        originalValue: any;
        constructor(config: any);
        batchChanges(fn: any):void;
        beforeReset():void;
        checkChange():void;
        checkDirty():void;
        cleanHtml(html: string):string;
        clearInvalid():void;
        createToolbar(editor: Ext.form.field.HtmlEditor):void;
        execCmd(cmd: string, value?: any):void;
        extractFileInput():HTMLElement;
        getDocMarkup():void;
        getErrors(value: any):string[];
        getModelData():any;
        getSubmitData():any;
        getToolbar():Ext.toolbar.Toolbar;
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
        setValue(value: any):Ext.form.field.Field;
        syncValue():void;
        toggleSourceEdit(sourceEditMode?: boolean):void;
        transformOriginalValue(value: any):any;
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
        allowOnlyWhitespace: boolean;
        blankText: string;
        disableKeyFilter: boolean;
        emptyCls: string;
        emptyText: string;
        enableKeyEvents: boolean;
        enforceMaxLength: boolean;
        grow: boolean;
        growAppend: string;
        growMax: number;
        growMin: number;
        maskRe: RegExp;
        maxLength: number;
        maxLengthText: string;
        minLength: number;
        minLengthText: string;
        regex: RegExp;
        regexText: string;
        requiredCls: string;
        selectOnFocus: boolean;
        size: number;
        stripCharsRe: RegExp;
        validateBlank: boolean;
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
        altFormats: string;
        format: string;
        increment: number;
        maxText: string;
        maxValue: any;
        minText: string;
        minValue: any;
        pickerMaxHeight: number;
        snapToIncrement: boolean;
        submitFormat: string;
        constructor(config: any);
        setMaxValue(value: any):void;
        setMinValue(value: any):void;
    }
    export class Trigger extends Ext.form.field.Text {
        editable: boolean;
        hideTrigger: boolean;
        repeatTriggerClick: boolean;
        triggerBaseCls: string;
        triggerCls: string;
        triggerNoEditCls: string;
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
        static getInitialConfig(name?: string):any;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        end():void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class CubicBezier {
        static getInitialConfig(name?: string):any;
    }
    export class Easing {
    }
    export class Manager {
        static addAnim(anim: Ext.fx.Anim):void;
        static getInitialConfig(name?: string):any;
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
        constructor(headerCt: any, secondHeaderCt: any);
        getHeaderAtIndex(index: number):Ext.grid.column.Column;
        getHeaderById(id: string):Ext.grid.column.Column;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getVisibleHeaderClosestToIndex(index: number):void;
    }
    export class Panel extends Ext.panel.Table {
        constructor(config: any);
        reconfigure(store?: Ext.data.Store, columns?: any[]):void;
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
        disableAction(index: any, silent?: boolean):void;
        enableAction(index: any, silent?: boolean):void;
    }
    export class Boolean extends Ext.grid.column.Column {
        falseText: string;
        trueText: string;
        undefinedText: string;
        constructor(config: any);
    }
    export class CheckColumn extends Ext.grid.column.Column {
        stopSelection: boolean;
        constructor();
    }
    export class Column extends Ext.grid.header.Container {
        align: string;
        columns: any[];
        dataIndex: string;
        editRenderer: Function;
        editor: any;
        emptyCellText: string;
        field: any;
        groupable: boolean;
        header: string;
        hideable: boolean;
        lockable: boolean;
        locked: boolean;
        menuDisabled: boolean;
        menuText: string;
        renderer: any;
        scope: any;
        tdCls: string;
        text: string;
        tooltip: string;
        tooltipType: string;
        isColumn: boolean;
        isHeader: boolean;
        textEl: Ext.dom.Element;
        triggerEl: Ext.dom.Element;
        constructor(config: any);
        autoSize(The: any):void;
        defaultRenderer():void;
        getEditor(record: any, defaultField: any):Ext.form.field.Field;
        getIndex():number;
        getSortParam():string;
        getVisibleIndex():number;
        isHideable():void;
        isLockable():void;
        setEditor(field: any):void;
        setText(text: string):void;
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
        groupHeaderTpl: any;
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
        constructor(config: any);
        getAdditionalData(data: any, idx: number, record: Ext.data.Model, orig: any):void;
    }
    export class RowWrap extends Ext.grid.feature.Feature {
        constructor(config: any);
    }
    export class Summary extends Ext.grid.feature.AbstractSummary {
        dock: string;
        constructor(config: any);
    }
}
declare module Ext.grid.header {
    export class Container extends Ext.container.Container {
        defaultWidth: number;
        enableColumnHide: boolean;
        sealed: boolean;
        sortable: boolean;
        isGroupHeader: boolean;
        constructor(config: any);
        getColumnCount():void;
        getColumnMenu(headerContainer: any):void;
        getFullWidth():void;
        getGridColumns(inResult: any, hiddenAncestor: any):any[];
        getHeaderAtIndex(index: number):void;
        getHeaderIndex(header: Ext.grid.column.Column):number;
        getMenuItems():any[];
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
        lockedGridConfig: any;
        lockedViewConfig: any;
        normalGridConfig: any;
        normalViewConfig: any;
        scrollDelta: number;
        subGridXType: string;
        syncRowHeight: boolean;
        syncRowHeights():void;
    }
    export class View extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isLockingView: boolean;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
}
declare module Ext.grid.plugin {
    export class BufferedRenderer extends Ext.AbstractPlugin {
        leadingBufferZone: number;
        numFromEdge: number;
        percentageFromEdge: number;
        scrollToLoadBuffer: number;
        synchronousRender: boolean;
        trailingBufferZone: number;
        variableRowHeight: boolean;
        position: number;
        constructor(config?: any);
        scrollTo(recordIdx: number, doSelect: boolean, callback: (recordIdx: number, record: Ext.data.Model) => any, scope: any):void;
    }
    export class CellEditing extends Ext.grid.plugin.Editing {
        constructor(config: any);
        startEditByPosition(position: any):void;
    }
    export class DragDrop extends Ext.AbstractPlugin {
        containerScroll: any;
        ddGroup: string;
        dragGroup: string;
        dragText: string;
        dropGroup: string;
        enableDrag: boolean;
        enableDrop: boolean;
        constructor(config?: any);
    }
    export class Editing extends Ext.AbstractPlugin {
        clicksToEdit: number;
        listeners: any;
        triggerEvent: string;
        editing: boolean;
        hasListeners: any;
        isObservable: boolean;
        constructor(config: any);
        addEvents(...eventNames: any[]):void;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        startEdit(record: any, columnHeader: any):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class HeaderReorderer extends Ext.AbstractPlugin {
        constructor(config?: any);
    }
    export class HeaderResizer extends Ext.AbstractPlugin {
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
    export class RowExpander extends Ext.AbstractPlugin {
        expandOnDblClick: boolean;
        expandOnEnter: boolean;
        selectRowOnExpand: boolean;
        constructor(config?: any);
    }
}
declare module Ext.grid.property {
    export class Grid extends Ext.grid.Panel {
        customEditors: any;
        customRenderers: any;
        inferTypes: boolean;
        nameColumnWidth: any;
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
        invalidate(components: any, full: boolean):void;
        removeEl(parent: Ext.layout.ContextItem, el: Ext.dom.Element):void;
        resetLayout(layout: any, ownerContext: any, firstTime: any):void;
        run():boolean;
        runCycle():boolean;
        setItemSize(items: any, width: number, height: number):void;
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
    export class Button extends Ext.layout.component.Auto {
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
    export class Draw extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class FieldSet extends Ext.layout.component.Body {
        constructor(config: any);
    }
    export class ProgressBar extends Ext.layout.component.Auto {
        constructor(config: any);
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
    export class HtmlEditor extends Ext.layout.component.field.FieldContainer {
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
        split: boolean;
        splitterResize: boolean;
        constructor();
    }
    export class Box extends Ext.layout.container.Container {
        defaultMargins: any;
        flex: number;
        pack: string;
        padding: string;
        stretchMaxPartner: any;
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
        setActiveItem(newCard: any):Ext.Component;
    }
    export class CheckboxGroup extends Ext.layout.container.Container {
        autoFlex: boolean;
        constructor();
    }
    export class Column extends Ext.layout.container.Auto {
        constructor();
    }
    export class Container extends Ext.layout.Layout {
        itemCls: string;
        overflowPadderEl: Ext.dom.Element;
        constructor();
        addChildEls():void;
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
    export class Form extends Ext.layout.container.Container {
        getScrollRangeFlags: any;
        constructor();
        calculateOverflow(ownerContext: Ext.layout.ContextItem, containerSize: any, dimensions: number):void;
        doRenderPadder(out: any, renderData: any):void;
        getOverflowXStyle(ownerContext: Ext.layout.ContextItem):string;
        getOverflowYStyle(ownerContext: Ext.layout.ContextItem):string;
    }
    export class HBox extends Ext.layout.container.Box {
        align: string;
        constrainAlign: boolean;
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
        constrainAlign: boolean;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getScrollPosition():number;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        scrollToItem(item: any, animate: boolean):void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
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
        glyph: any;
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
        menu: any;
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
    }
    export class KeyNav extends Ext.util.KeyNav {
        constructor(config: any);
    }
    export class Manager {
        static get(menu: any):Ext.menu.Menu;
        static getInitialConfig(name?: string):any;
        static hideAll():boolean;
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
declare module Ext.panel {
    export class AbstractPanel extends Ext.container.Container {
        bodyBorder: boolean;
        bodyCls: any;
        bodyPadding: any;
        bodyStyle: any;
        defaultDockWeights: any;
        dockedItems: any;
        shrinkWrapDock: any;
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
        constructor(panel: any, cfg: any);
    }
    export class Header extends Ext.container.Container {
        glyph: any;
        icon: string;
        iconCls: string;
        title: string;
        titleAlign: string;
        titlePosition: number;
        isHeader: boolean;
        constructor(config: any);
        addTool(tool: any):void;
        getTools():Ext.panel.Tool[];
        setGlyph(glyph: any):void;
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
        collapseDirection: string;
        collapseFirst: boolean;
        collapseMode: string;
        collapsed: boolean;
        collapsedCls: string;
        collapsible: boolean;
        constrainHeader: boolean;
        fbar: any;
        floatable: boolean;
        frameHeader: boolean;
        glyph: any;
        header: any;
        headerOverCls: string;
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
        simpleDrag: boolean;
        tbar: any;
        title: string;
        titleAlign: string;
        titleCollapse: boolean;
        tools: any;
        dd: any;
        constructor(config: any);
        addTool(tools: any):void;
        afterCollapse(animated: boolean):void;
        afterExpand(animated: boolean):void;
        close():void;
        collapse(direction?: string, animate?: boolean):Ext.panel.Panel;
        convertCollapseDir(collapseDir: any):void;
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
        columnLines: boolean;
        columns: any;
        deferRowRender: boolean;
        disableSelection: boolean;
        emptyText: string;
        enableColumnHide: boolean;
        enableColumnMove: boolean;
        enableColumnResize: boolean;
        enableLocking: boolean;
        features: any;
        forceFit: boolean;
        hideHeaders: boolean;
        lockedGridConfig: any;
        lockedViewConfig: any;
        multiSelect: boolean;
        normalGridConfig: any;
        normalViewConfig: any;
        rowLines: boolean;
        scroll: any;
        scrollDelta: number;
        sealedColumns: boolean;
        selModel: any;
        selType: string;
        simpleSelect: boolean;
        sortableColumns: boolean;
        store: Ext.data.Store;
        subGridXType: string;
        syncRowHeight: boolean;
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
        syncRowHeights():void;
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
        static getInitialConfig(name?: string):any;
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
        focusOnShow: boolean;
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
        cancelText: string;
        okText: string;
        selectedCls: string;
        showButtons: boolean;
        value: any;
        constructor(config: any);
        adjustYear(offset?: number):void;
        getValue():number[];
        hasSelection():boolean;
        setValue(value: any):Ext.picker.Month;
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
        constrainTo: any;
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
        target: any;
        transparent: boolean;
        width: number;
        widthIncrement: number;
        el: Ext.dom.Element;
        hasListeners: any;
        isObservable: boolean;
        originalTarget: any;
        resizeTracker: Ext.resizer.ResizeTracker;
        addEvents(...eventNames: any[]):void;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resizeTo(width: number, height: number):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Splitter extends Ext.Component {
        collapseOnDblClick: boolean;
        collapseTarget: any;
        collapsedCls: string;
        collapsible: boolean;
        defaultSplitMax: number;
        defaultSplitMin: number;
        performCollapse: boolean;
        size: number;
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
        setCurrentPosition(position: any, suppressEvent: boolean):void;
    }
    export class CheckboxModel extends Ext.selection.RowModel {
        checkOnly: boolean;
        checkSelector: string;
        injectCheckbox: any;
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
        mode: any;
        pruneRemoved: boolean;
        toggleOnClick: boolean;
        selected: Ext.util.MixedCollection;
        constructor(cfg: any);
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
        enableKeyNav: boolean;
        ignoreRightMouseSelection: boolean;
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
        clickToChange: boolean;
        constrainThumbs: boolean;
        decimalPrecision: any;
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
        slider: any;
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
        static getInitialConfig(name?: string):any;
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
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        set(name: string, value: any):void;
        suspendEvent(...eventName: string[]):void;
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
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        addStateEvents(events: any):void;
        applyState(state: any):void;
        clearListeners():void;
        clearManagedListeners():void;
        destroy():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        getState():any;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        savePropToState(propName: string, state: any, stateName?: string):boolean;
        savePropsToState(propNames: any, state: any):any;
        saveState():void;
        suspendEvent(...eventName: string[]):void;
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
        activeTab: any;
        deferredRender: boolean;
        itemCls: string;
        maxTabWidth: number;
        minTabWidth: number;
        plain: boolean;
        removePanelHeader: boolean;
        tabPosition: any;
        tabBar: any;
        constructor(config: any);
        getActiveTab():Ext.Component;
        getTabBar():Ext.tab.Bar;
        setActiveTab(card: any):Ext.Component;
    }
    export class Tab extends Ext.button.Button {
        activeCls: string;
        closableCls: string;
        closeText: string;
        active: boolean;
        closable: any;
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
        cancelShow(el: any):void;
        register(config: any):void;
        unregister(el: any):void;
    }
    export class QuickTipManager {
        static destroy():void;
        static disable():void;
        static enable():void;
        static getInitialConfig(name?: string):any;
        static getQuickTip():Ext.tip.QuickTip;
        static init(autoRender?: boolean, config?: any):void;
        static isEnabled():boolean;
        static register(config: any):void;
        static tips(config: any):void;
        static unregister(el: any):void;
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
        hideDelay: number;
        mouseOffset: number[];
        showDelay: number;
        target: any;
        trackMouse: boolean;
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
        bind(store: Ext.data.Store):void;
        bindStore(store?: any):void;
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
        setText(text: string):void;
    }
    export class Toolbar extends Ext.container.Container {
        defaultButtonUI: string;
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
        collapseNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expandAll(callback?: Function, scope?: any):void;
        expandNode(record: Ext.data.Model, deep?: boolean, callback?: Function, scope?: any):void;
        expandPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        getChecked():Ext.data.NodeInterface[];
        getRootNode():Ext.data.NodeInterface;
        selectPath(path: string, field?: string, separator?: string, callback?: Function, scope?: any):void;
        setRootNode(root: any):Ext.data.NodeInterface;
    }
    export class View extends Ext.view.Table {
        rootVisible: boolean;
        isTreeView: boolean;
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
        allowContainerDrop: boolean;
        allowParentInserts: boolean;
        appendOnly: boolean;
        expandDelay: number;
        constructor(config: any);
    }
}
declare module Ext.tree.plugin {
    export class TreeViewDragDrop extends Ext.AbstractPlugin {
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
        addEvents(...eventNames: any[]):void;
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
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
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
    export class Bindable extends Ext.Base {
        bindStore(store?: any):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        getStore():Ext.data.AbstractStore;
        getStoreListeners(store: Ext.data.Store):any;
        onBindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        onUnbindStore(store: Ext.data.AbstractStore, initial: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class CSS {
        static createRule(styleSheet: CSSStyleSheet, selector: string, property: string):CSSStyleRule;
        static createStyleSheet(cssText: string, id: string):CSSStyleSheet;
        static getInitialConfig(name?: string):any;
        static getRule(selector: any, refreshCache: boolean):CSSStyleRule;
        static getRules(refreshCache: boolean):any;
        static refreshCache():any;
        static removeStyleSheet(id: string):void;
        static swapStyleSheet(id: string, url: string):void;
        static updateRule(selector: any, property: string, value: string):boolean;
    }
    export class ClickRepeater extends Ext.util.Observable {
        accelerate: boolean;
        delay: number;
        el: any;
        interval: number;
        pressedCls: string;
        preventDefault: boolean;
        stopDefault: boolean;
        constructor(el: any, config?: any);
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
        static getInitialConfig(name?: string):any;
        static set(name: string, value: any, expires?: any, path?: string, domain?: string, secure?: boolean):void;
    }
    export class DelayedTask {
        id: number;
        constructor(fn?: Function, scope?: any, args?: any[], cancelOnDelay?: boolean);
        cancel():void;
        delay(newDelay: number, newFn?: Function, newScope?: any, newArgs?: any[]):void;
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
        anyMatch: boolean;
        caseSensitive: boolean;
        exactMatch: boolean;
        filterFn: Function;
        id: string;
        operator: string;
        property: string;
        root: string;
        value: any;
        disabled: boolean;
        constructor(config?: any);
        setFilterFn(filterFn: (value: any) => any):void;
        setValue(value: any):void;
        static createFilterFn(filters: Ext.util.Filter[]):Function;
    }
    export class Floating extends Ext.Base {
        constrain: boolean;
        fixed: boolean;
        focusOnToFront: boolean;
        shadow: any;
        shadowOffset: number;
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
        static attributes(attributes: any):void;
        static capitalize(string: string):string;
        static currency(value: any, sign?: string, decimals?: number, end?: boolean):string;
        static date(value: any, format?: string):string;
        static dateRenderer(format: string):Function;
        static defaultValue(value: any, defaultValue?: string):string;
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
        keyFn: Function;
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        constructor(config?: any);
        add(key: any, o?: any):any;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clear(initial: any):Ext.util.HashMap;
        clearListeners():void;
        clearManagedListeners():void;
        clone():Ext.util.HashMap;
        contains(value: any):boolean;
        containsKey(key: string):boolean;
        each(fn: (key: string, value: number, length: number) => any, scope?: any):Ext.util.HashMap;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        get(key: string):any;
        getCount():number;
        getKey(o: any):string;
        getKeys():any[];
        getValues():any[];
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        remove(o: any):boolean;
        removeAtKey(key: string):boolean;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        replace(key: string, value: any):any;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
        suspendEvent(...eventName: string[]):void;
        suspendEvents(queueSuspended: boolean):void;
        un(eventName: string, fn: Function, scope?: any):void;
    }
    export class History {
        static fieldId: string;
        static hasListeners: any;
        static iframeId: string;
        static isObservable: boolean;
        static useTopWindow: boolean;
        static add(token: string, preventDuplicates?: boolean):void;
        static addEvents(...eventNames: any[]):void;
        static addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static back():void;
        static clearListeners():void;
        static clearManagedListeners():void;
        static enableBubble(eventNames: any):void;
        static fireEvent(eventName: string, ...args: any[]):boolean;
        static fireEventArgs(eventName: string, args: any[]):boolean;
        static forward():void;
        static getInitialConfig(name?: string):any;
        static getToken():string;
        static hasListener(eventName: string):boolean;
        static init(onReady?: Function, scope?: any):void;
        static mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        static mun(item: any, ename: any, fn?: Function, scope?: any):void;
        static on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        static relayEvents(origin: any, events: string[], prefix?: string):any;
        static removeListener(eventName: string, fn: Function, scope?: any):void;
        static removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        static resumeEvent(...eventName: string[]):void;
        static resumeEvents():void;
        static suspendEvent(...eventName: string[]):void;
        static suspendEvents(queueSuspended: boolean):void;
        static un(eventName: string, fn: Function, scope?: any):void;
    }
    export class Inflector {
        static classify(word: string):string;
        static clearPlurals():void;
        static clearSingulars():void;
        static getInitialConfig(name?: string):any;
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
        ignoreInputFields: boolean;
        processEvent: Function;
        processEventScope: any;
        target: any;
        constructor(config: any);
        addBinding(binding: any):void;
        destroy(removeTarget: boolean):void;
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
        target: any;
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
        constructor(target: any, props: any);
        capture(props: any, target: any):void;
        remove(props: any):void;
        restore(props: any, clear: boolean, target: any):void;
        restoreAll(clear: boolean, target: any):void;
    }
    export class MixedCollection extends Ext.util.AbstractMixedCollection {
        defaultSortDirection: string;
        sortRoot: string;
        isSortable: boolean;
        sorters: any;
        constructor(config: any);
        findInsertionIndex(newItem: any, sorterFn?: Function):number;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        initSortable():void;
        reorder(mapping: any):void;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        sortBy(sorterFn: Function):void;
        sortByKey(direction?: string, fn?: Function):void;
    }
    export class Observable extends Ext.Base {
        listeners: any;
        hasListeners: any;
        isObservable: boolean;
        addEvents(...eventNames: any[]):void;
        addListener(eventName: any, fn?: Function, scope?: any, options?: any):any;
        addManagedListener(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        clearListeners():void;
        clearManagedListeners():void;
        enableBubble(eventNames: any):void;
        fireEvent(eventName: string, ...args: any[]):boolean;
        fireEventArgs(eventName: string, args: any[]):boolean;
        hasListener(eventName: string):boolean;
        mon(item: any, ename: any, fn?: Function, scope?: any, options?: any):any;
        mun(item: any, ename: any, fn?: Function, scope?: any):void;
        on(eventName: any, fn?: Function, scope?: any, options?: any):any;
        relayEvents(origin: any, events: string[], prefix?: string):any;
        removeListener(eventName: string, fn: Function, scope?: any):void;
        removeManagedListener(item: any, ename: any, fn?: Function, scope?: any):void;
        resumeEvent(...eventName: string[]):void;
        resumeEvents():void;
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
    export class Point extends Ext.util.Region {
        constructor(x: number, y: number);
        isContainedBy(region: any):boolean;
        isWithin(p: any, threshold: any):boolean;
        roundedEquals(p: any):boolean;
        toString():string;
        translate(x: any, y: number):Ext.util.Region;
        static fromEvent(e: any):Ext.util.Point;
    }
    export class Positionable extends Ext.Base {
        alignTo(element: any, position?: string, offsets?: number[], animate?: any):Ext.util.Positionable;
        anchorTo(element: any, position?: string, offsets?: number[], animate?: any, monitorScroll?: any, callback?: Function):Ext.util.Positionable;
        calculateConstrainedPosition(constrainTo?: any, proposedPosition?: number[], local?: boolean, proposedSize?: number[]):number[];
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
        move(direction: string, distance: number, animate?: any):void;
        removeAnchor():Ext.util.Positionable;
        setBox(box: any, animate?: any):Ext.util.Positionable;
        setLocalX(x: number):Ext.util.Positionable;
        setLocalXY(x: any, y?: number):Ext.util.Positionable;
        setLocalY(y: number):Ext.util.Positionable;
        setRegion(region: Ext.util.Region, animate?: any):Ext.util.Positionable;
        setX(The: number, animate?: any):Ext.util.Positionable;
        setXY(pos: number[], animate?: any):Ext.util.Positionable;
        setY(The: number, animate?: any):Ext.util.Positionable;
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
        doAutoRender():void;
        ensureAttachedToBody(runLayout?: boolean):void;
        getInsertPosition(position: any):HTMLElement;
        initRenderData():any;
        onRender(parentNode: Ext.dom.Element, containerIdx: number):void;
        render(container?: any, position?: any):void;
    }
    export class Sortable extends Ext.Base {
        defaultSortDirection: string;
        sortRoot: string;
        isSortable: boolean;
        sorters: any;
        generateComparator():void;
        getFirstSorter():Ext.util.Sorter;
        initSortable():void;
        sort(sorters?: any, direction?: string):Ext.util.Sorter[];
        static createComparator(sorters: Ext.util.Sorter[]):Function;
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
    export class TaskManager {
        static destroy():void;
        static getInitialConfig(name?: string):any;
        static newTask(config: any):void;
        static start(task: any):any;
        static stop(task: any):any;
        static stopAll():void;
    }
    export class TaskRunner extends Ext.Base {
        fireIdleEvent: boolean;
        interval: number;
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
        blockRefresh: boolean;
        deferEmptyText: boolean;
        deferInitialRefresh: boolean;
        disableSelection: boolean;
        emptyText: string;
        itemCls: string;
        itemSelector: string;
        itemTpl: any;
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
        trackOver: boolean;
        constructor(config: any);
        bindStore(store: Ext.data.Store):void;
        bindStoreListeners(store: Ext.data.AbstractStore):void;
        clearSelections():void;
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
        onBindStore(store: any, initial: any, propName: any):void;
        onUnbindStore(store: any):void;
        prepareData(data: any, recordIndex: number, record: Ext.data.Model):any;
        refresh():void;
        refreshNode(index: number):void;
        select(records: any, keepExisting: boolean, suppressEvent: boolean):void;
        unbindStoreListeners(store: Ext.data.AbstractStore):void;
    }
    export class BoundList extends Ext.view.View {
        displayField: string;
        pageSize: number;
        pagingToolbar: Ext.toolbar.Paging;
        constructor(config: any);
        child(selector?: any):any;
        down(selector?: any):any;
        getInnerTpl(displayField: string):string;
        query(selector?: string):Ext.Component[];
        queryBy(fn: Function, scope?: any):Ext.Component[];
        queryById(id: string):Ext.Component;
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
        enableTextSelection: boolean;
        firstCls: string;
        lastCls: string;
        markDirty: boolean;
        stripeRows: boolean;
        constructor(config: any);
        addRowCls(rowInfo: any, cls: string):void;
        autoSizeColumn(header: any):void;
        expandToFit(header: any):void;
        focusRow(row: any, delay?: any):void;
        getBodySelector():void;
        getCellSelector(header?: Ext.grid.column.Column):void;
        getColumnSizerSelector(header: any):void;
        getDataRowSelector():void;
        getFeature(id: string):Ext.grid.feature.Feature;
        getItemSelector():void;
        getNodeContainerSelector():void;
        getRowClass(record: Ext.data.Model, index: number, rowParams: any, store: Ext.data.Store):string;
        removeRowCls(rowInfo: any, cls: string):void;
        walkRecs(startRec: Ext.data.Model, distance: number):void;
        walkRows(startRow: number, distance: number):void;
    }
    export class TableLayout extends Ext.layout.component.Auto {
        constructor(config: any);
    }
    export class View extends Ext.view.AbstractView {
        mouseOverOutBuffer: number;
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
        alert(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        confirm(title: string, msg: string, fn?: Function, scope?: any):Ext.window.MessageBox;
        progress(title: string, msg: string, progressText?: string):Ext.window.MessageBox;
        prompt(title: string, msg: string, fn?: Function, scope?: any, multiline?: any, value?: string):Ext.window.MessageBox;
        updateProgress(value?: number, progressText?: string, msg?: string):Ext.window.MessageBox;
        wait(msg: string, title?: string, config?: any):Ext.window.MessageBox;
    }
    export class Window extends Ext.panel.Panel {
        animateTarget: any;
        defaultFocus: any;
        expandOnShow: boolean;
        hideShadowOnDeactivate: boolean;
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
        maximize(animate: boolean):Ext.window.Window;
        minimize():Ext.window.Window;
        restore(animate: any):Ext.window.Window;
        toggleMaximize():Ext.window.Window;
    }
}