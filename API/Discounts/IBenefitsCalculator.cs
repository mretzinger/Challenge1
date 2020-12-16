using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API.Discounts
{
    public interface IBenefitsCalculator
    {
        public double Calculate(Employee employee);
    }
}
