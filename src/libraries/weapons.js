const weapons = {
  'club': {
    cost: '1sp',
    damage: [1, 4],
    damageType: 'bludgeoning',
    properties: ['light'],
    range: 'melee',
    weight: 2
  },
  'dagger': {
    cost: '2gp',
    damage: [1, 4],
    damageType: 'piercing',
    properties: ['finesse', 'light', 'thrown'],
    range: 'melee',
    thrownRange: [20, 60],
    weight: 1
  },
  'greatclub': {
    cost: '2sp',
    damage: [1, 8],
    damageType: 'bludgeoning',
    properties: ['two-handed'],
    range: 'melee',
    weight: 10
  },
  'handaxe': {
    cost: '5gp',
    damage: [1, 6],
    damageType: 'slashing',
    properties: ['light', 'thrown'],
    range: 'melee',
    thrownRange: [20, 60],
    weight: 2
  },
  'javelin': {
    cost: '5sp',
    damage: [1, 5],
    damageType: 'piercing',
    properties: ['thrown'],
    range: 'melee',
    thrownRange: [30, 120],
    weight: 2
  },
  'light hammer': {
    cost: '2gp',
    damage: [1, 4],
    damageType: 'bludgeoning',
    properties: ['light', 'thrown'],
    range: 'melee',
    thrownRange: [20, 60],
    weight: 2
  },
  'mace': {
    cost: '5gp',
    damage: [1, 6],
    damageType: 'bludgeoning',
    range: 'melee',
    weight: 4
  },
  'quarterstaff': {
    cost: '2sp',
    damage: [1, 6],
    damageType: 'bludgeoning',
    properties: ['versatile (1d8)'],
    range: 'melee',
    weight: 4
  },
  'sickle': {
    cost: '1gp',
    damage: [1, 4],
    damageType: 'slashing',
    properties: ['light'],
    range: 'melee',
    weight: 2
  },
  'spear': {
    cost: '1gp',
    damage: [1, 6],
    damageType: 'piercing',
    properties: ['thrown', 'versatile (1d8)'],
    range: 'melee',
    thrownRange: [20, 60],
    weight: 3
  }
}

export default weapons
