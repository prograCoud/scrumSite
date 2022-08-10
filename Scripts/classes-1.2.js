
function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}

$(document).ready(function () {
    var courseName = getParameter("coursename")
    if (courseName == false) {
        updateClasslist()
    }
    else {
        $("#courseid option[data-value='" + courseName.toUpperCase() + "']").prop("selected", true)
        $("#courseid").trigger("change")
    }


    //if ($("#countryid").val() == "150") {
    //    $("#cityid").append("<option value='0'>All</option")

    //    $("#courses tbody tr").each(function (i, e) {

    //        var tdFirst = $(e).find("td:first")
    //        if (tdFirst.html().indexOf("(Nederlands)") != -1) {
    //            tdFirst.html(function () {

    //                var originalMarkup = tdFirst[0].innerHTML
    //                return originalMarkup.replace("(Nederlands)", "<strong>(Language: Nederlands)</strong>")

    //            })
    //        }
    //    })
    //}
    //if ($("#countryid").val() == "230" || $("#countryid").val() == "38") {
    //    $("#courses tbody tr").each(function (i, e) {
    //        if ($(e).find("td:first").data("location") != "virtual") {
    //            $(e).find("td:eq(3)").prepend("<span>VMEdu, Inc.</span> / ")
    //        }
    //    })
    //}

    //var virtualRow1 = $(".virtual-class-list:eq(0)").parent()
    //var virtualRow2 = $(".virtual-class-list:eq(1)").parent()

    //virtualRow2.prependTo($("#courses tbody"))
    //virtualRow1.prependTo($("#courses tbody"))
})

//Select Country Lightbox [This should be changed to lity from lightbox_me]
//$('#classroom-country-lightbox').lightbox_me({
//    centered: true,
//    overlayCSS: { background: 'black', opacity: .8 },
//    closeClick: false,
//    closeEsc: false
//})


/* Toggle between tabs */
//function updateDetailsNavTabScrollable() {
//	if ($(".nav-tabs-scrollable").length < 1) {
//		return 
//	}
//    if (classroomDetails.is(":hidden")) {return}
//    var a = classroomDetails.find(".nav-tabs-scrollable").width()
//    var b = classroomDetails.find(".nav-tabs").width()
//    if (b > a) {
//        classroomDetails.find(".nav-tabs-scrollable").parent().addClass("nav-scrolling")
//    }
//    else {
//        classroomDetails.find(".nav-tabs-scrollable").parent().removeClass("nav-scrolling")
//    }
//    highlightDetailsNavTab()
    
//}
//function highlightDetailsNavTab() {

//    var total = ((classroomDetails.find(".nav-tabs li.active").position().left + classroomDetails.find(".nav-tabs li.active").width()) - (classroomDetails.find(".nav-tabs-scrollable").width())) + classroomDetails.find(".nav-tabs-scrollable").scrollLeft()
//    classroomDetails.find('.nav-tabs-scrollable').animate({ scrollLeft: total }, 200);
//}



//$(".nav-tabs-left").on("click", function () {
//    var prevElem = $(".nav-tabs li.active").prev()
//    if (prevElem.length == 0) {
//        $(".nav-tabs li:last a")[0].click()
//    }
//    else {
//        prevElem.find("a")[0].click()
//    }
//})
//$(".nav-tabs-right").on("click", function () {
//    var NextElem = $(".nav-tabs li.active").next()
//    if (NextElem.length == 0) {
//        $(".nav-tabs li:first a")[0].click()
//    }
//    else {
//        NextElem.find("a")[0].click()
//    }
//})






//Refresh class list on resize
var id;
$(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
});
function doneResizing() {
    updateClasslist();
    //updateNavTabScrollable();
    //updateDetailsNavTabScrollable()
}


//Global function to load data to lightbox when lightbox is ready

var localTimeLightbox
$(document).on('lity:ready', function (event, instance) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    //Load video if lightbox is triggered by video thumb
    if ($(instance.opener()).hasClass("lightbox")) {
        var lightboxWidth = windowWidth < 768 ? windowWidth : 640;
        $(".video-lightbox").width(lightboxWidth).removeClass("hide")

        jwplayer('player').setup({
            file: $(instance.opener()).data("url"),
            width: '100%',
            aspectratio: '16:9',
            autostart: true,
            ga: {}
        })
    }
    else if ($(instance.opener()).hasClass("view-in-local-link"))
    {
        localTimeLightbox = instance
        var cd
        if ($(localTimeLightbox.opener()).parent().is("td")) {
            cd = $(localTimeLightbox.opener()).closest('tr')
        }
        else {
            cd = $(localTimeLightbox.opener()).closest('.class-list-contents')
        } 
        $("#local-time-lightbox").show()
        $("#std-date").text(cd.find(".class-date-inline").text().trim() + "; " + cd.find(".class-time-inline").text().trim())
        $("#local-time-lightbox").find(".class-timezone").text(cd.find(".class-timezone").text())
        $.ajax({
            method: "GET",
            url: "/classes/getlocaltime",
            cache: false,
            data: {
                classid: cd.data("classId"),
                classCourseId: $("#class-course-id").val(),
                timezones: function () {
                    if ($("#timezones").val() != "") {
                        return $("#timezones").val()
                    }
                    else {
                        return ""
                    }
                },
                classTimezone: cd.find(".class-timezone").text()
            }
        })
            .done(function (msg) {

                if (msg.Data.LocalStartDate == msg.Data.LocalEndDate) {
                    $("#local-date").text(msg.Data.LocalStartDate + "; " + msg.Data.LocalStartTime + " to " + msg.Data.LocalEndTime)
                }
                else {
                    $("#local-date").text(msg.Data.LocalStartDate + " to " + msg.Data.LocalEndDate + "; " + msg.Data.LocalStartTime + " to " + msg.Data.LocalEndTime)
                }
                $("#timezone").text(msg.Data.TimeZone)
                $("#local-time-loader").addClass("hide");
                $(".local-time-details").removeClass("hide")
            })
            .fail(function () {
                $(".timezone-error").removeClass("hide")
                $("#local-time-loader").addClass("hide");
            })
    }
    else if ($(instance.opener()).hasClass("classroom-location-link"))
	{
		var cd
		if ($(instance.opener()).parent().is("td")) {
			cd = $(instance.opener()).closest('tr')
		}
		else {
			cd = $(instance.opener()).closest('.class-list-contents')
        } 
        if (cd.find(".class-location").data("isVirtual") == true) {
            $("#classroom-location-lightbox").find(".location-message-virtual").removeClass("hide").siblings().addClass("hide")
            ga('send', 'event', 'Info', 'click', 'virtual');

        }
        else {
            $("#classroom-location-lightbox").find(".location-message-physical").removeClass("hide").siblings().addClass("hide")
            if ($(instance.opener()).parent().is('td')) {
                $("#classroom-location-lightbox #l-city").text($(instance.opener()).text())
				$("#classroom-location-lightbox #l-date").text(cd.find(".class-location").next().find(".class-date-inline").text())
                $("#classroom-location-lightbox #l-timing").text(cd.find(".class-location").next().find(".class-time-inline").text())
            }
            else {
            
            }
            $("#classroom-location-lightbox #l-venueaddress").empty()
			$("#classroom-location-lightbox #l-venue").removeClass("text-danger").html("<img src='/Scrum-Images/icons/loader.gif' style='vertical-align: middle; margin- left: 10px;' alt='Loader'/>")
			
            $.ajax({
                method: "GET",
                url: "/Classes/GetClassVenueDetails",
                data: {
                    classid: cd.data("classId")
                },
                cache: false 

            })
                .done(function (data) {
                    if (data.Data != null) {
                        $("#classroom-location-lightbox #l-venue").removeClass("text-danger").html(data.Data.Venue)
                    }
                    else {
                        $("#classroom-location-lightbox #l-venue").removeClass("text-danger").text("Yet to be finalized.")
                    }
                
            })
            .fail(function (msg) {
                $("#classroom-location-lightbox #l-venue").addClass("text-danger").html("An error occured")
            });
            ga('send', 'event', 'Info', 'click', 'physical');
        }
        $("#classroom-location-lightbox").show()
    }
});


//Global function to handle lightbox close event
$(document).on('lity:close', function (event, instance) {
    if ($(instance.opener()).hasClass("lightbox")) {
        $(".video-lightbox").addClass("hide")
        jwplayer('player').remove()
    }
    else if ($(instance.opener()).hasClass("classroom-location-link")) {
        $("#classroom-location-lightbox").hide()
    }
    else if ($(instance.opener()).hasClass("view-in-local-link")) {
        $("#local-time-lightbox").hide()
        $("#local-time-loader").removeClass("hide");
        $(".timezone-error").addClass("hide")
        $(".local-time-details").addClass("hide")
        $(".change-timezone").addClass("hide")
    }
});


//Global function to handle lightbox resize event
$(document).on('lity:resize', function (event, instance) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if ($(instance.opener()).hasClass("lightbox")) {
        var lightboxWidth = windowWidth < 768 ? windowWidth : 640;
        $(".video-lightbox").width(lightboxWidth);
    }
});


//Get Timezone data and show
$(".change-timezone-button").on("click", function () {
    $("#local-time-loader").removeClass("hide");
    $(".local-time-details").addClass("hide")
    if ($("#timezones").val() != null) {
        $("#local-time-loader").addClass("hide");
        $(".change-timezone").removeClass("hide")
    }
    else {
        $.ajax({
            method: "GET",
            url: "https://cdn.jsdelivr.net/npm/timezones.json@1.3.3/timezones.json",
            cache: false
        })
            .done(function (msg) {
                var optionsMarkUp = ""
                var currentTimezone = $("#timezone").text().trim()
                $.each(msg, function (i, e) {
                    if (e.text == currentTimezone) {
                        optionsMarkUp += "<option selected value='" + e.value + "'>" + e.text + "</option>"
                    }
                    else {
                        optionsMarkUp += "<option value='" + e.value + "'>" + e.text + "</option>"
                    }
                })

                $("#timezones").append(optionsMarkUp)
                $("#local-time-loader").addClass("hide");
                $(".change-timezone").removeClass("hide")
            })
            .fail(function () {
                $(".timezone-error").removeClass("hide")
                $("#local-time-loader").addClass("hide");
            })
    }

})


//Update timezone data on server and show local time
$(".update-timezone-button").on("click", function () {
    $("#local-time-loader").removeClass("hide");
    $(".change-timezone").addClass("hide")
    var cd
    if ($(localTimeLightbox.opener()).parent().is("td")) {
        cd = $(localTimeLightbox.opener()).closest('tr')
    }
    else {
        cd = $(localTimeLightbox.opener()).closest('.class-list-contents')
    } 
    $.ajax({
        method: "GET",
        url: "/classes/getlocaltime",
        cache: false,
        data: {
            classid: cd.data("classId"),
            classCourseId: $("#class-course-id").val(),
            timezones: $("#timezones").val(),
            classTimezone: cd.find(".class-timezone").text()
        }
    })
        .done(function (msg) {
            if (msg.Data.LocalStartDate == msg.Data.LocalEndDate) {
                $("#local-date").text(msg.Data.LocalStartDate + "; " + msg.Data.LocalStartTime + " to " + msg.Data.LocalEndTime)
            }
            else {
                $("#local-date").text(msg.Data.LocalStartDate + " to " + msg.Data.LocalEndDate + "; " + msg.Data.LocalStartTime + " to " + msg.Data.LocalEndTime)
            }
            $("#timezone").text($("#timezones option:selected").text())
            $("#local-time-loader").addClass("hide");
            $(".local-time-details").removeClass("hide")
        })
        .fail(function () {
            $(".timezone-error").removeClass("hide")
            $("#local-time-loader").addClass("hide");
        })
})

$("#trainingtype, #cityid, #courseid").on("change", function (e) {
    pageid = 0;

    if ($(this).attr("id") == "courseid") {
        $("#trainingtype, #cityid").val("0")
    }
    $("#courses").addClass("hide").find("tbody").empty()
    $("#class-list-group").empty().addClass("hide")
    $("#classroom-list-loader").show()

    $("#view-more-classes").trigger("click")
})


//Generate class list for multiple resolutions
function updateClasslist() {
    var windowWidth = $(window).width();
    if (windowWidth > 991) {
        $("#courses").removeClass("hide")
        $("#class-list-group").empty().addClass("hide")
        $("#classroom-list-loader").hide()
    }
    else {
        $("#courses").addClass("hide")
        $("#classroom-list-loader").show()
        $("#class-list-group").empty().removeClass("hide")

        //if (pageid > 1) {
        //    var classList = $("#courses tbody tr:gt(" + (pageid - 1) * displayrows + ")");
        //}
        //else {
        //    var classList = $("#courses tbody tr");
        //}

        var classList = $("#courses tbody tr");
        var generatedClassList = "";
        if (classList.length == 1 && classList.hasClass('no-records')) {
            generatedClassList = $("<p class='top-20'>No records found!</p>")
        }
        else {

            generatedClassList = $("<div class='row row-v-gutter'></div>")
            classList.each(function (i, e) {
                var tempClassList = $(".class-list-template").clone()
                tempClassList.removeClass("class-list-template hide")
                tempClassList.find(".class-list-contents").data("classId", $(e).data("classId"))
                tempClassList.find(".class-date-inline").html($(e).find(".class-date-inline").html())
                tempClassList.find(".class-time-inline").html($(e).find(".class-time-inline").html())
                if ($(e).find(".view-in-local-link").length > 0) {
                    tempClassList.find(".class-date-view-in-local").html($(e).find(".view-in-local-link")[0].outerHTML)
                }
                tempClassList.find(".class-location div").html($(e).find(".class-location").html())
                tempClassList.find(".class-location span").html($(e).find(".class-language").html())

                tempClassList.find(".class-details").html($(e).find(".class-details").html())

                tempClassList.find(".class-location").data("isVirtual", $(e).find(".class-location").data("isVirtual"))
                tempClassList.find(".class-details a").removeClass("button button-default")

                //tempClassList.find(".class-provider div").html($(e).find(".class-provider").html())
                //if ($(e).find(".class-trainer").length > 0) {
                //    tempClassList.find(".class-trainer").show().find("div").html($(e).find(".class-trainer").html())
                //}
                //else {
                //    tempClassList.find(".class-trainer").hide()
                //}
                //tempClassList.find(".class-price").html($(e).find(".class-price").html())
                tempClassList.find(".class-enroll").html($(e).find(".class-enroll").html())
                generatedClassList.append(tempClassList)
            })
        }
        $("#class-list-group").append(generatedClassList)
        $("#classroom-list-loader").hide()
    }
}



//function updateNavTabScrollable() {
//	if ($(".nav-tabs-scrollable").length < 1) {
//		return
//	}
//    var a = $(".nav-tabs-scrollable").width()
//    var b = $(".nav-tabs").width()
//    if (b > a) {
//        $(".nav-tabs-scrollable").parent().addClass("nav-scrolling")
//    }
//    else {
//        $(".nav-tabs-scrollable").parent().removeClass("nav-scrolling")
//    }

//    var total = (($(".nav-tabs li.active").position().left + $(".nav-tabs li.active").width()) - ($(".nav-tabs-scrollable").width())) + $(".nav-tabs-scrollable").scrollLeft()
//    $('.nav-tabs-scrollable').animate({ scrollLeft: total }, 200);
//}


//updateNavTabScrollable()
//updateClasslist()


var pageid = 1, 
    displayrows = 25

$("#view-more-classes").on("click", function () {

    $("#view-more-classes").prop("disabled", true).text("Please wait...")
    $("#language, #country, #apply-filter").prop("disabled", true)

    $.ajax({
        method: "POST",
        url: "/classes/getfilteredsfcclasslist",
        cache: false,
        data: {
            displayrows: displayrows,
            pageid: pageid+1, 
            countryId: $("#country").data('values'),
            languageId: $("#language").data('values')
        }
    })
        .done(function (data) {
            pageid++;
            if (data.TableRows == "") {
                $("#courses tbody").append('<tr class="no-records"><td colspan="6">No records found!</td></tr>');
            }

            $("#courses tbody").append(data.TableRows);
            updateClasslist();
        })
        .fail(function () {
            Alert("Failed");
        })
        .always(function (data) {
            $("#view-more-classes").prop("disabled", false).text("View More Classes")
            if (data.PageTotal > pageid) {
                $("#view-more-classes").removeClass("hide")
            }
            else {
                $("#view-more-classes").addClass("hide")
            }
            
            $("#language, #country, #apply-filter").prop("disabled", false);
        })
})