using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API.Discounts
{
    //<summary>IBenefitsCalculator models the cost calculator for an employee.</summary>
    public interface IBenefitsCalculator
    {
        public double Calculate(Employee employee);
    }
}
