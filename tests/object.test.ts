describe('Object', function () {
  it('should support in typescript', function () {
    const person: { id: number; name: string } = {
      id: 1,
      name: 'Fahmi Idris',
    };

    console.info(person);
  });
});
