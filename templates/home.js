// home.dust
(function(){dust.register("home",body_0);function body_0(chk,ctx){return chk.write("<html><head><title>Dustjs POC - Server and Client Side Rendering</title>").partial("css",ctx,null).partial("js",ctx,null).write("</head><body>").partial("header",ctx,null).partial("homeContent",ctx,null).partial("footer",ctx,null).write("</body></html>");}return body_0;})();