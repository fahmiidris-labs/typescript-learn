describe('If Statement', function () {
  it('should support in typescript', function () {
    const examValue: number = 85;

    if (examValue > 80) {
      console.info('Good');
    } else if (examValue > 60) {
      console.info('Not Bad');
    } else {
      console.info('Try Again');
    }
  });

  it('should support ternary operator', function () {
    const value: number = 80;
    const say: string = value >= 75 ? 'Congratulation' : 'Try Again';

    console.info(say);
  });

  it('should support switch', function () {
    function sayHello(name: string): string {
      switch (name) {
        case 'Fahmi':
          return 'Hello Fahmi';
        case 'Idris':
          return 'Hello Idris';

        default:
          return 'Hello';
      }
    }

    console.info(sayHello('Fahmi'));
    console.info(sayHello('Idris'));
    console.info(sayHello('Gatau'));
  });
});
