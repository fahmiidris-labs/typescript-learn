describe('Function', function () {
  it('should support in typescript', function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Fahmi Idris')).toBe('Hello Fahmi Idris');

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello('Fahmi Idris');
  });

  it('should support default value', function () {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Fahmi Idris')).toBe('Hello Fahmi Idris');
    expect(sayHello()).toBe('Hello Guest');
  });

  it('should support rest parameter', function () {
    function sum(...values: Array<number>): number {
      let total: number = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('should support function overloading', function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }

      if (typeof value === 'number') {
        return value * 10;
      }
    }

    expect(callMe('Fahmi Idris')).toBe('FAHMI IDRIS');
    expect(callMe(10)).toBe(100);
  });

  it('should support function as parameter', function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello('Fahmi', toUpper)).toBe('Hello FAHMI');
    expect(
      sayHello('Fahmi', function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe('Hello FAHMI');
    expect(
      sayHello('Fahmi', (name: string): string => name.toUpperCase())
    ).toBe('Hello FAHMI');
  });
});
