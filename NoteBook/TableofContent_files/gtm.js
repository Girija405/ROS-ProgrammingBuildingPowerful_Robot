
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"417",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",7]],["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",11]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]],["map","index","2","dimension",["macro",13]],["map","index","3","dimension",["macro",7]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",15]],["map","index","6","dimension",["macro",11]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",29],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",2],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",2],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",0],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",2],8,16],"+\"\/?\"+",["escape",["macro",0],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",2],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=43;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",32],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSuggestGroup"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.experiment"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.variation"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"answersSearchQuery"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.option"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"trialStartDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscriptionStartDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"marketingTest"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorTest"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]]],
      "vtp_autoLinkDomains":["macro",28],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",30]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",11]],["map","fieldName","customTask","value",["macro",31]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",3]],["map","index","4","dimension",["macro",34]],["map","index","9","dimension",["macro",35]],["map","index","10","dimension",["macro",36]],["map","index","11","dimension",["macro",37]],["map","index","12","dimension",["macro",38]],["map","index","13","dimension",["macro",27]],["map","index","14","dimension",["macro",39]],["map","index","15","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",43]],["map","index","20","dimension",["macro",44]],["map","index","21","dimension",["macro",45]],["map","index","27","dimension",["macro",46]],["map","index","22","dimension",["macro",15]],["map","index","6","dimension",["macro",47]],["map","index","7","dimension",["macro",48]],["map","index","8","dimension",["macro",49]],["map","index","25","dimension",["macro",50]],["map","index","26","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","24","dimension",["macro",53]],["map","index","28","dimension",["macro",54]],["map","index","30","dimension",["macro",55]],["map","index","29","dimension",["macro",56]],["map","index","31","dimension",["macro",57]],["map","index","32","dimension",["macro",58]],["map","index","33","dimension",["macro",11]],["map","index","34","dimension",["macro",59]],["map","index","36","dimension",["macro",60]],["map","index","37","dimension",["macro",61]],["map","index","38","dimension",["macro",62]],["map","index","39","dimension",["macro",63]],["map","index","40","dimension",["macro",64]],["map","index","41","dimension",["macro",65]],["map","index","42","dimension",["macro",66]],["map","index","44","dimension",["macro",67]],["map","index","45","dimension",["macro",68]],["map","index","46","dimension",["macro",65]],["map","index","47","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";if(\"profile icon\"==",["escape",["macro",20],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",21],8,16],"||\"global\"==",["escape",["macro",20],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",21],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",22],8,16],")a=1;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",75],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",76],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"UA-112091926-16"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",26]],["map","index","4","group",["macro",27]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",9],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",11]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",3]],["map","index","4","dimension",["macro",34]],["map","index","9","dimension",["macro",35]],["map","index","10","dimension",["macro",36]],["map","index","11","dimension",["macro",37]],["map","index","12","dimension",["macro",38]],["map","index","13","dimension",["macro",27]],["map","index","14","dimension",["macro",39]],["map","index","15","dimension",["macro",40]],["map","index","16","dimension",["macro",41]],["map","index","17","dimension",["macro",42]],["map","index","18","dimension",["macro",26]],["map","index","19","dimension",["macro",43]],["map","index","20","dimension",["macro",44]],["map","index","21","dimension",["macro",45]],["map","index","27","dimension",["macro",46]],["map","index","22","dimension",["macro",15]],["map","index","6","dimension",["macro",47]],["map","index","7","dimension",["macro",48]],["map","index","8","dimension",["macro",49]],["map","index","25","dimension",["macro",50]],["map","index","26","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","24","dimension",["macro",53]],["map","index","28","dimension",["macro",54]],["map","index","30","dimension",["macro",55]],["map","index","29","dimension",["macro",56]],["map","index","31","dimension",["macro",57]],["map","index","32","dimension",["macro",58]],["map","index","33","dimension",["macro",11]],["map","index","34","dimension",["macro",59]],["map","index","36","dimension",["macro",60]],["map","index","37","dimension",["macro",61]],["map","index","38","dimension",["macro",62]],["map","index","39","dimension",["macro",63]],["map","index","40","dimension",["macro",64]],["map","index","41","dimension",["macro",65]],["map","index","42","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",82],8,16],".closest(\"a[class^\\x3d'authLink']\");if(a)return a=a.text.split(\" \"),a[a.length-1].toLowerCase()})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",0],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",75],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",76]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":32
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",17],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",24]],["map","fieldName","title","value",["macro",25]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",24]],["map","fieldName","title","value",["macro",25]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",68,0]],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",71],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["template",["macro",74],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",78]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":726
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":["macro",71],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",19],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":759
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"Gkv3COnv_c8BEJOGuI8D",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1229
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"GFhzCNP_rdABEJOGuI8D",
      "vtp_rdp":false,
      "vtp_url":["macro",4],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":1231
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-4WZYL59WMV",
      "vtp_enableUserProperties":true,
      "tag_id":1251
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-092EL089CH",
      "vtp_enableUserProperties":true,
      "tag_id":1254
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1279
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"Anybird Remarketing",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1287
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"user login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":"social sign in",
      "vtp_eventLabel":["macro",83],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1296
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":true,
      "vtp_eventName":["macro",39],
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",4],
      "vtp_enableRdpCheckbox":true,
      "tag_id":1313
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",0],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":1314
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":1315
    },{
      "function":"__cl",
      "tag_id":1316
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1317
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1318
    },{
      "function":"__hl",
      "tag_id":1319
    },{
      "function":"__hl",
      "tag_id":1320
    },{
      "function":"__hl",
      "tag_id":1321
    },{
      "function":"__cl",
      "tag_id":1322
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":1323
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":1324
    },{
      "function":"__hl",
      "tag_id":1325
    },{
      "function":"__cl",
      "tag_id":1326
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;\nif(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1]}else if(\"shop.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"shop.oreilly.com\"],folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1];else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"twitter.com\/oreillymedia|facebook.com\/OReilly|inkedin.com\/company\/oreilly-media|youtube.com\/user\/OreillyMedia\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",\naction:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",label:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=\ndocument.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];mainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0,mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(a){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}function _isSocial(a){return\"\"!=socSites?null!=a.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(a){return\"\"!=folders_to_track?null!=a.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(a){for(var c=0,b=0;b\u003CextDoc.length;b++){var d=a.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[b])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(a,c){var b=a.toLowerCase().split(\".\");b=b[b.length-1].split(\/[#?\u0026?]\/);a=a.toLowerCase().split(c);a=a[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=b;eValues.downloads.label=eValues.outbound_downloads.label=a}\nfunction _tagLinks(a,c,b,d,g,e,f){isGTM?a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+b+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,a.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+b+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(a){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var b=a.parentNode;null!=b;){if(b==c)return!0;b=b.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;b=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(a.href)\u0026\u0026b.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(a).parents(\".article-body\").length||\njQuery(a).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",38],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}if(null!==document.querySelector(\"iframe.twitter-share-button\")\u0026\u0026void 0!==document.querySelector(\"iframe.twitter-share-button\")){var c=!1;window.addEventListener(\"blur\",function(){c\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0})});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseover\",\nfunction(){window.focus();c=!0});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseout\",function(){c=!1})}try{window.twttr=function(b,d,e){var f,g=b.getElementsByTagName(d)[0];if(!b.getElementById(e))return b=b.createElement(d),b.id=e,b.src=\"\/\/platform.twitter.com\/widgets.js\",g.parentNode.insertBefore(b,g),window.twttr||(f={_e:[],ready:function(h){f._e.push(h)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(b){b.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,c){if(a\u0026\u0026(c=new RegExp(\"[\\\\?\\x26#]\"+c+\"\\x3d([^\\x26#]*)\"),a=c.exec(a),null!=a))return unescape(a[1])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",72],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/c);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));25\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));75\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",38],8,16],",\neventVal:0,nonInteraction:0}));95\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",38],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"windowReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2173986\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2390889\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1239
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"fullstory.com\";window._fs_script=\"edge.fullstory.com\/s\/fs.js\";window._fs_org=\"SAVCH\";window._fs_namespace=\"FS\";\n(function(e,k,l,m,h,f,a,d){l in e?e.console\u0026\u0026e.console.log\u0026\u0026e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(a=e[l]=function(c,b,g){a.q?a.q.push([c,b,g]):a._api(c,b,g)},a.q=[],f=k.createElement(m),f.async=1,f.crossOrigin=\"anonymous\",f.src=\"https:\/\/\"+_fs_script,d=k.getElementsByTagName(m)[0],d.parentNode.insertBefore(f,d),a.identify=function(c,b,g){a(h,{uid:c},g);b\u0026\u0026a(h,b,g)},a.setUserVars=function(c,b){a(h,c,b)},a.event=function(c,b,g){a(\"event\",{n:c,p:b},g)},a.anonymize=\nfunction(){a.identify(!1)},a.shutdown=function(){a(\"rec\",!1)},a.restart=function(){a(\"rec\",!0)},a.log=function(c,b){a(\"log\",[c,b])},a.consent=function(c){a(\"consent\",!arguments.length||c)},a.identifyAccount=function(c,b){f=\"account\";b=b||{};b.acctId=c;a(f,b)},a.clearUserCookie=function(){},a._w={},d=\"XMLHttpRequest\",a._w[d]=e[d],d=\"fetch\",a._w[d]=e[d],e[d]\u0026\u0026(e[d]=function(){return a._w[d].apply(this,arguments)}),a._v=\"1.2.0\")})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=70561\u0026amp;conversionId=2861009\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1250
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(c){var b=3E5,d=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+d+\"\/\"+c+\".js\";c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"tvu7up89sc39\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1258
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",64,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getRandomInt(a,b){a=Math.ceil(a);b=Math.floor(b);return Math.floor(Math.random()*(b-a))+a}var random=getRandomInt(1,100);document.cookie=50\u003E=random?\"DriftPlaybook\\x3dA\":\"DriftPlaybook\\x3dB\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1289
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/fast.appcues.com\/48743.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1303
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",66,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ega(function(a){a=(a=document.cookie.match(\"(^|;)\\\\s*_ga\\\\s*\\x3d\\\\s*([^;]+)\"))?a.pop():\"\";Appcues.identify(a)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({\"ld.experiment\":void 0,\"ld.variation\":void 0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1213
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"yes"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/content(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"your oreilly|hover"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",72],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers|certifications|answers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"updatedEcommerce"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VWO"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"content-team_signup"
    },{
      "function":"_cn",
      "arg0":["macro",79],
      "arg1":"mktoButton"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"online-learning\/enterprise.html"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"PLEASE WAIT"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"^www\\.oreilly\\.com$",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",32],
      "arg1":"conferences."
    },{
      "function":"_sw",
      "arg0":["macro",32],
      "arg1":"ai."
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"aerio"
    },{
      "function":"_css",
      "arg0":["macro",82],
      "arg1":"a[class^=\"authLink\"], a[class^=\"authLink\"] *"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.oreilly.com\/library\/view"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.oreilly.com\/library\/view\/temporary-access\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",84],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)|(.*)shop.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar|content)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"podcast"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"online-learning\/government.html"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*learning.oreilly.com\\\/answers\\\/.*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"content-marketing-solutions.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"www.oreilly.com\/member\/"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"www.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"www.oreilly.com\/content-marketing-solutions.html"
    }],
  "rules":[
    [["if",0,1],["add",2,12]],
    [["if",1,2],["add",2,12]],
    [["if",1],["add",3,7,34,48,36,37,39,40,41,42,43,44,45,46]],
    [["if",1,4],["add",4]],
    [["if",1,5],["add",4]],
    [["if",1],["unless",6],["add",5,17]],
    [["if",7,8],["add",6,8,18]],
    [["if",1,9,10],["add",9]],
    [["if",1,11],["add",9]],
    [["if",9,12],["add",10]],
    [["if",12,13],["add",10]],
    [["if",9,14],["add",11]],
    [["if",1,15],["add",13]],
    [["if",14,16],["add",14]],
    [["if",14,17],["add",14]],
    [["if",14,18],["add",14]],
    [["if",12,19],["unless",20,21],["add",15]],
    [["if",1,23],["unless",20,24],["add",16]],
    [["if",25,27],["unless",26],["add",16]],
    [["if",28,29],["add",16]],
    [["if",28,30],["add",16,58]],
    [["if",31,32],["add",19]],
    [["if",33,35,36],["unless",34],["add",20]],
    [["if",31,37,38],["add",21]],
    [["if",12,39],["add",22]],
    [["if",40],["add",23]],
    [["if",42],["unless",41],["add",24]],
    [["if",12,22],["add",25],["block",15]],
    [["if",1,43],["add",26]],
    [["if",12,44,45,46],["add",27,60]],
    [["if",1,47],["add",28]],
    [["if",1,48],["add",29]],
    [["if",1],["unless",49,50],["add",30]],
    [["if",25,27],["unless",49,50],["add",30]],
    [["if",35,51],["add",31]],
    [["if",8,52],["add",32]],
    [["if",1,53],["unless",54],["add",33]],
    [["if",1,55],["add",35]],
    [["if",56],["add",38,52,56,57]],
    [["if",1,57],["add",0,1]],
    [["if",32,58],["unless",59],["add",47]],
    [["if",32,60],["add",48,49]],
    [["if",56,61],["add",50]],
    [["if",32,62],["add",51]],
    [["if",25,27,28],["add",53]],
    [["if",28,32],["add",54]],
    [["if",1,63],["add",55]],
    [["if",64,65],["add",56]],
    [["if",64,66],["add",57]],
    [["if",31,56],["add",58,59]],
    [["if",12,44,46,67],["add",61]],
    [["if",1,68],["add",62]],
    [["if",12,44,46,69],["add",63]],
    [["if",1,71],["unless",70],["add",64,65]],
    [["if",1,72],["add",66,67]],
    [["if",1,3],["block",2,4,5,7,17]],
    [["if",47,56],["block",52]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},la={};try{la.__proto__=ja;ia=la.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ha,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.kj=b.prototype},oa=this||self,va=function(a){if(a&&a!=oa)return qa(a.document);null===ua&&(ua=qa(oa.document));return ua},wa=/^[\w+/_-]+[=]{0,2}$/,ua=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&wa.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.D={};this.s=!1;this.J={}};Aa.prototype.get=function(a){return this.D["dust."+a]};Aa.prototype.set=function(a,b){this.s||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Aa.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.o=new Aa;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else za(a)?this.g[Number(a)]=b:this.o.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.g[Number(a)]:this.o.get(a)};aa.length=function(){return this.g.length};aa.Rb=function(){for(var a=Ba(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.g[Number(b)];else{var c=a.o,d;d="dust."+b;c.s||c.J.hasOwnProperty(d)||delete c.D[d]}};aa=k.prototype;aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].Ec+g>b[f].max)throw Error("Quota exceeded");b[f].Ec+=g}}var b={},c=void 0,d=void 0,e={ii:function(f){c=f},Ff:function(){c&&a(c,1)},ki:function(f){d=f},Ra:function(f){d&&a(d,f)},Ei:function(f,g){b[f]=b[f]||{Ec:0};b[f].max=g},Lh:function(f){return b[f]&&b[f].Ec||0},reset:function(){b={}},xh:a};e.onFnConsume=e.ii;e.consumeFn=e.Ff;e.onStorageConsume=e.ki;e.consumeStorage=e.Ra;e.setMax=e.Ei;e.getConsumed=e.Lh;e.reset=e.reset;e.consume=e.xh;return e};var Fa=function(a,b){this.J=a;this.S=function(c,d,e){return c.apply(d,e)};this.s=b;this.o=new Aa;this.g=this.D=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.o.s)if(a.J.Ra(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Fa.prototype.set=function(a,b){this.o.s||(!this.o.has(a)&&this.s&&this.s.has(a)?this.s.set(a,b):(this.J.Ra(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Fa.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.s?this.s.get(a):void 0};Fa.prototype.has=function(a){return!!this.o.has(a)||!(!this.s||!this.s.has(a))};var Ha=function(a){var b=new Fa(a.J,a);a.D&&(b.D=a.D);b.S=a.S;b.g=a.g;return b};var Ia=function(){},Ka=function(a){return"function"==typeof a},q=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},B=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!La(a)||
!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Sa=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ua=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var bb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},cb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},eb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},gb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
B(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=function(a){var b=[];Ta(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var pb=function(a,b){Aa.call(this);this.g=a;this.S=b};na(pb,Aa);pb.prototype.toString=function(){return this.g};pb.prototype.Rb=function(){return new k(Ba(this))};pb.prototype.o=function(a,b){a.J.Ff();return this.S.apply(qb(this,a),Array.prototype.slice.call(arguments,1))};var qb=function(a,b){var c=function(d,e){this.o=d;this.s=e};c.prototype.g=function(d){var e=this.s;return Na(d)?rb(e,d):d};c.prototype.J=function(d){return sb(this.s,d)};c.prototype.D=function(){return b.J};return new c(a,b)};
pb.prototype.Ta=function(a,b){try{return this.o.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var sb=function(a,b){for(var c,d=0;d<b.length&&!(c=rb(a,b[d]),c instanceof ya);d++);return c},rb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof pb))throw Error("Attempting to execute non-function "+b[0]+".");return c.o.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.D;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var tb=function(){Aa.call(this)};na(tb,Aa);tb.prototype.Rb=function(){return new k(Ba(this))};var ub={control:function(a,b){return new ya(a,this.g(b))},fn:function(a,b,c){var d=this.s,e=this.g(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.D().Ra(a.length+f.length);return new pb(a,function(){return function(g){var h=Ha(d);void 0===h.g&&(h.g=this.s.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.g(l[m]),l[m]instanceof ya)return l[m];for(var p=e.get("length"),n=
0;n<p;n++)n<l.length?h.add(e.get(n),l[n]):h.add(e.get(n),void 0);h.add("arguments",new k(l));var t=sb(h,f);if(t instanceof ya)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.D();b.Ra(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.g(arguments[d]);"string"===typeof e&&b.Ra(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.D(),c=new tb,d=0;d<arguments.length-1;d+=2){var e=this.g(arguments[d])+"",f=this.g(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ra(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.s=Ea();this.g=new Fa(this.s)},xb=function(a,b,c){var d=new pb(b,c);d.s=!0;a.g.set(b,d)};wb.prototype.Jc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};wb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.g,arguments[c]);return b};wb.prototype.D=function(a,b){var c=Ha(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=rb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.sa=a};yb.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var zb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ab=function(a){if(null==a)return String(a);var b=zb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Bb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Cb=function(a){if(!a||"object"!=Ab(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Bb(a,"constructor")&&!Bb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Bb(a,b)},G=function(a,b){var c=b||("array"==Ab(a)?[]:{}),d;for(d in a)if(Bb(a,d)){var e=a[d];"array"==Ab(e)?("array"!=Ab(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Cb(e)?(Cb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Eb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=B(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.Rb(),n=0;n<p.length();n++)m[p.get(n)]=g(h.get(p.get(n)));return m}if(h instanceof tb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof pb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Db(u[v],b,!!c);var w=b?b.J:Ea(),y=new Fa(w);
b&&(y.g=b.g);return g(h.o.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Db=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=B(d,
h);if(-1<l)return e[l];if(Na(h)||Ua(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Cb(h)){var n=new tb;d.push(h);e.push(n);f(h,n);return n}if("function"===typeof h){var t=new pb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Eb(this.g(v[w]),b,!!c);return g((0,this.s.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Fb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Hb=function(a){if(void 0===a||Na(a)||Cb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ib={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.o(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.o(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.o(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.o(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.o(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Fb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.o(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Fb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.o(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Jb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Kb=new ya("break"),Nb=new ya("continue"),Ob=function(a,b){return this.g(a)+this.g(b)},Pb=function(a,b){return this.g(a)&&this.g(b)},Qb=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=B(Jb,b))return Db(a[b].apply(a,Fb(c)),this.s);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof pb){var e=Fb(c);e.unshift(this.s);return d.o.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=B(Ib.supportedMethods,b)){var f=Fb(c);f.unshift(this.s);
return Ib[b].apply(a,f)}}if(a instanceof pb||a instanceof tb){if(a.has(b)){var g=a.get(b);if(g instanceof pb){var h=Fb(c);h.unshift(this.s);return g.o.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof pb?a.g:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Fb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Rb=function(a,b){a=this.g(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.s;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.g(b);c.set(a,d);return d},Tb=function(a){var b=Ha(this.s),c=sb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Ub=function(){return Kb},Vb=function(a){for(var b=this.g(a),c=0;c<b.length;c++){var d=this.g(b[c]);if(d instanceof ya)return d}},Wb=function(a){for(var b=this.s,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.g(arguments[c+1]);Ga(b,d,e,
!0)}}},Xb=function(){return Nb},Yb=function(a,b,c){var d=new k;b=this.g(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.s.add(a,this.g(f))},Zb=function(a,b){return this.g(a)/this.g(b)},$b=function(a,b){a=this.g(a);b=this.g(b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.sa==b.sa:!1:a==b},ac=function(a){for(var b,c=0;c<arguments.length;c++)b=this.g(arguments[c]);return b};
function bc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=sb(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}function cc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof k||b instanceof pb){var d=b.Rb(),e=d.length();return bc(a,function(){return e},function(f){return d.get(f)},c)}}
var dc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){d.set(a,e);return d},b,c)},ec=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},fc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return cc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},ic=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){d.set(a,e);return d},b,c)},jc=
function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},kc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);var d=this.s;return gc(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function gc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return bc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var lc=function(a,b,c,d){function e(p,n){for(var t=0;t<f.length();t++){var r=f.get(t);n.add(r,p.get(r))}}var f=this.g(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.s;d=this.g(d);var h=Ha(g);for(e(g,h);rb(h,b);){var l=sb(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ha(g);e(h,m);rb(m,c);h=m}},mc=function(a){a=this.g(a);var b=this.s,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},nc=function(a,b){var c;a=this.g(a);b=this.g(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof k||a instanceof pb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof yb)return;return c},oc=function(a,b){return this.g(a)>this.g(b)},
pc=function(a,b){return this.g(a)>=this.g(b)},qc=function(a,b){a=this.g(a);b=this.g(b);a instanceof yb&&(a=a.sa);b instanceof yb&&(b=b.sa);return a===b},rc=function(a,b){return!qc.call(this,a,b)},sc=function(a,b,c){var d=[];this.g(a)?d=this.g(b):c&&(d=this.g(c));var e=this.J(d);if(e instanceof ya)return e},tc=function(a,b){return this.g(a)<this.g(b)},uc=function(a,b){return this.g(a)<=this.g(b)},vc=function(a,b){return this.g(a)%this.g(b)},wc=function(a,b){return this.g(a)*this.g(b)},xc=function(a){return-this.g(a)},
yc=function(a){return!this.g(a)},zc=function(a,b){return!$b.call(this,a,b)},Ac=function(){return null},Ec=function(a,b){return this.g(a)||this.g(b)},Fc=function(a,b){var c=this.g(a);this.g(b);return c},Gc=function(a){return this.g(a)},Hc=function(a){return Array.prototype.slice.apply(arguments)},Ic=function(a){return new ya("return",this.g(a))},Jc=function(a,b,c){a=this.g(a);b=this.g(b);c=this.g(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof pb||
a instanceof k||a instanceof tb)&&a.set(b,c);return c},Kc=function(a,b){return this.g(a)-this.g(b)},Lc=function(a,b,c){a=this.g(a);var d=this.g(b),e=this.g(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.g(d[h]))if(f=this.g(e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.g(e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Mc=function(a,b,c){return this.g(a)?this.g(b):this.g(c)},Nc=function(a){a=this.g(a);return a instanceof pb?"function":typeof a},Oc=function(a){for(var b=this.s,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Pc=function(a,b,c,d){var e=this.g(d);if(this.g(c)){var f=this.J(e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;this.g(a);){var g=this.J(e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}this.g(b)}},
Qc=function(a){return~Number(this.g(a))},Rc=function(a,b){return Number(this.g(a))<<Number(this.g(b))},Sc=function(a,b){return Number(this.g(a))>>Number(this.g(b))},Tc=function(a,b){return Number(this.g(a))>>>Number(this.g(b))},Uc=function(a,b){return Number(this.g(a))&Number(this.g(b))},Vc=function(a,b){return Number(this.g(a))^Number(this.g(b))},Wc=function(a,b){return Number(this.g(a))|Number(this.g(b))};var Yc=function(){this.g=new wb;Xc(this)};Yc.prototype.Jc=function(a){return $c(this.g.o(a))};
var bd=function(a,b){return $c(ad.g.D(a,b))},Xc=function(a){var b=function(d,e){var f=a.g,g=String(e);ub.hasOwnProperty(d)&&xb(f,g||d,ub[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Ob);c(1,Pb);c(2,Qb);c(3,Rb);c(53,Tb);c(4,Ub);c(5,Vb);c(52,Wb);c(6,Xb);c(9,Vb);c(50,Yb);c(10,Zb);c(12,$b);c(13,ac);c(47,dc);c(54,ec);c(55,fc);c(63,lc);c(64,ic);c(65,jc);c(66,kc);c(15,mc);c(16,nc);c(17,nc);c(18,oc);c(19,pc);c(20,qc);c(21,rc);c(22,sc);
c(23,tc);c(24,uc);c(25,vc);c(26,wc);c(27,xc);c(28,yc);c(29,zc);c(45,Ac);c(30,Ec);c(32,Fc);c(33,Fc);c(34,Gc);c(35,Gc);c(46,Hc);c(36,Ic);c(43,Jc);c(37,Kc);c(38,Lc);c(39,Mc);c(40,Nc);c(41,Oc);c(42,Pc);c(58,Qc);c(57,Rc);c(60,Sc);c(61,Tc);c(56,Uc);c(62,Vc);c(59,Wc)},dd=function(){var a=ad,b=cd();xb(a.g,"require",b)},id=function(a,b){a.g.g.S=b};
function $c(a){if(a instanceof ya||a instanceof pb||a instanceof k||a instanceof tb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var jd=[],kd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ld=function(a){return kd[a]},md=/[\x00\x22\x26\x27\x3c\x3e]/g;var qd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,rd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},sd=function(a){return rd[a]};
jd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(qd,sd)+"'"}};var Ad=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cd=function(a){return Bd[a]};jd[16]=function(a){return a};var Ed;
var Fd=[],Gd=[],Hd=[],Nd=[],Od=[],Pd={},Qd,Rd,Sd,Td=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ud=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Pd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Cf&&b.Cf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Ed(c,e,b)},Wd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Vd(a[e],b,c));return d},Vd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Vd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Fd[f];if(!g||b.Td(g))return;c[f]=!0;try{var h=Wd(g,b,c);h.vtp_gtmEventId=b.id;d=Ud(h,b);Sd&&(d=Sd.zh(d,h))}catch(y){b.Rf&&b.Rf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Vd(a[l],b,c)]=Vd(a[l+1],b,c);return d;case "template":d=[];for(var m=
!1,p=1;p<a.length;p++){var n=Vd(a[p],b,c);Rd&&(m=m||n===Rd.wc);d.push(n)}return Rd&&m?Rd.Ch(d):d.join("");case "escape":d=Vd(a[1],b,c);if(Rd&&Na(a[1])&&"macro"===a[1][0]&&Rd.Wh(a))return Rd.ri(d);d=String(d);for(var t=2;t<a.length;t++)jd[a[t]]&&(d=jd[a[t]](d));return d;case "tag":var r=a[1];if(!Nd[r])throw Error("Unable to resolve tag reference "+r+".");return d={If:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Xd(u,b,c),w=!!a[4];return w||2!==v?w!==
(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Xd=function(a,b,c){try{return Qd(Wd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Yd=function(){var a=function(b){return{toString:function(){return b}}};return{gg:a("consent"),ye:a("convert_case_to"),ze:a("convert_false_to"),Ae:a("convert_null_to"),Be:a("convert_true_to"),Ce:a("convert_undefined_to"),Qi:a("debug_mode_metadata"),Qa:a("function"),Ug:a("instance_name"),Vg:a("live_only"),Wg:a("malware_disabled"),Xg:a("metadata"),Ti:a("original_activity_id"),Ui:a("original_vendor_template_id"),Zg:a("once_per_event"),sf:a("once_per_load"),wf:a("setup_tags"),xf:a("tag_id"),yf:a("teardown_tags")}}();var Zd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(Zd,Error);function $d(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)$d(a[c],b[c])}};var ae=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ae,Error);var ce=function(){return function(a,b){a instanceof ae||(a=new ae(a,be));b&&a.g.push(b);throw a;}};function be(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var de=null,ge=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];de=ee(a);for(var e=0;e<Gd.length;e++){var f=Gd[e],g=fe(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],p=0;p<Nd.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},fe=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=de(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=de(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ee=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Xd(Hd[c],a));return b[c]}};var he={zh:function(a,b){b[Yd.ye]&&"string"===typeof a&&(a=1==b[Yd.ye]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Yd.Ae)&&null===a&&(a=b[Yd.Ae]);b.hasOwnProperty(Yd.Ce)&&void 0===a&&(a=b[Yd.Ce]);b.hasOwnProperty(Yd.Be)&&!0===a&&(a=b[Yd.Be]);b.hasOwnProperty(Yd.ze)&&!1===a&&(a=b[Yd.ze]);return a}};var ie=function(){this.g={}};function je(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Zd(c,d,g);}}function ke(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));je(e,b,d,g);je(f,b,d,g)}}}};var oe=function(a){var b=le.F,c=this;this.o=new ie;this.g={};var d={},e=ke(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ta(a,function(f,g){var h={};Ta(g,function(l,m){var p=me(l,m);h[l]=p.assert;d[l]||(d[l]=p.N)});c.g[f]=function(l,m){var p=h[l];if(!p)throw ne(l,{},"The requested permission "+l+" is not configured.");var n=Array.prototype.slice.call(arguments,0);p.apply(void 0,n);e.apply(void 0,n)}})},qe=function(a){return pe.g[a]||
function(){}};function me(a,b){var c=Td(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ne;try{return Ud(c)}catch(d){return{assert:function(e){throw new Zd(e,{},"Permission "+e+" is unknown.");},N:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ne(a,b,c){return new Zd(a,b,c)};var re=!1;var se={};se.Li=Xa('');se.Fh=Xa('');var te=re,ue=se.Fh,ve=se.Li;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Me.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),n=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=n;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=p.slice(p.indexOf("/"));h=Ke(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Pe,Qe=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.ph&&(l["fix_"+m]=!0),l.Kf=l.Kf||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},n={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=n.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,ba:r.ba,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,w,y,x,z){var A=y||x||z||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=A;u[w]=C.textContent||C.innerText||A});return{tagName:r[1],ba:u,ad:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in p)if(p[r].test(h)){var u=n[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.Kf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Qf=function(){return this[this.length-1]};v.Vd=function(C){var D=this.Qf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.yh=
function(C){for(var D=0,E;E=this[D];D++)if(E.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.ad=r.test(C.tagName)||C.ad);return C},y=t,x=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Vd("TABLE")?(h="<TBODY>"+h,A()):l.cj&&u.test(D)&&v.yh(D)?v.Vd(D)?x():(h="</"+C.tagName+">"+h,A()):C.ad||v.push(C)},endTag:function(C){v.Qf()?l.Hh&&!v.Vd(C.tagName)?x():v.pop():l.Hh&&(y(),A())}},A=function(){var C=h,D=w(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return w(y())}}();return{append:function(r){h+=r},vi:t,gj:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},ij:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.lj="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.jj=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Pe=a})();(function(){function a(){}function b(n){return void 0!==n&&null!==n}function c(n,t,r){var u,v=n&&n.length||0;for(u=0;u<v;u++)t.call(r,n[u],u)}function d(n,t,r){for(var u in n)n.hasOwnProperty(u)&&t.call(r,u,n[u])}function e(n,t){d(t,
function(r,u){n[r]=u});return n}function f(n,t){n=n||{};d(t,function(r,u){b(n[r])||(n[r]=u)});return n}function g(n){try{return m.call(n)}catch(r){var t=[];c(n,function(u){t.push(u)});return t}}var h={gh:a,hh:a,ih:a,jh:a,qh:a,rh:function(n){return n},done:a,error:function(n){throw n;},yi:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function n(r,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,v):
r.removeAttribute(w)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,fc:v.defaultView||v.parentWindow,lb:v,Rc:Pe("",{ph:!0}),Cd:[r],ie:"",je:v.createElement(r.nodeName),$b:[],Va:[]});n(this.je,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Va,arguments);for(var r;!this.Hc&&this.Va.length;)r=this.Va.shift(),"function"===typeof r?this.wh(r):this.ue(r)};t.prototype.wh=function(r){var u={type:"function",value:r.name||r.toString()};this.ae(u);r.call(this.fc,this.lb);this.Sf(u)};
t.prototype.ue=function(r){this.Rc.append(r);for(var u,v=[],w,y;(u=this.Rc.vi())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Oi(v);w&&this.Qh(u);y&&this.Rh(u)};t.prototype.Oi=function(r){var u=this.th(r);u.Af&&(u.Rd=this.ie+u.Af,this.ie+=u.si,this.je.innerHTML=u.Rd,this.Mi())};t.prototype.th=function(r){var u=this.Cd.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.ba){if(!/^noscript$/i.test(x.tagName)){var z=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.ba.id&&"ps-style"!==x.ba.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.ad?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{mj:r,raw:v.join(""),Af:w.join(""),si:y.join("")}};t.prototype.Mi=function(){for(var r,u=[this.je];b(r=u.shift());){var v=1===r.nodeType;if(!v||!n(r,"proxyof")){v&&(this.Cd[n(r,"id")]=r,n(r,"id",null));var w=r.parentNode&&n(r.parentNode,"proxyof");
w&&this.Cd[w].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.Qh=function(r){var u=this.Rc.clear();u&&this.Va.unshift(u);r.src=r.ba.src||r.ba.Wi;r.src&&this.$b.length?this.Hc=r:this.ae(r);var v=this;this.Ni(r,function(){v.Sf(r)})};t.prototype.Rh=function(r){var u=this.Rc.clear();u&&this.Va.unshift(u);r.type=r.ba.type||r.ba.TYPE||"text/css";this.Pi(r);u&&this.write()};t.prototype.Pi=function(r){var u=this.vh(r);this.Uh(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.lb.createTextNode(r.content)))};t.prototype.vh=function(r){var u=this.lb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.ba,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Uh=function(r){this.ue('<span id="ps-style"/>');var u=this.lb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.ae=function(r){r.li=this.Va;this.Va=[];this.$b.unshift(r)};t.prototype.Sf=function(r){r!==this.$b[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.$b.shift(),this.write.apply(this,r.li),!this.$b.length&&this.Hc&&(this.ae(this.Hc),this.Hc=null))};t.prototype.Ni=function(r,u){var v=this.uh(r),w=this.Gi(v),y=this.options.gh;r.src&&(v.src=r.src,this.Bi(v,w?y:function(){u();y()}));try{this.Th(v),r.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.uh=function(r){var u=this.lb.createElement(r.tagName);d(r.ba,function(v,w){u.setAttribute(v,w)});r.content&&(u.text=r.content);return u};t.prototype.Th=function(r){this.ue('<span id="ps-script"/>');
var u=this.lb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.Bi=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);u()}})};t.prototype.Gi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.yi&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function n(){var w=u.shift(),y;w&&(y=w[w.length-1],y.hh(),w.stream=t.apply(null,w),y.ih())}function t(w,y,x){function z(E){E=x.rh(E);v.write(E);x.jh(E)}v=new p(w,x);v.id=r++;v.name=x.name||v.id;var A=w.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.fc.onerror||a;v.fc.onerror=function(E,J,Q){x.error({msg:E+
" - "+J+":"+Q});D.apply(v.fc,arguments)};v.write(y,function(){e(A,C);v.fc.onerror=D;x.done();v=null;n()});return v}var r=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ej?w[0]:w;var z=[w,y,x];w.oi={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.qh(z);u.push(z);v||n();return w.oi},{streams:{},fj:u,Yi:p})}();Qe=l.postscribe}})();var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof pb?p="Fn":l instanceof k?p="List":l instanceof tb?p="DustMap":
l instanceof yb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new pb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.g(d[e]);return b.apply(this,d)});c.s=!0;return c},We=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Ve(a+"_"+d,e)):(La(e)||q(e)||"boolean"==typeof e)&&c.set(d,e)}c.s=!0;return c};var Xe=function(a,b){H(this.o.g,["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){H(this.o.g,["actual:?*","message:?string"],arguments);var c={},d=new tb;return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.s,d=0;d<arguments.length;++d)b.push(Eb(arguments[d],c));return Db(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var bf=function(a){var b;return b};var cf=function(a){var b;return b};var df=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURI(a)};var ef=function(a){H(this.o.g,["uri:!string"],arguments);return encodeURIComponent(a)};var ff=function(a){H(this.o.g,["message:?string"],arguments);};var gf=function(a,b){H(this.o.g,["min:!number","max:!number"],arguments);return Pa(a,b)};var hf=function(a,b,c){var d=a.s.g;if(!d)throw Error("Missing program state.");d.oh.apply(null,Array.prototype.slice.call(arguments,1))};var jf=function(){hf(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-5P4V6Z');a.set("version",'417');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",ve);a.set("environmentMode",ue);a.s=!0;return a};var kf=function(){return(new Date).getTime()};var lf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof pb)return"function";if(a instanceof yb){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var mf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(te||ve)&&a.call(this,e.message)}}}return{parse:b(function(c){return Db(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Eb(c))})}};var nf=function(a){return Va(Eb(a,this.s))};var of=function(a){return Number(Eb(a,this.s))};var pf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var qf=function(a,b,c){var d=null,e=!1;return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var rf=function(){var a={};return{Mh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Fi:function(b,c){a[b]=c},reset:function(){a={}}}},sf=function(a,b){H(this.o.g,["apiName:!string","mock:?*"],arguments);};var tf=function(){this.g={};this.o={}};tf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
tf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Ve(a,b):We(a,b)};
var uf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ka(c)?Ve(b,c):We(b,c)};function vf(){var a={};return a};var I={Fb:"_ee",Bd:"_syn",Xi:"_uei",vd:"_eu",Vi:"_pci",jd:"event_callback",oc:"event_timeout",ja:"gtag.config",Ma:"gtag.get",na:"purchase",ab:"refund",La:"begin_checkout",Za:"add_to_cart",$a:"remove_from_cart",pg:"view_cart",Ge:"add_to_wishlist",Aa:"view_item",Fe:"view_promotion",Ee:"select_promotion",dd:"select_item",kc:"view_item_list",De:"add_payment_info",og:"add_shipping_info",Da:"value_key",Ca:"value_callback",ka:"allow_ad_personalization_signals",rd:"restricted_data_processing",vb:"allow_google_signals",
la:"cookie_expires",yb:"cookie_update",Cb:"session_duration",qa:"user_properties",Pa:"transport_url",O:"ads_data_redaction",C:"ad_storage",K:"analytics_storage",xe:"region",hg:"wait_for_update"};I.ff=[I.na,I.ab,I.La,I.Za,I.$a,I.pg,I.Ge,I.Aa,I.Fe,I.Ee,I.kc,I.dd,I.De,I.og];I.ef=[I.ka,I.vb,I.yb];I.hf=[I.la,I.oc,I.Cb];var wf={},xf=function(a,b){wf[a]=wf[a]||[];wf[a][b]=!0},yf=function(a){for(var b=[],c=wf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var zf=function(a){xf("GTM",a)};var Af=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Cf,Df=function(){if(void 0===Cf){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Cf=a}else Cf=a}return Cf};var Ff=function(a,b){this.g=b===Ef?a:""};Ff.prototype.toString=function(){return this.g+""};var Ef={};var Gf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hf;a:{var If=oa.navigator;if(If){var Jf=If.userAgent;if(Jf){Hf=Jf;break a}}Hf=""}var Kf=function(a){return-1!=Hf.indexOf(a)};var Mf=function(a,b,c){this.g=c===Lf?a:""};Mf.prototype.toString=function(){return this.g.toString()};var Nf=function(a){return a instanceof Mf&&a.constructor===Mf?a.g:"type_error:SafeHtml"},Lf={},Of=new Mf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Lf);var Pf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Nf(Of);return!c.parentElement}),Qf=function(a,b){if(Pf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nf(b)};var Rf=function(a){var b=Df(),c=b?b.createHTML(a):a;return new Mf(c,null,Lf)};var F=window,M=document,Sf=navigator,Tf=M.currentScript&&M.currentScript.src,Uf=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Vf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Wf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Df(),g=f?f.createScriptURL(a):a;e=new Ff(g,Ef);d.src=e instanceof Ff&&e.constructor===Ff?e.g:"type_error:TrustedResourceUrl";
var h=va(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Vf(d,b);c&&(d.onerror=c);var l=va();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},Xf=function(){if(Tf){var a=Tf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Yf=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Vf(c,b);void 0!==a&&(c.src=a);return c},Zf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},$f=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ag=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){F.setTimeout(a,
0)},bg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},dg=function(a){var b=M.createElement("div"),c=Rf("A<div>"+a+"</div>");Qf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},fg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},gg=function(a){Sf.sendBeacon&&Sf.sendBeacon(a)||Zf(a)},hg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ig={},jg=function(){return void 0==ig.gtag_cs_api?!1:ig.gtag_cs_api};var kg=[];function lg(){var a=Uf("google_tag_data",{});a.ics||(a.ics={entries:{},set:mg,update:ng,addListener:og,notifyListeners:pg,active:!1,usedDefault:!1});return a.ics}
function mg(a,b,c,d,e,f){var g=lg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&q(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var n=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:n};h[a]=t;n&&F.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,qg(a),pg(),xf("TAGGING",2))},f)}}}
function ng(a,b){var c=lg();c.active=!0;if(void 0!=b){var d=rg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=rg(a);f.quiet?(f.quiet=!1,qg(a)):g!==d&&qg(a)}}function og(a,b){kg.push({Ef:a,Ih:b})}function qg(a){for(var b=0;b<kg.length;++b){var c=kg[b];Na(c.Ef)&&-1!==c.Ef.indexOf(a)&&(c.Uf=!0)}}function pg(a){for(var b=0;b<kg.length;++b){var c=kg[b];if(c.Uf){c.Uf=!1;try{c.Ih({Df:a})}catch(d){}}}}
var rg=function(a){var b=lg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},sg=function(a){return(lg().entries[a]||{}).initial},tg=function(a){return!(lg().entries[a]||{}).quiet},ug=function(){return jg()?lg().active:!1},vg=function(a,b){lg().addListener(a,b)},wg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!tg(b[e]))return!0;return!1}if(c()){var d=!1;vg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},xg=function(a,b){if(!1===rg(b)){var c=!1;vg([b],
function(d){!c&&rg(b)&&(a(d),c=!0)})}};function yg(a){for(var b=[],c=0;c<zg.length;c++){var d=a(zg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var zg=[I.C,I.K],Ag=function(a){var b=a[I.xe];b&&zf(40);var c=a[I.hg];c&&zf(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<zg.length;f++){var g=zg[f],h=a[zg[f]],l=d[e];lg().set(g,h,l,"IN","IN-TG",c)}},Bg=function(a,b){for(var c=0;c<zg.length;c++){var d=zg[c],e=a[zg[c]];lg().update(d,e)}lg().notifyListeners(b)},Cg=function(a){var b=rg(a);return void 0!=b?b:!0},Dg=function(){return"G1"+yg(rg)},Eg=function(a,b){wg(a,b)};var Gg=function(a){return Fg?M.querySelectorAll(a):null},Hg=function(a,b){if(!Fg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ig=!1;if(M.querySelectorAll)try{var Jg=M.querySelectorAll(":root");Jg&&1==Jg.length&&Jg[0]==M.documentElement&&(Ig=!0)}catch(a){}var Fg=Ig;var Kg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var Lg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Mg=function(a){var b=Lg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Ng=[],Og=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),Pg=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ng.length;f++)if(!Ng[f])return Ng[f]=d,f;return Ng.push(d)-1},Qg=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:ab()};N(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Mg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Rg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Og){var e=!1;N(function(){e||
Qg(a,b,c)()});return Pg(function(f){e=!0;for(var g={qb:0};g.qb<f.length;g={qb:g.qb},g.qb++)N(function(h){return function(){return a(f[h.qb])}}(g))},b,c)}return F.setInterval(Qg(a,b,c),1E3)},Sg=function(a){Og?0<=a&&a<Ng.length&&Ng[a]&&(Ng[a].disconnect(),Ng[a]=void 0):F.clearInterval(a)};var Tg=/:[0-9]+$/,Ug=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Xg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Vg(a.protocol)||Vg(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(Tg,"").toLowerCase());return Wg(a,b,c,d,e)},Wg=function(a,b,c,d,e){var f,g=Vg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Yg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Tg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||xf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=B(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ug(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Vg=function(a){return a?a.replace(":",
"").toLowerCase():""},Yg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Zg=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||xf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Tg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},$g=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Zg(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ah=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),bh=new RegExp(/support|noreply/i),ch=["SCRIPT","IMG","SVG","PATH","BR"],dh=["BR"];function eh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=eh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var hh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ch.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=dh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var p=c,n=p.elements,t=[],r=0;r<n.length;r++){var u=n[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(ah);if(w){var y=w[0],x;if(F.location){var z=Wg(F.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,bd:y})}}}var A;for(var C=[],D=10<t.length?"3":p.status,E=0;E<t.length&&
10>E;E++){var J=t[E].element,Q=t[E].bd,V=!1;C.push({bd:Q,querySelector:eh(J),tagName:J.tagName,isVisible:!Kg(J),type:1,Pc:!!V})}return{elements:C,status:D}};var le={},O=null,vh=Math.random();le.F="GTM-5P4V6Z";le.Ac="1k0";le.Si="";le.ig="ChAIgN7JgAYQiqu6/b6fo7xhEiMA2Wn1SIUCpnzrmLIMwBGM2gmIVZ3ZsHvlwgDVAsVrGZArVhoCKnU\x3d";var wh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},xh={__paused:!0,__tg:!0},yh;for(yh in wh)wh.hasOwnProperty(yh)&&(xh[yh]=!0);var zh="www.googletagmanager.com/gtm.js";
var Ah=zh,Bh=Xa(""),Ch=null,Dh=null,Eh="//www.googletagmanager.com/a?id="+le.F+"&cv=417",Fh={},Gh={},Hh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Ih={},Jh=new Qa,Kh={},Lh={},Oh={name:"dataLayer",set:function(a,b){G(kb(a,b),Kh);Mh()},get:function(a){return Nh(a,2)},reset:function(){Jh=new Qa;Kh={};Mh()}},Nh=function(a,b){return 2!=b?Jh.get(a):Ph(a)},Ph=function(a,b){var c=a.split(".");b=b||[];for(var d=Kh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==B(b,d))return}return d},Qh=function(a,b){Lh.hasOwnProperty(a)||(Jh.set(a,b),G(kb(a,b),Kh),Mh())},Mh=function(a){Ta(Lh,function(b,c){Jh.set(b,c);G(kb(b,void 0),
Kh);G(kb(b,c),Kh);a&&delete Lh[b]})},Rh=function(a,b,c){Ih[a]=Ih[a]||{};var d=1!==c?Ph(b):Jh.get(b);"array"===Ab(d)||"object"===Ab(d)?Ih[a][b]=G(d):Ih[a][b]=d},Sh=function(a,b){if(Ih[a])return Ih[a][b]},Th=function(a,b){Ih[a]&&delete Ih[a][b]};var Wh={},Xh=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===Wh[a]&&(Wh[a]=Math.floor(Math.random()*b));return Wh[a]};var Yh=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function Zh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ai=function(a,b,c,d){return $h(d)?Zh(a,String(b||document.cookie),c):[]},di=function(a,b,c,d,e){if($h(e)){var f=bi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ci(f,function(g){return g.Ic},b);if(1===f.length)return f[0].id;f=ci(f,function(g){return g.Xb},c);return f[0]?f[0].id:void 0}}};function ei(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ai(b,f,!1,d).indexOf(c)}
var ii=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!$h(c.ya))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fi);g=e(g,"samesite",
c.zi);c.Ci&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=gi(),n=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){n=w;continue}t=!0;if(!hi(u,c.path)&&ei(v,a,b,c.ya))return 0}if(n&&!t)throw n;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return hi(m,c.path)?1:ei(g,a,b,c.ya)?0:1},ji=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ii(a,b,c)};
function ci(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function bi(a,b,c){for(var d=[],e=ai(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Ic:1*l[0]||1,Xb:1*l[1]||1}))}}return d}
var fi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ki=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,li=/(^|\.)doubleclick\.net$/i,hi=function(a,b){return li.test(document.location.hostname)||"/"===b&&ki.test(a)},gi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;li.test(e)||ki.test(e)||a.push("none");
return a},$h=function(a){if(!jg()||!a||!ug())return!0;if(!tg(a))return!1;var b=rg(a);return null==b?!0:!!b};var mi=function(){for(var a=Sf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^Yh(a)&2147483647,Math.round(ab()/1E3)].join(".")},pi=function(a,b,c,d,e){var f=ni(b);return di(a,f,oi(c),d,e)},qi=function(a,b,c,d){var e=""+ni(c),f=oi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ni=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ri(a,b,c){var d,e=a.Wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||ab())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var si=["1"],ti={},wi=function(a){var b=ui(a.prefix),c=ti[b];c&&vi(b,c,a)},yi=function(a){var b=ui(a.prefix);if(!ti[b]&&!xi(b,a.path,a.domain)){var c=mi();vi(b,c,a);var d=Uf("google_tag_data",{});d._gcl_au?xf("GTM",57):d._gcl_au=c;xi(b,a.path,a.domain)}};function vi(a,b,c){var d=qi(b,"1",c.domain,c.path),e=ri(c);e.ya="ad_storage";ji(a,d,e)}function xi(a,b,c){var d=pi(a,b,c,si,"ad_storage");d&&(ti[a]=d);return d}function ui(a){return(a||"_gcl")+"_au"};function zi(){for(var a=Ai,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ai,Ci;
function Di(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Ci[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ai=Ai||Bi();Ci=Ci||zi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ei;var Ii=function(){var a=Fi,b=Gi,c=Hi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){$f(M,"mousedown",d);$f(M,"keyup",d);$f(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ji=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hi().decorators.push(f)},Ki=function(a,b,c){for(var d=Hi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==M.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[n])||p&&0<=l[n].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&db(e,g.callback())}}return e},Hi=function(){var a=Uf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Li=/(.*?)\*(.*?)\*(.*)/,Mi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ni=/^(?:www\.|m\.|amp\.)+/,Si=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ti(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Vi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Ai=Ai||Bi();Ci=Ci||zi();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,n=m+2<h.length,t=h.charCodeAt(m),r=p?h.charCodeAt(m+1):0,u=n?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;n||(x=64,p||(y=64));l.push(Ai[v],Ai[w],Ai[y],Ai[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Ui(z),
z].join("*")},Ui=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ei)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ei=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ei[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Xi=function(){return function(a){var b=Zg(F.location.href),
c=b.search.replace("?",""),d=Ug(c,"_gl",!1,!0)||"";a.query=Wi(d)||{};var e=Xg(b,"fragment").match(Ti("_gl"));a.fragment=Wi(e&&e[3]||"")||{}}},Yi=function(a){var b=Xi(),c=Hi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},Wi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Li.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Ui(h,p)){l=!0;break a}l=!1}if(l){for(var n={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)n[t[r]]=Di(t[r+1]);return n}}}}catch(u){}};function Zi(a,b,c,d){function e(p){var n=p,t=Ti(a).exec(n),r=n;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Si.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function $i(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ki(b,1,c),e=Ki(b,2,c),f=Ki(b,3,c);if(eb(d)){var g=Vi(d);c?aj("_gl",g,a):bj("_gl",g,a,!1)}if(!c&&eb(e)){var h=Vi(e);bj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){bj(m,p,n,void 0);break a}if("form"===n.tagName.toLowerCase()){aj(m,p,n);break a}}"string"==typeof n&&Zi(m,p,n,void 0)}}
function bj(a,b,c,d){if(c.href){var e=Zi(a,b,c.href,void 0===d?!1:d);Gf.test(e)&&(c.href=e)}}
function aj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Zi(a,b,c.action);Gf.test(m)&&(c.action=m)}}}
var Fi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||$i(e,e.hostname)}}catch(g){}},Gi=function(a){try{if(a.action){var b=Xg(Zg(a.action),"host");$i(a,b)}}catch(c){}},cj=function(a,b,c,d){Ii();Ji(a,b,"fragment"===c?2:1,!!d,!1)},dj=function(a,b){Ii();Ji(a,[Wg(F.location,"host",!0)],b,!0,!0)},ej=function(){var a=M.location.hostname,b=Mi.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ni,""),l=e.replace(Ni,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},fj=function(a,b){return!1===a?!1:a||b||ej()};var gj=/^\w+$/,hj=/^[\w-]+$/,ij=/^~?[\w-]+$/,jj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},kj=function(){if(!jg()||!ug())return!0;var a=rg("ad_storage");return null==a?!0:!!a},lj=function(a,b){tg("ad_storage")?kj()?a():xg(a,"ad_storage"):b?xf("TAGGING",3):wg(function(){lj(a,!0)},["ad_storage"])},oj=function(a){var b=[];if(!M.cookie)return b;var c=ai(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=mj(c[d]);e&&-1===B(b,e)&&b.push(e)}return nj(b)};
function pj(a){return a&&"string"==typeof a&&a.match(gj)?a:"_gcl"}
var rj=function(){var a=Zg(F.location.href),b=Xg(a,"query",!1,void 0,"gclid"),c=Xg(a,"query",!1,void 0,"gclsrc"),d=Xg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ug(e,"gclid",!1,void 0);c=c||Ug(e,"gclsrc",!1,void 0)}return qj(b,c,d)},qj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(hj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},sj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},uj=function(a){var b=rj();lj(function(){tj(b,a)})};
function tj(a,b,c){function d(l,m){var p=vj(l,e);p&&ji(p,m,f)}b=b||{};var e=pj(b.prefix);c=c||ab();var f=ri(b,c,!0);f.ya="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.nj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var xj=function(a,b){var c=Yi(!0);lj(function(){for(var d=pj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==jj[f]){var g=vj(f,d),h=c[g];if(h){var l=Math.min(wj(h),ab()),m;b:{for(var p=l,n=ai(g,M.cookie,void 0,"ad_storage"),t=0;t<n.length;++t)if(wj(n[t])>p){m=!0;break b}m=!1}if(!m){var r=ri(b,l,!0);r.ya="ad_storage";ji(g,h,r)}}}}tj(qj(c.gclid,c.gclsrc),b)})},vj=function(a,b){var c=jj[a];if(void 0!==c)return b+c},wj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function mj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yj=function(a,b,c,d,e){if(Na(b)){var f=pj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=vj(a[l],f);if(m){var p=ai(m,M.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};lj(function(){cj(g,b,c,d)})}},nj=function(a){return a.filter(function(b){return ij.test(b)})},zj=function(a,b){for(var c=pj(b.prefix),d={},e=0;e<a.length;e++)jj[a[e]]&&(d[a[e]]=jj[a[e]]);lj(function(){Ta(d,function(f,g){var h=ai(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=wj(l),
p={};p[f]=[mj(l)];tj(p,b,m)}})})};function Aj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Bj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(ug()){var c=rj();if(Aj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);dj(function(){return d},3);dj(function(){var e={};return e._up="1",e},1)}}},Cj=function(){var a;if(kj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({qe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].qe]||(g[b[h].qe]=[]),g[b[h].qe].push({timestamp:l[1],Lc:l[2]}))}a=g}else a={};return a};var Dj=/^\d+\.fls\.doubleclick\.net$/,Ej=!1;function Fj(a,b){tg(I.C)?Cg(I.C)?a():xg(a,I.C):b?zf(42):Eg(function(){Fj(a,!0)},[I.C])}function Gj(a){var b=Zg(F.location.href),c=Xg(b,"host",!1);if(c&&c.match(Dj)){var d=Xg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Hj(a,b,c){if("aw"==a||"dc"==a){var d=Gj("gcl"+a);if(d)return d.split(".")}var e=pj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Cg(I.C)&&c,g;g=rj()[a]||[];if(0<g.length)return f?["0"]:g}var h=vj(a,e);return h?oj(h):[]}
var Ij=function(a){var b=Gj("gac");if(b)return!Cg(I.C)&&a?"0":decodeURIComponent(b);var c=Cj(),d=[];Ta(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Lc);g=nj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Kj=function(a,b){if(Ej)Jj(a,b,"dc");else{var c=rj().dc||[];Fj(function(){yi(b);var d=ti[ui(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;gg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&wi(b)})}},Jj=function(a,b,c){var d=rj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!sj(h,c)||e.push({Lc:f,Mf:h});!g||c&&"dc"!==c||e.push({Lc:g,Mf:"ds"});Fj(function(){yi(b);var l=ti[ui(b.prefix)],m=!1;if(l&&0<e.length)for(var p=O.joined_auid=O.joined_auid||{},n=0;n<e.length;n++){var t=e[n],r=t.Lc,u=t.Mf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;gg(w);
m=p[v]=!0}}null==a&&(a=m);a&&l&&wi(b)})};var Lj=/[A-Z]+/,Mj=/\s/,Nj=function(a){if(q(a)&&(a=Za(a),!Mj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Lj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Pj=function(a){for(var b={},c=0;c<a.length;++c){var d=Nj(a[c]);d&&(b[d.id]=d)}Oj(b);var e=[];Ta(b,function(f,g){e.push(g)});return e};
function Oj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Qj=function(){var a=!1;return a};var Sj=function(a,b,c,d){return(2===Rj()||d||"http:"!=F.location.protocol?a:b)+c},Rj=function(){var a=Xf(),b;if(1===a)a:{var c=Ah;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var gk=function(a){return Cg(I.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=$g(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},hk=function(){var a;if(!(a=Bh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Sf&&Sf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return Xh(1,100)<d?Xh(2,2):-1},ik=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var jk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),kk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},lk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},mk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ok=function(a){var b=Nh("gtm.allowlist")||Nh("gtm.whitelist");b&&zf(9);var c=b&&gb(Ya(b),kk),d=Nh("gtm.blocklist")||Nh("gtm.blacklist");d||(d=Nh("tagTypeBlacklist"))&&
zf(3);d?zf(8):d=[];nk()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=B(Ya(d),"google")&&zf(2);var e=d&&gb(Ya(d),lk),f={};return function(g){var h=g&&g[Yd.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Gh[h]||[],m=a(h,l);if(b){var p;if(p=m)a:{if(0>B(c,h))if(l&&0<l.length)for(var n=0;n<
l.length;n++){if(0>B(c,l[n])){zf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var r=0<=B(e,h);if(r)t=r;else{var u=Sa(e,l||[]);u&&zf(10);t=u}}var v=!m||t;v||!(0<=B(l,"sandboxedScripts"))||c&&-1!==B(c,"sandboxedScripts")||(v=Sa(e,mk));return f[h]=v}},nk=function(){return jk.test(F.location&&F.location.hostname)};var pk={active:!0,isAllowed:function(){return!0}},qk=function(a){var b=O.zones;return b?b.checkState(le.F,a):pk},rk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var sk=function(){},tk=function(){};var uk=!1,vk=0,wk=[];function xk(a){if(!uk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){uk=!0;for(var e=0;e<wk.length;e++)N(wk[e])}wk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function yk(){if(!uk&&140>vk){vk++;try{M.documentElement.doScroll("left"),xk()}catch(a){F.setTimeout(yk,50)}}}var zk=function(a){uk?a():wk.push(a)};var Ak={},Bk={},Ck=function(a,b,c,d){if(!Bk[a]||xh[b]||"__zone"===b)return-1;var e={};Cb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return Bk[a].tags.push(e)-1},Dk=function(a,b,c,d){if(Bk[a]){var e=Bk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ek(a){for(var b=Ak[a]||[],c=0;c<b.length;c++)b[c]();Ak[a]={push:function(d){d(le.F,Bk[a])}}}
var Hk=function(a,b,c){Bk[a]={tags:[]};Ka(b)&&Fk(a,b);c&&F.setTimeout(function(){return Ek(a)},Number(c));return Gk(a)},Fk=function(a,b){Ak[a]=Ak[a]||[];Ak[a].push(cb(function(){return N(function(){b(le.F,Bk[a])})}))};function Gk(a){var b=0,c=0,d=!1;return{add:function(){c++;return cb(function(){b++;d&&b>=c&&Ek(a)})},nh:function(){d=!0;b>=c&&Ek(a)}}};var Ik=function(){function a(d){return!La(d)||0>d?0:d}if(!O._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(Oh.get("gtm.start"))?Oh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Dh-b)}}};var Mk={},Nk=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Ok=!1;
var Pk=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||zf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Ik();return F[b]},Qk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Nk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Rk=function(a){};
var Tk=function(a){},Sk=function(){return F.GoogleAnalyticsObject||"ga"},Uk=function(a,b){return function(){var c=Nk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Zk=function(){return"&tc="+Nd.filter(function(a){return a}).length},bl=function(){2022<=$k().length&&al()},dl=function(){cl||(cl=F.setTimeout(al,500))},al=function(){cl&&(F.clearTimeout(cl),cl=void 0);void 0===el||fl[el]&&!gl&&!hl||(il[el]||jl.Xh()||0>=kl--?(zf(1),il[el]=!0):(jl.wi(),Zf($k()),fl[el]=!0,ll=ml=nl=hl=gl=""))},$k=function(){var a=el;if(void 0===a)return"";var b=yf("GTM"),c=yf("TAGGING");return[ol,fl[a]?"":"&es=1",pl[a],b?"&u="+b:"",c?"&ut="+c:"",Zk(),gl,hl,nl?nl:"",ml,ll,"&z=0"].join("")},
ql=function(){return[Eh,"&v=3&t=t","&pid="+Pa(),"&rv="+le.Ac].join("")},rl="0.005000">Math.random(),ol=ql(),sl=function(){ol=ql()},fl={},gl="",hl="",ll="",ml="",nl="",el=void 0,pl={},il={},cl=void 0,jl=function(a,b){var c=0,d=0;return{Xh:function(){if(c<a)return!1;ab()-d>=b&&(c=0);return c>=a},wi:function(){ab()-d>=b&&(c=0);c++;d=ab()}}}(2,1E3),kl=1E3,tl=function(a,b,c){if(rl&&!il[a]&&b){a!==el&&(al(),el=a);var d,e=String(b[Yd.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;gl=gl?gl+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Pd[g]?"1":"2")+d;ll=ll?ll+"."+h:"&ti="+h;dl();bl()}},ul=function(a,b,c){if(rl&&!il[a]){a!==el&&(al(),el=a);var d=c+b;hl=hl?hl+"."+d:"&epr="+d;dl();bl()}},vl=function(a,b,c){};
var wl=function(){return!1},xl=function(){var a={};return function(b,c,d){}};function yl(a,b,c,d){var e=Nd[a],f=zl(a,b,c,d);if(!f)return null;var g=Vd(e[Yd.wf],c,[]);if(g&&g.length){var h=g[0];f=yl(h.index,{onSuccess:f,onFailure:1===h.If?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zl(a,b,c,d){function e(){if(f[Yd.Wg])h();else{var w=Wd(f,c,[]);var z=Ck(c.id,String(f[Yd.Qa]),Number(f[Yd.xf]),w[Yd.Xg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"5");Dk(c.id,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=ab()-D;tl(c.id,Nd[a],"6");Dk(c.id,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;tl(c.id,f,"1");var C=function(){var E=ab()-D;tl(c.id,f,"7");Dk(c.id,z,"exception",E);A||(A=!0,h())};var D=ab();try{Ud(w,c)}catch(E){C(E)}}}var f=Nd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Td(f))return null;var m=Vd(f[Yd.yf],c,[]);if(m&&m.length){var p=m[0],n=yl(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!n)return null;g=n;h=2===p.If?l:n}if(f[Yd.sf]||f[Yd.Zg]){var t=f[Yd.sf]?Od:
c.Hi,r=g,u=h;if(!t[a]){e=cb(e);var v=Al(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Al(a,b,c){var d=[],e=[];b[a]=Bl(d,e,c);return{onSuccess:function(){b[a]=Cl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Dl;for(var f=0;f<e.length;f++)e[f]()}}}function Bl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Cl(a){a()}function Dl(a,b){b()};var Gl=function(a,b,c){for(var d=[],e=0;e<Nd.length;e++)if(a[e]){var f=Nd[e];var g=c.add();try{var h=yl(e,{onSuccess:g,onFailure:g,terminate:g},b,e);if(h){var l=d,m=l.push,p=e,n=f["function"];if(!n)throw"Error: No function name given for function call.";var t=Pd[n];m.call(l,{bg:p,Vf:t?t.priorityOverride||0:0,Jc:h})}else El(e,b),g()}catch(u){g()}}c.nh();d.sort(Fl);for(var r=0;r<d.length;r++)d[r].Jc();return 0<
d.length};function Fl(a,b){var c,d=b.Vf,e=a.Vf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bg,h=b.bg;f=g>h?1:g<h?-1:0}return f}function El(a,b){if(!rl)return;var c=function(d){var e=b.Td(Nd[d])?"3":"4",f=Vd(Nd[d][Yd.wf],b,[]);f&&f.length&&c(f[0].index);tl(b.id,Nd[d],e);var g=Vd(Nd[d][Yd.yf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hl=!1,Ml=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Hl)return!1;Hl=!0}var d=qk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=qk(Number.MAX_SAFE_INTEGER)}rl&&!il[b]&&el!==b&&(al(),el=b,ll=gl="",pl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,dl());var f={id:b,name:c,Td:ok(d.isAllowed),Hi:[],Rf:function(){zf(6)},Cf:Il(b)},g=Hk(b,a.eventCallback,a.eventTimeout);Jl(b);
var h=ge(f);e&&(h=Kl(h));var l=Gl(h,f,g);"gtm.js"!==c&&"gtm.sync"!==c||Tk(le.F);switch(c){case "gtm.init":zf(19),l&&zf(20)}return Ll(h,l)};function Il(a){return function(b){rl&&(Hb(b)||vl(a,"input",b))}}
function Jl(a){Rh(a,"event",1);Rh(a,"ecommerce",1);Rh(a,"gtm");Rh(a,"eventModel");}function Kl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&wh[String(Nd[c][Yd.Qa])]&&(b[c]=!0);return b}function Ll(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Nd[c]&&!xh[String(Nd[c][Yd.Qa])])return!0;return!1}function Nl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Zg(""+c+b).href}}function Ol(a,b){return Pl()?Nl(a,b):void 0}function Pl(){var a=!1;return a};var Ql=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Rl=function(a){var b=new Ql;b.eventModel=a;return b},Sl=function(a,b){a.targetConfig=b;return a},Tl=function(a,b){a.containerConfig=b;return a},Ul=function(a,b){a.remoteConfig=b;return a},Vl=function(a,b){a.globalConfig=
b;return a},Wl=function(a,b){a.onSuccess=b;return a},Xl=function(a,b){a.setContainerTypeLoaded=b;return a},Yl=function(a,b){a.getContainerTypeLoaded=b;return a},Zl=function(a,b){a.onFailure=b;return a};Ql.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var $l=function(a){function b(e){Ta(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ta(c,function(e){d.push(e)});return d};var am;if(3===le.Ac.length)am="g";else{var bm="G";am=bm}
var cm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:am,OPT:"o"},dm=function(a){var b=le.F.split("-"),c=b[0].toUpperCase(),d=cm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===le.Ac.length){var g="w";f="2"+g}else f="";return f+d+le.Ac+e};var em=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var fm=function(){return Kf("iPhone")&&!Kf("iPod")&&!Kf("iPad")};Kf("Opera");Kf("Trident")||Kf("MSIE");Kf("Edge");!Kf("Gecko")||-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")||Kf("Trident")||Kf("MSIE")||Kf("Edge");-1!=Hf.toLowerCase().indexOf("webkit")&&!Kf("Edge")&&Kf("Mobile");Kf("Macintosh");Kf("Windows");Kf("Linux")||Kf("CrOS");var gm=oa.navigator||null;gm&&(gm.appVersion||"").indexOf("X11");Kf("Android");fm();Kf("iPad");Kf("iPod");fm()||Kf("iPad")||Kf("iPod");Hf.toLowerCase().indexOf("kaios");var hm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var im=function(){};var jm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},km=function(a,b){this.o=a;this.g=null;this.D={};this.S=0;this.J=void 0===b?500:b;this.s=null};na(km,im);
var mm=function(a){return"function"===typeof a.o.__tcfapi||null!=lm(a)};
km.prototype.addEventListener=function(a){var b={},c=Bf(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=jm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{nm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};km.prototype.removeEventListener=function(a){a&&a.listenerId&&nm(this,"removeEventListener",null,a.listenerId)};
var pm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=om(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&om(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?om(a.purpose.legitimateInterests,
b)&&om(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},om=function(a,b){return!(!a||!a[b])},nm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(lm(a)){qm(a);var f=++a.S;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},lm=function(a){if(a.g)return a.g;a.g=hm(a.o,"__tcfapiLocator");return a.g},qm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},em(a.o,a.s))};var rm={1:0,3:0,4:0,7:3,9:3,10:3};function sm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var tm=sm("",550),um=sm("",500);function vm(){var a=O.tcf||{};return O.tcf=a}
var wm=function(a,b){this.s=a;this.g=b;this.o=ab();},xm=function(a){},ym=function(a){},Em=function(){var a=vm(),b=new km(F,3E3),c=new wm(b,a);if((zm()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||mm(b))){a.active=!0;a.Zb={};Am();var d=setTimeout(function(){Bm(a);Cm(a);d=null},um);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Bm(a),Cm(a),xm(c);else{var f;if(!1===e.gdprApplies)f=Dm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in rm)if(rm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var p;var n=l;!1===n.gdprApplies?p=!0:(void 0===n.internalErrorState&&(n.internalErrorState=jm(n)),p="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===n.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:pm(l,"1",0):!1}else g[h]=pm(e,h,rm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Zb=f,Cm(a),xm(c))}}),ym(c)}catch(e){d&&(clearTimeout(d),d=null),Bm(a),Cm(a)}}};function Bm(a){a.type="e";a.tcString="tcunavailable";a.Zb=Dm()}function Am(){var a={};Ag((a.ad_storage="denied",a.wait_for_update=tm,a))}
var zm=function(){var a=!1;a=!0;return a};function Dm(){var a={},b;for(b in rm)rm.hasOwnProperty(b)&&(a[b]=!0);return a}function Cm(a){var b={};Bg((b.ad_storage=a.Zb["1"]?"granted":"denied",b))}
var Fm=function(){var a=vm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Gm=function(){var a=vm();return a.active?a.tcString||"":""},Hm=function(a){if(!rm.hasOwnProperty(String(a)))return!0;var b=vm();return b.active&&b.Zb?!!b.Zb[String(a)]:!0};var Im=!1;function Jm(a){var b=String(F.location).split(/[?#]/)[0],c=le.ig||F._CONSENT_MODE_SALT;return a?c?String(Yh(b+a+c)):"0":""}
function Km(a){function b(r){var u;O.reported_gclid||(O.reported_gclid={});u=O.reported_gclid;var v;v=Im&&g&&(!ug()||Cg(I.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(ug()){var z=Cg(I.C);y("gcs",Dg());r&&y("gcu","1");O.dedupe_gclid||
(O.dedupe_gclid=""+mi());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Cg(I.C)){var A=oj("_gcl_aw");y("gclaw",A.join("."))}y("url",String(F.location).split(/[?#]/)[0]);y("dclid",Lm(d,p));!z&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Gm());"1"===Yi(!1)._up&&y("gtm_up","1");y("gclid",Lm(d,
l));y("gclsrc",m);y("gtm",dm(!e));Im&&g&&Cg(I.C)&&(yi(f||{}),y("auid",ti[ui(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");gg(C)}}var c=!!a.Hd,d=!!a.wa,e=a.U,f=void 0===a.Fc?{}:a.Fc,g=void 0===a.Oc?!0:a.Oc,h=rj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",n=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=ug();if(n||t)t?Eg(function(){b();Cg(I.C)||xg(function(r){return b(!0,r.Df)},I.C)},[I.C]):b()}function Lm(a,b){var c=a&&!Cg(I.C);return b&&c?"0":b}var vn=function(){var a=!0;Hm(7)&&Hm(9)&&Hm(10)||(a=!1);var b=!0;b=!1;b&&!un()&&(a=!1);return a},un=function(){var a=!0;Hm(3)&&Hm(4)||(a=!1);return a};var Tn=!1;function Un(){var a=O;return a.gcq=a.gcq||new Vn}
var Wn=function(a,b,c){Un().register(a,b,c)},Xn=function(a,b,c,d){Un().push("event",[b,a],c,d)},Yn=function(a,b){Un().push("config",[a],b)},Zn=function(a,b,c,d){Un().push("get",[a,b],c,d)},$n=function(a){return Un().getRemoteConfig(a)},ao={},bo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},co=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Vn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
eo=function(a,b){var c=Nj(b);return a.D[c.containerId]=a.D[c.containerId]||new bo},fo=function(a,b,c){if(b){var d=Nj(b);if(d&&1===eo(a,b).status){eo(a,b).status=2;var e={};rl&&(e.timeoutId=F.setTimeout(function(){zf(38);dl()},3E3));a.push("require",[e],d.containerId);ao[d.containerId]=ab();if(Qj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ol(c,g)||h;Wf(l)}}}},go=function(a,b,c,d){if(d.U){var e=eo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),p=G(a.o),n=Nh("gtm.uniqueEventId"),t=Nj(d.U).prefix,r=Yl(Xl(Zl(Wl(Vl(Ul(Tl(Sl(Rl(g),h),l),m),p),function(){
ul(n,t,"2");}),function(){ul(n,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{ul(n,t,"1");f(d.U,b,d.s,r)}catch(u){ul(n,t,"4");}}}};aa=Vn.prototype;
aa.register=function(a,b,c){var d=eo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){d.remoteConfig=c}var e=Nj(a),f=ao[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Nh("gtm.uniqueEventId"),m=h,p=ab()-g;if(rl&&!il[l]){l!==el&&(al(),el=l);var n=m+"."+Math.floor(g-f)+
"."+Math.floor(p);ml=ml?ml+","+n:"&cl="+n}delete ao[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(ab()/1E3);fo(this,c,b[0][I.Pa]||this.o[I.Pa]);Tn&&c&&eo(this,c).g&&(d=!1);this.g.push(new co(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(ab()/1E3);0<this.g.length?this.g.splice(1,0,new co(a,d,c,b,!1)):this.g.push(new co(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Tn?!e.U||eo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==eo(this,e.U).status&&!a){Tn&&this.g.push.apply(this.g,c);return}rl&&F.clearTimeout(e.g[0].timeoutId);break;case "set":Ta(e.g[0],function(t,r){G(kb(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[I.vc];delete f[I.vc];var h=eo(this,e.U),l=Nj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||go(this,I.ja,f,e);h.g=!0;delete f[I.Fb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);Tn&&(d=!0);break;case "event":go(this,e.g[1],e.g[0],e);break;case "get":var p={},n=(p[I.Da]=e.g[0],p[I.Ca]=e.g[1],p);go(this,I.Ma,n,e)}this.g.shift()}Tn&&(this.g.push.apply(this.g,c),d&&this.flush())};aa.getRemoteConfig=function(a){return eo(this,a).remoteConfig};function ho(a,b,c){};function io(a,b,c,d){};function jo(a){};var ko=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||bg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lo=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mo=function(a,b,c){lo(a)[b]=c},no=function(a,b,c,d){var e=lo(a),f=bb(e,b,d);e[b]=c(f)},oo=function(a,b,c){var d=lo(a);return bb(d,b,c)};var po={},qo=[];
var xo=function(a,b){};

function Ao(a,b){};var Bo=/^\s*$/,Co,Do=!1;
function Oo(a,b){}function Po(a,b,c){};var Qo=!!F.MutationObserver,Ro=void 0,So=function(a){if(!Ro){var b=function(){var c=M.body;if(c)if(Qo)(new MutationObserver(function(){for(var e=0;e<Ro.length;e++)N(Ro[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;$f(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ro.length;e++)N(Ro[e])}))})}};Ro=[];M.body?b():N(b)}Ro.push(a)};
var To=function(a,b,c){function d(){var g=a();f+=e?(ab()-e)*g.playbackRate/1E3:0;e=ab()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),p=m.Ld,n=void 0!==l?Math.round(l):void 0!==h?Math.round(m.Ld*h):Math.round(m.Hf),t=void 0!==h?Math.round(100*h):0>=p?0:Math.round(n/p*100),r=M.hidden?!1:.5<=Mg(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=ko(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(n);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=t;v["gtm.videoVisible"]=r;return v},Xf:function(){e=ab()},jb:function(){d()}}};var Uo=["www.youtube.com","www.youtube-nocookie.com"],Vo,Wo=!1,Xo=0;
function gp(a,b){}function hp(a,b){
return!0};function ip(a,b){var c;return c};function jp(a){};function kp(a){};var lp=!1,mp=[];function np(){if(!lp){lp=!0;for(var a=0;a<mp.length;a++)N(mp[a])}}var op=function(a){lp?N(a):mp.push(a)};function pp(a){H(this.o.g,["listener:!Fn"],arguments);hf(this,"process_dom_events","window","load");op(Eb(a))};function qp(a,b){var c;var e=!1;var f=Db(c,this.s,e);void 0===f&&void 0!==c&&zf(45);return f};function rp(a){var b;var f=!1;var g=Db(b,this.s,f);void 0===g&&void 0!==b&&zf(45);return g};function sp(a,b){var c=null,d=!1;
return Db(c,this.s,d)};function tp(a){var b;var h=!1;return Db(b,this.s,h)};var up=function(a){var b;return b};function vp(a,b){b=void 0===b?!0:b;var c;return c};function wp(a){var b=null;return b};function xp(a,b){var c;return c};function yp(a,b){var c;return c};function zp(a){var b="";return b};function Ap(a,b){var c;return c};function Bp(a){var b="";return b};function Cp(){hf(this,"get_user_agent");return F.navigator.userAgent};function Dp(a,b){};var Ep={};
function Fp(a,b,c,d){H(this.o.g,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hf(this,"inject_script",a);var e=this.s,f=function(){b instanceof pb&&b.Ta(e)},g=function(){c instanceof pb&&c.Ta(e)};if(!d){Wf(a,f,g);return}var h=d;Ep[h]?(Ep[h].onSuccess.push(f),Ep[h].onFailure.push(g)):(Ep[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ep[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(p){N(p);return 0}},
g=function(){for(var l=Ep[h].onFailure,m=0;m<l.length;m++)N(l[m]);Ep[h]=null},Wf(a,f,g));};var Gp=function(){return!1},Hp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Ip(){};function Jp(a){var b=void 0;return b};function Kp(a,b){var c=!1;return c};function Lp(){var a="";return a};function Mp(){var a="";return a};function Np(a,b,c,d){d=void 0===d?!1:d;};function Op(a,b,c){};function Pp(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Qp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);for(var b=a.Rb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==I.xe&&hf(this,"access_consent",e,"write")}Ag(Eb(a))};function Rp(a,b,c){H(this.o.g,["path:!string","value:?*","overrideExisting:?boolean"],arguments);hf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=F,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Eb(b,this.s,d),!0;return!1};function Sp(a,b,c){};var Tp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Up(a,b,c){var d=this;}
;var Vp={},Wp={};Vp.getItem=function(a){var b=null;return b};
Vp.setItem=function(a,b){};
Vp.removeItem=function(a){};Vp.clear=function(){};var Xp=function(a){var b;return b};function Yp(a){H(this.o.g,["consentSettings:!DustMap"],arguments);var b=Eb(a),c;for(c in b)b.hasOwnProperty(c)&&hf(this,"access_consent",c,"write");Bg(b)};var cd=function(){var a=new tf;Qj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",Dp),a.add("injectScript",Fp));var b=Op;a.add("Math",af());a.add("TestHelper",vf());a.add("addEventCallback",jo);a.add("aliasInWindow",hp);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
ip);a.add("callLater",jp);a.add("copyFromDataLayer",qp);a.add("copyFromWindow",rp);a.add("createArgumentsQueue",sp);a.add("createQueue",tp);a.add("decodeUri",bf);a.add("decodeUriComponent",cf);a.add("encodeUri",df);a.add("encodeUriComponent",ef);a.add("fail",ff);a.add("fromBase64",up,!("atob"in F));a.add("generateRandom",gf);a.add("getContainerVersion",jf);a.add("getCookieValues",vp);a.add("getQueryParameters",xp);a.add("getReferrerQueryParameters",yp);a.add("getReferrerUrl",zp);a.add("getTimestamp",
kf);a.add("getTimestampMillis",kf);a.add("getType",lf);a.add("getUrl",Bp);a.add("localStorage",Hp,!Gp());a.add("logToConsole",Ip);a.add("makeInteger",nf);a.add("makeNumber",of);a.add("makeString",pf);a.add("makeTableMap",qf);a.add("mock",sf);a.add("queryPermission",Kp);a.add("readCharacterSet",Lp);a.add("readTitle",Mp);a.add("sendPixel",b);a.add("setCookie",Pp);a.add("setInWindow",Rp);a.add("sha256",Up);a.add("templateStorage",Vp);a.add("toBase64",Xp,!("btoa"in F));a.add("JSON",mf(function(c){var d=this.s.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Jp);

return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c))b:{var f=this.s.g;if(f){var g=f.Qb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;
else throw Error(c+" is not a valid API name.");}return d}};var ad,pe;
function Zp(){var a=data.runtime||[],b=data.runtime_lines;ad=new Yc;$p();Ed=function(e,f,g){aq(f);var h=new tb;Ta(f,function(r,u){var v=Db(u);void 0===v&&void 0!==u&&zf(44);h.set(r,v)});ad.g.g.D=ce();var l={oh:qe(e),eventId:void 0!==g?g.id:void 0,Qb:function(){return e},log:function(){}};if(wl()){var m=xl(),p=void 0,n=void 0;l.ia={Lb:{},mb:function(r,u,v){1===u&&(p=r);7===u&&(n=v);m(r,u,v)},Xd:rf()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:r,source:n,message:v})}}}var t=
bd(l,[e,h]);ad.g.g.D=void 0;t instanceof ya&&"return"===t.g&&(t=t.o);return Eb(t)};dd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&$d(d,b[c]);ad.Jc(d)}}function aq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){N(b)});Ka(c)&&(a.gtmOnFailure=function(){N(c)})}
function $p(){var a=ad;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;id(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function bq(a){void 0!==a&&Ta(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Gh[e]=Gh[e]||[];Gh[e].push(b)}})};var cq="HA GF G UA AW DC".split(" "),dq=!1,eq={},fq=!1;function gq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.jd]&&(c.eventCallback=b[I.jd]),b[I.oc]&&(c.eventTimeout=b[I.oc]));return c}function hq(){return dq}
var kq={config:function(a){var b;return b},consent:function(a){function b(){hq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){zf(39);var c=Hh(),d=a[1];"default"===d?(b(),Ag(a[2])):"update"===d&&(b(),Bg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&q(b)){var c;if(2<a.length){if(!Cb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=gq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return fq=!0,hq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=pe.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Cb(a[1])?b=G(a[1]):3==a.length&&q(a[1])&&(b={},Cb(a[2])||Na(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},lq={policy:!0};var mq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},oq=function(a){var b=nq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Fq=function(a){if(Eq(a))return a;this.g=a};Fq.prototype.Ph=function(){return this.g};var Eq=function(a){return!a||"object"!==Ab(a)||Cb(a)?!1:"getUntrustedUpdateValue"in a};Fq.prototype.getUntrustedUpdateValue=Fq.prototype.Ph;var Gq=[];var Jq=!1,Kq=function(a){return F["dataLayer"].push(a)},Lq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mq(a){var b=a._clear;Ta(a,function(d,e){"_clear"!==d&&(b&&Qh(d,void 0),Qh(d,e))});Ch||(Ch=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Hh(),a["gtm.uniqueEventId"]=c,Qh("gtm.uniqueEventId",c));return Ml(a)}function Nq(){var a=Gq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ua(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Oq(){for(var a=!1;!Jq&&0<Gq.length;){
Jq=!0;delete Kh.eventModel;Mh();var d=Gq.shift();if(null!=d){var e=Eq(d);if(e){var f=d;d=Eq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Nh(l,1);if(Na(m)||Cb(m))m=G(m);Lh[l]=m}}try{if(Ka(d))try{d.call(Oh)}catch(y){}else if(Na(d)){var p=d;if(q(p[0])){var n=p[0].split("."),t=n.pop(),r=p.slice(1),u=Nh(n.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Ua(d)){a:{var v=
d;if(v.length&&q(v[0])){var w=kq[v[0]];if(w&&(!e||!lq[v[0]])){d=w(v);break a}}d=void 0}if(!d){Jq=!1;continue}}a=Mq(d)||a}}finally{e&&Mh(!0)}}Jq=!1}return!a}function Pq(){var a=Oq();try{mq(F["dataLayer"],le.F)}catch(b){}return a}
var Rq=function(){var a=Uf("dataLayer",[]),b=Uf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};zk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});op(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Fq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Gq.push.apply(Gq,e);if(300<
this.length)for(zf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Oq()&&h};var d=a.slice(0);Gq.push.apply(Gq,d);Qq()&&N(Pq)},Qq=function(){var a=!0;return a};var Sq={};Sq.wc=new String("undefined");
var Tq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sq.wc?b:a[d]);return c.join("")}};Tq.prototype.toString=function(){return this.g("undefined")};Tq.prototype.valueOf=Tq.prototype.toString;Sq.bh=Tq;Sq.zd={};Sq.Ch=function(a){return new Tq(a)};var Uq={};Sq.xi=function(a,b){var c=Hh();Uq[c]=[a,b];return c};Sq.Gf=function(a){var b=a?0:1;return function(c){var d=Uq[c];if(d&&"function"===typeof d[b])d[b]();Uq[c]=void 0}};Sq.Wh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sq.ri=function(a){if(a===Sq.wc)return a;var b=Hh();Sq.zd[b]=a;return'google_tag_manager["'+le.F+'"].macro('+b+")"};Sq.gi=function(a,b,c){a instanceof Sq.bh&&(a=a.g(Sq.xi(b,c)),b=Ia);return{Rd:a,onSuccess:b}};var Vq=["input","select","textarea"],Wq=["button","hidden","image","reset","submit"],Xq=function(a){var b=a.tagName.toLowerCase();return!Oa(Vq,function(c){return c===b})||"input"===b&&Oa(Wq,function(c){return c===a.type.toLowerCase()})?!1:!0},Yq=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):fg(a,["form"],100)},Zq=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Xq(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var jr=F.clearTimeout,kr=F.setTimeout,S=function(a,b,c){if(Qj()){b&&N(b)}else return Wf(a,b,c)},lr=function(){return new Date},mr=function(){return F.location.href},nr=function(a){return Xg(Zg(a),"fragment")},or=function(a){return Yg(Zg(a))},pr=function(a,b){return Nh(a,b||2)},qr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kq(a)):d=Kq(a);return d},rr=function(a,b){F[a]=b},T=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},sr=function(a,b,c){return ai(a,b,void 0===c?!0:!!c)},tr=function(a,b,c){return 0===ji(a,b,c)},ur=function(a,b){if(Qj()){b&&N(b)}else Yf(a,b)},vr=function(a){return!!oo(a,"init",!1)},wr=function(a){mo(a,"init",!0)},xr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ah;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Sj("https://","http://",c))},yr=function(a,
b){var c=a[b];return c},zr=function(a,b,c){rl&&(Hb(a)||vl(c,b,a))};
var Ar=Sq.gi;function Xr(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Yr=new Qa;function Zr(a,b){function c(g){var h=Zg(g),l=Xg(h,"protocol"),m=Xg(h,"host",!0),p=Xg(h,"port"),n=Xg(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function $r(a){return as(a)?1:0}
function as(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if($r(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Xr(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=B(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var n=String(c)+p,t=Yr.get(n);t||(t=new RegExp(c,p),Yr.set(n,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Zr(b,c)}return!1};var bs=encodeURI,Y=encodeURIComponent,cs=Zf;var ds=function(a,b){if(!a)return!1;var c=Xg(Zg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var es=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Kt(){return F.gaGlobal=F.gaGlobal||{}}var Lt=function(){var a=Kt();a.hid=a.hid||Pa();return a.hid},Mt=function(a,b){var c=Kt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var uu=window,vu=document,wu=function(a){var b=uu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===uu["ga-disable-"+a])return!0;try{var c=uu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Zh("AMP_TOKEN",String(vu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return vu.getElementById("__gaOptOutExtension")?!0:!1};var xu={};function zu(a){delete a.eventModel[I.Fb];Bu(a.eventModel)}
var Bu=function(a){Ta(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.qa]||{};Ta(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Eu=function(a,b,c){Xn(b,c,a)},Fu=function(a,b,c){Xn(b,c,a,!0)},Mu=function(a,b){};
function Gu(a,b){}var Z={h:{}};
Z.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.i="gaawc";Z.__gaawc.m=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=es(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(I.qa)||b.vtp_userProperties){var e=d[I.qa]||{};G(es(b.vtp_userProperties,"name","value"),e);d[I.qa]=e}a(d,I.ef,function(f){return Xa(f)});a(d,I.hf,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Yn(d,c);N(b.vtp_gtmOnSuccess)})}();
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Lg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{Jd:x,Kd:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),E={},J;for(J in D){E.Xa=J;if(D.hasOwnProperty(E.Xa)){var Q=Number(E.Xa);x<Q||(qr({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Xa].join(",")}),no("sdl",z,function(V){return function(ba){delete ba[V.Xa];return ba}}(E),{}))}E={Xa:E.Xa}}}function f(){var x=y(),z=x.Jd,A=x.Kd,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
n.yc,t.jf);e(C,"horiz.pct",n.xc,t.jf);e(A,"vert.pix",n.yc,t.zf);e(D,"vert.pct",n.xc,t.zf);mo("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=kr(D,x):(A=0,f(),vr("sdl")&&!a()&&(ag(r,"scroll",E),ag(r,"resize",E),mo("sdl","init",!1)));C=!1},E=function(){z&&y();A?C=!0:(A=kr(D,x),mo("sdl","pending",!0))};return E}function h(x,z,A){if(z){var C=b(String(x));no("sdl",A,function(D){for(var E=0;E<C.length;E++){var J=
String(C[E]);D.hasOwnProperty(J)||(D[J]=[]);D[J].push(z)}return D},{})}}function l(x){return oo("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,E=x.vtp_verticalThresholdsPixels,J=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case n.yc:h(A,z,"horiz.pix");break;case n.xc:h(C,z,"horiz.pct")}switch(D){case n.yc:h(E,z,"vert.pix");break;case n.xc:h(J,
z,"vert.pct")}vr("sdl")?oo("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(wr("sdl"),mo("sdl","pending",!0),N(function(){f();if(a()){var Q=g();$f(r,"scroll",Q);$f(r,"resize",Q)}else mo("sdl","init",!1)})))}var p=/^\s*$/,n={xc:"PERCENT",yc:"PIXELS"},t={zf:"vertical",jf:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):op(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);zr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.h.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.i="sp";Z.__sp.m=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=T("google_trackConversion");if(Ka(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=es(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:dm()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Gm();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){S(b,d,c)};ug()?Eg(function(){Cg(I.C)?e():xg(e,I.C)},[I.C]):(Ik(),e())})}();Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){zr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Sh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=pr("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xg(Zg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):or(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ko(c,"gtm.click");qr(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!vr("cl")){var c=T("document");$f(c,"click",a,!0);wr("cl")}N(b.vtp_gtmOnSuccess)})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return sr(a.vtp_name,pr("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,n,t){if(!q(t))throw d(p,{},"Key must be a string.");if("read"===n){if(-1<B(e,t))return}else if("write"===n){if(-1<B(f,t))return}else if("readwrite"===n){if(-1<B(f,t)&&-1<B(e,t))return}else if("execute"===n){if(-1<B(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+n);throw d(p,{},"Prohibited "+n+" on global variable: "+
t+".");},N:a}})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:pr("gtm.url",1))||mr();var d=b[a("vtp_component")];if(!d||"URL"==d)return or(String(c));var e=Zg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Na(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var n=Xg(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=Xg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=pr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;zr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.tl=["google"],function(){function a(b){return function(){if(b.Wd&&b.Yd>=b.Wd)b.Sd&&T("self").clearInterval(b.Sd);else{b.Yd++;var c=lr().getTime();qr({event:b.P,"gtm.timerId":b.Sd,"gtm.timerEventNumber":b.Yd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Wd,"gtm.timerStartTime":b.ag,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ag,"gtm.triggers":b.Ki})}}}(function(b){Z.__tl=b;Z.__tl.i="tl";Z.__tl.m=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{P:b.vtp_eventName,Yd:0,interval:Number(b.vtp_interval),Wd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ki:String(b.vtp_uniqueTriggerId||"0"),ag:lr().getTime()};c.Sd=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.h.ua=["google"],function(){function a(n){return Cg(n)}function b(n,t){if(ug()&&!e[n]){var r=function(){var u=Nk(),v="gtm"+Hh(),w=m(t),y={name:v};l(w,y,!0);u("create",n,y);u(function(){u.remove(v)})};xg(r,I.K);xg(r,I.C);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(n,t,r){var u=0;if(n)for(var v in n)if(!h[v]&&n.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?Xa(n[v]):n[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(n){var t={};n.vtp_gaSettings&&G(es(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);G(es(n.vtp_fieldsToSet,"fieldName","value"),t);Cg(I.K)||(t.storage="none");Cg(I.C)||(t.allowAdFeatures=!1,t.storeGac=!1);vn()||(t.allowAdFeatures=!1);un()||(t.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(t._x_19=n.vtp_transportUrl);
return t},p=function(n){function t(ka,W){void 0!==W&&E("set",ka,W)}var r={},u={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;G(es(y.vtp_contentGroup,"index","group"),u);G(es(y.vtp_dimension,"index","dimension"),v);G(es(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;n=G(n,x)}G(es(n.vtp_contentGroup,"index","group"),u);G(es(n.vtp_dimension,"index","dimension"),v);G(es(n.vtp_metric,"index","metric"),w);var z=m(n),A=Pk(n.vtp_functionName);if(Ka(A)){var C="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,C=D+"."):(D="gtm"+Hh(),C=D+".");var E=function(ka){var W=[].slice.call(arguments,0);W[0]=C+W[0];A.apply(window,W)},J=function(ka,W){return void 0===W?W:ka(W)},Q=function(ka,W){if(W)for(var $a in W)W.hasOwnProperty($a)&&
E("set",ka+$a,W[$a])},V=function(){var ka={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},W={},$a=(W[I.dd]="click",W[I.Aa]="detail",W[I.Za]="add",W[I.$a]="remove",W[I.La]="checkout",W[I.na]="purchase",W[I.ab]="refund",W),ed={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Lb=function(Ma,hb){for(var ib in Ma)ka.hasOwnProperty(ib)&&(Ma[hb]=Ma[hb]||{},Ma[hb].actionField=Ma[hb].actionField||{},Ma[hb].actionField[ka[ib]]=Ma[ib])},mb=function(Ma){for(var hb=[],ib={},ob=0;ob<Ma.length;ib={tb:ib.tb},ob++)ib.tb={},Ta(Ma[ob],function(Mb){return function(Cc,hd){ed.hasOwnProperty(Cc)?Mb.tb[ed[Cc]]=hd:Mb.tb[Cc]=hd}}(ib)),hb.push(ib.tb);return hb},nb=function(Ma,hb,ib){if(!Cb(hb))return!1;
for(var ob=bb(Object(hb),ib,[]),Mb=0;ob&&Mb<ob.length;Mb++)E(Ma,ob[Mb]);return!!ob&&0<ob.length},R;if(n.vtp_useEcommerceDataLayer){var Wa=!1;n.vtp_useGA4SchemaForEcommerce&&(R=Sh(n.vtp_gtmEventId,"eventModel"),Wa=!!R);Wa||(R=pr("ecommerce",1))}else n.vtp_ecommerceMacroData&&(R=n.vtp_ecommerceMacroData.ecommerce,!R&&n.vtp_useGA4SchemaForEcommerce&&
(R=n.vtp_ecommerceMacroData));if(!Cb(R))return;R=Object(R);if(n.vtp_useGA4SchemaForEcommerce){R=G(R);R.currencyCode=R.currencyCode||R.currency;var vb=String(Sh(n.vtp_gtmEventId,"event"));if("view_item_list"===vb&&!R.impressions&&R.items)R.impressions=mb(R.items);else if("view_promotion"===vb&&!R.promoView&&R.items)R.promoView={},R.promoView.promotions=mb(R.items);else if("select_promotion"===vb&&!R.promoClick)R.items&&(R.promoClick={},R.promoClick.promotions=mb(R.items)),Lb(R,"promoClick");else if($a.hasOwnProperty(vb)){var fd=
$a[vb];R[fd]||(R.items&&(R[fd]={},R[fd].products=mb(R.items)),Lb(R,fd))}}var gd=bb(z,"currencyCode",R.currencyCode);void 0!==gd&&E("set","&cu",gd);nb("ec:addImpression",R,"impressions");if(nb("ec:addPromo",R[R.promoClick?"promoClick":"promoView"],"promotions")&&R.promoClick){E("ec:setAction","promo_click",R.promoClick.actionField);return}for(var Id="detail checkout checkout_option click add remove purchase refund".split(" "),Jd="refund purchase remove checkout checkout_option add click detail".split(" "),
Kd=0;Kd<Id.length;Kd++){var Bc=R[Id[Kd]];if(Bc){nb("ec:addProduct",Bc,"products");E("ec:setAction",Id[Kd],Bc.actionField);if(rl)for(var Ld=0;Ld<Jd.length;Ld++){var Md=R[Jd[Ld]];if(Md){Md!==Bc&&zf(13);break}}break}}},ba={name:D};l(z,ba,!0);var ra=n.vtp_trackingId||r.trackingId;A("create",ra,ba);E("set","&gtm",dm(!0));
ug()&&(E("set","&gcs",Dg()),b(ra,n));z._x_19&&(null==Tf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Uk(D,String(z._x_20)))));n.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(ka,W){void 0!==n[W]&&E("set",ka,n[W])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var P={};l(z,P,!1)&&E("set",P);var K;
n.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var ka=z&&z.hitCallback;Ka(ka)&&ka();n.vtp_gtmOnSuccess()});var L=function(ka,W){return void 0===n[ka]?r[W]:n[ka]};if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(E("require","ec","ec.js"),V());var ea={hitType:"event",eventCategory:String(L("vtp_eventCategory","category")),eventAction:String(L("vtp_eventAction","action")),eventLabel:J(String,
L("vtp_eventLabel","label")),eventValue:J(Va,L("vtp_eventValue","value"))};l(K,ea,!1);E("send",ea);}else if("TRACK_SOCIAL"==n.vtp_trackType){}else if("TRACK_TRANSACTION"==
n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==
n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&
(E("require","ec","ec.js"),V());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var hc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:hc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var Gb="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Gb})}K?E("send","pageview",K):E("send","pageview");
n.vtp_autoLinkDomains&&Qk(C,n.vtp_autoLinkDomains,!!n.vtp_useHashAutoLink,!!n.vtp_decorateFormsAutoLink);Xa(z.urlPassthrough)&&Rk(C)}if(!c){var Ra=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(Ra="internal/"+Ra);c=!0;var Sb=Ol(z._x_19,"/analytics.js"),Zc=Sj("https:","http:","//www.google-analytics.com/"+Ra,z&&!!z.forceSSL);S("analytics.js"===Ra&&Sb?Sb:Zc,function(){var ka=
Nk();ka&&ka.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else N(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(n){Eg(function(){p(n)},[I.K,I.C])})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!q(f))throw d(e,{},"Script URL must be a string.");try{if(Oe(Zg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},N:a}})}();


Z.h.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return M.getElementById(u)?a():u}function b(u,v){if(!u)return!1;for(var w=0;w<p.length;w++)if(0<=u.indexOf("//"+p[w]+"/"+v))return!0;return!1}function c(u,v){var w=u.getAttribute("src");if(b(w,"embed/")){if(0<w.indexOf("enablejsapi=1"))return!0;if(v){var y=u.setAttribute,x;var z=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))x=w+z+"enablejsapi=1";else{if(!t){var A=T("document");t=A.location.protocol+"//"+A.location.hostname;
A.location.port&&(t+=":"+A.location.port)}x=w+z+"enablejsapi=1&origin="+encodeURIComponent(t)}y.call(u,"src",x);return!0}}return!1}function d(u,v){if(!u.getAttribute("data-gtm-yt-inspected-"+v.se)&&(u.setAttribute("data-gtm-yt-inspected-"+v.se,"true"),c(u,v.Pb))){u.id||(u.id=a());var w=T("YT"),y=w.get(u.id);y||(y=new w.Player(u.id));var x=f(y,v),z={},A;for(A in x)z.sb=A,x.hasOwnProperty(z.sb)&&y.addEventListener(z.sb,function(C){return function(D){return x[C.sb](D.data)}}(z)),z={sb:z.sb}}}function e(u){N(function(){function v(){for(var y=
w.getElementsByTagName("iframe"),x=y.length,z=0;z<x;z++)d(y[z],u)}var w=T("document");v();So(v)})}function f(u,v){var w,y;function x(){ba=To(function(){return{url:K,title:L,Ld:P,Hf:u.getCurrentTime(),playbackRate:ea}},v.se,u.getIframe());P=0;L=K="";ea=1;return z}function z(ta){switch(ta){case n.PLAYING:P=Math.round(u.getDuration());K=u.getVideoUrl();if(u.getVideoData){var U=u.getVideoData();L=U?U.title:""}ea=u.getPlaybackRate();v.Gd?qr(ba.createEvent("start")):ba.jb();ra=l(v.ee,v.de,u.getDuration());
return A(ta);default:return z}}function A(){pa=u.getCurrentTime();X=lr().getTime();ba.Xf();V();return C}function C(ta){var U;switch(ta){case n.ENDED:return E(ta);case n.PAUSED:U="pause";case n.BUFFERING:var sa=u.getCurrentTime()-pa;U=1<Math.abs((lr().getTime()-X)/1E3*ea-sa)?"seek":U||"buffering";u.getCurrentTime()&&(v.Fd?qr(ba.createEvent(U)):ba.jb());Q();return D;case n.UNSTARTED:return x(ta);default:return C}}function D(ta){switch(ta){case n.ENDED:return E(ta);case n.PLAYING:return A(ta);case n.UNSTARTED:return x(ta);
default:return D}}function E(){for(;y;){var ta=w;jr(y);ta()}v.Ed&&qr(ba.createEvent("complete",1));return x(n.UNSTARTED)}function J(){}function Q(){y&&(jr(y),y=0,w=J)}function V(){if(ra.length&&0!==ea){var ta=-1,U;do{U=ra[0];if(U.V>u.getDuration())return;ta=(U.V-u.getCurrentTime())/ea;if(0>ta&&(ra.shift(),0===ra.length))return}while(0>ta);w=function(){y=0;w=J;0<ra.length&&ra[0].V===U.V&&(ra.shift(),qr(ba.createEvent("progress",U.Yb,U.ac)));V()};y=kr(w,1E3*ta)}}var ba,ra=[],P,K,L,ea,pa,X,Da=x(n.UNSTARTED);
y=0;w=J;return{onStateChange:function(ta){Da=Da(ta)},onPlaybackRateChange:function(ta){pa=u.getCurrentTime();X=lr().getTime();ba.jb();ea=ta;Q();V()}}}function g(u){for(var v=u.split(","),w=v.length,y=[],x=0;x<w;x++){var z=parseInt(v[x],10);isNaN(z)||100<z||0>z||y.push(z/100)}y.sort(function(A,C){return A-C});return y}function h(u){for(var v=u.split(","),w=v.length,y=[],x=0;x<w;x++){var z=parseInt(v[x],10);isNaN(z)||0>z||y.push(z)}y.sort(function(A,C){return A-C});return y}function l(u,v,w){var y=
u.map(function(A){return{V:A,ac:A,Yb:void 0}});if(!v.length)return y;var x=v.map(function(A){return{V:A*w,ac:void 0,Yb:A}});if(!y.length)return x;var z=y.concat(x);z.sort(function(A,C){return A.V-C.V});return z}function m(u){var v=!!u.vtp_captureStart,w=!!u.vtp_captureComplete,y=!!u.vtp_capturePause,x=g(u.vtp_progressThresholdsPercent+""),z=h(u.vtp_progressThresholdsTimeInSeconds+""),A=!!u.vtp_fixMissingApi;if(v||w||y||x.length||z.length){var C={Gd:v,Ed:w,Fd:y,de:x,ee:z,Pb:A,se:void 0===u.vtp_uniqueTriggerId?
"":u.vtp_uniqueTriggerId},D=T("YT"),E=function(){e(C)};N(u.vtp_gtmOnSuccess);if(D)D.ready&&D.ready(E);else{var J=T("onYouTubeIframeAPIReady");rr("onYouTubeIframeAPIReady",function(){J&&J();E()});N(function(){for(var Q=T("document"),V=Q.getElementsByTagName("script"),ba=V.length,ra=0;ra<ba;ra++){var P=V[ra].getAttribute("src");if(b(P,"iframe_api")||b(P,"player_api"))return}for(var K=Q.getElementsByTagName("iframe"),L=K.length,ea=0;ea<L;ea++)if(!r&&c(K[ea],C.Pb)){S("https://www.youtube.com/iframe_api");
r=!0;break}})}}else N(u.vtp_gtmOnSuccess)}var p=["www.youtube.com","www.youtube-nocookie.com"],n={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,r=!1;(function(u){Z.__ytl=u;Z.__ytl.i="ytl";Z.__ytl.m=!0;Z.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?m(u):zk(function(){m(u)})})}();


Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){Z.__gclidw=c;Z.__gclidw.i="gclidw";Z.__gclidw.m=!0;Z.__gclidw.priorityOverride=100})(function(c){N(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||ej())&&xj(a,l));uj(l);zj(["aw","dc"],l);b?Jj(h,l):Kj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");yj(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var n=pr(I.O);Km({Hd:!1,wa:void 0!=
n&&!1!==n,Fc:l,Oc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Bj()});}();


Z.h.aev=["google"],function(){function a(r,u){var v=Sh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(r,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(mr());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!ds(r,w)}function e(r){m.test(r)||(r="http://"+r);return Xg(Zg(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return bg(r,"value");case "button":return cg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Xq(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&bg(w,u)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,cg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=Zg(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=Xg(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var E=r.vtp_attribute,J=a(u,"element");D=J&&bg(J,E)||v||""}return D;case "MD":var Q=r.vtp_mdValue,V=b(u,"MD",fr);return Q&&V?ir(V,Q)||v:V||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);zr(ba,"aev",r.vtp_gtmEventId);return ba}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[Yd.Qa]=null;c[Yd.Ug]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:mr()}function b(f,g){$f(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:or(l),L:nr(l)})})}function c(f,g){$f(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:or(l),L:nr(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ka(m))try{l[f]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:or(mr()),
L:nr(mr())})}}catch(p){}}function e(){var f={source:null,state:T("history").state||null,url:or(mr()),L:nr(mr())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.L!=g.L){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.L,"gtm.newUrlFragment":g.L,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;qr(m)}}}(function(f){Z.__hl=f;Z.__hl.i="hl";Z.__hl.m=!0;Z.__hl.priorityOverride=
0})(function(f){var g=T("self");if(!vr("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);wr("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=T("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.i="awct";Z.__awct.m=!0;Z.__awct.priorityOverride=
0})(function(g){function h(y,x,z){return"DATA_LAYER"===y?pr(z):g[x]}function l(){u("gdpr_consent",Gm());}function m(){var y=[];return y}function p(y){var x=!0,z=[];if(y){z=m();}x&&b.push(n)}Ik();var n={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,
google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:dm()};n.google_gtm_experiments={capi:!0};g.vtp_rdp&&(n.google_restricted_data_processing=!0);void 0!=pr(I.O)&&!1!==pr(I.O)&&(n.google_gtm_url_processor=function(y){return y=gk(y)});var t=function(y){return function(x,
z,A){var C=h(y,z,A);C&&(n[x]=C)}},r=t("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(r=t(g.vtp_productReportingDataSource),r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items",
"vtp_items","items"),n.google_conversion_items&&n.google_conversion_items.map&&(n.google_conversion_items=n.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,x){void 0!==x&&((n.google_additional_conversion_params=n.google_additional_conversion_params||{})[y]=x)},v=function(y){return function(x,z,A,C){var D=h(y,z,A);C(D)&&u(x,D)}};(function(){if(!g.vtp_enableShippingData)return;u("delopc",
g.vtp_deliveryPostalCode);u("oedeld",g.vtp_estimatedDeliveryDate);u("delc",g.vtp_deliveryCountry);u("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var y=h(g.vtp_productReportingDataSource,"vtp_items","items");u("iedeld",ik(y))}})();g.vtp_transportUrl&&(n.google_transport_url=g.vtp_transportUrl);var w=Ol(g.vtp_transportUrl,"/pagead/conversion_async.js");w||(w=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(r=v(g.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(n.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),n.google_read_gcl_cookie_opt_out=
!1):n.google_read_gcl_cookie_opt_out=!0;"1"===Yi(!1)._up&&u("gtm_up","1");l();(function(){ug()?Eg(function(){l();var y=Cg(I.C),x=!y&&void 0!=pr(I.O)&&!1!==pr(I.O);!g.vtp_transportUrl&&x&&(n.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",Dg());p(y);y||xg(function(){l();n=G(n);!g.vtp_transportUrl&&n.google_transport_url&&delete n.google_transport_url;u("gcs",Dg());u("gcu","1");p(!0)},I.C)},[I.C]):p(!0)})();a||(a=!0,S(w,f(),e(w)))})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.i="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}zr(f,"remm",a.vtp_gtmEventId);return f})}();
Z.h.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.i="baut";Z.__baut.m=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=Af(T("UET"),{ti:b.vtp_tagId,q:d});F[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();Z.h.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.i="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=es(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;zr(d,"smm",a.vtp_gtmEventId);return d})}();



Z.h.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.i="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.h.zone=[],function(){function a(p){for(var n=p.vtp_boundaries||[],t=0;t<n.length;t++)if(!n[t])return!1;return!0}function b(p){var n=le.F,t=n+":"+p.vtp_gtmTagId,r=pr("gtm.uniqueEventId")||0,u=rk(function(){return new g}),v=a(p),w=p.vtp_enableTypeRestrictions?p.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;w=w&&gb(w,f);if(u.registerZone(t,r,v,w))for(var y=p.vtp_childContainers.map(function(D){return D.publicId}),x=0;x<y.length;x++){var z=String(y[x]);if(u.registerChild(z,n,t)){var A=
0!==z.indexOf("GTM-");if(A){var C=function(D,E){qr(arguments)};C("js",new Date);m?(C("config",z),l||xr(z,A)):(O.addTargetToGroup(z),Yn({},z))}else xr(z,A)}}}var c={active:!1,isAllowed:function(){return!1},Yh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Yh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.g={};this.o={}};g.prototype.checkState=function(p,n){var t=
this.g[p];if(!t)return d;var r=this.checkState(t.Tf,n);if(!r.active)return c;for(var u=[],v=0;v<t.ve.length;v++){var w=this.o[t.ve[v]];w.Ub(n)&&u.push(w)}return u.length?{active:!0,isAllowed:function(y,x){x=x||[];var z=r.isAllowed;if(!z(y,x))return!1;for(var A=0;A<u.length;++A)if(u[A].isAllowed(y,x))return!0;return!1}}:c};g.prototype.unregisterChild=function(p){delete this.g[p]};g.prototype.registerZone=function(p,n,t,r){var u=this.o[p];if(u)return u.s(n,t),!1;if(!t)return!1;this.o[p]=new h(n,r);
return!0};g.prototype.registerChild=function(p,n,t){var r=this.g[p];if(!r&&O[p]||r&&r.Tf!==n)return!1;if(r)return r.ve.push(t),!1;this.g[p]={Tf:n,ve:[t]};return!0};var h=function(p,n){this.g=[{eventId:p,Ub:!0}];this.o=null;if(n){this.o={};for(var t=0;t<n.length;t++)this.o[n[t]]=!0}};h.prototype.s=function(p,n){var t=this.g[this.g.length-1];p<=t.eventId||t.Ub!=n&&this.g.push({eventId:p,Ub:n})};h.prototype.Ub=function(p){if(!this.g||0==this.g.length)return!1;for(var n=this.g.length-1;0<=n;n--)if(this.g[n].eventId<=
p)return this.g[n].Ub;return!1};h.prototype.isAllowed=function(p,n){n=n||[];if(!this.o||e[p]||this.o[p])return!0;for(var t=0;t<n.length;++t)if(this.o[n[t]])return!0;return!1};var l=!1;var m=!0;m=!1;(function(p){Z.__zone=p;Z.__zone.i="zone";Z.__zone.m=
!0;Z.__zone.priorityOverride=0})(function(p){b(p);N(p.vtp_gtmOnSuccess)})}();
Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,Vf(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];h.firstChild;)n.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,n,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){zk(function(){var g=O.postscribe,h={done:e},l=M.createElement("div");l.style.display="none";l.style.visibility="hidden";M.body.appendChild(l);try{g(l,d,h)}catch(m){N(f)}})};var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Ar(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Rd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,dg(g),h,e)()}else kr(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";
Z.__html.m=!0;Z.__html.priorityOverride=0}();






Z.h.evl=["google"],function(){function a(){var f=Number(pr("gtm.start"))||0;return lr().getTime()-f}function b(f,g,h,l){function m(){if(!Kg(f.target)){g.has(d.zc)||g.set(d.zc,""+a());g.has(d.wd)||g.set(d.wd,""+a());var n=0;g.has(d.Bc)&&(n=Number(g.get(d.Bc)));n+=100;g.set(d.Bc,""+n);if(n>=h){var t=ko(f.target,"gtm.elementVisibility",[g.g]),r=Mg(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.wd));t["gtm.visibleLastTime"]=Number(g.get(d.zc));
qr(t);l()}}}if(!g.has(d.Ib)&&(0==h&&m(),!g.has(d.ib))){var p=T("self").setInterval(m,100);g.set(d.Ib,p)}}function c(f){f.has(d.Ib)&&(T("self").clearInterval(Number(f.get(d.Ib))),f.o(d.Ib))}var d={Ib:"polling-id-",wd:"first-on-screen-",zc:"recent-on-screen-",Bc:"total-visible-time-",ib:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Z.__evl=f;Z.__evl.i="evl";Z.__evl.m=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Gg(m)}catch(E){zf(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var z=M.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var C=
new e(v[A],r);c(C)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Sg(w);0<v.length&&(w=Rg(h,v,[t]))}}function h(y){var x=new e(y.target,r);y.intersectionRatio>=t?x.has(d.ib)||b(y,x,n,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var A=new e(v[z],r);A.set(d.ib,"1");c(A)}Sg(w);if(p&&Ro)for(var C=0;C<Ro.length;C++)Ro[C]===g&&Ro.splice(C,1)}:function(){x.set(d.ib,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.ib)&&(x.o(d.ib),x.o(d.Bc)),x.o(d.zc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,n=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();p&&So(g);N(f.vtp_gtmOnSuccess)})}();


var Nu={};Nu.macro=function(a){if(Sq.zd.hasOwnProperty(a))return Sq.zd[a]},Nu.onHtmlSuccess=Sq.Gf(!0),Nu.onHtmlFailure=Sq.Gf(!1);Nu.dataLayer=Oh;Nu.callback=function(a){Fh.hasOwnProperty(a)&&Ka(Fh[a])&&Fh[a]();delete Fh[a]};Nu.bootstrap=0;Nu._spx=!1;function Ou(){O[le.F]=Nu;db(Gh,Z.h);Rd=Rd||Sq;Sd=he}
function Pu(){ig.gtag_cs_api=!0;O=F.google_tag_manager=F.google_tag_manager||{};Em();if(O[le.F]){var a=O.zones;a&&a.unregisterChild(le.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Nd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Hd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);Gd.push(n)}Pd=Z;Qd=$r;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Zp();pe=new oe(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Gh[x]=w}bq(v);Ou();Rq();uk=!1;vk=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)xk();else{$f(M,"DOMContentLoaded",xk);$f(M,"readystatechange",xk);if(M.createEventObject&&M.documentElement.doScroll){var z=!0;try{z=!F.frameElement}catch(J){}z&&yk()}$f(F,"load",xk)}lp=!1;"complete"===M.readyState?np():$f(F,"load",np);a:{
if(!rl)break a;F.setInterval(sl,864E5);}var E=O;E.postscribe||(E.postscribe=F.postscribe||Qe);Dh=(new Date).getTime();}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=Zg(M.referrer);b="cct.google"===Wg(c,"host")}if(!b){var d=ai("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,Wf("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,Wf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===Xg(F.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=Zg(M.referrer);g="tagassistant.google.com"===Wg(h,"host")}if(!g){var l=ai("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&Tf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Tf,resume:function(){a()}}}):a()})(Pu);

})()
