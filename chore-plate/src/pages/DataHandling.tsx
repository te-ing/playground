import { plainToInstance } from 'class-transformer';

function DataHandling() {
  class Temp {
    private id: string;
    private readonly password: string;
    constructor(id: string, password: string) {
      this.id = id;
      this.password = password;
    }
    foo = 'hello';

    bar(): string {
      return 'world!';
    }
  }
  const temp = new Temp('account', 'secret');
  temp.foo = 'bye';

  const marketData = {
    health: {
      label: '건강검진 데이터',
      value: 'medicalCheckup',
      weight: 0.22,
      collectWeight: { '2w': 0.3, '1M': 0.3, '3M': 0.5, '6M': 1 },
      category: 'health',
    },
  };

  class CollectData {
    label: string;
    value: string;
    weight: number;
    collectWeight: { [key: string]: number };
    category: 'health' | 'finance';
    constructor(
      label: string,
      value: string,
      weight: number,
      collectWeight: { [key: string]: number },
      category: 'health' | 'finance',
    ) {
      this.label = label;
      this.value = value;
      this.weight = weight;
      this.collectWeight = collectWeight;
      this.category = category;
    }
    calculateWeight(term: string) {
      if (this.collectWeight[term]) {
        return this.weight * this.collectWeight[term];
      } else {
        throw Error('해당 기간의 가중치가 존재하지 않습니다.');
      }
    }
  }

  const collectClass = new CollectData(
    marketData.health.label,
    marketData.health.value,
    marketData.health.weight,
    marketData.health.collectWeight,
    marketData.health.category as 'health',
  );

  const collectInstance = plainToInstance(CollectData, marketData.health);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h1>DataHandling with class-transformer</h1>
      <h2>{temp.foo + ' ' + temp.bar()}</h2>
      <h2>{collectClass.label + '6M 가중치: ' + collectClass.calculateWeight('6M')}</h2>
      <h2>{collectInstance.label + '2w 가중치: ' + collectInstance.calculateWeight('2w')}</h2>
    </div>
  );
}

export default DataHandling;
