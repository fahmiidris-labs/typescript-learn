describe('Array', function () {
  it('should same with javascript', function () {
    const names: Array<string> = ['Fahmi', 'Idris'];
    const values: Array<number> = [1, 2, 3];
    const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];

    console.info(names);
    console.info(values);
    console.info(hobbies);
  });

  it('should support tuple', function () {
    const person: readonly [string, string, number] = ['Fahmi', 'Idris', 21];

    console.info(person);
  });
});
