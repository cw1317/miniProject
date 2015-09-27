using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Redington.Controllers;
using Moq;
using Redington;
using Redington.Models;
using System.Web.Mvc;

namespace ServerSideUnitTests
{
    [TestClass]
    public class TransactionRecorderControllerTests
    {
        [TestMethod]
        public void RecordCalculation_PassInCalculation_ReturnsStatus200()
        {
            var mockLogger = new Mock<ILog>();
            var controller = new TransactionRecorderController(mockLogger.Object);
            var result = controller.RecordCalculation(new Calculation()) as HttpStatusCodeResult;
            Assert.AreEqual(200, result.StatusCode);
        }

        [TestMethod]
        public void RecordCalculation_PassInCalculation_Calls_LoggerRecordCalculation_with_calculation()
        {
            var mockLogger = new Mock<ILog>();
            var aCalulation = new Calculation();
            var controller = new TransactionRecorderController(mockLogger.Object);
            controller.RecordCalculation(aCalulation);
            mockLogger.Verify(x => x.RecordCalculation(aCalulation), Times.Once);
        }
    }
}
