const reqAllData = (req, res, next) => {
    console.log("Working");
    const reqObj = {
        method: req.method,
        url: req.url,
        params: req.params,
        originalUrl: req.originalUrl,
        query: req.query,
        ip: req.ip,
        headers: req.headers,
        path: req.path,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
        baseurl: req.baseUrl,
        cookies: req.cookie,
        subdomains: req.subdomains,
        fresh: req.fresh,
        stale: req.stale,
        userAgent: req.get("User-Agent"),
    };
    console.log("____________Request Details______________");
    console.log(reqObj);


   res.set("X-Custom-Header", "Learning Express");
res.cookie("Cookies-set", "Cookies value");
    res.append("X-Appended-Header", "value123");
  res.locals.message = "Hello from res.locals";

  res.on("finish",()=>{
    console.log("_____________Resposnse Details_________");
    console.log("Status code",res.statusCode);
    console.log("Headers sent",res.getHeaders());
    console.log("Locals",res.locals);
    console.log("custome header",res.get("Custome-header"));
  });
  next();

}
module.exports =reqAllData