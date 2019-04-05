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
  },

  getCustomersCash(custArrIndex) {
    return custArrIndex.cash;
  },

  getCustomersCashTotal(customerArray) {
    let custCash = 0;
    for (let customer of customerArray) {
      custCash += customer.cash;
    }
    return custCash;
  },

  removeCustomerCash(customerIndex, amount) {
    customerIndex.cash -= amount;
  },

  getCustomerPetCount(customerIndex) {
    return customerIndex.pets.length;
  },

  addPetToCustomer(customerIndex, pet) {
    customerIndex.pets.push(pet);
  },

  customerCanAffordPet(customerIndex, pet) {
    if ((customerIndex.cash - pet.price) < 0) {
      return false;
    } else {
      return true;
    }
  },

  sellPetToCustomer(shop, item, customerIndex) {
    if (item && myFunctions.customerCanAffordPet(customerIndex, item)) {
      myFunctions.addPetToCustomer(customerIndex, item);
      myFunctions.increasePetsSold(shop, 1);
      myFunctions.removeCustomerCash(customerIndex, item.price);
      myFunctions.addOrRemoveCash(shop, item.price);
    }
  }

};




module.exports = myFunctions;
