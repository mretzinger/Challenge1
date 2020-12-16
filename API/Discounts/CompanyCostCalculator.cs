using pcty_challenge.API.Discounts;
using System.Collections.Generic;

namespace pcty_challenge
{
    public class CompanyCostCalculator : ICompanyCostCalculator
    {
        private IBenefitsCalculator _calc;

        public CompanyCostCalculator(IBenefitsCalculator calc)
        {
            _calc = calc;
        }

        //<summary>Calculates final cost of employee benefits</summary>
        public double Calculate(List<Employee> employees)
        {
            double FinalCost = 0;
            foreach (Employee employee in employees)
            {
                FinalCost += _calc.Calculate(employee);
            }

            return FinalCost;
        }
    }
}
