'use strict';

var md = new Remarkable();
var starts = [{
  name: 'Getting Start',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/getting-started.md'
}, {
  name: 'FAQ',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/FAQ.md'
}, {
  name: 'Cases',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Cases.md',
  images: true
}, {
  name: '用户属性',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/微信用户属性.md'
}];
var components = [{
  name: 'Button',
  icon: 'http://weui.github.io/weui/images/icon_nav_button.png',
  preview: 'http://weui.github.io/weui/#button',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Button.md'
}, {
  name: 'Cell',
  icon: 'http://weui.github.io/weui/images/icon_nav_cell.png',
  preview: 'http://weui.github.io/weui/#cell',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Cell.md'
}, {
  name: 'Toast',
  icon: 'http://weui.github.io/weui/images/icon_nav_toast.png',
  preview: 'http://weui.github.io/weui/#toast',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Toast.md'
}, {
  name: 'Dialog',
  icon: 'http://weui.github.io/weui/images/icon_nav_dialog.png',
  preview: 'http://weui.github.io/weui/#dialog',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Dialog.md'
}, {
  name: 'Progress',
  icon: 'http://weui.github.io/weui/images/icon_nav_progress.png',
  preview: 'http://weui.github.io/weui/#progress',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Progress.md'
}, {
  name: 'Msg',
  icon: 'http://weui.github.io/weui/images/icon_nav_msg.png',
  preview: 'http://weui.github.io/weui/#msg',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Msg-Page.md'
}, {
  name: 'Article',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  preview: 'http://weui.github.io/weui/#article',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Article.md'
}, {
  name: 'ActionSheet',
  icon: 'http://weui.github.io/weui/images/icon_nav_actionSheet.png',
  preview: 'http://weui.github.io/weui/#actionsheet',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/ActionSheet.md'
}, {
  name: 'Icon',
  icon: 'http://weui.github.io/weui/images/icon_nav_icons.png',
  preview: 'http://weui.github.io/weui/#icons',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Icon.md'
}, {
  name: 'Grid',
  icon: 'http://weui.github.io/weui/images/icon_nav_button.png',
  preview: 'http://weui.github.io/weui/',
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Grid.md'
}, {
  name: 'Form',
  icon: 'http://weui.github.io/weui/images/icon_nav_article.png',
  images: true,
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Form.md'
}, {
  name: 'Panel',
  icon: 'http://weui.github.io/weui/images/icon_nav_panel.png',
  images: true,
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Panel.md',
  preview: 'http://weui.github.io/weui/#panel',
}, {
  name: 'Navbar',
  icon: 'http://weui.github.io/weui/images/icon_nav_tab.png',
  images: true,
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Navbar.md',
  preview: 'http://weui.github.io/weui/#navbar',
}, {
  name: 'Tabbar',
  icon: 'http://weui.github.io/weui/images/icon_nav_tab.png',
  images: true,
  docs: 'https://raw.githubusercontent.com/wiki/weui/weui/Tabbar.md',
  preview: 'http://weui.github.io/weui/#tabbar',
}];

//menus functions
$('#btnDemo').click(function (e) {
  return $('#demoSection').toggle();
});
$('#btnHideDemo').click(function (e) {
  return $('#demoSection').hide();
});
$('#btnSettings').click(function (e) {
  return $('#settingsSection').toggle();
});
$('#btnHideSettings').click(function (e) {
  return $('#settingsSection').hide();
});
$('#btnStart').click(function (e) {
  $('.wechat__menus li').removeClass('active');
  $('#btnStart').addClass('active');
  $('.content-topic > div').hide();
  $('#secStarts').show();
});
$('#btnComponent').click(function (e) {
  $('.wechat__menus li').removeClass('active');
  $('#btnComponent').addClass('active');
  $('.content-topic > div').hide();
  $('#secComponents').show();
});

//add articles
starts.forEach(function (component) {
  return mountComponent(component, $('#weuiStart'));
});
//add components
components.forEach(function (component) {
  return mountComponent(component, $('#weuiComponents'));
});

//settings
$('#previewSize').change(function (e) {
  var _size = $('#previewSize').val();
  var _iframe = $('#previewIFrame');
  switch (_size) {
    case 'iphone6':
      _iframe.attr('width', 375);
      _iframe.attr('height', 627);
      break;
    case 'iphone6p':
      _iframe.attr('width', 414);
      _iframe.attr('height', 739);
      break;
    case 'nexus6':
      _iframe.attr('width', 412);
      _iframe.attr('height', 659);
      break;
  }
});

//fixing details height
$('#componentDocs').height($(window).height());

function mountComponent(component, container) {
  var noImage = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var el = componentCell(component.name, component.icon);
  container.append(el);

  $(el).click(function (e) {
    $('#weuiComponents .weui_cell').removeClass('active');
    $('#weuiStart .weui_cell').removeClass('active');
    $(el).addClass('active');
    $.get(component.docs, function (data) {
      //stripe down extra part
      if (!component.images) data = data.replace(/(!\[.*?\]\()(.+?)(\))/g, '');
      data = data.replace('预览效果如下：', '');

      $('#componentDocs').html(md.render(data));
      $('#componentDocs pre code').removeClass('language-html').addClass('language-markup');
      Prism.highlightAll();

      $(".components__details").show().addClass('animated slideInLeft');

      if (component.preview) {
        $('#noPreview').hide();
        $('#previewIFrame').show().attr('src', component.preview);
      } else {
        $('#previewIFrame').hide();
        $('#noPreview').show();
      }
    }).fail(function (e) {
      alert("get doc error!");
    });
  });
};

//templates
function componentCell(name, icon) {
  return $('<a></a>').addClass('weui_cell').html('\n        <div class="weui_cell_hd">\n            <img src="' + icon + '" alt="icon" style="width:20px;margin-right:5px;display:block">\n        </div>\n        <div class="weui_cell_bd weui_cell_primary">  \n        </div>\n        <div class="weui_cell_ft">\n            ' + name + '\n        </div>\n  ');
}