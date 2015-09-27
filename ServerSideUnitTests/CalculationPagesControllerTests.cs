using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Redington.Controllers;
using System.Web.Mvc;

namespace ServerSideUnitTests
{
    [TestClass]
    public class CalculationPagesControllerTests
    {
        [TestMethod]
        public void MainCalculationPage_ReturnsView()
        {
            var controller = new CalculationPagesController();
            var result = controller.MainCalculationPage() as ViewResult;
            Assert.AreEqual("MainCalculationPage", result.ViewName);
        }
    }
}
