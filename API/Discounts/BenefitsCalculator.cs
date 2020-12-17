using pcty_challenge.Discounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.API.Discounts
{
    //<summary>The BenefitsCalculator class contains the method for calculating the cost of benefits for an employee</summary>
    public class BenefitsCalculator : IBenefitsCalculator
    {
        public double Calculate(Employee employee)
        {
            double FinalCost = 0;

            NameDiscount discount = new NameDiscount(employee);

            FinalCost += discount.CalculateDiscountAmount(employee.BenefitCost);

            foreach (Dependent dependent in employee.Dependents)
            {
                NameDiscount dependentDiscount = new NameDiscount(dependent);
                FinalCost += dependentDiscount.CalculateDiscountAmount(dependent.BenefitCost);
            }
            
            return Math.Round(FinalCost, 2);
        }
    }
}
