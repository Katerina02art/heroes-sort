import sortHeroes from '../js/sortHeroes.js';

describe('sortHeroes function', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  test('should sort heroes by health in descending order', () => {
    const sorted = sortHeroes(heroes);
    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should not mutate original array', () => {
    const originalCopy = [...heroes];
    sortHeroes(heroes);
    expect(heroes).toEqual(originalCopy);
    expect(heroes).not.toEqual(sortHeroes(heroes));
  });

  test('should handle empty array', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('should handle array with one hero', () => {
    const oneHero = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(oneHero)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should handle heroes with same health', () => {
    const sameHealth = [
      { name: 'воин', health: 50 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
    ];
    const sorted = sortHeroes(sameHealth);
    expect(sorted).toHaveLength(3);
    expect(sorted).toEqual(expect.arrayContaining(sameHealth));
  });

  test('should handle negative health values', () => {
    const withNegative = [
      { name: 'маг', health: 100 },
      { name: 'мертвый', health: -10 },
      { name: 'лучник', health: 80 },
    ];
    expect(sortHeroes(withNegative)).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мертвый', health: -10 },
    ]);
  });
});
