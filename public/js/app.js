var app=angular.module("myApp",["ngRoute","mainCtrl","homeCtrl","articleCtrl","catalogCtrl","constructorPageCtrl","productPageCtrl","constructorPreviewDirective","checkboxDirective","textureDirective","hiderDirective","parallaxDirective","questionDirective","colorDirective","rangeDirective","youtube-embed","angular-input-stars","angular-owl-carousel"]).config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){"use strict";$locationProvider.html5Mode(!0),$locationProvider.hashPrefix("!"),$routeProvider.when("/",{redirectTo:"/home"}).when("/home",{controller:"HomeCtrl",templateUrl:"views/home.html"}).when("/article/:id",{controller:"ArticleCtrl",templateUrl:"views/article.html"}).when("/catalog",{controller:"CatalogCtrl",templateUrl:"views/catalog.html"}).when("/catalog/:category",{controller:"CatalogCtrl",templateUrl:"views/catalog.html"}).when("/catalog/:category/:subcategory",{controller:"CatalogCtrl",templateUrl:"views/catalog.html"}).when("/catalog/:category/:subcategory/:subsubcategory",{controller:"CatalogCtrl",templateUrl:"views/catalog.html"}).when("/product/:category/:subcategory/:subsubcategory",{controller:"ProductPageCtrl",templateUrl:"views/product.html"}).when("/product/:category/:subcategory/:subsubcategory/:texture",{controller:"ProductPageCtrl",templateUrl:"views/product.html"}).when("/constructor",{controller:"ConstructorPageCtrl",templateUrl:"views/constructor.html"}).otherwise({redirectTo:"/home"})}]).run(["$route","$rootScope","$location",function($route,$rootScope,$location){var original=$location.path;$location.path=function(path,reload){if(reload===!1)var lastRoute=$route.current,un=$rootScope.$on("$locationChangeSuccess",function(){$route.current=lastRoute,un()});return original.apply($location,[path])}}]);app.constant("API_PATH","data/"),function(){"use strict";function articleCtrl($scope,$log){$log.log("article ctrl")}angular.module("articleCtrl",[]).controller("ArticleCtrl",["$scope","$log",articleCtrl])}(),function(){"use strict";function benefitsCtrl($scope,$log,BenefitsService){$log.log("benefits ctrl");var url=$scope.url;$scope.init=function(){$scope.getBenefits(url)},$scope.getBenefits=function(url){BenefitsService.getBenefits(url).then(function(data){$scope.benefits=data},function(err){$log.error(err)})},$scope.init()}angular.module("benefitsCtrl",["benefitsService"]).controller("BenefitsCtrl",["$scope","$log","BenefitsService",benefitsCtrl])}(),function(){"use strict";function catalogCtrl($scope,$log){$log.log("catalog ctrl"),$scope.catalogItems=[1,2,3,4,5,6,7,8],$scope.priceSlider={min:100,max:180,options:{floor:0,ceil:450}}}angular.module("catalogCtrl",[]).controller("CatalogCtrl",["$scope","$log",catalogCtrl])}(),function(){"use strict";function constructorPageCtrl($scope,$log){$log.log("Constructor page ctrl")}angular.module("constructorPageCtrl",[]).controller("ConstructorPageCtrl",["$scope","$log",constructorPageCtrl])}(),function(){"use strict";function constructorPreviewCtrl($scope,$log){$log.log("Constructor preview ctrl")}angular.module("constructorPreviewCtrl",[]).controller("ConstructorPreviewCtrl",["$scope","$log",constructorPreviewCtrl])}(),function(){"use strict";function hiderCtrl($scope,$log,$window){$log.log("hider ctrl"),$scope.$window=$window}angular.module("hiderCtrl",[]).controller("HiderCtrl",["$scope","$log","$window",hiderCtrl])}(),function(){"use strict";function homeCtrl($scope,$log){$log.log("home ctrl"),$scope.bigSliderItems=["img/slide-1.jpg"],$scope.catalogItems=[1,2,3,4,5,6,7,8],$scope.catalogData={}}angular.module("homeCtrl",["benefitsDirective"]).controller("HomeCtrl",["$scope","$log",homeCtrl])}(),function(){"use strict";function mainCtrl($scope,$log,$timeout){$log.log("main ctrl"),$(function(){svg4everybody({fallback:function(src,svg,use){var className=$(svg).attr("class");$(svg).replaceWith($("<span/>").addClass(className).css("background-image","url("+src.replace("icons.svg#","")+".png)"))}})}),$scope.refreshRange=function(){$timeout(function(){$scope.$broadcast("rzSliderForceRender")})}}angular.module("mainCtrl",[]).controller("MainCtrl",["$scope","$log","$timeout",mainCtrl])}(),function(){"use strict";function parallaxCtrl($scope,$log,$window){$log.log("parallax ctrl"),$scope.$window=$window}angular.module("parallaxCtrl",[]).controller("ParallaxCtrl",["$scope","$log","$window",parallaxCtrl])}(),function(){"use strict";function productPageCtrl($scope,$log,youtubeEmbedUtils,$location,$routeParams,TexturesService,ProductService,$sce,$timeout){$log.log("product page ctrl"),$scope.catalogItems=[1,2,3,4],$scope.reviewsItems=[1,2],$scope.gallery={},$scope.gallery.currentImage="img/slide-1.jpg",$scope.textureModel=null,$scope.rating=4,$scope.init=function(){$scope.getTextures(),$scope.getProduct()},$scope.getProduct=function(path){ProductService.getProduct(path).then(function(data){$scope.product=data,$scope.product.cornice.text=$sce.trustAsHtml(data.cornice.text)},function(err){console.log(err)})},$scope.getTextures=function(){TexturesService.getTextures().then(function(data){var category=$routeParams.category,subcategory=$routeParams.subcategory,subsubcategory=$routeParams.subsubcategory,texture=$routeParams.texture,currentTexture=TexturesService.getTextureByUrl(texture)||{id:1},currentId=currentTexture.id;$scope.textures=data,TexturesService.getTextureByUrl(texture),$scope.textureModel=currentId,$scope.$watch("textureModel",function(newVal,oldVal){newVal&&($scope.getTextureById(newVal),$location.path("product/"+category+"/"+subcategory+"/"+subsubcategory+"/"+$scope.currentTexture.url,!1),$scope.gallery.currentImage=$scope.currentTexture.img)})},function(err){console.log(err)})},$scope.getTextureById=function(id){$scope.currentTexture=TexturesService.getTextureById(id)},$scope.getYoutubeId=function(url){return youtubeEmbedUtils.getIdFromURL(url)},$scope.priceSlider={min:100,max:180,options:{floor:0,ceil:450}},$scope.init()}angular.module("productPageCtrl",["texturesService","productService"]).controller("ProductPageCtrl",["$scope","$log","youtubeEmbedUtils","$location","$routeParams","TexturesService","ProductService","$sce","$timeout",productPageCtrl])}(),function(){"use strict";function questionCtrl($scope,$log,QuestionService){$log.log("question ctrl"),$scope.init=function(){$scope.getQuestion()},$scope.getQuestion=function(){QuestionService.getQuestion().then(function(data){$scope.question=data},function(err){$log.error(err)})},$scope.init()}angular.module("questionCtrl",["questionService"]).controller("QuestionCtrl",["$scope","$log","QuestionService",questionCtrl])}(),function(){"use strict";function benefitsDirective(){return{restrict:"E",templateUrl:"views/directives/benefits.html",controller:"BenefitsCtrl",scope:{title:"@",url:"@"},replace:!0,link:benefitsDirectiveLink}}function benefitsDirectiveLink(scope,el,attr){attr.url=attr.url||"#"}angular.module("benefitsDirective",["benefitsCtrl"]).directive("benefits",[benefitsDirective])}(),function(){"use strict";function checkboxDirective(){return{restrict:"E",templateUrl:"views/directives/checkbox.html",scope:{model:"=",checked:"@",disabled:"@",name:"@",label:"@",value:"@"},replace:!0,link:checkboxDirectiveLink}}function checkboxDirectiveLink(scope,el,attr){}angular.module("checkboxDirective",[]).directive("checkbox",[checkboxDirective])}(),function(){"use strict";function colorDirective(){return{restrict:"E",templateUrl:"views/directives/color.html",scope:{model:"=",checked:"@",disabled:"@",fill:"@",name:"@",value:"@"},replace:!0,link:colorDirectiveLink}}function colorDirectiveLink(scope,el,attr){}angular.module("colorDirective",[]).directive("color",[colorDirective])}(),function(){"use strict";function constructorPreviewDirective(){return{restrict:"E",scope:{background:"@",blind:"@"},replace:!0,templateUrl:"views/directives/constructor-preview.html",controller:"ConstructorPreviewCtrl",link:constructorPreviewDirectiveLink}}function constructorPreviewDirectiveLink(scope,el,attr){var applyTransform,getTransform,makeTransformable,controlPoints;getTransform=function(from,to){var A,H,b,h,i,k,k_i,l,lhs,m,ref,rhs;for(console.assert(from.length===(ref=to.length)&&4===ref),A=[],i=k=0;4>k;i=++k)A.push([from[i].x,from[i].y,1,0,0,0,-from[i].x*to[i].x,-from[i].y*to[i].x]),A.push([0,0,0,from[i].x,from[i].y,1,-from[i].x*to[i].y,-from[i].y*to[i].y]);for(b=[],i=l=0;4>l;i=++l)b.push(to[i].x),b.push(to[i].y);for(h=numeric.solve(A,b),H=[[h[0],h[1],0,h[2]],[h[3],h[4],0,h[5]],[0,0,1,0],[h[6],h[7],0,1]],i=m=0;4>m;i=++m)lhs=numeric.dot(H,[from[i].x,from[i].y,0,1]),k_i=lhs[3],rhs=numeric.dot(k_i,[to[i].x,to[i].y,0,1]),console.assert(numeric.norm2(numeric.sub(lhs,rhs))<1e-9,"Not equal:",lhs,rhs);return H},applyTransform=function(element,originalPos,targetPos,callback){var H,from,i,j,p,to;return from=function(){var k,len,results;for(results=[],k=0,len=originalPos.length;len>k;k++)p=originalPos[k],results.push({x:p[0]-originalPos[0][0],y:p[1]-originalPos[0][1]});return results}(),to=function(){var k,len,results;for(results=[],k=0,len=targetPos.length;len>k;k++)p=targetPos[k],results.push({x:p[0]-originalPos[0][0],y:p[1]-originalPos[0][1]});return results}(),H=getTransform(from,to),$(element).css({transform:"matrix3d("+function(){var k,results;for(results=[],i=k=0;4>k;i=++k)results.push(function(){var l,results1;for(results1=[],j=l=0;4>l;j=++l)results1.push(H[j][i].toFixed(20));return results1}());return results}().join(",")+")","transform-origin":"0 0"}),"function"==typeof callback?callback(element,H):void 0},makeTransformable=function(selector,callback){return $(selector).each(function(i,element){var originalPos,p,position;return controlPoints=controlPoints||[],$(element).css("transform",""),controlPoints=function(){var k,len,ref,results;for(ref=["left top","left bottom","right top","right bottom"],results=[],k=0,len=ref.length;len>k;k++)position=ref[k],results.push($("<div>").css({border:"10px solid black",borderRadius:"10px",cursor:"move",position:"absolute",zIndex:1e5}).appendTo(el).position({at:position,of:element,collision:"none"}));return results}(),originalPos=function(){var k,len,results;for(results=[],k=0,len=controlPoints.length;len>k;k++)p=controlPoints[k],results.push([p.offset().left,p.offset().top]);return results}(),$(controlPoints).draggable({start:function(_this){return function(){return $(element).css("pointer-events","none")}}(this),drag:function(_this){return function(){return applyTransform(element,originalPos,function(){var k,len,results;for(results=[],k=0,len=controlPoints.length;len>k;k++)p=controlPoints[k],results.push([p.offset().left,p.offset().top]);return results}(),callback)}}(this),stop:function(_this){return function(){return applyTransform(element,originalPos,function(){var k,len,results;for(results=[],k=0,len=controlPoints.length;len>k;k++)p=controlPoints[k],results.push([p.offset().left,p.offset().top]);return results}(),callback),$(element).css("pointer-events","auto")}}(this)}),element})},el.find(".js-box").draggable(function(){return makeTransformable(".js-box",function(element,H){}),{start:function(){controlPoints.length>0&&$(controlPoints).each(function(index,el){el.remove()})},stop:function(){console.log("stop"),makeTransformable(".js-box",function(element,H){})}}}())}angular.module("constructorPreviewDirective",["constructorPreviewCtrl"]).directive("constructorPreview",[constructorPreviewDirective])}(),function(){"use strict";function menuHiderDirective(){return{restrict:"A",scope:{},replace:!0,controller:"HiderCtrl",link:hiderDirectiveLink}}function hiderDirectiveLink(scope,el,attr){var $window=scope.$window,hidePoint=attr.hiderPoint||0,className=attr.hiderClass||"hidden";angular.element($window).bind("scroll",function(){el.toggleClass(className,$window.scrollY>hidePoint)})}angular.module("hiderDirective",["hiderCtrl"]).directive("hider",[menuHiderDirective])}(),function(){"use strict";function parallaxDirective(){return{restrict:"A",scope:{},replace:!0,controller:"ParallaxCtrl",link:parallaxDirectiveLink}}function parallaxDirectiveLink(scope,el,attr){var $window=scope.$window,start=attr.parallaxStart||0,end=attr.parallaxEnd||500;angular.element($window).bind("scroll",function(){$window.scrollY<=end&&$window.scrollY>start&&el.css("transform","translateY("+$window.scrollY/5+"px)")})}angular.module("parallaxDirective",["parallaxCtrl"]).directive("parallax",[parallaxDirective])}(),function(){"use strict";function questionDirective(){return{restrict:"E",templateUrl:"views/directives/question.html",controller:"QuestionCtrl",scope:{number:"@",title:"@",description:"@",link:"@"},replace:!0,link:questionDirectiveLink}}function questionDirectiveLink(scope,el,attr){attr.link=attr.link||"#"}angular.module("questionDirective",["questionCtrl"]).directive("question",[questionDirective])}(),function(){"use strict";function rangeDirective(){return{restrict:"E",templateUrl:"views/directives/range.html",scope:{min:"=",max:"=",options:"@"},replace:!0,link:rangeDirectiveLink}}function rangeDirectiveLink(scope,el,attr){scope.options=angular.fromJson(attr.options);var min=scope.options.floor,max=scope.options.ceil;scope.$watch("min",function(value){value>max&&(scope.min=scope.max),min>value&&(scope.min=min),scope.min>scope.max&&(scope.min=scope.max)}),scope.$watch("max",function(value){value>max&&(scope.max=max),min>value&&(scope.max=scope.min),scope.max<scope.min&&(scope.max=scope.min)})}angular.module("rangeDirective",["rzModule"]).directive("range",[rangeDirective])}(),function(){"use strict";function colorDirective(){return{restrict:"E",templateUrl:"views/directives/texture.html",scope:{model:"=",checked:"@",disabled:"@",fill:"@",name:"@",value:"@"},replace:!0,link:textureDirectiveLink}}function textureDirectiveLink(scope,el,attr){}angular.module("textureDirective",[]).directive("texture",[colorDirective])}(),function(){"use strict";function benefitsService(API_PATH,$http,$q){function getBenefits(apiUrl){var url=API_PATH+apiUrl,defer=$q.defer();return $http.get(url).success(function(data){defer.resolve(data)}).error(function(res,errCode){defer.reject({code:errCode,text:"api access [%s] error!".replace("%s",url)})}),defer.promise}var service={getBenefits:getBenefits};return service}angular.module("benefitsService",[]).factory("BenefitsService",["API_PATH","$http","$q",benefitsService])}(),function(){"use strict";function productService(API_PATH,$http,$q){function getProduct(path){var url=API_PATH+"product.json",defer=$q.defer();return $http.get(url).success(function(data){service.textures=data,defer.resolve(data)}).error(function(res,errCode){defer.reject({code:errCode,text:"api access [%s] error!".replace("%s",url)})}),defer.promise}var service={getProduct:getProduct};return service}angular.module("productService",[]).factory("ProductService",["API_PATH","$http","$q",productService])}(),function(){"use strict";function questionService(API_PATH,$http,$q){function getQuestion(){var url=API_PATH+"questions.json",defer=$q.defer();return $http.get(url).success(function(data){defer.resolve(data)}).error(function(res,errCode){defer.reject({code:errCode,text:"api access [%s] error!".replace("%s",url)})}),defer.promise}var service={getQuestion:getQuestion};return service}angular.module("questionService",[]).factory("QuestionService",["API_PATH","$http","$q",questionService])}(),function(){"use strict";function texturesService(API_PATH,$http,$q){function getTextures(id){var url=API_PATH+"textures.json",defer=$q.defer();return $http.get(url).success(function(data){service.textures=data,defer.resolve(data)}).error(function(res,errCode){defer.reject({code:errCode,text:"api access [%s] error!".replace("%s",url)})}),defer.promise}function getTextureById(id){return _.findWhere(service.textures,{id:parseInt(id,10)})}function getTextureByUrl(url){return _.findWhere(service.textures,{url:url})}var service={getTextures:getTextures,getTextureById:getTextureById,getTextureByUrl:getTextureByUrl};return service}angular.module("texturesService",[]).factory("TexturesService",["API_PATH","$http","$q",texturesService])}();
//# sourceMappingURL=../js/app.js.map