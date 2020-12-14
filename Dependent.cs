using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge
{
    public class Dependent : Person
    {
        public Person Person { get; set; }
        public int BenefitCost => 500;
        public int FinalBenefitCost { get; set; }
    }
}
