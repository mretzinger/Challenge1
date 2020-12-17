using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.Discounts
{
    //<summary>Describes a discount</summary>
    interface IDiscount
    {
        public bool Applies();
        public double CalculateDiscountAmount(double InitialBenefitPrice);
    }
}
