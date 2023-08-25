interface Animal {
    
    swim(): void;
  }
  
  class AquaAnimal implements Animal {
    swim() {
      console.log("je suis un bon nageur");
    }
  }
  
  class AnimalSimple implements Animal {
    swim() {
      console.log("Cannot swim");
    }
  }
  
  function saitSwim(animal: Animal) {
    if (animal instanceof AquaAnimal) {
      animal.swim();
    } else {
      console.log("MAlehureusement ne peut pas nager");
    }
  }
  
  const dolphin = new AquaAnimal();
  const cat = new AnimalSimple();
  saitSwim(dolphin);
  saitSwim(cat);
  
  