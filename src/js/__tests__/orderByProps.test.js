import orderByProps from '../orderByProps';

test('test print', () => {
  const result = orderByProps({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  }, ['name', 'level']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
