using pcty_challenge.API.Discounts;
using System.Collections.Generic;

namespace pcty_challenge
{
    //<summary>
    //The CompanyCostCalculator class contains the method for calculating 
    //the cost of employee benefits for all employees at the company.
    //</summary>
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
