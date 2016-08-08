using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace KurtHutchinson.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //    "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //    "~/Scripts/jquery.unobtrusive*",
            //    "~/Scripts/jquery.validate*"));

            //bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
            //    "~/Scripts/knockout-{version}.js",
            //    "~/Scripts/knockout.validation.js"));

            //bundles.Add(new ScriptBundle("~/bundles/app").Include(
            //    "~/Scripts/sammy-{version}.js",
            //    "~/Scripts/app/common.js",
            //    "~/Scripts/app/app.datamodel.js",
            //    "~/Scripts/app/app.viewmodel.js",
            //    "~/Scripts/app/home.viewmodel.js",
            //    "~/Scripts/app/_run.js"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //    "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //    "~/Scripts/bootstrap.js",
            //    "~/Scripts/respond.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //     "~/Content/bootstrap.css",
            //     "~/Content/Site.css"));


#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif

            bundles.Add(new StyleBundle("~/bundles/kurt-styles").Include(
                "~/Content/styles.css"
                , "~/Content/font-awesome.css"
                , "~/Content/animate.css"
                //,"~/Content/leaflet/leaflet.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/kurt-scripts")
                .IncludeDirectory("~/Scripts/polyfills", "*.js")
                .Include("~/Scripts/lodash.js",
                         "~/Scripts/angular.js",
                         "~/Scripts/angular-ui/ui-bootstrap.js",
                         "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                         "~/Scripts/angular-ui/ui-utils.js",
                         "~/Scripts/angular-ui/scrollpoint.js",
                         "~/Scripts/angular-ui/validate.js",
                         "~/Scripts/angular-ui-router.js",
                         "~/Scripts/angular-sanitize.js",
                         "~/Scripts/angular-animate.js",
                         "~/Scripts/angular-cookies.js",
                         "~/Scripts/angular-touch.js",
                         "~/Scripts/angular-resource.js",
                         "~/Scripts/angular-aria.js")
                );

            bundles.Add(new ScriptBundle("~/bundles/kurt-app")
                .Include("~/App/app.js")
                .IncludeDirectory("~/App/site", "*.js"));
        }
    }
}
