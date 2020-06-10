const getTotalXp = (lvl: number) => {
  if (isNaN(lvl)) return 0;

  if (lvl === 1) return 100;

  return 85 * (lvl * lvl) - 95 * lvl;
};

class User {
  static getTotalXp = (lvl: number) => {
    return getTotalXp(lvl);
  };

  static getXpPercentage = (lvl: number, xp: number) => {
    return (xp / getTotalXp(lvl) || 0) * 100;
  };
}

export default User;
