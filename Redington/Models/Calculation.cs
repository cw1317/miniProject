using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Redington.Models
{
    public class Calculation
    {
        public string Operation { get; set; }
        public double Probability1 { get; set; }
        public double Probability2 { get; set; }
        public double Answer { get; set; }
    }
}