using Redington.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Redington
{
    public class Logger:ILog
    {
        private readonly Stream streamToWriteTo;
        private readonly IClock clock;

        public Logger(Stream streamToWriteTo,IClock clock)
        {
            if (streamToWriteTo == null)
            {
                throw new ArgumentNullException("streamToWriteTo");
            }

            if (clock == null)
            {
                throw new ArgumentNullException("clock");
            }

            this.streamToWriteTo = streamToWriteTo;
            this.clock = clock;
        }

        public void RecordCalculation(Calculation calculation)
        {
            using (var sw = new StreamWriter(streamToWriteTo))
            {
                sw.WriteLine(string.Format("{0},{1},{2},{3},{4}",clock.Now(),calculation.Probability1,calculation.Probability2,calculation.Answer,calculation.Operation));
                sw.Close();
            }
        }
    }
}