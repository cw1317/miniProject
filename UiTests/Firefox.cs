using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Firefox;

namespace UiTests
{
    [TestClass]
    public class Firefox : BaseTests
    {
        public Firefox()
        {
            base.WebDriver = new FirefoxDriver();
        }
    }
}
