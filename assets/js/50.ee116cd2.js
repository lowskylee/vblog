(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{466:function(a,t,s){"use strict";s.r(t);var n=s(2),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"java-8-移除permgen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-8-移除permgen"}},[a._v("#")]),a._v(" Java 8 - 移除Permgen")]),a._v(" "),t("blockquote",[t("p",[a._v("本文主要介绍PermGen space，及Java 8 - 移除Permgen。@pdai")])]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#java-8---%e7%a7%bb%e9%99%a4permgen"}},[a._v("Java 8 - 移除Permgen")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#permgen-space%e7%ae%80%e5%8d%95%e4%bb%8b%e7%bb%8d"}},[a._v("PermGen space简单介绍")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%e5%85%83%e7%a9%ba%e9%97%b4metaspace%e4%b8%80%e7%a7%8d%e6%96%b0%e7%9a%84%e5%86%85%e5%ad%98%e7%a9%ba%e9%97%b4%e8%af%9e%e7%94%9f"}},[a._v("元空间(MetaSpace)一种新的内存空间诞生")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#permgen-vs-metaspace-%e8%bf%90%e8%a1%8c%e6%97%b6%e6%af%94%e8%be%83"}},[a._v("PermGen vs. Metaspace 运行时比较")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#jdk-17-64-bit-%e2%80%93-permgen-%e8%80%97%e5%b0%bd%e6%b5%8b%e8%af%95"}},[a._v("JDK 1.7 @64-bit – PermGen 耗尽测试")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#jdk-18-64-bit-%e2%80%93-metaspace%e5%a4%a7%e5%b0%8f%e5%8a%a8%e6%80%81%e8%b0%83%e6%95%b4%e6%b5%8b%e8%af%95"}},[a._v("JDK 1.8 @64-bit – Metaspace大小动态调整测试")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#jdk-18-64-bit-%e2%80%93-metaspace-%e5%8f%97%e9%99%90%e6%b5%8b%e8%af%95"}},[a._v("JDK 1.8 @64-bit – Metaspace 受限测试")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%e6%80%bb%e7%bb%93"}},[a._v("总结")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%e5%8f%82%e8%80%83%e6%96%87%e7%ab%a0"}},[a._v("参考文章")])])])])]),a._v(" "),t("blockquote",[t("p",[a._v("很多开发者都在其系统中见过“java.lang.OutOfMemoryError: PermGen space”这一问题。这往往是由类加载器相关的内存泄漏以及新类加载器的创建导致的，通常出现于代码热部署时。相对于正式产品，该问题在开发机上出现的频率更高，在产品中最常见的“问题”是默认值太低了。常用的解决方法是将其设置为256MB或更高。")])]),a._v(" "),t("h2",{attrs:{id:"permgen-space简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permgen-space简单介绍"}},[a._v("#")]),a._v(" PermGen space简单介绍")]),a._v(" "),t("p",[a._v("PermGen space的全称是Permanent Generation space,是指内存的永久保存区域，说说为什么会内存益出: 这一部分用于存放Class和Meta的信息,Class在被 Load的时候被放入PermGen space区域，它和和存放Instance的Heap区域不同,所以如果你的APP会LOAD很多CLASS的话,就很可能出现PermGen space错误。这种错误常见在web服务器对JSP进行pre compile的时候。")]),a._v(" "),t("p",[a._v("JVM 种类有很多，比如 Oralce-Sun Hotspot, Oralce JRockit, IBM J9, Taobao JVM(淘宝好样的！)等等。当然武林盟主是Hotspot了，这个毫无争议。需要注意的是，PermGen space是Oracle-Sun Hotspot才有，JRockit以及J9是没有这个区域。")]),a._v(" "),t("h2",{attrs:{id:"元空间-metaspace-一种新的内存空间诞生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元空间-metaspace-一种新的内存空间诞生"}},[a._v("#")]),a._v(" 元空间(MetaSpace)一种新的内存空间诞生")]),a._v(" "),t("p",[a._v("JDK8 HotSpot JVM 将移除永久区，使用本地内存来存储类元数据信息并称之为: 元空间(Metaspace)；这与Oracle JRockit 和IBM JVM’s很相似，如下图所示")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/java8-jvm-1.png",alt:""}})]),a._v(" "),t("p",[a._v("这意味着不会再有java.lang.OutOfMemoryError: PermGen问题，也不再需要你进行调优及监控内存空间的使用……但请等等，这么说还为时过早。在默认情况下，这些改变是透明的，接下来我们的展示将使你知道仍然要关注类元数据内存的占用。请一定要牢记，这个新特性也不能神奇地消除类和类加载器导致的内存泄漏。")]),a._v(" "),t("p",[a._v("java8中metaspace总结如下:")]),a._v(" "),t("ul",[t("li",[a._v("PermGen 空间的状况")])]),a._v(" "),t("p",[a._v("这部分内存空间将全部移除。")]),a._v(" "),t("p",[a._v("JVM的参数: PermSize 和 MaxPermSize 会被忽略并给出警告(如果在启用时设置了这两个参数)。")]),a._v(" "),t("ul",[t("li",[a._v("Metaspace 内存分配模型")])]),a._v(" "),t("p",[a._v("大部分类元数据都在本地内存中分配。")]),a._v(" "),t("p",[a._v("用于描述类元数据的“klasses”已经被移除。")]),a._v(" "),t("ul",[t("li",[a._v("Metaspace 容量")])]),a._v(" "),t("p",[a._v("默认情况下，类元数据只受可用的本地内存限制(容量取决于是32位或是64位操作系统的可用虚拟内存大小)。")]),a._v(" "),t("p",[a._v("新参数(MaxMetaspaceSize)用于限制本地内存分配给类元数据的大小。如果没有指定这个参数，元空间会在运行时根据需要动态调整。")]),a._v(" "),t("ul",[t("li",[a._v("Metaspace 垃圾回收")])]),a._v(" "),t("p",[a._v("对于僵死的类及类加载器的垃圾回收将在元数据使用达到“MaxMetaspaceSize”参数的设定值时进行。")]),a._v(" "),t("p",[a._v("适时地监控和调整元空间对于减小垃圾回收频率和减少延时是很有必要的。持续的元空间垃圾回收说明，可能存在类、类加载器导致的内存泄漏或是大小设置不合适。")]),a._v(" "),t("ul",[t("li",[a._v("Java 堆内存的影响")])]),a._v(" "),t("p",[a._v("一些杂项数据已经移到Java堆空间中。升级到JDK8之后，会发现Java堆 空间有所增长。")]),a._v(" "),t("ul",[t("li",[a._v("Metaspace 监控")])]),a._v(" "),t("p",[a._v("元空间的使用情况可以从HotSpot1.8的详细GC日志输出中得到。")]),a._v(" "),t("p",[a._v("Jstat 和 JVisualVM两个工具，在使用b75版本进行测试时，已经更新了，但是还是能看到老的PermGen空间的出现。")]),a._v(" "),t("p",[a._v("前面已经从理论上充分说明，下面让我们通过“泄漏”程序进行新内存空间的观察……")]),a._v(" "),t("h2",{attrs:{id:"permgen-vs-metaspace-运行时比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permgen-vs-metaspace-运行时比较"}},[a._v("#")]),a._v(" PermGen vs. Metaspace 运行时比较")]),a._v(" "),t("p",[a._v("为了更好地理解Metaspace内存空间的运行时行为，")]),a._v(" "),t("p",[a._v("将进行以下几种场景的测试:")]),a._v(" "),t("ul",[t("li",[a._v("使用JDK1.7运行Java程序，监控并耗尽默认设定的85MB大小的PermGen内存空间。")]),a._v(" "),t("li",[a._v("使用JDK1.8运行Java程序，监控新Metaspace内存空间的动态增长和垃圾回收过程。")]),a._v(" "),t("li",[a._v("使用JDK1.8运行Java程序，模拟耗尽通过“MaxMetaspaceSize”参数设定的128MB大小的Metaspace内存空间。")])]),a._v(" "),t("p",[a._v("首先建立了一个模拟PermGen OOM的代码")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassA")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// do nothing")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面是一个简单的ClassA，把他编译成class字节码放到D: /classes下面，测试代码中用URLClassLoader来加载此类型上面类编译成class")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 模拟PermGen OOM\n * @author benhail\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OOMTest")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//准备url")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:/classes"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toURI")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toURL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" urls "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取有关类型加载的JMX接口")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoadingMXBean")]),a._v(" loadingBean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ManagementFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoadingMXBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用于缓存类加载器")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" classLoaders "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//加载类型并缓存类加载器实例")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" classLoader "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URLClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("urls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                classLoaders"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("classLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                classLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ClassA"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//显示数量信息(共加载过的类型数目，当前还有效的类型数目，已经被卸载的类型数目)")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"total: "')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" loadingBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTotalLoadedClassCount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"active: "')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" loadingBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLoadedClassCount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"unloaded: "')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" loadingBean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getUnloadedClassCount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("虚拟机器参数设置如下: -verbose -verbose:gc")]),a._v(" "),t("p",[a._v("设置-verbose参数是为了获取类型加载和卸载的信息")]),a._v(" "),t("p",[a._v("设置-verbose:gc是为了获取垃圾收集的相关信息")]),a._v(" "),t("h3",{attrs:{id:"jdk-1-7-64-bit-permgen-耗尽测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-7-64-bit-permgen-耗尽测试"}},[a._v("#")]),a._v(" JDK 1.7 @64-bit – PermGen 耗尽测试")]),a._v(" "),t("p",[a._v("Java1.7的PermGen默认空间为85 MB(或者可以通过-XX:MaxPermSize=XXXm指定)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/java8-jvm-2.jpg",alt:""}})]),a._v(" "),t("p",[a._v("可以从上面的JVisualVM的截图看出: 当加载超过6万个类之后，PermGen被耗尽。我们也能通过程序和GC的输出观察耗尽的过程。")]),a._v(" "),t("p",[a._v("程序输出(摘取了部分)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Loaded ClassA from file:/D:/classes/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ntotal: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64887")]),a._v("\nactive: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("64887")]),a._v("\nunloaded: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("GC 245041K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("213978K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("536768K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0597188")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Full GC 213978K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("211425K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("644992K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.6456638")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("GC 211425K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("211425K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("656448K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0086696")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Full GC 211425K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("211411K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("731008K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.6924754")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("GC 211411K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("211411K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("726528K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0088992")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\njava.lang.OutOfMemoryError: PermGen space\n")])])]),t("h3",{attrs:{id:"jdk-1-8-64-bit-metaspace大小动态调整测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-8-64-bit-metaspace大小动态调整测试"}},[a._v("#")]),a._v(" JDK 1.8 @64-bit – Metaspace大小动态调整测试")]),a._v(" "),t("p",[a._v("Java的Metaspace空间: 不受限制 (默认)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/java8-jvm-3.png",alt:""}})]),a._v(" "),t("p",[a._v("从上面的截图可以看到，JVM Metaspace进行了动态扩展，本地内存的使用由20MB增长到646MB，以满足程序中不断增长的类数据内存占用需求。我们也能观察到JVM的垃圾回收事件—试图销毁僵死的类或类加载器对象。但是，由于我们程序的泄漏，JVM别无选择只能动态扩展Metaspace内存空间。程序加载超过10万个类，而没有出现OOM事件。")]),a._v(" "),t("h3",{attrs:{id:"jdk-1-8-64-bit-metaspace-受限测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-8-64-bit-metaspace-受限测试"}},[a._v("#")]),a._v(" JDK 1.8 @64-bit – Metaspace 受限测试")]),a._v(" "),t("p",[a._v("Java的Metaspace空间: 128MB(-XX:MaxMetaspaceSize=128m)")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.pdai.tech/images/java/java8-jvm-4.png",alt:""}})]),a._v(" "),t("p",[a._v("可以从上面的JVisualVM的截图看出: 当加载超过2万个类之后，Metaspace被耗尽；与JDK1.7运行时非常相似。我们也能通过程序和GC的输出观察耗尽的过程。另一个有趣的现象是，保留的原生内存占用量是设定的最大大小两倍之多。这可能表明，如果可能的话，可微调元空间容量大小策略，来避免本地内存的浪费。")]),a._v(" "),t("p",[a._v("从Java程序的输出中看到如下异常。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Loaded ClassA from file:/D:/classes/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ntotal: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("21393")]),a._v("\nactive: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("21393")]),a._v("\nunloaded: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("GC "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Metadata GC Threshold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 64306K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("57010K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("111616K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0145502")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Full GC "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Metadata GC Threshold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 57010K-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("56810K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("122368K"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.1068084")]),a._v(" secs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\njava.lang.OutOfMemoryError: Metaspace\n")])])]),t("p",[a._v("在设置了MaxMetaspaceSize的情况下，该空间的内存仍然会耗尽，进而引发“java.lang.OutOfMemoryError: Metadata space”错误。因为类加载器的泄漏仍然存在，而通常Java又不希望无限制地消耗本机内存，因此设置一个类似于MaxPermSize的限制看起来也是合理的。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("之前不管是不是需要，JVM都会吃掉那块空间……如果设置得太小，JVM会死掉；如果设置得太大，这块内存就被JVM浪费了。理论上说，现在你完全可以不关注这个，因为JVM会在运行时自动调校为“合适的大小”；")])]),a._v(" "),t("li",[t("p",[a._v("提高Full GC的性能，在Full GC期间，Metadata到Metadata pointers之间不需要扫描了，别小看这几纳秒时间；")])]),a._v(" "),t("li",[t("p",[a._v("隐患就是如果程序存在内存泄露，像OOMTest那样，不停的扩展metaspace的空间，会导致机器的内存不足，所以还是要有必要的调试和监控。")])])]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[a._v("https://wizardforcel.gitbooks.io/java8-new-features/content/9.html")])])}),[],!1,null,null,null);t.default=e.exports}}]);