// Создайте класс, которые генерирует все возможные подмножества заданного множества. Реализуйте это рекурсивно

class SubsetGenerator {
    constructor(set) {
        this.set = set;
    }

    generateSubsetsRecursive(currentSubset=[], index=0) {
        if (index === this.set.length) {
            return [currentSubset];
        }

        let withoutCurrent = this.generateSubsetsRecursive([...currentSubset], index + 1);
        let withCurrent = this.generateSubsetsRecursive([...currentSubset, this.set[index]], index + 1);
        
        return [...withoutCurrent, ...withCurrent];
    }
}


let generator = new SubsetGenerator([1, 2, 3, 4]);
let subsets = generator.generateSubsetsRecursive();

for (let i = 0; i < subsets.length; i++) {
    console.log(subsets[i]);
}
