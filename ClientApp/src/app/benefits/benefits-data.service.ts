import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BenefitsCost } from './benefits';

@Injectable({
  providedIn: 'root'
})
export class BenefitsDataService {
  private benefitsCost: BenefitsCost = { finalCost: 0, originalCost: 0 };

  private _benefitsCost$: BehaviorSubject<BenefitsCost> = new BehaviorSubject(this.benefitsCost);

  constructor() {
    this.benefitsCost$ = this._benefitsCost$.asObservable();
  }

  benefitsCost$: Observable<BenefitsCost>;

  /*
  * Updates the benefits cost state with changes
  */
  updateBenefits(benefitsCost: BenefitsCost): void {
    this._benefitsCost$.next(benefitsCost);
  }
}
