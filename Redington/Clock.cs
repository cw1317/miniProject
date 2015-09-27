using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Redington
{
    public class Clock: IClock
    {
        public DateTime Now()
        {
            return DateTime.Now;
        }
    }
}