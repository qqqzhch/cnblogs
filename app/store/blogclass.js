/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 13-5-5
 * Time: 上午9:30
 * To change this template use File | Settings | File Templates.
 */
Ext.define('cnblogs.store.blogclass', {
    extend: 'Ext.data.Store',
    model:'cnblogs.model.blogclass',
    config:{
        storeId:'blogclass',
        data : [
            {Name: "精华",
                id: "picked",
                url:"http://feed.cnblogs.com/blog/picked/rss",
                far:""
            },
            {Name: "候选",
                id: "candidate",
                url:"http://feed.cnblogs.com/blog/candidate/rss",
                far:""
            },
            {Name: ".NET技术新手区",
                id: "beginner",
                url:"http://feed.cnblogs.com/blog/sitecateogry/beginner/rss",
                far:".net技术"
            },
            {Name: "ASP.NET",
                id: "aspnet",
                url:"http://feed.cnblogs.com/blog/sitecateogry/aspnet/rss",
                far:".net技术"
            },
            {Name: "c#",
                id: "csharp",
                url:"http://feed.cnblogs.com/blog/sitecateogry/csharp/rss",
                far:".net技术"
            },
            {Name: "winform",
                id: "winform",
                url:"http://feed.cnblogs.com/blog/sitecateogry/winform/rss",
                far:".net技术"
            },
            {Name: "silverlight",
                id: "silverlight",
                url:"http://feed.cnblogs.com/blog/sitecateogry/silverlight/rss",
                far:".net技术"
            },
            {Name: "wcf",
                id: "wcf",
                url:"http://feed.cnblogs.com/blog/sitecateogry/wcf/rss",
                far:".net技术"
            },
            {Name: "clr",
                id: "clr",
                url:"http://feed.cnblogs.com/blog/sitecateogry/clr/rss",
                far:".net技术"
            },
            {Name: "wpf",
                id: "wpf",
                url:"http://feed.cnblogs.com/blog/sitecateogry/wpf/rss",
                far:".net技术"
            },
            {Name: "wf",
                id: "wf",
                url:"http://feed.cnblogs.com/blog/sitecateogry/wf/rss",
                far:".net技术"
            },
            {Name: "xna",
                id: "xna",
                url:"http://feed.cnblogs.com/blog/sitecateogry/xna/rss",
                far:".net技术"
            },
            {Name: "vs2010",
                id: "vs2010",
                url:"http://feed.cnblogs.com/blog/sitecateogry/vs2010/rss",
                far:".net技术"
            },
            {Name: "mvc",
                id: "mvc",
                url:"http://feed.cnblogs.com/blog/sitecateogry/mvc/rss",
                far:".net技术"
            },
            {Name: "control",
                id: "control",
                url:"http://feed.cnblogs.com/blog/sitecateogry/control/rss",
                far:".net技术"
            },
            {Name: "ef",
                id: "ef",
                url:"http://feed.cnblogs.com/blog/sitecateogry/ef/rss",
                far:".net技术"
            },
            {Name: "winrt_metro",
                id: "winrt_metro",
                url:"http://feed.cnblogs.com/blog/sitecateogry/winrt_metro/rss",
                far:".net技术"
            },
            {Name: "java",
                id: "java",
                url:"http://feed.cnblogs.com/blog/sitecateogry/java/rss",
                far:"编程语言"
            },
            {Name: "c++",
                id: "cpp",
                url:"http://feed.cnblogs.com/blog/sitecateogry/cpp/rss",
                far:"编程语言"
            },
            {Name: "php",
                id: "php",
                url:"http://feed.cnblogs.com/blog/sitecateogry/php/rss",
                far:"编程语言"
            },
            {Name: "delphi",
                id: "delphi",
                url:"http://feed.cnblogs.com/blog/sitecateogry/delphi/rss",
                far:"编程语言"
            },
            {Name: "ruby",
                id: "ruby",
                url:"http://feed.cnblogs.com/blog/sitecateogry/ruby/rss",
                far:"编程语言"
            },
            {Name: "c",
                id: "c",
                url:"http://feed.cnblogs.com/blog/sitecateogry/c/rss",
                far:"编程语言"
            },
            {Name: "erlang",
                id: "erlang",
                url:"http://feed.cnblogs.com/blog/sitecateogry/erlang/rss",
                far:"编程语言"
            },
            {Name: "verilog",
                id: "verilog",
                url:"http://feed.cnblogs.com/blog/sitecateogry/verilog/rss",
                far:"编程语言"
            },
            {Name: "design",
                id: "design",
                url:"http://feed.cnblogs.com/blog/sitecateogry/design/rss",
                far:"软件设计"
            },
            {Name: "面向对象",
                id: "108702",
                url:"http://feed.cnblogs.com/blog/sitecateogry/108702/rss",
                far:"软件设计"
            },
            {Name: "设计模式",
                id: "dp",
                url:"http://feed.cnblogs.com/blog/sitecateogry/dp/rss",
                far:"软件设计"
            },

            {Name: "web",
                id: "web",
                url:"http://feed.cnblogs.com/blog/sitecateogry/web/rss",
                far:"web前端"
            },
            {Name: "javascript",
                id: "javascript",
                url:"http://feed.cnblogs.com/blog/sitecateogry/javascript/rss",
                far:"web前端"
            },
            {Name: "jquery",
                id: "jquery",
                url:"http://feed.cnblogs.com/blog/sitecateogry/jquery/rss",
                far:"web前端"
            },
            {Name: "html5",
                id: "html5",
                url:"http://feed.cnblogs.com/blog/sitecateogry/html5/rss",
                far:"web前端"
            },
            {Name: "sap",
                id: "sap",
                url:"http://feed.cnblogs.com/blog/sitecateogry/sap/rss",
                far:"企业信息化"
            },
            {Name: "sharepoint",
                id: "sharepoint",
                url:"http://feed.cnblogs.com/blog/sitecateogry/sharepoint/rss",
                far:"企业信息化"
            },
            {Name: "gis",
                id: "gis",
                url:"http://feed.cnblogs.com/blog/sitecateogry/gis/rss",
                far:"企业信息化"
            },
            {Name: "OracleERP",
                id: "OracleERP",
                url:"http://feed.cnblogs.com/blog/sitecateogry/OracleERP/rss",
                far:"企业信息化"
            },
            {Name: "dynamics crm",
                id: "dynamics",
                url:"http://feed.cnblogs.com/blog/sitecateogry/dynamics/rss",
                far:"企业信息化"
            },
            {Name: "K2 BPM",
                id: "k2",
                url:"http://feed.cnblogs.com/blog/sitecateogry/k2/rss",
                far:"企业信息化"
            },
            {Name: "企业信息化其他",
                id: "3",
                url:"http://feed.cnblogs.com/blog/sitecateogry/3/rss",
                far:"企业信息化"
            },
            {Name: "android",
                id: "android",
                url:"http://feed.cnblogs.com/blog/sitecateogry/android/rss",
                far:"手机开发"
            },
            {Name: "ios",
                id: "ios",
                url:"http://feed.cnblogs.com/blog/sitecateogry/ios/rss",
                far:"手机开发"
            },
            {Name: "wp",
                id: "wp",
                url:"http://feed.cnblogs.com/blog/sitecateogry/wp/rss",
                far:"手机开发"
            },
            {Name: "敏捷开发",
                id: "agile",
                url:"http://feed.cnblogs.com/blog/sitecateogry/agile/rss",
                far:"软件工程"
            },
            {Name: "项目团队",
                id: "pm",
                url:"http://feed.cnblogs.com/blog/sitecateogry/pm/rss",
                far:"软件工程"
            },
            {Name: "软件工程其他",
                id: "Engineering",
                url:"http://feed.cnblogs.com/blog/sitecateogry/Engineering/rss",
                far:"软件工程"
            },
            {Name: "sqlserver",
                id: "sqlserver",
                url:"http://feed.cnblogs.com/blog/sitecateogry/sqlserver/rss",
                far:"数据库技术"
            },
            {Name: "oracle",
                id: "oracle",
                url:"http://feed.cnblogs.com/blog/sitecateogry/oracle/rss",
                far:"数据库技术"
            },
            {Name: "mysql",
                id: "mysql",
                url:"http://feed.cnblogs.com/blog/sitecateogry/mysql/rss",
                far:"数据库技术"
            },
            {Name: "nosql",
                id: "nosql",
                url:"http://feed.cnblogs.com/blog/sitecateogry/nosql/rss",
                far:"数据库技术"
            },
            {Name: "database",
                id: "database",
                url:"http://feed.cnblogs.com/blog/sitecateogry/database/rss",
                far:"数据库技术"
            },
            {Name: "win7",
                id: "win7",
                url:"http://feed.cnblogs.com/blog/sitecateogry/win7/rss",
                far:"操作系统"
            },
            {Name: "winserver",
                id: "winserver",
                url:"http://feed.cnblogs.com/blog/sitecateogry/winserver/rss",
                far:"操作系统"
            },
            {Name: "linux",
                id: "linux",
                url:"http://feed.cnblogs.com/blog/sitecateogry/linux/rss",
                far:"操作系统"
            },
            {Name: "非技术区",
                id: "life",
                url:"http://feed.cnblogs.com/blog/sitecateogry/life/rss",
                far:"其他分类"
            },
            {Name: "testing",
                id: "testing",
                url:"http://feed.cnblogs.com/blog/sitecateogry/testing/rss",
                far:"其他分类"
            },
            {Name: "software",
                id: "software",
                url:"http://feed.cnblogs.com/blog/sitecateogry/software/rss",
                far:"其他分类"
            },
            {Name: "计算机图像学",
                id: "cg",
                url:"http://feed.cnblogs.com/blog/sitecateogry/cg/rss",
                far:"其他分类"
            },
            {Name: "google 开发",
                id: "google",
                url:"http://feed.cnblogs.com/blog/sitecateogry/google/rss",
                far:"其他分类"
            },
            {Name: "程序人生",
                id: "codelife",
                url:"http://feed.cnblogs.com/blog/sitecateogry/codelife/rss",
                far:"其他分类"
            },
            {Name: "求职面试",
                id: "job",
                url:"http://feed.cnblogs.com/blog/sitecateogry/job/rss",
                far:"其他分类"
            },
            {Name: "读书区",
                id: "book",
                url:"http://feed.cnblogs.com/blog/sitecateogry/book/rss",
                far:"其他分类"
            },
            {Name: "转载区",
                id: "quoted",
                url:"http://feed.cnblogs.com/blog/sitecateogry/quoted/rss",
                far:"其他分类"
            },
            {Name: "翻译区",
                id: "translate",
                url:"http://feed.cnblogs.com/blog/sitecateogry/translate/rss",
                far:"其他分类"
            },
            {Name: "开源研究",
                id: "opensource",
                url:"http://feed.cnblogs.com/blog/sitecateogry/opensource/rss",
                far:"其他分类"
            },
            {Name: "flex",
                id: "flex",
                url:"http://feed.cnblogs.com/blog/sitecateogry/flex/rss",
                far:"其他分类"
            },
            {Name: "云计算",
                id: "cloud",
                url:"http://feed.cnblogs.com/blog/sitecateogry/cloud/rss",
                far:"其他分类"
            },
            {Name: "算法与数据结构",
                id: "algorithm",
                url:"http://feed.cnblogs.com/blog/sitecateogry/algorithm/rss",
                far:"其他分类"
            },
            {Name: "其他技术区",
                id: "misc",
                url:"http://feed.cnblogs.com/blog/sitecateogry/misc/rss",
                far:"其他分类"
            }






        ]

    }
});