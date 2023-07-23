describe('Any', function () {
  it('should support in typescript', function () {
    const person: any = {
      id: 1,
      name: 'Fahmi Idris',
      age: 21,
    };

    person.address = 'Bogor Regency, West Java, Indonesia.';

    console.info(person);
  });
});
