using System.Collections.Generic;

namespace pcty_challenge.API.Discounts
{
    //<summary>ICompanyCostCalculator models the total cost calculator.</summary>
    public interface ICompanyCostCalculator
    {
        public double Calculate(List<Employee> employees);
    }
}