const Chart = require('chartjs');

var sanitize = function sanitize(record) {
    var spaces = Array.prototype.slice.call(arguments, 1);
    return spaces.reduce(function (r, space) {
        return (function () {
            r[space] ? void 0 : r[space] = {};
            return r[space];
        })();
    }, record);
};
var createNode = function createNode(elementType) {
    return function () {
        var nø1 = document.createElement(elementType);
        return (function () {
            nø1.style.padding = 0;
            nø1.style.margin = 0;
            nø1.style.position = 'relative';
            return nø1;
        })();
    }.call(this);
};
var setWrapSize = function setWrapSize(wrap, wh) {
    return function () {
        var setWHø1 = function (w_, h_, x) {
            return (function () {
                x.width = w_ + 'px';
                return x.height = h_ + 'px';
            })();
        };
        var ratioø1 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var canvasø1 = wrap.firstChild;
        return (function () {
            setWHø1(wh.w * ratioø1, wh.h * ratioø1, canvasø1);
            setWHø1(wh.w, wh.h, wrap.style);
            return setWHø1(wh.w, wh.h, canvasø1.style);
        })();
    }.call(this);
};
var update = function update(type) {
    return function (wrap, _, model) {
        return (function () {
            setWrapSize(wrap, model);
            wrap.__chart ? (function () {
                wrap.__chart.clear();
                return wrap.__chart.destroy();
            })() : void 0;
            wrap.__chart = new Chart(wrap.firstChild.getContext('2d'))[type](model.data, model.options);
            return wrap;
        })();
    };
};
var render = function render(type, NativeElement) {
    return function (model) {
        return function () {
            var wrapø1 = createNode('div');
            var canvasø1 = NativeElement.createNode('canvas');
            return (function () {
                wrapø1.appendChild(canvasø1);
                setWrapSize(wrapø1, model);
                setTimeout(function () {
                    return update(type)(wrapø1, model, model);
                }, 0);
                return wrapø1;
            })();
        }.call(this);
    };
};
var showRGBA = function showRGBA(c) {
    return 'rgba(' + c._0 + ',' + c._1 + ',' + c._2 + ',' + c._3 + ')';
};
var chartRaw = function chartRaw(NativeElement) {
    return function (type, w, h, data, options) {
        return A3(NativeElement.newElement, w, h, {
            'ctor': 'Custom',
            'type': 'Chart',
            'render': render(type, NativeElement),
            'update': update(type),
            'model': {
                'w': w,
                'h': h,
                'data': data,
                'options': options
            }
        });
    };
};
var make = function make(localRuntime) {
    return function () {
        var NativeElementø1 = Elm.Native.Graphics.Element.make(localRuntime);
        var toArrayø1 = (Elm.Native.List.make(localRuntime) || 0)['toArray'];
        return (function () {
            sanitize(localRuntime, 'Native', 'Chartjs');
            return localRuntime.Native.Chartjs.values ? localRuntime.Native.Chartjs.values : localRuntime.Native.Chartjs.values = {
                'toArray': toArrayø1,
                'showRGBA': showRGBA,
                'chartRaw': F5(chartRaw(NativeElementø1))
            };
        })();
    }.call(this);
};
sanitize(Elm, 'Native', 'Chartjs');
Elm.Native.Chartjs.make = make;
Chart.defaults.global.animation = false;
