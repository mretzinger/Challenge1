using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API
{
    public class BenefitsCost
    {
        public BenefitsCost(double original, double final)
        {
            OriginalCost = original;
            FinalCost = final;
        }

        public double OriginalCost { get; set; }
        public double FinalCost { get; set; }
    }
}
