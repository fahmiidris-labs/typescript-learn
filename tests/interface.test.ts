import type { Seller } from '../src/seller';
import type { Person } from '../src/person';
import type { Employee, Manager } from '../src/employee';

describe('Interface', function () {
  it('should suppport in typescript', function () {
    const seller: Seller = {
      id: 1,
      name: 'Fahmi Idris',
      npwp: 1234567890123456,
    };

    console.info(seller);
  });

  it('should support function interface', function () {
    interface AddFunction {
      (a: number, b: number): number;
    }

    const add: AddFunction = (a: number, b: number): number => {
      return a + b;
    };

    console.info(add(1, 2));
  });

  it('should support indexable interface', function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Fahmi', 'Idris'];
    console.info(names);
  });

  it('should support indexable interface for non number index', function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: 'Fahmi Idris',
      address: 'Bogor Regency, West Java, Indonesia',
    };

    console.info(dictionary);
  });

  it('should support extends interface', function () {
    const employee: Employee = {
      id: 1,
      name: 'Fahmi Idris',
      division: 'IT',
    };

    console.info(employee);

    const manager: Manager = {
      id: 2,
      name: 'Idris',
      division: 'IT',
      numberOfEmpliyees: 20,
    };

    console.info(manager);
  });

  it('should support function in interface', function () {
    const person: Person = {
      name: 'Fahmi Idris',
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello('Idris'));
  });

  it('should support intersection types', function () {
    interface HasId {
      id: number;
    }

    interface HasName {
      name: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 1,
      name: 'Fahmi Idris',
    };

    console.info(domain);
  });

  it('should support type assertions', function () {
    const person: any = {
      name: 'Fahmi Idris',
      age: 21,
    };

    const fahmiidris: Person = person as Person;

    console.info(fahmiidris);
  });
});
