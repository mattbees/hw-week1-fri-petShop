myFunctions = {

  getName(shopName) {
    return shopName.name;
  },

  getTotalCash(shopName) {
    return shopName.admin.totalCash;
  },

  addOrRemoveCash(shop, amount) {
    shop.admin.totalCash += amount;
  },

  getPetsSold(shop) {
    return shop.admin.petsSold;
  },

  increasePetsSold(shop, numSold) {
    shop.admin.petsSold += numSold;
  },

  getStockCount(shop) {
    return shop.pets.length;
  },

  getPetsByBreed(shop, breedArg) {
    let breedTotal = 0;
    for (let pet of shop.pets) {
      if (pet.breed === breedArg) {
        breedTotal++;
      }
    }
    return breedTotal;
  },

  getPetByName(shop, petName) {
    for (let pet of shop.pets) {
      if (pet.name === petName) {
        return pet; // assumes that there will only be one pet with this petName
      }
    }
  },

  removePetByName(shop, petName) {
    for (let i=0; i<shop.pets.length; i++) {
      if (shop.pets[i].name === petName) {
        shop.pets.splice(i,1);
      }
    }
  },

  addPetToStock(shop, pet) {
    shop.pets.push(pet); // newPet object is declared in beforeEach statement
  }

};




module.exports = myFunctions;
