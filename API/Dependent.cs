using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge
{
    //<summary>Class Dependent models an employee with dependents.</summary>
    public class Dependent : IPerson
    {
        public int Id { get; set; }
        public double BenefitCost => 500;
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
