using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Chrome;

namespace UiTests
{
    [TestClass]
    public abstract class BaseTests
    {
        private Uri baseUrl = new Uri("http://localhost:56982/");
        protected IWebDriver WebDriver { get; set; }
        
        [TestMethod]
        public void GotoMainPage_TitleShouldBe_Probability_Calculator()
        {
             WebDriver.Navigate().GoToUrl(baseUrl);
             Assert.AreEqual("Probability Calculator", WebDriver.Title);
             WebDriver.Close();
        }

        [TestMethod]
        public void GotoMainPage_ClickOnAbout_Title_ShouldBe_About()
        {
            WebDriver.Navigate().GoToUrl(baseUrl);
            var about = WebDriver.FindElement(By.LinkText("About"));
            about.Click();
            Assert.AreEqual("About", WebDriver.Title);
            WebDriver.Close();
        }

        [TestMethod]
        public void GotoMainPage_EnterInvalidProbability_ErrorMessageDisplays()
        {
            WebDriver.Navigate().GoToUrl(baseUrl);
            var textBox = WebDriver.FindElement(By.Id("firstProbability"));
            textBox.SendKeys("-1.0\t");
            var errorMessage = WebDriver.FindElement(By.Id("validationError"));
            Assert.AreEqual(true, errorMessage.Displayed);
            WebDriver.Close();
        }
        
        [TestMethod]
        public void GotoMainPage_EnterValidProbabilities_ClickButton_Should_goto_next_page()
        {
            WebDriver.Navigate().GoToUrl(baseUrl);
            var textBox1 = WebDriver.FindElement(By.Id("firstProbability"));
            textBox1.SendKeys("0.3\t");
            var textBox2 = WebDriver.FindElement(By.Id("secondProbability"));
            textBox2.SendKeys("0.4\t");
            var errorMessage = WebDriver.FindElement(By.Id("validationError"));
            Assert.AreEqual(false, errorMessage.Displayed);
            var button = WebDriver.FindElement(By.Id("calulateBothProbability"));
            button.Click();
            Assert.AreEqual(true,WebDriver.FindElement(By.Id("answerScreen")).Displayed);
            Assert.AreEqual("0.12", WebDriver.FindElement(By.Id("answerCombinedProbability")).Text);
            Assert.AreEqual("0.3", WebDriver.FindElement(By.Id("answerProbabilityOne")).Text);
            Assert.AreEqual("0.4", WebDriver.FindElement(By.Id("answerProbabilityTwo")).Text);
            WebDriver.Close();
        }
    }
}
