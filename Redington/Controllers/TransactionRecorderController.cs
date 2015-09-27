using Redington.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Redington.Controllers
{
    public class TransactionRecorderController : Controller
    {
        private readonly ILog logger;

        public TransactionRecorderController(ILog logger)
        {
            if (logger == null)
            {
                throw new ArgumentNullException("logger");
            }

            this.logger = logger;
        }

        //
        // POST: /TransactionRecorder/RecordCalculation
        [HttpPost]
        public ActionResult RecordCalculation(Calculation calculation)
        {
            logger.RecordCalculation(calculation);
            return new HttpStatusCodeResult(200);
        }
    }
}
