using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pcty_challenge.Discounts
{
    //Describes a discount
    interface IDiscount
    {
        public bool Applies();
        public double CalculateDiscountAmount(double InitialBenefitPrice);
    }
}
