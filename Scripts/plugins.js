// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

; (function (e, s) { "use strict"; var n = function () { var n = { bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows" }, o = function () { var n = /iPhone|iPad|iPod/i.test(navigator.userAgent); return n && e(s).load(function () { e("body").children().on("click", e.noop) }), n }(), t = function () { var e = document.documentElement.style; return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent) }(), i = function () { return !!s.PointerEvent }(), r = function (e, s) { var o = n.menuClass; s.cssArrows && (o += " " + n.menuArrowClass), e.toggleClass(o) }, a = function (s, o) { return s.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n.bcClass).filter(function () { return e(this).children(o.popUpSelector).hide().show().length }).removeClass(o.pathClass) }, l = function (e) { e.children("a").toggleClass(n.anchorClass) }, h = function (e) { var s = e.css("ms-touch-action"), n = e.css("touch-action"); n = n || s, n = "pan-y" === n ? "auto" : "pan-y", e.css({ "ms-touch-action": n, "touch-action": n }) }, u = function (s, n) { var r = "li:has(" + n.popUpSelector + ")"; e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f); var a = "MSPointerDown.superfish"; i && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", n, p) }, p = function (s) { var n = e(this), o = n.siblings(s.data.popUpSelector); o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))()) }, c = function () { var s = e(this), n = m(s); clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show") }, f = function () { var s = e(this), n = m(s); o ? e.proxy(d, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(d, s, n), n.delay)) }, d = function (s) { s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)()) }, v = function (e) { return e.closest("." + n.menuClass) }, m = function (e) { return v(e).data("sf-options") }; return { hide: function (s) { if (this.length) { var n = this, o = m(n); if (!o) return this; var t = o.retainPath === !0 ? o.$path : "", i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector), r = o.speedOut; s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function () { var s = e(this); o.onHide.call(s) }) } return this }, show: function () { var e = m(this); if (!e) return this; var s = this.addClass(e.hoverClass), n = s.children(e.popUpSelector); return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function () { e.onShow.call(n) }), this }, destroy: function () { return this.each(function () { var s, o = e(this), t = o.data("sf-options"); return t ? (s = o.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(o, t), l(s), h(o), o.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function (e, s) { return s.replace(/display[^;]+;?/g, "") }), t.$path.removeClass(t.hoverClass + " " + n.bcClass).addClass(t.pathClass), o.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(o), o.removeData("sf-options"), void 0) : !1 }) }, init: function (s) { return this.each(function () { var o = e(this); if (o.data("sf-options")) return !1; var t = e.extend({}, e.fn.superfish.defaults, s), i = o.find(t.popUpSelector).parent("li"); t.$path = a(o, t), o.data("sf-options", t), r(o, t), l(i), h(o), u(o, t), i.not("." + n.bcClass).superfish("hide", !0), t.onInit.call(this) }) } } }(); e.fn.superfish = function (s) { return n[s] ? n[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments) }, e.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: e.noop, onBeforeShow: e.noop, onShow: e.noop, onBeforeHide: e.noop, onHide: e.noop, onIdle: e.noop, onDestroy: e.noop } })(jQuery, window);


/** Easy As Pie Responsive Navigation Plugin - Version 1.1

 The MIT License (MIT)

 * Copyright (c) 2014 Chris Divyak

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/
(function ($) {

    $.fn.extend({

        //pass the options variable to the function
        easyPie: function (options) {


            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                icon: "<i class='icon-dropdown'><i>", //icon for mobile push menu
                navClass: "applePie",//Navigation class
                collapseClass: "pieCollapse", //class for collapsing menu on mobile
                slideTop: false //change to false if you wish to not have a scrollTo function on your menu
            }

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;

                if ($(window).width() > 767) {
                    //Call Superfish menu for nice drop-downs
                    $("." + o.navClass).superfish({ delay: 0, speed: 'fast', });
                }
                //IF WINDOW SIZE kindle
                if ($(window).width() <= 767) {
                    //IF NAV LI CONTAINS DROPDOWN, ADD PLUS SIGN
                    $("li").find('ul').addClass(o.collapseClass);
                    $("." + o.navClass + "span").remove();
                    $("ul." + o.collapseClass).siblings("a").before('<span>' + o.icon + '</span>');
                }

                //ON WINDOW RESIZE
                $(window).on('resize', function () {
                    //on resize make sure hidden nav even if wasn't hidden first time
                    $("#" + o.navID).css("display", "none");
                    if ($(window).width() <= 767) {
                        //ON CLICK SLIDETOGGLE vertical menu
                        $("." + o.navClass + " li span").off('click').on("click", function (e) {
                            e.preventDefault();
                            $(this).siblings("ul").slideToggle(200, function () {
                                $(this).parent().toggleClass("menuOpen");

                            });
                            //If slideTop equals true then slide
                            if (o.slideTop == true) {
                                navigateTo($(this));
                                return false;
                            }
                                //else, return false
                            else {
                                return false;
                            }
                        });

                        //Destroy Superfish to prevent hovering on resize
                        $("." + o.navClass).superfish('destroy');

                        //Check if span exists within li, if not, add
                        if ($("." + o.navClass + " li span").length < 1) {
                            $("." + o.navClass + " li > ul").siblings("a").before("<span>" + o.icon + "</span>");
                        }

                        //If slideToggle was open, close
                        //if ($("."+o.navClass+" ul").is(":visible")){
                        //$("."+o.navClass+" ul:first").hide();
                        //}
                        //FIX menu hide issue when nav gets to bottom of device
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                            $("." + o.navClass + " ul ul:first").show();
                        }
                    }
                    if ($(window).width() > 767) {
                        //Show nav even if slideToggle collapsed
                        $("." + o.navClass + " ul:first").show();

                        //CALL SUPERFISH ON RESIZE
                        $("." + o.navClass).superfish({ delay: 0, speed: 'fast', });
                    }
                });

                //ON CLICK SLIDETOGGLE
                $("." + o.navClass + " li span, .menubtn").off("click").on("click", function (e) {
                    e.preventDefault();

                    //remove all classes and slidetoggle


                    //Add class to open slidetoggle menu
                    $(this).siblings("ul").slideToggle(200, function (e) {
                        $(this).parent().toggleClass("menuOpen");
                    });

                    if ($("." + o.navClass + "ul:first").is(":visible")) {
                        $(".menubtn").addClass("menuOpen");
                    }
                    //If slideToggle is close, remove class
                    if ($("." + o.navClass + "ul:first").is(":hidden")) {
                        $(".menubtn").removeClass("menuOpen");
                    }
                    //If slideTop equals true then slide
                    if (o.slideTop == true) {
                        navigateTo($(this));
                        return false;
                    }
                        //else, return false
                    else {
                        return false;
                    }

                });

                //Slide to li on click
                function navigateTo(destination) {
                    $('html,body').delay(500).animate({ scrollTop: $(destination).offset().top - 48 }, 'fast');
                }
            });
        }
    });
})(jQuery);
//If the menu has a hash tag in href, slidetoggle menu
$(window).on("hashchange", function () {

    if ($(window).width() <= 767) {
        $("#nav").slideToggle(200);
    }

});

// Place holder polyfill for ie8 and bellow 
$(document).ready(function () {
    if (!Modernizr.input.placeholder) {
        var placeholders = $("input[placeholder]")
        placeholders.each(function (index, element) {
            $(element).val($(element).attr("placeholder"))
            $(element).on("focus", function () { if ($(element).val() == $(element).attr("placeholder")) { $(element).val("") } })
            $(element).on("blur", function () { if ($(element).val() == "") { $(element).val($(element).attr("placeholder")) } })
        })

    }
})

// jQuery autoComplete v1.0.7
// https://github.com/Pixabay/jQuery-autoComplete
!function(e){e.fn.autoComplete=function(t){var o=e.extend({},e.fn.autoComplete.defaults,t);return"string"==typeof t?(this.each(function(){var o=e(this);"destroy"==t&&(e(window).off("resize.autocomplete",o.updateSC),o.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"),o.data("autocomplete")?o.attr("autocomplete",o.data("autocomplete")):o.removeAttr("autocomplete"),e(o.data("sc")).remove(),o.removeData("sc").removeData("autocomplete"))}),this):this.each(function(){function t(e){var t=s.val();if(s.cache[t]=e,e.length&&t.length>=o.minChars){for(var a="",c=0;c<e.length;c++)a+=o.renderItem(e[c],t);s.sc.html(a),s.updateSC(0)}else s.sc.hide()}var s=e(this);s.sc=e('<div class="autocomplete-suggestions '+o.menuClass+'"></div>'),s.data("sc",s.sc).data("autocomplete",s.attr("autocomplete")),s.attr("autocomplete","off"),s.cache={},s.last_val="",s.updateSC=function(t,o){if(s.sc.css({top:s.offset().top+s.outerHeight(),left:s.offset().left,width:s.outerWidth()}),!t&&(s.sc.show(),s.sc.maxHeight||(s.sc.maxHeight=parseInt(s.sc.css("max-height"))),s.sc.suggestionHeight||(s.sc.suggestionHeight=e(".autocomplete-suggestion",s.sc).first().outerHeight()),s.sc.suggestionHeight))if(o){var a=s.sc.scrollTop(),c=o.offset().top-s.sc.offset().top;c+s.sc.suggestionHeight-s.sc.maxHeight>0?s.sc.scrollTop(c+s.sc.suggestionHeight+a-s.sc.maxHeight):0>c&&s.sc.scrollTop(c+a)}else s.sc.scrollTop(0)},e(window).on("resize.autocomplete",s.updateSC),s.sc.appendTo("body"),s.sc.on("mouseleave",".autocomplete-suggestion",function(){e(".autocomplete-suggestion.selected").removeClass("selected")}),s.sc.on("mouseenter",".autocomplete-suggestion",function(){e(".autocomplete-suggestion.selected").removeClass("selected"),e(this).addClass("selected")}),s.sc.on("mousedown click",".autocomplete-suggestion",function(t){var a=e(this),c=a.data("val");return(c||a.hasClass("autocomplete-suggestion"))&&(s.val(c),o.onSelect(t,c,a),s.sc.hide()),!1}),s.on("blur.autocomplete",function(){try{over_sb=e(".autocomplete-suggestions:hover").length}catch(t){over_sb=0}over_sb?s.is(":focus")||setTimeout(function(){s.focus()},20):(s.last_val=s.val(),s.sc.hide(),setTimeout(function(){s.sc.hide()},350))}),o.minChars||s.on("focus.autocomplete",function(){s.last_val="\n",s.trigger("keyup.autocomplete")}),s.on("keydown.autocomplete",function(t){if((40==t.which||38==t.which)&&s.sc.html()){var a,c=e(".autocomplete-suggestion.selected",s.sc);return c.length?(a=40==t.which?c.next(".autocomplete-suggestion"):c.prev(".autocomplete-suggestion"),a.length?(c.removeClass("selected"),s.val(a.addClass("selected").data("val"))):(c.removeClass("selected"),s.val(s.last_val),a=0)):(a=40==t.which?e(".autocomplete-suggestion",s.sc).first():e(".autocomplete-suggestion",s.sc).last(),s.val(a.addClass("selected").data("val"))),s.updateSC(0,a),!1}if(27==t.which)s.val(s.last_val).sc.hide();else if(13==t.which||9==t.which){var c=e(".autocomplete-suggestion.selected",s.sc);c.length&&s.sc.is(":visible")&&(o.onSelect(t,c.data("val"),c),setTimeout(function(){s.sc.hide()},20))}}),s.on("keyup.autocomplete",function(a){if(!~e.inArray(a.which,[13,27,35,36,37,38,39,40])){var c=s.val();if(c.length>=o.minChars){if(c!=s.last_val){if(s.last_val=c,clearTimeout(s.timer),o.cache){if(c in s.cache)return void t(s.cache[c]);for(var l=1;l<c.length-o.minChars;l++){var i=c.slice(0,c.length-l);if(i in s.cache&&!s.cache[i].length)return void t([])}}s.timer=setTimeout(function(){o.source(c,t)},o.delay)}}else s.last_val=c,s.sc.hide()}})})},e.fn.autoComplete.defaults={source:0,minChars:3,delay:150,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var o=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(o,"<b>$1</b>")+"</div>"},onSelect:function(e,t,o){}}}(jQuery);


// Place any jQuery/helper plugins in here.
