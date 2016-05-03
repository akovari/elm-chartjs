const Chart = require('chart.js');

const sanitize = function (record) {
    const spaces = Array.prototype.slice.call(arguments, 1);
    return spaces.reduce(function (r, space) {
        r[space] ? void 0 : r[space] = {};
        return r[space];
    }, record);
};

const createNode = function (elementType) {
    var n_1 = document.createElement(elementType);
    n_1.style.padding = 0;
    n_1.style.margin = 0;
    n_1.style.position = 'relative';
    return n_1;
};

const setWrapSize = function (wrap, wh) {
    const setWH_1 = function (w_, h_, x) {
        x.width = w_ + 'px';
        return x.height = h_ + 'px';
    };
    const ratio_1 = window.devicePixelRatio ? window.devicePixelRatio : 1;
    const canvas_1 = wrap.getElementsByTagName('canvas')[0];
    setWH_1(wh.w * ratio_1, wh.h * ratio_1, canvas_1);
    setWH_1(wh.w, wh.h, wrap.style);
    setWH_1(wh.w, wh.h, canvas_1.style);
};

const update = function (wrap, _, model) {
    setWrapSize(wrap, model);
    if (wrap.__chart) {
        wrap.__chart.clear();
        wrap.__chart.destroy()
    }
    wrap.__chart = new Chart(wrap.getElementsByTagName('canvas')[0].getContext('2d'), model.value).resize();
    return wrap;
};

const render = function (NativeElement) {
    return function (model) {
        const wrap_1 = createNode('div');
        const canvas_1 = NativeElement.createNode('canvas');
        wrap_1.appendChild(canvas_1);
        setWrapSize(wrap_1, model);
        setTimeout(function () {
            return update(wrap_1, model, model);
        }, 0);
        return wrap_1;
    };
};

const showRGBA = function (c) {
    return 'rgba(' + c._0 + ',' + c._1 + ',' + c._2 + ',' + c._3 + ')';
};

const chartRaw = function (NativeElement) {
    return function (w, h, value) {
        return A3(NativeElement.newElement, w, h, {
            'ctor': 'Custom',
            'type': 'Chart',
            'render': render(NativeElement),
            'update': update,
            'model': {
                'w': w,
                'h': h,
                'value': JSON.parse(value)
            }
        });
    };
};

const make = function (localRuntime) {
    const NativeElement_1 = Elm.Native.Graphics.Element.make(localRuntime);
    sanitize(localRuntime, 'Native', 'Chartjs');
    return localRuntime.Native.Chartjs.values ? localRuntime.Native.Chartjs.values : localRuntime.Native.Chartjs.values = {
        'showRGBA': showRGBA,
        'chartRaw': F3(chartRaw(NativeElement_1))
    };
};

sanitize(Elm, 'Native', 'Chartjs');
Elm.Native.Chartjs.make = make;
Chart.defaults.global.animation = false;
