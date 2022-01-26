// ======== Exercise 1.6 ========
  // Goal:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  // We want to represent an inventoryItem as a structure where
  // the first entry is the item name and the second is the quantity

  const inventoryItem: [string, number] = ['fidget wibbit', 11];

  // later we destructure it
  const [nam, qty] = inventoryItem;

  const msg: string= addInventory(nam, qty);

  console.log('[Exercise 1.6]', msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }