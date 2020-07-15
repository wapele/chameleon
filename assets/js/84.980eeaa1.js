(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{450:function(e,a,n){"use strict";n.r(a);var t=n(17),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cml-ios-sdk-使用范例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cml-ios-sdk-使用范例"}},[e._v("#")]),e._v(" CML iOS SDK 使用范例")]),e._v(" "),n("p",[e._v("以一个一个小 Demo，讲述 CML iOS SDK 的使用方式，引领轻松入门。\nDemo 工程在根目录 “Example” 目录下，打开 “Chameleon.xcworkspace” 文件即可打开工程。")]),e._v(" "),n("h2",{attrs:{id:"工程集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工程集成"}},[e._v("#")]),e._v(" 工程集成")]),e._v(" "),n("p",[e._v("在你的 Podfile 文件中，添加如下代码（以 Demo 工程为例）：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("platform :ios, '9.0'\n\ntarget 'Chameleon_Example' do\n\n    #Chameleon\n    pod 'Chameleon', :path => '../Chameleon/'\n\n    #写入weex依赖。\n    pod 'WeexSDK', '~> 0.19.0.2'\n\n    #写入react_native依赖。\n    pod 'React', :path => '../Chameleon/react_native/node_modules/react-native', :subspecs => [\n    'Core',\n    'CxxBridge', # 如果RN版本 >= 0.45则加入此行\n    'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单\n    'RCTText',\n    'RCTNetwork',\n    'RCTWebSocket', # 这个模块是用于调试功能的\n    ]\n\n    pod 'yoga', :path => '../Chameleon/react_native/node_modules/react-native/ReactCommon/yoga'\n    pod 'DoubleConversion', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'\n    pod 'glog', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/GLog.podspec'\n    pod 'Folly', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/Folly.podspec'\n\nend\n")])])]),n("p",[e._v("将 podfile 保存，并运行 pod install。")]),e._v(" "),n("h2",{attrs:{id:"工程中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工程中使用"}},[e._v("#")]),e._v(" 工程中使用")]),e._v(" "),n("h3",{attrs:{id:"初始化变色龙环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化变色龙环境"}},[e._v("#")]),e._v(" 初始化变色龙环境")]),e._v(" "),n("p",[e._v("在 appdelegate.m 中的 appDidFinishLaunchingWithOptions 方法中添加:")]),e._v(" "),n("p",[e._v("//初始化 SDK 实例\n[CMLSDKEngine initSDKEnvironment];\n//设置渲染引擎为 weex\n[CMLEnvironmentManage chameleon].serviceType = CMLServiceTypeWeex;")]),e._v(" "),n("p",[e._v("如果需要使用预加载的功能，则：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('//设置预加载的链接地址\n[CMLEnvironmentManage chameleon].weexService.config.prefetchContents = @[@"http%3A%2F%2F172.22.139.32%3A8000%2Fweex%2Fchameleon-bridge.js%3Ft%3D1546502643623"];\n//启动预加载\n[[CMLEnvironmentManage chameleon].weexService setupPrefetch];\n')])])]),n("ul",[n("li",[e._v("在 "),n("code",[e._v("[CMLEnvironmentManage chameleon].weexService.config")]),e._v(" 实例中可以看到更多的设置选项。")])]),e._v(" "),n("h3",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),n("h4",{attrs:{id:"实例化一个-weex-渲染页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化一个-weex-渲染页面"}},[e._v("#")]),e._v(" 实例化一个 Weex 渲染页面")]),e._v(" "),n("p",[e._v("以 Demo 为例：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("CMLWeexRenderPage *weexDemo = [[CMLWeexRenderPage alloc] initWithLoadUrl:encodeUrl];\nweexDemo.service = [CMLEnvironmentManage chameleon].weexService;\n[self.navigationController pushViewController:weexDemo animated:YES];\n")])])]),n("h4",{attrs:{id:"实例化一个-reactnative-渲染页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例化一个-reactnative-渲染页面"}},[e._v("#")]),e._v(" 实例化一个 ReactNative 渲染页面")]),e._v(" "),n("p",[e._v("ReactNative 的渲染容器待完善")]),e._v(" "),n("h4",{attrs:{id:"添加一个自己的-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加一个自己的-module"}},[e._v("#")]),e._v(" 添加一个自己的 Module")]),e._v(" "),n("p",[e._v("我们以 CMLStorageModule 为例")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('#import <Foundation/Foundation.h>\n#import "CMLModuleProtocol.h"\n\n//实现“CMLModuleProtocol.h”\n@interface CMLStorageModule : NSObject<CMLModuleProtocol>\n\n@property (nonatomic, weak) CMLInstance *cmlInstance;\n\n@end\n')])])]),n("h5",{attrs:{id:"在实现文件中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在实现文件中"}},[e._v("#")]),e._v(" 在实现文件中")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('#import "CMLStorageModule.h"\n#import "CMLUtility.h"\n#import "CMLConstants.h"\n\n@implementation CMLStorageModule\n@synthesize cmlInstance;\n\n//使用 CML_EXPORT_METHOD 导出方法以供JS所调用。\nCML_EXPORT_METHOD(@selector(setStorage:callBack:))\n\n- (void)setStorage:(NSDictionary *)parms callBack:(CMLMoudleCallBack)callback{\n\n    NSString *key = parms[@"key"];\n    NSString *value = parms[@"value"];\n    if (!key || key.length <= 0 || !value || value.length <=0) {\n        return;\n    }\n    NSUserDefaults *ud = [NSUserDefaults standardUserDefaults];\n    [ud setValue:value forKey:key];\n    [ud synchronize];\n\n    if (callback) {\n        NSDictionary *result = @{@"errno": @"0", @"msg": @""};\n        if(callback) callback(result);\n    }\n}\n@end\n')])])])])}),[],!1,null,null,null);a.default=o.exports}}]);