using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAPIMVCCrud.Controllers
{
    public class HomeController : Controller
    {
        ValuesController db = new ValuesController();
        public ActionResult Index()
        {
            return View(db.Get());
        }
    }
}
