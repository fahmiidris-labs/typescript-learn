describe('Union', function () {
  it('should support in typescript', function () {
    let sample: string | number | boolean = 'Fahmi Idris';

    sample = 21;
    sample = true;

    console.info(sample);
  });

  it('should support in typof', function () {
    function process(value: string | number | boolean) {
      if (typeof value === 'string') {
        return value.toUpperCase();
      }

      if (typeof value === 'number') {
        return value + 2;
      }

      return !value;
    }

    expect(process('Fahmi Idris')).toBe('FAHMI IDRIS');
    expect(process(10)).toBe(12);
    expect(process(true)).toBe(false);
  });
});
