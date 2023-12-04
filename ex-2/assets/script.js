const petProfiles = []

class Pet {
    constructor(_petName,_ownerName,_species,_breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed= _breed
    }
    hasSameOwnerAs(anotherPet){
        let output 
        if(this.ownerName === anotherPet.ownerName){
            output = this.petName + " ha lo stesso padrone di " + anotherPet.petName
        }else {
            output = this.petName + " non ha lo stesso padrone di " + anotherPet.petName
        }
        return output
    }
}

const formProfile = document.querySelector('#myForm');

formProfile.addEventListener('submit',function(event){
    event.preventDefault()



})

