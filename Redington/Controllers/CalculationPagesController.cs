using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Redington.Controllers
{
    public class CalculationPagesController : Controller
    {
        public ActionResult MainCalculationPage()
        {
            return View("MainCalculationPage");
        }
    }
}
