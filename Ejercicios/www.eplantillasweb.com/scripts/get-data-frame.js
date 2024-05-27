currencyCookieName="_currency_code";PR_LIST={usd:"e4KSkTH52i2f75c55feZguz9KvnG6w",gbp:"YUpk5RIV7vHLW89Z7gJK75SjLg8x49",euro:"JSPGMSG1q52kt5J50o5F0v9U0c5w8M"};currencyCode=(getCookie(currencyCookieName)?getCookie(currencyCookieName):"euro");PR_CODE=PR_LIST[currencyCode];(function(){$(document).ready(function(){$(".btn-currency").find("span").first().html("<span class='flag-icon flag-icon-"+currencyCode.substr(0,2)+"'></span> "+getCurrency().toUpperCase());var body=$('body');var pageType=body.data('type');if(pageType=='template-list')
{initFrame();}else if(pageType=='detail-view')
{initDetail();}else if(pageType=='live-view')
{initLive();}});})();function initDetail(){var tmpl_data=getTmplData();addIdToLinks(tmpl_data);var url=encodeURIComponent("https://www.templatehelp.com/preset/pr_preview.php?i="+tmpl_data.tmpl_id+"&pr_code="+PR_CODE);$.post('/proxy.php?url='+url,renderDetail);document.title=tmpl_data.tmpl_id+' Detail';}
function initLive(){var tmpl_data=getTmplData();addIdToLinks(tmpl_data);var container=$('.container-demo');container.append('<iframe name="'+tmpl_data.tmpl_id+'" frameborder="0" src="'+tmpl_data.url_preview+"/"+'" allowfullscreen="" id="demoFrame"></iframe>');var viewportDesktop=$('.viewport-desktop');var viewportTablet=$('.viewport-tablet');var viewportPhone=$('.viewport-phone');var viewportTabletLandscape=$('.viewport-tablet-landscape');var viewportPhoneLandscape=$('.viewport-phone-landscape');viewportDesktop.click(function(){container.css({'width':'100%','border':'none',});});viewportTablet.click(function(){container.css({'width':'768px','border-left':'2px solid #ddd','border-right':'2px solid #ddd','min-width':'inherit'});});viewportTabletLandscape.click(function(){container.css({'width':'1024px','border-left':'2px solid #ddd','border-right':'2px solid #ddd','min-width':'inherit'});});viewportPhoneLandscape.click(function(){container.css({'width':'480px','border-left':'2px solid #ddd','border-right':'2px solid #ddd','min-width':'inherit'});});viewportPhone.click(function(){container.css({'width':'320px','border-left':'2px solid #ddd','border-right':'2px solid #ddd','min-width':'inherit'});});document.title=tmpl_data.tmpl_id+' Live Demo';}
function getTmplData(){var search_data={};var search=window.location.hash.split(/#|&/);for(var i=0;i<search.length;i++)
{if(search[i]!='')
{var key_val=search[i].split('=');search_data[key_val[0]]=key_val[1];}}
return search_data;}
function addBtnAjax(){$(".add-to-cart").click(function(event){event.preventDefault();var addToCartUrl=$(this).attr('href');addToCartUrl=addToCartUrl.replace('http://','https://');$('body').append('<iframe onload="redirectToCart();" src="'+addToCartUrl+'" width="1" height="1"></iframe>');});}
function redirectToCart(){var goToCartUrl=$('.go-to-cart').attr('href');goToCartUrl=goToCartUrl.replace('http://','https://');window.location.href=goToCartUrl;}
function addIdToLinks(tmpl_data){var links=$('a.add-id');links.each(function(index,element){element.href+=window.location.hash;});links=$('a.add-pr-code');links.each(function(index,element){element.href+='templ='+tmpl_data.tmpl_id+'&pr_code='+PR_CODE;});addBtnAjax();}
function renderDetail(frame){var $frame=$(frame);var details_container=$('#details-container').html('');var template_type=$frame.find('.templ_type_container');var preview_area=$frame.find('.preview_area').removeAttr('style');preview_area.find('img').addClass('img-responsive');var describe=$('<div class="row"></div>');var new_screen_shots_container=$('<div class="col-xs-12 col-sm-6 shots_container"></div>');var screen_shots_images=$frame.find('.shots_container img');screen_shots_images.each(function(index,element){var image=$(element);var sub_container=$('<div></div>');var screen_text=$(image.parent().parent().parent().find('b')[index+1]).html();if(screen_text)
{sub_container.append('<p class="layout-type">'+screen_text+'</p>');}
sub_container.append(image.addClass('img-responsive'));new_screen_shots_container.append(sub_container);});var new_templ_info_container=$('<div class="col-xs-12 col-sm-6"></div>');var templ_info_container=$frame.find('.templ_info_container');var pfv=templ_info_container[0].innerHTML;pfv=pfv.replace(/Autor: <strong>[\s\S]*?<\/strong>/,'');pfv=pfv.replace(/<b>Ficheros de origen disponibles:[\s\S]*?Properties-->/,'');pfv=pfv.replace(/<b>SOFTWARE REQUERIDO:[\s\S]*?Mac\);/,'');pfv=pfv.replace(/Adobe Photoshop CS\+;/ig,'');pfv=pfv.replace(/<br><br>/ig,'<br>');if(pfv.match(/Package for Vendors/i)){pfv=pfv.replace(/Descripción del producto:/ig,"").replace(/Package for Vendors/ig,"").replace(/SOFTWARE REQUERIDO:/ig,"").replace(/Ficheros de origen disponibles:/ig,"");}
templ_info_container=pfv;new_templ_info_container.append(templ_info_container);describe.append(new_screen_shots_container,new_templ_info_container);details_container.append(template_type,preview_area,describe);}
var current_page,keyword,type,types,category,predefines,initStatus=false;var save_title,tab_keyword;function initFrame(){$('a.add-pr-code').each(function(index,element){element.href+='pr_code='+PR_CODE;});$(".add-to-cart").click(function(event){event.preventDefault();var addToCartUrl=$(this).attr('href');var goToCartUrl=$('.go-to-cart').attr('href');$.get(addToCartUrl,function(){window.location.href=goToCartUrl;});});$('#search-form').on('submit',submitSearch);$('.btn-reset').click(resetSearch);var tabs=$('.nav-tabs > li');if(tabs.length)
{tabs.on('shown.bs.tab',showTab);showTab({currentTarget:tabs.first()[0]});}
var search_info_from_page=$('#search-info-from-page');if(search_info_from_page.length)
{searchToData(search_info_from_page.data('search'));}
$(window).on('popstate',popState);popState();}
function getData(){var search_info=$('#search-info');if(search_info.length){var tile=$('title');if(keyword&&keyword!=''||type&&type!=''||category&&category!=''){if($.isNumeric(keyword)){type=0;}
var type_string=type!=''?$('#product').find('option[value='+type+']').html():'';var category_string=category!=''?$('#category').find('option[value='+category+']').html():'';var title_string=(type_string!==undefined?type_string:"")+' '+(category_string!=undefined?category_string:"")+(keyword!=undefined&&keyword!=''?' \''+keyword+'\'':'');if(type_string==''){type_string="<br>Todos los tipos"}
else
if(type_string==undefined)type_string=''
else
{type_string="<br>"+type_string}
search_info.html('Resultados'+type_string+(category_string!=undefined?category_string:"")+"<br>"+(keyword!=undefined&&keyword!=''?' \''+keyword+'\'':''));save_title=tile.html();tile.html(title_string);}else{search_info.html('Resultados<br> Todos los tipos');if(save_title){tile.html(save_title);save_title=false;}}}
$('.pre-loader').fadeIn(200);$.post('/proxy.php?url='+getUrl(),function(response){var template=$(response);$('.pre-loader').fadeOut(200);$('.pre-loader-button').fadeOut(200);renderData(template);});}
function renderData(template){var frame=$('#frame');var height=frame.height();frame.height(height);setTimeout(function(){frame.html('');if(!template.length||template.length==1)
{frame.append('<div class="grid_12 error"><span>Por favor, pruebe otras palabras clave.</span></div>');return;}
var top_buttons=template.find('#top-pager');top_buttons[0].innerHTML=top_buttons[0].innerHTML.replace(/page/g,'#page');var containers=template.find('#templates_list_container td > div');var bottom_buttons=template.find('#bottom-pager');var scripts=template.find('td script');scripts.remove();var top_buttons_container=$('<div class="col-xs-12 clearfix col-top-pager"></div>');top_buttons.children().click(selectElem);top_buttons.find('.current').off('click');top_buttons_container.append(top_buttons);frame.append(top_buttons_container);for(var i=0;i<containers.length;i++){var tmpl_container=$('<div class="col-xs-12 col-sm-4 templateContainer"></div>');var new_tmpl=$(containers[i]);new_tmpl.append('<div class="pre-loader"></div>');var img=new_tmpl.find('#thumbNail img').addClass('img-responsive').removeAttr('onclick');var detail_link=new_tmpl.find('#detailLink a');var live_link=new_tmpl.find('#liveLink a');var detail_link_script=detail_link.attr('onclick');detail_link.removeAttr('onclick');live_link.removeAttr('onclick');var template_id=detail_link_script.match(/n=(\d+)/i);var url_preview=detail_link_script.match(/urlDemo\('(.*)'\),/i);var template_type=detail_link_script.match(/PSD/i);if(template_type)
{url_preview[1]='https://scr.template-help.com/';};if(url_preview[1].indexOf('livedemo00.template-help.com/landing/shopify/shopify.php?theme=')!==-1)
{result=url_preview[1].replace('livedemo00.template-help.com/landing/shopify/shopify.php?theme=',"")+".myshopify.com";url_preview[1]=result;}
if(template_id)
{detail_link.attr('href','/detail/#tmpl_id='+template_id[1]+'&url_preview='+url_preview[1]);detail_link.attr('target','_blank');live_link.attr('href','/live/#tmpl_id='+template_id[1]+'&url_preview='+url_preview[1]);live_link.attr('target','_blank');img.wrap('<a href="/live/#tmpl_id='+template_id[1]+'&url_preview='+url_preview[1]+'" + target="_blank"></a>');}
tmpl_container.append(new_tmpl);frame.append(tmpl_container);}
var bottom_buttons_elem=bottom_buttons.children();for(i=0;i<bottom_buttons_elem.length;i++){var btn=$(bottom_buttons_elem[i]);if(btn.attr('id')=='next_page_link'){btn.click(nextPage);}
if(btn.attr('id')=='prev_page_link'){btn.click(prevPage);}}
var bottom_buttons_container=$('<div class="col-xs-12 col-bottom-pager"></div>');bottom_buttons_container.append(bottom_buttons);frame.append(bottom_buttons_container);},100);setTimeout(function(){frame.height('100%');},300);return 0;}
function selectElem(){var current=$('span.current');current.before($('<a class="link" href="#">').html(current.html()));current.remove();var new_current=$(this);current_page=new_current.html();new_current.before($('<span class="current">').html(current_page));new_current.remove();current_page=parseInt(current_page);if(isNaN(current_page))
current_page=1;setHash();return false;}
function nextPage(){current_page++;setHash();return false;}
function prevPage(){current_page--;setHash();return false;}
function submitSearch(){$('.pre-loader-button').fadeIn(200);var input=$('#keyword');var type_select=$('#product');var category_select=$('#category');keyword=input.val();type=type_select.val();category=category_select.val();current_page=1;if($.isNumeric(parseInt(keyword))){location.assign("/busqueda-avanzada/#keyword="+keyword+"&type=0&category=");}
setHash();return false;}
function resetSearch(){setTimeout(function(){if($('form[name="select-form"]').length){$('#product').val(1);}
$('.selectpicker').selectpicker('render');submitSearch();},400);}
function showTab(event){var active_tab=$(event.currentTarget);var search_data=active_tab.data('search');searchToData(search_data);}
function searchToData(search_data){if(typeof search_data=='object')
{current_page=1;keyword=(search_data.keyword?search_data.keyword:"");tab_keyword=search_data.keyword?decodeURIComponent(search_data.keyword):search_data.keyword;type=search_data.type;types=search_data.types;category=search_data.category;predefines=search_data.predefines;}
setHash();}
function getPageData(){var search_data=getStaticPageData();var search=window.location.hash.split(/#|&/);for(var i=0;i<search.length;i++)
{if(search[i]!='')
{var key_val=search[i].split('=');if(key_val[0].indexOf('[]')==-1)
{search_data[key_val[0]]=key_val[1];}else
{var key=key_val[0].split('[]')[0];if(typeof search_data[key]!=='object')
search_data[key]=[];search_data[key].push(key_val[1]);}}}
return search_data;}
function fillGlobalVars(get_params){var static_data=getStaticPageData();predefines=undefined;if(current_page===undefined||(!initStatus&&get_params.page!=undefined))
current_page=get_params.page;if(keyword===undefined||(!initStatus&&get_params.keyword!=undefined))
keyword=get_params.keyword?decodeURIComponent(get_params.keyword):get_params.keyword;if(type===undefined||(!initStatus&&get_params.type!=undefined))
type=get_params.type;if(category===undefined||(!initStatus&&get_params.category!=undefined))
category=get_params.category;if(predefines===undefined||static_data.predefines==predefines)
predefines=get_params.predefines;if(types===undefined||types==static_data.types)
types=get_params.types;if(type!='')types='';}
function getStaticPageData(){var search_data={page:1};var searchDataStr=$('#search-info-from-page').attr('data-search');if(searchDataStr){searchDataObj=$.parseJSON(searchDataStr);if(searchDataObj){search_data.types=(searchDataObj.types?searchDataObj.types:search_data.types);search_data.type=(searchDataObj.type?searchDataObj.type:search_data.type);search_data.page=(searchDataObj.page?searchDataObj.page:search_data.page);search_data.category=(searchDataObj.category?searchDataObj.category:search_data.category);search_data.keyword=(searchDataObj.keyword?searchDataObj.keyword:search_data.keyword);search_data.clean=searchDataObj.clean;search_data.price1=searchDataObj.price1;search_data.price2=searchDataObj.price2;}}
return search_data;}
function getUrl(){var quantity=9;var url="https://www.templatehelp.com/pr_interface.php";var i;url+="?pr_code="+PR_CODE;url+="&cols="+quantity;url+="&rows=1&price1=&price2=&sp=0&adult=&author=&bgcolor=none";url+=type?"&type="+type:'';url+=category?"&category="+category:'';url+=keyword&&!tab_keyword?"&keyword="+keyword:'';url+=!keyword&&tab_keyword?"&keyword="+tab_keyword:'';url+=keyword&&tab_keyword?"&keyword="+keyword+'%2C+'+tab_keyword:'';url+="&page="+(current_page-1);url=url.replace(/ /g,'+');if(typeof predefines=='object'){for(i=0;i<predefines.length;i++)
{url+="&predefines[]="+predefines[i];}}
if(typeof types=='object'){for(i=0;i<types.length;i++)
{url+="&types[]="+types[i];}}
return encodeURIComponent(url);}
function log_search(){var searchData={keyword:keyword,type:type,category:$("#category option:selected").text()};if(searchData.keyword||searchData.type||(searchData.category&&searchData.category!="Search In All Categories")){$.post('/search-log/',searchData,function(data){console.log(data);});}}
function setHash(){var hash=getHash();if(hash.length>1){if(hash.match(/null/ig)){hash=hash.replace(/null/ig,"1");}
if(window.location.hash==hash){$('.pre-loader').fadeOut(200);$('.pre-loader-button').fadeOut(200);}
window.location=hash;}}
function getHash(){var get_params=getPageData();var get_params_static=getStaticPageData();fillGlobalVars(get_params);var curUrl=window.location.href;var hash='#';var i;if(curUrl.indexOf('page=')!==-1)
hash+=(current_page!==undefined)?'page='+current_page+'&':'';else
hash+=(current_page!==undefined&&current_page!=1)?'page='+current_page+'&':'';if(initStatus||(!initStatus&&keyword!==undefined&&get_params_static.keyword!=keyword&&keyword!=""))
hash+=(keyword!==undefined)?'keyword='+encodeURIComponent(keyword)+'&':'';if(initStatus||(!initStatus&&tab_keyword!==undefined&&get_params_static.tab_keyword!=tab_keyword))
hash+=tab_keyword!==undefined?'tab_keyword='+tab_keyword+'&':'';if(initStatus||(!initStatus&&type!==undefined&&get_params_static.type!=type))
hash+=(type!==undefined)?'type='+type+'&':'';if(initStatus||(!initStatus&&category!==undefined&&get_params_static.category!==category))
hash+=(category!==undefined?'category='+category+'&':'');if(typeof types=='object')
{for(i=0;i<types.length;i++)
{hash+='types[]='+types[i]+'&';}}
if(typeof predefines=='object')
{for(i=0;i<predefines.length;i++)
{hash+='predefines[]='+predefines[i]+'&';}}
initStatus=true;return hash;}
function popState(){var get_params=getPageData();current_page=get_params.page;keyword=get_params.keyword?decodeURIComponent(get_params.keyword):get_params.keyword;type=get_params.type;category=get_params.category;predefines=get_params.predefines;if(!types||!get_params.clean)
types=get_params.types;$('#keyword').val(keyword);$('#product').val(type);$('#category').val(category);getData();var type_string=type!=''?$('#product').find('option[value='+type+']').html():'';var category_string=category!=''?$('#category').find('option[value='+category+']').html():'';if(category_string!=''&&category_string!=undefined)
$('#category').parent().find('.filter-option').first().html(category_string);if(type_string!==''&&type_string!==undefined)
$('#product').parent().find('.filter-option').first().html(type_string);}
function sniffIOS(){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){$('a').each(function(index,el){var url=$(el).attr('href');if(url&&url.indexOf('/live/')!=-1){$(el).attr('target','_blank');}});}}
function setCurrency(currency){if(PR_LIST[currency]){setCookie(currencyCookieName,currency,30);}
window.location.reload();}
function getCurrency(){var code=getCookie(currencyCookieName);if(code)
return code;else
return "euro";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}