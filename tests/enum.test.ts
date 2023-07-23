import { CustomerType, type Customer } from '../src/enum';

describe('Enum', function () {
  it('should support in typescript', function () {
    const customer: Customer = {
      id: 1,
      name: 'Fahmi Idris',
      type: CustomerType.PLATINUM,
    };

    console.info(customer);
  });
});
