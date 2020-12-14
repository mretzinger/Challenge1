using System;
using System.Collections.Generic;

namespace pcty_challenge
{
    //<summary>Class <c>Employee</c> models an employee with dependents.</summary>
    public class Employee : Person
    {
        public Person Person { get; set; }
        public List<Person> Dependents { get; set; }
        public int BenefitCost => 1000;
        public int PaycheckAmount => 2000;
        public int PaycheckNumber => 26;
        public int AnnualSalary => PaycheckAmount * PaycheckNumber;
        public int FinalBenefitCost { get; set; }
    }
}
