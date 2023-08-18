console.log('*** Method Generator Practice ***');

/**
메서드 데코레이터는 메서드 선언 직전에 선언됩니다. 
데코레이터는 메서드의 프로퍼티 설명자(Property Descriptor) 에 적용되며 
메서드 정의를 관찰, 수정 또는 대체하는 데 사용할 수 있습니다. 
메서드 데코레이터는 선언 파일, 오버로드 또는 기타 주변 컨텍스트(예: 선언 클래스)
에서 사용할 수 없습니다.

메서드 데코레이터가 값을 반환하면, 메서드의 프로퍼티 설명자 로 사용됩니다.
스크립트 대상이 ‘ES5’보다 낮은 경우 반환 값은 무시됩니다.
 */

// 메서드 데코레이터의 표현식은 런타임에 다음 세 개의 인수와 함께 함수로 호출됩니다:
function enumerable(value: boolean) {
  return function (
    target: any, // 정적 멤버에 대한 클래스의 생성자 함수 또는 인스턴스 멤버에 대한 클래스의 프로토타입
    propertyKey: string, // 멤버의 이름
    descriptor: PropertyDescriptor, // 멤버의 프로퍼티 설명자
  ) {
    console.log('prev', descriptor.enumerable);
    descriptor.enumerable = value;
    console.log('next', descriptor.enumerable);
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  // 메서드 데코레이터는 메서드의 프로퍼티 설명자(Property Descriptor) 에 적용되며
  // 메서드 정의를 관찰, 수정 또는 대체하는 데 사용할 수 있습니다.
  @enumerable(false) // 메서드 실행 직전에 선언
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
const helloWorld = new Greeter('World');
console.log(helloWorld.greet());

export class MethodGenerator {}
