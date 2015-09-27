using Redington.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Redington.DependencyInjection
{
    public class ControllerFactory : DefaultControllerFactory
    {
        protected override IController GetControllerInstance(System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            //For a larger project we could use a dependency injection framework like Castle Windsor.
            //Since we only have one controller with dependencies it is easier to do it by hand
            if(controllerType==typeof(TransactionRecorderController))
            {
                string logFileName = ConfigurationManager.AppSettings["logPath"];

                //default to home directory
                if (logFileName == null)
                {
                    logFileName = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "RedingtonLogs.csv");
                }

                FileStream logStream = new FileStream(logFileName,FileMode.Append,FileAccess.Write);
                return new TransactionRecorderController(new Logger(logStream,new Clock()));
            }

            return base.GetControllerInstance(requestContext,controllerType);
        }
    }
}