using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Redington.Models;
using Redington;
using System.IO;
using System.Text;
using Moq;

namespace ServerSideUnitTests
{
    [TestClass]
    public class LoggerTests
    {
        [TestMethod]
        public void RecordCalculation_ProvideCalcuation_Should_populate_stream_with_csv()
        {
            var calculation = new Calculation { Answer = 2.1, Operation = "theOperation", Probability1 = 0.3, Probability2 = 0.6 };
            var memoryStream = new MemoryStream();
            var mockClock = new Mock<IClock>();

            mockClock.SetReturnsDefault(new DateTime(2000, 1, 10, 10, 12, 30));

            var logger = new Logger(memoryStream, mockClock.Object);
            logger.RecordCalculation(calculation);

            byte[] buffer = memoryStream.ToArray();
            var result = Encoding.UTF8.GetString(buffer, 0, buffer.Length);
            Assert.AreEqual("10/01/2000 10:12:30,0.3,0.6,2.1,theOperation\r\n", result);
        }
    }
}
