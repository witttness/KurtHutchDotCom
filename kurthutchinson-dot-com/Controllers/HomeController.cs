using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace KurtHutchinson.Web.Controllers
{
    [AllowAnonymous]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        //public ActionResult Contact()
        //{
        //    return View("Index");
        //}

        protected override void HandleUnknownAction(string actionName)
        {
            //base.HandleUnknownAction(actionName);

            //try
            //{
            //    View(actionName).ExecuteResult(ControllerContext);
            //}
            //catch(InvalidOperationException ioex)
            //{
                View("Index").ExecuteResult(ControllerContext);
            //}
        }
    }
}
