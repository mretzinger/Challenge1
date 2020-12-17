using pcty_challenge.API.Discounts;
using System.Collections.Generic;

namespace pcty_challenge
{
    //<summary>Class Employee models an employee with dependents.</summary>
    public class Employee : IPerson
    {
        public int Id { get; set; }
        public List<Dependent> Dependents { get; set; } = new List<Dependent>();
        public double BenefitCost => 1000;
        public int PaycheckAmount => 2000;
        public int PaycheckNumber => 26;
        public int AnnualSalary => PaycheckAmount * PaycheckNumber;
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
