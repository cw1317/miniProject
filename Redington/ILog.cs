using Redington.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Redington
{
    public interface ILog
    {
        void RecordCalculation(Calculation calculation);
    }
}
