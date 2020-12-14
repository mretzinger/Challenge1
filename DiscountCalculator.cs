using pcty_challenge.Discounts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge
{
    public class DiscountCalculator
    {

        public double Calculate(List<Employee> employees)
        {
            foreach(Employee employee in employees)
            {
                NameDiscount discount = new NameDiscount(employee.Person);

                foreach (Dependent dependent in employee.Dependents)
                {
                    NameDiscount dependentDiscount = new NameDiscount(dependent.Person);
                }
            }

            return 1.0;
        }

        //<summary>Applies Discount and calculates final cost of employee benefits</summary>
        //private int ApplyDiscountCost(Employee employee)
        //{

        //    //if dependent has discount calulate and then add discount if employee has it

        //    //employee.Dependents.Count > 0 ? employee.Dependents.Count() * employee.DependentBenefitCost : 1;
        //    if (employee.Person.HasDiscount == true)
        //    {

        //    }
        //    return employee.BenefitCost * dependentCost * (int)0.90;
        //}

        //<summary>Calculates final cost of employee benefits</summary>
        private double FinalCost(List<Employee> employees)
        {
            double FinalCost = 0;

            foreach (Employee employee in employees)
            {
                double DependentCost = 0;
                foreach (Dependent dependent in employee.Dependents)
                {
                    DependentCost += dependent.FinalBenefitCost;
                }

                FinalCost+= employee.FinalBenefitCost + DependentCost;
            }

            return FinalCost;
        }
    }
}
