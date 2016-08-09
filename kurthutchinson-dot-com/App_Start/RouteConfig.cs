using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace KurtHutchinson.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.LowercaseUrls = true;

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Angular HTML5 Mode",
                url: "{action}/{*any}",
                defaults: new { area = "", controller = "Home", action = "index", id = UrlParameter.Optional },
                constraints: new { action = "home|about|blog|portfolio|contact" },
                namespaces: new[] { "KurtHutchinson.Web.Controllers" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
