using System.Collections.Generic;

namespace pcty_challenge.API.Discounts
{
    public interface ICompanyCostCalculator
    {
        public double Calculate(List<Employee> employees);
    }
}